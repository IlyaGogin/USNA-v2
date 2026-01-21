import svgPaths from "../imports/svg-uws9x6adpo";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgScenario2 from "figma:asset/60fe47866df8ee253cad219513bf05f64f3f6f6d.png";

type CreatedAssignment = {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  scenarios: string[];
  students: string[];
  scenarioData?: {
    title: string;
    subtitle: string;
    description: string;
  };
  studentData?: {
    id: string;
    name: string;
  }[];
  settings: {
    allowMultipleAttempts: boolean;
    includeAIMentor: boolean;
    shareWithAdvisor: boolean;
    sendReminders: boolean;
  };
};

type AssignmentDetailsPageProps = {
  assignmentId: string;
  onBack: () => void;
  createdAssignment?: CreatedAssignment;
};

type StudentResult = {
  id: string;
  name: string;
  result: string;
  status: 'Complete' | 'In progress' | 'Outstanding';
};

type Assignment = {
  id: string;
  name: string;
  description: string;
  completed: string;
  total: number;
  completedCount: number;
  due: string;
  scenarioName: string;
  scenarioDescription: string;
  scenarioImage: string;
  mostStruggledWith: string;
};

const assignments: Record<string, Assignment> = {
  '1': {
    id: '1',
    name: 'Crisis Communication Under Pressure',
    description: 'Analyze how leaders communicate effectively during high-stress situations and develop strategies for clear, decisive communication.',
    completed: '25/28',
    total: 28,
    completedCount: 25,
    due: 'Tue Jan 18, 2026',
    scenarioName: 'Pressure Point',
    scenarioDescription: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.',
    scenarioImage: imgMidshipman,
    mostStruggledWith: 'Consequences'
  },
  '2': {
    id: '2',
    name: 'The Moral Roadmap: Ethical Dilemmas in Combat',
    description: 'Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning in military context.',
    completed: '22/28',
    total: 28,
    completedCount: 22,
    due: 'Fri Jan 21, 2026',
    scenarioName: 'Collateral Damage Decision',
    scenarioDescription: 'Navigate the complex ethical considerations of military operations where civilian casualties may occur.',
    scenarioImage: imgScenario2,
    mostStruggledWith: 'Moral Reasoning'
  },
  '3': {
    id: '3',
    name: 'Leadership in Times of Uncertainty',
    description: 'Develop leadership skills for guiding teams through ambiguous and rapidly changing situations.',
    completed: '28/28',
    total: 28,
    completedCount: 28,
    due: 'Mon Jan 10, 2026',
    scenarioName: 'Fog of War',
    scenarioDescription: 'Make critical decisions with incomplete information while maintaining team morale and mission focus.',
    scenarioImage: imgMidshipman,
    mostStruggledWith: 'Decision Timing'
  },
};

const studentResults: StudentResult[] = [
  { id: '1', name: 'Anderson, James', result: '88%', status: 'Complete' },
  { id: '2', name: 'Brooks, Sarah', result: '92%', status: 'Complete' },
  { id: '3', name: 'Chen, David', result: '-', status: 'In progress' },
  { id: '4', name: 'Davis, Emily', result: '75%', status: 'Complete' },
  { id: '5', name: 'Evans, Michael', result: '81%', status: 'Complete' },
  { id: '6', name: 'Foster, Jessica', result: '-', status: 'Outstanding' },
  { id: '7', name: 'Garcia, Robert', result: '95%', status: 'Complete' },
  { id: '8', name: 'Harris, Nicole', result: '-', status: 'Outstanding' },
  { id: '9', name: 'Johnson, William', result: '78%', status: 'Complete' },
  { id: '10', name: 'Kim, Jennifer', result: '85%', status: 'Complete' },
  { id: '11', name: 'Lee, Christopher', result: '90%', status: 'Complete' },
  { id: '12', name: 'Martinez, Amanda', result: '83%', status: 'Complete' },
  { id: '13', name: 'Nelson, Thomas', result: '87%', status: 'Complete' },
  { id: '14', name: 'O\'Brien, Rachel', result: '79%', status: 'Complete' },
  { id: '15', name: 'Parker, Daniel', result: '91%', status: 'Complete' },
  { id: '16', name: 'Quinn, Melissa', result: '86%', status: 'Complete' },
  { id: '17', name: 'Roberts, Kevin', result: '84%', status: 'Complete' },
  { id: '18', name: 'Smith, Lauren', result: '89%', status: 'Complete' },
  { id: '19', name: 'Taylor, Brandon', result: '82%', status: 'Complete' },
  { id: '20', name: 'Thompson, Maya', result: '93%', status: 'Complete' },
  { id: '21', name: 'Turner, Joshua', result: '77%', status: 'Complete' },
  { id: '22', name: 'Walker, Ashley', result: '-', status: 'In progress' },
  { id: '23', name: 'White, Matthew', result: '80%', status: 'Complete' },
  { id: '24', name: 'Williams, Olivia', result: '94%', status: 'Complete' },
  { id: '25', name: 'Young, Ryan', result: '76%', status: 'Complete' },
  { id: '26', name: 'Zhang, Sophia', result: '88%', status: 'Complete' },
  { id: '27', name: 'Adams, Benjamin', result: '85%', status: 'Complete' },
  { id: '28', name: 'Baker, Christina', result: '91%', status: 'Complete' },
];

export default function AssignmentDetailsPage({ assignmentId, onBack, createdAssignment }: AssignmentDetailsPageProps) {
  // Check if this is a newly created assignment
  let assignment: Assignment;
  let students: StudentResult[];
  
  if (createdAssignment) {
    // Format the due date properly
    let formattedDueDate = 'No due date';
    if (createdAssignment.dueDate) {
      try {
        formattedDueDate = new Date(createdAssignment.dueDate).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      } catch {
        formattedDueDate = createdAssignment.dueDate;
      }
    }
    
    // Use the newly created assignment data with 0 completions
    const totalStudents = createdAssignment.studentData?.length || 0;
    assignment = {
      id: createdAssignment.id,
      name: createdAssignment.name,
      description: createdAssignment.description,
      completed: `0/${totalStudents}`,
      total: totalStudents,
      completedCount: 0,
      due: formattedDueDate,
      scenarioName: createdAssignment.scenarioData?.title || 'New Scenario',
      scenarioDescription: createdAssignment.scenarioData?.subtitle || 'Recently assigned scenario',
      scenarioImage: imgMidshipman,
      mostStruggledWith: 'N/A'
    };
    
    // Create student list with all Outstanding status using actual student names
    students = (createdAssignment.studentData || []).map((student) => ({
      id: student.id,
      name: student.name,
      result: '-',
      status: 'Outstanding' as const
    }));
  } else {
    // Use mock data for existing assignments
    assignment = assignments[assignmentId] || assignments['1'];
    students = studentResults;
  }
  
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-[#ebf9f0] text-[#006632]';
      case 'In progress':
        return 'bg-[#ffebd6] text-[#793c00]';
      case 'Outstanding':
        return 'bg-[#ffe7e5] text-[#b20900]';
      default:
        return 'bg-[#ebf9f0] text-[#006632]';
    }
  };

  const completionPercentage = (assignment.completedCount / assignment.total) * 100;
  const incompleteCount = assignment.total - assignment.completedCount;

  return (
    <div className="bg-[#efeef7] relative w-full h-[calc(100vh-78px)]">
      {/* Left Sidebar */}
      <div className="absolute bg-[#e8e6f3] inset-[0_67.59%_0_0] overflow-auto">
        <div className="flex flex-col gap-[32px] p-[40px]">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors w-fit"
          >
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="trim">
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="#0D004D" fillRule="evenodd" id="icon" />
                </g>
              </svg>
            </div>
            <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Back</p>
          </button>

          {/* Assignment Title */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-medium leading-[48px] relative shrink-0 text-[#171717] text-[40px] tracking-[-0.8px] w-full">{assignment.name}</p>
            <p className="font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">{assignment.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <button className="flex-1 bg-[#ffce00] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Send Reminder</p>
                </div>
              </div>
            </button>
            <button className="flex-1 relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Extend</p>
                </div>
              </div>
            </button>
          </div>

          {/* Assignment Info */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="CalendarDots">
                      <path d={svgPaths.p1ee32100} fill="#5D5D5D" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Due</p>
              </div>
              <p className="basis-0 font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">{assignment.due}</p>
            </div>
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="CheckCircle">
                      <path d={svgPaths.p205bf340} fill="#5D5D5D" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Complete</p>
              </div>
              <p className="basis-0 font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">{assignment.completed}</p>
            </div>
            <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
              <div className="bg-[#0074dd] h-full shrink-0" style={{ width: `${completionPercentage}%` }} />
            </div>
          </div>

          {/* Scenarios Section */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Scenarios</p>
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 w-full">
                {/* Image Section */}
                <div className="aspect-[454/180] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={assignment.scenarioImage} />
                    <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                  </div>
                  <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                          <p className="leading-[28px]">NE-203</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                          <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                            <p className="leading-[14px]">HARD</p>
                          </div>
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className={`bg-[#fcc32b] col-end-auto col-start-1 h-[12px] rounded-[1px] row-end-auto row-start-1 w-[2px] ${
                                  i >= 5 ? 'opacity-30' : ''
                                }`}
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
                
                {/* Text Content Section */}
                <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                      <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">{assignment.scenarioName}</p>
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{assignment.scenarioDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="absolute content-stretch flex flex-col inset-[0_0_0_32.41%] items-start p-[40px] overflow-auto">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Stats Cards */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Complete</p>
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{assignment.completedCount}</p>
                    </div>
                    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Check">
                            <path d={svgPaths.p368ccf00} fill="#006632" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Incomplete</p>
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{incompleteCount}</p>
                    </div>
                    <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Flag">
                            <path d={svgPaths.p38582500} fill="#B20900" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col font-medium gap-[8px] items-start relative shrink-0 w-full">
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Most struggled with</p>
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{assignment.mostStruggledWith}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Results Table */}
          <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full z-[1]">
              {/* Checkbox Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0">
                  <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                    <div className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
                {students.map(student => (
                  <div key={student.id} className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                      <div className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Column */}
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Midshipman</p>
                      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="relative shrink-0 size-[18px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <g id="trim">
                                <path clipRule="evenodd" d={svgPaths.p427f780} fill="#171717" fillRule="evenodd" id="icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {students.map(student => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Result</p>
                    </div>
                  </div>
                </div>
                {students.map(student => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
                    </div>
                  </div>
                </div>
                {students.map(student => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                        <div className={`content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0 ${getStatusStyle(student.status)}`}>
                          <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
                            <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap">
                              <p className="leading-[20px]">{student.status}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}