import fs from "node:fs";
import { handleChat } from "./app/api/chat/route.js";

const required = ["README.md", "LICENSE", "PROMOTION.md", ".env.example", "package.json", "server.mjs", "app/api/chat/route.js", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const result = await handleChat({ prompt: "Hello", premium: false });
if (result.status !== 200 || !JSON.stringify(result.body).includes("free-model")) {
  console.error(JSON.stringify(result, null, 2));
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Next.js", "https://www.tken.shop/v1", "/api/chat"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
