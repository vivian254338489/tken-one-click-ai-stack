import { spawn } from "node:child_process";

const url = process.argv[2];
const delayMs = Number.parseInt(process.argv[3] || "2000", 10);

if (!url) {
  console.error("Usage: node tools/open-browser.mjs <url> [delayMs]");
  process.exit(1);
}

setTimeout(() => {
  const command = process.platform === "win32"
    ? "cmd"
    : process.platform === "darwin"
      ? "open"
      : "xdg-open";
  const args = process.platform === "win32"
    ? ["/c", "start", "", url]
    : [url];

  const child = spawn(command, args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.on("error", () => {
    // Opening the browser is a convenience. The server should still start if it fails.
  });
  child.unref();
}, Number.isFinite(delayMs) ? delayMs : 2000);
