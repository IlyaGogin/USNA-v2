# PRD: USNA Leadership Training Platform - Refactoring & Deployment

> **Document Version:** 1.0
> **Date:** January 2025
> **Status:** Draft
> **Author:** Senior Architect (Claude Code)

---

## Executive Summary

This PRD outlines the strategy to transform the USNA Leadership Training Platform from a Figma Make export prototype into a deployable, iterative MVP on Vercel. The approach prioritizes **speed-to-deployment** and **rapid iteration** over production-grade robustness.

**Key Principles:**
- No authentication or user management (lean MVP)
- Minimize refactoring before first deployment
- Enable rapid feature iteration post-deployment
- Keep infrastructure simple and serverless

---

## Table of Contents

1. [Current State Analysis](#1-current-state-analysis)
2. [Stage 1: Deploy As-Is](#2-stage-1-deploy-as-is)
3. [Stage 2: Routing & Navigation Refactor](#3-stage-2-routing--navigation-refactor)
4. [Stage 3: Full-Stack Foundation](#4-stage-3-full-stack-foundation)
5. [Stage 4: Data Layer Evolution](#5-stage-4-data-layer-evolution)
6. [Technical Decisions & Trade-offs](#6-technical-decisions--trade-offs)
7. [Future Considerations](#7-future-considerations)

---

## 1. Current State Analysis

### 1.1 Tech Stack Summary

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | React 18.3.1 | Functional components, hooks |
| Build Tool | Vite 6.3.5 + SWC | Fast HMR, ESNext target |
| Language | TypeScript | Implicit (no tsconfig.json found) |
| Styling | Tailwind CSS v4 | Custom theme, dark mode ready |
| Components | Radix UI + shadcn/ui pattern | 45+ UI primitives |
| State | React useState/useCallback | View-based routing in App.tsx |

### 1.2 Architecture Characteristics

**Strengths:**
- Clean component separation (94 components)
- Solid UI foundation (shadcn/ui pattern)
- Two distinct user flows (Instructor/Midshipman)
- Mock data already structured for API migration

**Challenges for Deployment:**
- View-based routing (not URL-based) - breaks browser back/forward
- Figma asset aliases in Vite config (78 custom mappings)
- No `tsconfig.json` present (Vite defaults may work)
- Build output directory is `build/` (Vercel expects `dist/`)
- Missing `preview` script for local production testing

### 1.3 File Statistics

```
Total Components: 94 TSX files
UI Primitives: 45+ in src/components/ui/
Page Components: 15+
Modal Components: 15+
Assets: 50+ PNG (Figma exports), 80+ SVG imports
Mock Data: 3 curriculum/scenario files (~40KB)
```

---

## 2. Stage 1: Deploy As-Is

**Goal:** Get a working Vercel URL with zero feature changes.

### 2.1 Required Changes

#### 2.1.1 Add TypeScript Configuration

Create `tsconfig.json` for explicit TypeScript support:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

#### 2.1.2 Update Vite Configuration

Modify `vite.config.ts`:

```typescript
// Change build output to Vercel standard
build: {
  target: 'esnext',
  outDir: 'dist',  // Changed from 'build'
},
```

#### 2.1.3 Update package.json Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}
```

#### 2.1.4 Create Vercel Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

The `rewrites` rule ensures all routes fall back to `index.html` for SPA behavior.

#### 2.1.5 Add .gitignore (if missing or incomplete)

Ensure `.gitignore` includes:

```
# Dependencies
node_modules/

# Build output
dist/
build/

# Local env files
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel/
```

### 2.2 Deployment Steps

1. **Initialize Git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Figma Make export"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Deploy

4. **Verify Deployment**:
   - Test role selection flow
   - Verify asset loading (Figma PNGs)
   - Check both Instructor and Midshipman flows

### 2.3 Expected Issues & Mitigations

| Issue | Likelihood | Mitigation |
|-------|------------|------------|
| TypeScript compilation errors | Medium | Fix type errors iteratively; use `// @ts-ignore` sparingly |
| Asset path resolution | Low | Vite aliases should resolve correctly in build |
| Build memory limits | Low | Vercel provides sufficient memory for this bundle size |
| Missing dependencies | Low | All dependencies are in package.json |

### 2.4 Stage 1 Deliverables

- [ ] Working Vercel URL
- [ ] All pages render correctly
- [ ] Assets load properly
- [ ] Both user roles functional

---

## 3. Stage 2: Routing & Navigation Refactor

**Goal:** Add URL-based routing for better UX and shareability.

### 3.1 Install React Router

```bash
npm install react-router-dom
```

### 3.2 Route Structure

```
/                           → Role Selection
/instructor                 → Redirect to /instructor/dashboard
/instructor/dashboard       → Instructor Dashboard
/instructor/scenarios       → Scenarios List
/instructor/scenarios/:id   → Scenario Details
/instructor/scenarios/new   → Create Scenario
/instructor/students        → Students List
/instructor/students/:id    → Student Details
/instructor/assignments     → Assignments List
/instructor/assignments/:id → Assignment Details
/instructor/assignments/new → Create Assignment
/instructor/analytics       → Analytics Page

/midshipman                 → Redirect to /midshipman/dashboard
/midshipman/dashboard       → Midshipman Dashboard
/midshipman/scenarios       → Midshipman Scenarios
/midshipman/scenarios/:id   → Scenario Details (Midshipman view)
/midshipman/skills          → Skills Profile
/midshipman/physical        → Physical Development
/midshipman/mentor          → Mentor Page

/mission/:scenarioId        → Mission Screen (both roles)
/feedback/:scenarioId       → Feedback Screen (both roles)
```

### 3.3 Implementation Approach

1. **Create Route Components**:
   - `src/routes/InstructorRoutes.tsx`
   - `src/routes/MidshipmanRoutes.tsx`
   - `src/routes/index.tsx`

2. **Refactor App.tsx**:
   - Replace `useState<View>` with React Router
   - Use `useNavigate()` instead of `setCurrentView()`
   - Use `useParams()` for dynamic IDs

3. **Update Components**:
   - Replace `onClick={() => setCurrentView(...)}` with `<Link to="...">`
   - Use `useNavigate()` hook for programmatic navigation

### 3.4 State Management Considerations

Current state in App.tsx:
- `userRole` → Move to URL path prefix (`/instructor` vs `/midshipman`)
- `currentView` → Derived from URL path
- `selectedStudentId` → URL param (`:id`)
- `selectedScenarioId` → URL param (`:id`)
- `selectedAssignmentId` → URL param (`:id`)
- `createdAssignments` → Keep in React state (or later move to backend)

### 3.5 Stage 2 Deliverables

- [ ] URL-based navigation
- [ ] Browser back/forward works
- [ ] Direct URL access works (deep linking)
- [ ] Shareable URLs for scenarios/assignments

---

## 4. Stage 3: Full-Stack Foundation

**Goal:** Add API layer for future backend integration.

### 4.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| API Routes | Vercel Serverless Functions | Zero config, scales automatically |
| Database | Supabase (PostgreSQL) | Free tier, real-time, auth-ready |
| ORM | Prisma | Type-safe, great DX |
| API Client | TanStack Query (React Query) | Caching, optimistic updates |

### 4.2 Project Structure Evolution

```
USNA_v2/
├── src/
│   ├── components/        (existing)
│   ├── routes/            (new - from Stage 2)
│   ├── hooks/             (new)
│   │   ├── useScenarios.ts
│   │   ├── useStudents.ts
│   │   └── useAssignments.ts
│   ├── lib/               (new)
│   │   ├── api.ts         (API client)
│   │   └── supabase.ts    (Supabase client)
│   ├── types/             (new)
│   │   └── index.ts       (shared types)
│   └── data/              (existing - becomes seed data)
├── api/                   (new - Vercel serverless)
│   ├── scenarios/
│   │   ├── index.ts       (GET /api/scenarios)
│   │   └── [id].ts        (GET /api/scenarios/:id)
│   ├── students/
│   └── assignments/
├── prisma/                (new)
│   └── schema.prisma
└── ...
```

### 4.3 API Design Principles

For rapid MVP iteration:
- **REST over GraphQL**: Simpler, faster to implement
- **Vercel Serverless Functions**: No separate backend deployment
- **Supabase Direct Access**: Use Supabase client directly for simple CRUD
- **API Routes for Complex Logic**: Use Vercel functions only when needed

### 4.4 Stage 3 Deliverables

- [ ] Supabase project created
- [ ] Database schema defined (Prisma)
- [ ] Basic CRUD API routes
- [ ] React Query integration
- [ ] Mock data migrated to database

---

## 5. Stage 4: Data Layer Evolution

**Goal:** Migrate from mock data to live database.

### 5.1 Data Model (Prisma Schema)

```prisma
model Scenario {
  id          String   @id @default(cuid())
  title       String
  subtitle    String?
  description String?
  area        String?
  course      String?
  module      String?
  status      String   @default("draft")
  difficulty  String?
  imageUrl    String?
  location    String?
  role        String?
  time        String?
  situation   String?
  dilemma     String?
  briefing    String?
  frameworks  String[] @default([])
  tags        String[] @default([])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  assignments Assignment[]
}

model Student {
  id           String   @id @default(cuid())
  name         String
  email        String?
  company      String?
  class        String?
  avatarUrl    String?
  createdAt    DateTime @default(now())

  completions  Completion[]
}

model Assignment {
  id          String   @id @default(cuid())
  title       String
  dueDate     DateTime?
  status      String   @default("draft")
  scenarioId  String
  scenario    Scenario @relation(fields: [scenarioId], references: [id])
  createdAt   DateTime @default(now())

  completions Completion[]
}

model Completion {
  id           String   @id @default(cuid())
  studentId    String
  student      Student  @relation(fields: [studentId], references: [id])
  assignmentId String
  assignment   Assignment @relation(fields: [assignmentId], references: [id])
  score        Float?
  feedback     String?
  completedAt  DateTime @default(now())
}
```

### 5.2 Migration Strategy

1. **Seed Database**: Convert `mockScenarios.ts` to Prisma seed
2. **Dual Read**: Read from DB, fall back to mock data
3. **Feature Flags**: Toggle between mock and live data
4. **Full Migration**: Remove mock data dependencies

### 5.3 Stage 4 Deliverables

- [ ] Database seeded with existing mock data
- [ ] All reads from database
- [ ] All writes to database
- [ ] Mock data files archived/removed

---

## 6. Technical Decisions & Trade-offs

### 6.1 Why Vercel?

| Factor | Vercel | Alternatives |
|--------|--------|--------------|
| Setup complexity | Minimal | AWS/Azure require more config |
| Serverless functions | Built-in | Separate deployment needed |
| Preview deployments | Automatic | Manual setup required |
| Cost at MVP scale | Free tier | Varies |
| Integration with Supabase | Excellent | Good across platforms |

### 6.2 Why NOT Next.js?

The current Vite + React setup is sufficient because:
- No SSR requirements (educational tool, not SEO-critical)
- Existing codebase would require significant refactoring
- Vite builds are faster for this use case
- Keeping the stack simple reduces iteration friction

**Consideration for Future:** If SSR becomes necessary (SEO, performance), migrating to Next.js is straightforward.

### 6.3 Why Supabase over Firebase?

| Factor | Supabase | Firebase |
|--------|----------|----------|
| Query language | SQL (familiar) | NoSQL (learning curve) |
| Type safety | Better with Prisma | Requires more setup |
| Real-time | Built-in | Built-in |
| Auth | Ready when needed | Ready when needed |
| Pricing | Generous free tier | Generous free tier |
| Vendor lock-in | Lower (PostgreSQL) | Higher (proprietary) |

### 6.4 Authentication (Deferred)

Per requirements, authentication is explicitly deferred. When needed:
- **Recommended:** Supabase Auth (already in ecosystem)
- **Alternative:** Clerk (better DX, more features)
- **Simple Option:** Magic links (no passwords)

---

## 7. Future Considerations

### 7.1 Performance Optimizations (When Needed)

- **Code Splitting**: Already supported by Vite, add `lazy()` for routes
- **Image Optimization**: Move Figma assets to Vercel Image Optimization or Cloudinary
- **Caching**: React Query handles client-side; add CDN headers for API

### 7.2 Testing Strategy (When Needed)

```
├── tests/
│   ├── unit/           (Vitest - component logic)
│   ├── integration/    (Vitest - API routes)
│   └── e2e/            (Playwright - critical flows)
```

Priority order for tests:
1. Mission/Feedback flow (core user journey)
2. Scenario CRUD (instructor workflow)
3. Assignment lifecycle

### 7.3 Monitoring & Analytics (When Needed)

- **Error Tracking**: Sentry (free tier)
- **Analytics**: Vercel Analytics (built-in) or PostHog (self-hostable)
- **Performance**: Vercel Speed Insights

### 7.4 Scaling Considerations

At current MVP scope, scaling is not a concern. If usage grows:
- Vercel scales serverless functions automatically
- Supabase handles database scaling
- Consider edge functions for latency-critical paths

---

## Appendix A: Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server

# Build & Preview
npm run build            # Production build
npm run preview          # Preview production build locally

# Deployment (automatic via GitHub)
git push origin main     # Triggers Vercel deployment

# Database (Stage 3+)
npx prisma generate      # Generate Prisma client
npx prisma db push       # Push schema to database
npx prisma studio        # Visual database editor
npx prisma db seed       # Seed database
```

---

## Appendix B: Environment Variables

Create `.env.local` for local development (Stage 3+):

```env
# Supabase
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional: ElevenLabs (already in codebase)
VITE_ELEVENLABS_AGENT_ID=agent_1801kew39j9ye8jtv09ar8sadc00
```

Add to Vercel Environment Variables for production.

---

## Appendix C: Checklist for Stage 1 Deployment

```markdown
## Pre-Deployment
- [ ] Create tsconfig.json
- [ ] Create tsconfig.node.json
- [ ] Update vite.config.ts (outDir: 'dist')
- [ ] Add preview script to package.json
- [ ] Create vercel.json
- [ ] Update .gitignore
- [ ] Run `npm run build` locally - fix any errors
- [ ] Run `npm run preview` - verify locally

## Deployment
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Configure build settings
- [ ] Deploy
- [ ] Verify all pages work
- [ ] Test both user roles
- [ ] Verify assets load correctly

## Post-Deployment
- [ ] Share URL with stakeholders
- [ ] Document any issues found
- [ ] Plan Stage 2 priorities
```

---

*This document will evolve as the project progresses. Each stage should be reviewed and updated before implementation.*
