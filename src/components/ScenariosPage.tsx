import { useState } from 'react';
import svgPaths from "../imports/svg-2wasbzlws9";
import { ChevronLeft } from 'lucide-react';
import { scenarios, Scenario } from "../data/scenarios";
import ScenarioPlaceholderImage from "./ScenarioPlaceholderImage";

type ScenariosPageProps = {
  onCreateScenario: () => void;
  onScenarioClick?: (scenarioId: string) => void;
};

// Extract unique areas from scenarios
const areas = Array.from(new Set(scenarios.map(s => s.area))).sort();

// Build course list from scenarios data, grouped by area
// Key by both courseCode AND area since some courses are used in multiple areas
const allCourses = Array.from(
  new Map(scenarios.map(s => [`${s.courseCode}|${s.area}`, { code: s.courseCode, area: s.area }])).values()
).sort((a, b) => a.code.localeCompare(b.code));

// Extract unique languages from scenarios
const languages = Array.from(
  new Set(scenarios.filter(s => s.language).map(s => s.language))
).sort() as string[];

// Proficiency level options
const proficiencyLevels = [
  { semester: 1, label: "Semester 1 (Novice Mid)" },
  { semester: 2, label: "Semester 2 (Novice High)" },
  { semester: 3, label: "Semester 3 (Intermediate Low)" },
  { semester: 4, label: "Semester 4 (Intermediate Mid-High)" },
];

function DifficultyBadge({ difficulty }: { difficulty: string }) {
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
          {scenario.image === "placeholder" ? (
            <ScenarioPlaceholderImage title={scenario.title} className="size-full rounded-none" />
          ) : (
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={scenario.image} />
          )}
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
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedSemesters, setSelectedSemesters] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const selectArea = (area: string) => {
    setSelectedArea(area);
    setSelectedCourse(null);
    // Clear language/proficiency when switching away from Language
    if (area !== "Language") {
      setSelectedLanguages([]);
      setSelectedSemesters([]);
    }
  };

  const goBack = () => {
    setSelectedArea(null);
    setSelectedCourse(null);
    setSelectedLanguages([]);
    setSelectedSemesters([]);
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  const toggleSemester = (semester: number) => {
    setSelectedSemesters(prev =>
      prev.includes(semester) ? prev.filter(s => s !== semester) : [...prev, semester]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  // Show Language/Proficiency filters only when Language area is selected
  const showLanguageFilters = selectedArea === "Language";

  // Get courses for selected area
  const filteredCourses = selectedArea
    ? allCourses.filter(course => course.area === selectedArea)
    : [];


  // Filter scenarios based on all criteria
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesSearch = !searchQuery ||
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.area.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesArea = !selectedArea || scenario.area === selectedArea;
    const matchesCourse = !selectedCourse || scenario.courseCode === selectedCourse;
    const matchesLanguage = selectedLanguages.length === 0 ||
      (scenario.language && selectedLanguages.includes(scenario.language));
    const matchesSemester = selectedSemesters.length === 0 ||
      (scenario.semester && selectedSemesters.includes(scenario.semester));
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes('Published');

    return matchesSearch && matchesArea && matchesCourse && matchesLanguage && matchesSemester && matchesStatus;
  });
  
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

        {/* Area Filter - drill-down pattern */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {selectedArea ? (
            <button
              onClick={goBack}
              className="flex items-center gap-[8px] font-medium leading-[20px] text-[#171717] text-[16px] hover:text-[#0074dd] transition-colors"
            >
              <ChevronLeft className="size-[16px]" />
              <span>{selectedArea}</span>
            </button>
          ) : (
            <>
              <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Area</p>
              <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
                {areas.map((area) => (
                  <div key={area} className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <button
                        onClick={() => selectArea(area)}
                        className="content-stretch flex items-center px-[16px] py-[8px] relative w-full hover:bg-[rgba(13,0,77,0.05)] rounded-[4px] transition-colors"
                      >
                        <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{area}</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Language Filter - only shown when Language area is selected */}
        {showLanguageFilters && (
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
        )}

        {/* Proficiency Level Filter - only shown when Language area is selected */}
        {showLanguageFilters && (
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Proficiency Level</p>
            <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
              {proficiencyLevels.map(level => (
                <div key={level.semester} className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <button
                      onClick={() => toggleSemester(level.semester)}
                      className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full rounded-[4px] transition-colors ${
                        selectedSemesters.includes(level.semester) ? 'bg-[rgba(13,0,77,0.1)]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                      }`}
                    >
                      <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{level.label}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* Course Filter - only shown when an area is selected */}
        {selectedArea && filteredCourses.length > 0 && (
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
        )}
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