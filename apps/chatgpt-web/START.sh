#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
npm install
echo "Open http://localhost:8788"
npm start
