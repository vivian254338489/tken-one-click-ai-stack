import fs from "node:fs";
import { execFileSync } from "node:child_process";

const [ownerRepo = "vivian254338489/tken-one-click-ai-stack", range = "HEAD~3..HEAD"] = process.argv.slice(2);
const [owner, repo] = ownerRepo.split("/");

if (!owner || !repo) {
  throw new Error("Usage: node scripts/sync-main-via-github-api.mjs owner/repo [git-range]");
}

const gh = "C:/Program Files/GitHub CLI/gh.exe";
const token = execFileSync(gh, ["auth", "token"], { encoding: "utf8" }).trim();
const remoteSha = execFileSync(gh, ["api", `repos/${owner}/${repo}/commits/main`, "--jq", ".sha"], { encoding: "utf8" }).trim();
const localSha = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const changedFiles = execFileSync("git", ["diff", "--name-only", range], { encoding: "utf8" })
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .sort();

if (changedFiles.length === 0) {
  console.log(JSON.stringify({ ok: true, changed: 0, remoteSha }, null, 2));
  process.exit(0);
}

async function githubApi(path, method = "GET", body = undefined) {
  const response = await fetch(`https://api.github.com/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${method} ${path} failed ${response.status}: ${text}`);
  }

  return text ? JSON.parse(text) : null;
}

const tree = [];

for (const filePath of changedFiles) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const content = fs.readFileSync(filePath).toString("base64");
    const blob = await githubApi(`repos/${owner}/${repo}/git/blobs`, "POST", {
      content,
      encoding: "base64",
    });

    tree.push({
      path: filePath.replaceAll("\\", "/"),
      mode: "100644",
      type: "blob",
      sha: blob.sha,
    });
  } else {
    tree.push({
      path: filePath.replaceAll("\\", "/"),
      mode: "100644",
      type: "blob",
      sha: null,
    });
  }
}

const newTree = await githubApi(`repos/${owner}/${repo}/git/trees`, "POST", {
  base_tree: remoteSha,
  tree,
});

const commit = await githubApi(`repos/${owner}/${repo}/git/commits`, "POST", {
  message: `Sync distribution asset launch records and starters\n\nLocal source head: ${localSha}`,
  tree: newTree.sha,
  parents: [remoteSha],
});

await githubApi(`repos/${owner}/${repo}/git/refs/heads/main`, "PATCH", {
  sha: commit.sha,
  force: false,
});

console.log(JSON.stringify({ ok: true, remoteSha, newSha: commit.sha, changed: changedFiles.length }, null, 2));
