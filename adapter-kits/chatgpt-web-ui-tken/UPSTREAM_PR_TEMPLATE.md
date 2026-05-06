# Add OpenAI-compatible provider example

This PR adds an optional provider example for OpenAI-compatible gateway users.

Disclosure: I work on TKEN-related tooling. This change does not alter project defaults and can be adapted to any compatible provider by changing the base URL and model names.

## What changed

- Added environment variable examples for a compatible gateway base URL.
- Added route examples for low-cost and premium model usage.
- Added deployment notes for Docker, Railway, and Vercel.

## What did not change

- No default provider changed.
- No API keys are committed.
- No upstream branding or license notices are removed.

## Why this is useful

Some users want to run the web UI against a self-hosted or third-party OpenAI-compatible endpoint. This example makes that setup easier while keeping defaults unchanged.
