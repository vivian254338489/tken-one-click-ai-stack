import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");

const zipFiles = fs.readdirSync(dist)
  .filter((file) => file.endsWith(".zip"))
  .sort();

if (!zipFiles.length) {
  throw new Error("No zip files found in dist. Run npm run package:kits first.");
}

const lines = zipFiles.map((file) => {
  const bytes = fs.readFileSync(path.join(dist, file));
  const digest = crypto.createHash("sha256").update(bytes).digest("hex");
  return `${digest}  ${file}`;
});

fs.writeFileSync(path.join(dist, "SHA256SUMS.txt"), `${lines.join("\n")}\n`);
console.log(lines.join("\n"));
