import { spawn } from "node:child_process";

const shouldSpawn = process.argv.includes("--spawn");
let child;

if (shouldSpawn) {
  child = spawn(process.execPath, ["server.mjs"], {
    env: { ...process.env, PORT: "8791", UPSTREAM_API_KEY: "your_tken_api_key" },
    stdio: "ignore",
  });
  await new Promise((resolve) => setTimeout(resolve, 900));
}

try {
  const response = await fetch("http://127.0.0.1:8791/health");
  if (!response.ok) throw new Error(`Health check failed: ${response.status}`);
  console.log(await response.text());
} finally {
  child?.kill();
}
