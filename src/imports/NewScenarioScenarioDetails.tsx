import svgPaths from "./svg-5yh44sdtsx";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function Trim() {
  return (
    <Wrapper>
      <path clipRule="evenodd" d={svgPaths.p303cde40} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
    </Wrapper>
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[28px] relative shrink-0 text-[#171717] w-[856px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[20px] tracking-[-0.4px] w-full">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full">{text1}</p>
    </div>
  );
}

export default function NewScenarioScenarioDetails() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Scenario - Details">
      <div className="absolute bg-[#1d5282] h-[1117px] left-0 overflow-clip top-0 w-[80px]">
        <div className="absolute left-[12px] size-[56px] top-[16px]" data-name="image 17">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[20px] p-[12px] rounded-[1000px] top-[96px]" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
            <Wrapper>
              <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
            </Wrapper>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[15px] top-[160px]">
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none h-full rotate-[270deg] scale-y-[-100%]">
                  <div className="content-stretch flex flex-col h-full items-start relative w-[42px]" data-name="_tabs-item-border">
                    <div className="bg-[#fcc32a] h-[4px] relative shrink-0 w-full" data-name="Underline">
                      <div className="size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper2>
                  <g id="Books">
                    <path d={svgPaths.p551f340} fill="var(--fill-0, #FCC32A)" id="Vector" />
                  </g>
                </Wrapper2>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper2>
                  <g id="ChartBar">
                    <path d={svgPaths.p3cf02090} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper2>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper2>
                  <g id="ChartLine">
                    <path d={svgPaths.p6e42a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper2>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper2>
                  <g id="Users">
                    <path d={svgPaths.p82d3500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[16px] top-[1053px]">
        <div className="relative shrink-0 size-[48px]">
          <div className="absolute left-0 size-[48px] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="var(--fill-0, #153C60)" id="Ellipse 1" r="24" />
            </svg>
          </div>
          <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col inset-[0_32.87%_0_4.63%] items-start px-[32px] py-0">
        <div className="content-stretch flex items-center justify-between px-0 py-[40px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
                <Wrapper>
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                </Wrapper>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New scenario</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[56px] grow items-center min-h-px min-w-px px-[80px] py-[40px] relative rounded-[4px] shrink-0 w-[1016px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#1d5282] text-[20px] tracking-[-0.4px] w-full">Review your scenario and make any changes</p>
            </div>
            <div className="aspect-[856/307] relative rounded-[4px] shrink-0 w-full" data-name="Midshipman">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                <div className="absolute bg-white inset-0 rounded-[4px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                  <img alt="" className="absolute h-[152.09%] left-0 max-w-none top-[-18.78%] w-full" src={imgMidshipman} />
                </div>
                <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
              </div>
              <div className="flex flex-col justify-end size-full">
                <div className="size-full" />
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#171717] w-[856px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[48px] relative shrink-0 text-[40px] tracking-[-0.8px] w-full">The Maintenance Dilemma</p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] w-full">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands</p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-[856px]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <Wrapper3>
                    <g id="MapPin">
                      <path d={svgPaths.p3336b800} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                    </g>
                  </Wrapper3>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Location</p>
                </div>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Naval Air Station Oceana</p>
              </div>
              <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-[856px]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <Wrapper3>
                    <g id="Clock">
                      <path d={svgPaths.p20121700} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                    </g>
                  </Wrapper3>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Time</p>
                </div>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">1800, Friday evening</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
                <Wrapper1>
                  <div className="relative shrink-0 size-[67px]">
                    <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
                    <div className="absolute left-[calc(50%+0.5px)] size-[32px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="User">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="User">
                          <path d={svgPaths.p37b97700} fill="var(--fill-0, #171717)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Lieutenant</p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Maintenance QA Officer</p>
                    </div>
                  </div>
                </Wrapper1>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                <Wrapper1>
                  <div className="relative rounded-[80px] shrink-0 size-[67px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[80px]">
                      <img alt="" className="absolute h-[143.75%] left-[-61.19%] max-w-none top-[-21.88%] w-[222.39%]" src={imgRectangle12189} />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative shrink-0 w-full">
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] w-full">Chief Rodriguez</p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Aviation Maintenance Chief</p>
                    </div>
                  </div>
                </Wrapper1>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start px-0 py-[16px] relative shrink-0">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[28px] relative shrink-0 text-[#171717] w-[856px]">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Situation</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full">{`During pre-flight inspection, you discover a maintenance discrepancy that was improperly signed off by a Chief with 18 years of spotless service. The issue is technically minor but grounds the aircraft. The squadron is already behind on flight hours. `}</p>
              </div>
              <Helper text="Dilemma" text1="Chief Rodriguez privately asks you to “use discretion” this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor’s career, or trusting his experience while risking flight safety and your own integrity." />
              <Helper text="Student Mission" text1="Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold standards while treating people with dignity." />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
                    <line id="Line 1" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="856" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] min-w-full relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-[min-content]">Success Criteria</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <Text text="Maintains safety standards" />
                    <Text text="Communicates decision rationale clearly" />
                    <Text text="Treats Chief Rodriguez with respect while remaining firm on regulations" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
                    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                      <Wrapper>
                        <path d={svgPaths.p28614000} fill="var(--fill-0, #0D004D)" id="icon" />
                      </Wrapper>
                    </div>
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                      <p className="leading-[16px]">Add criteria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                <Trim />
              </div>
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Regenerate</p>
              </div>
            </div>
            <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Wrapper>
                  <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">Your scenario</p>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
            <Trim />
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
            <p className="leading-[16px]">Regenerate</p>
          </div>
        </div>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
              <div className="aspect-[454/240] relative rounded-[4px] shrink-0 w-full" data-name="Midshipman">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                  <div className="absolute bg-white inset-0 rounded-[4px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                </div>
                <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                      <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                        <p className="leading-[28px]">The Maintenance Dilemma</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                        <p className="leading-[14px]">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper4>
                  <g id="MapPin">
                    <path d={svgPaths.p2791bf80} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Naval Air Station Oceana</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper4>
                  <g id="Clock">
                    <path d={svgPaths.p11cad330} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">1800, Friday evening</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper4>
                  <g id="UserCircle">
                    <path d={svgPaths.p36f904f0} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Aviation Maintenance Chief, Rodriguez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}