import { useState } from "react";
import svgPaths from "../imports/svg-2s4vjry5ri";
import svgPathsHeader from "../imports/svg-8ov7848mip";
import imgScenarioCard from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";
import imgScenarioCard1 from "figma:asset/b779ee82ddb43e48acba6d3e4b1deaae48a83e0b.png";
import imgScenarioCardMentor from "figma:asset/78b5f9880e3355f31936367c8969a5dcbd2b6a52.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import StudentProfileModal from "./StudentProfileModal";

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

type MidshipmanScenariosProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onScenarioClick?: (scenarioId: string) => void;
  onSignOut?: () => void;
  onMentorClick?: () => void;
};

// Scenarios data - same as instructor page
const scenarios = [
  {
    id: "11",
    title: "The Flight Test",
    subtitle: "Moral Perception Under Authority Pressure",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 2,
    description: "Develop moral courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions.",
    image: imgFlightTest,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "12",
    title: "The Quick Decision",
    subtitle: "Recognizing Rushed Thinking",
    course: "NL-110",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action.",
    image: imgQuickDecision,
    area: "Leadership",
    courseCode: "NL110: Applied Behavioral Science"
  },
  {
    id: "13",
    title: "The Difficult Conversation",
    subtitle: "Leading Others with Honest Feedback",
    course: "NL-310",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect.",
    image: imgDifficultConversation,
    area: "Leadership",
    courseCode: "NL310: Organizational Behavior"
  },
  {
    id: "14",
    title: "The Accountability Question",
    subtitle: "Owning Outcomes as a Leader",
    course: "NL-400",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame.",
    image: imgAccountability,
    area: "Leadership",
    courseCode: "NL400: Law for the Naval Leader"
  },
  {
    id: "1",
    title: "The Authority Question",
    subtitle: "Authority & Moral Agency",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Train participants to understand the psychology of obedience and develop skills to maintain moral agency when receiving questionable orders.",
    image: imgMilgram,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "10",
    title: "Pressure Point",
    subtitle: "Moral Perception",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.",
    image: imgMidshipman,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "2",
    title: "The Launch Decision",
    subtitle: "Organizational Ethics & Dissent",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Explore the ethical responsibilities of engineers and managers when faced with pressure to launch despite safety concerns.",
    image: imgChallenger,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "3",
    title: "Inside the Wire",
    subtitle: "Social Influence & Peer Pressure",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Train participants to recognize and resist unhealthy social pressures to belong to exclusive \"inner rings\" or in-groups.",
    image: imgInnerRing,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "4",
    title: "The Dark Hours",
    subtitle: "Situational Ethics & Military Conduct",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 2,
    description: "Analyze the breakdown of ethical standards in extreme situations and the importance of moral courage in military settings.",
    image: imgAbuGhraib,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "5",
    title: "The Moral Roadmap",
    subtitle: "Utilitarian vs. Deontological Ethics",
    course: "NE-203",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning.",
    image: imgTrolley,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "6",
    title: "2 AM Courage",
    subtitle: "War Crimes & Moral Courage",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Study the breakdown of ethical conduct in combat and examine the role of moral courage in preventing atrocities.",
    image: imgMyLai,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "7",
    title: "The Loyalty Test",
    subtitle: "Loyalty vs. Integrity",
    course: "NL-110",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Explore the ethical complexities of reporting misconduct while balancing organizational loyalty and personal integrity.",
    image: imgWhistleblowing,
    area: "Leadership",
    courseCode: "NL110: Applied Behavioral Science"
  },
  {
    id: "8",
    title: "Character in Crisis",
    subtitle: "Power & Moral Corruption",
    course: "NL-200",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Investigate how good people can be led to do bad things when given power in corrupt systems.",
    image: imgLucifer,
    area: "Leadership",
    courseCode: "NL200: Human Behavior"
  },
  {
    id: "9",
    title: "Abu Ghraib Echo",
    subtitle: "Role Identity & Ethical Behavior",
    course: "NL-311",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Examine how assigned roles and situational factors can override individual moral values and behavior.",
    image: imgStanford,
    area: "Leadership",
    courseCode: "NL311: Psychology of Leadership"
  }
];

const areas = ["Ethics", "Leadership", "Philosophy & Psychology", "Language & Communication", "Coaching"];
const courses = [
  "NE203: Ethics and Moral Reasoning",
  "NL110: Applied Behavioral Science",
  "NL200: Human Behavior",
  "NL310: Organizational Behavior",
  "NL400: Law for the Naval Leader",
  "NL311: Psychology of Leadership",
  "NL411: Human Factors in Combat",
  "NL340: Change Management"
];

export default function MidshipmanScenarios({
  onLogoClick,
  onTabChange,
  onScenarioClick,
  onSignOut,
  onMentorClick
}: MidshipmanScenariosProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  // Filter scenarios based on selected filters and search
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(scenario.area);
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(scenario.courseCode);
    const matchesSearch = searchQuery === "" || 
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesArea && matchesCourse && matchesSearch;
  });

  return (
    <div className="bg-[#efeef7] relative flex-1 overflow-hidden">
      {/* Header */}
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 right-0 z-10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer" onClick={onLogoClick}>
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <button 
            onClick={() => onTabChange?.("dashboard")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Dashboard</p>
            </div>
          </button>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Scenarios</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          </div>
          <button 
            onClick={() => onTabChange?.("skills")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("physical")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Physical Development</p>
            </div>
          </button>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button
            onClick={() => setShowProfileModal(true)}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="absolute left-0 size-[48px] top-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="#1D5282" r="24" />
            </svg>
            <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">DR</p>
          </button>
        </div>
      </div>

      {/* Left Sidebar - Filters */}
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[78px_auto_0_0] items-center p-[24px] w-[349px] overflow-auto">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <button 
            onClick={onMentorClick}
            className="aspect-[441/288] relative rounded-[8px] shrink-0 w-full hover:scale-[1.01] transition-transform"
          >
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCardMentor} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(185.887948deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.5) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col h-[197px] items-start justify-between left-0 p-[16px] top-0 w-[301px]">
                <p className="font-medium leading-[16px] relative shrink-0 text-[#e8e8e8] text-[14px] text-shadow-[0px_2px_1px_rgba(13,0,77,0.15),0px_1px_1px_rgba(13,0,77,0.1),0px_1px_3px_rgba(13,0,77,0.05)] w-full text-left">Get recommendations from a mentor</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <p className="font-medium leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-nowrap text-left">SME agents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </button>
        </div>

        {/* Area Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Area</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            {areas.map(area => (
              <div key={area} className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <button
                    onClick={() => toggleArea(area)}
                    className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full rounded-[4px] transition-colors ${
                      selectedAreas.includes(area) ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                    }`}
                  >
                    <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{area}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            {courses.map(course => (
              <div key={course} className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <button
                    onClick={() => toggleCourse(course)}
                    className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full rounded-[4px] transition-colors ${
                      selectedCourses.includes(course) ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                    }`}
                  >
                    <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{course}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-[78px_0_0_349px] overflow-auto">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[40px] py-[40px]">
          {/* Search Bar */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center max-w-[800px] min-h-px min-w-px relative shrink-0">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] bg-transparent outline-none border-none"
                      />
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                          <div className="relative shrink-0 size-[18px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path clipRule="evenodd" d={svgPaths.p1626e300} fill="#2E2E2E" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenarios Grid */}
          <div className="content-stretch flex flex-wrap gap-[20px] items-start justify-center relative shrink-0 w-full">
            {filteredScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => onScenarioClick?.(scenario.id)}
                className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 hover:shadow-[0px_4px_6px_0px_rgba(13,0,77,0.1)] transition-shadow w-[288px] h-[380px]"
              >
                <div className="aspect-[288/180] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={scenario.image} />
                    <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                  </div>
                  <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="flex flex-col font-['DM_Mono'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                          <p className="leading-[28px]">{scenario.course}</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                          <div className="flex flex-col font-['DM_Mono'] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                            <p className="leading-[14px]">{scenario.difficulty}</p>
                          </div>
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div 
                                key={i}
                                className={`${i < scenario.difficultyLevel ? 'bg-[#fcc32b]' : 'bg-[rgba(252,195,43,0.3)]'} col-end-auto col-start-1 h-[12px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]`}
                                style={{ marginLeft: `${i * 5}px` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                </div>
                <div className="relative shrink-0 w-full flex-1 min-h-0 overflow-hidden">
                  <div className="flex flex-col h-full pb-[20px] pt-[12px] px-[16px]">
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-col font-medium gap-[4px]">
                        <p className="leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px] text-left">{scenario.title}</p>
                        <p className="leading-[16px] text-[#0074dd] text-[14px] text-left">{scenario.subtitle}</p>
                      </div>
                      <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] text-left line-clamp-4">{scenario.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <StudentProfileModal 
          onClose={() => setShowProfileModal(false)}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
}