import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number.parseInt(process.env.PORT || "8787", 10);
const failures = [];
const warnings = [];

function checkNodeVersion() {
  const major = Number.parseInt(process.versions.node.split(".")[0], 10);
  if (!Number.isFinite(major) || major < 20) {
    failures.push(`Node.js 20+ is required. Current version: ${process.version}`);
  }
}

function checkFiles() {
  const required = [
    "package.json",
    "src/server.js",
    "src/app.js",
    "public/chatgpt.html",
    "public/claude.html",
    "public/admin.html",
    ".env.example",
  ];

  for (const file of required) {
    if (!fs.existsSync(path.join(root, file))) failures.push(`Missing required file: ${file}`);
  }
}

function checkEnv() {
  if (!fs.existsSync(path.join(root, ".env"))) {
    warnings.push("No .env found. START scripts will generate a demo .env with npm run setup.");
  }
}

function checkPort() {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => {
      failures.push(`Port ${port} is already in use. Close the other app or set PORT to another value.`);
      resolve();
    });

    server.once("listening", () => {
      server.close(resolve);
    });

    server.listen(port, "127.0.0.1");
  });
}

checkNodeVersion();
checkFiles();
checkEnv();
await checkPort();

if (warnings.length) {
  console.log("Preflight warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
  console.log("");
}

if (failures.length) {
  console.error("Preflight failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error("");
  console.error("See TROUBLESHOOTING.md for fixes.");
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, preflight: "passed", port }, null, 2));
