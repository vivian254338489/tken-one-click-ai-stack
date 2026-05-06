import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "public/index.html", "public/gpt-vs-claude-api.html", "public/chinese-model-api.html", "public/faq.html", "public/styles.css", "public/sitemap.xml", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

for (const file of ["public/index.html", "public/gpt-vs-claude-api.html", "public/chinese-model-api.html", "public/faq.html"]) {
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes("https://www.tken.shop") || !html.includes("<meta name=\"description\"")) {
    console.error(`Invalid SEO page: ${file}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
