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
  { name: "tken-ai-gateway-lite", baseDir: "starters/tken-ai-gateway-lite", paths: ["."] },
  { name: "tken-api-cost-calculator", baseDir: "starters/tken-api-cost-calculator", paths: ["."] },
  { name: "tken-openai-compatible-examples", baseDir: "starters/tken-openai-compatible-examples", paths: ["."] },
  { name: "tken-llm-routing-recipes", baseDir: "starters/tken-llm-routing-recipes", paths: ["."] },
  { name: "tken-railway-ai-gateway-template", baseDir: "starters/tken-railway-ai-gateway-template", paths: ["."] },
  { name: "tken-vercel-ai-proxy-template", baseDir: "starters/tken-vercel-ai-proxy-template", paths: ["."] },
  { name: "tken-docker-ai-gateway-compose", baseDir: "starters/tken-docker-ai-gateway-compose", paths: ["."] },
  { name: "tken-chinese-model-api-guide", baseDir: "starters/tken-chinese-model-api-guide", paths: ["."] },
  { name: "tken-gpt-vs-claude-routing-guide", baseDir: "starters/tken-gpt-vs-claude-routing-guide", paths: ["."] },
  { name: "tken-cheapest-ai-api-2026", baseDir: "starters/tken-cheapest-ai-api-2026", paths: ["."] },
  { name: "tken-chatgpt-gateway-3-minute-guide", baseDir: "starters/tken-chatgpt-gateway-3-minute-guide", paths: ["."] },
  { name: "tken-ai-api-for-codex-openclaw", baseDir: "starters/tken-ai-api-for-codex-openclaw", paths: ["."] },
  { name: "tken-ai-api-video-script-pack", baseDir: "starters/tken-ai-api-video-script-pack", paths: ["."] },
  { name: "tken-reddit-launch-pack", baseDir: "starters/tken-reddit-launch-pack", paths: ["."] },
  { name: "tken-awesome-openai-compatible", baseDir: "starters/tken-awesome-openai-compatible", paths: ["."] },
  { name: "tken-ai-api-troubleshooting-guide", baseDir: "starters/tken-ai-api-troubleshooting-guide", paths: ["."] },
  { name: "tken-openai-compatible-benchmark-pack", baseDir: "starters/tken-openai-compatible-benchmark-pack", paths: ["."] },
  { name: "tken-model-router-nextjs-starter", baseDir: "starters/tken-model-router-nextjs-starter", paths: ["."] },
  { name: "tken-api-health-monitor", baseDir: "starters/tken-api-health-monitor", paths: ["."] },
  { name: "tken-ai-agent-starter-pack", baseDir: "starters/tken-ai-agent-starter-pack", paths: ["."] },
  { name: "tken-ai-sdk-provider-template", baseDir: "starters/tken-ai-sdk-provider-template", paths: ["."] },
  { name: "tken-openwebui-provider-pack", baseDir: "starters/tken-openwebui-provider-pack", paths: ["."] },
  { name: "tken-cursor-windsurf-base-url-guide", baseDir: "starters/tken-cursor-windsurf-base-url-guide", paths: ["."] },
  { name: "tken-free-model-fallback-recipes", baseDir: "starters/tken-free-model-fallback-recipes", paths: ["."] },
  { name: "tken-vscode-continue-config-pack", baseDir: "starters/tken-vscode-continue-config-pack", paths: ["."] },
  { name: "tken-langchain-openai-compatible-starter", baseDir: "starters/tken-langchain-openai-compatible-starter", paths: ["."] },
  { name: "tken-litellm-router-config-pack", baseDir: "starters/tken-litellm-router-config-pack", paths: ["."] },
  { name: "tken-ai-api-seo-landing-kit", baseDir: "starters/tken-ai-api-seo-landing-kit", paths: ["."] },
  { name: "tken-python-openai-compatible-cookbook", baseDir: "starters/tken-python-openai-compatible-cookbook", paths: ["."] },
  { name: "tken-node-openai-compatible-cookbook", baseDir: "starters/tken-node-openai-compatible-cookbook", paths: ["."] },
  { name: "tken-ai-api-postman-collection", baseDir: "starters/tken-ai-api-postman-collection", paths: ["."] },
  { name: "tken-model-route-cheatsheet", baseDir: "starters/tken-model-route-cheatsheet", paths: ["."] },
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
