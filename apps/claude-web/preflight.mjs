import fs from "node:fs";
import net from "node:net";
import path from "node:path";

const root = process.cwd();
const port = Number.parseInt(process.env.PORT || "8789", 10);
const failures = [];

function checkNodeVersion() {
  const major = Number.parseInt(process.versions.node.split(".")[0], 10);
  if (!Number.isFinite(major) || major < 20) {
    failures.push(`Node.js 20+ is required. Current version: ${process.version}`);
  }
}

function checkFiles() {
  for (const file of ["package.json", "server.mjs", "public/index.html", "public/config.js"]) {
    if (!fs.existsSync(path.join(root, file))) failures.push(`Missing required file: ${file}`);
  }
}

function checkPort() {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => {
      failures.push(`Port ${port} is already in use. Close the other app or set PORT to another value.`);
      resolve();
    });
    server.once("listening", () => server.close(resolve));
    server.listen(port, "127.0.0.1");
  });
}

checkNodeVersion();
checkFiles();
await checkPort();

if (failures.length) {
  console.error("Preflight failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, preflight: "passed", port }, null, 2));
