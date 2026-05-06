import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const generatedDir = path.join(root, "generated");
const port = Number.parseInt(process.env.PORT || "8787", 10);
const baseUrl = `http://127.0.0.1:${port}`;

function fileExists(file) {
  return fs.existsSync(path.join(root, file));
}

function readEnvShape() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return { exists: false, keys: {} };

  const keys = {};
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#") || !line.includes("=")) continue;
    const key = line.slice(0, line.indexOf("="));
    const value = line.slice(line.indexOf("=") + 1);
    keys[key] = {
      present: Boolean(value),
      placeholder: ["your_tken_api_key", "local-dev-key", "*"].includes(value),
      length: value.length,
    };
  }
  return { exists: true, keys };
}

function checkPortOpen() {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: "127.0.0.1", port });
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => resolve(false));
    socket.setTimeout(1000, () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function fetchJson(route) {
  try {
    const response = await fetch(`${baseUrl}${route}`);
    return {
      ok: response.ok,
      status: response.status,
      body: response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : null,
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  package: "tken-one-click-ai-stack",
  version: JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version,
  system: {
    platform: process.platform,
    arch: process.arch,
    node: process.version,
    os: `${os.type()} ${os.release()}`,
  },
  files: {
    packageJson: fileExists("package.json"),
    envExample: fileExists(".env.example"),
    env: fileExists(".env"),
    server: fileExists("src/server.js"),
    app: fileExists("src/app.js"),
    chatgptUi: fileExists("public/chatgpt.html"),
    claudeUi: fileExists("public/claude.html"),
    adminUi: fileExists("public/admin.html"),
  },
  env: readEnvShape(),
  port: {
    value: port,
    serverResponding: await checkPortOpen(),
  },
  health: await fetchJson("/health"),
  publicConfig: await fetchJson("/config/public"),
};

fs.mkdirSync(generatedDir, { recursive: true });
const outPath = path.join(generatedDir, "support-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(`Generated ${path.relative(root, outPath).replaceAll("\\", "/")}`);
