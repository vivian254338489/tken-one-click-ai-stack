import archiver from "archiver";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");

const kits = [
  {
    name: "tken-full-stack",
    baseDir: ".",
    paths: [
      ".env.example",
      "Dockerfile",
      "docker-compose.yml",
      "docker-compose.full.yml",
      "package.json",
      "package-lock.json",
      "README.md",
      "DOWNLOADS.md",
      "QUICKSTART.md",
      "TROUBLESHOOTING.md",
      "COMMERCIAL.md",
      "LAUNCH_CHECKLIST.md",
      "MANIFEST.md",
      "START_HERE.txt",
      "START.bat",
      "START.sh",
      "SUPPORT.bat",
      "SUPPORT.sh",
      "api",
      "adapter-kits",
      "apps",
      "clients",
      "deploy",
      "docs",
      "examples",
      "growth",
      "install",
      "public",
      "scripts",
      "src",
      "site-templates",
      "starters",
      "tools",
      "railway.json",
      "render.yaml",
      "vercel.json",
      "LICENSE",
    ],
  },
  {
    name: "tken-gateway",
    baseDir: ".",
    paths: [".env.example", "Dockerfile", "docker-compose.yml", "package.json", "package-lock.json", "README.md", "DOWNLOADS.md", "QUICKSTART.md", "TROUBLESHOOTING.md", "COMMERCIAL.md", "LAUNCH_CHECKLIST.md", "START_HERE.txt", "START.bat", "START.sh", "SUPPORT.bat", "SUPPORT.sh", "adapter-kits", "api", "deploy", "docs", "growth", "public", "scripts", "src", "site-templates", "starters", "tools", "railway.json", "render.yaml", "vercel.json", "LICENSE"],
  },
  { name: "chatgpt-web-ui-tken-starter", baseDir: "starters/chatgpt-web-ui-tken-starter", paths: ["."] },
  { name: "tken-chatgpt-web-ui", baseDir: "apps/chatgpt-web", paths: ["."] },
  { name: "tken-claude-web-ui", baseDir: "apps/claude-web", paths: ["."] },
  { name: "tken-codex-client-kit", baseDir: "clients/codex", paths: ["."] },
  { name: "tken-openclaw-client-kit", baseDir: "clients/openclaw", paths: ["."] },
];

const ignored = new Set(["node_modules", ".git", "dist", ".env", "generated"]);

function shouldSkip(name) {
  return ignored.has(name) || name.endsWith(".log");
}

function addPath(archive, source, baseDir, targetPrefix = "") {
  const stats = fs.statSync(source);
  const base = path.basename(source);
  if (shouldSkip(base)) return;

  if (stats.isDirectory()) {
    for (const child of fs.readdirSync(source)) {
      addPath(archive, path.join(source, child), baseDir, source === baseDir ? "" : path.relative(baseDir, source));
    }
    return;
  }

  const relative = path.join(targetPrefix, base).replaceAll("\\", "/");
  archive.file(source, { name: relative });
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const kit of kits) {
  const zipPath = path.join(dist, `${kit.name}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });
  const baseDir = path.resolve(root, kit.baseDir || ".");

  archive.pipe(output);
  for (const entry of kit.paths) {
    const source = path.resolve(baseDir, entry);
    if (fs.existsSync(source)) addPath(archive, source, baseDir);
  }
  await archive.finalize();

  await new Promise((resolve, reject) => {
    output.on("close", resolve);
    output.on("error", reject);
  });

  console.log(`${kit.name}.zip ${archive.pointer()} bytes`);
}
