# MVP 2.0: Full LEL Course Integration
## Implementation Summary

**Date**: December 17, 2024  
**Status**: Phase 1-2 Complete  
**Version**: Full LEL Curriculum Support

---

## ✅ What Has Been Implemented

### 1. Complete LEL Curriculum Structure (`/data/lel-curriculum.ts`)

#### **Three Primary Areas**
- **Ethics (NE)**: Moral reasoning and ethical decision-making
- **Leadership (NL)**: Behavioral science, psychology, organizational leadership  
- **Philosophy & Psychology (NP)**: Philosophy, law, specialized ethics

#### **14 Courses Across All Areas**

**ETHICS (NE) - 1 Course:**
- NE-203: Ethics and Moral Reasoning (Required, 3/C)

**LEADERSHIP (NL) - 8 Courses:**
- NL-110: Applied Behavioral Science (Required, 4/C)
- NL-200: Human Behavior (Elective)
- NL-310: Organizational Behavior (Required, 2/C)
- NL-400: Law for the Naval Leader (Required, 1/C)
- NL-311: Psychology of Leadership (Elective)
- NL-411: Human Factors in Combat (Elective)
- NL-340: Change Management (Elective)

**PHILOSOPHY & PSYCHOLOGY (NP) - 5 Courses:**
- NP-232: Military Ethics: The Code of the Warrior (Elective)
- NP-350: Philosopher and Fighter Pilot (Elective)
- NP-410: Philosophy of War (Elective)
- NP-430: Ethics and Irregular Warfare (Elective)
- NP-440: Stoic Philosophy and Leadership (Elective)

#### **Course Data Structure**
Each course includes:
- Course ID, code, name
- Area classification
- Credits and class year
- Required vs. elective status
- Full description
- **Modules** (not weeks/blocks):
  - Module number and title
  - Topics covered
  - Learning objectives
  - Case studies
  - Primary Moral Factors (where applicable)

#### **Example: NE-203 Structure**
```typescript
{
  id: 'NE-203',
  code: 'NE203',
  name: 'Ethics and Moral Reasoning',
  area: 'ethics',
  modules: [
    {
      module: 1,
      title: 'Moral Perception: Social Influences',
      topics: ['Moral narratives', 'Cultural perception', 'Asch conformity'],
      learningObjectives: [...],
      caseStudies: ['The Tunnel', 'Bacha Bazi'],
      primaryMoralFactors: ['character', 'specialObligations']
    },
    // ... 9 more modules
  ]
}
```

---

### 2. Restructured Scenario Creation Wizard

#### **Step 1: Area, Course & Module Selection** (UPDATED)

**New 3-Tier Hierarchy:**
1. **Select Area** (Ethics, Leadership, or Philosophy)
   - Displays area description
2. **Select Course** (filtered by area)
   - Shows course code, name, credits, year level
   - Displays "Required" badge if applicable
   - Shows full course description
3. **Select Module** (within course)
   - Displays module title and topics
   - Auto-populates learning objectives
   - Auto-selects primary moral factors (if available)

**Key Features:**
- Cascading dropdowns (select area → unlocks courses → unlocks modules)
- Auto-population of objectives when module selected
- Select All / Clear All for objectives
- Scenario title + subtitle fields
- AI-suggested titles with context subtitles
- Smart defaults from curriculum data

#### **Steps 2-6: Remain Consistent**
- Step 2: Ethical Framework Focus (Four Moral Factors)
- Step 3: Persona Configuration (user/AI personas, emotional states)
- Step 4: AI Scenario Generation
- Step 5: Difficulty & Scaffolding
- Step 6: Assessment Configuration (weighted Four Moral Factors)

---

### 3. Data Access Functions

**Helper Functions in `/data/lel-curriculum.ts`:**
```typescript
getCoursesByArea(area: Area): Course[]
getCourseById(courseId: string): Course | undefined
getRequiredCourses(): Course[]
getCoursesByClassYear(classYear): Course[]
getModuleById(courseId, moduleNumber): CourseModule | undefined
```

---

## 🎯 Key Design Decisions

### Why Area → Course → Module?

**OLD Structure (NE-203 only):**
```
Course (NE-203) → Block (I-IV) → Week (1-15) → Objectives
```

**NEW Structure (All LEL):**
```
Area (Ethics/Leadership/Philosophy) → Course (14 options) → Module (varies) → Objectives
```

**Benefits:**
1. **Scalable**: Supports all 40+ LEL courses (we've started with 14)
2. **Flexible**: Modules can be any number (not locked to 15 weeks)
3. **Organized**: Clear separation by academic area
4. **Realistic**: Matches how instructors think about curriculum

### Module vs. Week Terminology

- **Module**: Generic unit of instruction, can be 1 week, 2 weeks, or a thematic unit
- **Week**: Too specific to NE-203's 15-week structure
- **Module** allows flexibility for courses with different structures

---

## 📊 Scenario Tagging System

### How Scenarios Are Tagged

**Each scenario will have:**
```typescript
{
  id: string,
  title: string,
  subtitle: string,              // NEW: Contextual description
  area: 'ethics' | 'leadership' | 'philosophy',  // NEW
  course: string,                // e.g., 'NL-310', 'NP-410'
  module: number,                // e.g., 1, 2, 3
  primaryMoralFactors: MoralFactor[],
  // ... rest of scenario data
}
```

### Filtering Structure

**Admin Dashboard Filters:**
1. **By Area**:
   - All Areas
   - Ethics (NE)
   - Leadership (NL)
   - Philosophy & Psychology (NP)

2. **By Course** (within area):
   - Dropdown shows courses for selected area
   - Shows both required and elective courses

3. **By Status**:
   - Published
   - Draft
   - All

**Student Dashboard Filters:**
1. **By Course**: See scenarios assigned from specific courses
2. **By Status**: Assigned, In Progress, Completed
3. **By Moral Factor**: Filter by which factors were tested

---

## 🎓 Sample Scenarios Needed

### Coverage Matrix

To achieve comprehensive coverage, we need scenarios across:

| Area | Required Courses | Elective Courses | Total Scenarios Needed |
|------|-----------------|------------------|----------------------|
| **Ethics** | NE-203 (10 modules) | 0 | **10-15 scenarios** |
| **Leadership** | NL-110, NL-310, NL-400 | NL-200, NL-311, NL-411, NL-340 | **15-20 scenarios** |
| **Philosophy** | 0 | NP-232, NP-350, NP-410, NP-430, NP-440 | **10-15 scenarios** |
| **TOTAL** | - | - | **35-50 scenarios** |

### Priority Scenario Development

**Phase 1 (High Priority - Required Courses):**
1. **NE-203** (Ethics): 10 scenarios covering all 10 modules
2. **NL-310** (Organizational Behavior): 3 scenarios
3. **NL-400** (Law for Naval Leader): 2 scenarios
4. **NL-110** (Applied Behavioral Science): 2 scenarios

**Phase 2 (Medium Priority - Popular Electives):**
5. **NP-350** (Philosopher & Fighter Pilot): 2 scenarios
6. **NL-411** (Human Factors in Combat): 2 scenarios
7. **NP-410** (Philosophy of War): 2 scenarios

**Phase 3 (Low Priority - Specialized Electives):**
8. **NP-430** (Ethics and Irregular Warfare): 2 scenarios
9. **NL-340** (Change Management): 2 scenarios
10. **NP-440** (Stoic Philosophy): 2 scenarios

---

## 📋 Scenario Title Examples by Course

### Ethics (NE-203)
- "The Tunnel Dilemma" (Module 1: Moral Perception)
- "Organizational Integrity Crisis" (Module 2: Rationalization)
- "Dignity in Detention" (Module 3: Four Moral Factors)
- "The Prisoner Dilemma" (Module 4: Mere Means)
- "Collateral Damage Decision" (Module 5: Double Effect)
- "The Interrogation" (Module 6: Consequences)
- "Loyalty vs. Reporting" (Module 7: Special Obligations)
- "Character Under Fire" (Module 8: Virtue Ethics)
- "Disobeying Orders" (Module 9: Obedience)
- "Rules of Engagement" (Module 10: Just War)

### Leadership (NL-310)
- "Command Climate Transformation"
- "Motivating the Unmotivated"
- "Conflict in the Ready Room"

### Leadership (NL-400)
- "Search and Seizure on Ship"
- "ROE Ambiguity in Strait Transit"

### Leadership (NL-411)
- "Decision Under Combat Stress"
- "Maintaining Cohesion After Casualties"

### Philosophy (NP-350)
- "The Stockdale Paradox"
- "Leadership in Captivity"

### Philosophy (NP-410)
- "Justifying Humanitarian Intervention"
- "Drone Strike Proportionality"

### Philosophy (NP-430)
- "Enhanced Interrogation Dilemma"
- "COIN Hearts and Minds"

---

## 🔧 Technical Implementation Details

### Step 1 Validation Logic

```typescript
// Can only proceed from Step 1 if:
step1Data.area !== '' &&
step1Data.course !== '' &&
step1Data.module !== '' &&
selectedObjectives.length > 0 &&
step1Data.scenarioTitle !== '' &&
step1Data.scenarioSubtitle !== ''
```

### Auto-Population Flow

```
1. User selects AREA
   ↓
2. Courses for that area populate dropdown
   ↓
3. User selects COURSE
   ↓
4. Modules for that course populate dropdown
   ↓
5. User selects MODULE
   ↓
6. Learning objectives auto-populate (all selected by default)
   ↓
7. Primary Moral Factors auto-populate in Step 2 (if defined)
```

### Data References Updated

**OLD:**
- `step1Data.block` → **NEW:** `step1Data.area`
- `step1Data.week` → **NEW:** `step1Data.module`
- `NE203_CURRICULUM.blocks` → **NEW:** `getCoursesByArea(area)`
- `selectedWeek` → **NEW:** `selectedModule`

---

## 🚀 Next Steps

### Immediate (Week 1-2):
1. ✅ **DONE**: Create LEL curriculum structure
2. ✅ **DONE**: Update ScenarioCreation Step 1 with Area/Course/Module
3. ⏳ **TODO**: Complete Steps 3-6 full implementation (currently simplified)
4. ⏳ **TODO**: Update mock scenarios with area/course tagging
5. ⏳ **TODO**: Create 5-10 scenarios across different courses

### Short-term (Week 3-4):
6. Add Area/Course filters to AdminDashboard
7. Update StudentDashboard to show course information
8. Create ScenarioCard variants for different areas
9. Build scenario library browsing by area
10. Create pre-built scenario templates

### Medium-term (Week 5-8):
11. Expand to 35-50 total scenarios
12. Add course-specific assessment rubrics
13. Integrate real course syllabi data
14. Build instructor analytics by course
15. Create area-specific reporting

---

## 📖 Usage Guide for Instructors

### Creating a Scenario

**Step 1: Choose Your Course Content**
1. Select the **area** your scenario fits: Ethics, Leadership, or Philosophy
2. Choose the specific **course** (e.g., NE-203, NL-310, NP-410)
3. Select the **module** or unit within that course
4. Review and select relevant **learning objectives** (pre-populated)
5. Enter a **title** and **subtitle** or choose from AI suggestions

**Example Flow:**
```
Area: Ethics
  ↓
Course: NE-203 (Ethics and Moral Reasoning)
  ↓
Module: Module 7 (Special Obligations)
  ↓
Objectives: "Identify special obligations from roles and relationships"
            "Evaluate competing loyalties in military context"
  ↓
Title: "Loyalty vs. Reporting"
Subtitle: "Managing competing obligations between friend and duty"
```

---

## 🔍 Search & Filter Capabilities

### For Instructors (Admin Dashboard)

**Filter Scenarios By:**
- Area (Ethics, Leadership, Philosophy)
- Course (NE-203, NL-310, etc.)
- Module number
- Primary Moral Factors tested
- Difficulty level
- Status (Published, Draft)
- Class year (4/C, 3/C, 2/C, 1/C)

**Search Scenarios By:**
- Title or subtitle keywords
- Learning objectives
- Case studies mentioned
- Topics covered

### For Students

**View Scenarios By:**
- Assigned course
- Completion status
- Area of study
- Moral Factor performance gaps

---

## 📈 Analytics Possibilities

### Course-Level Analytics
- Most-used courses for scenarios
- Average scores by course
- Completion rates per course
- Popular modules for scenario creation

### Area-Level Analytics
- Ethics vs. Leadership vs. Philosophy distribution
- Student performance by area
- Instructor preferences by area
- Required vs. elective course usage

### Moral Factor Analytics
- Which factors are most tested across areas
- Correlation between course and factor performance
- Student growth by factor over time

---

## 🎨 UI Components Needed

### Course Selection Components
1. **AreaSelector**: Dropdown for Ethics/Leadership/Philosophy
2. **CourseCard**: Display course info with badge (Required/Elective)
3. **ModuleList**: Accordion or list of modules with topics
4. **CourseFilter**: Multi-select filter for dashboard

### Scenario Display Components
5. **ScenarioCardByArea**: Differentiate visually by area color
6. **CourseTag**: Small badge showing course code
7. **AreaIcon**: Visual indicator for Ethics/Leadership/Philosophy

### Color Scheme by Area
- **Ethics (NE)**: Blue tones (#1d5282 primary)
- **Leadership (NL)**: Gold/Yellow accents (#fcc32a)
- **Philosophy (NP)**: Purple/Gray tones

---

## ✅ Validation & Testing

### Test Cases for Step 1

**Area Selection:**
- [ ] Can select Ethics and see only NE courses
- [ ] Can select Leadership and see only NL courses
- [ ] Can select Philosophy and see only NP courses
- [ ] Switching area clears course and module selections

**Course Selection:**
- [ ] Courses display correct code, name, credits
- [ ] Required courses show badge
- [ ] Course description appears on selection
- [ ] Switching course clears module selection

**Module Selection:**
- [ ] Modules display correct titles and topics
- [ ] Selecting module auto-populates objectives
- [ ] Can manually select/deselect objectives
- [ ] Select All / Clear All work correctly

**Validation:**
- [ ] Cannot proceed without area, course, module
- [ ] Cannot proceed without at least 1 objective selected
- [ ] Cannot proceed without title and subtitle
- [ ] AI suggestions work and populate both fields

---

## 🗂️ File Structure

```
/data/
  ├── lel-curriculum.ts          ✅ Complete LEL catalogue
  ├── ne203-curriculum.ts        ⚠️  Deprecated (keep for reference)
  └── mockScenarios.ts           ⏳ Needs update with new fields

/components/
  ├── ScenarioCreation.tsx       ✅ Updated with Area/Course/Module
  ├── AdminDashboard.tsx         ⏳ Needs area/course filters
  ├── StudentDashboard.tsx       ⏳ Needs course display
  └── ScenarioCard.tsx           ⏳ Needs area/course tags

/App.tsx                         ✅ Type system updated
```

---

## 📝 Data Migration Notes

### For Existing Scenarios

If you have existing scenarios with `course: 'NE-203'`, they need:
```typescript
// ADD these fields:
area: 'ethics',
module: 1,  // determine from old week number
subtitle: 'Brief context description',

// UPDATE these fields:
course: 'NE-203',  // keep same format

// OPTIONAL (if not already present):
primaryMoralFactors: ['constraints', 'consequences'],
assessmentWeights: { constraints: 30, consequences: 30, character: 20, specialObligations: 20 }
```

---

*Last Updated: December 17, 2024*  
*Implementation: Phase 1-2 Complete*  
*Next Phase: Scenario Library & Course Filters*
