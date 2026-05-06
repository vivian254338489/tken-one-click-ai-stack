import { chat } from "../lib/client.mjs";

function chooseModel(task) {
  const hard = /debug|multi-file|security|architecture|failing test/i.test(task);
  return hard ? process.env.PREMIUM_MODEL || "premium-gpt" : process.env.LOW_COST_MODEL || "free-model";
}

const task = process.argv.slice(2).join(" ") || "Summarize this document.";
const model = chooseModel(task);
const result = await chat({
  model,
  messages: [{ role: "user", content: task }],
});

console.log(JSON.stringify({ ok: true, task, model, result }, null, 2));
