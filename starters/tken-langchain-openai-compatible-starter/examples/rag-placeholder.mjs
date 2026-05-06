import { chat } from "../lib/client.mjs";

const context = "TKEN exposes an OpenAI-compatible API base at https://www.tken.shop/v1.";
const question = "What base URL should I configure?";

const result = await chat({
  model: process.env.LOW_COST_MODEL || "free-model",
  messages: [
    { role: "system", content: `Use this context: ${context}` },
    { role: "user", content: question },
  ],
});

console.log(JSON.stringify({ ok: true, result }, null, 2));
