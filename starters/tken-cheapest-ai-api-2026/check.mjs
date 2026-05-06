import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "index.html", "styles.css"];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const html = fs.readFileSync("index.html", "utf8");
for (const text of ["cheapest AI API", "https://www.tken.shop/v1", "low-cost", "premium"]) {
  if (!html.toLowerCase().includes(text.toLowerCase())) {
    console.error(`index.html missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
