import React from 'react';

type ContentProps = {
  scenarioId: number;
  activeTab: 'overview' | 'discussion' | 'facilitation' | 'success';
  discussionSubTab: 'opening' | 'core' | 'closing';
};

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
    </div>
  );
}

function Text({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{text}</p>
    </div>
  );
}

export function FlightTestContent({ activeTab, discussionSubTab }: Omit<ContentProps, 'scenarioId'>) {
  if (activeTab === 'overview') {
    return (
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
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
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full">
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
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full">
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
      </div>
    );
  }

  // Discussion tab, Facilitation tab, and Success tab would go here...
  // For brevity, returning null for now - will be filled in the main component
  return null;
}

export function QuickDecisionContent({ activeTab, discussionSubTab }: Omit<ContentProps, 'scenarioId'>) {
  if (activeTab === 'overview') {
    return (
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
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
        <Wrapper>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Required Reading (Complete Before Simulation)</p>
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Primary Case Study:</p>
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full">
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
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full">
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
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#171717] text-[18px] w-full">
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
      </div>
    );
  }

  return null;
}
