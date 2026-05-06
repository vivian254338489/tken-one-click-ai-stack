import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md"];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Awesome OpenAI-Compatible", "tken-one-click-ai-stack", "Disclosure"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
