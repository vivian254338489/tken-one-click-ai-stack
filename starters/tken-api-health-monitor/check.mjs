import fs from "node:fs";
import { runHealthCheck } from "./monitor.mjs";

const required = ["README.md", "LICENSE", "PROMOTION.md", ".env.example", "package.json", "monitor.mjs", "server.mjs", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const report = await runHealthCheck();
if (!report.ok || !report.demo) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Health Monitor", "https://www.tken.shop/v1", "npm run check:api"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
