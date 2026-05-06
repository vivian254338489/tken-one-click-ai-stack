const baseUrl = process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
const apiKey = process.env.TKEN_API_KEY || "";
const model = process.env.LOW_COST_MODEL || "free-model";

export async function chat(message) {
  if (!apiKey || apiKey === "your_tken_api_key") {
    return { demo: true, model, content: `Demo response for: ${message}` };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: message }],
    }),
  });

  return response.json();
}

if (import.meta.url === `file://${process.argv[1].replaceAll("\\", "/")}`) {
  console.log(JSON.stringify(await chat("Say hello in one sentence."), null, 2));
}
