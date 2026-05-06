import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const args = new Set(process.argv.slice(2));
const shouldSpawn = args.has("--spawn");
const port = Number(process.env.PORT || 8787);
const baseUrl = `http://127.0.0.1:${port}`;
const projectRoot = fileURLToPath(new URL("..", import.meta.url));

let child;

async function waitForHealth() {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < 15000) {
    try {
      const response = await fetch(`${baseUrl}/health`);
      if (response.ok) return response.json();
      lastError = new Error(`Health returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw lastError || new Error("Health check timed out.");
}

async function checkRoute(path, expected) {
  const response = await fetch(`${baseUrl}${path}`);
  const text = await response.text();
  if (!response.ok || !text.includes(expected)) {
    throw new Error(`${path} failed: ${response.status}`);
  }
}

try {
  if (shouldSpawn) {
    child = spawn(process.execPath, ["src/server.js"], {
      cwd: projectRoot,
      env: {
        ...process.env,
        UPSTREAM_API_KEY: process.env.UPSTREAM_API_KEY || "smoke-test-key",
      },
      stdio: "inherit",
    });
  }

  const health = await waitForHealth();
  await checkRoute("/chatgpt", "ChatGPT-Style Web UI");
  await checkRoute("/claude", "Claude-Style Web UI");
  await checkRoute("/admin", "Gateway Status");
  await checkRoute("/guides/three-minute-chatgpt-gateway", "Build your own ChatGPT API gateway");
  await checkRoute("/compare/ai-api-pricing", "2026 AI API pricing");
  await checkRoute("/compare/gpt-vs-claude", "GPT vs Claude");
  await checkRoute("/compare/china-vs-us-models", "Chinese models vs US models");
  await checkRoute("/tools/api-cost-calculator", "How much can routing save your AI API bill?");

  const config = await fetch(`${baseUrl}/config/public`).then((response) => response.json());
  if (!config.models?.length) throw new Error("No public model routes found.");

  console.log(JSON.stringify({ ok: true, health, models: config.models.map((model) => model.id) }, null, 2));
} finally {
  child?.kill();
}
