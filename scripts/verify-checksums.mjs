import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");
const sumsPath = path.join(dist, "SHA256SUMS.txt");

if (!fs.existsSync(sumsPath)) {
  throw new Error("Missing dist/SHA256SUMS.txt. Run npm run package:kits first.");
}

const lines = fs.readFileSync(sumsPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

if (!lines.length) throw new Error("SHA256SUMS.txt is empty.");

for (const line of lines) {
  const match = line.match(/^([a-f0-9]{64})\s+(.+)$/);
  if (!match) throw new Error(`Invalid checksum line: ${line}`);

  const [, expected, file] = match;
  const filePath = path.join(dist, file);
  if (!fs.existsSync(filePath)) throw new Error(`Missing checksum target: ${file}`);

  const actual = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
  if (actual !== expected) throw new Error(`Checksum mismatch for ${file}`);
}

console.log(JSON.stringify({ ok: true, checked: lines.length }, null, 2));
