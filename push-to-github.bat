@echo off
setlocal

where git >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Git is not installed or not available in PATH.
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo [ERROR] This folder is not a Git repository.
  pause
  exit /b 1
)

for /f "delims=" %%b in ('git branch --show-current') do set "BRANCH=%%b"
if "%BRANCH%"=="" (
  echo [ERROR] Could not detect the current Git branch.
  pause
  exit /b 1
)

set "COMMIT_MSG=%*"
if "%COMMIT_MSG%"=="" (
  for /f "delims=" %%t in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""') do set "STAMP=%%t"
  set "COMMIT_MSG=Update on %STAMP%"
)

echo.
echo Staging all changes...
git add -A
if errorlevel 1 (
  echo [ERROR] Failed to stage changes.
  pause
  exit /b 1
)

git diff --cached --quiet
if not errorlevel 1 (
  echo No staged changes to commit. Nothing to push.
  pause
  exit /b 0
)

echo Creating commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
  echo [ERROR] Commit failed.
  pause
  exit /b 1
)

echo Pushing to origin/%BRANCH%...
git push origin %BRANCH%
if errorlevel 1 (
  echo [ERROR] Push failed.
  pause
  exit /b 1
)

echo.
echo [SUCCESS] Changes pushed to origin/%BRANCH%.
pause
exit /b 0
