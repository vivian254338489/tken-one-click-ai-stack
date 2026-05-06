import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const rl = readline.createInterface({ input, output });

async function ask(question, fallback) {
  const answer = (await rl.question(`${question}${fallback ? ` (${fallback})` : ""}: `)).trim();
  return answer || fallback;
}

console.log("TKEN One-Click AI Stack setup wizard");
console.log("Press Enter to accept defaults. You can start in demo mode and add a real API key later.");
console.log("");

const upstreamBaseUrl = await ask("Upstream API base URL", "https://www.tken.shop/v1");
const upstreamApiKey = await ask("Upstream API key", "your_tken_api_key");
const demoMode = await ask("Demo mode true/false", upstreamApiKey === "your_tken_api_key" ? "true" : "false");
const localApiKey = await ask("Local gateway key", "local-dev-key");
const freeModel = await ask("Low-cost model route", "tken-free-model");
const premiumModel = await ask("Premium model route", "premium-gpt-model");
const corsOrigin = await ask("CORS origin for production", "*");

const env = `PORT=8787
HOST=0.0.0.0
LOCAL_API_KEY=${localApiKey}
UPSTREAM_BASE_URL=${upstreamBaseUrl}
UPSTREAM_API_KEY=${upstreamApiKey}
DEMO_MODE=${demoMode}
FREE_MODEL=${freeModel}
PREMIUM_MODEL=${premiumModel}
DEFAULT_ROUTE=free-model
MODEL_ROUTES={}
CORS_ORIGIN=${corsOrigin}
`;

fs.writeFileSync(path.join(root, ".env"), env);
rl.close();

console.log("");
console.log("Generated .env");
console.log("Start with: npm start");
