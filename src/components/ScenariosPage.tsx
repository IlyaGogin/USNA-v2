import { useState } from 'react';
import svgPaths from "../imports/svg-2wasbzlws9";
import { ChevronLeft } from 'lucide-react';

// Import scenario images from Figma
import imgInnerRing from "figma:asset/b25dac17eafb0809e8e66dfb8e38b0b478c49c3a.png";
import imgChallenger from "figma:asset/094aa37446df343e91a51c5e6370d33a29a9117e.png";
import imgMilgram from "figma:asset/e072d8b684744120a64985000a2e8c7945b7d891.png";
import imgAbuGhraib from "figma:asset/ac2d5005d1b01e0b1c79cb222edb110a7ae9648c.png";
import imgTrolley from "figma:asset/6577fdf878acc457e6a882fedb4da095ff1d4788.png";
import imgMyLai from "figma:asset/f86ef3ae06ccf54801dec90a63ad85ef95c67f7d.png";
import imgWhistleblowing from "figma:asset/81f017d3739b89f658f70b868744133c1c4cd42d.png";
import imgLucifer from "figma:asset/3bd37c1241aaaab4f0493222504af7f42f8b19f9.png";
import imgStanford from "figma:asset/6abce4617fb44ccfe048833e408277179041353b.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";

// Import new scenario images
import imgFlightTest from "figma:asset/4ac71b9ca7ac1f8bff2625e5c11ae7cbda5b2af7.png";
import imgQuickDecision from "figma:asset/52593c1b1eda0a0753111d28198dd73a8cdbc1ee.png";
import imgDifficultConversation from "figma:asset/6ce5ced382fd8d29c1d4b680e27ffcbba8506e7c.png";
import imgAccountability from "figma:asset/6393ea8d3a5fc64d2d9a630576264b8a92e2d81d.png";

type ScenariosPageProps = {
  onCreateScenario: () => void;
  onScenarioClick?: (scenarioId: string) => void;
};

type Scenario = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  courseCode: string;
  difficulty: 'EASY' | 'INT' | 'HARD';
  area: string;
  course: string;
  image: string;
};

const allCourses = [
  { code: 'NE203: Ethics and Moral Reasoning', area: 'Ethics' },
  { code: 'NL110: Applied Behavioral Science', area: 'Leadership' },
  { code: 'NL200: Human Behavior', area: 'Leadership' },
  { code: 'NL310: Organizational Behavior', area: 'Leadership' },
  { code: 'NL400: Law for the Naval Leader', area: 'Leadership' },
  { code: 'NL311: Psychology of Leadership', area: 'Leadership' },
  { code: 'NL411: Human Factors in Combat', area: 'Leadership' },
  { code: 'NL340: Change Management', area: 'Leadership' }
];

const scenarios: Scenario[] = [
  {
    id: '11',
    title: 'The Flight Test',
    subtitle: 'Moral Perception Under Authority Pressure',
    description: 'Develop moral courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions.',
    courseCode: 'NE-203',
    difficulty: 'EASY',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgFlightTest
  },
  {
    id: '12',
    title: 'The Quick Decision',
    subtitle: 'Recognizing Rushed Thinking',
    description: 'Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action.',
    courseCode: 'NL-110',
    difficulty: 'EASY',
    area: 'Leadership',
    course: 'NL110: Applied Behavioral Science',
    image: imgQuickDecision
  },
  {
    id: '13',
    title: 'The Difficult Conversation',
    subtitle: 'Leading Others with Honest Feedback',
    description: 'Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect.',
    courseCode: 'NL-310',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL310: Organizational Behavior',
    image: imgDifficultConversation
  },
  {
    id: '14',
    title: 'The Accountability Question',
    subtitle: 'Owning Outcomes as a Leader',
    description: 'Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame.',
    courseCode: 'NL-400',
    difficulty: 'HARD',
    area: 'Leadership',
    course: 'NL400: Law for the Naval Leader',
    image: imgAccountability
  },
  {
    id: '1',
    title: 'The Authority Question',
    subtitle: 'Authority & Moral Agency',
    description: 'Train participants to understand the psychology of obedience and develop skills to maintain moral agency when receiving questionable orders.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgMilgram
  },
  {
    id: '10',
    title: 'Pressure Point',
    subtitle: 'Moral Perception',
    description: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.',
    courseCode: 'NE-203',
    difficulty: 'EASY',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgMidshipman
  },
  {
    id: '2',
    title: 'The Launch Decision',
    subtitle: 'Organizational Ethics & Dissent',
    description: 'Explore the ethical responsibilities of engineers and managers when faced with pressure to launch despite safety concerns.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgChallenger
  },
  {
    id: '3',
    title: 'Inside the Wire',
    subtitle: 'Social Influence & Peer Pressure',
    description: 'Train participants to recognize and resist unhealthy social pressures to belong to exclusive "inner rings" or in-groups.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgInnerRing
  },
  {
    id: '4',
    title: 'The Dark Hours',
    subtitle: 'Situational Ethics & Military Conduct',
    description: 'Analyze the breakdown of ethical standards in extreme situations and the importance of moral courage in military settings.',
    courseCode: 'NE-203',
    difficulty: 'EASY',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgAbuGhraib
  },
  {
    id: '5',
    title: 'The Moral Roadmap',
    subtitle: 'Utilitarian vs. Deontological Ethics',
    description: 'Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning.',
    courseCode: 'NE-203',
    difficulty: 'INT',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgTrolley
  },
  {
    id: '6',
    title: '2 AM Courage',
    subtitle: 'War Crimes & Moral Courage',
    description: 'Study the breakdown of ethical conduct in combat and examine the role of moral courage in preventing atrocities.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning',
    image: imgMyLai
  },
  {
    id: '7',
    title: 'The Loyalty Test',
    subtitle: 'Loyalty vs. Integrity',
    description: 'Explore the ethical complexities of reporting misconduct while balancing organizational loyalty and personal integrity.',
    courseCode: 'NL-110',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL110: Applied Behavioral Science',
    image: imgWhistleblowing
  },
  {
    id: '8',
    title: 'Character in Crisis',
    subtitle: 'Power & Moral Corruption',
    description: 'Investigate how good people can be led to do bad things when given power in corrupt systems.',
    courseCode: 'NL-200',
    difficulty: 'HARD',
    area: 'Leadership',
    course: 'NL200: Human Behavior',
    image: imgLucifer
  },
  {
    id: '9',
    title: 'Abu Ghraib Echo',
    subtitle: 'Role Identity & Ethical Behavior',
    description: 'Examine how assigned roles and situational factors can override individual moral values and behavior.',
    courseCode: 'NL-311',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL311: Psychology of Leadership',
    image: imgStanford
  }
];

function DifficultyBadge({ difficulty }: { difficulty: 'EASY' | 'INT' | 'HARD' }) {
  const bars = difficulty === 'EASY' ? 2 : difficulty === 'INT' ? 4 : 5;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
        <p className="leading-[14px]">{difficulty}</p>
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

function ScenarioCard({ scenario, onClick }: { scenario: Scenario; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 hover:shadow-lg transition-shadow cursor-pointer w-[288px] h-[380px]"
    >
      <div className="aspect-[288/180] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={scenario.image} />
          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
        </div>
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                <p className="leading-[28px]">{scenario.courseCode}</p>
              </div>
              <DifficultyBadge difficulty={scenario.difficulty} />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      </div>

      <div className="relative shrink-0 w-full flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col h-full pb-[20px] pt-[12px] px-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col font-medium gap-[4px]">
              <p className="leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">{scenario.title}</p>
              <p className="leading-[16px] text-[#0074dd] text-[14px]">{scenario.subtitle}</p>
            </div>
            <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] line-clamp-4">{scenario.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScenariosPage({ onCreateScenario, onScenarioClick }: ScenariosPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  
  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  // Filter scenarios based on search query, selected area, course, and status
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesSearch = !searchQuery || 
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.area.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesArea = !selectedArea || scenario.area === selectedArea;
    const matchesCourse = !selectedCourse || scenario.course === selectedCourse;
    
    // If no statuses selected, show all. Otherwise filter by selected statuses
    // For now, assuming all scenarios are "Published" status
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes('Published');
    
    return matchesSearch && matchesArea && matchesCourse && matchesStatus;
  });

  // Filter courses based on selected area
  const filteredCourses = selectedArea 
    ? allCourses.filter(course => course.area === selectedArea)
    : allCourses;
  
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="bg-[#e8e6f3] flex flex-col gap-[32px] items-center p-[24px] w-[349px] overflow-auto">
        <button
          onClick={onCreateScenario}
          className="bg-[#ffce00] relative rounded-[1000px] shrink-0 w-full hover:bg-[#fcc32b] transition-colors"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
              <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create Scenario</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="black" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Area Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {selectedArea ? (
            <button
              onClick={() => {
                setSelectedArea(null);
                setSelectedCourse(null);
              }}
              className="flex items-center gap-[8px] font-medium leading-[20px] text-[#171717] text-[16px] hover:text-[#0074dd] transition-colors"
            >
              <ChevronLeft className="size-[16px]" />
              <span>{selectedArea}</span>
            </button>
          ) : (
            <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Area</p>
          )}
          
          {!selectedArea && (
            <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
              {['Ethics', 'Leadership', 'Philosophy & Psychology', 'Language & Communication', 'Coaching'].map((area) => (
                <div key={area} className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <button
                      onClick={() => setSelectedArea(area)}
                      className="content-stretch flex items-center px-[16px] py-[8px] relative w-full hover:bg-[rgba(13,0,77,0.05)] rounded-[4px] transition-colors"
                    >
                      <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{area}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status Filter */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            {['Published', 'Draft', 'In progress'].map((status) => (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
              >
                <div className={`relative rounded-[4px] shrink-0 size-[18px] border-2 border-[#1d74c2] flex items-center justify-center ${
                  selectedStatuses.includes(status) ? 'bg-[#1d74c2]' : 'bg-white'
                }`}>
                  {selectedStatuses.includes(status) && (
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{status}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Course Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            {filteredCourses.map((course) => (
              <div key={course.code} className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <button
                    onClick={() => setSelectedCourse(selectedCourse === course.code ? null : course.code)}
                    className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full rounded-[4px] transition-colors ${
                      selectedCourse === course.code ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                    }`}
                  >
                    <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{course.code}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[40px] py-[40px]">
          {/* Search */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full max-w-[800px] mx-auto">
            <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
              <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 border border-[#1d74c2]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] bg-transparent outline-none"
                    />
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="trim">
                              <path clipRule="evenodd" d={svgPaths.p1626e300} fill="#2E2E2E" fillRule="evenodd" id="icon" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario Grid */}
          <div className="content-stretch flex flex-wrap gap-[20px] items-start justify-center relative shrink-0 w-full">
            {filteredScenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} onClick={() => onScenarioClick?.(scenario.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}