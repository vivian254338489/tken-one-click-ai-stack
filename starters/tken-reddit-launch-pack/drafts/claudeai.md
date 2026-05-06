# r/ClaudeAI Draft

## Title

Claude-style UI with an OpenAI-compatible backend: has anyone else tried this pattern?

## Body

I have been testing Claude-style workflows with an OpenAI-compatible backend.

The UI pattern and the backend route do not have to be the same thing. You can use a Claude-style interface, point it at one `/v1` endpoint, then test low-cost and premium model routes behind the gateway.

Disclosure: I work on TKEN-related tooling. I packaged a simple Claude-style UI here:
https://github.com/vivian254338489/tken-claude-web-ui

Curious whether people here mostly care about Claude's model quality, the UI workflow, or both.
