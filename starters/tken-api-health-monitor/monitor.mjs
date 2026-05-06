import fs from "node:fs";
import { performance } from "node:perf_hooks";

if (fs.existsSync(".env")) {
  for (const line of fs.readFileSync(".env", "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

export async function runHealthCheck() {
  const baseUrl = process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
  const apiKey = process.env.TKEN_API_KEY || "";
  const model = process.env.TKEN_MODEL || "free-model";
  const demoMode = process.env.DEMO_MODE !== "false" || !apiKey || apiKey === "your_tken_api_key";
  const started = performance.now();

  if (demoMode) {
    return {
      ok: true,
      demo: true,
      baseUrl,
      model,
      checks: [
        { name: "models", ok: true, status: 200 },
        { name: "chat", ok: true, status: 200 },
      ],
      latencyMs: Math.round(performance.now() - started),
    };
  }

  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
  const models = await fetch(`${baseUrl.replace(/\/$/, "")}/models`, { headers });
  const chat = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({ model, messages: [{ role: "user", content: "Say ok." }] }),
  });

  return {
    ok: models.ok && chat.ok,
    baseUrl,
    model,
    checks: [
      { name: "models", ok: models.ok, status: models.status },
      { name: "chat", ok: chat.ok, status: chat.status },
    ],
    latencyMs: Math.round(performance.now() - started),
  };
}

if (import.meta.url === `file://${process.argv[1].replaceAll("\\", "/")}`) {
  const report = await runHealthCheck();
  fs.writeFileSync("health-report.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.ok ? 0 : 1);
}
