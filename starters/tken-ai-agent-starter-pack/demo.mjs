import { runPlannerAgent } from "./agents/planner-agent.mjs";
import { runCodingAgent } from "./agents/coding-agent.mjs";
import { runSupportAgent } from "./agents/support-agent.mjs";

const results = [
  await runPlannerAgent(),
  await runCodingAgent(),
  await runSupportAgent(),
];

console.log(JSON.stringify({ ok: true, results }, null, 2));
