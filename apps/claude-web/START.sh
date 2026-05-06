#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
npm install
npm run preflight
echo "Open http://localhost:8789"
npm start
