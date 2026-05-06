import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "configs/openwebui.env.example", "configs/model-routes.json", "docs/setup-checklist.md", "docs/troubleshooting.md", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const routes = JSON.parse(fs.readFileSync("configs/model-routes.json", "utf8"));
if (routes.baseUrl !== "https://www.tken.shop/v1" || routes.routes.length < 2) {
  console.error("Invalid route config");
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Open WebUI", "https://www.tken.shop/v1", "free-model"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
