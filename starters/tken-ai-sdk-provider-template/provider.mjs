import fs from "node:fs";

if (fs.existsSync(".env")) {
  for (const line of fs.readFileSync(".env", "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

export function createTkenProvider(options = {}) {
  const baseUrl = options.baseUrl || process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
  const apiKey = options.apiKey || process.env.TKEN_API_KEY || "";
  const defaultModel = options.defaultModel || process.env.DEFAULT_MODEL || "free-model";
  const premiumModel = options.premiumModel || process.env.PREMIUM_MODEL || "premium-gpt";
  const demoMode = process.env.DEMO_MODE !== "false" || !apiKey || apiKey === "your_tken_api_key";

  async function chat({ messages, model = defaultModel, premium = false, temperature = 0.2 }) {
    const selectedModel = premium ? premiumModel : model;

    if (demoMode) {
      return {
        model: selectedModel,
        content: `Demo provider response from ${selectedModel}.`,
      };
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: selectedModel, messages, temperature }),
    });

    if (!response.ok) {
      throw new Error(`TKEN provider error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return {
      model: selectedModel,
      content: data.choices?.[0]?.message?.content || "",
      raw: data,
    };
  }

  return { baseUrl, defaultModel, premiumModel, chat };
}
