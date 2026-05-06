import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const generatedDir = path.join(root, "generated");
const port = Number.parseInt(process.env.PORT || "8789", 10);
const baseUrl = `http://127.0.0.1:${port}`;

function fileExists(file) {
  return fs.existsSync(path.join(root, file));
}

function readPublicConfigShape() {
  const configPath = path.join(root, "public", "config.js");
  if (!fs.existsSync(configPath)) return { exists: false };
  const content = fs.readFileSync(configPath, "utf8");
  return {
    exists: true,
    hasTkenConfig: content.includes("TKEN_WEB_CONFIG"),
    usesTkenBaseUrl: content.includes("https://www.tken.shop/v1"),
    size: content.length,
  };
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

async function fetchHealth() {
  try {
    const response = await fetch(`${baseUrl}/health`);
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
  package: "tken-claude-web-ui",
  version: JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version,
  system: {
    platform: process.platform,
    arch: process.arch,
    node: process.version,
    os: `${os.type()} ${os.release()}`,
  },
  files: {
    packageJson: fileExists("package.json"),
    server: fileExists("server.mjs"),
    appHtml: fileExists("public/index.html"),
    config: fileExists("public/config.js"),
    startBat: fileExists("START.bat"),
    startSh: fileExists("START.sh"),
  },
  config: readPublicConfigShape(),
  port: {
    value: port,
    serverResponding: await checkPortOpen(),
  },
  health: await fetchHealth(),
};

fs.mkdirSync(generatedDir, { recursive: true });
const outPath = path.join(generatedDir, "support-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(`Generated ${path.relative(root, outPath).replaceAll("\\", "/")}`);
