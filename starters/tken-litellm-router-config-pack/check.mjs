import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "configs/litellm.config.yaml", "configs/fallback-policy.json", "docs/setup.md", "docs/troubleshooting.md", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const yaml = fs.readFileSync("configs/litellm.config.yaml", "utf8");
const policy = JSON.parse(fs.readFileSync("configs/fallback-policy.json", "utf8"));
if (!yaml.includes("https://www.tken.shop/v1") || policy.fallbackModel !== "premium-gpt") {
  console.error("Invalid router config");
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["LiteLLM", "https://www.tken.shop/v1", "premium fallback"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
