#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
npm install
npm run preflight
echo "Open http://localhost:8789"
node open-browser.mjs http://localhost:8789 2500 &
npm start
