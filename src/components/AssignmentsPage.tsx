import { useState } from 'react';
import svgPaths from "../imports/svg-jfcfjat4v5";

type AssignmentsPageProps = {
  onAssignmentClick: (assignmentId: string) => void;
  onCreateAssignment: () => void;
};

type Assignment = {
  id: string;
  name: string;
  completed: string;
  due: string;
  status: 'Completed' | 'In progress' | 'Overdue' | 'On Track';
};

const assignments: Assignment[] = [
  { id: '1', name: 'Crisis Communication Under Pressure', completed: '25/28', due: 'Tue Jan 18, 2026', status: 'Completed' },
  { id: '2', name: 'The Moral Roadmap: Ethical Dilemmas in Combat', completed: '22/28', due: 'Fri Jan 21, 2026', status: 'In progress' },
  { id: '3', name: 'Leadership in Times of Uncertainty', completed: '28/28', due: 'Mon Jan 10, 2026', status: 'Completed' },
  { id: '4', name: 'Moral Courage and The Loyalty Test', completed: '15/28', due: 'Wed Jan 5, 2026', status: 'Overdue' },
  { id: '5', name: 'The Dark Hours Case Study', completed: '26/28', due: 'Thu Jan 27, 2026', status: 'In progress' },
  { id: '6', name: 'Pressure Point', completed: '18/28', due: 'Tue Dec 28, 2025', status: 'Overdue' },
  { id: '7', name: 'Psychological Safety in Teams', completed: '28/28', due: 'Sat Jan 15, 2026', status: 'Completed' },
  { id: '8', name: 'The Authority Question Analysis', completed: '12/28', due: 'Sun Jan 2, 2026', status: 'Overdue' },
  { id: '9', name: 'Cultural Intelligence and Global Leadership', completed: '27/28', due: 'Wed Jan 25, 2026', status: 'On Track' },
  { id: '10', name: 'Ethical Decision-Making Framework', completed: '28/28', due: 'Fri Jan 20, 2026', status: 'Completed' },
  { id: '11', name: 'Conflict Resolution Strategies', completed: '24/28', due: 'Mon Feb 1, 2026', status: 'In progress' },
  { id: '12', name: 'Abu Ghraib Echo: Role Ethics', completed: '28/28', due: 'Thu Jan 12, 2026', status: 'Completed' },
  { id: '13', name: 'Values-Based Leadership', completed: '26/28', due: 'Sat Jan 28, 2026', status: 'On Track' },
  { id: '14', name: '2 AM Courage: Command Responsibility', completed: '28/28', due: 'Tue Jan 17, 2026', status: 'Completed' },
  { id: '15', name: 'Transformational Leadership in Crisis', completed: '23/28', due: 'Wed Feb 3, 2026', status: 'In progress' },
  { id: '16', name: 'Bias and Decision-Making', completed: '28/28', due: 'Sun Jan 22, 2026', status: 'Completed' },
  { id: '17', name: 'Accountability and Transparency', completed: '27/28', due: 'Thu Jan 30, 2026', status: 'On Track' },
  { id: '18', name: 'Resilience Under Stress', completed: '25/28', due: 'Fri Feb 5, 2026', status: 'In progress' },
];

const courses = [
  'NE203: Ethics and Moral Reasoning',
  'NL110: Applied Behavioral Science',
  'NL200: Human Behavior',
  'NL310: Organizational Behavior',
  'NL400: Law for the Naval Leader',
  'NL311: Psychology of Leadership',
  'NL411: Human Factors in Combat',
  'NL340: Change Management',
];

export default function AssignmentsPage({ onAssignmentClick, onCreateAssignment }: AssignmentsPageProps) {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const filteredAssignments = assignments.filter(assignment => {
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(assignment.status);
    const matchesSearch = assignment.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-[#ebf9f0] text-[#006632]';
      case 'In progress':
        return 'bg-[#ffebd6] text-[#793c00]';
      case 'Overdue':
        return 'bg-[#ffe7e5] text-[#b20900]';
      case 'On Track':
        return 'bg-[#ebf9f0] text-[#006632]';
      default:
        return 'bg-[#ebf9f0] text-[#006632]';
    }
  };

  return (
    <div className="bg-[#efeef7] relative w-full h-[calc(100vh-78px)]">
      {/* Left Sidebar */}
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[0_79.82%_0_0] items-start p-[24px] overflow-auto">
        <button
          onClick={onCreateAssignment}
          className="bg-[#ffce00] relative rounded-[1000px] shrink-0 w-full hover:bg-[#fcc32b] transition-colors"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
              <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create Assignment</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="black" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Status Filter */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            {['In progress', 'Completed', 'Overdue'].map(status => (
              <div key={status} className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <button
                    onClick={() => handleStatusToggle(status)}
                    className="content-stretch flex items-center justify-center relative shrink-0"
                  >
                    <div className={`relative rounded-[4px] shrink-0 size-[18px] ${
                      selectedStatuses.includes(status) ? 'bg-[#1d74c2]' : 'bg-white'
                    }`}>
                      <div className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[4px] ${
                        selectedStatuses.includes(status) ? 'border-[#1d74c2]' : 'border-[#1d74c2]'
                      }`} />
                      {selectedStatuses.includes(status) && (
                        <svg className="absolute inset-[3px]" fill="none" viewBox="0 0 12 12">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{status}</p>
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
              <button
                key={course}
                onClick={() => setSelectedCourse(selectedCourse === course ? null : course)}
                className={`relative shrink-0 w-full rounded-[4px] transition-colors ${
                  selectedCourse === course ? 'bg-white' : 'hover:bg-[rgba(255,255,255,0.5)]'
                }`}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[30px] py-[8px] relative w-full">
                    <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">{course}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute flex flex-col gap-[40px] items-start left-[22.51%] top-[40px] right-[2.31%] bottom-0">
        {/* Search Bar */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex grow items-center max-w-[800px] min-h-px min-w-px relative shrink-0">
            <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
              <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="absolute border border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap bg-transparent border-none outline-none"
                    />
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                        <div className="content-stretch flex items-center relative shrink-0">
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
          </div>
        </div>

        {/* Table Container with Scroll */}
        <div className="flex-1 w-full overflow-auto pb-[40px]">
          <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full z-[1]">
              {/* Checkbox Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0">
                  <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                    <div className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
                {filteredAssignments.map(assignment => (
                  <div key={assignment.id} className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                      <div className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Assignment Column */}
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Assignment</p>
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
                {filteredAssignments.map(assignment => (
                  <button
                    key={assignment.id}
                    onClick={() => onAssignmentClick(assignment.id)}
                    className="bg-white h-[48px] relative shrink-0 w-full hover:bg-[#f6f6fb] transition-colors"
                  >
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full text-left">{assignment.name}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Completed Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Completed</p>
                    </div>
                  </div>
                </div>
                {filteredAssignments.map(assignment => (
                  <div key={assignment.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#045caf] text-[16px] text-nowrap w-full">{assignment.completed}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Due Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Due</p>
                    </div>
                  </div>
                </div>
                {filteredAssignments.map(assignment => (
                  <div key={assignment.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{assignment.due}</p>
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
                {filteredAssignments.map(assignment => (
                  <div key={assignment.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                        <div className={`content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0 ${getStatusStyle(assignment.status)}`}>
                          <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
                            <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap">
                              <p className="leading-[20px]">{assignment.status}</p>
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