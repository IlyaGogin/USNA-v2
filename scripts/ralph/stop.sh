#!/bin/bash
# Ralph Stop Script - Stops all Ralph services
# Usage: ./scripts/ralph/stop.sh

echo "========================================"
echo "Stopping Ralph Services"
echo "========================================"

# Helper function to kill process on a port (cross-platform)
kill_port() {
    local port=$1
    local name=$2

    if command -v taskkill >/dev/null 2>&1; then
        # Windows
        pid=$(netstat -ano 2>/dev/null | grep ":$port.*LISTEN" | awk '{print $5}' | head -1)
        if [ -n "$pid" ] && [ "$pid" != "0" ]; then
            echo "Stopping $name (port $port, PID: $pid)..."
            taskkill //F //PID "$pid" 2>/dev/null && echo "✅ $name stopped" || echo "⚠️  Failed to stop $name"
        else
            echo "ℹ️  $name not running"
        fi
    else
        # Unix/Mac
        if lsof -i:$port >/dev/null 2>&1; then
            echo "Stopping $name (port $port)..."
            lsof -ti:$port | xargs kill -9 2>/dev/null || true
            echo "✅ $name stopped"
        else
            echo "ℹ️  $name not running"
        fi
    fi
}

# Kill dev server on port 3000
kill_port 3000 "dev server"

# Kill dev-browser server on port 9222
kill_port 9222 "dev-browser server"

# Kill Chrome CDP on port 9223
kill_port 9223 "Chrome CDP"

# Note: We only kill processes on specific ports (9222, 9223)
# We do NOT kill all Chrome/Chromium processes to avoid disrupting user's browser

echo ""
echo "========================================"
echo "All services stopped"
echo "========================================"
