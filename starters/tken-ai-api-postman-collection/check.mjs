import fs from "node:fs";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "postman/tken-ai-api.postman_collection.json", "postman/tken-ai-api.postman_environment.json", "http/chat.http", "docs/testing-checklist.md", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const collection = JSON.parse(fs.readFileSync("postman/tken-ai-api.postman_collection.json", "utf8"));
const environment = JSON.parse(fs.readFileSync("postman/tken-ai-api.postman_environment.json", "utf8"));
if (!JSON.stringify(collection).includes("/chat/completions") || !JSON.stringify(environment).includes("https://www.tken.shop/v1")) {
  console.error("Invalid Postman collection");
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Postman", "https://www.tken.shop/v1", "Chat Completion"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
