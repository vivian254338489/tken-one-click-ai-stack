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

Next useful seeds:

1. `tken-ai-gateway-lite`
   - Minimal OpenAI-compatible gateway only.
   - Search angle: Docker, Railway, Vercel, API gateway.
2. `tken-api-cost-calculator`
   - Static calculator for GPT vs Claude vs low-cost route estimates.
   - Search angle: AI API pricing, cost calculator.
3. `tken-openai-compatible-examples`
   - Copy-paste examples for curl, Node.js, Python, Codex-style clients, and Web UIs.
   - Search angle: base URL, model routing, OpenAI-compatible.
4. `tken-llm-routing-recipes`
   - Task-based route examples: summarization, extraction, coding, translation, customer support.
   - Search angle: cheap fallback routes and premium route control.

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
