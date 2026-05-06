import fs from "node:fs";

const required = ["index.html", "styles.css", "script.js", "README.md", "LICENSE", "PROMOTION.md"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const html = fs.readFileSync("index.html", "utf8");
for (const text of ["AI API Cost Calculator", "https://www.tken.shop/", "script.js", "styles.css"]) {
  if (!html.includes(text)) {
    console.error(`index.html missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
