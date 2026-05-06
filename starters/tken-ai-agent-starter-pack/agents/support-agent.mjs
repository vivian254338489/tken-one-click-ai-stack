import { chat } from "../lib/client.mjs";

export async function runSupportAgent(issue = "Customer sees a 401 error from an API call.") {
  return chat({
    model: process.env.LOW_COST_MODEL || "free-model",
    messages: [
      { role: "system", content: "Classify API support issues and suggest the next check." },
      { role: "user", content: issue },
    ],
  });
}
