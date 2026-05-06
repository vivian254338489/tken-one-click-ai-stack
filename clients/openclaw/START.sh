#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
node install.mjs
echo "Generated: generated/openclaw.tken.json"
echo "Next: set TKEN_API_KEY and copy the generated config into your OpenClaw-style client."
