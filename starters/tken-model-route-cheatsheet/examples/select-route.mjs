import fs from "node:fs";

const policy = JSON.parse(fs.readFileSync("cheatsheets/routes.json", "utf8"));
const task = (process.argv[2] || "coding").toLowerCase();
const match = policy.routes.find((route) => task.includes(route.task)) || policy.routes[0];

console.log(JSON.stringify({ ok: true, task, model: match.model, baseUrl: policy.baseUrl }, null, 2));
