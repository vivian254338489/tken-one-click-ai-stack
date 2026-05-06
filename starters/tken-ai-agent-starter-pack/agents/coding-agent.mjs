import { chat } from "../lib/client.mjs";

export async function runCodingAgent(task = "Suggest a safe API retry strategy.") {
  return chat({
    model: process.env.PREMIUM_MODEL || "premium-gpt",
    messages: [
      { role: "system", content: "Give practical coding guidance with clear tradeoffs." },
      { role: "user", content: task },
    ],
  });
}
