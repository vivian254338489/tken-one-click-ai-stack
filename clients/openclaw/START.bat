@echo off
setlocal
cd /d "%~dp0"
echo Generating TKEN OpenClaw config...
node install.mjs
echo.
echo Generated: generated\openclaw.tken.json
echo Next: set TKEN_API_KEY in your environment and copy the generated config into your OpenClaw-style client.
pause
