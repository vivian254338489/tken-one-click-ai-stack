# r/ChatGPT Draft

## Title

I made a 3-minute ChatGPT-style gateway setup guide for testing one API base URL

## Body

I wanted a faster way to test a ChatGPT-style workflow without rewriting clients every time I changed model/provider.

The pattern:

- one OpenAI-compatible API base URL
- local route names like `free-model` and `premium-gpt`
- deploy with Railway, Vercel, Docker, or local Node
- connect a ChatGPT-style UI or another client

Disclosure: I work on TKEN-related tooling. The short setup guide is here:
https://github.com/vivian254338489/tken-chatgpt-gateway-3-minute-guide

Question: for ChatGPT-style apps, do you prefer one model, or routing by task?
