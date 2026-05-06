import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const args = new Set(process.argv.slice(2));

if (args.has("--skip-web-install")) {
  console.log(JSON.stringify({ ok: true, skipped: "web-app-health-check" }, null, 2));
  process.exit(0);
}

const apps = [
  {
    name: "chatgpt-web",
    cwd: path.join(root, "apps", "chatgpt-web"),
    port: 8788,
    expected: "tken-chatgpt-web-ui",
  },
  {
    name: "claude-web",
    cwd: path.join(root, "apps", "claude-web"),
    port: 8789,
    expected: "tken-claude-web-ui",
  },
];

async function waitForHealth(port, expected) {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < 15000) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/health`);
      const text = await response.text();
      if (response.ok && text.includes(expected)) return text;
      lastError = new Error(`Unexpected health response: ${response.status} ${text}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw lastError || new Error(`Timed out waiting for :${port}`);
}

for (const app of apps) {
  const child = spawn(process.execPath, ["server.mjs"], {
    cwd: app.cwd,
    env: process.env,
    stdio: "ignore",
  });

  try {
    const health = await waitForHealth(app.port, app.expected);
    console.log(JSON.stringify({ ok: true, app: app.name, health: JSON.parse(health) }, null, 2));
  } finally {
    child.kill();
  }
}
