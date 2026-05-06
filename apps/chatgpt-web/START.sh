#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
npm install
npm run preflight
echo "Open http://localhost:8788"
node open-browser.mjs http://localhost:8788 2500 &
npm start
