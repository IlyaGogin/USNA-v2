import { useState } from 'react';
import svgPaths from "../imports/svg-vze9kxt6ft";
import { ImageWithFallback } from './figma/ImageWithFallback';

type StudentsPageProps = {
  onStudentClick: (studentId: string) => void;
};

type Student = {
  id: string;
  name: string;
  course: string;
  status: 'On Track' | 'Needs Attention' | 'Struggling';
  sessionsCompleted: number;
  averageScore: number;
  profileImage?: string;
};

const allCourses = [
  'NE203: Ethics and Moral Reasoning',
  'NL110: Applied Behavioral Science',
  'NL200: Human Behavior',
  'NL310: Organizational Behavior',
  'NL400: Law for the Naval Leader',
  'NL311: Psychology of Leadership',
  'NL411: Human Factors in Combat',
  'NL340: Change Management'
];

const students: Student[] = [
  { id: '1', name: 'Thompson, Maya', course: 'NE203: Ethics and Moral Reasoning', status: 'On Track', sessionsCompleted: 5, averageScore: 85, profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '2', name: 'Rodriguez, James', course: 'NE203: Ethics and Moral Reasoning', status: 'On Track', sessionsCompleted: 4, averageScore: 90, profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '3', name: 'Chen, Sarah', course: 'NE203: Ethics and Moral Reasoning', status: 'Needs Attention', sessionsCompleted: 3, averageScore: 75, profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '4', name: 'Johnson, Michael', course: 'NE203: Ethics and Moral Reasoning', status: 'On Track', sessionsCompleted: 5, averageScore: 88, profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '5', name: 'Davis, Emily', course: 'NE203: Ethics and Moral Reasoning', status: 'On Track', sessionsCompleted: 4, averageScore: 92, profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '6', name: 'Martinez, David', course: 'NL110: Applied Behavioral Science', status: 'Struggling', sessionsCompleted: 2, averageScore: 60, profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '7', name: 'Williams, Jessica', course: 'NL110: Applied Behavioral Science', status: 'On Track', sessionsCompleted: 4, averageScore: 85, profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '8', name: 'Brown, Robert', course: 'NL200: Human Behavior', status: 'Struggling', sessionsCompleted: 1, averageScore: 55, profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '9', name: 'Taylor, Amanda', course: 'NL200: Human Behavior', status: 'On Track', sessionsCompleted: 5, averageScore: 90, profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '10', name: 'Lee, Christopher', course: 'NL310: Organizational Behavior', status: 'On Track', sessionsCompleted: 4, averageScore: 88, profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '11', name: 'Anderson, Lauren', course: 'NL310: Organizational Behavior', status: 'On Track', sessionsCompleted: 5, averageScore: 92, profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '12', name: 'White, Daniel', course: 'NL400: Law for the Naval Leader', status: 'On Track', sessionsCompleted: 5, averageScore: 85, profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '13', name: 'Moore, Samantha', course: 'NL400: Law for the Naval Leader', status: 'On Track', sessionsCompleted: 4, averageScore: 90, profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '14', name: 'Harris, Matthew', course: 'NL311: Psychology of Leadership', status: 'On Track', sessionsCompleted: 5, averageScore: 88, profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '15', name: 'Clark, Nicole', course: 'NL311: Psychology of Leadership', status: 'On Track', sessionsCompleted: 4, averageScore: 92, profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '16', name: 'Lewis, Ryan', course: 'NL411: Human Factors in Combat', status: 'On Track', sessionsCompleted: 5, averageScore: 85, profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '17', name: 'Robinson, Megan', course: 'NL411: Human Factors in Combat', status: 'On Track', sessionsCompleted: 4, averageScore: 90, profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '18', name: 'Walker, Kevin', course: 'NL340: Change Management', status: 'On Track', sessionsCompleted: 5, averageScore: 88, profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '19', name: 'Young, Ashley', course: 'NL340: Change Management', status: 'On Track', sessionsCompleted: 4, averageScore: 92, profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
];

function StatusBadge({ status }: { status: 'On Track' | 'Needs Attention' | 'Struggling' }) {
  const colors = {
    'On Track': { bg: 'bg-[#ebf9f0]', text: 'text-[#006632]' },
    'Needs Attention': { bg: 'bg-[#ffebd6]', text: 'text-[#793c00]' },
    'Struggling': { bg: 'bg-[#ffe7e5]', text: 'text-[#b20900]' }
  };
  
  const color = colors[status];
  
  return (
    <div className={`${color.bg} content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0`}>
      <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
        <div className={`flex flex-col font-medium justify-center leading-[0] relative shrink-0 ${color.text} text-[16px] text-center text-nowrap`}>
          <p className="leading-[20px]">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default function StudentsPage({ onStudentClick }: StudentsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  
  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  const toggleCourse = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course)
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };
  
  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === filteredStudents.length);
  };
  
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredStudents.map(s => s.id)));
    }
    setSelectAll(!selectAll);
  };
  
  // Filter students based on search query, statuses, and courses
  const filteredStudents = students.filter(student => {
    const matchesSearch = !searchQuery || 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(student.status);
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(student.course);
    
    return matchesSearch && matchesStatus && matchesCourse;
  });
  
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="bg-[#e8e6f3] flex flex-col gap-[32px] items-center p-[24px] w-[349px] overflow-auto">
        {/* Status Filter */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            {['On Track', 'Needs Attention', 'Struggling'].map((status) => (
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
            {allCourses.map((course) => (
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

          {/* Table */}
          <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-full rounded-[8px]">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              {/* Checkbox Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0 rounded-tl-[8px]">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <button onClick={toggleSelectAll} className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className={`relative rounded-[4px] shrink-0 size-[18px] border-2 border-[#512eab] flex items-center justify-center ${
                          selectAll ? 'bg-[#512eab]' : 'bg-white'
                        }`}>
                          {selectAll && (
                            <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {filteredStudents.map((student, index) => (
                  <div key={student.id} className={`bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0 ${
                    index === filteredStudents.length - 1 ? 'rounded-bl-[8px]' : ''
                  }`}>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <button onClick={() => toggleRow(student.id)} className="content-stretch flex items-center justify-center relative shrink-0">
                          <div className={`relative rounded-[4px] shrink-0 size-[18px] border-2 border-[#512eab] flex items-center justify-center ${
                            selectedRows.has(student.id) ? 'bg-[#512eab]' : 'bg-white'
                          }`}>
                            {selectedRows.has(student.id) && (
                              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </button>
                      </div>
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
                {filteredStudents.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => onStudentClick(student.id)}
                    className="bg-white h-[48px] relative shrink-0 w-full hover:bg-[#f6f6fb] transition-colors"
                  >
                    <div className="flex items-center size-full gap-[12px] px-[16px]">
                      {student.profileImage && (
                        <ImageWithFallback
                          src={student.profileImage}
                          alt={student.name}
                          className="w-[32px] h-[32px] rounded-full object-cover shrink-0"
                        />
                      )}
                      <p className="font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap text-left">{student.name}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Course Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
                    </div>
                  </div>
                </div>
                {filteredStudents.map((student) => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.course.split(':')[0]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sessions Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Sessions</p>
                    </div>
                  </div>
                </div>
                {filteredStudents.map((student) => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.sessionsCompleted}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Avg Score Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
                <div className="bg-white h-[48px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Avg score</p>
                    </div>
                  </div>
                </div>
                {filteredStudents.map((student) => (
                  <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                        <p className="font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.averageScore}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Column */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white h-[48px] relative shrink-0 w-full rounded-tr-[8px]">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
                    </div>
                  </div>
                </div>
                {filteredStudents.map((student, index) => (
                  <div key={student.id} className={`bg-white h-[48px] relative shrink-0 w-full ${
                    index === filteredStudents.length - 1 ? 'rounded-br-[8px]' : ''
                  }`}>
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                        <StatusBadge status={student.status} />
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