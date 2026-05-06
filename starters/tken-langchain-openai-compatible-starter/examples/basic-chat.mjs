import { chat } from "../lib/client.mjs";

const result = await chat({
  model: process.env.LOW_COST_MODEL || "free-model",
  messages: [{ role: "user", content: "Say hello in one sentence." }],
});

console.log(JSON.stringify(result, null, 2));
