import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

process.removeAllListeners("warning");
process.on("warning", (warning) => {
  if (warning.code !== "DEP0190") {
    console.warn(warning);
  }
});

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");
const tmp = path.join(os.tmpdir(), `tken-kit-validate-${Date.now()}`);

const kits = [
  {
    zip: "tken-full-stack.zip",
    files: ["README.md", "QUICKSTART.md", "COMMERCIAL.md", "LAUNCH_CHECKLIST.md", "START.bat", "package.json", "src/app.js", "apps/chatgpt-web/package.json", "clients/codex/install.mjs"],
    install: true,
    commands: [
      ["npm", ["run", "setup"]],
      ["npm", ["run", "check", "--", "--skip-web-install"]],
    ],
  },
  {
    zip: "tken-gateway.zip",
    files: ["README.md", "QUICKSTART.md", "COMMERCIAL.md", "LAUNCH_CHECKLIST.md", "START.bat", "package.json", "src/app.js", "Dockerfile", "vercel.json"],
    install: true,
    commands: [
      ["npm", ["run", "setup"]],
      ["npm", ["run", "smoke", "--", "--spawn"]],
    ],
  },
  {
    zip: "tken-chatgpt-web-ui.zip",
    files: ["README.md", "NEXT_STEPS.md", "START.bat", "START.sh", "configure.mjs", "package.json", "server.mjs", "public/index.html", "public/config.js"],
  },
  {
    zip: "tken-claude-web-ui.zip",
    files: ["README.md", "NEXT_STEPS.md", "START.bat", "START.sh", "configure.mjs", "package.json", "server.mjs", "public/index.html", "public/config.js"],
  },
  {
    zip: "tken-codex-client-kit.zip",
    files: ["README.md", "NEXT_STEPS.md", "START.bat", "START.sh", "config.example.json", "install.mjs", ".env.example", "quick-test.sh"],
    command: ["node", ["install.mjs"]],
  },
  {
    zip: "tken-openclaw-client-kit.zip",
    files: ["README.md", "NEXT_STEPS.md", "START.bat", "START.sh", "config.example.json", "install.mjs", ".env.example", "quick-test.sh"],
    command: ["node", ["install.mjs"]],
  },
];

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    shell: process.platform === "win32",
    stdio: "pipe",
    encoding: "utf8",
    env: { ...process.env, UPSTREAM_API_KEY: "kit-validation-key" },
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed in ${cwd}\n${result.error?.message || ""}\n${result.stdout || ""}\n${result.stderr || ""}`);
  }
}

async function extractZip(zipPath, target) {
  const result = spawnSync("tar", ["-xf", zipPath, "-C", target], {
    shell: false,
    stdio: "pipe",
    encoding: "utf8",
  });

  if (result.status !== 0) {
    throw new Error(`Failed to extract ${zipPath}\n${result.stdout}\n${result.stderr}`);
  }
}

fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });

for (const kit of kits) {
  const zipPath = path.join(dist, kit.zip);
  if (!fs.existsSync(zipPath)) throw new Error(`Missing ${zipPath}`);

  const target = path.join(tmp, kit.zip.replace(/\.zip$/, ""));
  fs.mkdirSync(target, { recursive: true });

  await extractZip(zipPath, target);

  const missing = kit.files.filter((file) => !fs.existsSync(path.join(target, file)));
  if (missing.length) throw new Error(`${kit.zip} missing files: ${missing.join(", ")}`);

  if (kit.install) {
    run("npm", ["install"], target);
  }

  for (const command of kit.commands || []) {
    run(command[0], command[1], target);
  }

  console.log(JSON.stringify({ ok: true, kit: kit.zip, checkedFiles: kit.files.length }, null, 2));
}

fs.rmSync(tmp, { recursive: true, force: true });
