import archiver from "archiver";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");

const kits = [
  {
    name: "tken-full-stack",
    paths: [
      ".env.example",
      "Dockerfile",
      "docker-compose.yml",
      "docker-compose.full.yml",
      "package.json",
      "package-lock.json",
      "README.md",
      "MANIFEST.md",
      "api",
      "apps",
      "clients",
      "deploy",
      "docs",
      "examples",
      "install",
      "public",
      "scripts",
      "src",
      "tools",
      "railway.json",
      "render.yaml",
      "vercel.json",
      "LICENSE",
    ],
  },
  { name: "tken-gateway", paths: [".env.example", "Dockerfile", "docker-compose.yml", "package.json", "package-lock.json", "README.md", "api", "deploy", "docs", "public", "scripts", "src", "tools", "railway.json", "render.yaml", "vercel.json", "LICENSE"] },
  { name: "tken-chatgpt-web-ui", paths: ["apps/chatgpt-web"] },
  { name: "tken-claude-web-ui", paths: ["apps/claude-web"] },
  { name: "tken-codex-client-kit", paths: ["clients/codex"] },
  { name: "tken-openclaw-client-kit", paths: ["clients/openclaw"] },
];

const ignored = new Set(["node_modules", ".git", "dist", ".env"]);

function shouldSkip(name) {
  return ignored.has(name) || name.endsWith(".log");
}

function addPath(archive, source, targetPrefix = "") {
  const stats = fs.statSync(source);
  const base = path.basename(source);
  if (shouldSkip(base)) return;

  if (stats.isDirectory()) {
    for (const child of fs.readdirSync(source)) {
      addPath(archive, path.join(source, child), path.join(targetPrefix, base));
    }
    return;
  }

  archive.file(source, { name: path.join(targetPrefix, base).replaceAll("\\", "/") });
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const kit of kits) {
  const zipPath = path.join(dist, `${kit.name}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);
  for (const entry of kit.paths) {
    const source = path.join(root, entry);
    if (fs.existsSync(source)) addPath(archive, source);
  }
  await archive.finalize();

  await new Promise((resolve, reject) => {
    output.on("close", resolve);
    output.on("error", reject);
  });

  console.log(`${kit.name}.zip ${archive.pointer()} bytes`);
}
