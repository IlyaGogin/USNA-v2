import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles, RefreshCw, Wand2, Loader2, Plus, ChevronDown, ChevronUp, Play, Scale, BarChart3, Award, Handshake, Target, Users, MapPin, FileText, MessageSquare, LifeBuoy, Rocket, GraduationCap, Zap, Brain } from 'lucide-react';
import imgUSNALogo from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import { ALL_COURSES, AREAS, getCoursesByArea, getCourseById, type MoralFactor, type Area } from '../data/lel-curriculum';
import type { FrameworkTension, EmotionalState, ScaffoldingLevel } from '../App';
import svgPaths from "../imports/svg-kugi7pk76b";

interface ScenarioCreationProps {
  onCancel: () => void;
  onSave: () => void;
  onTestScenario?: () => void;
}

interface AssessmentCriterion {
  id: string;
  title: string;
  description: string;
  goodCriteria: string;
  badCriteria: string;
  weight: number;
}

export function ScenarioCreation({ onCancel, onSave, onTestScenario }: ScenarioCreationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Step 1: Course & Learning Objectives
  const [step1Data, setStep1Data] = useState({
    area: '' as Area | '',
    course: '',
    module: ''
  });
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);

  // Step 2: Ethical Framework Focus
  const [step2Data, setStep2Data] = useState({
    primaryMoralFactors: [] as MoralFactor[],
    frameworkTension: '' as FrameworkTension | ''
  });

  // Step 3: Auto-Generated Scenario
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [generatedScenario, setGeneratedScenario] = useState({
    scenarioTitle: '',
    trainingObjective: '',
    specificLearningObjectives: [] as string[],
    location: '',
    studentRole: '',
    studentRank: '',
    aiCharacterName: '',
    aiCharacterRole: '',
    aiEmotionalState: '' as EmotionalState | '',
    time: '',
    situation: '',
    dilemma: '',
    ethicalDilemma: '',
    successCriteria: '',
    failureCriteria: '',
    primaryMission: '',
    avatarOpeningScript: '',
    participantInstructions: ''
  });

  // Step 4: Difficulty & Scaffolding
  const [step4Data, setStep4Data] = useState({
    complexityLevel: 3 as number,
    scaffoldingLevel: 'supported' as ScaffoldingLevel | 'student-choice',
    enablePressure: true
  });

  // Step 5: Assessment Configuration
  const [assessmentCriteria, setAssessmentCriteria] = useState<AssessmentCriterion[]>([
    {
      id: '1',
      title: 'Articulation of Safety Concerns',
      description: 'Evaluates whether the participant can clearly communicate the nature and severity of safety or ethical concerns using evidence and logic.',
      goodCriteria: 'Participant clearly articulates the concern with specific details, uses evidence and technical/logical reasoning, explains severity and potential consequences, provides concrete examples.',
      badCriteria: 'Participant cannot clearly explain the concern, relies primarily on emotion or vague unease, fails to provide evidence or logical reasoning.',
      weight: 25
    },
    {
      id: '2',
      title: 'Professional Persistence',
      description: 'Evaluates the participant\'s ability to persist in raising legitimate concerns when initially dismissed, while maintaining professionalism.',
      goodCriteria: 'Participant persists despite initial dismissal, maintains professional tone and respect for authority, explores multiple avenues to be heard.',
      badCriteria: 'Participant backs down at first resistance, becomes unprofessional or disrespectful, or gives up without exploring alternatives.',
      weight: 25
    },
    {
      id: '3',
      title: 'Recognition and Resistance of Rationalization',
      description: 'Evaluates whether the participant can identify when organizational pressure uses rationalization and push back appropriately.',
      goodCriteria: 'Participant recognizes rationalization tactics, challenges arguments with logic and evidence, refuses to accept weak justifications.',
      badCriteria: 'Participant accepts rationalizations without question, cannot identify weak arguments, fails to push back against dismissive reasoning.',
      weight: 25
    },
    {
      id: '4',
      title: 'Appropriate Escalation',
      description: 'Evaluates the participant\'s understanding of when and how to escalate concerns through proper channels.',
      goodCriteria: 'Participant recognizes when escalation is necessary, identifies appropriate channels, demonstrates understanding of proper procedures.',
      badCriteria: 'Participant fails to recognize when escalation is needed, escalates inappropriately, or gives up without pursuing escalation options.',
      weight: 25
    }
  ]);
  const [expandedCriterion, setExpandedCriterion] = useState<string | null>(null);

  // Get courses for selected area
  const coursesForArea = step1Data.area ? getCoursesByArea(step1Data.area) : [];
  const selectedCourse = step1Data.course ? getCourseById(step1Data.course) : undefined;
  const modules = selectedCourse?.modules || [];
  const selectedModule = modules.find(m => m.module.toString() === step1Data.module);

  // Auto-select all objectives when module changes
  const handleModuleChange = (moduleId: string) => {
    setStep1Data({ ...step1Data, module: moduleId });
    const module = modules.find(m => m.module.toString() === moduleId);
    if (module) {
      setSelectedObjectives(module.learningObjectives);
      if (module.primaryMoralFactors) {
        setStep2Data({ ...step2Data, primaryMoralFactors: module.primaryMoralFactors });
      }
    }
  };

  const handleSelectAllObjectives = () => {
    if (selectedModule) {
      setSelectedObjectives(selectedModule.learningObjectives);
    }
  };

  const handleClearAllObjectives = () => {
    setSelectedObjectives([]);
  };

  // Auto-generate scenario with animation
  useEffect(() => {
    if (currentStep === 3 && !generatedScenario.scenarioTitle && !isGenerating) {
      setIsGenerating(true);
      setGenerationStep(0);
      
      const steps = [
        'Analyzing scenario constraints and learning objectives...',
        'Retrieving relevant Pearson Learning Design Principles to craft effective tasks...',
        'Reviewing relevant materials to create an authentic, realistic persona and setting...'
      ];
      
      let stepIndex = 0;
      const interval = setInterval(() => {
        stepIndex++;
        if (stepIndex < steps.length) {
          setGenerationStep(stepIndex);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            generateScenario();
            setIsGenerating(false);
          }, 500);
        }
      }, 1200);
      
      return () => clearInterval(interval);
    }
  }, [currentStep, generatedScenario.scenarioTitle]);

  const generateScenario = () => {
    const scenarios = [
      {
        scenarioTitle: 'The Challenger Decision',
        trainingObjective: 'Train participants to exercise moral courage when facing organizational pressure to remain silent about safety or ethical concerns. Develop skills to effectively communicate warnings and push back against rationalization in high-stakes environments.',
        specificLearningObjectives: [
          'Articulate safety concerns effectively using evidence and logic',
          'Persist professionally under pressure while refusing to be silenced',
          'Recognize and resist organizational rationalization',
          'Escalate appropriately through proper channels when standard channels fail'
        ],
        location: 'USS Ronald Reagan (CVN-76)',
        studentRole: 'Division Officer',
        studentRank: 'LTJG',
        aiCharacterName: 'Chief Williams',
        aiCharacterRole: 'Senior Chief Petty Officer',
        aiEmotionalState: 'distressed' as EmotionalState,
        time: '2145, Wednesday evening',
        situation: 'Your most trusted Chief Petty Officer has requested an urgent private meeting. He appears visibly distressed and shares that he witnessed a junior sailor meeting with an unknown individual and passing documents during their last liberty port.',
        dilemma: 'Chief Williams confides his concern about Petty Officer Chen, who has a clean record. He\'s not certain what was in the documents, but it "didn\'t look right." A report could destroy Chen\'s career if Williams is wrong, yet security obligations demand action with the ship conducting sensitive operations in 48 hours.',
        ethicalDilemma: 'This scenario tests whether the participant can exercise moral courage when facing organizational pressure to remain silent about legitimate safety concerns. The pressure includes: schedule pressure, appeals to authority and experience, rationalization ("we\'ve done this before"), social pressure (others have agreed), and career implications.',
        successCriteria: 'Participant maintains their position, provides clear reasoning with evidence, persists professionally, and refuses to simply go along despite pressure.',
        failureCriteria: 'Participant capitulates to pressure, accepts weak rationalizations, fails to effectively communicate the severity of concerns, or becomes unprofessional in their persistence.',
        primaryMission: 'Guide your Chief through this dilemma while modeling ethical leadership and balancing security obligations with fair treatment of personnel.',
        avatarOpeningScript: 'I understand you have concerns about tomorrow\'s operation. I\'ve reviewed the situation, and I appreciate your vigilance. But here\'s the reality: we\'ve done operations in similar conditions before. The weather is marginal, but it\'s within acceptable parameters. Other officers have reviewed this and they\'re comfortable proceeding. The operation is critical - we can\'t delay. I need to know: are you going to be a team player here, or are you going to let your concerns override the judgment of more experienced officers? What\'s your position?',
        participantInstructions: 'You are an Engineer or Junior Officer (O-2/O-3) involved in flight operations. A critical operation is scheduled for tomorrow morning, and you have identified a significant safety concern: weather conditions will be below operational limits for the aircraft systems, risking catastrophic failure. You\'ve already raised this concern once and been overruled by mid-level leadership. You\'re now in a final meeting with the Commanding Officer, who wants to proceed.'
      },
      {
        scenarioTitle: 'The Maintenance Dilemma',
        trainingObjective: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.',
        specificLearningObjectives: [
          'Balance operational needs with safety requirements',
          'Communicate technical concerns to senior leadership effectively',
          'Resist pressure to cut corners while maintaining professionalism',
          'Document safety decisions appropriately'
        ],
        location: 'Naval Air Station Oceana',
        studentRole: 'Maintenance QA Officer',
        studentRank: 'Lieutenant',
        aiCharacterName: 'Chief Rodriguez',
        aiCharacterRole: 'Aviation Maintenance Chief',
        aiEmotionalState: 'hesitant' as EmotionalState,
        time: '1800, Friday evening',
        situation: 'During pre-flight inspection, you discover a maintenance discrepancy that was improperly signed off by a Chief with 18 years of spotless service. The issue is technically minor but grounds the aircraft. The squadron is already behind on flight hours.',
        dilemma: 'Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor\'s career, or trusting his experience while risking flight safety and your own integrity.',
        ethicalDilemma: 'Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold standards while treating people with dignity.',
        successCriteria: 'Maintains safety standards, communicates decision rationale clearly, treats Chief Rodriguez with respect while remaining firm on regulations.',
        failureCriteria: 'Compromises safety standards, fails to document properly, or handles the situation unprofessionally.',
        primaryMission: 'Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness.',
        avatarOpeningScript: 'Sir, I need to talk to you about the discrepancy we found today. Look, I know what the book says, but I\'ve been doing this for 18 years. This is a minor issue - the bird is safe to fly. We\'re already behind on flight hours, and if we ground this aircraft now, it\'s going to cascade through the whole schedule. I\'m asking you to use your discretion here. This is my last year before retirement, and my record is spotless. Can we work this out?',
        participantInstructions: 'You are a Maintenance QA Officer responsible for ensuring all maintenance procedures are followed correctly. You\'ve discovered an improperly signed-off maintenance item that technically grounds the aircraft. The Chief who signed it off is highly experienced and respected, and he\'s asking you to look the other way this one time.'
      },
      {
        scenarioTitle: 'Intelligence Sharing Dilemma',
        trainingObjective: 'Train participants to navigate competing security obligations while making time-critical decisions with incomplete guidance.',
        specificLearningObjectives: [
          'Balance operational effectiveness with security protocols',
          'Assess risk levels under time pressure',
          'Consider strategic implications of intelligence sharing',
          'Make defensible decisions when chain of command is unavailable'
        ],
        location: 'USS Nimitz, Arabian Gulf',
        studentRole: 'Intelligence Officer',
        studentRank: 'LTJG',
        aiCharacterName: 'Commander Blake',
        aiCharacterRole: 'Senior Officer (Coalition)',
        aiEmotionalState: 'confident' as EmotionalState,
        time: '0230, Early morning',
        situation: 'Allied forces request detailed intelligence that could significantly improve a joint operation\'s success rate. The coalition commander is pressing for immediate access to sensitive analysis that could save lives in an operation launching within hours.',
        dilemma: 'Sharing this intelligence would enhance mission success and strengthen the alliance, but it could expose sensitive sources and methods. Your clearance authority is borderline, and your chain of command is unavailable. The commander needs an answer now.',
        ethicalDilemma: 'This scenario tests your ability to balance operational effectiveness, alliance obligations, and security protocols while making time-critical decisions with incomplete guidance. The pressure includes mission success, alliance trust, potential lives saved, and limited time.',
        successCriteria: 'Makes a reasoned decision based on available guidance, considers multiple factors, documents the decision process, and can articulate the rationale.',
        failureCriteria: 'Makes decision without proper consideration, fails to assess risks, or cannot justify the decision process.',
        primaryMission: 'Balance operational effectiveness, alliance obligations, and security protocols while making time-critical decisions with incomplete guidance.',
        avatarOpeningScript: 'Lieutenant, we need that intelligence package now. The operation launches in three hours, and this information could be the difference between success and failure - potentially saving lives. I understand your concerns about classification, but we\'re allies. We\'ve shared intelligence before. Your CO would want you to support the mission. Can I count on you to do the right thing here?',
        participantInstructions: 'You are an Intelligence Officer with access to sensitive information. A coalition commander is requesting intelligence that could help a joint operation succeed, but sharing it may expose sources and methods. Your chain of command is unavailable, and the decision needs to be made now.'
      }
    ];

    const selected = scenarios[Math.floor(Math.random() * scenarios.length)];
    setGeneratedScenario(selected);
  };

  const handleRegenerateScenario = () => {
    setIsGenerating(true);
    setGenerationStep(0);
    
    const steps = [
      'Analyzing scenario constraints and learning objectives...',
      'Retrieving relevant Pearson Learning Design Principles to craft effective tasks...',
      'Reviewing relevant materials to create an authentic, realistic persona and setting...'
    ];
    
    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setGenerationStep(stepIndex);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          generateScenario();
          setIsGenerating(false);
        }, 500);
      }
    }, 1200);
  };

  // Assessment weight management
  const totalWeight = assessmentCriteria.reduce((sum, c) => sum + c.weight, 0);

  const handleWeightChange = (id: string, newWeight: number) => {
    const currentCriterion = assessmentCriteria.find(c => c.id === id);
    if (!currentCriterion) return;
    
    const otherWeights = assessmentCriteria.filter(c => c.id !== id).reduce((sum, c) => sum + c.weight, 0);
    const maxAllowed = 100 - otherWeights;
    
    const adjustedWeight = Math.min(Math.max(0, newWeight), maxAllowed);
    
    setAssessmentCriteria(assessmentCriteria.map(c => 
      c.id === id ? { ...c, weight: adjustedWeight } : c
    ));
  };

  const handleAddCriterion = () => {
    const newCriterion: AssessmentCriterion = {
      id: Date.now().toString(),
      title: 'New Assessment Criterion',
      description: 'Description of what this criterion evaluates',
      goodCriteria: 'What good performance looks like',
      badCriteria: 'What poor performance looks like',
      weight: 0
    };
    setAssessmentCriteria([...assessmentCriteria, newCriterion]);
    setExpandedCriterion(newCriterion.id);
  };

  const handleUpdateCriterion = (id: string, field: keyof AssessmentCriterion, value: string) => {
    setAssessmentCriteria(assessmentCriteria.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const handleDeleteCriterion = (id: string) => {
    setAssessmentCriteria(assessmentCriteria.filter(c => c.id !== id));
    if (expandedCriterion === id) {
      setExpandedCriterion(null);
    }
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-center gap-[4px] mb-6">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-[4px]">
          <div
            className={`flex items-center justify-center w-[40px] h-[40px] rounded-[20px] transition-all ${
              step <= currentStep
                ? 'bg-[#1d5282] border border-[#1d5282]'
                : 'bg-white border-2 border-[#1d5282]'
            }`}
          >
            <span className={`font-mono font-medium text-[16px] leading-[20px] ${
              step <= currentStep ? 'text-[#fcc32a]' : 'text-[#1d5282]'
            }`}>{step}</span>
          </div>
          {step < totalSteps && (
            <div
              className={`w-[89px] h-[2px] rounded-[5px] ${
                step < currentStep ? 'bg-[#1d5282]' : 'bg-[rgba(29,82,130,0.1)]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="max-w-[800px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[#171717] font-medium text-[20px] mb-2 tracking-[-0.4px]">
          Course & Learning Objectives
        </h2>
        <p className="text-[#5d5d5d] text-[12px] leading-[14px]">
          Select the course content this scenario will address
        </p>
      </div>

      <div className="bg-white rounded-[4px] overflow-hidden">
        {/* Area Selection */}
        <div className="border-b border-[rgba(13,0,77,0.15)] px-[40px] py-[64px]">
          <div className="space-y-2">
            <label className="flex gap-2 items-center pb-1 text-[#171717] font-semibold text-[16px]">
              Select Area*
            </label>
            <div className="relative">
              <select
                value={step1Data.area}
                onChange={(e) => setStep1Data({ area: e.target.value as Area, course: '', module: '' })}
                className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] appearance-none focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
              >
                <option value="">Choose an area...</option>
                {AREAS.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="#2E2E2E" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            {step1Data.area && (
              <p className="text-[#464646] font-normal text-[14px] leading-[22px] pt-2">
                {AREAS.find(a => a.id === step1Data.area)?.description}
              </p>
            )}
          </div>
        </div>

        {/* Course Selection */}
        <div className={`border-b border-[rgba(13,0,77,0.15)] px-[40px] py-[64px] transition-opacity ${!step1Data.area ? 'opacity-40 pointer-events-none' : ''}`}>
          <div className="space-y-2">
            <label className="flex gap-2 items-center pb-1 text-[#171717] font-semibold text-[16px]">
              Select Course*
            </label>
            <div className="relative">
              <select
                value={step1Data.course}
                onChange={(e) => setStep1Data({ ...step1Data, course: e.target.value, module: '' })}
                disabled={!step1Data.area}
                className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] appearance-none focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] disabled:opacity-50"
              >
                <option value="">Choose a course...</option>
                {coursesForArea.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.code}: {course.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="#2E2E2E" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          {selectedCourse && (
            <div className="mt-[10px] bg-[#efeef7] border border-[rgba(13,0,77,0.15)] rounded-[12px] p-[24px]">
              <p className="text-[#171717] font-medium text-[14px] leading-[16px] mb-[8px]">
                Credits: {selectedCourse.credits} · Year: {selectedCourse.classYear}
              </p>
              <p className="text-[#464646] font-normal text-[14px] leading-[22px]">
                {selectedCourse.description}
              </p>
            </div>
          )}
        </div>

        {/* Module Selection */}
        <div className={`px-[40px] py-[64px] transition-opacity ${!step1Data.course ? 'opacity-40 pointer-events-none' : ''}`}>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex gap-2 items-center pb-1 text-[#171717] font-semibold text-[16px]">
                Module
              </label>
              <div className="relative">
                <select
                  value={step1Data.module}
                  onChange={(e) => handleModuleChange(e.target.value)}
                  disabled={!step1Data.course}
                  className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] appearance-none focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] disabled:opacity-50"
                >
                  <option value="">Choose a module...</option>
                  {modules.map((module) => (
                    <option key={module.module} value={module.module.toString()}>
                      Module {module.module}: {module.title}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="#2E2E2E" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              {selectedModule && (
                <p className="text-[#464646] text-[14px] leading-[22px] pt-2">
                  Topics: {selectedModule.topics.join(', ')}
                </p>
              )}
            </div>

            {/* Learning Objectives */}
            <div className={`transition-opacity ${!selectedModule ? 'opacity-40 pointer-events-none' : ''}`}>
              <div className="flex items-center justify-between mb-[12px]">
                <label className="text-[#171717] font-semibold text-[16px] leading-[20px]">
                  Learning Objectives*
                </label>
                <div className="flex gap-[12px]">
                  <button
                    type="button"
                    onClick={handleSelectAllObjectives}
                    disabled={!selectedModule}
                    className="px-[12px] py-[8px] text-[#0d004d] font-medium text-[14px] leading-[16px] rounded-[1000px] hover:bg-[rgba(13,0,77,0.05)] transition-colors disabled:opacity-50"
                  >
                    Select all
                  </button>
                  <button
                    type="button"
                    onClick={handleClearAllObjectives}
                    disabled={!selectedModule}
                    className="px-[12px] py-[8px] text-[#b20900] font-medium text-[14px] leading-[16px] rounded-[1000px] hover:bg-[rgba(178,9,0,0.05)] transition-colors disabled:opacity-50"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="space-y-[12px]">
                {(selectedModule?.learningObjectives || ['Loading...']).map((objective, index) => (
                  <label
                    key={index}
                    className="block bg-[#efeef7] border border-[rgba(13,0,77,0.15)] rounded-[12px] p-[24px] cursor-pointer hover:bg-[rgba(29,82,130,0.04)] transition-colors"
                  >
                    <div className="flex gap-[12px] items-center">
                      <input
                        type="checkbox"
                        checked={selectedObjectives.includes(objective)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedObjectives([...selectedObjectives, objective]);
                          } else {
                            setSelectedObjectives(selectedObjectives.filter(o => o !== objective));
                          }
                        }}
                        disabled={!selectedModule}
                        className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] disabled:opacity-50"
                      />
                      <span className="text-[#171717] font-medium text-[16px] leading-[20px] flex-1">
                        {objective}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-[800px] mx-auto">
      <div className="text-center mb-[32px]">
        <h2 className="text-[#0d004d] font-bold text-[24px] leading-[28px] mb-[8px]">
          Ethical Framework Focus
        </h2>
        <p className="text-[#5d5d5d] text-[12px] leading-[14px]">
          Select the primary ethical dimensions for this scenario
        </p>
      </div>

      {/* Single Container with All Sections */}
      <div className="bg-white rounded-[4px] overflow-hidden">
        {/* Primary Moral Factors */}
        <div className="px-[40px] py-[64px]">
            <label className="block text-[#171717] font-semibold text-[16px] leading-[20px] mb-[4px]">
              Primary Moral Factors to Test*
            </label>
            <p className="text-[#5d5d5d] font-normal text-[12px] leading-[14px] mb-[24px]">
              Select 1-2 factors that best align with your learning objectives
            </p>
          
          <div className="space-y-[12px]">
            {/* CONSTRAINTS */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.primaryMoralFactors.includes('constraints')
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="checkbox"
                checked={step2Data.primaryMoralFactors.includes('constraints')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStep2Data({ ...step2Data, primaryMoralFactors: [...step2Data.primaryMoralFactors, 'constraints'] });
                  } else {
                    setStep2Data({ ...step2Data, primaryMoralFactors: step2Data.primaryMoralFactors.filter(f => f !== 'constraints') });
                  }
                }}
                className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <Scale className="w-5 h-5 text-[#1d5282]" />
                  CONSTRAINTS
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Rules, rights, dignity, Kant's Categorical Imperative
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "What regulations/rights prohibit or require action?"
                </p>
              </div>
            </label>

            {/* CONSEQUENCES */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.primaryMoralFactors.includes('consequences')
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="checkbox"
                checked={step2Data.primaryMoralFactors.includes('consequences')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStep2Data({ ...step2Data, primaryMoralFactors: [...step2Data.primaryMoralFactors, 'consequences'] });
                  } else {
                    setStep2Data({ ...step2Data, primaryMoralFactors: step2Data.primaryMoralFactors.filter(f => f !== 'consequences') });
                  }
                }}
                className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <BarChart3 className="w-5 h-5 text-[#1d5282]" />
                  CONSEQUENCES
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Short/long-term outcomes, stakeholder impact, utilitarian analysis
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "Who is affected? What are the immediate and lasting effects?"
                </p>
              </div>
            </label>

            {/* CHARACTER */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.primaryMoralFactors.includes('character')
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="checkbox"
                checked={step2Data.primaryMoralFactors.includes('character')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStep2Data({ ...step2Data, primaryMoralFactors: [...step2Data.primaryMoralFactors, 'character'] });
                  } else {
                    setStep2Data({ ...step2Data, primaryMoralFactors: step2Data.primaryMoralFactors.filter(f => f !== 'character') });
                  }
                }}
                className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <Award className="w-5 h-5 text-[#1d5282]" />
                  CHARACTER
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Virtue ethics, habituation, "what kind of person do I want to be"
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "What would a person of virtue do? What habits am I forming?"
                </p>
              </div>
            </label>

            {/* SPECIAL OBLIGATIONS */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.primaryMoralFactors.includes('specialObligations')
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="checkbox"
                checked={step2Data.primaryMoralFactors.includes('specialObligations')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStep2Data({ ...step2Data, primaryMoralFactors: [...step2Data.primaryMoralFactors, 'specialObligations'] });
                  } else {
                    setStep2Data({ ...step2Data, primaryMoralFactors: step2Data.primaryMoralFactors.filter(f => f !== 'specialObligations') });
                  }
                }}
                className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <Handshake className="w-5 h-5 text-[#1d5282]" />
                  SPECIAL OBLIGATIONS
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Role duties, loyalty, oaths, competing loyalties
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "What do I owe as an officer vs. as a friend?"
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

        {/* Ethical Framework Tension */}
        <div className="px-[40px] py-[64px]">
            <label className="block text-[#171717] font-semibold text-[16px] leading-[20px] mb-[4px]">
              Ethical Framework Tension*
            </label>
            <p className="text-[#5d5d5d] font-normal text-[12px] leading-[14px] mb-[24px]">
              Choose the primary ethical conflict this scenario explores
            </p>
          
          <div className="space-y-[12px]">
            {/* Deontology vs. Consequentialism */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.frameworkTension === 'deontology-consequentialism'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="framework"
                checked={step2Data.frameworkTension === 'deontology-consequentialism'}
                onChange={() => setStep2Data({ ...step2Data, frameworkTension: 'deontology-consequentialism' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px]">
                  Deontology vs. Consequentialism
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Duty-based rules vs. greatest good outcomes
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "Follow strict safety protocol vs. mission success with calculated risk"
                </p>
              </div>
            </label>

            {/* Constraints vs. Consequences */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.frameworkTension === 'constraints-consequences'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="framework"
                checked={step2Data.frameworkTension === 'constraints-consequences'}
                onChange={() => setStep2Data({ ...step2Data, frameworkTension: 'constraints-consequences' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px]">
                  Constraints vs. Consequences
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Rights/rules compete with outcome optimization
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "Respecting individual rights vs. preventing greater harm to many"
                </p>
              </div>
            </label>

            {/* Virtue Ethics Focus */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.frameworkTension === 'virtue-focus'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="framework"
                checked={step2Data.frameworkTension === 'virtue-focus'}
                onChange={() => setStep2Data({ ...step2Data, frameworkTension: 'virtue-focus' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px]">
                  Virtue Ethics Focus
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Character formation under pressure
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "What kind of leader will this decision make me? What habits am I forming?"
                </p>
              </div>
            </label>

            {/* Loyalty vs. Duty */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.frameworkTension === 'loyalty-duty'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="framework"
                checked={step2Data.frameworkTension === 'loyalty-duty'}
                onChange={() => setStep2Data({ ...step2Data, frameworkTension: 'loyalty-duty' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px]">
                  Loyalty vs. Duty
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Special obligations compete with institutional duties
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "Loyalty to shipmate vs. mandatory reporting requirement"
                </p>
              </div>
            </label>

            {/* Just War Principles */}
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step2Data.frameworkTension === 'just-war'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="framework"
                checked={step2Data.frameworkTension === 'just-war'}
                onChange={() => setStep2Data({ ...step2Data, frameworkTension: 'just-war' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px]">
                  Just War Principles
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Jus ad bellum / Jus in bello application
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  "Proportionality, discrimination, and necessity in use of force"
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const thinkingSteps = [
      'Analyzing scenario constraints and learning objectives...',
      'Retrieving relevant Pearson Learning Design Principles to craft effective tasks...',
      'Reviewing relevant materials to create an authentic, realistic persona and setting...'
    ];

    return (
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-[32px]">
          <h2 className="text-[#0d004d] font-bold text-[24px] leading-[28px] mb-[8px]">
            AI Scenario Generation
          </h2>
          <p className="text-[#5d5d5d] text-[12px] leading-[14px]">
            Generating a realistic scenario based on your selections
          </p>
        </div>

        {isGenerating ? (
          <div className="bg-white rounded-[4px] p-[64px] text-center">
            <div className="inline-flex items-center justify-center size-[80px] rounded-full bg-[#1d5282] mb-[24px] animate-pulse">
              <Loader2 className="size-10 text-white animate-spin" />
            </div>
            <h3 className="text-[#0d004d] font-bold text-[24px] leading-[28px] mb-[24px]">
              Generating Scenario...
            </h3>
            <div className="space-y-[12px] max-w-[600px] mx-auto">
              {thinkingSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-[12px] p-[24px] rounded-[12px] transition-all ${
                    index <= generationStep
                      ? 'bg-[#efeef7] border border-[#1d5282]'
                      : 'bg-[#f5f5f5] border border-[rgba(13,0,77,0.15)] opacity-40'
                  }`}
                >
                  {index < generationStep ? (
                    <Check className="size-6 text-[#4ade80] flex-shrink-0" />
                  ) : index === generationStep ? (
                    <Loader2 className="size-6 text-[#1d5282] flex-shrink-0 animate-spin" />
                  ) : (
                    <div className="size-6 rounded-full border-2 border-[#cccccc] flex-shrink-0" />
                  )}
                  <p className="text-[#171717] font-normal text-[14px] leading-[22px] text-left">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : generatedScenario.scenarioTitle ? (
          <div>
            <div className="flex justify-center mb-[24px]">
              <button
                type="button"
                onClick={handleRegenerateScenario}
                className="px-[24px] py-[16px] rounded-[1000px] border-2 border-[#0d004d] text-[#0d004d] hover:bg-[#f5f5f5] transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
              >
                <RefreshCw className="size-4" />
                Regenerate
              </button>
            </div>

            {/* Single Container with All Sections */}
            <div className="bg-white rounded-[4px] overflow-hidden">
              {/* Scenario Title */}
              <div className="px-[40px] py-[64px]">
                <label className="block text-[#171717] font-semibold text-[16px] leading-[20px] mb-[12px]">
                  Scenario Title
                </label>
                <input
                  type="text"
                  value={generatedScenario.scenarioTitle}
                  onChange={(e) => setGeneratedScenario({ ...generatedScenario, scenarioTitle: e.target.value })}
                  className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

              {/* Training Objective */}
              <div className="px-[40px] py-[64px]">
                <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[12px] flex items-center gap-[8px]">
                  <Target className="w-5 h-5 text-[#1d5282]" />
                  Training Objective
                </h3>
                <textarea
                  value={generatedScenario.trainingObjective}
                  onChange={(e) => setGeneratedScenario({ ...generatedScenario, trainingObjective: e.target.value })}
                  rows={3}
                  className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

              {/* Characters */}
              <div className="px-[40px] py-[64px]">
                <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[24px] flex items-center gap-[8px]">
                  <Users className="w-5 h-5 text-[#1d5282]" />
                  Characters
                </h3>
                
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="p-[24px] bg-[#efeef7] border border-[rgba(13,0,77,0.15)] rounded-[12px]">
                    <p className="text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">Midshipman Role</p>
                    <input
                      type="text"
                      value={generatedScenario.studentRank}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, studentRank: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[8px] text-[#171717] font-medium text-[14px] leading-[16px] mb-[8px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                    <input
                      type="text"
                      value={generatedScenario.studentRole}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, studentRole: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[8px] text-[#464646] font-normal text-[13px] leading-[16px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                  </div>
                  <div className="p-[24px] bg-[#efeef7] border border-[rgba(13,0,77,0.15)] rounded-[12px]">
                    <p className="text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">AI Character</p>
                    <input
                      type="text"
                      value={generatedScenario.aiCharacterName}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, aiCharacterName: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[8px] text-[#171717] font-medium text-[14px] leading-[16px] mb-[8px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                    <input
                      type="text"
                      value={generatedScenario.aiCharacterRole}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, aiCharacterRole: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[8px] text-[#464646] font-normal text-[13px] leading-[16px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

              {/* Setting */}
              <div className="px-[40px] py-[64px]">
                <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[24px] flex items-center gap-[8px]">
                  <MapPin className="w-5 h-5 text-[#1d5282]" />
                  Setting
                </h3>
                
                <div className="space-y-[24px]">
                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Location
                    </label>
                    <input
                      type="text"
                      value={generatedScenario.location}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, location: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Time Context
                    </label>
                    <input
                      type="text"
                      value={generatedScenario.time}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, time: e.target.value })}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

              {/* Scenario Details */}
              <div className="px-[40px] py-[64px]">
                <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[24px] flex items-center gap-[8px]">
                  <FileText className="w-5 h-5 text-[#1d5282]" />
                  Scenario Details
                </h3>
                
                <div className="space-y-[24px]">
                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Situation
                    </label>
                    <textarea
                      value={generatedScenario.situation}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, situation: e.target.value })}
                      rows={4}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Dilemma
                    </label>
                    <textarea
                      value={generatedScenario.dilemma}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, dilemma: e.target.value })}
                      rows={4}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      The Ethical Dilemma
                    </label>
                    <textarea
                      value={generatedScenario.ethicalDilemma}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, ethicalDilemma: e.target.value })}
                      rows={3}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-[24px]">
                    <div>
                      <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                        Success Criteria
                      </label>
                      <textarea
                        value={generatedScenario.successCriteria}
                        onChange={(e) => setGeneratedScenario({ ...generatedScenario, successCriteria: e.target.value })}
                        rows={3}
                        className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                        Failure Criteria
                      </label>
                      <textarea
                        value={generatedScenario.failureCriteria}
                        onChange={(e) => setGeneratedScenario({ ...generatedScenario, failureCriteria: e.target.value })}
                        rows={3}
                        className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Midshipman Mission
                    </label>
                    <textarea
                      value={generatedScenario.primaryMission}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, primaryMission: e.target.value })}
                      rows={2}
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

              {/* Conversation Setup */}
              <div className="px-[40px] py-[64px]">
                <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[24px] flex items-center gap-[8px]">
                  <MessageSquare className="w-5 h-5 text-[#1d5282]" />
                  Conversation Setup
                </h3>
                
                <div className="space-y-[24px]">
                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Avatar Opening Script
                    </label>
                    <textarea
                      value={generatedScenario.avatarOpeningScript}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, avatarOpeningScript: e.target.value })}
                      rows={5}
                      placeholder="The AI character will use this script to open the conversation..."
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-semibold">
                      Participant Instructions
                    </label>
                    <textarea
                      value={generatedScenario.participantInstructions}
                      onChange={(e) => setGeneratedScenario({ ...generatedScenario, participantInstructions: e.target.value })}
                      rows={5}
                      placeholder="Instructions shown to the midshipman before the scenario begins..."
                      className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[14px] leading-[22px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="max-w-[800px] mx-auto">
      <div className="text-center mb-[32px]">
        <h2 className="text-[#0d004d] font-bold text-[24px] leading-[28px] mb-[8px]">
          Difficulty & Scaffolding
        </h2>
        <p className="text-[#5d5d5d] text-[12px] leading-[14px]">
          Configure challenge level and support for midshipmen
        </p>
      </div>

      {/* Single Container with All Sections */}
      <div className="bg-white rounded-[4px] overflow-hidden">
        {/* Complexity Level */}
        <div className="px-[40px] py-[64px]">
          <label className="block text-[#171717] font-semibold text-[16px] leading-[20px] mb-[4px]">
            Complexity Level*
          </label>
          <p className="text-[#5d5d5d] font-normal text-[12px] leading-[14px] mb-[24px]">
            Adjust the difficulty based on student readiness
          </p>
          
          <div className="mb-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <span className="text-[#1d5282] font-bold text-[24px]">
                Level {step4Data.complexityLevel}
              </span>
              <div className="flex gap-[8px]">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[14px] transition-all ${
                      level <= step4Data.complexityLevel 
                        ? 'bg-[#1d5282] text-white' 
                        : 'bg-[#e0e0e0] text-[#999999]'
                    }`}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={step4Data.complexityLevel}
              onChange={(e) => setStep4Data({ ...step4Data, complexityLevel: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 })}
              className="w-full h-3 bg-[#e0e0e0] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1d5282 0%, #1d5282 ${((step4Data.complexityLevel - 1) / 4) * 100}%, #e0e0e0 ${((step4Data.complexityLevel - 1) / 4) * 100}%, #e0e0e0 100%)`
              }}
            />
          </div>

          <div className="p-[24px] bg-[#efeef7] border border-[rgba(13,0,77,0.15)] rounded-[12px]">
            <p className="text-[#171717] text-[14px] font-medium mb-[4px]">
              {step4Data.complexityLevel === 1 && 'Foundational'}
              {step4Data.complexityLevel === 2 && 'Developing'}
              {step4Data.complexityLevel === 3 && 'Intermediate'}
              {step4Data.complexityLevel === 4 && 'Advanced'}
              {step4Data.complexityLevel === 5 && 'Expert'}
            </p>
            <p className="text-[#464646] text-[14px] leading-[22px]">
              {step4Data.complexityLevel === 1 && 'Clear dilemma, limited stakeholders, more time'}
              {step4Data.complexityLevel === 2 && 'Moderate ambiguity, 2-3 stakeholders, some time pressure'}
              {step4Data.complexityLevel === 3 && 'Significant ambiguity, competing interests, time pressure'}
              {step4Data.complexityLevel === 4 && 'High ambiguity, multiple complicating factors, urgent'}
              {step4Data.complexityLevel === 5 && 'Extreme ambiguity, cascading complications, crisis mode'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

        {/* Scaffolding Mode */}
        <div className="px-[40px] py-[64px]">
          <label className="block text-[#171717] font-semibold text-[16px] leading-[20px] mb-[4px]">
            Scaffolding Mode*
          </label>
          <p className="text-[#5d5d5d] font-normal text-[12px] leading-[14px] mb-[24px]">
            Choose how much support students receive during the scenario
          </p>
          
          <div className="space-y-[12px]">
            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step4Data.scaffoldingLevel === 'guided'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="scaffolding"
                checked={step4Data.scaffoldingLevel === 'guided'}
                onChange={() => setStep4Data({ ...step4Data, scaffoldingLevel: 'guided' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <Target className="w-5 h-5 text-[#1d5282]" />
                  Guided
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Four Moral Factors visible, hints on request, minimal pressure
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  Best for: First exposure to topic
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step4Data.scaffoldingLevel === 'supported'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="scaffolding"
                checked={step4Data.scaffoldingLevel === 'supported'}
                onChange={() => setStep4Data({ ...step4Data, scaffoldingLevel: 'supported' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <LifeBuoy className="w-5 h-5 text-[#1d5282]" />
                  Supported
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Framework reminder available, hints on request, moderate pressure
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  Best for: Building mastery
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step4Data.scaffoldingLevel === 'independent'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="scaffolding"
                checked={step4Data.scaffoldingLevel === 'independent'}
                onChange={() => setStep4Data({ ...step4Data, scaffoldingLevel: 'independent' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <Rocket className="w-5 h-5 text-[#1d5282]" />
                  Independent
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  No scaffolding, pressure escalation active, assessment mode
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  Best for: Demonstrating competency
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-[12px] p-[24px] rounded-[12px] border cursor-pointer transition-all ${
              step4Data.scaffoldingLevel === 'student-choice'
                ? 'border-[#1d5282] bg-[#efeef7]'
                : 'border-[rgba(13,0,77,0.15)] hover:border-[#1d5282] hover:bg-[rgba(29,82,130,0.02)]'
            }`}>
              <input
                type="radio"
                name="scaffolding"
                checked={step4Data.scaffoldingLevel === 'student-choice'}
                onChange={() => setStep4Data({ ...step4Data, scaffoldingLevel: 'student-choice' })}
                className="w-[18px] h-[18px] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                  <GraduationCap className="w-5 h-5 text-[#1d5282]" />
                  Allow Students to Decide
                </p>
                <p className="text-[#464646] font-normal text-[14px] leading-[22px] mb-[8px]">
                  Students choose their preferred scaffolding level before starting
                </p>
                <p className="text-[#1d5282] font-normal text-[13px] leading-[16px] italic">
                  Best for: Self-directed learning and metacognition
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

        {/* Pressure Escalation */}
        <div className="px-[40px] py-[64px]">
          <label className="flex items-start gap-[12px] cursor-pointer">
            <input
              type="checkbox"
              checked={step4Data.enablePressure}
              onChange={(e) => setStep4Data({ ...step4Data, enablePressure: e.target.checked })}
              className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#1d5282] text-[#1d5282] focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] cursor-pointer"
            />
            <div className="flex-1">
              <p className="text-[#171717] font-medium text-[16px] leading-[20px] mb-[8px] flex items-center gap-[8px]">
                <Zap className="w-5 h-5 text-[#1d5282]" />
                Enable Pressure Escalation
              </p>
              <p className="text-[#464646] font-normal text-[14px] leading-[22px]">
                AI will introduce complications if the student finds an easy solution too quickly, avoids making a clear decision, or reaches the midpoint without engaging deeply.
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="max-w-[900px] mx-auto">
      <div className="text-center mb-[32px]">
        <h2 className="text-[#0d004d] font-bold text-[24px] leading-[28px] mb-[8px]">
          Assessment Configuration
        </h2>
        <p className="text-[#5d5d5d] text-[12px] leading-[14px]">
          Define evaluation criteria and weights for student performance
        </p>
      </div>

      {/* Single Container with All Sections */}
      <div className="bg-white rounded-[4px] overflow-hidden">
        {/* Assessment Criteria */}
        <div className="px-[40px] py-[64px]">
          <div className="flex items-center justify-between mb-[24px]">
            <div>
              <h3 className="text-[#171717] font-semibold text-[16px] leading-[20px] mb-[4px]">
                Assessment Criteria ({assessmentCriteria.length})
              </h3>
              <p className="text-[#5d5d5d] font-normal text-[12px] leading-[14px]">
                Define what you'll evaluate in student responses
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddCriterion}
              className="px-[24px] py-[16px] rounded-[1000px] bg-[#fac800] hover:bg-[#e0b400] text-[#0d004d] transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
            >
              <Plus className="size-4" />
              Add Criterion
            </button>
          </div>

          <div className="space-y-[12px]">
            {assessmentCriteria.map((criterion) => (
              <div
                key={criterion.id}
                className="border border-[rgba(13,0,77,0.15)] rounded-[12px] overflow-hidden transition-all hover:border-[#1d5282]"
              >
                {/* Collapsed View */}
                <div
                  className="p-[24px] cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedCriterion(expandedCriterion === criterion.id ? null : criterion.id)}
                >
                  <div className="flex-1">
                    <p className="text-[#171717] text-[16px] font-medium leading-[20px] mb-[4px]">
                      {criterion.title}
                    </p>
                    <p className="text-[#464646] text-[14px] leading-[22px] line-clamp-1">
                      {criterion.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <div className="text-right">
                      <p className="text-[#1d5282] font-bold text-[20px]">
                        {criterion.weight}%
                      </p>
                    </div>
                    {expandedCriterion === criterion.id ? (
                      <ChevronUp className="size-5 text-[#464646]" />
                    ) : (
                      <ChevronDown className="size-5 text-[#464646]" />
                    )}
                  </div>
                </div>

                {/* Expanded View */}
                {expandedCriterion === criterion.id && (
                  <div className="px-[24px] pb-[24px] space-y-[16px] border-t border-[rgba(13,0,77,0.15)] pt-[24px]">
                    <div>
                      <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-medium">
                        Title
                      </label>
                      <input
                        type="text"
                        value={criterion.title}
                        onChange={(e) => handleUpdateCriterion(criterion.id, 'title', e.target.value)}
                        className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-medium">
                        Description
                      </label>
                      <textarea
                        value={criterion.description}
                        onChange={(e) => handleUpdateCriterion(criterion.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-[16px]">
                      <div>
                        <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-medium">
                          Good Criteria (What good looks like)
                        </label>
                        <textarea
                          value={criterion.goodCriteria}
                          onChange={(e) => handleUpdateCriterion(criterion.id, 'goodCriteria', e.target.value)}
                          rows={4}
                          className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[8px] font-medium">
                          Bad Criteria (What poor looks like)
                        </label>
                        <textarea
                          value={criterion.badCriteria}
                          onChange={(e) => handleUpdateCriterion(criterion.id, 'badCriteria', e.target.value)}
                          rows={4}
                          className="w-full bg-white border border-[#1d5282] rounded-[4px] px-[12px] py-[12px] text-[#464646] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[rgba(29,82,130,0.2)] resize-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#5d5d5d] text-[12px] uppercase tracking-wide mb-[12px] font-medium">
                        Weight: {criterion.weight}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={criterion.weight}
                        onChange={(e) => handleWeightChange(criterion.id, parseInt(e.target.value))}
                        className="w-full h-2 bg-[#e0e0e0] rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #1d5282 0%, #1d5282 ${criterion.weight}%, #e0e0e0 ${criterion.weight}%, #e0e0e0 100%)`
                        }}
                      />
                    </div>

                    <div className="flex justify-end pt-[8px]">
                      <button
                        type="button"
                        onClick={() => handleDeleteCriterion(criterion.id)}
                        className="px-[24px] py-[16px] rounded-[1000px] border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white transition-all font-medium text-[16px] leading-[16px]"
                      >
                        Delete Criterion
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Weight Validation */}
          <div className="mt-[24px] pt-[24px] border-t border-[rgba(13,0,77,0.15)]">
            <div className="flex items-center justify-between p-[24px] rounded-[12px] bg-[#efeef7] border border-[rgba(13,0,77,0.15)]">
              <p className="text-[#171717] text-[16px] font-medium">
                Total Weight
              </p>
              <span className={`text-[24px] font-bold ${
                totalWeight === 100
                  ? 'text-[#4ade80]'
                  : 'text-[#ef4444]'
              }`}>
                {totalWeight}%
              </span>
            </div>
            {totalWeight !== 100 && (
              <p className="text-[#ef4444] text-[14px] mt-[12px] text-center">
                Please adjust weights to total exactly 100%
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(13,0,77,0.15)]"></div>

        {/* Universal Metrics Info */}
        <div className="px-[40px] py-[64px] bg-[#1d5282]">
          <h3 className="text-white text-[16px] mb-[12px] font-bold flex items-center gap-[8px]">
            <Sparkles className="size-5" />
            Universal Metrics (Always Assessed)
          </h3>
          <p className="text-white/90 text-[14px] mb-[20px] leading-[22px]">
            In addition to your custom criteria, the AI automatically evaluates:
          </p>
          
          <div className="space-y-[12px]">
            <div className="flex items-start gap-[12px] p-[16px] bg-white/10 rounded-[12px]">
              <Zap className="w-5 h-5 text-white mt-0.5" />
              <div>
                <p className="text-white font-medium text-[15px] leading-[20px] mb-[4px]">
                  Decision Velocity
                </p>
                <p className="text-white/80 text-[13px] leading-[18px]">
                  Time taken to reach final decision after last complication
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[12px] p-[16px] bg-white/10 rounded-[12px]">
              <Brain className="w-5 h-5 text-white mt-0.5" />
              <div>
                <p className="text-white font-medium text-[15px] leading-[20px] mb-[4px]">
                  Reasoning Quality
                </p>
                <p className="text-white/80 text-[13px] leading-[18px]">
                  Clarity, coherence, and logical consistency of justifications
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[12px] p-[16px] bg-white/10 rounded-[12px]">
              <RefreshCw className="w-5 h-5 text-white mt-0.5" />
              <div>
                <p className="text-white font-medium text-[15px] leading-[20px] mb-[4px]">
                  Self-Correction Rate
                </p>
                <p className="text-white/80 text-[13px] leading-[18px]">
                  Adaptability when presented with new information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return step1Data.area && step1Data.course && step1Data.module && selectedObjectives.length > 0;
      case 2:
        return step2Data.primaryMoralFactors.length > 0 && step2Data.frameworkTension;
      case 3:
        return generatedScenario.scenarioTitle !== '';
      case 4:
        return true;
      case 5:
        return totalWeight === 100;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    console.log('Saving scenario:', {
      step1Data,
      selectedObjectives,
      step2Data,
      generatedScenario,
      step4Data,
      assessmentCriteria
    });
    onSave();
  };

  return (
    <div className="min-h-screen bg-[#f6f6fb]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] shadow-lg sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-[52px] bg-white rounded-full p-1 shadow-md">
              <img alt="USNA Logo" className="object-cover size-full rounded-full" src={imgUSNALogo} />
            </div>
            <div>
              <h1 className="text-white font-bold text-[22px]">
                Create New Scenario
              </h1>
              <p className="text-[#fcc32a] text-[13px] font-semibold">
                Step {currentStep} of {totalSteps}: {
                  currentStep === 1 ? 'Course & Objectives' :
                  currentStep === 2 ? 'Ethical Framework' :
                  currentStep === 3 ? 'AI Generation' :
                  currentStep === 4 ? 'Difficulty & Scaffolding' :
                  'Assessment'
                }
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[#1d5282] transition-all font-semibold text-[15px]"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {renderProgressBar()}

        {/* Step Content */}
        <div className="mb-12">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between max-w-[800px] mx-auto py-[32px]">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-[24px] py-[16px] rounded-[1000px] bg-white border-2 border-[#0d004d] text-[#0d004d] hover:bg-[#f5f5f5] disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none">
              <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="#0D004D" fillRule="evenodd" />
            </svg>
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-[24px] py-[16px] rounded-[1000px] bg-[#ffce00] hover:bg-[#ffd633] disabled:bg-[#e8e8e8] disabled:cursor-not-allowed text-black disabled:text-[#bebebe] transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
            >
              Next step
              <svg className="size-4" viewBox="0 0 16 16" fill="none">
                <path clipRule="evenodd" d={svgPaths.pd2da900} fill="black" fillRule="evenodd" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-3">
              {onTestScenario && (
                <button
                  onClick={onTestScenario}
                  disabled={!canProceed()}
                  className="px-[24px] py-[16px] rounded-[1000px] bg-white border-2 border-[#0d004d] text-[#0d004d] hover:bg-[#f5f5f5] disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
                >
                  <Play className="size-4" />
                  Test Scenario
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={!canProceed()}
                className="px-[24px] py-[16px] rounded-[1000px] bg-[#ffce00] hover:bg-[#ffd633] disabled:bg-[#e8e8e8] disabled:cursor-not-allowed text-black disabled:text-[#bebebe] transition-all font-medium text-[16px] leading-[16px] flex items-center gap-[12px]"
              >
                <Check className="size-4" />
                Publish Scenario
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
