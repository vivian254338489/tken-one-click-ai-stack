export async function handleChat(payload = {}) {
  const baseUrl = process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
  const apiKey = process.env.TKEN_API_KEY || "";
  const demoMode = process.env.DEMO_MODE !== "false" || !apiKey || apiKey === "your_tken_api_key";
  const model = payload.model || (payload.premium ? process.env.PREMIUM_MODEL : process.env.DEFAULT_MODEL) || "free-model";
  const messages = payload.messages || [{ role: "user", content: payload.prompt || "Say hello in one sentence." }];

  if (demoMode) {
    return {
      status: 200,
      body: {
        id: "demo-chatcmpl",
        object: "chat.completion",
        model,
        choices: [{ index: 0, message: { role: "assistant", content: `Demo response from ${model}.` }, finish_reason: "stop" }],
      },
    };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, messages, temperature: payload.temperature ?? 0.3 }),
  });

  return { status: response.status, body: await response.json() };
}

export async function POST(request) {
  const result = await handleChat(await request.json());
  return Response.json(result.body, { status: result.status });
}
