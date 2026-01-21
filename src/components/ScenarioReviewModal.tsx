import { useState } from 'react';
import svgPaths from "../imports/svg-a2fa3lnmfx";
import svgPathsReview from "../imports/svg-d9dnrwxj02";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";

type ScenarioReviewModalProps = {
  scenarioData: {
    title: string;
    description: string;
    location: string;
    time: string;
    aiCharacterName: string;
    aiCharacterRole: string;
    studentRole: string;
    studentRoleDesc: string;
    situation: string;
    dilemma: string;
    mission: string;
    successCriteria: string[];
  };
  onClose: () => void;
  onTestScenario?: () => void;
  onLaunchScenario?: () => void;
  onAssignToStudents?: () => void;
  onEdit?: () => void;
  onViewScenarioDetails?: () => void;
};

export default function ScenarioReviewModal({
  scenarioData,
  onClose,
  onTestScenario,
  onLaunchScenario,
  onAssignToStudents,
  onEdit,
  onViewScenarioDetails
}: ScenarioReviewModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'ai-scores'>('overview');

  // Mock AI confidence scores
  const aiScores = {
    scenarioQuality: 94,
    authenticity: 89,
    curriculumAlignment: 96,
    ldpCompliance: 92
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#00B057';
    if (score >= 75) return '#FFCE00';
    return '#FF6B6B';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    return 'Needs Improvement';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-[24px]">
      <div className="bg-[#f6f6fb] content-stretch flex flex-col rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-full max-w-[1200px] h-[90vh]">
        {/* Header */}
        <div className="h-[93px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
            <div className="relative shrink-0 h-[44px] flex items-center gap-[24px]">
              <button
                onClick={onClose}
                className="border-2 border-[#0d004d] border-solid h-[44px] rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors flex items-center gap-[12px] px-[20px]"
              >
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPathsReview.p26d43300} fill="#0D004D" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
                <p className="font-medium leading-[16px] text-[#0d004d] text-[16px] text-center text-nowrap">Back</p>
              </button>
              <p className="font-medium leading-[32px] text-[#171717] text-[28px] text-nowrap tracking-[-0.56px]">Review Scenario</p>
            </div>
            
            {/* Tabs */}
            <div className="relative shrink-0 h-[40px] flex items-center gap-[8px]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`h-[40px] rounded-[1000px] flex items-center justify-center px-[20px] transition-colors ${
                  activeTab === 'overview' ? 'bg-[#0d004d]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                }`}
              >
                <p className={`font-medium leading-[16px] text-[16px] text-center text-nowrap ${
                  activeTab === 'overview' ? 'text-white' : 'text-[#0d004d]'
                }`}>Overview</p>
              </button>
              <button
                onClick={() => setActiveTab('ai-scores')}
                className={`h-[40px] rounded-[1000px] flex items-center justify-center px-[20px] transition-colors ${
                  activeTab === 'ai-scores' ? 'bg-[#0d004d]' : 'hover:bg-[rgba(13,0,77,0.05)]'
                }`}
              >
                <p className={`font-medium leading-[16px] text-[16px] text-center text-nowrap ${
                  activeTab === 'ai-scores' ? 'text-white' : 'text-[#0d004d]'
                }`}>AI Confidence Scores</p>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          <div className="content-stretch flex gap-[32px] items-stretch w-full h-full">
            {/* Left Column - Always visible */}
            <div className="bg-[#e8e6f3] relative shrink-0 w-[544px] overflow-y-auto overflow-x-hidden">
              <div className="content-stretch flex flex-col gap-[41px] items-start p-[40px] relative max-w-full">
                {/* Title and Description */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                    <p className="font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">{scenarioData.title}</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                    <p className="font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">{scenarioData.description}</p>
                  </div>
                </div>

                {/* Location and Time */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-start px-0 py-[12px] relative shrink-0 w-full">
                    <div className="h-[32px] relative shrink-0 flex items-center gap-[12px]">
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g id="MapPin">
                            <path d={svgPaths.p3336b800} fill="#5D5D5D" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px]">Location</p>
                    </div>
                    <p className="flex-1 font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] text-right">{scenarioData.location}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start px-0 py-[12px] relative shrink-0 w-full">
                    <div className="h-[32px] relative shrink-0 flex items-center gap-[12px]">
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g id="Clock">
                            <path d={svgPaths.p20121700} fill="#5D5D5D" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px]">Time</p>
                    </div>
                    <p className="flex-1 font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] text-right">{scenarioData.time}</p>
                  </div>
                </div>

                {/* AI Character and Student Role */}
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  {/* AI Character */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                    <div className="bg-white h-[117px] relative rounded-[12px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="size-full">
                        <div className="content-stretch flex flex-col items-start p-px relative size-full">
                          <div className="h-[115px] relative shrink-0 w-full">
                            <div className="absolute content-stretch flex flex-col items-start left-[24px] rounded-[80px] size-[67px] top-[24px]">
                              <div className="content-stretch flex flex-col h-[67px] items-start overflow-clip rounded-[80px] relative shrink-0 w-full">
                                <div className="h-[96.313px] relative shrink-0 w-full">
                                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle12189} />
                                </div>
                              </div>
                            </div>
                            <div className="absolute h-[54px] left-[115px] top-[30.5px] w-[403px]">
                              <div className="absolute h-[22px] left-0 top-0 w-[403px]">
                                <p className="absolute font-medium leading-[22px] left-0 text-[#171717] text-[18px] text-nowrap top-0">{scenarioData.aiCharacterName}</p>
                              </div>
                              <div className="absolute h-[24px] left-0 top-[30px] w-[403px]">
                                <p className="absolute font-normal leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">{scenarioData.aiCharacterRole}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Midshipman Role */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Midshipman role</p>
                    <div className="bg-white h-[117px] relative rounded-[12px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="size-full">
                        <div className="content-stretch flex flex-col items-start p-px relative size-full">
                          <div className="h-[115px] relative shrink-0 w-full">
                            <div className="absolute left-[24px] size-[67px] top-[24px]">
                              <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
                              <div className="absolute h-[22px] left-[-12.25px] top-[23px] w-[91.641px]">
                                <p className="absolute font-medium leading-[22px] left-[46.01px] text-[#171717] text-[18px] text-center text-nowrap top-0 translate-x-[-50%]">LT</p>
                              </div>
                            </div>
                            <div className="absolute h-[54px] left-[115px] top-[30.5px] w-[403px]">
                              <div className="absolute h-[22px] left-0 top-0 w-[403px]">
                                <p className="absolute font-medium leading-[22px] left-0 text-[#171717] text-[18px] text-nowrap top-0">Lieutenant</p>
                              </div>
                              <div className="absolute h-[24px] left-0 top-[30px] w-[403px]">
                                <p className="absolute font-normal leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">{scenarioData.studentRoleDesc}</p>
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

            {/* Right Column - Changes based on tab */}
            {activeTab === 'overview' ? (
              <div className="flex-1 min-h-px min-w-px relative shrink-0 overflow-auto">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start pr-[40px] py-[40px] relative w-full">
                    {/* Hero Image */}
                    <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                        <div className="absolute bg-white inset-0 rounded-[8px]" />
                        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                          <img alt="" className="absolute h-[152.09%] left-0 max-w-none top-[-18.78%] w-full" src={imgMidshipman} />
                        </div>
                        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                      </div>
                      <div className="flex flex-col justify-end size-full">
                        <div className="size-full" />
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>

                    {/* Situation */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="h-[24px] relative shrink-0 w-full">
                        <p className="absolute font-medium leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">Situation</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenarioData.situation}</p>
                      </div>
                    </div>

                    {/* Dilemma */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="h-[24px] relative shrink-0 w-full">
                        <p className="absolute font-medium leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">Dilemma</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenarioData.dilemma}</p>
                      </div>
                    </div>

                    {/* Midshipman Mission */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="h-[24px] relative shrink-0 w-full">
                        <p className="absolute font-medium leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">Midshipman mission</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenarioData.mission}</p>
                      </div>
                    </div>

                    {/* Success Criteria */}
                    <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="h-[24px] relative shrink-0 w-full">
                        <p className="absolute font-medium leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">Success criteria</p>
                      </div>
                      <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
                        {scenarioData.successCriteria.map((criterion, index) => (
                          <div key={index} className="h-auto min-h-[28px] relative shrink-0 w-full flex items-start">
                            <p className="font-normal leading-[28px] text-[#5d5d5d] text-[18px] mr-[12px]">•</p>
                            <p className="flex-1 font-normal leading-[28px] text-[#171717] text-[18px]">{criterion}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full overflow-auto py-[40px] pr-[40px]">
                {/* Score Cards - Full 2x2 Grid */}
                <div className="grid grid-cols-2 gap-[24px] max-w-[1000px]">
                  {/* Scenario Quality */}
                  <div className="bg-white relative rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] flex flex-col gap-[16px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-[24px] text-[#171717] text-[20px]">Scenario Quality</p>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[12px] rounded-full" style={{ backgroundColor: getScoreColor(aiScores.scenarioQuality) }} />
                        <p className="font-medium leading-[20px] text-[16px]" style={{ color: getScoreColor(aiScores.scenarioQuality) }}>
                          {getScoreLabel(aiScores.scenarioQuality)}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[8px] bg-[#e8e6f3] rounded-[4px] overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-[4px] transition-all duration-500"
                        style={{ width: `${aiScores.scenarioQuality}%`, backgroundColor: getScoreColor(aiScores.scenarioQuality) }}
                      />
                    </div>
                    <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">{aiScores.scenarioQuality}%</p>
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">The narrative builds strong tension between competing values while maintaining realistic dialogue patterns and authentic decision points that reflect actual leadership challenges.</p>
                  </div>

                  {/* Authenticity */}
                  <div className="bg-white relative rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] flex flex-col gap-[16px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-[24px] text-[#171717] text-[20px]">Authenticity</p>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[12px] rounded-full" style={{ backgroundColor: getScoreColor(aiScores.authenticity) }} />
                        <p className="font-medium leading-[20px] text-[16px]" style={{ color: getScoreColor(aiScores.authenticity) }}>
                          {getScoreLabel(aiScores.authenticity)}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[8px] bg-[#e8e6f3] rounded-[4px] overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-[4px] transition-all duration-500"
                        style={{ width: `${aiScores.authenticity}%`, backgroundColor: getScoreColor(aiScores.authenticity) }}
                      />
                    </div>
                    <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">{aiScores.authenticity}%</p>
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Details match documented operational procedures and social dynamics. Characters use appropriate jargon and exhibit decision-making patterns consistent with their roles and experience levels.</p>
                  </div>

                  {/* Curriculum Alignment */}
                  <div className="bg-white relative rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] flex flex-col gap-[16px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-[24px] text-[#171717] text-[20px]">Curriculum Alignment</p>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[12px] rounded-full" style={{ backgroundColor: getScoreColor(aiScores.curriculumAlignment) }} />
                        <p className="font-medium leading-[20px] text-[16px]" style={{ color: getScoreColor(aiScores.curriculumAlignment) }}>
                          {getScoreLabel(aiScores.curriculumAlignment)}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[8px] bg-[#e8e6f3] rounded-[4px] overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-[4px] transition-all duration-500"
                        style={{ width: `${aiScores.curriculumAlignment}%`, backgroundColor: getScoreColor(aiScores.curriculumAlignment) }}
                      />
                    </div>
                    <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">{aiScores.curriculumAlignment}%</p>
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Strong integration with selected objectives. The scenario creates natural opportunities to demonstrate all targeted competencies while connecting to broader course themes and essential questions.</p>
                  </div>

                  {/* LDP Compliance */}
                  <div className="bg-white relative rounded-[12px] border border-[rgba(13,0,77,0.15)] p-[24px] flex flex-col gap-[16px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-[24px] text-[#171717] text-[20px]">LDP Compliance</p>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[12px] rounded-full" style={{ backgroundColor: getScoreColor(aiScores.ldpCompliance) }} />
                        <p className="font-medium leading-[20px] text-[16px]" style={{ color: getScoreColor(aiScores.ldpCompliance) }}>
                          {getScoreLabel(aiScores.ldpCompliance)}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[8px] bg-[#e8e6f3] rounded-[4px] overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-[4px] transition-all duration-500"
                        style={{ width: `${aiScores.ldpCompliance}%`, backgroundColor: getScoreColor(aiScores.ldpCompliance) }}
                      />
                    </div>
                    <p className="font-medium leading-[56px] text-[#171717] text-[48px] tracking-[-0.96px]">{aiScores.ldpCompliance}%</p>
                    <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Incorporates effective scaffolding, clear success criteria, and opportunities for metacognitive reflection. The experience balances challenge with appropriate support structures.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="h-[93px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
            <div className="relative shrink-0 flex gap-[16px] items-center">
              <button
                onClick={onEdit}
                className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                <p className="font-medium leading-[16px] text-[#0d004d] text-[16px] text-center text-nowrap">Edit</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPathsReview.p861ba80} fill="#0D004D" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </button>
              <button
                onClick={onTestScenario}
                className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                <p className="font-medium leading-[16px] text-[#0d004d] text-[16px] text-center text-nowrap">Test</p>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPathsReview.p342d5400} fill="#0D004D" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
            <div className="relative shrink-0 flex gap-[16px] items-center">
              <button
                onClick={onAssignToStudents}
                className="bg-[#0d004d] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#1a0a5e] transition-colors"
              >
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="trim">
                        <path clipRule="evenodd" d={svgPathsReview.p1d640e80} fill="white" fillRule="evenodd" id="icon" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-medium leading-[16px] text-[16px] text-center text-nowrap text-white">Assign to midshipmen</p>
              </button>
              <button
                onClick={onLaunchScenario}
                className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
              >
                <p className="font-medium leading-[16px] text-[16px] text-black text-center text-nowrap">Launch Scenario</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPathsReview.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}