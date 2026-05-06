import fs from "node:fs";
import { performance } from "node:perf_hooks";

const envPath = ".env";
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

const baseUrl = process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
const apiKey = process.env.TKEN_API_KEY || "";
const models = (process.env.BENCH_MODELS || "free-model,premium-gpt").split(",").map((item) => item.trim()).filter(Boolean);
const prompt = process.env.BENCH_PROMPT || "Summarize this in one sentence.";
const demoMode = process.env.DEMO_MODE !== "false" || !apiKey || apiKey === "your_tken_api_key";

async function runModel(model) {
  const started = performance.now();

  if (demoMode) {
    await new Promise((resolve) => setTimeout(resolve, 40 + model.length * 3));
    return {
      model,
      ok: true,
      demo: true,
      latencyMs: Math.round(performance.now() - started),
      estimatedInputChars: prompt.length,
    };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    }),
  });

  const text = await response.text();
  return {
    model,
    ok: response.ok,
    status: response.status,
    latencyMs: Math.round(performance.now() - started),
    estimatedInputChars: prompt.length,
    responsePreview: text.slice(0, 180),
  };
}

for (const model of models) {
  const result = await runModel(model);
  console.log(JSON.stringify(result));
}
