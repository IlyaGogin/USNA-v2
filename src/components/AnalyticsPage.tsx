import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, Download, Users, Target, Award } from 'lucide-react';
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import { mockScenarios } from '../data/mockScenarios';
import { getCourseById } from '../data/lel-curriculum';

// Import scenario images  
import imgInnerRing from "figma:asset/b25dac17eafb0809e8e66dfb8e38b0b478c49c3a.png";
import imgChallenger from "figma:asset/094aa37446df343e91a51c5e6370d33a29a9117e.png";
import imgMilgram from "figma:asset/e072d8b684744120a64985000a2e8c7945b7d891.png";

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  // Parse difficulty string like "HARD: 5/5" or "INT: 3/5" or "EASY: 2/5"
  const difficultyType = difficulty.split(':')[0].trim();
  const bars = difficultyType === 'EASY' ? 2 : difficultyType.includes('INT') ? 4 : 5;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
        <p className="leading-[14px]">{difficultyType}</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`bg-[#fcc32b] col-end-auto col-start-1 h-[12px] rounded-[1px] row-end-auto row-start-1 w-[2px] ${
              i >= bars ? 'opacity-30' : ''
            }`}
            style={{ marginLeft: `${i * 5}px` }}
          />
        ))}
      </div>
    </div>
  );
}

export function AnalyticsPage() {
  const [activeSection, setActiveSection] = useState<'overview' | 'scenarios' | 'students' | 'trends'>('overview');
  const [selectedSkill, setSelectedSkill] = useState<string[]>(['leadership', 'communication', 'ethics', 'technical', 'physical']);

  // Mock data for skill development over time
  const skillTrendData = [
    { month: 'Aug', leadership: 64, communication: 71, ethics: 72, technical: 59, physical: 67 },
    { month: 'Sep', leadership: 65, communication: 72, ethics: 71, technical: 61, physical: 68 },
    { month: 'Oct', leadership: 66, communication: 72, ethics: 71, technical: 63, physical: 69 },
    { month: 'Nov', leadership: 68, communication: 73, ethics: 71, technical: 65, physical: 70 }
  ];

  // Mock data for cohort comparison
  const cohortComparisonData = [
    { skill: 'Leadership', thisYear: 68, lastYear: 60 },
    { skill: 'Communication', thisYear: 73, lastYear: 71 },
    { skill: 'Ethics', thisYear: 71, lastYear: 72 },
    { skill: 'Technical', thisYear: 65, lastYear: 59 },
    { skill: 'Physical', thisYear: 70, lastYear: 67 }
  ];

  // Mock data for top performing scenarios
  const topScenarios = [
    { name: 'Crisis Leadership: Ship Systems Failure', completions: 156, avgScore: 76, impact: '+8 pts' },
    { name: 'Ethical Dilemma: Mission vs. Welfare', completions: 143, avgScore: 68, impact: '+12 pts' },
    { name: 'Delegation Under Time Pressure', completions: 167, avgScore: 81, impact: '+4 pts' }
  ];

  // Get actual scenarios from mockScenarios
  const topPerformingScenarios = [
    { ...mockScenarios[0], completions: 156, avgScore: 76, impact: '+8 pts' }, // The Inner Ring
    { ...mockScenarios[2], completions: 143, avgScore: 78, impact: '+12 pts' }, // The Challenger Decision
    { ...mockScenarios[1], completions: 134, avgScore: 71, impact: '+6 pts' }  // Milgram Obedience
  ];

  const scenariosNeedingReview = [
    { ...mockScenarios[0], completions: 78, avgScore: 54, abandonmentRate: '42%', issue: 'Midshipmen are finding this scenario too difficult and abandoning it. Consider reducing complexity or providing more context in the briefing.' },
    { ...mockScenarios[2], completions: 34, avgScore: 62, engagement: 'Very low', issue: 'This scenario has significantly lower engagement than others. Try featuring it in an assignment or improving the description to make it more compelling.' }
  ];

  // Mock data for at-risk students
  const atRiskStudents = [
    { name: 'MIDN 3/C Johnson, M.', issue: 'Leadership -8pts, Ethics -5pts', action: 'Assign Crisis Leadership scenarios' },
    { name: 'MIDN 3/C Williams, A.', issue: 'Technical skills 15pts below avg', action: 'Assign Technical fundamentals' },
    { name: 'MIDN 3/C Davis, K.', issue: 'No activity for 14 days', action: 'Contact immediately' }
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkill.includes(skill)) {
      setSelectedSkill(selectedSkill.filter(s => s !== skill));
    } else {
      setSelectedSkill([...selectedSkill, skill]);
    }
  };

  return (
    <div className="bg-[#efeef7] relative w-full h-[calc(100vh-78px)]">
      {/* Left Section - Navigation & Key Metrics */}
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[0_67.59%_0_0] items-start overflow-auto p-[40px]">
        {/* Main Performance Card */}
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute inset-0 rounded-[12px] bg-[#05205d]" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
          </div>
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative w-full">
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
                  <p className="basis-0 font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#e8e8e8] text-[18px]">Class Completion</p>
                </div>
                <div className="flex items-baseline gap-[4px]">
                  <p className="font-normal leading-[36px] relative shrink-0 text-[36px] text-center text-nowrap text-[rgba(255,255,255,0.5)]">%</p>
                  <p className="font-normal leading-[120px] relative shrink-0 text-[120px] text-center text-nowrap text-white">87</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                    <line stroke="white" strokeOpacity="0.25" x2="448" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-center text-nowrap w-full">
                <p className="relative shrink-0">Active midshipmen</p>
                <p className="relative shrink-0">124/128</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <button
            onClick={() => setActiveSection('overview')}
            className={`content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full transition-colors ${
              activeSection === 'overview' ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
            }`}
          >
            <Target className="size-[20px] text-[#171717]" strokeWidth={1.5} />
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">Overview</p>
          </button>
          <button
            onClick={() => setActiveSection('scenarios')}
            className={`content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full transition-colors ${
              activeSection === 'scenarios' ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
            }`}
          >
            <Award className="size-[20px] text-[#171717]" strokeWidth={1.5} />
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">Scenario Performance</p>
          </button>
          <button
            onClick={() => setActiveSection('students')}
            className={`content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full transition-colors ${
              activeSection === 'students' ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
            }`}
          >
            <Users className="size-[20px] text-[#171717]" strokeWidth={1.5} />
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">Midshipman Progress</p>
          </button>
          <button
            onClick={() => setActiveSection('trends')}
            className={`content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full transition-colors ${
              activeSection === 'trends' ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
            }`}
          >
            <TrendingUp className="size-[20px] text-[#171717]" strokeWidth={1.5} />
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">Skill Development</p>
          </button>
        </div>

        {/* Quick Export */}
        <button className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors">
          <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
          <Download className="size-[16px] text-[#0d004d]" />
          <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
            <p className="leading-[16px]">Export Full Report</p>
          </div>
        </button>
      </div>

      {/* Right Section - Content Area */}
      <div className="absolute inset-[0_0_0_32.41%] overflow-auto">
        <div className="p-[40px]">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="content-stretch flex flex-col gap-[32px] items-start">
              {/* Skill Development Cards */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <div className="grid grid-cols-2 gap-[16px] w-full">
                  {/* Leadership Card */}
                  <div className="bg-white rounded-[12px] p-[24px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] flex flex-col gap-[16px]">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col gap-[8px]">
                        <p className="font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">Leadership</p>
                        <div className="flex items-center gap-[6px]">
                          <TrendingUp className="size-[16px] text-[#00B057]" strokeWidth={2} />
                          <p className="font-medium leading-[20px] text-[#00B057] text-[16px]">+4</p>
                        </div>
                      </div>
                      <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">68</p>
                    </div>
                    <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Your midshipmen are showing strong improvement here. Crisis Leadership scenarios have been particularly effective, boosting scores by an average of 8 points.</p>
                    <div className="bg-[#f6f6fb] rounded-[4px] px-[12px] py-[10px]">
                      <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">23 midshipmen are on track for the Advanced Leadership credential.</p>
                    </div>
                  </div>

                  {/* Communication Card */}
                  <div className="bg-white rounded-[12px] p-[24px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] flex flex-col gap-[16px]">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col gap-[8px]">
                        <p className="font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">Communication</p>
                        <div className="flex items-center gap-[6px]">
                          <TrendingUp className="size-[16px] text-[#00B057]" strokeWidth={2} />
                          <p className="font-medium leading-[20px] text-[#00B057] text-[16px]">+2</p>
                        </div>
                      </div>
                      <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">73</p>
                    </div>
                    <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">This is your class's strongest area—great work! However, the Cross-Cultural Communication scenario has low engagement.</p>
                    <div className="bg-[#f6f6fb] rounded-[4px] px-[12px] py-[10px]">
                      <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">Consider reviewing this module or assigning it more directly.</p>
                    </div>
                  </div>

                  {/* Ethics Card */}
                  <div className="bg-white rounded-[12px] p-[24px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] flex flex-col gap-[16px]">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col gap-[8px]">
                        <p className="font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">Ethics</p>
                        <div className="flex items-center gap-[6px]">
                          <TrendingDown className="size-[16px] text-[#E50B00]" strokeWidth={2} />
                          <p className="font-medium leading-[20px] text-[#E50B00] text-[16px]">-1</p>
                        </div>
                      </div>
                      <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">71</p>
                    </div>
                    <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">We've noticed a slight decline this month. This might be a good time to reinforce ethical reasoning frameworks.</p>
                    <div className="bg-[#f6f6fb] rounded-[4px] px-[12px] py-[10px]">
                      <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">Try assigning scenarios focused on moral dilemmas and consequences.</p>
                    </div>
                  </div>

                  {/* Technical Card */}
                  <div className="bg-white rounded-[12px] p-[24px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] flex flex-col gap-[16px]">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col gap-[8px]">
                        <p className="font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">Technical</p>
                        <div className="flex items-center gap-[6px]">
                          <TrendingUp className="size-[16px] text-[#00B057]" strokeWidth={2} />
                          <p className="font-medium leading-[20px] text-[#00B057] text-[16px]">+6</p>
                        </div>
                      </div>
                      <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">65</p>
                    </div>
                    <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Excellent progress! Your class has improved more in this area than any other this semester.</p>
                    <div className="bg-[#f6f6fb] rounded-[4px] px-[12px] py-[10px]">
                      <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">One midshipman is significantly below average—we recommend reaching out for 1-on-1 support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="bg-[#f6f6fb] rounded-[8px] p-[24px] w-full">
                <p className="font-medium leading-[20px] text-[#0074dd] text-[16px] mb-[16px]">Engagement Metrics</p>
                <div className="grid grid-cols-3 gap-[24px]">
                  <div>
                    <p className="font-medium leading-[36px] text-[#171717] text-[28px] tracking-[-0.56px]">12.4</p>
                    <p className="font-medium leading-[16px] text-[#5d5d5d] text-[14px]">Avg scenarios per midshipman</p>
                  </div>
                  <div>
                    <p className="font-medium leading-[36px] text-[#171717] text-[28px] tracking-[-0.56px]">3.2 hrs</p>
                    <p className="font-medium leading-[16px] text-[#5d5d5d] text-[14px]">Weekly platform time</p>
                  </div>
                  <div>
                    <p className="font-medium leading-[36px] text-[#171717] text-[28px] tracking-[-0.56px]">82%</p>
                    <p className="font-medium leading-[16px] text-[#5d5d5d] text-[14px]">Completion consistency</p>
                  </div>
                </div>
              </div>

              {/* Alert Box - Moved below engagement */}
              <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium leading-[20px] text-[#171717] text-[16px]">3 midshipmen need attention</p>
                    <p className="font-medium leading-[18px] text-[#5d5d5d] text-[14px]">
                      Midshipmen showing declining performance or disengagement patterns
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveSection('students')}
                    className="bg-[#E50B00] hover:bg-[#cc0a00] text-white rounded-[1000px] px-[20px] py-[10px] transition-colors shrink-0"
                  >
                    <p className="font-medium leading-[16px] text-[14px]">View Details</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Scenario Performance Section */}
          {activeSection === 'scenarios' && (
            <div className="content-stretch flex flex-col gap-[32px] items-start">
              {/* Top Performing Scenarios - Visual Cards */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-medium leading-[20px] text-[#171717] text-[16px]">Top Performing Scenarios</p>
                  <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">{topPerformingScenarios.reduce((sum, s) => sum + s.completions, 0)} total completions</p>
                </div>
                <div className="grid grid-cols-3 gap-[16px] w-full">
                  {topPerformingScenarios.map((scenario, idx) => (
                    <div key={idx} className="flex flex-col">
                      {/* Scenario Card */}
                      <div className="bg-white rounded-[8px] overflow-hidden border border-[rgba(13,0,77,0.15)]">
                        {/* Image Section */}
                        <div className="relative h-[160px]">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                            <img 
                              alt="" 
                              className="absolute max-w-none object-50%-50% object-cover size-full" 
                              src={idx === 0 ? imgInnerRing : idx === 1 ? imgChallenger : imgMilgram}
                            />
                            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                          </div>
                          {/* Course Badge */}
                          <div className="absolute inset-0 p-[16px] flex items-start justify-between">
                            <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                              <p className="leading-[28px]">{scenario.course}</p>
                            </div>
                          </div>
                        </div>
                        {/* Content Section */}
                        <div className="p-[16px]">
                          <p className="font-medium leading-[22px] text-[#171717] text-[16px] mb-[4px]">{scenario.title}</p>
                          <p className="font-medium leading-[18px] text-[#0074dd] text-[12px] mb-[8px] truncate">{scenario.subtitle}</p>
                          <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px] mb-[12px] line-clamp-2">{scenario.description}</p>
                          {/* Stats */}
                          <div className="flex items-center justify-between pt-[12px] border-t border-[rgba(13,0,77,0.08)]">
                            <p className="font-medium leading-[16px] text-[#5d5d5d] text-[11px]">{scenario.completions} completions</p>
                            <div className="flex items-center gap-[8px]">
                              <p className="font-medium leading-[16px] text-[#5d5d5d] text-[11px]">Avg</p>
                              <p className="font-medium leading-[20px] text-[#171717] text-[18px]">{scenario.avgScore}</p>
                            </div>
                          </div>
                          {/* Impact Badge */}
                          <div className="mt-[8px] bg-[#e8f5e9] rounded-[4px] px-[8px] py-[4px] inline-block">
                            <p className="font-medium leading-[14px] text-[#00B057] text-[11px]">{scenario.impact} improvement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#f6f6fb] rounded-[8px] px-[16px] py-[12px] w-full">
                  <p className="font-medium leading-[18px] text-[#171717] text-[12px]">These scenarios are driving the most skill improvement. Crisis Leadership has been particularly impactful, with midshipmen averaging an 8-point gain after completion.</p>
                </div>
              </div>

              {/* Scenarios Needing Review */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <p className="font-medium leading-[20px] text-[#171717] text-[16px]">Scenarios Needing Review</p>
                <div className="grid grid-cols-2 gap-[16px] w-full">
                  {scenariosNeedingReview.map((scenario, idx) => (
                    <div key={idx} className="bg-white rounded-[8px] overflow-hidden border border-[rgba(13,0,77,0.15)]">
                      {/* Image Section */}
                      <div className="relative h-[140px]">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                          <img 
                            alt="" 
                            className="absolute max-w-none object-50%-50% object-cover size-full" 
                            src={idx === 0 ? imgInnerRing : idx === 1 ? imgChallenger : imgMilgram}
                          />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        {/* Course Badge */}
                        <div className="absolute inset-0 p-[16px] flex items-start justify-between">
                          <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                            <p className="leading-[28px]">{scenario.course}</p>
                          </div>
                        </div>
                      </div>
                      {/* Content Section */}
                      <div className="p-[16px]">
                        <p className="font-medium leading-[22px] text-[#171717] text-[16px] mb-[4px]">{scenario.title}</p>
                        <p className="font-medium leading-[18px] text-[#0074dd] text-[12px] mb-[12px] truncate">{scenario.subtitle}</p>
                        {/* Stats */}
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[11px] mb-[12px]">
                          {scenario.avgScore} avg score · {scenario.completions} completions · {scenario.abandonmentRate ? `${scenario.abandonmentRate} abandonment rate` : `${scenario.engagement} engagement`}
                        </p>
                        {/* Issue */}
                        <div className="bg-[#fff4f4] rounded-[8px] px-[12px] py-[10px]">
                          <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">{scenario.issue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Insight */}
              <div className="bg-[#f6f6fb] rounded-[8px] px-[16px] py-[12px] w-full">
                <p className="font-medium leading-[18px] text-[#171717] text-[12px]">Overall, your scenarios are becoming more effective each week. Average skill improvement per scenario has increased from +3.2 points to +5.8 points over the past month.</p>
              </div>
            </div>
          )}

          {/* Student Progress Section */}
          {activeSection === 'students' && (
            <div className="content-stretch flex flex-col gap-[32px] items-start">
              {/* Students Requiring Attention - Visual Cards */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <p className="font-medium leading-[20px] text-[#171717] text-[16px]">Midshipmen Requiring Attention</p>
                <div className="grid grid-cols-3 gap-[16px] w-full">
                  {/* Student 1: Johnson, Michael */}
                  <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] overflow-hidden">
                    <div className="bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] p-[20px] pb-[60px] relative">
                      <div className="flex items-start justify-between mb-[12px]">
                        <div>
                          <p className="font-medium leading-[16px] text-white text-[12px] mb-[4px]">MIDN 3/C</p>
                          <p className="font-medium leading-[24px] text-white text-[18px]">Johnson, M.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.2)] rounded-[4px] px-[8px] py-[4px]">
                          <p className="font-medium leading-[14px] text-white text-[11px]">3rd Class</p>
                        </div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100" 
                        alt="Johnson, M." 
                        className="absolute bottom-[-40px] right-[20px] size-[80px] rounded-full border-4 border-white object-cover"
                      />
                    </div>
                    <div className="p-[16px] pt-[48px]">
                      <div className="bg-[#fff4f4] rounded-[8px] px-[12px] py-[10px] mb-[12px]">
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">Leadership -8pts, Ethics -5pts</p>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[6px] bg-[#1d5282] rounded-full shrink-0" />
                        <p className="font-medium leading-[18px] text-[#1d5282] text-[12px]">Assign Crisis Leadership scenarios</p>
                      </div>
                    </div>
                  </div>

                  {/* Student 2: Williams, A. */}
                  <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] overflow-hidden">
                    <div className="bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] p-[20px] pb-[60px] relative">
                      <div className="flex items-start justify-between mb-[12px]">
                        <div>
                          <p className="font-medium leading-[16px] text-white text-[12px] mb-[4px]">MIDN 3/C</p>
                          <p className="font-medium leading-[24px] text-white text-[18px]">Williams, A.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.2)] rounded-[4px] px-[8px] py-[4px]">
                          <p className="font-medium leading-[14px] text-white text-[11px]">3rd Class</p>
                        </div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100" 
                        alt="Williams, A." 
                        className="absolute bottom-[-40px] right-[20px] size-[80px] rounded-full border-4 border-white object-cover"
                      />
                    </div>
                    <div className="p-[16px] pt-[48px]">
                      <div className="bg-[#fff4f4] rounded-[8px] px-[12px] py-[10px] mb-[12px]">
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">Technical skills 15pts below avg</p>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[6px] bg-[#1d5282] rounded-full shrink-0" />
                        <p className="font-medium leading-[18px] text-[#1d5282] text-[12px]">Assign Technical fundamentals</p>
                      </div>
                    </div>
                  </div>

                  {/* Student 3: Davis, K. */}
                  <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] overflow-hidden">
                    <div className="bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] p-[20px] pb-[60px] relative">
                      <div className="flex items-start justify-between mb-[12px]">
                        <div>
                          <p className="font-medium leading-[16px] text-white text-[12px] mb-[4px]">MIDN 3/C</p>
                          <p className="font-medium leading-[24px] text-white text-[18px]">Davis, K.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.2)] rounded-[4px] px-[8px] py-[4px]">
                          <p className="font-medium leading-[14px] text-white text-[11px]">3rd Class</p>
                        </div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100" 
                        alt="Davis, K." 
                        className="absolute bottom-[-40px] right-[20px] size-[80px] rounded-full border-4 border-white object-cover"
                      />
                    </div>
                    <div className="p-[16px] pt-[48px]">
                      <div className="bg-[#fff4f4] rounded-[8px] px-[12px] py-[10px] mb-[12px]">
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">No activity for 14 days</p>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[6px] bg-[#1d5282] rounded-full shrink-0" />
                        <p className="font-medium leading-[18px] text-[#1d5282] text-[12px]">Contact immediately</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-[#f6f6fb] rounded-[8px] px-[16px] py-[12px] w-full">
                <p className="font-medium leading-[18px] text-[#171717] text-[12px]">These midshipmen have shown declining performance or disengagement patterns. Early intervention now can prevent larger issues down the road.</p>
              </div>

              {/* Performance Summary */}
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <p className="font-medium leading-[20px] text-[#171717] text-[16px]">Class Performance Summary</p>
                <div className="grid grid-cols-2 gap-[16px] w-full">
                  <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px]">
                    <div className="flex items-center gap-[12px] mb-[16px]">
                      <div className="size-[40px] bg-[#e8f5e9] rounded-[8px] flex items-center justify-center shrink-0">
                        <TrendingUp className="size-[20px] text-[#00B057]" />
                      </div>
                      <div>
                        <p className="font-medium leading-[28px] text-[#171717] text-[24px] tracking-[-0.48px]">23</p>
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">students</p>
                      </div>
                    </div>
                    <p className="font-medium leading-[18px] text-[#171717] text-[12px]">
                      On track for Advanced Leadership credential
                    </p>
                  </div>
                  <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px]">
                    <div className="flex items-center gap-[12px] mb-[16px]">
                      <div className="size-[40px] bg-[#fff4f4] rounded-[8px] flex items-center justify-center shrink-0">
                        <AlertCircle className="size-[20px] text-[#FF6B6B]" />
                      </div>
                      <div>
                        <p className="font-medium leading-[28px] text-[#171717] text-[24px] tracking-[-0.48px]">5</p>
                        <p className="font-medium leading-[18px] text-[#5d5d5d] text-[12px]">students</p>
                      </div>
                    </div>
                    <p className="font-medium leading-[18px] text-[#171717] text-[12px]">
                      May struggle with upcoming assessment based on skill gaps
                    </p>
                  </div>
                </div>
              </div>

              {/* Another Insight */}
              <div className="bg-[#f6f6fb] rounded-[8px] px-[16px] py-[12px] w-full">
                <p className="font-medium leading-[18px] text-[#171717] text-[12px]">Overall, your class is performing 8% higher in Leadership compared to last year's cohort at this point in the semester. Keep up the great work!</p>
              </div>
            </div>
          )}

          {/* Skill Development Trends Section */}
          {activeSection === 'trends' && (
            <div className="content-stretch flex flex-col gap-[32px] items-start">
              <div>
                <p className="font-medium leading-[36px] text-[#171717] text-[28px] tracking-[-0.56px] mb-[8px]">Skill Development Trends</p>
                <p className="font-medium leading-[20px] text-[#5d5d5d] text-[16px]">Track competency growth over time</p>
              </div>

              {/* Skill Toggles */}
              <div className="flex items-center gap-[12px] flex-wrap">
                <button
                  onClick={() => toggleSkill('leadership')}
                  className={`px-[16px] py-[8px] rounded-[1000px] border transition-colors ${
                    selectedSkill.includes('leadership')
                      ? 'bg-[#1d5282] border-[#1d5282] text-white'
                      : 'bg-white border-[rgba(13,0,77,0.15)] text-[#5d5d5d] hover:bg-[#f6f6fb]'
                  }`}
                >
                  <p className="font-medium leading-[16px] text-[14px]">Leadership</p>
                </button>
                <button
                  onClick={() => toggleSkill('communication')}
                  className={`px-[16px] py-[8px] rounded-[1000px] border transition-colors ${
                    selectedSkill.includes('communication')
                      ? 'bg-[#00B057] border-[#00B057] text-white'
                      : 'bg-white border-[rgba(13,0,77,0.15)] text-[#5d5d5d] hover:bg-[#f6f6fb]'
                  }`}
                >
                  <p className="font-medium leading-[16px] text-[14px]">Communication</p>
                </button>
                <button
                  onClick={() => toggleSkill('ethics')}
                  className={`px-[16px] py-[8px] rounded-[1000px] border transition-colors ${
                    selectedSkill.includes('ethics')
                      ? 'bg-[#9c27b0] border-[#9c27b0] text-white'
                      : 'bg-white border-[rgba(13,0,77,0.15)] text-[#5d5d5d] hover:bg-[#f6f6fb]'
                  }`}
                >
                  <p className="font-medium leading-[16px] text-[14px]">Ethics</p>
                </button>
                <button
                  onClick={() => toggleSkill('technical')}
                  className={`px-[16px] py-[8px] rounded-[1000px] border transition-colors ${
                    selectedSkill.includes('technical')
                      ? 'bg-[#FFCE00] border-[#FFCE00] text-black'
                      : 'bg-white border-[rgba(13,0,77,0.15)] text-[#5d5d5d] hover:bg-[#f6f6fb]'
                  }`}
                >
                  <p className="font-medium leading-[16px] text-[14px]">Technical</p>
                </button>
                <button
                  onClick={() => toggleSkill('physical')}
                  className={`px-[16px] py-[8px] rounded-[1000px] border transition-colors ${
                    selectedSkill.includes('physical')
                      ? 'bg-[#ff5722] border-[#ff5722] text-white'
                      : 'bg-white border-[rgba(13,0,77,0.15)] text-[#5d5d5d] hover:bg-[#f6f6fb]'
                  }`}
                >
                  <p className="font-medium leading-[16px] text-[14px]">Physical</p>
                </button>
              </div>

              {/* Semester Progress Chart */}
              <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] w-full">
                <p className="font-medium leading-[20px] text-[#171717] text-[16px] mb-[20px]">Semester Progress</p>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={skillTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e8e6f3" />
                      <XAxis dataKey="month" stroke="#5d5d5d" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#5d5d5d" style={{ fontSize: '12px' }} />
                      <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid rgba(13,0,77,0.15)', borderRadius: '8px' }} />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      {selectedSkill.includes('leadership') && <Line type="monotone" dataKey="leadership" stroke="#1d5282" strokeWidth={2} name="Leadership" />}
                      {selectedSkill.includes('communication') && <Line type="monotone" dataKey="communication" stroke="#00B057" strokeWidth={2} name="Communication" />}
                      {selectedSkill.includes('ethics') && <Line type="monotone" dataKey="ethics" stroke="#9c27b0" strokeWidth={2} name="Ethics" />}
                      {selectedSkill.includes('technical') && <Line type="monotone" dataKey="technical" stroke="#FFCE00" strokeWidth={2} name="Technical" />}
                      {selectedSkill.includes('physical') && <Line type="monotone" dataKey="physical" stroke="#ff5722" strokeWidth={2} name="Physical" />}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Cohort Comparison */}
              <div className="bg-white rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] w-full">
                <p className="font-medium leading-[20px] text-[#171717] text-[16px] mb-[8px]">Cohort Comparison</p>
                <p className="font-medium leading-[18px] text-[#5d5d5d] text-[14px] mb-[20px]">
                  Compare current class performance to previous year
                </p>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={cohortComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e8e6f3" />
                      <XAxis dataKey="skill" stroke="#5d5d5d" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#5d5d5d" style={{ fontSize: '12px' }} />
                      <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid rgba(13,0,77,0.15)', borderRadius: '8px' }} />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="thisYear" fill="#1d5282" name="This Year" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="lastYear" fill="#e8e6f3" name="Last Year" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-[20px] bg-[#e8f5e9] rounded-[8px] px-[16px] py-[12px] border border-[#c8e6c9]">
                  <p className="font-medium leading-[20px] text-[#2e7d32] text-[14px]">
                    <span className="font-semibold">Key Insight:</span> Your 3rd Class midshipmen are performing 8% higher in Leadership than last year's cohort
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}