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
import { scenarios } from "../data/scenarios";

type MidshipmanScenariosProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onScenarioClick?: (scenarioId: string) => void;
  onSignOut?: () => void;
  onMentorClick?: () => void;
};

// Extract unique areas from scenarios
const areas = Array.from(new Set(scenarios.map(s => s.area))).sort();

// Extract unique course codes from scenarios
const courses = Array.from(new Set(scenarios.map(s => s.courseCode))).sort();

// Extract unique languages from scenarios (only for language scenarios)
const languages = Array.from(
  new Set(scenarios.filter(s => s.language).map(s => s.language))
).sort() as string[];

export default function MidshipmanScenarios({
  onLogoClick,
  onTabChange,
  onScenarioClick,
  onSignOut,
  onMentorClick
}: MidshipmanScenariosProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
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

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  // Filter scenarios based on selected filters and search
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(scenario.area);
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(scenario.courseCode);
    const matchesLanguage = selectedLanguages.length === 0 ||
      (scenario.language && selectedLanguages.includes(scenario.language));
    const matchesSearch = searchQuery === "" ||
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesArea && matchesCourse && matchesLanguage && matchesSearch;
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

        {/* Language Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Language</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            {languages.map(language => (
              <div key={language} className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <button
                    onClick={() => toggleLanguage(language)}
                    className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full rounded-[4px] transition-colors ${
                      selectedLanguages.includes(language) ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                    }`}
                  >
                    <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{language}</p>
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