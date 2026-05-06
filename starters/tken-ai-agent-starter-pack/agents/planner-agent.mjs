import { chat } from "../lib/client.mjs";

export async function runPlannerAgent(task = "Create a 3-step launch checklist.") {
  return chat({
    model: process.env.LOW_COST_MODEL || "free-model",
    messages: [
      { role: "system", content: "Break user tasks into concise execution steps." },
      { role: "user", content: task },
    ],
  });
}
