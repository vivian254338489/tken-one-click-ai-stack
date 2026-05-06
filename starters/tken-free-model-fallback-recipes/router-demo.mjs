import fs from "node:fs";

const recipes = fs.readdirSync("recipes")
  .filter((file) => file.endsWith(".json"))
  .map((file) => JSON.parse(fs.readFileSync(`recipes/${file}`, "utf8")));

function chooseRoute(recipe, signals = []) {
  const shouldEscalate = signals.some((signal) => recipe.escalateWhen.includes(signal));
  return shouldEscalate ? recipe.fallbackModel : recipe.defaultModel;
}

const demo = recipes.map((recipe) => ({
  recipe: recipe.name,
  normalRoute: chooseRoute(recipe, []),
  escalatedRoute: chooseRoute(recipe, [recipe.escalateWhen[0]]),
  apiBaseUrl: recipe.apiBaseUrl,
}));

console.log(JSON.stringify({ ok: true, demo }, null, 2));
