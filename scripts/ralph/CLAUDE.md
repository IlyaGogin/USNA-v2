# Ralph Agent Instructions for USNA Leadership Training Platform

You are an autonomous coding agent executing PRD items iteratively. Follow this workflow precisely.

## Project Context

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Radix UI (shadcn/ui)
**Deployment:** Vercel (serverless)
**Database:** Supabase (when implemented)
**State:** React hooks (migrating to React Router)
**Dev Server:** `http://localhost:3000` (Vite default)

**Key Directories:**
- `src/components/` - React components (94 files)
- `src/components/ui/` - shadcn/ui primitives
- `src/data/` - Mock data and curriculum
- `src/routes/` - React Router routes (when created)
- `api/` - Vercel serverless functions (when created)
- `tasks/` - PRD and progress files

---

## Workflow

### Step 1: Read Current State

1. Read `tasks/prd.json` to find the current PRD
2. Read `tasks/progress.txt` for learnings from previous iterations
3. **For UI work:** Read `docs/DESIGN-SYSTEM.md` for design tokens (colors, fonts, spacing)
4. Verify you're on the correct git branch (create if needed)

### Step 2: Select Next Task

Find the **highest priority** user story where `passes: false`:
- Stories are ordered by priority (US-001 before US-002)
- Earlier stories may be dependencies for later ones
- Pick exactly ONE story to implement

**CRITICAL - Story ID Tracking:**
- Note the **EXACT story ID** from prd.json (e.g., `US-004`, not `US-002`)
- Use this EXACT ID in:
  - progress.txt iteration headers
  - git commit messages
  - prd.json updates
- **NEVER renumber stories** - if PRD says `US-004: Japanese scenarios`, use `US-004`
- **NEVER skip stories** without explicit user instruction

### Step 3: Implement the Story

- Read all relevant files before making changes
- Follow existing code patterns in the codebase
- Use existing shadcn/ui components from `src/components/ui/`
- Keep changes minimal and focused on the story

### Step 4: Validate

Run quality checks - ALL must pass before committing:

#### 4a. TypeScript/Build Check
```bash
npm run build
```

If typecheck or build fails:
- Fix the errors
- Re-run validation
- Do NOT commit broken code

#### 4b. UI Verification (REQUIRED for UI changes)

For ANY story that modifies UI components, you MUST verify with dev-browser.

**Start verification:**
```bash
cd ~/.claude/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("verify");

// Navigate to the page with changes
await page.goto("http://localhost:3000");
await waitForPageLoad(page);

// Take screenshot as proof
await page.screenshot({ path: "tmp/us-XXX-verify.png" });

// Verify specific elements (customize per story)
// Example: Check element exists
const element = await page.$("[data-testid='my-component']");
console.log({ elementExists: !!element });

// Example: Check text content
const text = await page.textContent("h1");
console.log({ heading: text });

// Example: Test interaction
await page.click("button");
await page.screenshot({ path: "tmp/us-XXX-after-click.png" });

await client.disconnect();
EOF
```

**Verification checklist:**
- [ ] Component renders without errors
- [ ] Expected elements are visible
- [ ] Interactions work (clicks, inputs)
- [ ] No console errors
- [ ] Screenshot saved as proof

#### Finding Elements with ARIA Snapshot

If you don't know the selectors:

```bash
cd ~/.claude/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("discover");
await page.goto("http://localhost:3000");
await waitForPageLoad(page);

// Get accessibility tree with element refs
const snapshot = await client.getAISnapshot("discover");
console.log(snapshot);

// Then interact using refs
// const element = await client.selectSnapshotRef("discover", "e5");
// await element.click();

await client.disconnect();
EOF
```

### Step 5: Update Documentation

Append to `tasks/progress.txt` (never replace, always append):

```markdown
## Iteration [N] - [Story ID]: [Story Title]
**Date:** [timestamp]

### What was implemented
- [Brief description]

### Files changed
- [file1.tsx] - [what changed]
- [file2.ts] - [what changed]

### UI Verification (for UI stories)
- Screenshot: tmp/us-XXX-verify.png
- Elements verified: [list what was checked]
- Interactions tested: [list what was tested]

### Learnings for future iterations
- [Pattern discovered]
- [Gotcha encountered]
- [Useful context]
```

### Step 5b: Update Long-Term Memory (if applicable)

If you discovered reusable patterns or gotchas, update the appropriate CLAUDE.md file:

**For codebase-wide learnings:**
- Update the "Codebase Patterns" section in THIS file (`scripts/ralph/CLAUDE.md`)

**For directory-specific learnings:**
- Check if a CLAUDE.md exists in the directory you edited
- If yes: append learnings to it
- If no: create one only if the learning is significant and reusable

**What to add:**
- Discovered conventions ("this codebase does X for Y")
- Gotchas ("don't forget to Z when changing W")
- Useful context ("component X handles Y")

**What NOT to add:**
- Story-specific details (those go in progress.txt)
- Temporary workarounds
- Anything already documented elsewhere

### Step 6: Commit Changes

```bash
git add [specific files]
git commit -m "[Story ID]: [Brief description]"
```

Commit message format:
- `US-001: Add react-router-dom dependency`
- `US-002: Create basic router setup in App.tsx`

### Step 7: Mark Story Complete (MANDATORY)

**DO NOT SKIP THIS STEP** - The loop checks prd.json to determine completion.

Update `tasks/prd.json` for the completed story:

```bash
# Replace US-XXX with the EXACT story ID you implemented
STORY_ID="US-XXX"
NOTES="Completed $(date +%Y-%m-%d). Brief description of what was done."

# Update passes to true and add notes
jq --arg id "$STORY_ID" --arg notes "$NOTES" '
  .userStories |= map(
    if .id == $id then .passes = true | .notes = $notes else . end
  )
' tasks/prd.json > tasks/prd.tmp.json && mv tasks/prd.tmp.json tasks/prd.json
```

**Verification:**
```bash
# Confirm the story is marked as passed
jq --arg id "$STORY_ID" '.userStories[] | select(.id == $id) | {id, passes, notes}' tasks/prd.json
```

### Step 8: Check Completion

**Use this exact check** - do NOT determine completion by content analysis:

```bash
# Check if all stories have passes: true
all_passed=$(jq '[.userStories[].passes] | all' tasks/prd.json)
echo "All stories passed: $all_passed"

if [ "$all_passed" = "true" ]; then
  echo "All PRD items complete!"
fi
```

**If ALL stories have `passes: true`:**
- Output: `<promise>COMPLETE</promise>`
- This signals the Ralph loop to exit

**If stories remain (`passes: false` exists):**
- The loop will start a new iteration
- Your context will be fresh, but progress.txt preserves learnings

**WARNING:** Never emit `<promise>COMPLETE</promise>` based on:
- Content analysis ("112 scenarios exist")
- Counting iterations
- Assumptions about what was done

Only emit COMPLETE when `jq '[.userStories[].passes] | all' tasks/prd.json` returns `true`.

---

## UI Verification Patterns

### Common Verification Scripts

**Check component renders:**
```typescript
const element = await page.$(".my-component");
if (!element) throw new Error("Component not found");
```

**Check text content:**
```typescript
const text = await page.textContent("h1");
if (!text.includes("Expected")) throw new Error("Wrong text");
```

**Test button click:**
```typescript
await page.click("button[data-testid='submit']");
await page.waitForSelector(".success-message");
```

**Test form input:**
```typescript
await page.fill("input[name='email']", "test@example.com");
await page.click("button[type='submit']");
```

**Check navigation:**
```typescript
await page.click("a[href='/dashboard']");
await page.waitForURL("**/dashboard");
```

**Verify modal opens:**
```typescript
await page.click("button.open-modal");
await page.waitForSelector("[role='dialog']");
await page.screenshot({ path: "tmp/modal-open.png" });
```

### Screenshot Naming Convention

Use story ID in screenshot names:
- `tmp/us-001-initial.png`
- `tmp/us-001-after-click.png`
- `tmp/us-001-final.png`

---

## Quality Standards

### Code Style
- Use TypeScript strictly (no `any` types unless unavoidable)
- Follow existing component patterns
- Use Tailwind classes for styling
- Prefer composition over inheritance

### Commits
- One logical change per commit
- Must pass `npm run build` before committing
- Must verify UI with dev-browser for UI changes
- Never commit with TypeScript errors

### UI Changes
- ALWAYS verify with dev-browser
- Take screenshots as proof
- Test interactions, not just rendering
- Use existing shadcn/ui components
- Follow the Figma design patterns already in place

---

## Design System Compliance (MANDATORY)

**CRITICAL: Read `docs/DESIGN-SYSTEM.md` before implementing ANY UI changes.**

### Before Implementing ANY UI

1. **READ `docs/DESIGN-SYSTEM.md`** - This is your single source of truth for colors, fonts, spacing
2. **SEARCH existing components** - Run `grep -r "pattern" src/components/` to find how similar UI is implemented
3. **COPY, don't create** - If similar UI exists, copy its exact patterns (colors, spacing, fonts)

### Forbidden Actions

- **NEVER invent hex colors** - If a color isn't in DESIGN-SYSTEM.md, it doesn't exist
- **NEVER use arbitrary fonts** - Only `Plus Jakarta Sans` and `SF Mono` are permitted
- **NEVER guess spacing** - Copy exact padding/margin/gap values from similar components
- **NEVER create custom badge styles** - Use established badge color combinations from DESIGN-SYSTEM.md
- **NEVER hardcode colors when CSS variables exist** - Use `bg-primary`, `text-muted-foreground` for general UI
- **NEVER approximate gradients** - Copy gradient definitions exactly from ScenarioCard.tsx

### Required Actions

- **ALWAYS read ScenarioCard.tsx** before creating any card-like UI
- **ALWAYS use shadcn/ui components** from `src/components/ui/` when they exist (46 available)
- **ALWAYS verify colors match** existing components during UI verification
- **ALWAYS use exact font class patterns** from DESIGN-SYSTEM.md

### Badge Color Reference (Quick Reference)

| Type | Background | Text |
|------|------------|------|
| Published | `#ebf9f0` | `#006632` |
| Draft/In-Progress | `#fef3c7` | `#92400e` |
| Course Code | `#efedff` | `#512eab` |
| Difficulty | `#ffebd6` | `#793c00` |
| Completed | `#dbeafe` | `#1e40af` |
| Error/Overdue | `#ffe7e5` | `#b20900` |

### UI Verification Must Include

When verifying UI with dev-browser, explicitly check:
1. Colors match existing components (compare to ScenarioCard, AssignmentsPage)
2. Font family is correct (Plus Jakarta Sans or SF Mono only)
3. Spacing/padding matches similar existing UI
4. Border radius matches (8px for cards, 4px for badges)
5. Badge colors follow the established patterns above

### Component Reuse Checklist

Before creating ANY new component, answer:
- [ ] Does a similar component exist in `src/components/ui/`? (check all 46 shadcn components)
- [ ] Does a similar pattern exist in `src/components/`?
- [ ] Can I extend an existing component instead of creating new?
- [ ] Have I copied exact color values from DESIGN-SYSTEM.md?
- [ ] Have I verified font families are Plus Jakarta Sans or SF Mono only?

---

## Codebase Patterns

Update this section as you discover patterns:

### Component Structure
- Page components in `src/components/` root
- Reusable UI in `src/components/ui/`
- Modal components follow `*Modal.tsx` naming

### State Management
- App.tsx manages global view state
- Components receive handlers via props
- No Redux/Zustand - plain React hooks

### Navigation (Current)
- View-based: `setCurrentView('dashboard')`
- Being migrated to React Router (Stage 2)

### Data
- Mock data in `src/data/`
- Will migrate to Supabase API (Stage 3+)

### Testing Selectors
- Use `data-testid` attributes for test selectors
- Example: `<button data-testid="submit-btn">`
- Query with: `page.$("[data-testid='submit-btn']")`

---

## Important Reminders

1. **Read before writing** - Always understand existing code first
2. **Small changes** - One story = one focused implementation
3. **Validate always** - Never commit broken code
4. **Verify UI always** - Use dev-browser for ANY UI change
5. **Screenshot proof** - Save screenshots for UI verification
6. **Log learnings** - Help future iterations avoid your mistakes
7. **Stay focused** - Don't refactor unrelated code
8. **Use existing patterns** - Don't introduce new paradigms without need

---

## Completion Signal

When ALL user stories in prd.json have `passes: true`, output:

```
<promise>COMPLETE</promise>
```

This tells the Ralph loop that the PRD is fully implemented.

---

## Common Pitfalls (AVOID THESE)

These mistakes have caused issues in past Ralph runs. **Do not repeat them.**

### 1. Story ID Mismatch
❌ **Wrong:** PRD says `US-004: Japanese scenarios`, but you log it as `US-002` in progress.txt
✅ **Right:** Always use the EXACT story ID from prd.json

### 2. Skipping Step 7 (prd.json update)
❌ **Wrong:** Implementing stories but never setting `passes: true`
✅ **Right:** After EVERY story, update prd.json with the jq command in Step 7

### 3. Content-Based Completion
❌ **Wrong:** "112 scenarios exist, so the PRD must be complete" → emit COMPLETE
✅ **Right:** Only emit COMPLETE when `jq '[.userStories[].passes] | all'` returns `true`

### 4. Combining Stories Without Tracking
❌ **Wrong:** Implementing US-001 and US-002 together, only logging as US-001
✅ **Right:** If you combine stories, mark BOTH as passed in prd.json

### 5. Sequential Renumbering
❌ **Wrong:** Calling your iterations US-001, US-002, US-003... regardless of PRD IDs
✅ **Right:** Match PRD IDs exactly - if you skip US-003, the next one is still US-004

### Self-Check Before Each Iteration

Before starting work, verify:
```bash
# What's the next story ID I should work on?
jq '.userStories[] | select(.passes == false) | {id, title, priority}' tasks/prd.json | head -20

# How many stories remain?
jq '[.userStories[].passes] | {total: length, done: map(select(. == true)) | length, remaining: map(select(. == false)) | length}' tasks/prd.json
```
