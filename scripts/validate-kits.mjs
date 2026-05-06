import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

process.removeAllListeners("warning");
process.on("warning", (warning) => {
  if (warning.code !== "DEP0190") {
    console.warn(warning);
  }
});

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");
const tmp = path.join(os.tmpdir(), `tken-kit-validate-${Date.now()}`);

const kits = [
  {
    zip: "tken-full-stack.zip",
    files: ["README.md", "DOWNLOADS.md", "QUICKSTART.md", "TROUBLESHOOTING.md", "COMMERCIAL.md", "LAUNCH_CHECKLIST.md", "START_HERE.txt", "START.bat", "SUPPORT.bat", "SUPPORT.sh", "package.json", "tools/preflight.mjs", "tools/open-browser.mjs", "tools/support-report.mjs", "tools/utm-builder.mjs", "tools/promo-pack.mjs", "tools/install-adapter-kit.mjs", "docs/preview.svg", "src/app.js", "adapter-kits/chatgpt-web-ui-tken/README.md", "adapter-kits/chatgpt-web-ui-tken/provider-map.md", "public/guides/three-minute-chatgpt-gateway.html", "public/compare/ai-api-pricing.html", "public/tools/api-cost-calculator.html", "site-templates/gpt-tutorial-site/index.html", "site-templates/claude-tutorial-site/index.html", "site-templates/ai-tools-nav/index.html", "growth/content-calendar.md", "growth/github-fork-targets.md", "growth/seo-site-network-plan.md", "growth/distribution-matrix.md", "growth/autonomous-promotion-runbook.md", "growth/approved-action-queue.md", "apps/chatgpt-web/package.json", "clients/codex/install.mjs"],
    install: true,
    commands: [
      ["npm", ["run", "setup"]],
      ["npm", ["run", "check", "--", "--skip-web-install"]],
    ],
  },
  {
    zip: "tken-gateway.zip",
    files: ["README.md", "DOWNLOADS.md", "QUICKSTART.md", "TROUBLESHOOTING.md", "COMMERCIAL.md", "LAUNCH_CHECKLIST.md", "START_HERE.txt", "START.bat", "SUPPORT.bat", "SUPPORT.sh", "package.json", "tools/preflight.mjs", "tools/open-browser.mjs", "tools/support-report.mjs", "tools/utm-builder.mjs", "tools/promo-pack.mjs", "tools/install-adapter-kit.mjs", "docs/preview.svg", "src/app.js", "adapter-kits/chatgpt-web-ui-tken/README.md", "adapter-kits/chatgpt-web-ui-tken/provider-map.md", "public/guides/three-minute-chatgpt-gateway.html", "public/compare/ai-api-pricing.html", "public/tools/api-cost-calculator.html", "site-templates/gpt-tutorial-site/index.html", "site-templates/claude-tutorial-site/index.html", "site-templates/ai-tools-nav/index.html", "growth/content-calendar.md", "growth/github-fork-targets.md", "growth/seo-site-network-plan.md", "growth/distribution-matrix.md", "growth/autonomous-promotion-runbook.md", "growth/approved-action-queue.md", "Dockerfile", "vercel.json"],
    install: true,
    commands: [
      ["npm", ["run", "setup"]],
      ["npm", ["run", "smoke", "--", "--spawn"]],
    ],
  },
  {
    zip: "chatgpt-web-ui-tken-starter.zip",
    files: ["README.md", "LICENSE", "DEPLOY.md", "PROMOTION.md", ".github/workflows/check.yml", "START.bat", "START.sh", "package.json", "preflight.mjs", "server.mjs", "smoke.mjs", "Dockerfile", "railway.json", "vercel.json", "public/index.html", "public/app.js", "public/config.js", "public/styles.css"],
    install: true,
    commands: [
      ["npm", ["run", "preflight"]],
    ],
  },
  {
    zip: "tken-chatgpt-web-ui.zip",
    files: ["README.md", "START_HERE.txt", "NEXT_STEPS.md", "START.bat", "START.sh", "SUPPORT.bat", "SUPPORT.sh", "preflight.mjs", "open-browser.mjs", "support-report.mjs", "configure.mjs", "package.json", "server.mjs", "public/index.html", "public/config.js"],
    commands: [
      ["node", ["support-report.mjs"]],
    ],
  },
  {
    zip: "tken-claude-web-ui.zip",
    files: ["README.md", "LICENSE", "DEPLOY.md", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "START_HERE.txt", "NEXT_STEPS.md", "START.bat", "START.sh", "SUPPORT.bat", "SUPPORT.sh", "preflight.mjs", "open-browser.mjs", "support-report.mjs", "configure.mjs", "package.json", "server.mjs", "public/index.html", "public/config.js"],
    commands: [
      ["node", ["support-report.mjs"]],
    ],
  },
  {
    zip: "tken-codex-client-kit.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "START_HERE.txt", "NEXT_STEPS.md", "START.bat", "START.sh", "SUPPORT.bat", "SUPPORT.sh", "preflight.mjs", "support-report.mjs", "config.example.json", "install.mjs", ".env.example", "quick-test.sh"],
    commands: [
      ["node", ["install.mjs"]],
      ["node", ["support-report.mjs"]],
    ],
  },
  {
    zip: "tken-openclaw-client-kit.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "START_HERE.txt", "NEXT_STEPS.md", "START.bat", "START.sh", "SUPPORT.bat", "SUPPORT.sh", "preflight.mjs", "support-report.mjs", "config.example.json", "install.mjs", ".env.example", "quick-test.sh"],
    commands: [
      ["node", ["install.mjs"]],
      ["node", ["support-report.mjs"]],
    ],
  },
  {
    zip: "tken-ai-gateway-lite.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "package.json", "server.mjs", "preflight.mjs", "smoke.mjs", "Dockerfile", "railway.json", "vercel.json"],
    install: true,
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-api-cost-calculator.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "script.js", "check.mjs"],
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-openai-compatible-examples.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "package.json", "examples/curl-chat.sh", "examples/node-chat.mjs", "examples/python-chat.py", "examples/web-ui-config.js", "configs/codex.tken.json", "configs/openclaw.tken.json", "check.mjs"],
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-llm-routing-recipes.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "recipes/summarization.json", "recipes/extraction.json", "recipes/coding.json", "recipes/customer-support.json", "recipes/translation.json", "recipes/agent-planning.json", "examples/routing-policy.json", "check.mjs"],
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-railway-ai-gateway-template.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "package.json", "server.mjs", "preflight.mjs", "smoke.mjs", "Dockerfile", "railway.json"],
    install: true,
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-vercel-ai-proxy-template.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "package.json", "vercel.json", "lib/gateway.mjs", "api/health.mjs", "api/models.mjs", "api/chat-completions.mjs", "check.mjs"],
    install: true,
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-docker-ai-gateway-compose.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", ".env.example", "package.json", "server.mjs", "preflight.mjs", "smoke.mjs", "Dockerfile", "docker-compose.yml"],
    install: true,
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-chinese-model-api-guide.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "check.mjs"],
    commands: [
      ["npm", ["run", "check"]],
    ],
  },
  {
    zip: "tken-gpt-vs-claude-routing-guide.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-cheapest-ai-api-2026.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-chatgpt-gateway-3-minute-guide.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-ai-api-for-codex-openclaw.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-ai-api-video-script-pack.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "scripts/01-three-minute-gateway.md", "scripts/02-stop-paying-premium.md", "scripts/03-chinese-model-routes.md", "scripts/04-claude-style-ui.md", "scripts/05-codex-openclaw-base-url.md", "scripts/06-cheapest-ai-api-routing.md", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-reddit-launch-pack.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "drafts/selfhosted.md", "drafts/webdev.md", "drafts/openai.md", "drafts/chatgpt.md", "drafts/claudeai.md", "drafts/comment-followups.md", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-awesome-openai-compatible.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
  {
    zip: "tken-ai-api-troubleshooting-guide.zip",
    files: ["README.md", "LICENSE", "PROMOTION.md", ".github/workflows/check.yml", "package.json", "index.html", "styles.css", "guides/401-unauthorized.md", "guides/502-gateway-error.md", "guides/model-not-found.md", "guides/api-base-url.md", "guides/cors-error.md", "check.mjs"],
    commands: [["npm", ["run", "check"]]],
  },
];

if (!fs.existsSync(path.join(dist, "SHA256SUMS.txt"))) {
  throw new Error("Missing dist/SHA256SUMS.txt");
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    shell: process.platform === "win32",
    stdio: "pipe",
    encoding: "utf8",
    env: { ...process.env, UPSTREAM_API_KEY: "kit-validation-key" },
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed in ${cwd}\n${result.error?.message || ""}\n${result.stdout || ""}\n${result.stderr || ""}`);
  }
}

async function extractZip(zipPath, target) {
  const result = spawnSync("tar", ["-xf", zipPath, "-C", target], {
    shell: false,
    stdio: "pipe",
    encoding: "utf8",
  });

  if (result.status !== 0) {
    throw new Error(`Failed to extract ${zipPath}\n${result.stdout}\n${result.stderr}`);
  }
}

fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });

for (const kit of kits) {
  const zipPath = path.join(dist, kit.zip);
  if (!fs.existsSync(zipPath)) throw new Error(`Missing ${zipPath}`);

  const target = path.join(tmp, kit.zip.replace(/\.zip$/, ""));
  fs.mkdirSync(target, { recursive: true });

  await extractZip(zipPath, target);

  const missing = kit.files.filter((file) => !fs.existsSync(path.join(target, file)));
  if (missing.length) throw new Error(`${kit.zip} missing files: ${missing.join(", ")}`);

  if (kit.install) {
    run("npm", ["install"], target);
  }

  for (const command of kit.commands || []) {
    run(command[0], command[1], target);
  }

  console.log(JSON.stringify({ ok: true, kit: kit.zip, checkedFiles: kit.files.length }, null, 2));
}

fs.rmSync(tmp, { recursive: true, force: true });
