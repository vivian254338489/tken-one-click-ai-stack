# r/selfhosted Draft

## Title

I tested a self-hosted OpenAI-compatible gateway pattern for routing cheap vs premium LLM tasks

## Body

I have been testing a small gateway pattern for apps that need more than one LLM route but still want one `/v1/chat/completions` endpoint.

The useful split:

- cheap route: summaries, extraction, formatting, drafts
- premium route: coding, hard reasoning, final customer-facing answers
- fallback route: retry when cheap output fails quality checks

The self-hosted part is mostly the gateway and config. The upstream can be changed as long as it is OpenAI-compatible.

Disclosure: I work on TKEN-related tooling. I packaged a Docker Compose version here:
https://github.com/vivian254338489/tken-docker-ai-gateway-compose

Question: if you self-host AI tools, do you route by task type, user tier, or provider availability?
