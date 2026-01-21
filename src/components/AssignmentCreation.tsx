import { useState, useEffect, useRef, useMemo } from 'react';
import svgPathsDetails from "../imports/svg-hmxhpa9dwt";
import svgPathsScenarios from "../imports/svg-xfx7sr1noz";
import svgPathsStudents from "../imports/svg-6zn8zvy6qq";
import svgPathsReview from "../imports/svg-1bkziqxa7x";
import { ImageWithFallback } from './figma/ImageWithFallback';

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

type AssignmentCreationProps = {
  onCancel: () => void;
  onSave: () => void;
  onLaunch: (assignment: CreatedAssignment) => void;
};

export type CreatedAssignment = {
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

type Step = 'details' | 'scenarios' | 'students' | 'review';

type Scenario = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  courseCode: string;
  difficulty: 'EASY' | 'INT' | 'HARD';
  area: string;
  course: string;
};

type Student = {
  id: string;
  name: string;
  course: string;
  profileImage?: string;
};

// Helper function to get scenario image
const getScenarioImage = (scenarioId: string) => {
  const imageMap: { [key: string]: string } = {
    '1': imgInnerRing,
    '2': imgChallenger,
    '3': imgMilgram,
    '4': imgAbuGhraib,
    '5': imgTrolley,
    '6': imgMyLai,
    '7': imgWhistleblowing,
    '8': imgStanford,
    '9': imgLucifer,
  };
  return imageMap[scenarioId] || imgInnerRing;
};

const scenarios: Scenario[] = [
  {
    id: '1',
    title: 'Inside the Wire',
    subtitle: 'Social Influence & Peer Pressure',
    description: 'Train participants to recognize and resist unhealthy social pressures to belong to exclusive "inner rings" or in-groups.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '2',
    title: 'The Launch Decision',
    subtitle: 'Organizational Ethics & Dissent',
    description: 'Explore the ethical responsibilities of engineers and managers when faced with pressure to launch despite safety concerns.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '3',
    title: 'The Authority Question',
    subtitle: 'Authority & Moral Agency',
    description: 'Examine the tension between obedience to authority and personal moral responsibility through the lens of the famous experiment.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '4',
    title: 'The Dark Hours',
    subtitle: 'Situational Ethics & Military Conduct',
    description: 'Analyze the breakdown of ethical standards in extreme situations and the importance of moral courage in military settings.',
    courseCode: 'NE-203',
    difficulty: 'EASY',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '5',
    title: 'The Moral Roadmap',
    subtitle: 'Utilitarian vs. Deontological Ethics',
    description: 'Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning.',
    courseCode: 'NE-203',
    difficulty: 'INT',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '6',
    title: '2 AM Courage',
    subtitle: 'War Crimes & Moral Courage',
    description: 'Study the breakdown of ethical conduct in combat and examine the role of moral courage in preventing atrocities.',
    courseCode: 'NE-203',
    difficulty: 'HARD',
    area: 'Ethics',
    course: 'NE203: Ethics and Moral Reasoning'
  },
  {
    id: '7',
    title: 'The Loyalty Test',
    subtitle: 'Loyalty vs. Integrity',
    description: 'Explore the ethical complexities of reporting misconduct while balancing organizational loyalty and personal integrity.',
    courseCode: 'NL-110',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL110: Applied Behavioral Science'
  },
  {
    id: '8',
    title: 'Abu Ghraib Echo',
    subtitle: 'Role Identity & Ethical Behavior',
    description: 'Examine how assigned roles and situational factors can override individual moral values and behavior.',
    courseCode: 'NL-311',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL311: Psychology of Leadership'
  },
  {
    id: '9',
    title: 'Diversity in Teams',
    subtitle: 'Inclusion & Performance',
    description: 'Navigate the challenges and opportunities of building and leading diverse, high-performing teams.',
    courseCode: 'NL-310',
    difficulty: 'INT',
    area: 'Leadership',
    course: 'NL310: Organizational Behavior'
  },
];

const students: Student[] = [
  { id: '1', name: 'Thompson, Maya', course: 'NE203: Ethics and Moral Reasoning', profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '2', name: 'Rodriguez, James', course: 'NE203: Ethics and Moral Reasoning', profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '3', name: 'Chen, Sarah', course: 'NE203: Ethics and Moral Reasoning', profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '4', name: 'Johnson, Michael', course: 'NE203: Ethics and Moral Reasoning', profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '5', name: 'Davis, Emily', course: 'NE203: Ethics and Moral Reasoning', profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '6', name: 'Martinez, David', course: 'NL110: Applied Behavioral Science', profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '7', name: 'Williams, Jessica', course: 'NL110: Applied Behavioral Science', profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '8', name: 'Brown, Robert', course: 'NL200: Human Behavior', profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '9', name: 'Taylor, Amanda', course: 'NL200: Human Behavior', profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '10', name: 'Lee, Christopher', course: 'NL310: Organizational Behavior', profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '11', name: 'Anderson, Lauren', course: 'NL310: Organizational Behavior', profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
  { id: '12', name: 'White, Daniel', course: 'NL400: Law for the Naval Leader', profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100' },
  { id: '13', name: 'Moore, Samantha', course: 'NL400: Law for the Naval Leader', profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100' },
  { id: '14', name: 'Harris, Matthew', course: 'NL311: Psychology of Leadership', profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100' },
  { id: '15', name: 'Clark, Nicole', course: 'NL311: Psychology of Leadership', profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100' },
];

export function AssignmentCreation({ onCancel, onSave, onLaunch }: AssignmentCreationProps) {
  const [currentStep, setCurrentStep] = useState<Step>('details');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [assignmentName, setAssignmentName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [noDueDate, setNoDueDate] = useState(false);
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Memoized values for summary card
  const formattedDueDate = useMemo(() => {
    if (!dueDate) return 'No due date';
    try {
      return new Date(dueDate).toLocaleDateString('en-US', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch {
      return 'No due date';
    }
  }, [dueDate]);

  const scenariosText = useMemo(() => {
    if (!selectedScenarios?.length) return 'No scenarios selected';
    try {
      const titles = selectedScenarios
        .map(id => scenarios.find(s => s.id === id)?.title)
        .filter(Boolean);
      return titles.length ? titles.join(', ') : 'No scenarios selected';
    } catch {
      return 'No scenarios selected';
    }
  }, [selectedScenarios]);

  const studentsText = useMemo(() => {
    if (!selectedStudents?.length) return 'No students selected';
    try {
      const names = selectedStudents
        .map(id => students.find(s => s.id === id)?.name)
        .filter(Boolean);
      return names.length ? names.join(' / ') : 'No students selected';
    } catch {
      return 'No students selected';
    }
  }, [selectedStudents]);

  // Reset scroll to top when step changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  const handleContinue = () => {
    if (currentStep === 'details') {
      setCurrentStep('scenarios');
    } else if (currentStep === 'scenarios') {
      setCurrentStep('students');
    } else if (currentStep === 'students') {
      setCurrentStep('review');
    } else {
      onSave();
    }
  };

  const handleBack = () => {
    if (currentStep === 'scenarios') {
      setCurrentStep('details');
    } else if (currentStep === 'students') {
      setCurrentStep('scenarios');
    } else if (currentStep === 'review') {
      setCurrentStep('students');
    }
  };

  const toggleScenario = (scenarioId: string) => {
    setSelectedScenarios(prev =>
      prev.includes(scenarioId)
        ? prev.filter(id => id !== scenarioId)
        : [...prev, scenarioId]
    );
  };

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const getStepConfig = () => {
    switch (currentStep) {
      case 'details':
        return {
          title: 'Fill out assignment details',
          description: 'Create a name and description for your assignment, and set a due date to let Midshipmen know the details of the assignment.',
          progress: [true, false, false, false],
        };
      case 'scenarios':
        return {
          title: 'Select scenarios',
          description: 'Choose which scenarios you want the Midshipmen to complete. Select as many as you need.',
          progress: [true, true, false, false],
        };
      case 'students':
        return {
          title: 'Assign students',
          description: 'Choose which Midshipmen you want to complete the assignment.',
          progress: [true, true, true, false],
        };
      case 'review':
        return {
          title: 'Review and publish',
          description: 'Review your assignment details before publishing to midshipmen.',
          progress: [true, true, true, true],
        };
    }
  };

  const stepConfig = getStepConfig();

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        {/* Left Side - Form Content */}
        <div className="flex-1 flex flex-col px-[32px] overflow-hidden">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between px-0 py-[40px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)]">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <button
                onClick={handleBack}
                disabled={currentStep === 'details'}
                className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path clipRule="evenodd" d={svgPathsDetails.p3dc50bc0} fill="#0D004D" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
              <p className="font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New assignment</p>
            </div>
            <button
              onClick={onCancel}
              className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors"
            >
              <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Cancel</p>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto" ref={scrollContainerRef}>
            <div className="content-stretch flex flex-col items-center px-[40px] py-[80px] relative min-h-full">
              {currentStep === 'details' && (
                <DetailsStep
                  assignmentName={assignmentName}
                  setAssignmentName={setAssignmentName}
                  description={description}
                  setDescription={setDescription}
                  dueDate={dueDate}
                  setDueDate={setDueDate}
                  noDueDate={noDueDate}
                  setNoDueDate={setNoDueDate}
                  onContinue={handleContinue}
                />
              )}

              {currentStep === 'scenarios' && (
                <ScenariosStep
                  selectedScenarios={selectedScenarios}
                  toggleScenario={toggleScenario}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onContinue={handleContinue}
                />
              )}

              {currentStep === 'students' && (
                <StudentsStep
                  selectedStudents={selectedStudents}
                  toggleStudent={toggleStudent}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onContinue={handleContinue}
                />
              )}

              {currentStep === 'review' && (
                <ReviewStep
                  assignmentName={assignmentName}
                  description={description}
                  dueDate={dueDate}
                  selectedScenarios={selectedScenarios}
                  selectedStudents={selectedStudents}
                  onLaunch={() => {
                    const newAssignment: CreatedAssignment = {
                      id: `assignment-${Date.now()}`,
                      name: assignmentName,
                      description: description,
                      dueDate: dueDate,
                      scenarios: selectedScenarios,
                      students: selectedStudents,
                      scenarioData: selectedScenarios.length > 0 ? scenarios.find(s => s.id === selectedScenarios[0]) : undefined,
                      studentData: selectedStudents.map(id => students.find(s => s.id === id)).filter(Boolean) as { id: string; name: string }[],
                      settings: {
                        allowMultipleAttempts: false,
                        includeAIMentor: false,
                        shareWithAdvisor: false,
                        sendReminders: false
                      }
                    };
                    onLaunch(newAssignment);
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Progress Indicator */}
        <div className="bg-[#efeef7] w-[32.87%] content-stretch flex flex-col gap-[32px] items-start justify-center px-[40px] py-0">
          <h2 className="font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px]">
            {currentStep === 'review' ? 'Additional settings' : stepConfig.title}
          </h2>
          <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
            {stepConfig.progress.map((active, index) => (
              <div
                key={index}
                className={`basis-0 grow h-full min-h-px min-w-px shrink-0 ${
                  active ? 'bg-[#171717]' : 'bg-[#171717] opacity-10'
                }`}
              />
            ))}
          </div>
          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">
            {currentStep === 'review' ? 'Let us know if you want any of these additional settings before launching your assignment.' : stepConfig.description}
          </p>

          {/* Summary Card for Review Step */}
          {currentStep === 'review' && (
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
                  <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">
                      <p className="leading-[28px]">{assignmentName || 'Assignment title'}</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#0074dd] text-[12px] w-full">
                      <p className="leading-[14px]">{description || 'Description of the assignment'}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsReview.p2749cb80} fill="#171717" />
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] flex-1">
                      {formattedDueDate}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start px-[16px] py-0 relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[24px] mt-[2px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsReview.p3f64b100} fill="#171717" />
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] flex-1">
                      {scenariosText}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start px-[16px] py-0 relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[24px] mt-[2px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsReview.p36f904f0} fill="#171717" />
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] flex-1">
                      {studentsText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Selected Items Display */}
          {currentStep === 'scenarios' && selectedScenarios.length > 0 && (
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[24px] relative w-full">
                  {selectedScenarios.map(scenarioId => {
                    const scenario = scenarios.find(s => s.id === scenarioId);
                    if (!scenario) return null;
                    return (
                      <div key={scenarioId} className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsScenarios.p3f64b100} fill="#171717" />
                          </svg>
                        </div>
                        <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px]">{scenario.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {currentStep === 'students' && selectedStudents.length > 0 && (
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[24px] relative w-full">
                  {selectedStudents.map(studentId => {
                    const student = students.find(s => s.id === studentId);
                    if (!student) return null;
                    return (
                      <div key={studentId} className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsStudents.p36f904f0} fill="#171717" />
                          </svg>
                        </div>
                        <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px]">{student.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Details Step Component
function DetailsStep({
  assignmentName,
  setAssignmentName,
  description,
  setDescription,
  dueDate,
  setDueDate,
  noDueDate,
  setNoDueDate,
  onContinue,
}: any) {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        {/* Assignment Name Section */}
        <div className="content-stretch flex gap-[64px] items-start px-0 py-[56px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)]">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[280px]">
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Assignment name</p>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Give this assignment a name and assign any tags. Tags allow you to assign scenarios to specific cohorts or leadership development tracks.</p>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
            <input
              type="text"
              placeholder="Name*"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
              className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none focus:border-[#1d74c2]"
            />
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <input
                type="text"
                placeholder="Tags"
                className="flex-1 bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none focus:border-[#1d74c2]"
              />
              <button className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors">
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path clipRule="evenodd" d={svgPathsDetails.p3b85c100} fill="#0D004D" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Create Tag</p>
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="content-stretch flex gap-[64px] items-start px-0 py-[56px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)]">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[280px]">
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Description</p>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Describe any additional context or instructions for midshipmen.</p>
          </div>
          <textarea
            placeholder="Description*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none focus:border-[#1d74c2] resize-none h-[120px]"
          />
        </div>

        {/* Due Date Section */}
        <div className="content-stretch flex gap-[64px] items-start px-0 py-[56px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[280px]">
            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">Due date</p>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">When is the assignment due?</p>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative flex-1">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              disabled={noDueDate}
              className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] font-normal leading-[24px] text-[#2e2e2e] text-[16px] outline-none focus:border-[#1d74c2] disabled:opacity-50"
            />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#0d004d] text-[16px] text-nowrap">Don't set a due date</p>
              <button
                onClick={() => setNoDueDate(!noDueDate)}
                className={`flex gap-[8px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px] border border-[#1d5282] transition-colors ${
                  noDueDate ? 'bg-[#1d5282]' : 'bg-white'
                }`}
              >
                <div
                  className={`rounded-full size-[24px] transition-all ${
                    noDueDate ? 'bg-white ml-auto' : 'bg-[#1d5282] mr-auto'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={onContinue}
          className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
        >
          <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path clipRule="evenodd" d={svgPathsDetails.pd2da900} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// Scenarios Step Component
function ScenariosStep({ selectedScenarios, toggleScenario, searchQuery, setSearchQuery, onContinue }: any) {
  const filteredScenarios = scenarios.filter(scenario =>
    scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scenario.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scenario.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scenario.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scenario.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      {/* Search and Filter */}
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex grow items-center max-w-[800px] min-h-px min-w-px relative shrink-0">
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 border border-[#1d74c2]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px] bg-transparent border-none outline-none"
                />
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path clipRule="evenodd" d={svgPathsScenarios.p1626e300} fill="#2E2E2E" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors">
          <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Filter</p>
        </button>
      </div>

      {/* Selection Status and Continue */}
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">
          {selectedScenarios.length} scenario{selectedScenarios.length !== 1 ? 's' : ''} selected
        </p>
        <button
          onClick={onContinue}
          className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
        >
          <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path clipRule="evenodd" d={svgPathsScenarios.pd2da900} fill="black" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </button>
      </div>

      {/* Scenarios Grid */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {Array.from({ length: Math.ceil(filteredScenarios.length / 3) }).map((_, rowIndex) => {
          const startIndex = rowIndex * 3;
          const rowScenarios = filteredScenarios.slice(startIndex, startIndex + 3);
          
          return (
            <div key={rowIndex} className="content-stretch flex gap-[20px] items-stretch relative shrink-0 w-full">
              {rowScenarios.map((scenario) => {
                const isSelected = selectedScenarios.includes(scenario.id);
                return (
                  <button
                    key={scenario.id}
                    onClick={() => toggleScenario(scenario.id)}
                    className={`basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 hover:shadow-lg transition-shadow flex flex-col ${
                      isSelected ? 'ring-[1.5px] ring-[#1d74c2]' : 'border border-[rgba(13,0,77,0.15)]'
                    } shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]`}
                  >
                    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full h-full">
                      {/* Image Header */}
                      <div className="aspect-[288/180] relative shrink-0 w-full">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={getScenarioImage(scenario.id)} />
                        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        <div className="absolute flex flex-col items-end overflow-clip rounded-[inherit] inset-0">
                          <div className="content-stretch flex flex-col items-end justify-between p-[16px] relative size-full">
                            {/* Checkbox */}
                            <div className={`content-stretch flex items-center justify-center relative rounded-[1440px] shrink-0 ${
                              isSelected ? 'border-2 border-[#1d5282]' : ''
                            }`}>
                              <div className="relative shrink-0 size-[18px]">
                                {isSelected && (
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                    <path d={svgPathsScenarios.p1ebded00} fill="#1D5282" />
                                    <path d={svgPathsScenarios.p1de71f00} fill="white" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            {/* Course and Difficulty */}
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                              <p className="font-mono leading-[28px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">{scenario.courseCode}</p>
                              <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                                <p className="font-mono leading-[14px] relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">{scenario.difficulty}</p>
                                <DifficultyBars difficulty={scenario.difficulty} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative w-full flex-1">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                            <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full text-left">{scenario.title}</p>
                            <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full text-left">{scenario.subtitle}</p>
                          </div>
                          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full text-left">{scenario.description}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
              {/* Fill empty cells if needed */}
              {rowScenarios.length < 3 && Array.from({ length: 3 - rowScenarios.length }).map((_, idx) => (
                <div key={`empty-${idx}`} className="basis-0 grow min-w-px" />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Students Step Component
function StudentsStep({ selectedStudents, toggleStudent, searchQuery, setSearchQuery, onContinue }: any) {
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      {/* Search and Filter */}
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex grow items-center max-w-[800px] min-h-px min-w-px relative shrink-0">
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 border border-[#1d74c2]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px] bg-transparent border-none outline-none"
                />
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path clipRule="evenodd" d={svgPathsStudents.p1626e300} fill="#2E2E2E" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors">
          <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Filter</p>
        </button>
      </div>

      {/* Selection Status and Continue */}
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">
          {selectedStudents.length} midshipm{selectedStudents.length !== 1 ? 'en' : 'an'} selected
        </p>
        <button
          onClick={onContinue}
          className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
        >
          <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path clipRule="evenodd" d={svgPathsStudents.pd2da900} fill="black" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </button>
      </div>

      {/* Students Table */}
      <div className="relative rounded-[8px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
        <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] w-full">
          <div className="content-stretch flex items-center relative shrink-0 w-full z-[1]">
            {/* Checkbox Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0">
                <div className="bg-white relative rounded-[4px] shrink-0 size-[18px] border-2 border-[#1d74c2]" />
              </div>
              {filteredStudents.map(student => {
                const isSelected = selectedStudents.includes(student.id);
                return (
                  <button
                    key={student.id}
                    onClick={() => toggleStudent(student.id)}
                    className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0 hover:bg-[#f6f6fb]"
                  >
                    <div className={`relative rounded-[4px] shrink-0 size-[18px] border-2 border-[#1d74c2] ${
                      isSelected ? 'bg-[#1d74c2]' : 'bg-white'
                    }`}>
                      {isSelected && (
                        <svg className="absolute inset-0" fill="none" viewBox="0 0 18 18">
                          <path d={svgPathsStudents.p1de71f00} fill="white" />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Student Name Column */}
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <div className="bg-white h-[48px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[2px] items-center px-[16px] py-0 relative size-full">
                    <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Midshipman</p>
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path clipRule="evenodd" d={svgPathsStudents.p427f780} fill="#171717" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {filteredStudents.map(student => (
                <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full hover:bg-[#f6f6fb]">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-row gap-[12px] items-center justify-start px-[16px] py-0 relative size-full">
                      {student.profileImage && (
                        <ImageWithFallback
                          src={student.profileImage}
                          alt={student.name}
                          className="size-[24px] rounded-full object-cover shrink-0"
                        />
                      )}
                      <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">{student.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]">
              <div className="bg-white h-[48px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                    <p className="basis-0 font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
                  </div>
                </div>
              </div>
              {filteredStudents.map(student => (
                <div key={student.id} className="bg-white h-[48px] relative shrink-0 w-full hover:bg-[#f6f6fb]">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
                      <p className="font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{student.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Review Step Component
function ReviewStep({
  assignmentName,
  description,
  dueDate,
  selectedScenarios,
  selectedStudents,
  onLaunch,
}: any) {
  const [allowMultipleAttempts, setAllowMultipleAttempts] = useState(false);
  const [includeAIMentor, setIncludeAIMentor] = useState(false);
  const [shareWithAdvisor, setShareWithAdvisor] = useState(false);
  const [sendReminders, setSendReminders] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-0 py-[56px] relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
          {/* Allow multiple attempts */}
          <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <button
                  onClick={() => setAllowMultipleAttempts(!allowMultipleAttempts)}
                  className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                >
                  <div className={`content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px] border border-[#1d5282] transition-colors ${
                    allowMultipleAttempts ? 'bg-[#1d5282]' : 'bg-white'
                  }`}>
                    <div className={`rounded-full size-[24px] transition-all ${
                      allowMultipleAttempts ? 'bg-white ml-auto' : 'bg-[#1d5282] mr-auto'
                    }`} />
                  </div>
                  <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">Allow multiple attempts</p>
                </button>
              </div>
            </div>
          </div>

          {/* Include AI mentor guidance */}
          <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <button
                  onClick={() => setIncludeAIMentor(!includeAIMentor)}
                  className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                >
                  <div className={`content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px] border border-[#1d5282] transition-colors ${
                    includeAIMentor ? 'bg-[#1d5282]' : 'bg-white'
                  }`}>
                    <div className={`rounded-full size-[24px] transition-all ${
                      includeAIMentor ? 'bg-white ml-auto' : 'bg-[#1d5282] mr-auto'
                    }`} />
                  </div>
                  <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">Include AI mentor guidance</p>
                </button>
              </div>
            </div>
          </div>

          {/* Share results with midshipman's academic advisor */}
          <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <button
                  onClick={() => setShareWithAdvisor(!shareWithAdvisor)}
                  className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                >
                  <div className={`content-stretch flex gap-[12px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px] border border-[#1d5282] transition-colors ${
                    shareWithAdvisor ? 'bg-[#1d5282]' : 'bg-white'
                  }`}>
                    <div className={`rounded-full size-[24px] transition-all ${
                      shareWithAdvisor ? 'bg-white ml-auto' : 'bg-[#1d5282] mr-auto'
                    }`} />
                  </div>
                  <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">Share results with midshipman's academic advisor</p>
                </button>
              </div>
            </div>
          </div>

          {/* Send reminder notifications */}
          <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <button
                  onClick={() => setSendReminders(!sendReminders)}
                  className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                >
                  <div className={`content-stretch flex gap-[12px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px] border border-[#1d5282] transition-colors ${
                    sendReminders ? 'bg-[#1d5282]' : 'bg-white'
                  }`}>
                    <div className={`rounded-full size-[24px] transition-all ${
                      sendReminders ? 'bg-white ml-auto' : 'bg-[#1d5282] mr-auto'
                    }`} />
                  </div>
                  <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px] text-left">Send reminder notifications</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={onLaunch}
          className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
        >
          <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Launch assignment</p>
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path clipRule="evenodd" d={svgPathsReview.pd2da900} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// Difficulty Bars Component
function DifficultyBars({ difficulty }: { difficulty: string }) {
  const levels = difficulty === 'HARD' ? 5 : difficulty === 'INT' ? 4 : 2;
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`col-end-auto col-start-1 h-[12px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px] ${
            index < levels ? 'bg-[#fcc32b]' : 'bg-[#fcc32b] opacity-30'
          }`}
          style={{ marginLeft: `${index * 5}px` }}
        />
      ))}
    </div>
  );
}