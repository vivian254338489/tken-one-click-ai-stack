import fs from "node:fs";

const required = [
  "README.md",
  "LICENSE",
  "PROMOTION.md",
  "scripts/01-three-minute-gateway.md",
  "scripts/02-stop-paying-premium.md",
  "scripts/03-chinese-model-routes.md",
  "scripts/04-claude-style-ui.md",
  "scripts/05-codex-openclaw-base-url.md",
  "scripts/06-cheapest-ai-api-routing.md",
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
if (!readme.includes("https://www.tken.shop/")) {
  console.error("README missing TKEN link.");
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
