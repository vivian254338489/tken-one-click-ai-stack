@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto failed
echo Checking environment...
call npm run preflight
if errorlevel 1 goto failed
echo Starting ChatGPT Web UI TKEN Starter...
echo Open http://localhost:8790
call npm start
goto end

:failed
echo.
echo Startup failed. Make sure Node.js 20+ is installed.
pause

:end
