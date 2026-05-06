@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto failed
echo Starting TKEN ChatGPT Web UI...
echo Open http://localhost:8788
call npm start
goto end

:failed
echo Setup failed. Make sure Node.js 20+ is installed.
pause

:end
