# Hacker News Draft

HN is sensitive to marketing. Use only for a genuinely useful Show HN, and only after the repo is polished and the site is live.

Title:

```text
Show HN: One-click OpenAI-compatible gateway with ChatGPT and Claude-style UIs
```

Post:

```text
Hi HN,

I built a small one-click OpenAI-compatible gateway demo for testing multi-model routing without rewriting clients.

It includes:

- `/v1/chat/completions` compatible gateway
- ChatGPT-style web UI
- Claude-style web UI
- Docker, Railway, Render, and Vercel files
- Codex/OpenClaw-style config templates
- demo mode for local testing

The main idea is route-by-task:

- cheap/fast route for extraction, formatting, drafts
- premium route for coding, hard reasoning, final answers

Repo:
https://github.com/vivian254338489/tken-one-click-ai-stack

Disclosure: I work on TKEN-related tooling. The stack defaults to a TKEN-compatible base URL, but the gateway can be pointed at any compatible provider.
```
