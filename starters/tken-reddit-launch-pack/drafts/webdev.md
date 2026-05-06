# r/webdev Draft

## Title

I stopped hardcoding one model into my AI app and used local route names instead

## Body

One pattern that made AI app testing easier for me was using local route names in the app:

```text
free-model
premium-gpt
support-final
code-review
```

The app still calls one OpenAI-compatible endpoint. The gateway maps local route names to whatever provider/model is behind them.

That made it easier to test cheap routes for routine work and premium routes for coding or final answers.

Disclosure: I work on TKEN-related tooling. I put a minimal gateway template here:
https://github.com/vivian254338489/tken-ai-gateway-lite

Curious how others structure model routing in production web apps.
