#!/bin/bash
# Ralph Startup Script - Starts all required services
# Usage: ./scripts/ralph/start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
DEV_BROWSER_DIR="$HOME/.claude/skills/dev-browser"

echo "========================================"
echo "Ralph Startup"
echo "========================================"

# Check if dev server is already running
if lsof -i:3000 >/dev/null 2>&1 || netstat -an 2>/dev/null | grep -q ":3000.*LISTEN"; then
    echo "✅ Dev server already running on port 3000"
else
    echo "🚀 Starting dev server..."
    cd "$PROJECT_ROOT"
    npm run dev > /tmp/ralph-dev-server.log 2>&1 &
    DEV_PID=$!
    echo "   PID: $DEV_PID (log: /tmp/ralph-dev-server.log)"

    # Wait for dev server to be ready
    echo "   Waiting for dev server..."
    for i in {1..30}; do
        if curl -s http://localhost:3000 >/dev/null 2>&1; then
            echo "✅ Dev server ready"
            break
        fi
        sleep 1
    done
fi

# Check if dev-browser server is already running (port 9222)
if curl -s http://localhost:9222 2>/dev/null | grep -q "wsEndpoint"; then
    echo "✅ dev-browser server already running on port 9222"
else
    # Kill any stale processes on ports 9222 and 9223
    echo "🧹 Cleaning up stale processes..."
    if command -v taskkill >/dev/null 2>&1; then
        # Windows
        for port in 9222 9223; do
            pid=$(netstat -ano 2>/dev/null | grep ":$port.*LISTEN" | awk '{print $5}' | head -1)
            if [ -n "$pid" ] && [ "$pid" != "0" ]; then
                taskkill //F //PID "$pid" 2>/dev/null && echo "   Killed stale process on port $port (PID: $pid)"
            fi
        done
    else
        # Unix/Mac
        for port in 9222 9223; do
            pid=$(lsof -ti:$port 2>/dev/null)
            if [ -n "$pid" ]; then
                kill -9 $pid 2>/dev/null && echo "   Killed stale process on port $port (PID: $pid)"
            fi
        done
    fi
    sleep 1

    echo "🚀 Starting dev-browser server..."
    cd "$DEV_BROWSER_DIR"
    ./server.sh > /tmp/ralph-browser-server.log 2>&1 &
    BROWSER_PID=$!
    echo "   PID: $BROWSER_PID (log: /tmp/ralph-browser-server.log)"

    # Wait for browser server to be ready with real verification
    echo "   Waiting for dev-browser server..."
    for i in {1..30}; do
        if curl -s http://localhost:9222 2>/dev/null | grep -q "wsEndpoint"; then
            echo "✅ dev-browser server ready on port 9222"
            break
        fi
        if [ $i -eq 30 ]; then
            echo "⚠️  dev-browser server may not have started. Check /tmp/ralph-browser-server.log"
        fi
        sleep 1
    done
fi

echo ""
echo "========================================"
echo "All services running!"
echo "========================================"
echo ""
echo "Next steps:"
echo "  1. /prd [feature description]"
echo "  2. /ralph"
echo "  3. ./scripts/ralph/ralph.sh"
echo ""
echo "To stop services later:"
echo "  ./scripts/ralph/stop.sh"
echo "========================================"
