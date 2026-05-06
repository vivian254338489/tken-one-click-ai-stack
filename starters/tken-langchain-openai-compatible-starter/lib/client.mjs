import fs from "node:fs";

if (fs.existsSync(".env")) {
  for (const line of fs.readFileSync(".env", "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

export async function chat({ model, messages, temperature = 0.2 }) {
  const baseUrl = process.env.TKEN_BASE_URL || "https://www.tken.shop/v1";
  const apiKey = process.env.TKEN_API_KEY || "";
  const demoMode = process.env.DEMO_MODE !== "false" || !apiKey || apiKey === "your_tken_api_key";

  if (demoMode) {
    return { model, content: `Demo LangChain-style response from ${model}.` };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, messages, temperature }),
  });

  if (!response.ok) throw new Error(`API error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  return { model, content: data.choices?.[0]?.message?.content || "" };
}
