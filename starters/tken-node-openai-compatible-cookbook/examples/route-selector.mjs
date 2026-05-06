const lowCostModel = process.env.LOW_COST_MODEL || "free-model";
const premiumModel = process.env.PREMIUM_MODEL || "premium-gpt";

export function chooseModel(task) {
  return /debug|security|multi-file|architecture|failing test/i.test(task) ? premiumModel : lowCostModel;
}

const task = process.argv.slice(2).join(" ") || "debug failing tests";
console.log(JSON.stringify({ ok: true, task, model: chooseModel(task), baseUrl: process.env.TKEN_BASE_URL || "https://www.tken.shop/v1" }, null, 2));
