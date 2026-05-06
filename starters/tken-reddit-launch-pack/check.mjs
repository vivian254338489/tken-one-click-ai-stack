import fs from "node:fs";

const required = [
  "README.md",
  "LICENSE",
  "PROMOTION.md",
  "drafts/selfhosted.md",
  "drafts/webdev.md",
  "drafts/openai.md",
  "drafts/chatgpt.md",
  "drafts/claudeai.md",
  "drafts/comment-followups.md",
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
if (!readme.includes("Do not post automatically")) {
  console.error("README must include posting safety rule.");
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
