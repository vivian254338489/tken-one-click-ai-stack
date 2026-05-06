import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "configs/continue.config.json", "configs/model-policy.json", "docs/setup.md", "docs/troubleshooting.md", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync("configs/continue.config.json", "utf8"));
if (!JSON.stringify(config).includes("https://www.tken.shop/v1") || config.models.length < 2) {
  console.error("Invalid Continue config");
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["VS Code", "Continue", "https://www.tken.shop/v1"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
