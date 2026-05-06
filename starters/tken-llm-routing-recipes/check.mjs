import fs from "node:fs";

const required = [
  "README.md",
  "LICENSE",
  "PROMOTION.md",
  "recipes/summarization.json",
  "recipes/extraction.json",
  "recipes/coding.json",
  "recipes/customer-support.json",
  "recipes/translation.json",
  "recipes/agent-planning.json",
  "examples/routing-policy.json",
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

for (const file of required.filter((file) => file.endsWith(".json"))) {
  JSON.parse(fs.readFileSync(file, "utf8"));
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
