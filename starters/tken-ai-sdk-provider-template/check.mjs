import fs from "node:fs";
import { spawnSync } from "node:child_process";

const required = ["README.md", "LICENSE", "PROMOTION.md", ".env.example", "package.json", "provider.mjs", "demo.mjs", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["AI SDK Provider", "https://www.tken.shop/v1", "npm run demo"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

const result = spawnSync("node", ["demo.mjs"], { env: { ...process.env, DEMO_MODE: "true" }, encoding: "utf8" });
if (result.status !== 0 || !result.stdout.includes("\"ok\": true")) {
  console.error(result.stdout);
  console.error(result.stderr);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
