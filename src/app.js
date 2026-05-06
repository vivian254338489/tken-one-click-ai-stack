import express from "express";
import rateLimit from "express-rate-limit";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const defaultRoutes = {
  "free-model": process.env.FREE_MODEL || "tken-free-model",
  "premium-gpt": process.env.PREMIUM_MODEL || "premium-gpt-model",
};

function isDemoKey(value) {
  return !value || value === "your_tken_api_key" || value === "demo";
}

function parseExtraRoutes() {
  if (!process.env.MODEL_ROUTES) return {};

  try {
    const parsed = JSON.parse(process.env.MODEL_ROUTES);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed)
        .filter(([key, value]) => key && typeof value === "string" && value.trim())
        .map(([key, value]) => [key, value.trim()]),
    );
  } catch {
    return {};
  }
}

function getModelRoutes() {
  return {
    ...defaultRoutes,
    ...parseExtraRoutes(),
  };
}

function getPublicModels() {
  const routes = getModelRoutes();
  return Object.keys(routes).map((id) => ({
    id,
    label: id === "free-model"
      ? "Free / low-cost route"
      : id === "premium-gpt"
        ? "Premium GPT route"
        : id,
  }));
}

export function createApp() {
  const app = express();

  const upstreamBaseUrl = process.env.UPSTREAM_BASE_URL || "https://www.tken.shop/v1";
  const upstreamApiKey = process.env.UPSTREAM_API_KEY || "";
  const localApiKey = process.env.LOCAL_API_KEY || "local-dev-key";
  const defaultRoute = process.env.DEFAULT_ROUTE || "free-model";
  const corsOrigin = process.env.CORS_ORIGIN || "*";
  const demoMode = process.env.DEMO_MODE === "true" || isDemoKey(upstreamApiKey);
  const configuredRateLimitWindowMs = Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10);
  const configuredRateLimitMax = Number.parseInt(process.env.RATE_LIMIT_MAX || "120", 10);
  const rateLimitWindowMs = Number.isFinite(configuredRateLimitWindowMs) && configuredRateLimitWindowMs > 0
    ? configuredRateLimitWindowMs
    : 60000;
  const rateLimitMax = Number.isFinite(configuredRateLimitMax) && configuredRateLimitMax > 0
    ? configuredRateLimitMax
    : 120;

  app.disable("x-powered-by");
  app.use(express.json({ limit: "2mb" }));
  app.use(rateLimit({
    windowMs: rateLimitWindowMs,
    max: rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false,
  }));

  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Authorization,Content-Type");
    if (req.method === "OPTIONS") return res.status(204).end();
    next();
  });

  app.use("/assets", express.static(path.join(publicDir, "assets")));

  app.get("/", (_req, res) => res.redirect("/chatgpt"));
  app.get("/chatgpt", (_req, res) => res.sendFile(path.join(publicDir, "chatgpt.html")));
  app.get("/claude", (_req, res) => res.sendFile(path.join(publicDir, "claude.html")));
  app.get("/admin", (_req, res) => res.sendFile(path.join(publicDir, "admin.html")));

  app.get("/health", (_req, res) => {
    res.json({
      ok: true,
      service: "tken-one-click-ai-stack",
      upstream: upstreamBaseUrl,
      defaultRoute,
      routes: Object.keys(getModelRoutes()),
      demoMode,
    });
  });

  app.get("/config/public", (_req, res) => {
    const models = getPublicModels();
    res.json({
      defaultModel: models.some((model) => model.id === defaultRoute) ? defaultRoute : models[0]?.id,
      models,
      upstreamBaseUrl,
      demoMode,
    });
  });

  app.get("/v1/models", (_req, res) => {
    res.json({
      object: "list",
      data: getPublicModels().map((model) => ({
        id: model.id,
        object: "model",
        owned_by: "tken-gateway",
      })),
    });
  });

  app.post("/v1/chat/completions", async (req, res) => {
    const auth = req.headers.authorization || "";
    if (localApiKey && auth !== `Bearer ${localApiKey}`) {
      return res.status(401).json({
        error: {
          message: "Unauthorized. Set Authorization: Bearer LOCAL_API_KEY.",
          type: "auth_error",
        },
      });
    }

    const modelRoutes = getModelRoutes();
    const body = { ...req.body };
    const requestedModel = body.model || defaultRoute;
    body.model = modelRoutes[requestedModel] || requestedModel;

    if (demoMode) {
      const lastMessage = Array.isArray(body.messages) ? body.messages.at(-1)?.content || "" : "";
      return res.json({
        id: `chatcmpl-demo-${Date.now()}`,
        object: "chat.completion",
        created: Math.floor(Date.now() / 1000),
        model: requestedModel,
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: [
                "Demo mode is active. Your gateway, web UI, model selector, and OpenAI-compatible response format are working.",
                "",
                `Local route: ${requestedModel}`,
                `Upstream model: ${body.model}`,
                lastMessage ? `Your message: ${lastMessage}` : "",
                "",
                "To use real models, set UPSTREAM_API_KEY in .env and restart the server.",
              ].filter(Boolean).join("\n"),
            },
            finish_reason: "stop",
          },
        ],
      });
    }

    try {
      const upstream = await fetch(`${upstreamBaseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstreamApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      res.status(upstream.status);
      res.type(upstream.headers.get("content-type") || "application/json");

      if (body.stream && upstream.body) {
        Readable.fromWeb(upstream.body).pipe(res);
        return;
      }

      const text = await upstream.text();
      res.send(text);
    } catch (error) {
      res.status(502).json({
        error: {
          message: error.message,
          type: "upstream_error",
        },
      });
    }
  });

  return app;
}

export default createApp();
