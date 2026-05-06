import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const envPath = path.join(root, ".env");

if (!fs.existsSync(envPath)) {
  console.error("Missing .env. Run npm run setup or npm run wizard first.");
  process.exit(1);
}

const env = Object.fromEntries(
  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index), line.slice(index + 1)];
    }),
);

const warnings = [];

if (env.DEMO_MODE !== "false") warnings.push("Set DEMO_MODE=false for production.");
if (!env.UPSTREAM_API_KEY || env.UPSTREAM_API_KEY === "your_tken_api_key") warnings.push("Set a real UPSTREAM_API_KEY.");
if (!env.LOCAL_API_KEY || env.LOCAL_API_KEY === "local-dev-key" || env.LOCAL_API_KEY.length < 24) warnings.push("Set a strong LOCAL_API_KEY with at least 24 characters.");
if (!env.CORS_ORIGIN || env.CORS_ORIGIN === "*") warnings.push("Set CORS_ORIGIN to your production domain.");
if (!env.RATE_LIMIT_MAX || !Number.isFinite(Number(env.RATE_LIMIT_MAX)) || Number(env.RATE_LIMIT_MAX) <= 0) warnings.push("Set RATE_LIMIT_MAX to a positive number.");

if (warnings.length) {
  console.error("Production readiness warnings:");
  for (const warning of warnings) console.error(`- ${warning}`);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, productionReady: true }, null, 2));
