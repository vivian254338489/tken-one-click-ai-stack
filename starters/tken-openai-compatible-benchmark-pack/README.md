# TKEN OpenAI-Compatible Benchmark Pack

Benchmark latency, cost, and route fit across OpenAI-compatible AI API endpoints.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_openai_compatible_benchmark_pack
```

## Why This Exists

Developers often search for the cheapest AI API, fastest model route, or a way to compare GPT-style and low-cost routes. This pack gives them a simple local test harness they can run before wiring a gateway into production.

## Quick Start

```bash
npm install
cp .env.example .env
npm run bench
```

Without a real key, the benchmark runs in demo mode so the workflow is still easy to inspect.

## Configure

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
BENCH_MODELS=free-model,premium-gpt
BENCH_PROMPT=Summarize this in one sentence.
```

## Output

The benchmark prints JSON lines for each route:

```json
{"model":"free-model","ok":true,"latencyMs":321,"estimatedInputChars":37}
```

Use low-cost routes for summaries, extraction, formatting, and drafts. Keep premium routes for coding, complex reasoning, and final critical answers.

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw. The benchmark measures the endpoint you configure; it does not claim official model performance.
