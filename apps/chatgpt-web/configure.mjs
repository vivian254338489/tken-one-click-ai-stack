import fs from "node:fs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function ask(question, fallback) {
  const answer = (await rl.question(`${question} (${fallback}): `)).trim();
  return answer || fallback;
}

const apiBaseUrl = await ask("API base URL", "https://www.tken.shop/v1");
const defaultModel = await ask("Default model", "tken-free-model");
const premiumModel = await ask("Premium model", "premium-gpt-model");

const config = `window.TKEN_WEB_CONFIG = {
  apiBaseUrl: "${apiBaseUrl}",
  defaultModel: "${defaultModel}",
  models: [
    { id: "${defaultModel}", label: "Low-cost model" },
    { id: "${premiumModel}", label: "Premium GPT route" }
  ]
};
`;

fs.writeFileSync("public/config.js", config);
rl.close();
console.log("Updated public/config.js");
