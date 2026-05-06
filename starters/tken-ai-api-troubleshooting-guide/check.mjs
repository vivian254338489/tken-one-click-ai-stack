import fs from "node:fs";

const required = [
  "README.md",
  "LICENSE",
  "PROMOTION.md",
  "index.html",
  "styles.css",
  "guides/401-unauthorized.md",
  "guides/502-gateway-error.md",
  "guides/model-not-found.md",
  "guides/api-base-url.md",
  "guides/cors-error.md",
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["401", "502", "model not found", "https://www.tken.shop/v1"]) {
  if (!readme.toLowerCase().includes(text.toLowerCase())) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
