# dev.to Article Draft

Title:

```text
Build an OpenAI-Compatible ChatGPT Gateway in 3 Minutes
```

Tags:

```text
ai, openai, docker, webdev
```

Article:

```md
Most AI prototypes start with one model and one API key.

Then reality shows up:

- you want a ChatGPT-style UI for testing
- you want a Claude-style UI for a different workflow
- you want cheap routes for simple tasks
- you want premium routes for coding and hard reasoning
- you do not want to rewrite every client

The pattern I have been using is an OpenAI-compatible gateway.

Your app still calls:

```text
/v1/chat/completions
```

But the gateway maps local route names like:

```text
free-model
premium-gpt
support-final
```

to the provider/model you choose behind the scenes.

## Local setup

```bash
npm install
npm run setup
npm start
```

Open:

```text
http://localhost:8787/chatgpt
http://localhost:8787/claude
```

## Example environment

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_tken_api_key
LOCAL_API_KEY=change_this_local_gateway_key
FREE_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
DEFAULT_ROUTE=free-model
```

## Why route by task?

You usually do not need a premium model for every extraction, formatting, or first-draft job.

A more practical setup:

- cheap route: drafts, extraction, formatting
- premium route: coding, hard reasoning, final answers
- fallback route: retry only when quality checks fail

Disclosure: I work on TKEN-related tooling. The demo stack is here:

https://github.com/vivian254338489/tken-one-click-ai-stack
```
