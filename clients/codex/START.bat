@echo off
setlocal
cd /d "%~dp0"
echo Generating TKEN Codex config...
node install.mjs
echo.
echo Generated: generated\codex.tken.json
echo Next: set TKEN_API_KEY in your environment and copy the generated config into your Codex-compatible client.
pause
