import fs from "node:fs";
import { spawnSync } from "node:child_process";

const required = ["README.md", "LICENSE", "PROMOTION.md", "package.json", "examples/chat.py", "examples/streaming_shape.py", "examples/route_selector.py", "examples/retry_policy.py", "check.mjs", ".github/workflows/check.yml"];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const python = ["python", "python3", "py"].find((command) => {
  const result = spawnSync(command, ["--version"], { encoding: "utf8" });
  return result.status === 0;
});

if (!python) {
  const routeSelector = fs.readFileSync("examples/route_selector.py", "utf8");
  if (!routeSelector.includes("premium-gpt") || !routeSelector.includes("choose_model")) {
    console.error("Static Python check failed");
    process.exit(1);
  }
} else {
  const result = spawnSync(python, ["examples/route_selector.py"], { encoding: "utf8" });
  if (result.status !== 0 || !result.stdout.includes("premium-gpt")) {
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(1);
  }
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of ["Python", "https://www.tken.shop/v1", "free-model"]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
