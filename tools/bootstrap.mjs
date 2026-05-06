import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

function readArg(name, fallback) {
  const index = process.argv.indexOf(name);
  if (index !== -1 && process.argv[index + 1]) return process.argv[index + 1];
  return fallback;
}

const config = {
  upstreamBaseUrl: readArg("--upstream-base-url", process.env.UPSTREAM_BASE_URL || "https://www.tken.shop/v1"),
  localApiKey: readArg("--local-api-key", process.env.LOCAL_API_KEY || "local-dev-key"),
  upstreamApiKey: readArg("--upstream-api-key", process.env.UPSTREAM_API_KEY || "your_tken_api_key"),
  freeModel: readArg("--free-model", process.env.FREE_MODEL || "tken-free-model"),
  premiumModel: readArg("--premium-model", process.env.PREMIUM_MODEL || "premium-gpt-model"),
};

const env = `PORT=8787
HOST=0.0.0.0
LOCAL_API_KEY=${config.localApiKey}
UPSTREAM_BASE_URL=${config.upstreamBaseUrl}
UPSTREAM_API_KEY=${config.upstreamApiKey}
DEMO_MODE=${config.upstreamApiKey === "your_tken_api_key" ? "true" : "false"}
FREE_MODEL=${config.freeModel}
PREMIUM_MODEL=${config.premiumModel}
DEFAULT_ROUTE=free-model
MODEL_ROUTES={}
CORS_ORIGIN=*
`;

fs.writeFileSync(path.join(root, ".env"), env);

const generatedDir = path.join(root, "generated");
fs.mkdirSync(generatedDir, { recursive: true });

fs.writeFileSync(
  path.join(generatedDir, "codex.tken.json"),
  JSON.stringify({
    provider: "tken",
    base_url: config.upstreamBaseUrl,
    api_key_env: "TKEN_API_KEY",
    models: {
      default: config.freeModel,
      premium: config.premiumModel,
    },
  }, null, 2),
);

fs.writeFileSync(
  path.join(generatedDir, "openclaw.tken.json"),
  JSON.stringify({
    providers: [
      {
        name: "tken",
        type: "openai-compatible",
        baseUrl: config.upstreamBaseUrl,
        apiKeyEnv: "TKEN_API_KEY",
        models: [config.freeModel, config.premiumModel],
      },
    ],
    routing: {
      defaultProvider: "tken",
      defaultModel: config.freeModel,
      premiumModel: config.premiumModel,
    },
  }, null, 2),
);

const webConfig = `window.TKEN_WEB_CONFIG = {
  apiBaseUrl: "${config.upstreamBaseUrl}",
  defaultModel: "${config.freeModel}",
  models: [
    { id: "${config.freeModel}", label: "Low-cost model" },
    { id: "${config.premiumModel}", label: "Premium GPT route" }
  ]
};
`;

for (const appName of ["chatgpt-web", "claude-web"]) {
  const configPath = path.join(root, "apps", appName, "public", "config.js");
  if (fs.existsSync(path.dirname(configPath))) {
    fs.writeFileSync(configPath, webConfig);
  }
}

console.log("Generated .env and client config files.");
console.log(`API base URL: ${config.upstreamBaseUrl}`);
