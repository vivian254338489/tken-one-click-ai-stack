import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const source = path.join(root, "adapter-kits", "chatgpt-web-ui-tken");
const targetArg = process.argv[2];

if (!targetArg) {
  console.error("Usage: node tools/install-adapter-kit.mjs <target-project-directory>");
  process.exit(1);
}

const targetRoot = path.resolve(targetArg);
const target = path.join(targetRoot, "docs", "tken-adapter");

if (!fs.existsSync(source)) {
  throw new Error(`Missing adapter source: ${source}`);
}

if (!fs.existsSync(targetRoot)) {
  throw new Error(`Target directory does not exist: ${targetRoot}`);
}

fs.mkdirSync(target, { recursive: true });

function copyDir(from, to) {
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

copyDir(source, target);

const out = {
  ok: true,
  copiedFrom: path.relative(root, source).replaceAll("\\", "/"),
  copiedTo: target,
  nextSteps: [
    "Review docs/tken-adapter/provider-map.md",
    "Copy docs/tken-adapter/.env.tken.example to the project root if useful",
    "Add docs/tken-adapter/README-snippet.md to the fork README with disclosure",
    "Run the upstream project's tests before publishing",
  ],
};

console.log(JSON.stringify(out, null, 2));
