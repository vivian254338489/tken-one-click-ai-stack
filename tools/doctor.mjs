import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

const required = [
  "README.md",
  "QUICKSTART.md",
  "COMMERCIAL.md",
  "LAUNCH_CHECKLIST.md",
  "MANIFEST.md",
  "START.bat",
  "START.sh",
  "Dockerfile",
  "docker-compose.yml",
  "docker-compose.full.yml",
  "railway.json",
  "render.yaml",
  "vercel.json",
  "tools/bootstrap.mjs",
  "tools/doctor.mjs",
  "tools/preflight.mjs",
  "tools/wizard.mjs",
  "tools/production-check.mjs",
  "src/app.js",
  "api/index.js",
  "public/chatgpt.html",
  "public/claude.html",
  "public/admin.html",
  "apps/chatgpt-web/package.json",
  "apps/chatgpt-web/Dockerfile",
  "apps/chatgpt-web/vercel.json",
  "apps/chatgpt-web/public/index.html",
  "apps/claude-web/package.json",
  "apps/claude-web/Dockerfile",
  "apps/claude-web/vercel.json",
  "apps/claude-web/public/index.html",
  "clients/codex/install.mjs",
  "clients/codex/preflight.mjs",
  "clients/codex/config.example.json",
  "clients/openclaw/install.mjs",
  "clients/openclaw/preflight.mjs",
  "clients/openclaw/config.example.json",
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length) {
  console.error("Missing required package files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
