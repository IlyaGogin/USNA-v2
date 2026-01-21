import { useState } from 'react';
import svgPaths from "../imports/svg-ktyldrwkex";
import clsx from "clsx";

type InstructorGuideModalProps = {
  isOpen: boolean;
  onClose: () => void;
  scenario?: any;
};

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
    </div>
  );
}

type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{text}</p>
    </div>
  );
}

type TabLabelTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TabLabelText({ text, additionalClassNames = "" }: TabLabelTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center relative shrink-0", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-nowrap">{text}</p>
    </div>
  );
}

export default function InstructorGuideModal({ isOpen, onClose, scenario }: InstructorGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'discussion' | 'facilitation' | 'success'>('overview');
  const [discussionSubTab, setDiscussionSubTab] = useState<'opening' | 'core' | 'closing'>('opening');

  if (!isOpen) return null;

  // Determine which scenario content to show (handle both string and number IDs)
  const scenarioIdNum = typeof scenario?.id === 'string' ? parseInt(scenario.id) : scenario?.id;
  const isFlightTest = scenarioIdNum === 11;
  const isQuickDecision = scenarioIdNum === 12;
  const isDifficultConversation = scenarioIdNum === 13;
  const isAccountabilityQuestion = scenarioIdNum === 14;

  return (
    <>
      {/* Lightbox overlay */}
      <div 
        className="fixed inset-0 bg-[#0D004D] z-40"
        style={{ opacity: 0.4 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-full max-w-[1306px] max-h-[90vh] overflow-y-auto h-[900px]">
          
          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Instructor guide</p>
            <button 
              onClick={onClose}
              className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p11ba9b00} fill="var(--fill-0, #171717)" />
                </g>
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1274 1">
                <line stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="1274" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>

          {/* Tabs */}
          <div className="content-stretch flex items-start relative shrink-0">
            <div 
              className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 cursor-pointer"
              onClick={() => setActiveTab('overview')}
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <TabLabelText text="Overview" additionalClassNames="w-[81px]" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className={`h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full ${activeTab === 'overview' ? 'bg-[#c1bfff]' : 'bg-transparent'}`}>
                  <div className="size-full" />
                </div>
              </div>
            </div>
            <div 
              className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 cursor-pointer"
              onClick={() => setActiveTab('discussion')}
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <TabLabelText text="Discussion Guide" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className={`h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full ${activeTab === 'discussion' ? 'bg-[#c1bfff]' : 'bg-transparent'}`}>
                  <div className="size-full" />
                </div>
              </div>
            </div>
            <div 
              className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 cursor-pointer"
              onClick={() => setActiveTab('facilitation')}
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <TabLabelText text="Facilitation Tips" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className={`h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full ${activeTab === 'facilitation' ? 'bg-[#c1bfff]' : 'bg-transparent'}`}>
                  <div className="size-full" />
                </div>
              </div>
            </div>
            <div 
              className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 cursor-pointer"
              onClick={() => setActiveTab('success')}
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-nowrap">{`Success & Misconceptions`}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className={`h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full ${activeTab === 'success' ? 'bg-[#c1bfff]' : 'bg-transparent'}`}>
                  <div className="size-full" />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== OVERVIEW TAB ==================== */}
          {activeTab === 'overview' && (
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
              {isAccountabilityQuestion ? (
                <>
                  {/* Accountability Question - Learning Objectives */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Learning Objectives</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">By completing this scenario, midshipmen will:</p>
                          </div>
                          <Text text="Practice taking ownership for team failures without scapegoating" />
                          <Text text="Distinguish between taking responsibility and taking all the blame" />
                          <Text text="Analyze leadership failures at both individual and systemic levels" />
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Demonstrate mature self-assessment of personal contribution to failure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                  {/* Accountability Question - Required Reading */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Required Reading (Complete Before Simulation)</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Primary Case Study:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Command Responsibility doctrine and case law</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Analysis of leadership accountability in military context</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Secondary References:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Corporate Ethics Failures (Enron, Theranos, etc.)</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Case studies where leaders deflected vs. owned responsibility</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">The difference between accountability and martyrdom</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Recommended Preparation:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Define "command responsibility" in military ethics</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Discuss the relationship between authority and accountability</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Review examples of leaders who took responsibility well and poorly</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Understand the difference between fault and responsibility</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </>
              ) : isDifficultConversation ? (
                <>
                  {/* Difficult Conversation - Learning Objectives */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Learning Objectives</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">By completing this scenario, midshipmen will:</p>
                          </div>
                          <Text text="Deliver direct feedback while maintaining relationship trust" />
                          <Text text="Distinguish between accountability and criticism" />
                          <Text text="Address performance issues early before they escalate" />
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Balance empathy with clear expectations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                  {/* Difficult Conversation - Required Reading */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Required Reading (Complete Before Simulation)</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Primary Case Study:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Radical Candor by Kim Scott (overview of the framework)</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">The 2x2 matrix: Care Personally + Challenge Directly</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Secondary References:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Whistleblower Dilemmas (understand the cost of avoiding hard conversations)</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Case studies on performance management in high-stakes environments</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Recommended Preparation:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Define "Radical Candor" vs. "Ruinous Empathy" vs. "Obnoxious Aggression"</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Discuss the difference between being nice and being kind</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Review the consequences of avoiding difficult conversations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </>
              ) : isQuickDecision ? (
                <>
                  {/* Quick Decision - Learning Objectives */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Learning Objectives</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">By completing this scenario, midshipmen will:</p>
                          </div>
                          <Text text="Notice when time pressure distorts decision-making" />
                          <Text text="Practice slowing down in the face of perceived urgency" />
                          <Text text="Distinguish between actual and manufactured urgency" />
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Recognize how stress affects others' behavior and judgment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                  {/* Quick Decision - Required Reading */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Required Reading (Complete Before Simulation)</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Primary Case Study:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Daniel Kahneman's System 1/System 2 Thinking (summary chapter)</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Fast vs. slow decision-making in high-pressure environments</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Secondary References:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Examples of decision-making under time pressure</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">The role of stress in cognitive bias</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Recommended Preparation:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Define System 1 (fast, intuitive) vs. System 2 (slow, deliberate) thinking</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Discuss when each is appropriate</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Review concepts of "perceived urgency" vs. "actual urgency"</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </>
              ) : (
                <>
                  {/* Flight Test - Learning Objectives */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Learning Objectives</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">By completing this scenario, midshipmen will:</p>
                          </div>
                          <Text text="Recognize when authority pressure influences moral judgment" />
                          <Text text="Practice speaking up about safety concerns in hierarchical settings" />
                          <Text text="Distinguish between technical compliance and ethical responsibility" />
                          <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Navigate the tension between institutional loyalty and moral duty</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                  {/* Flight Test - Recommended Reading */}
                  <Wrapper>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Recommended Reading (Before Simulation)</p>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Primary case study:</p>
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Challenger Disaster analysis (focus on engineering concerns vs. management pressure)</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Secondary references:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Milgram Obedience Studies (overview of authority compliance)</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Engineering ethics case studies on safety reporting</span>
                            </li>
                          </ul>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Recommended preparation:</p>
                          <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Review the distinction between "within spec" and "safe"</span>
                            </li>
                            <li className="mb-[8px] ms-[27px]">
                              <span className="leading-[28px]">Understand organizational dynamics in high-stakes decisions</span>
                            </li>
                            <li className="ms-[27px]">
                              <span className="leading-[28px]">Familiarize students with chain of command considerations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </>
              )}
            </div>
          )}

          {/* ==================== DISCUSSION GUIDE TAB ==================== */}
          {activeTab === 'discussion' && (
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full min-h-[600px]">
              {/* Left Side - Sub Navigation */}
              <div className="bg-[#f6f6fb] content-stretch flex flex-col items-start p-[16px] relative rounded-[12px] shrink-0 w-[400px]">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      {/* Opening Questions Sub-Tab */}
                      <div 
                        className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${discussionSubTab === 'opening' ? 'bg-[#0d004d]' : ''}`}
                        onClick={() => setDiscussionSubTab('opening')}
                      >
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative w-full">
                            <p className={`basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[16px] ${discussionSubTab === 'opening' ? 'text-[#e8e8e8]' : 'text-[#171717]'}`}>
                              Opening Questions
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Core Socratic Dialogue Sub-Tab */}
                      <div 
                        className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${discussionSubTab === 'core' ? 'bg-[#0d004d]' : ''}`}
                        onClick={() => setDiscussionSubTab('core')}
                      >
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative w-full">
                            <p className={`basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[16px] ${discussionSubTab === 'core' ? 'text-[#e8e8e8]' : 'text-[#171717]'}`}>
                              Core Socratic Dialogue
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Closing Synthesis Sub-Tab */}
                      <div 
                        className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${discussionSubTab === 'closing' ? 'bg-[#0d004d]' : ''}`}
                        onClick={() => setDiscussionSubTab('closing')}
                      >
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative w-full">
                            <p className={`basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[16px] ${discussionSubTab === 'closing' ? 'text-[#e8e8e8]' : 'text-[#171717]'}`}>
                              Closing Synthesis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              {discussionSubTab === 'opening' && (
                <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                  <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        {isAccountabilityQuestion ? (
                          <>
                            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Opening Questions (5 minutes)</p>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Walk me through what happened. Where did this project go wrong?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Listen for blame placement: self, teammates, circumstances</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Note whether they identify multiple failure points</span>
                                </li>
                              </ul>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How did you respond to Professor Williams's question?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Assess whether they deflected, over-apologized, or balanced responsibility</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Identify what they found most difficult to acknowledge</span>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : isDifficultConversation ? (
                          <>
                            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Opening Questions (5 minutes)</p>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What made this conversation difficult to have?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Identify fears: damaging relationship, seeming mean, Jordan quitting</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Note whether they avoided the real issue</span>
                                </li>
                              </ul>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How did you feel about Jordan before and after noticing the missed deadlines?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Explore how unaddressed issues erode trust</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Discuss the resentment that builds without clarity</span>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : isQuickDecision ? (
                          <>
                            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Opening Questions (3 minutes)</p>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What was your first instinct when Alex approached you?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Notice if they mention feeling pressure or stress</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Identify whether they wanted to help immediately</span>
                                </li>
                              </ul>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What made this feel urgent?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Distinguish between Alex's stress and actual deadline</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Note the social dynamics at play</span>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Start with these to establish the ethical landscape</p>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What did you notice first in the data review?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Listen for technical vs. intuitive responses</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Note whether they mention the dismissal by Dr. Vance</span>
                                </li>
                              </ul>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What made this decision difficult?"</p>
                              <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                                <li className="mb-[8px] ms-[27px]">
                                  <span className="leading-[28px]">Draw out competing pressures: authority, jobs, career, safety</span>
                                </li>
                                <li className="ms-[27px]">
                                  <span className="leading-[28px]">Identify which factors they weighted most heavily</span>
                                </li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {discussionSubTab === 'core' && (
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                  {isAccountabilityQuestion ? (
                    <>
                      {/* Accountability Question - Core Socratic Dialogue */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Ownership and Blame:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's the difference between taking responsibility and taking all the blame?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"As the project leader, what were you responsible for that you couldn't delegate?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Where did your authority as leader end and your teammates' autonomy begin?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Self-Assessment:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"You mentioned gaps in your analysis. How did those develop?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What could you have done differently when you noticed the teammate struggling?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When did you first realize there were problems? What stopped you from acting then?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Team Dynamics:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you acknowledge others' contributions to failure without scapegoating?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's your responsibility when a teammate isn't pulling their weight?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you balance protecting your team with being honest about what happened?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Systemic Factors:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What aspects of this failure were individual choices? What were systemic?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"If you could redesign the project structure, what would you change?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do personal and organizational accountability interact?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Learning and Growth:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What specifically will you do differently as a leader next time?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you take responsibility without wallowing in guilt?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What does mature accountability look like to you?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isDifficultConversation ? (
                    <>
                      {/* Difficult Conversation - Core Socratic Dialogue */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Avoiding vs. Addressing:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What happens if you don't address the missed deadlines?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Who else is affected by your choice to avoid or delay this conversation?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Is it kinder to hint around the issue or name it directly?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On How to Give Feedback:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's the difference between 'Jordan is lazy' and 'Jordan missed two deadlines'?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How can you show you care about Jordan while being direct about the problem?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What would you want if you were Jordan and didn't realize the impact?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Understanding Before Judging:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What questions should you ask before assuming why the deadlines were missed?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you balance curiosity about root causes with clear expectations?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When does seeking to understand become making excuses?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Team Dynamics:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How does your handling of this affect the rest of the team?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What message do you send if strong performers get different standards?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you rebuild team trust after addressing this?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isQuickDecision ? (
                    <>
                      {/* Quick Decision - Core Socratic Dialogue */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Recognizing Urgency:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Was there really no time to think? What was the actual deadline?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How did Alex's stress influence your sense of urgency?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What clues told you this might not be as urgent as it seemed?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Decision-Making Process:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What questions could you ask to clarify the situation?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What would change if you took 30 minutes instead of 30 seconds?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When have you regretted making a quick decision under pressure?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Social Dynamics:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How does someone else's stress affect your thinking?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's the cost of slowing down in this situation?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How can you help someone without absorbing their panic?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Practical Application:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's a simple phrase you could use to buy yourself time?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you distinguish real emergencies from perceived ones?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What systems help you resist pressure to decide immediately?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Flight Test - Core Socratic Dialogue */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Authority and Expertise</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Dr. Vance has 20 years of experience. What gives you confidence to question her judgment?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When is it appropriate for a junior person to challenge a senior authority?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you distinguish between healthy deference and blind obedience?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Risk and Responsibility</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"The data showed the issue twice under high stress. What does 'within spec' really mean here?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"If you proceed and nothing goes wrong, were you still right to be concerned?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Whose job is it to decide what's safe enough?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Institutional Pressure</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How did knowing about the jobs impact your thinking?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Is there a difference between loyalty to people and loyalty to the organization?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What would you want someone to do if they were in your position?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">On Action and Escalation</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"If Dr. Vance won't listen, what are your options?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What risks do you take by going over her head?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you balance career consequences against safety concerns?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {discussionSubTab === 'closing' && (
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                  {isAccountabilityQuestion ? (
                    <>
                      {/* Accountability Question - Closing Synthesis */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Advanced Exploration (10 minutes)</p>
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Connect to Command Responsibility:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"In military law, commanders can be held responsible for subordinates' actions. Why?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's the relationship between the authority to command and the burden of responsibility?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you hold yourself accountable for things you didn't directly do?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Explore Difficult Scenarios:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What if the teammate who didn't contribute had a legitimate reason you didn't know about?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you handle taking responsibility when you disagree with the criticism?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When is it appropriate to push back on being held responsible?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Closing Synthesis (5-10 minutes)</p>
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Bridge to Leadership:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How does this scenario prepare you for command?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What leadership systems create accountability without blame?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you create a culture where people own mistakes?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Personal Commitment:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What's one specific behavior you'll change based on this experience?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How will you hold yourself accountable going forward?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isDifficultConversation ? (
                    <>
                      {/* Difficult Conversation - Closing Synthesis */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Connect to Radical Candor:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Where does this conversation fit on the Radical Candor framework?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What would Ruinous Empathy look like here? Obnoxious Aggression?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you Care Personally while Challenging Directly?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Bridge to Leadership:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Why do leaders often avoid these conversations?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What systems can you create to make feedback regular, not exceptional?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How early should you address performance concerns?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Real-World Application:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When have you wish someone had been more direct with you?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What would help you have this conversation in real life?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isQuickDecision ? (
                    <>
                      {/* Quick Decision - Closing Synthesis */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Connect to System 1/2:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Which thinking system was Alex using? Which were you using?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When is System 1 thinking appropriate? When is it dangerous?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How can you train yourself to notice which mode you're in?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Bridge to Leadership:</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"As a leader, how does your stress affect your team?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What can you do to prevent your urgency from creating poor decisions?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you create a culture where it's okay to slow down?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Flight Test - Closing Synthesis */}
                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Connect to Challenger</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How does this scenario mirror the engineers at Morton Thiokol?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What systemic factors made it hard for engineers to be heard?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What could have been done differently at an organizational level?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Bridge to Leadership</p>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"When you're the senior leader, how will you create space for junior voices?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"What systems can you build to protect those who raise safety concerns?"</p>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"How do you balance mission accomplishment with prudent risk management?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ==================== FACILITATION TIPS TAB ==================== */}
          {activeTab === 'facilitation' && (
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
              {isAccountabilityQuestion ? (
                <>
                  {/* Accountability Question - Facilitation Tips */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">This Is the Hardest Scenario</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Acknowledge the complexity and emotional weight</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Create space for genuine wrestling with the questions</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Don't rush to neat answers</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Distinguish Responsibility Types</p>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Help students see different layers:</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Role responsibility: "I was the leader"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Causal responsibility: "My analysis had gaps"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Moral responsibility: "I should have intervened earlier"</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Remedial responsibility: "Here's what I'll do to fix it"</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Watch for Extremes</p>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Over-responsibility: "Everything is my fault"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Others have agency too</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Martyrdom doesn't help anyone learn</span>
                              </li>
                            </ul>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full mt-[8px]">Under-responsibility: "My team let me down"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: What was in your control?</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Leaders create conditions for success or failure</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Use Real Examples Carefully</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Share examples of senior officers taking responsibility</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Discuss famous accountability moments (good and bad)</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Be careful not to moralize - let students work through it</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Create Reflection Space</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">This scenario benefits from individual written reflection before discussion</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Consider pairing students to discuss before full group</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Allow silence when students are thinking</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : isDifficultConversation ? (
                <>
                  {/* Difficult Conversation - Facilitation Tips */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Normalize Discomfort</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Acknowledge that these conversations never feel comfortable</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Share that experienced leaders still find them challenging</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Emphasize that discomfort means you care</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Practice Specific Language</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Have students role-play the opening: "Jordan, I need to talk about the missed deadlines"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Practice asking: "What's going on?" before making assumptions</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Rehearse: "I value your work, and I need you to meet deadlines"</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Address Cultural Factors</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Discuss how directness is perceived differently across cultures</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Explore military vs. civilian feedback norms</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Consider gender dynamics in giving critical feedback</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Connect to Consequences</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Discuss real cases where avoided conversations led to disasters</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Show how small issues compound when unaddressed</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Emphasize that caring means being honest</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : isQuickDecision ? (
                <>
                  {/* Quick Decision - Facilitation Tips */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Keep It Light</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">This is a Level 1 scenario - use it to build confidence</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Emphasize that everyone falls into this trap</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Share personal examples of rushing to bad decisions</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Focus on Recognition</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">The goal is awareness, not perfect decision-making</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Help students notice the physiological signs of reactive thinking</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Practice identifying urgency cues</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Use Role-Play</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Have students practice responses: "Let me grab a coffee and think about this"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Act out scenarios where they slow things down</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Demonstrate calm responses to stressed colleagues</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Flight Test - Facilitation Tips */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Create Psychological Safety</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Acknowledge that these decisions are genuinely difficult</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Validate multiple approaches rather than seeking "the right answer"</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Share that experienced officers struggle these tensions</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Draw Out Quiet Voices</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">"I notice some of you haven't spoke yet - what's your reaction to [specific point]?"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Use think-pair-share before full group discussion</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Call on specific students by name with open-ended questions</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 flex-1">
                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Manage Strong Opinions</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">"That's an important perspective. Who sees it differently?"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">"What would make you change your mind?"</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Redirect to evidence from the scenario rather than abstract principles</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="flex flex-col gap-[8px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">Connect to Personal Experience</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">"Have you ever felt pressure to go along with something that didn't feel right?"</span>
                              </li>
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">"When have you seen someone successfully challenge a decision?"</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Don't require personal disclosure, but create openings</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          
          {/* ==================== SUCCESS & MISCONCEPTIONS TAB ==================== */}
          {activeTab === 'success' && (
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
              {isAccountabilityQuestion ? (
                <>
                  {/* Accountability Question - Success Indicators */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Indicators</p>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Students are engaging at the right level when they:</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Articulate multiple levels of responsibility (personal, role, systemic)</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Avoid both deflection and self-flagellation</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Identify specific failures in their leadership process</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Recognize that accountability includes action, not just apology</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Distinguish between what they controlled and what they influenced</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Commit to concrete behavioral changes</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Demonstrate humility without helplessness</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accountability Question - Common Misconceptions */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Common Misconceptions to Address</p>
                          
                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Good leaders never fail"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: All leaders fail; great leaders own it and learn</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Failure is information, not identity</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Taking responsibility means saying it's all your fault"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Responsibility includes honest analysis of contributing factors</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">You can own outcomes without claiming sole causation</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"If you take responsibility, people will think you're incompetent"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Deflection destroys trust faster than failure</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Owning mistakes builds credibility</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"You should protect your team by taking all the blame"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: False protection prevents team learning</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Honest accountability serves everyone better</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">"Accountability is about the past"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Real accountability is forward-looking</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">It's about what you do next, not just what went wrong</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : isDifficultConversation ? (
                <>
                  {/* Difficult Conversation - Success Indicators */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Indicators</p>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Students are engaging deeply when they:</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Articulate specific, behavior-based feedback language</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Recognize that avoiding the conversation harms Jordan</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Identify questions to understand before judging</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Distinguish between care and comfort</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Commit to earlier intervention in future situations</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Practice the actual words they would use</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Difficult Conversation - Common Misconceptions */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Common Misconceptions to Address</p>
                          
                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Direct feedback damages relationships"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Avoiding feedback damages relationships</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">People respect leaders who are honest and clear</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"You need to be harsh to hold people accountable"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Directness and kindness can coexist</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Clear expectations are a gift, not an attack</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"If Jordan is struggling, I should lower expectations"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Maintaining standards while offering support is caring</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Lowering standards communicates lack of confidence</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">"This is Jordan's problem to figure out"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: As a leader, performance management is your job</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Creating clarity and removing obstacles is leadership</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : isQuickDecision ? (
                <>
                  {/* Quick Decision - Success Indicators */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Indicators</p>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Students are engaging effectively when they:</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Identify the difference between Alex's timeline and theirs</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Name specific tactics for creating thinking space</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Recognize how they've fallen into reactive patterns before</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Articulate simple phrases to slow down conversations</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">See the pattern in other areas of life (texting, emails, etc.)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Decision - Common Misconceptions */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Common Misconceptions to Address</p>
                          
                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Slowing down makes you look indecisive"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Thoughtful leaders gather information before committing</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Impulsive decisions often require more cleanup later</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"You have to respond immediately to be helpful"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Poor decisions help no one</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Sometimes the most helpful thing is to think clearly</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">"This only applies to big decisions"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Small decisions set patterns and habits</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Practice recognizing urgency in everyday situations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Flight Test - Success Indicators */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Indicators</p>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Students are grappling effectively with the material when they:</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Move beyond "just follow orders" vs. "always speak up" dichotomies</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Recognize that both action and inaction carry moral weight</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Identify specific factors that made the engineers' voices ineffective at Morton Thiokol</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Articulate concrete steps for raising concerns respectfully but firmly</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Consider how to create better systems when they're in leadership positions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flight Test - Common Misconceptions */}
                  <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Common Misconceptions to Address</p>
                          
                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"The junior person should always defer to expertise"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Expertise in one area doesn't eliminate blind spots</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Fresh eyes can catch what familiarity misses</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">"Speaking up is only about personal courage"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: Organizational culture either enables or suppresses dissent</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Systems matter as much as individual character</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-full">
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">"You can't challenge authority without being insubordinate"</p>
                            <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full list-disc">
                              <li className="mb-[8px] ms-[27px]">
                                <span className="leading-[28px]">Counter: There are professional ways to escalate concerns</span>
                              </li>
                              <li className="ms-[27px]">
                                <span className="leading-[28px]">Providing information up the chain is part of your duty</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
