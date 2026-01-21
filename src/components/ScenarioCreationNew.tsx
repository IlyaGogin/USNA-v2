import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InlineEditableText } from './InlineEditableText';
import ModalAddConflict from './ModalAddConflict';
import ModalAddCriteria from './ModalAddCriteria';
import ModalAddObjective from './ModalAddObjective';
import ScenarioReviewModal from './ScenarioReviewModal';
import SelectCharacterModal from './SelectCharacterModal';
import svgPaths from "../imports/svg-kvup3ta6ry";
import svgPathsStep2 from "../imports/svg-5jzm3resqi";
import svgPathsStep3 from "../imports/svg-np0pm0imwd";
import svgPathsStep4 from "../imports/svg-q31vo4zj4l";
import svgPathsStep5 from "../imports/svg-zs4dgiliw5";
import svgPathsMoralFactors from "../imports/svg-gcv8e4meqy";
import svgPathsGenerating from "../imports/svg-crzt03crxp";
import svgPathsScenario from "../imports/svg-5yh44sdtsx";
import svgPathsDifficulty from "../imports/svg-lswwvypkxc";
import svgPathsScaffolding from "../imports/svg-nc1jrllbke";
import svgPathsPressure from "../imports/svg-c73lddutkn";
import svgPathsEvaluation from "../imports/svg-q42no9yu76";
import svgPathsUniversalMetrics from "../imports/svg-mwrhv2apb1";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgInstructor from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgMidshipman from "figma:asset/16f078e810c44ea0d7cbaed6d9a76428f3dc6fe8.png";
import imgMidshipman1 from "figma:asset/dbda829de53edf905d04a9fcc6b339864b41c891.png";
import imgMidshipmanScenario from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";
// Additional area images
import imgInstructor1 from "figma:asset/1aa828c5c6067ca5848cbc0b819e2f3641b034ab.png";
import imgMidshipman2 from "figma:asset/dc6d3b09f88d93a33dd4c71814f8aacf3157e88a.png";
import imgMidshipman3 from "figma:asset/ee769b7176f83de145aa371dadbac1bf2ba30d7a.png";
import { getCoursesByArea, getCourseById, type Area } from '../data/lel-curriculum';

interface ScenarioCreationNewProps {
  onCancel: () => void;
  onSave?: () => void;
  onTestScenario?: () => void;
  onNavigateToTab?: (tab: 'scenarios' | 'reports' | 'insights' | 'students') => void;
}

export function ScenarioCreationNew({ onCancel, onSave, onTestScenario, onNavigateToTab }: ScenarioCreationNewProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState<'area' | 'course' | 'module' | 'objectives'>('area');
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const [selectedConflict, setSelectedConflict] = useState<string | null>(null);
  const [selectedMoralFactors, setSelectedMoralFactors] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenarioGenerated, setScenarioGenerated] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(0);
  
  // Scenario content state
  const [scenarioTitle, setScenarioTitle] = useState('The Maintenance Dilemma');
  const [scenarioDescription, setScenarioDescription] = useState('Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands');
  const [location, setLocation] = useState('Naval Air Station Oceana');
  const [time, setTime] = useState('1800, Friday evening');
  const [studentRole, setStudentRole] = useState('Lieutenant');
  const [studentRoleDesc, setStudentRoleDesc] = useState('Maintenance QA Officer');
  const [aiCharacterName, setAiCharacterName] = useState('Chief Rodriguez');
  const [aiCharacterRole, setAiCharacterRole] = useState('Aviation Maintenance Chief');
  const [situation, setSituation] = useState('During pre-flight inspection, you discover a maintenance discrepancy that was improperly signed off by a Chief with 18 years of spotless service. The issue is technically minor but grounds the aircraft. The squadron is already behind on flight hours.');
  const [dilemma, setDilemma] = useState('Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor\'s career, or trusting his experience while risking flight safety and your own integrity.');
  const [mission, setMission] = useState('Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold standards while treating people with dignity.');
  const [successCriteria, setSuccessCriteria] = useState([
    'Maintains safety standards',
    'Communicates decision rationale clearly',
    'Treats Chief Rodriguez with respect while remaining firm on regulations'
  ]);

  // Scenario variants for regeneration
  const scenarioVariants = [
    {
      title: 'The Maintenance Dilemma',
      description: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands',
      location: 'Naval Air Station Oceana',
      time: '1800, Friday evening',
      studentRole: 'Lieutenant',
      studentRoleDesc: 'Maintenance QA Officer',
      aiCharacterName: 'Chief Rodriguez',
      aiCharacterRole: 'Aviation Maintenance Chief',
      situation: 'During pre-flight inspection, you discover a maintenance discrepancy that was improperly signed off by a Chief with 18 years of spotless service. The issue is technically minor but grounds the aircraft. The squadron is already behind on flight hours.',
      dilemma: 'Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor\'s career, or trusting his experience while risking flight safety and your own integrity.',
      mission: 'Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold standards while treating people with dignity.',
      successCriteria: [
        'Maintains safety standards',
        'Communicates decision rationale clearly',
        'Treats Chief Rodriguez with respect while remaining firm on regulations'
      ]
    },
    {
      title: 'The Safety Standards Challenge',
      description: 'Build competency in ethical reasoning when operational pressures conflict with established safety protocols',
      location: 'Naval Air Station Oceana',
      time: 'Late Friday afternoon, 1745',
      studentRole: 'Lieutenant',
      studentRoleDesc: 'Quality Assurance Officer, Maintenance Division',
      aiCharacterName: 'Senior Chief Martinez',
      aiCharacterRole: 'Lead Aviation Maintenance Technician',
      situation: 'You notice an aircraft maintenance sign-off irregularity during your final inspection of the day. The discrepancy was documented by a Senior Chief known for impeccable service over nearly two decades. While the technical violation is relatively small, protocol demands the aircraft be grounded. Your unit is currently struggling to meet minimum flight hour requirements.',
      dilemma: 'Senior Chief Martinez approaches you privately, requesting you exercise judgment in this instance. He emphasizes his imminent retirement and unblemished record. Your decision requires balancing regulatory compliance against potential career damage to a respected sailor, while considering flight safety implications and your professional credibility.',
      mission: 'Address the conflict between adherence to established procedures, operational safety imperatives, and compassionate leadership. This challenge evaluates your capacity to maintain professional standards while demonstrating respect for personnel.',
      successCriteria: [
        'Upholds aviation safety protocols',
        'Articulates reasoning behind decision effectively',
        'Demonstrates professional respect for Senior Chief Martinez while enforcing regulations'
      ]
    },
    {
      title: 'The Quality Assurance Decision',
      description: 'Strengthen ethical leadership capabilities when operational necessity creates tension with safety compliance',
      location: 'NAS Oceana, Virginia',
      time: 'Friday, 1815 hours',
      studentRole: 'Lieutenant',
      studentRoleDesc: 'Aircraft Maintenance Quality Assurance Lead',
      aiCharacterName: 'Chief Petty Officer Williams',
      aiCharacterRole: 'Senior Maintenance Supervisor',
      situation: 'Your end-of-day aircraft inspection reveals a maintenance certification that doesn\'t meet proper documentation standards, signed by Chief Williams—a technician with 18 years of exemplary performance. The technical issue is minor in scope but requires grounding the aircraft per regulations. The squadron faces significant pressure due to lagging flight training hours.',
      dilemma: 'Chief Williams quietly requests your understanding for this single occurrence, noting his approaching retirement and flawless service history. You face choosing between strict regulatory enforcement that could jeopardize a decorated sailor\'s final months, versus relying on his proven expertise while potentially compromising safety standards and your own professional integrity.',
      mission: 'Balance the competing demands of procedural compliance, aviation safety requirements, and thoughtful leadership of personnel. This scenario assesses your ability to enforce standards consistently while maintaining dignity and respect in difficult conversations.',
      successCriteria: [
        'Enforces safety compliance requirements',
        'Provides clear explanation of decision rationale',
        'Shows respect and professionalism toward Chief Williams while upholding policies'
      ]
    }
  ];

  const handleRegenerate = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const nextVariant = (currentVariant + 1) % scenarioVariants.length;
      setCurrentVariant(nextVariant);
      const variant = scenarioVariants[nextVariant];
      setScenarioTitle(variant.title);
      setScenarioDescription(variant.description);
      setLocation(variant.location);
      setTime(variant.time);
      setStudentRole(variant.studentRole);
      setStudentRoleDesc(variant.studentRoleDesc);
      setAiCharacterName(variant.aiCharacterName);
      setAiCharacterRole(variant.aiCharacterRole);
      setSituation(variant.situation);
      setDilemma(variant.dilemma);
      setMission(variant.mission);
      setSuccessCriteria(variant.successCriteria);
      setIsGenerating(false);
    }, 2000); // 2 second "thinking" delay
  };
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'adaptive' | null>(null);
  const [step4SubStep, setStep4SubStep] = useState<'difficulty' | 'scaffolding' | 'pressure-escalation'>('difficulty');
  const [selectedScaffolding, setSelectedScaffolding] = useState<string | null>(null);
  const [pressureEscalation, setPressureEscalation] = useState<boolean | null>(null);
  const [assessmentCriteria, setAssessmentCriteria] = useState<Record<string, 'low' | 'med' | 'high'>>({
    'articulation': 'med',
    'persistence': 'med',
    'rationalization': 'med',
    'escalation': 'med'
  });
  const [activeModal, setActiveModal] = useState<'conflict' | 'criteria' | 'objective' | 'character' | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showUniversalMetrics, setShowUniversalMetrics] = useState(false);
  
  const totalSteps = 5;

  // Auto-advance from difficulty to scaffolding when difficulty is selected
  useEffect(() => {
    if (currentStep === 4 && step4SubStep === 'difficulty' && selectedDifficulty !== null) {
      const timer = setTimeout(() => {
        setStep4SubStep('scaffolding');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, step4SubStep, selectedDifficulty]);

  // Auto-advance from scaffolding to pressure-escalation when scaffolding is selected
  useEffect(() => {
    if (currentStep === 4 && step4SubStep === 'scaffolding' && selectedScaffolding !== null) {
      const timer = setTimeout(() => {
        setStep4SubStep('pressure-escalation');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, step4SubStep, selectedScaffolding]);

  // Auto-advance from pressure-escalation to step 5 when pressure escalation is selected
  useEffect(() => {
    if (currentStep === 4 && step4SubStep === 'pressure-escalation' && pressureEscalation !== null) {
      const timer = setTimeout(() => {
        setCurrentStep(5);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, step4SubStep, pressureEscalation]);

  // Ethical conflicts for step 2
  const [ethicalConflicts, setEthicalConflicts] = useState([
    {
      id: 'deontology-consequentialism',
      title: 'Deontology vs. Consequentialism',
      description: 'Duty-based rules vs. greatest good outcomes'
    },
    {
      id: 'constraints-consequences',
      title: 'Constraints vs. Consequences',
      description: 'Rights/rules compete with outcome optimization'
    },
    {
      id: 'virtue-ethics',
      title: 'Virtue Ethics Focus',
      description: 'Character formation under pressure'
    },
    {
      id: 'loyalty-duty',
      title: 'Loyalty vs. Duty',
      description: 'Special obligations compete with institutional duties'
    },
    {
      id: 'just-war',
      title: 'Just War Principles',
      description: 'Jus ad bellum / Jus in bello application'
    }
  ]);

  // Difficulty levels for step 4
  const difficultyLevels = [
    {
      level: 1,
      title: 'Foundational',
      description: 'Clear dilemma, limited stakeholders, more time'
    },
    {
      level: 2,
      title: 'Developing',
      description: 'Moderate ambiguity, 2-3 stakeholders, some time pressure'
    },
    {
      level: 3,
      title: 'Intermediate',
      description: 'Significant ambiguity, competing interests, time pressure'
    },
    {
      level: 4,
      title: 'Advanced',
      description: 'High ambiguity, multiple complicating factors, urgent'
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Extreme ambiguity, cascading complications, crisis mode'
    }
  ];

  // Scaffolding options for step 5
  const scaffoldingOptions = [
    {
      id: 'guided',
      title: 'Guided',
      description: 'Four Moral Factors visible, hints on request, minimal pressure',
      iconPath: svgPathsScaffolding.p38a79f80
    },
    {
      id: 'supported',
      title: 'Supported',
      description: 'Framework reminder available, hints on request, moderate pressure',
      iconPath: svgPathsScaffolding.p13d10700
    },
    {
      id: 'independent',
      title: 'Independent',
      description: 'No scaffolding, pressure escalation active, assessment mode',
      iconPath: svgPathsScaffolding.p222b3800
    },
    {
      id: 'student-choice',
      title: 'Allow Midshipmen to Decide',
      description: 'Midshipmen choose their preferred scaffolding level before starting',
      iconPath: svgPathsScaffolding.p2a2c5e00
    }
  ];

  // Assessment criteria for step 5
  const [criteriaOptions, setCriteriaOptions] = useState([
    {
      id: 'articulation',
      title: 'Articulation of Safety Concerns',
      description: 'Evaluates whether the participant can clearly communicate the nature and severity of safety or ethical concerns using evidence and logic.'
    },
    {
      id: 'persistence',
      title: 'Professional Persistence',
      description: 'Evaluates the participant\'s ability to persist in raising legitimate concerns when initially dismissed, while maintaining professionalism.'
    },
    {
      id: 'rationalization',
      title: 'Recognition and Resistance of Rationalization',
      description: 'Evaluates whether the participant can identify when organizational pressure uses rationalization and push back appropriately.'
    },
    {
      id: 'escalation',
      title: 'Appropriate Escalation',
      description: 'Evaluates the participant\'s understanding of when and how to escalate concerns through proper channels.'
    }
  ]);

  // Calculate percentages based on importance levels
  const calculatePercentages = () => {
    const weights = { low: 1, med: 2, high: 3 };
    const total = Object.values(assessmentCriteria).reduce((sum, level) => sum + weights[level], 0);
    const percentages: Record<string, number> = {};
    
    Object.entries(assessmentCriteria).forEach(([key, level]) => {
      percentages[key] = Math.round((weights[level] / total) * 100);
    });
    
    return percentages;
  };

  const percentages = calculatePercentages();

  // Moral factors for step 2 substep
  const moralFactors = [
    {
      id: 'constraints',
      title: 'Constraints',
      description: 'Rules, rights, dignity, Kant\'s Categorical Imperative',
      icon: 'scales'
    },
    {
      id: 'consequences',
      title: 'Consequences',
      description: 'Short/long-term outcomes, stakeholder impact, utilitarian analysis',
      icon: 'chart'
    },
    {
      id: 'character',
      title: 'Character',
      description: 'Virtue ethics, habituation, "what kind of person do I want to be"',
      icon: 'heart'
    },
    {
      id: 'special-obligations',
      title: 'Special Obligations',
      description: 'Role duties, loyalty, oaths, competing loyalties',
      icon: 'handshake'
    }
  ];

  const handleAreaSelect = (area: Area) => {
    setSelectedArea(area);
    setCurrentSubStep('course');
  };

  const handleSkip = () => {
    // Skip to step 2 (Ethical Conflict)
    setCurrentStep(2);
  };

  const handleBackToArea = () => {
    setCurrentSubStep('area');
    setSelectedCourse(null);
    setSelectedModule(null);
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentSubStep('module');
  };

  const handleBackToCourse = () => {
    setCurrentSubStep('course');
    setSelectedModule(null);
  };

  const handleModuleSelect = (moduleNumber: number) => {
    setSelectedModule(moduleNumber);
    setCurrentSubStep('objectives');
  };

  const handleBackToModule = () => {
    setCurrentSubStep('module');
    setSelectedObjectives([]);
  };

  const handleObjectiveToggle = (objective: string) => {
    setSelectedObjectives(prev => 
      prev.includes(objective) 
        ? prev.filter(obj => obj !== objective)
        : [...prev, objective]
    );
  };

  const handleContinue = () => {
    // Move to step 2
    setCurrentStep(2);
  };

  const handleConflictSelect = (conflictId: string) => {
    setSelectedConflict(conflictId);
  };

  const handleMoralFactorToggle = (factorId: string) => {
    setSelectedMoralFactors(prev => 
      prev.includes(factorId) 
        ? prev.filter(f => f !== factorId)
        : [...prev, factorId]
    );
  };

  const handleBackToConflict = () => {
    setSelectedConflict(null);
    setSelectedMoralFactors([]);
  };

  const handleGenerateScenario = () => {
    setCurrentStep(3);
    setIsGenerating(true);
    setScenarioGenerated(false);
  };

  // Simulate scenario generation
  useEffect(() => {
    if (isGenerating && !scenarioGenerated) {
      const timer = setTimeout(() => {
        setIsGenerating(false);
        setScenarioGenerated(true);
      }, 3000); // 3 seconds loading time
      
      return () => clearTimeout(timer);
    }
  }, [isGenerating, scenarioGenerated]);

  const handleTabClick = (tab: 'scenarios' | 'reports' | 'insights' | 'students') => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    } else {
      // If no handler provided, just go back to dashboard
      onCancel();
    }
  };

  const handleBack = () => {
    // Navigate backwards through the flow
    if (currentStep === 5) {
      setCurrentStep(4);
      setStep4SubStep('pressure-escalation');
    } else if (currentStep === 4) {
      if (step4SubStep === 'pressure-escalation') {
        setStep4SubStep('scaffolding');
      } else if (step4SubStep === 'scaffolding') {
        setStep4SubStep('difficulty');
      } else {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      if (scenarioGenerated) {
        setScenarioGenerated(false);
        setCurrentStep(2);
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (selectedConflict) {
        setSelectedConflict(null);
        setSelectedMoralFactors([]);
      } else {
        setCurrentStep(1);
        setCurrentSubStep('objectives');
      }
    } else if (currentStep === 1) {
      if (currentSubStep === 'objectives') {
        setCurrentSubStep('module');
        setSelectedObjectives([]);
      } else if (currentSubStep === 'module') {
        setCurrentSubStep('course');
        setSelectedModule(null);
      } else if (currentSubStep === 'course') {
        setCurrentSubStep('area');
        setSelectedCourse(null);
      } else {
        // At the beginning, cancel
        onCancel();
      }
    }
  };

  const getAreaName = (area: Area | null) => {
    if (!area) return '';
    const areaNames: Record<Area, string> = {
      ethics: 'Ethics',
      leadership: 'Leadership',
      philosophy: 'Philosophy & Psychology'
    };
    return areaNames[area];
  };

  const coursesForArea = selectedArea ? getCoursesByArea(selectedArea) : [];
  const currentCourse = selectedCourse ? getCourseById(selectedCourse) : null;
  const modulesForCourse = currentCourse ? currentCourse.modules : [];
  const currentModule = currentCourse && selectedModule 
    ? currentCourse.modules.find(m => m.module === selectedModule) 
    : null;
  const objectivesForModule = currentModule ? currentModule.learningObjectives : [];

  // Helper function to get initials from role description
  const getInitials = (text: string) => {
    const words = text.trim().split(' ');
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return words.slice(0, 2).map(w => w[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white fixed inset-0 size-full overflow-hidden" data-name="New Scenario: Content">
      
      {/* Main Content Area */}
      <div className="absolute content-stretch flex flex-col h-full items-start left-0 px-[32px] py-0 right-[33%] top-0">
        {/* Header */}
        <div className="content-stretch flex items-center justify-between px-0 py-[40px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)]">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <button 
              onClick={handleBack}
              className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f5f5f5] transition-colors"
            >
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="#0D004D" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </button>
            <p className="font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New scenario</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <button
              onClick={onCancel}
              className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f5f5f5] transition-colors"
            >
              <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Dynamic Content Area with Animation */}
        <div className="flex-1 relative rounded-[4px] shrink-0 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {currentStep === 1 && currentSubStep === 'area' && (
              <motion.div
                key="area"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center size-full"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-center justify-center p-[80px] relative size-full">
                  {/* Area Selection */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[856px]">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which area will this scenario address?</p>
                    </div>
                    
                    {/* Area Cards */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      {/* Ethics */}
                      <button
                        onClick={() => handleAreaSelect('ethics')}
                        className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:ring-2 hover:ring-[#fcc32a] transition-all"
                      >
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="Ethics" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">Ethics</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">NE</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </button>
                      
                      {/* Leadership */}
                      <button
                        onClick={() => handleAreaSelect('leadership')}
                        className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:ring-2 hover:ring-[#fcc32a] transition-all"
                      >
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="Leadership" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">Leadership</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">NL</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </button>
                      
                      {/* Philosophy & Psychology */}
                      <button
                        onClick={() => handleAreaSelect('philosophy')}
                        className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:ring-2 hover:ring-[#fcc32a] transition-all"
                      >
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="Philosophy & Psychology" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman1} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">Philosophy & Psychology</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">NP</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </button>
                    </div>
                    
                    {/* Area Cards - Second Row (Disabled) */}
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      {/* Languages (Disabled) */}
                      <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0 cursor-not-allowed">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="Languages" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor1} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">Languages</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">FL</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      
                      {/* Coaching & Mentoring (Disabled) */}
                      <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0 cursor-not-allowed">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="Coaching & Mentoring" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman2} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">Coaching & Mentoring</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">LU</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      
                      {/* English Communication (Disabled) */}
                      <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0 cursor-not-allowed">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <img alt="English Communication" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman3} />
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full text-left">
                          <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                                <p className="leading-[28px]">English Communication</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                                <p className="leading-[14px]">HE</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                    </div>
                  </div>
                  
                  {/* Skip option */}
                  <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Or create a less targeted scenario</p>
                    </div>
                    <button
                      onClick={handleSkip}
                      className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f5f5f5] transition-colors"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                        <p className="leading-[16px]">Skip this step</p>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && currentSubStep === 'course' && (
              <motion.div
                key="course"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[40px] relative w-full">
                  {/* Breadcrumb */}
                  {selectedArea && (
                    <div className="content-stretch flex gap-[8px] items-start px-0 py-0 relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                        <button
                          onClick={handleBackToArea}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          {getAreaName(selectedArea)}
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <p className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid">Course</p>
                      </div>
                    </div>
                  )}

                  {/* Course Selection */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which course will this scenario address?</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      {coursesForArea.map((course) => (
                        <button
                          key={course.id}
                          onClick={() => handleCourseSelect(course.id)}
                          className={`bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full hover:ring-2 hover:ring-[#fcc32a] transition-all ${
                            selectedCourse === course.id ? 'ring-2 ring-[#fcc32a]' : ''
                          }`}
                        >
                          <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="size-full">
                            <div className="content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
                              {/* Course Code Label */}
                              <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[80px]">
                                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.45)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#171717] text-[16px] text-center text-nowrap">
                                  <p className="leading-[24px]">{course.code}</p>
                                </div>
                              </div>
                              
                              {/* Course Info */}
                              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex items-center relative shrink-0 w-full">
                                  <p className="basis-0 font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-left">{course.name}</p>
                                </div>
                                <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full text-left">{course.description}</p>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && currentSubStep === 'module' && (
              <motion.div
                key="module"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[40px] relative w-full">
                  {/* Breadcrumb */}
                  {selectedArea && selectedCourse && (
                    <div className="content-stretch flex gap-[8px] items-start px-0 py-0 relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                        <button
                          onClick={handleBackToArea}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          {getAreaName(selectedArea)}
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <button
                          onClick={handleBackToCourse}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          Course
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <p className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid">Module</p>
                      </div>
                    </div>
                  )}

                  {/* Module Selection */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which module will it focus on?</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      {modulesForCourse.map((module) => (
                        <button
                          key={module.module}
                          onClick={() => handleModuleSelect(module.module)}
                          className={`bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full hover:ring-2 hover:ring-[#fcc32a] transition-all ${
                            selectedModule === module.module ? 'ring-2 ring-[#fcc32a]' : ''
                          }`}
                        >
                          <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="size-full">
                            <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
                              {/* Module Number Label */}
                              <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[40px]">
                                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.45)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#171717] text-[16px] text-center text-nowrap">
                                  <p className="leading-[24px]">{module.module}</p>
                                </div>
                              </div>
                              
                              {/* Module Title */}
                              <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-left flex-1">{module.title}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && currentSubStep === 'objectives' && (
              <motion.div
                key="objectives"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[40px] relative w-full">
                  {/* Breadcrumb */}
                  {selectedArea && selectedCourse && selectedModule && (
                    <div className="content-stretch flex gap-[8px] items-start px-0 py-0 relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                        <button
                          onClick={handleBackToArea}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          {getAreaName(selectedArea)}
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <button
                          onClick={handleBackToCourse}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          Course
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <button
                          onClick={handleBackToModule}
                          className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                        >
                          Module
                        </button>
                        <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                            <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                  <div className="flex items-center justify-center relative shrink-0">
                                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                      <div className="h-[8.997px] relative w-[5.136px]">
                                        <div className="absolute inset-0">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                            <path clipRule="evenodd" d={svgPathsStep2.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                      <div className="content-stretch flex items-center relative shrink-0">
                        <p className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid">Objectives</p>
                      </div>
                    </div>
                  )}

                  {/* Objective Selection */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which learning objectives should it include?</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      {objectivesForModule.map((objective) => {
                        const isSelected = selectedObjectives.includes(objective);
                        return (
                          <button
                            key={objective}
                            onClick={() => handleObjectiveToggle(objective)}
                            className={`bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full hover:ring-2 hover:ring-[#fcc32a] transition-all ${
                                isSelected ? 'border border-[rgba(13,0,77,0.4)]' : 'border border-[rgba(13,0,77,0.15)]'
                            }`}
                          >
                            <div aria-hidden="true" className="absolute border-0 border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="size-full">
                              <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
                                {/* Checkbox */}
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  {isSelected ? (
                                    <div className="relative shrink-0 size-[18px]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                        <g id="Checkbox">
                                          <path d={svgPathsStep4.p1ebded00} fill="#1D5282" />
                                          <path d={svgPathsStep4.p1de71f00} fill="white" id="check mark" />
                                        </g>
                                      </svg>
                                    </div>
                                  ) : (
                                    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                                      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                    </div>
                                  )}
                                </div>
                                
                                {/* Objective Text */}
                                <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-left flex-1">{objective}</p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    
                    {/* Add objective button */}
                    <button 
                      onClick={() => setActiveModal('objective')}
                      className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
                    >
                      <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPathsStep4.p28614000} fill="#0D004D" id="icon" />
                        </svg>
                      </div>
                      <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                        <p className="leading-[16px]">Add objective</p>
                      </div>
                    </button>
                  </div>
                  
                  {/* Continue button */}
                  <button
                    onClick={handleContinue}
                    className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#e6b900] transition-colors"
                  >
                    <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
                    <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPathsStep4.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                      </svg>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && !selectedConflict && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[40px] relative w-full">
                  {/* Ethical Conflict Selection */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which ethical conflict will the scenario present?</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      {ethicalConflicts.map((conflict) => {
                        const isSelected = selectedConflict === conflict.id;
                        return (
                          <div
                            key={conflict.id}
                            className={`bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full transition-all hover:ring-2 hover:ring-[#fcc32b] ${
                              isSelected ? 'ring-2 ring-[#fcc32a]' : ''
                            }`}
                          >
                            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="size-full">
                              <div className="content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
                                {/* Conflict Info - Clickable */}
                                <button
                                  onClick={() => handleConflictSelect(conflict.id)}
                                  className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-left hover:opacity-80 transition-opacity"
                                >
                                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                                    <p className="basis-0 font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-left">{conflict.title}</p>
                                  </div>
                                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full text-left">{conflict.description}</p>
                                </button>
                                
                                {/* Info Icon */}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('Show info for', conflict.id);
                                  }}
                                  className="content-stretch flex items-center relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
                                  aria-label={`More information about ${conflict.title}`}
                                >
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="Info">
                                      <path d={svgPathsStep5.p37b3bc80} fill="#171717" id="Vector" />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Add conflict button */}
                    <button 
                      onClick={() => setActiveModal('conflict')}
                      className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
                    >
                      <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPathsStep5.p28614000} fill="#0D004D" id="icon" />
                        </svg>
                      </div>
                      <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                        <p className="leading-[16px]">Add conflict</p>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2b: Moral Factors Selection */}
            {currentStep === 2 && selectedConflict && (
              <motion.div
                key="moral-factors"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[24px] relative size-full">
                  {/* Breadcrumb */}
                  <div className="content-stretch flex gap-[8px] items-start px-0 py-[8px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <button
                        onClick={handleBackToConflict}
                        className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid hover:text-[#1d5282] transition-colors"
                      >
                        {ethicalConflicts.find(c => c.id === selectedConflict)?.title}
                      </button>
                      <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0 size-[14px]">
                          <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                                <div className="flex items-center justify-center relative shrink-0">
                                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                    <div className="h-[8.997px] relative w-[5.136px]">
                                      <div className="absolute inset-0">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                          <path clipRule="evenodd" d={svgPathsMoralFactors.p3652d940} fill="#171717" fillRule="evenodd" id="icon" />
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
                    <div className="content-stretch flex items-center relative shrink-0">
                      <p className="font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline decoration-solid">Moral Factors</p>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[856px]">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">What are the primary moral factors you want to test?</p>
                    </div>

                    {/* Moral Factors List */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      {moralFactors.map((factor) => {
                        const isSelected = selectedMoralFactors.includes(factor.id);
                        return (
                          <button
                            key={factor.id}
                            onClick={() => handleMoralFactorToggle(factor.id)}
                            className={`bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-full transition-all hover:ring-2 hover:ring-[#fcc32b] group ${
                              isSelected ? 'ring-2 ring-[#1d5282]' : ''
                            }`}
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]"
                            />
                            
                            {/* Checkbox */}
                            <div className="content-stretch flex items-center justify-center relative shrink-0">
                              {isSelected ? (
                                <div className="relative shrink-0 size-[18px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                    <g>
                                      <path d={svgPathsMoralFactors.p1ebded00} fill="#1D5282" />
                                      <path d={svgPathsMoralFactors.p1de71f00} fill="white" />
                                    </g>
                                  </svg>
                                </div>
                              ) : (
                                <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
                                  <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                              {/* Icon */}
                              <div className="bg-[rgba(29,82,130,0.08)] content-stretch flex items-center p-[12px] relative rounded-[4px] shrink-0">
                                <div className="relative shrink-0 size-[24px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    {factor.icon === 'scales' && (
                                      <path d={svgPathsMoralFactors.p85f9100} fill="#171717" />
                                    )}
                                    {factor.icon === 'chart' && (
                                      <path d={svgPathsMoralFactors.p14cf9580} fill="#171717" />
                                    )}
                                    {factor.icon === 'heart' && (
                                      <path d={svgPathsMoralFactors.p2a812f00} fill="#171717" />
                                    )}
                                    {factor.icon === 'handshake' && (
                                      <path d={svgPathsMoralFactors.p3d1ebdc0} fill="#171717" />
                                    )}
                                  </svg>
                                </div>
                              </div>

                              {/* Text */}
                              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] relative shrink-0 w-full">
                                  <p className="font-medium h-[22px] relative shrink-0 text-[#171717] text-[18px] text-left">{factor.title}</p>
                                  <p className="font-normal relative shrink-0 text-[#5d5d5d] text-[14px] text-left">{factor.description}</p>
                                </div>
                              </div>
                            </div>

                            {/* Info Icon */}
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g clipPath="url(#clip0_info)">
                                  <path d={svgPathsMoralFactors.p29a13e00} fill="#171717" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_info">
                                    <rect fill="white" height="24" width="24" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Generate Scenario Button */}
                  <button
                    onClick={handleGenerateScenario}
                    disabled={selectedMoralFactors.length === 0}
                    className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#e6b900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Generate scenario</p>
                    <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPathsMoralFactors.pd2da900} fill="black" fillRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Scenario Generation */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                {isGenerating ? (
                  /* Loading State */
                  <div className="h-[861px] relative rounded-[4px] shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[56px] items-center justify-center p-[80px] relative size-full">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                          {/* Step 1 - Completed */}
                          <div className="content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[32px] shrink-0">
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="CheckCircle">
                                  <path d={svgPathsGenerating.p16338d80} fill="#00B057" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Analyzing scenario constraints and learning objectives...</p>
                          </div>
                          
                          {/* Vertical Line */}
                          <div className="content-stretch flex items-center px-[15px] py-0 relative shrink-0">
                            <div className="bg-[#e8e6f3] h-[72px] shrink-0 w-[2px]" />
                          </div>
                          
                          {/* Step 2 - Completed */}
                          <div className="content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[32px] shrink-0">
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="CheckCircle">
                                  <path d={svgPathsGenerating.p16338d80} fill="#00B057" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Retrieving relevant Pearson Learning Design Principles to craft effective tasks...</p>
                          </div>
                          
                          {/* Vertical Line */}
                          <div className="content-stretch flex items-center px-[15px] py-0 relative shrink-0">
                            <div className="bg-[#e8e6f3] h-[72px] shrink-0 w-[2px]" />
                          </div>
                          
                          {/* Step 3 - In Progress */}
                          <div className="content-stretch flex gap-[10px] items-center justify-center p-[7px] relative rounded-[32px] shrink-0">
                            <div className="relative shrink-0 size-[18px]" data-name="loading-spinner">
                              <svg className="block size-full animate-spin" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <g id="loading-spinner">
                                  <path d={svgPathsGenerating.p25f2f80} fill="#512EAB" fillOpacity="0.15" id="Main circle" />
                                  <path clipRule="evenodd" d={svgPathsGenerating.p1d2e6e40} fill="#512EAB" fillRule="evenodd" id="Ellipse 4 (Stroke)" />
                                </g>
                              </svg>
                            </div>
                            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Reviewing relevant materials to create an authentic, realistic persona and setting...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Generated Scenario State */
                  <div className="flex flex-col gap-[56px] px-[80px] py-[40px] w-full">
                    <div className="flex flex-col gap-[32px] items-start w-full max-w-[856px]">
                      <div className="w-full">
                        <p className="font-medium leading-[28px] text-[#1d5282] text-[20px] tracking-[-0.4px]">Review your scenario and make any changes</p>
                      </div>
                      
                      {/* Hero Image */}
                      <div className="aspect-[856/307] relative rounded-[4px] w-full" data-name="Midshipman">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                          <div className="absolute bg-white inset-0 rounded-[4px]" />
                          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                            <img alt="" className="absolute h-[152.09%] left-0 max-w-none top-[-18.78%] w-full" src={imgMidshipmanScenario} />
                          </div>
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end size-full">
                          <div className="size-full" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      
                      {/* Title and Description */}
                      <div className="flex flex-col gap-[16px] items-start w-full text-[#171717]">
                        <InlineEditableText 
                          value={scenarioTitle}
                          onChange={setScenarioTitle}
                          className="font-medium leading-[48px] text-[40px] tracking-[-0.8px] w-full"
                        />
                        <InlineEditableText 
                          value={scenarioDescription}
                          onChange={setScenarioDescription}
                          className="font-normal leading-[28px] text-[18px] w-full"
                          multiline
                        />
                      </div>
                      
                      {/* Location and Time */}
                      <div className="flex flex-col gap-[12px] items-start w-full">
                        <div className="flex gap-[20px] items-center px-0 py-[12px] w-full">
                          <div className="flex gap-[12px] items-center shrink-0">
                            <div className="size-[32px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                <g id="MapPin">
                                  <path d={svgPathsScenario.p3336b800} fill="#5D5D5D" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <p className="font-normal leading-[28px] text-[#5d5d5d] text-[18px] w-[120px]">Location</p>
                          </div>
                          <div className="flex-1">
                            <InlineEditableText 
                              value={location}
                              onChange={setLocation}
                              className="font-normal leading-[28px] text-[#171717] text-[18px]"
                            />
                          </div>
                        </div>
                        <div className="flex gap-[20px] items-center px-0 py-[12px] w-full">
                          <div className="flex gap-[12px] items-center shrink-0">
                            <div className="size-[32px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                <g id="Clock">
                                  <path d={svgPathsScenario.p20121700} fill="#5D5D5D" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <p className="font-normal leading-[28px] text-[#5d5d5d] text-[18px] w-[120px]">Time</p>
                          </div>
                          <div className="flex-1">
                            <InlineEditableText 
                              value={time}
                              onChange={setTime}
                              className="font-normal leading-[28px] text-[#171717] text-[18px]"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Student Role and AI Character */}
                      <div className="flex gap-[20px] items-stretch w-full">
                        <div className="flex-1 flex flex-col gap-[12px] items-start">
                          <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px] w-full">Midshipman role</p>
                          <div className="bg-[#f6f6fb] relative rounded-[12px] w-full h-[115px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="flex items-center size-full">
                              <div className="flex gap-[24px] items-center p-[24px] w-full">
                                <div className="relative shrink-0 size-[67px]">
                                  <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 top-0 rounded-[80px] size-[67px] flex items-center justify-center">
                                    <span className="font-semibold text-[#1d5282] text-[20px]">
                                      {getInitials(studentRoleDesc)}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-[8px] items-start min-w-0">
                                  <InlineEditableText 
                                    value={studentRole}
                                    onChange={setStudentRole}
                                    className="font-medium leading-[22px] text-[#171717] text-[18px] w-full"
                                  />
                                  <InlineEditableText 
                                    value={studentRoleDesc}
                                    onChange={setStudentRoleDesc}
                                    className="font-normal leading-[24px] text-[#5d5d5d] text-[16px] w-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[12px] items-start">
                          <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px] w-full">AI character</p>
                          <button 
                            onClick={() => setActiveModal('character')}
                            className="bg-[#f6f6fb] relative rounded-[12px] w-full h-[115px] hover:bg-[#efeef7] transition-colors group text-left"
                          >
                            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] group-hover:border-[rgba(13,0,77,0.25)]" />
                            <div className="flex items-center size-full">
                              <div className="flex gap-[24px] items-center p-[24px] w-full">
                                <div className="relative rounded-[80px] shrink-0 size-[67px] overflow-hidden">
                                  <img alt="" className="absolute h-[143.75%] left-[-61.19%] max-w-none top-[-21.88%] w-[222.39%]" src={imgRectangle12189} />
                                </div>
                                <div className="flex-1 flex flex-col gap-[8px] items-start min-w-0">
                                  <p className="font-medium leading-[22px] text-[#171717] text-[18px] w-full">{aiCharacterName}</p>
                                  <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px] w-full">{aiCharacterRole}</p>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                      {/* Situation, Dilemma, and Mission */}
                      <div className="flex flex-col gap-[48px] items-start px-0 py-[16px] w-full">
                        <div className="flex flex-col gap-[16px] items-start w-full text-[#171717]">
                          <p className="font-medium text-[20px] tracking-[-0.4px] leading-[28px]">Situation</p>
                          <InlineEditableText 
                            value={situation}
                            onChange={setSituation}
                            className="font-normal text-[18px] leading-[28px] w-full"
                            multiline
                          />
                        </div>
                        
                        <div className="flex flex-col gap-[16px] items-start w-full text-[#171717]">
                          <p className="font-medium text-[20px] tracking-[-0.4px] leading-[28px]">Dilemma</p>
                          <InlineEditableText 
                            value={dilemma}
                            onChange={setDilemma}
                            className="font-normal text-[18px] leading-[28px] w-full"
                            multiline
                          />
                        </div>
                        
                        <div className="flex flex-col gap-[16px] items-start w-full text-[#171717]">
                          <p className="font-medium text-[20px] tracking-[-0.4px] leading-[28px]">Midshipman Mission</p>
                          <InlineEditableText 
                            value={mission}
                            onChange={setMission}
                            className="font-normal text-[18px] leading-[28px] w-full"
                            multiline
                          />
                        </div>
                        
                        {/* Divider */}
                        <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                        
                        {/* Success Criteria */}
                        <div className="flex items-start w-full">
                          <div className="flex-1 flex flex-col gap-[12px] items-start">
                            <p className="font-medium leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">Success Criteria</p>
                            <div className="flex flex-col gap-[8px] items-start w-full">
                              {successCriteria.map((criteria, index) => (
                                <div key={index} className="relative flex items-center px-0 py-[12px] w-full border-b border-[rgba(13,0,77,0.15)]">
                                  <InlineEditableText 
                                    value={criteria}
                                    onChange={(newValue) => {
                                      const updated = [...successCriteria];
                                      updated[index] = newValue;
                                      setSuccessCriteria(updated);
                                    }}
                                    className="flex-1 font-normal leading-[28px] text-[#171717] text-[18px]"
                                  />
                                </div>
                              ))}
                            </div>
                            <button 
                              onClick={() => setActiveModal('criteria')}
                              className="flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[1000px] hover:bg-[#f5f5f5] transition-colors"
                            >
                              <div className="flex items-center size-[16px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <path d={svgPathsScenario.p28614000} fill="#0D004D" id="icon" />
                                </svg>
                              </div>
                              <p className="font-medium leading-[16px] text-[#0d004d] text-[16px]">Add criteria</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Buttons */}
                    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleRegenerate}
                        className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
                      >
                        <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                        <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g id="trim">
                              <path clipRule="evenodd" d={svgPathsScenario.p303cde40} fill="#0D004D" fillRule="evenodd" id="icon" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                          <p className="leading-[16px]">Regenerate</p>
                        </div>
                      </button>
                      <button 
                        onClick={() => setCurrentStep(4)}
                        className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#e6b900] transition-colors"
                      >
                        <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
                        <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g id="trim">
                              <path clipRule="evenodd" d={svgPathsScenario.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
            
            {/* Step 4: Difficulty Level */}
            {currentStep === 4 && step4SubStep === 'difficulty' && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[56px] px-[80px] py-[40px] w-full overflow-y-auto"
              >
                <div className="flex flex-col gap-[32px] items-start w-full max-w-[856px]">
                  <div className="w-full">
                    <p className="font-medium leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">How difficult would you like the scenario to be?</p>
                  </div>
                  
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    {difficultyLevels.map((level) => (
                      <button
                        key={level.level}
                        onClick={() => setSelectedDifficulty(level.level)}
                        className={`bg-[#f6f6fb] relative rounded-[12px] w-full transition-all hover:ring-2 hover:ring-[#fcc32b] ${
                          selectedDifficulty === level.level ? 'ring-2 ring-[#1d5282]' : ''
                        }`}
                      >
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex gap-[24px] items-start p-[24px] w-full">
                          <div className="bg-white relative flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[4px] shrink-0">
                            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.45)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            <p className="font-semibold leading-[24px] text-[#171717] text-[16px] whitespace-nowrap">LEVEL {level.level}</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-[8px] items-start">
                            <p className="font-medium leading-[22px] text-[#171717] text-[18px]">{level.title}</p>
                            <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px]">{level.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                    
                    {/* Adaptive Mode */}
                    <div className="flex gap-[32px] items-center justify-center px-0 py-[12px] w-full">
                      <p className="flex-1 font-medium leading-[22px] text-[#171717] text-[18px]">Or adapt the scenarios to each learner</p>
                      <button
                        onClick={() => setSelectedDifficulty('adaptive')}
                        className={`relative flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[1000px] transition-all hover:bg-[#f5f5f5] ${
                          selectedDifficulty === 'adaptive' ? 'ring-2 ring-[#1d5282]' : ''
                        }`}
                      >
                        <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                        <p className="font-medium leading-[16px] text-[#0d004d] text-[16px]">Use Adaptive Mode</p>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Scaffolding Support */}
            {currentStep === 4 && step4SubStep === 'scaffolding' && (
              <motion.div
                key="step-4-scaffolding"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[56px] px-[80px] py-[24px] w-full overflow-y-auto"
              >
                {/* Breadcrumb */}
                <div className="flex gap-[8px] items-start px-0 py-[8px] w-full">
                  <div className="flex gap-[5px] items-center">
                    <button
                      onClick={() => setStep4SubStep('difficulty')}
                      className="font-normal leading-[22px] text-[#171717] text-[14px] underline decoration-solid hover:text-[#5d5d5d] transition-colors cursor-pointer"
                    >
                      Level {selectedDifficulty === 'adaptive' ? 'Adaptive' : selectedDifficulty}: {selectedDifficulty === 'adaptive' ? 'Adaptive Mode' : difficultyLevels.find(l => l.level === selectedDifficulty)?.title}
                    </button>
                    <div className="flex items-center pb-0 pt-[2px] px-0">
                      <div className="flex items-center size-[14px]">
                        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                          <svg className="block w-[5.136px] h-[8.997px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                            <path clipRule="evenodd" d={svgPathsScaffolding.p3652d940} fill="#171717" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-normal leading-[22px] text-[#171717] text-[14px] underline decoration-solid">Scaffolding</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[32px] items-start w-full max-w-[856px]">
                  <div className="w-full">
                    <p className="font-medium leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">How much support should midshipmen receive?</p>
                  </div>
                  
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    {scaffoldingOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedScaffolding(option.id)}
                        className={`bg-[#f6f6fb] relative rounded-[12px] w-full transition-all hover:ring-2 hover:ring-[#fcc32b] ${
                          selectedScaffolding === option.id ? 'ring-2 ring-[#1d5282]' : ''
                        }`}
                      >
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex gap-[24px] items-center p-[24px] w-full">
                          <div className="bg-[rgba(29,82,130,0.08)] flex items-center p-[12px] rounded-[4px] shrink-0">
                            <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={option.iconPath} fill="#171717" />
                            </svg>
                          </div>
                          <div className="flex-1 flex flex-col gap-[8px] items-start">
                            <p className="font-medium leading-[22px] text-[#171717] text-[18px] text-left">{option.title}</p>
                            <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] text-left">{option.description}</p>
                          </div>
                          <svg className="block size-[24px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsScaffolding.p37b3bc80} fill="#171717" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Pressure Escalation */}
            {currentStep === 4 && step4SubStep === 'pressure-escalation' && (
              <motion.div
                key="step-4-pressure"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[56px] px-[80px] py-[24px] w-full overflow-y-auto"
              >
                {/* Breadcrumb */}
                <div className="flex gap-[8px] items-start px-0 py-[8px] w-full">
                  <div className="flex gap-[5px] items-center">
                    <button
                      onClick={() => setStep4SubStep('difficulty')}
                      className="font-normal leading-[22px] text-[#171717] text-[14px] underline decoration-solid hover:text-[#5d5d5d] transition-colors cursor-pointer"
                    >
                      Level {selectedDifficulty === 'adaptive' ? 'Adaptive' : selectedDifficulty}: {selectedDifficulty === 'adaptive' ? 'Adaptive Mode' : difficultyLevels.find(l => l.level === selectedDifficulty)?.title}
                    </button>
                    <div className="flex items-center pb-0 pt-[2px] px-0">
                      <div className="flex items-center size-[14px]">
                        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                          <svg className="block w-[5.136px] h-[8.997px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                            <path clipRule="evenodd" d={svgPathsPressure.p3652d940} fill="#171717" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-center">
                    <button
                      onClick={() => setStep4SubStep('scaffolding')}
                      className="font-normal leading-[22px] text-[#171717] text-[14px] underline decoration-solid hover:text-[#5d5d5d] transition-colors cursor-pointer"
                    >
                      {scaffoldingOptions.find(s => s.id === selectedScaffolding)?.title}
                    </button>
                    <div className="flex items-center pb-0 pt-[2px] px-0">
                      <div className="flex items-center size-[14px]">
                        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                          <svg className="block w-[5.136px] h-[8.997px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                            <path clipRule="evenodd" d={svgPathsPressure.p3652d940} fill="#171717" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-normal leading-[22px] text-[#171717] text-[14px] underline decoration-solid">Pressure Escalation</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[32px] items-start w-full max-w-[856px]">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-medium leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">Do you want to enable pressure escalation?</p>
                    <p className="font-normal leading-[28px] text-[#5d5d5d] text-[18px]">AI will introduce complications if the midshipman finds an easy solution too quickly, avoids making a clear decision, or reaches the midpoint without engaging deeply.</p>
                  </div>
                  
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <button
                      onClick={() => setPressureEscalation(true)}
                      className={`bg-[#f6f6fb] relative rounded-[12px] w-full transition-all hover:ring-2 hover:ring-[#fcc32b] ${
                        pressureEscalation === true ? 'ring-2 ring-[#1d5282]' : ''
                      }`}
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex gap-[16px] items-center p-[24px] w-full">
                        <div className="bg-[rgba(29,82,130,0.08)] flex items-center p-[12px] rounded-[4px] shrink-0">
                          <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsPressure.p50cd900} fill="#171717" />
                          </svg>
                        </div>
                        <p className="flex-1 font-medium leading-[22px] text-[#171717] text-[18px] text-left">Yes, enable pressure escalation</p>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setPressureEscalation(false)}
                      className={`bg-[#f6f6fb] relative rounded-[12px] w-full transition-all hover:ring-2 hover:ring-[#fcc32b] ${
                        pressureEscalation === false ? 'ring-2 ring-[#1d5282]' : ''
                      }`}
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex gap-[16px] items-center p-[24px] w-full">
                        <div className="bg-[rgba(29,82,130,0.08)] flex items-center p-[12px] rounded-[4px] shrink-0">
                          <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsPressure.pd841500} fill="#171717" />
                          </svg>
                        </div>
                        <p className="flex-1 font-medium leading-[22px] text-[#171717] text-[18px] text-left">No, don't use pressure escalation</p>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Assessment Criteria */}
            {currentStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="size-full overflow-y-auto"
              >
                <div className="flex flex-col gap-[56px] px-[80px] py-[40px] pb-[80px] w-full"
>
                <div className="flex flex-col gap-[32px] items-start w-full max-w-[856px]">
                  <div className="flex gap-[32px] items-center w-full">
                    <div className="flex-1 flex flex-col gap-[8px] items-start">
                      <p className="font-medium leading-[28px] text-[#171717] text-[20px] tracking-[-0.4px]">Assessment Criteria</p>
                      <p className="font-normal leading-[28px] text-[#5d5d5d] text-[18px]">Set the importance of each criteria and we'll calculate the weighting for you.</p>
                    </div>
                    <button className="flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[1000px] relative hover:bg-[#f5f5f5] transition-colors">
                      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                      <p className="font-medium leading-[16px] text-[#0d004d] text-[16px]">Manual entry</p>
                    </button>
                  </div>

                  <div className="bg-[#f6f6fb] relative rounded-[12px] w-full overflow-hidden">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    
                    <button 
                      onClick={() => setShowUniversalMetrics(!showUniversalMetrics)}
                      className="flex gap-[24px] items-start px-[24px] py-[16px] w-full hover:bg-[#ededf5] transition-colors"
                    >
                      <p className="flex-1 font-normal leading-[24px] text-[#5d5d5d] text-[16px] text-left">
                        {showUniversalMetrics ? 'Hide universal metrics' : 'View universal metrics'}
                      </p>
                      <svg 
                        className={`block size-[24px] transition-transform ${showUniversalMetrics ? 'rotate-180' : ''}`} 
                        fill="none" 
                        preserveAspectRatio="none" 
                        viewBox="0 0 24 24"
                      >
                        <path d={svgPathsUniversalMetrics.p21dac100} fill="#171717" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {showUniversalMetrics && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-[24px] items-start px-[24px] pb-[24px] w-full">
                            {/* Decision Velocity */}
                            <div className="flex flex-col gap-[8px] items-start w-full">
                              <p className="font-medium leading-[22px] text-[#171717] text-[18px]">Decision Velocity</p>
                              <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px]">Time taken to reach final decision after last complication</p>
                            </div>

                            {/* Divider */}
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 808 1">
                                  <line stroke="#0D004D" strokeOpacity="0.15" x2="808" y1="0.5" y2="0.5" />
                                </svg>
                              </div>
                            </div>

                            {/* Reasoning Quality */}
                            <div className="flex flex-col gap-[8px] items-start w-full">
                              <p className="font-medium leading-[22px] text-[#171717] text-[18px]">Reasoning Quality</p>
                              <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px]">Clarity, coherence, and logical consistency of justifications</p>
                            </div>

                            {/* Divider */}
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 808 1">
                                  <line stroke="#0D004D" strokeOpacity="0.15" x2="808" y1="0.5" y2="0.5" />
                                </svg>
                              </div>
                            </div>

                            {/* Self-Correction Rate */}
                            <div className="flex flex-col gap-[8px] items-start w-full">
                              <p className="font-medium leading-[22px] text-[#171717] text-[18px]">Self-Correction Rate</p>
                              <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px]">Adaptability when presented with new information</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-[8px] items-start w-full">
                    {criteriaOptions.map((criteria) => (
                      <div
                        key={criteria.id}
                        className="flex gap-[32px] items-center justify-center px-0 py-[12px] w-full relative"
                      >
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        <div className="flex-1 flex flex-col gap-[8px] items-start">
                          <p className="font-medium leading-[22px] text-[#171717] text-[18px]">{criteria.title}</p>
                          <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px]">{criteria.description}</p>
                        </div>
                        <div className="flex gap-[8px] items-center">
                          <div className="flex gap-[5px] items-start">
                            <button
                              onClick={() => setAssessmentCriteria({ ...assessmentCriteria, [criteria.id]: 'low' })}
                              className={`relative flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[1000px] transition-colors ${
                                assessmentCriteria[criteria.id] === 'low' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
                              }`}
                            >
                              {assessmentCriteria[criteria.id] !== 'low' && (
                                <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                              )}
                              <p className={`font-medium leading-[16px] text-[14px] ${
                                assessmentCriteria[criteria.id] === 'low' ? 'text-white' : 'text-[#0d004d]'
                              }`}>Low</p>
                            </button>
                            <button
                              onClick={() => setAssessmentCriteria({ ...assessmentCriteria, [criteria.id]: 'med' })}
                              className={`relative flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[1000px] transition-colors ${
                                assessmentCriteria[criteria.id] === 'med' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
                              }`}
                            >
                              {assessmentCriteria[criteria.id] !== 'med' && (
                                <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                              )}
                              <p className={`font-medium leading-[16px] text-[14px] ${
                                assessmentCriteria[criteria.id] === 'med' ? 'text-white' : 'text-[#0d004d]'
                              }`}>Med</p>
                            </button>
                            <button
                              onClick={() => setAssessmentCriteria({ ...assessmentCriteria, [criteria.id]: 'high' })}
                              className={`relative flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[1000px] transition-colors ${
                                assessmentCriteria[criteria.id] === 'high' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
                              }`}
                            >
                              {assessmentCriteria[criteria.id] !== 'high' && (
                                <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                              )}
                              <p className={`font-medium leading-[16px] text-[14px] ${
                                assessmentCriteria[criteria.id] === 'high' ? 'text-white' : 'text-[#0d004d]'
                              }`}>High</p>
                            </button>
                          </div>
                          <p className="font-medium leading-[22px] text-[#1d5282] text-[18px] text-right w-[56px]">{percentages[criteria.id]}%</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveModal('criteria')}
                    className="flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[1000px] hover:bg-[#f5f5f5] transition-colors"
                  >
                    <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPathsEvaluation.p28614000} fill="#0D004D" />
                    </svg>
                    <p className="font-medium leading-[16px] text-[#0d004d] text-[16px]">Add criteria</p>
                  </button>
                </div>

                  <button 
                    onClick={() => setShowReviewModal(true)}
                    className="bg-[#ffce00] flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[1000px] hover:bg-[#fcc32b] transition-colors w-auto mx-auto"
                  >
                    <p className="font-medium leading-[16px] text-[16px] text-black">Review Scenario</p>
                    <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path clipRule="evenodd" d={svgPathsEvaluation.pd2da900} fill="black" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67%] items-start justify-center px-[40px] py-0">
        <div className="font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px] w-full max-w-[408px]">
          {currentStep === 1 ? (
            <>
              <p className="mb-0">Select the</p>
              <p>course content</p>
            </>
          ) : currentStep === 2 ? (
            <>
              <p className="mb-0">Select the</p>
              <p>ethical dimensions</p>
            </>
          ) : currentStep === 3 && isGenerating ? (
            <>
              <p className="mb-0">Generating</p>
              <p>your scenario</p>
            </>
          ) : currentStep === 3 ? (
            <p>Your scenario</p>
          ) : currentStep === 4 ? (
            <p>Configure difficulty</p>
          ) : currentStep === 5 ? (
            <>
              <p className="mb-0">Define</p>
              <p>evaluation criteria</p>
            </>
          ) : null}
        </div>
        
        {/* Progress indicator */}
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full max-w-[408px]">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0 ${
                index >= currentStep ? 'opacity-10' : ''
              }`}
            />
          ))}
        </div>
        
        {currentStep === 1 && (
          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
            Select which Leadership, Ethics, and Law (LEL) course this scenario supports. This ensure the training objectives align with the Brigade's core curriculum and allows for integrated assessment across classroom and simulation learning.
          </p>
        )}
        
        {currentStep === 2 && !selectedConflict && (
          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
            Define which type of ethical conflict this scenario will present to midshipmen and what frameworks they'll use to analyze the decision.
          </p>
        )}
        
        {currentStep === 2 && selectedConflict && (
          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
            Select which ethical framework should guide the assessment of this scenario. Midshipmen will be evaluated on how well they apply these principles when facing the dilemma presented.
          </p>
        )}
        
        {currentStep === 3 && isGenerating && (
          <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
            Please wait, we're generating a realistic scenario based on your selections
          </p>
        )}
        
        {currentStep === 4 && step4SubStep === 'difficulty' && (
          <>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
              Adjust the challenge level and support for midshipmen throughout the scenario.
            </p>
            
            {/* Scenario Preview Card */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="flex flex-col items-start p-[16px] w-full">
                  <div className="aspect-[454/240] relative rounded-[4px] w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgMidshipmanScenario} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="flex flex-col items-start justify-end p-[16px] size-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="font-medium leading-[28px] text-white text-[20px] tracking-[-0.4px]">{scenarioTitle}</p>
                          <p className="font-medium leading-[14px] text-[#fcc32b] text-[12px]">{scenarioDescription}</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {currentStep === 4 && step4SubStep !== 'difficulty' && (
          <>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
              Adjust the challenge level and support for midshipmen throughout the scenario.
            </p>
            
            {/* Scenario Preview Card */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] w-full">
                  <div className="aspect-[454/240] relative rounded-[4px] w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgMidshipmanScenario} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="flex flex-col items-start justify-end p-[16px] size-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="font-medium leading-[28px] text-white text-[20px] tracking-[-0.4px]">{scenarioTitle}</p>
                          <p className="font-medium leading-[14px] text-[#fcc32b] text-[12px]">{scenarioDescription}</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <div className="flex gap-[12px] items-center px-[16px] py-0">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsPressure.p352a3980} fill="#171717" />
                    </svg>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] w-[408px]">
                      Level {selectedDifficulty === 'adaptive' ? 'Adaptive' : selectedDifficulty}: {selectedDifficulty === 'adaptive' ? 'Adaptive Mode' : difficultyLevels.find(l => l.level === selectedDifficulty)?.title}
                    </p>
                  </div>
                  {step4SubStep === 'pressure-escalation' && selectedScaffolding && (
                    <div className="flex gap-[12px] items-center px-[16px] py-0">
                      <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsPressure.p13d10700} fill="#171717" />
                      </svg>
                      <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] w-[408px]">
                        {scaffoldingOptions.find(s => s.id === selectedScaffolding)?.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 5 && (
          <>
            <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full max-w-[408px]">
              Select any criteria you want to use for this training, add new criteria if needed. Users will be assessed and received feedback based on these criteria.
            </p>
            
            {/* Scenario Preview Card */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] w-full">
                  <div className="aspect-[454/240] relative rounded-[4px] w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgMidshipmanScenario} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="flex flex-col items-start justify-end p-[16px] size-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="font-medium leading-[28px] text-white text-[20px] tracking-[-0.4px]">{scenarioTitle}</p>
                          <p className="font-medium leading-[14px] text-[#fcc32b] text-[12px]">{scenarioDescription}</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <div className="flex gap-[12px] items-center px-[16px] py-0">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsEvaluation.p2791bf80} fill="#171717" />
                    </svg>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] w-[408px]">{location}</p>
                  </div>
                  <div className="flex gap-[12px] items-center px-[16px] py-0">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsEvaluation.p11cad330} fill="#171717" />
                    </svg>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] w-[408px]">{time}</p>
                  </div>
                  <div className="flex gap-[12px] items-center px-[16px] py-0">
                    <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsEvaluation.p36f904f0} fill="#171717" />
                    </svg>
                    <p className="font-normal leading-[22px] text-[#5d5d5d] text-[14px] w-[408px]">{aiCharacterRole}, {aiCharacterName}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Selected Course Card */}
        {currentStep === 1 && currentCourse && currentSubStep === 'module' && (
          <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Book">
                        <path d={svgPathsStep3.p3f64b100} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentCourse.code}: {currentCourse.name}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Selected Course and Module Card */}
        {currentStep === 1 && currentCourse && currentModule && currentSubStep === 'objectives' && (
          <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Book">
                        <path d={svgPathsStep3.p3f64b100} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentCourse.code}: {currentCourse.name}</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="BookOpenText">
                        <path d={svgPathsStep4.pe05de00} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentModule.title}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Course, Module, and Objectives Card */}
        {currentStep === 2 && !selectedConflict && currentCourse && currentModule && (
          <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Book">
                        <path d={svgPathsStep3.p3f64b100} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentCourse.code}: {currentCourse.name}</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="BookOpenText">
                        <path d={svgPathsStep4.pe05de00} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentModule.title}</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-start px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px] mt-[2px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Target">
                        <path d={svgPathsStep5.p31d08500} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    {selectedObjectives.map((objective, index) => (
                      <p key={index} className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{objective}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2b: Course, Module, Objectives, and Conflict Card */}
        {currentStep === 2 && selectedConflict && currentCourse && currentModule && (
          <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full max-w-[408px]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Book">
                        <path d={svgPathsMoralFactors.p3f64b100} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentCourse.code}: {currentCourse.name}</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="BookOpenText">
                        <path d={svgPathsMoralFactors.pe05de00} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{currentModule.title}</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-start px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px] mt-[2px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Target">
                        <path d={svgPathsMoralFactors.p31d08500} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    {selectedObjectives.slice(0, 1).map((objective, index) => (
                      <p key={index} className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{objective}</p>
                    ))}
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Scales">
                        <path d={svgPathsMoralFactors.p2f6d6b80} fill="#171717" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] flex-1">{ethicalConflicts.find(c => c.id === selectedConflict)?.title}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 3: Regenerate Button and Scenario Preview */}
        {currentStep === 3 && !isGenerating && (
          <>
            <button 
              onClick={handleRegenerate}
              className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPathsScenario.p303cde40} fill="#0D004D" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Regenerate</p>
              </div>
            </button>
            
            {/* Scenario Preview Card */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
                  <div className="aspect-[454/240] relative rounded-[4px] shrink-0 w-full" data-name="Midshipman">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <div className="absolute bg-white inset-0 rounded-[4px]" />
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipmanScenario} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                        <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                          <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                            <p className="leading-[28px]">{scenarioTitle}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                            <p className="leading-[14px]">{scenarioDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="MapPin">
                          <path d={svgPathsScenario.p2791bf80} fill="#171717" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">{location}</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Clock">
                          <path d={svgPathsScenario.p11cad330} fill="#171717" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">{time}</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="UserCircle">
                          <path d={svgPathsScenario.p36f904f0} fill="#171717" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">{aiCharacterRole}, {aiCharacterName}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Modal Overlay */}
      {activeModal && (
        <>
          <div 
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(13, 0, 77, 0.4)' }}
            onClick={() => setActiveModal(null)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none">
            <div className="pointer-events-auto">
              {activeModal === 'conflict' && (
                <ModalAddConflict
                  onClose={() => setActiveModal(null)}
                  onAdd={(conflict) => {
                    const newId = conflict.title.toLowerCase().replace(/\s+/g, '-');
                    setEthicalConflicts([...ethicalConflicts, {
                      id: newId,
                      title: conflict.title,
                      description: conflict.subtitle
                    }]);
                  }}
                />
              )}
              {activeModal === 'criteria' && (
                <ModalAddCriteria
                  onClose={() => setActiveModal(null)}
                  onAdd={(criteria) => {
                    // Create a unique ID from the name
                    const newId = criteria.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    
                    // Add to criteriaOptions
                    setCriteriaOptions([...criteriaOptions, {
                      id: newId,
                      title: criteria.name,
                      description: criteria.description
                    }]);
                    
                    // Add to assessmentCriteria with the selected importance
                    setAssessmentCriteria({
                      ...assessmentCriteria,
                      [newId]: criteria.importance
                    });
                  }}
                />
              )}
              {activeModal === 'objective' && (
                <ModalAddObjective
                  onClose={() => setActiveModal(null)}
                  onAdd={(objective) => {
                    setSelectedObjectives([...selectedObjectives, objective]);
                  }}
                />
              )}
              {activeModal === 'character' && (
                <SelectCharacterModal
                  onClose={() => setActiveModal(null)}
                  onSelectCharacter={(character) => {
                    setAiCharacterName(character.name);
                    setAiCharacterRole(character.role);
                    setActiveModal(null);
                  }}
                  onCreateNew={() => {
                    // For now, just close the modal - can be expanded later
                    setActiveModal(null);
                  }}
                  selectedCharacterId={undefined}
                />
              )}
            </div>
          </div>
        </>
      )}
      
      {/* Review Scenario Modal */}
      {showReviewModal && (
        <ScenarioReviewModal
          scenarioData={{
            title: scenarioTitle,
            description: scenarioDescription,
            location,
            time,
            aiCharacterName,
            aiCharacterRole,
            studentRole,
            studentRoleDesc,
            situation,
            dilemma,
            mission,
            successCriteria
          }}
          onClose={() => setShowReviewModal(false)}
          onTestScenario={() => {
            setShowReviewModal(false);
            onTestScenario?.();
          }}
          onLaunchScenario={() => {
            setShowReviewModal(false);
            onSave?.();
          }}
          onAssignToStudents={() => {
            setShowReviewModal(false);
            // Handle assign to students
          }}
          onEdit={() => {
            setShowReviewModal(false);
            // Stay in edit mode
          }}
        />
      )}
    </div>
  );
}