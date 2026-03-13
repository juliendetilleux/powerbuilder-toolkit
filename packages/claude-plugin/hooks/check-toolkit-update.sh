#!/usr/bin/env bash
# check-toolkit-update.sh — Checks if the PB Toolkit MCP server needs updating.
# Called by SessionStart hook. Compares local version with remote GitHub version.
# Only outputs a message if an update is available (silent otherwise).

TOOLKIT_PATH_FILE="$HOME/.claude/pb-toolkit-path.txt"

# Find toolkit directory from the saved path
if [ ! -f "$TOOLKIT_PATH_FILE" ]; then
  exit 0  # Toolkit not installed, pb-setup will handle it
fi

SERVER_JS=$(cat "$TOOLKIT_PATH_FILE" 2>/dev/null)
if [ -z "$SERVER_JS" ] || [ ! -f "$SERVER_JS" ]; then
  exit 0
fi

# Derive toolkit root: server.js is at <root>/packages/mcp-server/dist/server.js
TOOLKIT_DIR=$(cd "$(dirname "$SERVER_JS")/../../.." 2>/dev/null && pwd)
if [ ! -f "$TOOLKIT_DIR/packages/mcp-server/package.json" ]; then
  exit 0
fi

cd "$TOOLKIT_DIR" || exit 0

# Get local version
LOCAL_VER=$(node -e "console.log(require('./packages/mcp-server/package.json').version)" 2>/dev/null)
if [ -z "$LOCAL_VER" ]; then
  exit 0
fi

# Fetch remote version (timeout 5s to avoid blocking session start)
git fetch origin main --quiet 2>/dev/null &
FETCH_PID=$!

# Wait max 5 seconds for fetch
for i in 1 2 3 4 5; do
  if ! kill -0 "$FETCH_PID" 2>/dev/null; then
    break
  fi
  sleep 1
done
kill "$FETCH_PID" 2>/dev/null

REMOTE_VER=$(git show origin/main:packages/mcp-server/package.json 2>/dev/null | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).version)}catch{}})" 2>/dev/null)

if [ -z "$REMOTE_VER" ]; then
  exit 0  # Can't reach remote, skip silently
fi

if [ "$LOCAL_VER" = "$REMOTE_VER" ]; then
  exit 0  # Up to date
fi

# Version differs — notify
echo ""
echo "⚡ PowerBuilder Toolkit update available: $LOCAL_VER → $REMOTE_VER"
echo "   Pour mettre à jour :"
echo "   cd $TOOLKIT_DIR && git pull origin main && npm install && npm run build"
echo "   Puis redémarrer Claude Code."
echo ""
