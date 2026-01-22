#!/bin/bash
# Ralph Loop - Autonomous AI Agent for iterative PRD implementation
# Optimized for Claude Code as the default tool
# Based on snarktank/ralph

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
TASKS_DIR="$PROJECT_ROOT/tasks"
PRD_FILE="$TASKS_DIR/prd.json"
PROGRESS_FILE="$TASKS_DIR/progress.txt"
ARCHIVE_DIR="$TASKS_DIR/archive"
CLAUDE_MD="$SCRIPT_DIR/CLAUDE.md"
LAST_BRANCH_FILE="$TASKS_DIR/.last-branch"

# Defaults - Claude Code is the default tool
TOOL="claude"
MAX_ITERATIONS=10

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --tool)
            TOOL="$2"
            shift 2
            ;;
        --help|-h)
            echo "Usage: ralph.sh [--tool amp|claude] [max_iterations]"
            echo ""
            echo "Options:"
            echo "  --tool      AI tool to use (default: claude)"
            echo "  max_iterations  Number of iterations (default: 10)"
            echo ""
            echo "Examples:"
            echo "  ./ralph.sh              # Run 10 iterations with Claude Code"
            echo "  ./ralph.sh 5            # Run 5 iterations with Claude Code"
            echo "  ./ralph.sh --tool amp 15  # Run 15 iterations with Amp"
            exit 0
            ;;
        *)
            if [[ "$1" =~ ^[0-9]+$ ]]; then
                MAX_ITERATIONS="$1"
            fi
            shift
            ;;
    esac
done

# Validate tool selection
if [[ "$TOOL" != "amp" && "$TOOL" != "claude" ]]; then
    echo "Error: Tool must be 'amp' or 'claude'"
    exit 1
fi

# Check required files exist
if [[ ! -f "$PRD_FILE" ]]; then
    echo "Error: PRD file not found at $PRD_FILE"
    echo "Create a prd.json file in the tasks/ directory first."
    exit 1
fi

if [[ ! -f "$CLAUDE_MD" ]]; then
    echo "Error: CLAUDE.md not found at $CLAUDE_MD"
    exit 1
fi

# Initialize progress file if it doesn't exist
if [[ ! -f "$PROGRESS_FILE" ]]; then
    echo "# Ralph Progress Log" > "$PROGRESS_FILE"
    echo "# Auto-generated learnings from each iteration" >> "$PROGRESS_FILE"
    echo "" >> "$PROGRESS_FILE"
fi

# Archive previous runs if branch changed
archive_if_branch_changed() {
    local current_branch
    current_branch=$(jq -r '.project.branch // empty' "$PRD_FILE" 2>/dev/null || echo "")

    if [[ -z "$current_branch" ]]; then
        return
    fi

    if [[ -f "$LAST_BRANCH_FILE" ]]; then
        local last_branch
        last_branch=$(cat "$LAST_BRANCH_FILE")

        if [[ "$last_branch" != "$current_branch" && -n "$last_branch" ]]; then
            local timestamp
            timestamp=$(date +%Y%m%d-%H%M%S)
            local archive_path="$ARCHIVE_DIR/${timestamp}-${last_branch}"

            echo "Branch changed from '$last_branch' to '$current_branch'"
            echo "Archiving previous run to: $archive_path"

            mkdir -p "$archive_path"
            [[ -f "$PRD_FILE" ]] && cp "$PRD_FILE" "$archive_path/"
            [[ -f "$PROGRESS_FILE" ]] && cp "$PROGRESS_FILE" "$archive_path/"

            # Reset progress file for new branch
            echo "# Ralph Progress Log - $current_branch" > "$PROGRESS_FILE"
            echo "# Started: $(date)" >> "$PROGRESS_FILE"
            echo "" >> "$PROGRESS_FILE"
        fi
    fi

    echo "$current_branch" > "$LAST_BRANCH_FILE"
}

# Run the archive check
archive_if_branch_changed

# Change to project root for execution
cd "$PROJECT_ROOT"

echo "========================================"
echo "Ralph Loop Starting"
echo "========================================"
echo "Tool: $TOOL"
echo "Max iterations: $MAX_ITERATIONS"
echo "PRD: $PRD_FILE"
echo "Progress: $PROGRESS_FILE"
echo "========================================"
echo ""

# Main loop
for ((i=1; i<=MAX_ITERATIONS; i++)); do
    echo ""
    echo "========================================"
    echo "Iteration $i of $MAX_ITERATIONS"
    echo "Started: $(date)"
    echo "========================================"
    echo ""

    # Run the AI tool
    if [[ "$TOOL" == "claude" ]]; then
        # Claude Code with autonomous permissions
        output=$(claude --dangerously-skip-permissions --print < "$CLAUDE_MD" 2>&1) || true
    else
        # Amp with autonomous permissions
        output=$(amp --dangerously-allow-all < "$SCRIPT_DIR/prompt.md" 2>&1) || true
    fi

    echo "$output"

    # Check for completion signal
    if echo "$output" | grep -q "<promise>COMPLETE</promise>"; then
        echo ""
        echo "========================================"
        echo "Ralph Loop Complete!"
        echo "All PRD items have been implemented."
        echo "========================================"
        exit 0
    fi

    # Brief pause between iterations
    if [[ $i -lt $MAX_ITERATIONS ]]; then
        echo ""
        echo "Pausing 2 seconds before next iteration..."
        sleep 2
    fi
done

echo ""
echo "========================================"
echo "Ralph Loop Finished"
echo "Reached maximum iterations ($MAX_ITERATIONS)"
echo "Some PRD items may still be incomplete."
echo "========================================"
exit 0
