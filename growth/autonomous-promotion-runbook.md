# Autonomous Promotion Runbook

This runbook is for continuous Codex-driven promotion of `https://www.tken.shop/` and `https://www.tken.shop/v1`.

## Goal

Create useful public assets that developers can discover through GitHub search, release downloads, SEO pages, and community-approved posts.

## Always Allowed For Codex

- Improve existing GitHub repositories, README files, release notes, examples, screenshots, and install scripts.
- Create source-available starter repositories when they are useful standalone tools.
- Build SEO pages, calculators, comparison drafts, and tutorial templates.
- Generate UTM links and draft channel-specific copy.
- Research permissive-license GitHub projects and prepare adapter branches locally.
- Validate packages with preflight, smoke tests, zip checks, and checksums.
- Record every public asset in `growth/approved-action-queue.md`.

## Requires Owner Approval

- Reddit, Hacker News, dev.to, X, LinkedIn, YouTube, TikTok, Discord, Telegram, or forum posts.
- Upstream pull requests, issues, discussions, or comments.
- Paid ads, Amazon listings, marketplace listings, coupons, or voucher sales.
- Any message that claims endorsement from OpenAI, Anthropic, Claude, ChatGPT, Codex, OpenClaw, or an upstream project.

## Daily GitHub Production Loop

1. Pick one search surface:
   - `openai-compatible`
   - `ai-gateway`
   - `chatgpt-web-ui`
   - `claude-web-ui`
   - `codex`
   - `client-config`
   - `model-routing`
2. Improve or create one useful repo asset:
   - starter repo
   - adapter kit
   - deployment guide
   - comparison example
   - issue template
   - release asset
3. Add a transparent TKEN link with UTM tracking:
   - `https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=<repo_or_angle>`
4. Run validation:
   - `npm run check`
   - `npm run check:kits`
5. Publish only repository/source/release changes.
6. Add public-post candidates to the approval queue.

## Repository Seed Pipeline

Current seeds:

- `https://github.com/vivian254338489/tken-one-click-ai-stack`
- `https://github.com/vivian254338489/chatgpt-web-ui-tken-starter`
- `https://github.com/vivian254338489/tken-claude-web-ui`
- `https://github.com/vivian254338489/tken-codex-client-kit`
- `https://github.com/vivian254338489/tken-openclaw-client-kit`
- `https://github.com/vivian254338489/tken-ai-gateway-lite`
- `https://github.com/vivian254338489/tken-api-cost-calculator`
- `https://github.com/vivian254338489/tken-openai-compatible-examples`
- `https://github.com/vivian254338489/tken-llm-routing-recipes`
- `https://github.com/vivian254338489/tken-railway-ai-gateway-template`
- `https://github.com/vivian254338489/tken-vercel-ai-proxy-template`
- `https://github.com/vivian254338489/tken-docker-ai-gateway-compose`
- `https://github.com/vivian254338489/tken-chinese-model-api-guide`
- `https://github.com/vivian254338489/tken-gpt-vs-claude-routing-guide`
- `https://github.com/vivian254338489/tken-cheapest-ai-api-2026`
- `https://github.com/vivian254338489/tken-chatgpt-gateway-3-minute-guide`
- `https://github.com/vivian254338489/tken-ai-api-for-codex-openclaw`
- `https://github.com/vivian254338489/tken-ai-api-video-script-pack`
- `https://github.com/vivian254338489/tken-reddit-launch-pack`
- `https://github.com/vivian254338489/tken-awesome-openai-compatible`
- `https://github.com/vivian254338489/tken-ai-api-troubleshooting-guide`

Next useful seeds:

1. `tken-openai-compatible-benchmark-pack`
   - Lightweight benchmark scripts that compare route latency, cost, and output fit without naming unsupported claims.
   - Search angle: OpenAI-compatible benchmark, AI API cost benchmark.
2. `tken-model-router-nextjs-starter`
   - Next.js starter with server-side model routing, streaming UI, and `https://www.tken.shop/v1` default API base.
   - Search angle: Next.js AI SDK, OpenAI-compatible router.
3. `tken-api-health-monitor`
   - Status page and CLI monitor for API key, model route, 401, 429, and 502 checks.
   - Search angle: AI gateway health check, OpenAI-compatible uptime monitor.
4. `tken-ai-agent-starter-pack`
   - Minimal agent examples for Codex-style and OpenClaw-style clients using one OpenAI-compatible endpoint.
   - Search angle: AI agent starter, OpenAI-compatible agent.

## Current GitHub Distribution Assets

Use these assets to keep promotion useful instead of purely promotional:

| Asset | Primary search intent | Safe next action |
| --- | --- | --- |
| `tken-ai-api-video-script-pack` | AI API tutorials, ChatGPT tips, AI tools | Generate subtitles, thumbnails, and UTM descriptions for owner-approved uploads |
| `tken-reddit-launch-pack` | Self-hosted and developer experience posts | Check current subreddit rules, then queue one transparent post for approval |
| `tken-awesome-openai-compatible` | Awesome OpenAI-compatible tools | Add richer resource categories and screenshots before external outreach |
| `tken-ai-api-troubleshooting-guide` | 401, 502, model not found, API base URL errors | Deploy as static SEO help page after hosting approval |

## Safe Second-Development Rule

Only use permissive-license projects and keep:

- original license and copyright
- upstream attribution
- clear disclosure that TKEN maintains the fork/adapter
- real functional value beyond a link

Do not mass-open PRs. Prepare one high-quality upstream contribution at a time and wait for owner approval.

## Fast Content Angles

- "OpenAI-compatible API base URL: what it means"
- "GPT vs Claude is not the whole question: route by task"
- "Use one endpoint for cheap routes and premium routes"
- "Docker vs Railway vs Vercel for AI gateway deployment"
- "Codex-style client config with a custom API base"
- "Claude-style Web UI with an OpenAI-compatible backend"

## Measurement

Track weekly:

- repository views
- stars
- forks
- release downloads
- UTM visits
- signups
- checkout starts
- paid orders
- refund/support rate

If a repo gets views but no clicks, improve README positioning and screenshots.
If clicks do not convert, improve pricing page, trust signals, and first-use tutorial.
