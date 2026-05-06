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
- `https://github.com/vivian254338489/tken-openai-compatible-benchmark-pack`
- `https://github.com/vivian254338489/tken-model-router-nextjs-starter`
- `https://github.com/vivian254338489/tken-api-health-monitor`
- `https://github.com/vivian254338489/tken-ai-agent-starter-pack`
- `https://github.com/vivian254338489/tken-ai-sdk-provider-template`
- `https://github.com/vivian254338489/tken-openwebui-provider-pack`
- `https://github.com/vivian254338489/tken-cursor-windsurf-base-url-guide`
- `https://github.com/vivian254338489/tken-free-model-fallback-recipes`
- `https://github.com/vivian254338489/tken-vscode-continue-config-pack`
- `https://github.com/vivian254338489/tken-langchain-openai-compatible-starter`
- `https://github.com/vivian254338489/tken-litellm-router-config-pack`
- `https://github.com/vivian254338489/tken-ai-api-seo-landing-kit`
- `https://github.com/vivian254338489/tken-python-openai-compatible-cookbook`
- `https://github.com/vivian254338489/tken-node-openai-compatible-cookbook`
- `https://github.com/vivian254338489/tken-ai-api-postman-collection`
- `https://github.com/vivian254338489/tken-model-route-cheatsheet`

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

These four seeds are now in local production and should be published as standalone GitHub repositories before the next batch.

Next useful seeds after publishing:

1. `tken-ai-sdk-provider-template`
   - Provider adapter pattern for JavaScript AI SDK-style apps.
   - Search angle: AI SDK OpenAI-compatible provider.
2. `tken-openwebui-provider-pack`
   - Provider preset docs for Open WebUI and compatible frontends.
   - Search angle: Open WebUI OpenAI-compatible endpoint.
3. `tken-cursor-windsurf-base-url-guide`
   - Coding editor config guide for custom API base URLs.
   - Search angle: Cursor API base URL, Windsurf OpenAI-compatible.
4. `tken-free-model-fallback-recipes`
   - Fallback recipes for low-cost/free routes with premium escalation.
   - Search angle: cheap AI model fallback, LLM router.

These four seeds are now in local production and should be published as standalone GitHub repositories before the next batch.

Next useful seeds after this batch:

1. `tken-vscode-continue-config-pack`
   - Continue.dev-style local coding assistant config examples.
   - Search angle: VS Code AI custom OpenAI-compatible endpoint.
2. `tken-langchain-openai-compatible-starter`
   - LangChain-style examples for one base URL and route escalation.
   - Search angle: LangChain OpenAI-compatible base URL.
3. `tken-litellm-router-config-pack`
   - LiteLLM-style route config snippets and fallback policies.
   - Search angle: LiteLLM router cheap model fallback.
4. `tken-ai-api-seo-landing-kit`
   - Static comparison landing pages and FAQ blocks for organic search.
   - Search angle: cheapest AI API, GPT vs Claude API price.

These four seeds are now in local production and should be published as standalone GitHub repositories before the next batch.

Next useful seeds after this batch:

1. `tken-python-openai-compatible-cookbook`
   - Python examples for chat, streaming-shaped calls, retries, and route selection.
   - Search angle: Python OpenAI-compatible API base URL.
2. `tken-node-openai-compatible-cookbook`
   - Node.js examples for server apps and webhooks.
   - Search angle: Node.js OpenAI-compatible API.
3. `tken-ai-api-postman-collection`
   - Postman/HTTP client collection for quick testing.
   - Search angle: OpenAI-compatible Postman collection.
4. `tken-model-route-cheatsheet`
   - Markdown cheat sheet for common task-to-route choices.
   - Search angle: AI model routing cheat sheet.

These four seeds are now in local production and should be published as standalone GitHub repositories before the next batch.

Next useful seeds after this batch:

1. `tken-fastapi-ai-gateway-starter`
   - FastAPI proxy starter for OpenAI-compatible routes.
   - Search angle: FastAPI OpenAI-compatible gateway.
2. `tken-express-ai-gateway-starter`
   - Express proxy starter with route selection and health checks.
   - Search angle: Express OpenAI-compatible proxy.
3. `tken-cloudflare-worker-ai-proxy`
   - Cloudflare Worker proxy template for one API base URL.
   - Search angle: Cloudflare Worker OpenAI-compatible proxy.
4. `tken-ai-api-status-page-template`
   - Static status and incident page template for API gateway operators.
   - Search angle: AI API status page template.

## Current GitHub Distribution Assets

Use these assets to keep promotion useful instead of purely promotional:

| Asset | Primary search intent | Safe next action |
| --- | --- | --- |
| `tken-ai-api-video-script-pack` | AI API tutorials, ChatGPT tips, AI tools | Generate subtitles, thumbnails, and UTM descriptions for owner-approved uploads |
| `tken-reddit-launch-pack` | Self-hosted and developer experience posts | Check current subreddit rules, then queue one transparent post for approval |
| `tken-awesome-openai-compatible` | Awesome OpenAI-compatible tools | Add richer resource categories and screenshots before external outreach |
| `tken-ai-api-troubleshooting-guide` | 401, 502, model not found, API base URL errors | Deploy as static SEO help page after hosting approval |
| `tken-openai-compatible-benchmark-pack` | benchmark and cost comparison searches | Publish repo, release zip, then add example result screenshots |
| `tken-model-router-nextjs-starter` | Next.js AI route integration | Publish repo and add a deploy button after validation |
| `tken-api-health-monitor` | uptime and error diagnosis searches | Publish repo and queue a dev.to troubleshooting draft |
| `tken-ai-agent-starter-pack` | AI agent starter searches | Publish repo and connect it to Codex/OpenClaw guide pages |
| `tken-ai-sdk-provider-template` | AI SDK provider searches | Publish repo and add provider examples to awesome list |
| `tken-openwebui-provider-pack` | Open WebUI custom endpoint searches | Publish repo and queue setup tutorial draft |
| `tken-cursor-windsurf-base-url-guide` | coding tool base URL searches | Publish repo and connect to Codex/OpenClaw guide |
| `tken-free-model-fallback-recipes` | cheap model fallback searches | Publish repo and add recipes to routing docs |
| `tken-vscode-continue-config-pack` | VS Code/Continue config searches | Publish repo and link from coding tool guides |
| `tken-langchain-openai-compatible-starter` | LangChain integration searches | Publish repo and add RAG example variants |
| `tken-litellm-router-config-pack` | LiteLLM router searches | Publish repo and add fallback policy examples |
| `tken-ai-api-seo-landing-kit` | organic comparison searches | Publish repo; deploy only after owner approval |
| `tken-python-openai-compatible-cookbook` | Python API examples | Publish repo and link from troubleshooting guide |
| `tken-node-openai-compatible-cookbook` | Node.js API examples | Publish repo and link from Next.js starter |
| `tken-ai-api-postman-collection` | Postman and HTTP client searches | Publish repo and attach collection release |
| `tken-model-route-cheatsheet` | route selection searches | Publish repo and connect to fallback recipes |

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
