import svgPaths from "./svg-q42no9yu76";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Trim({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}
type ButtonText2Props = {
  text: string;
};

function ButtonText2({ text }: ButtonText2Props) {
  return (
    <div className="bg-[#0d004d] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{text}</p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}

export default function NewScenarioEvaluation() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Evaluation">
      <div className="absolute bg-[#1d5282] h-[1117px] left-0 overflow-clip top-0 w-[80px]">
        <div className="absolute left-[12px] size-[56px] top-[16px]" data-name="image 17">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[20px] p-[12px] rounded-[1000px] top-[96px]" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
            <Trim>
              <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
            </Trim>
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
                <Wrapper>
                  <g id="Books">
                    <path d={svgPaths.p551f340} fill="var(--fill-0, #FCC32A)" id="Vector" />
                  </g>
                </Wrapper>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper>
                  <g id="ChartBar">
                    <path d={svgPaths.p3cf02090} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper>
                  <g id="ChartLine">
                    <path d={svgPaths.p6e42a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper>
                  <g id="Users">
                    <path d={svgPaths.p82d3500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper>
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
                <Trim>
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                </Trim>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New scenario</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <ButtonText text="Cancel" />
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[40px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[856px]">
                    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[28px] min-h-px min-w-px relative shrink-0">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Assessment Criteria</p>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5d5d] text-[18px] w-full">Set the importance of each criteria and we’ll calculate the weighting for you.</p>
                      </div>
                      <ButtonText text="Manual entry" />
                    </div>
                    <div className="bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="size-full">
                        <div className="content-stretch flex gap-[24px] items-start px-[24px] py-[16px] relative w-full">
                          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative self-stretch shrink-0 text-[#5d5d5d] text-[16px]">View universal metrics</p>
                          <Wrapper1>
                            <g id="CaretDown">
                              <path d={svgPaths.p21dac100} fill="var(--fill-0, #171717)" id="Vector" />
                            </g>
                          </Wrapper1>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                          <InputText text="Articulation of Safety Concerns" />
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{`Evaluates whether the participant can clearly communicate the nature and severity of safety or ethical  concerns using evidence and logic.`}</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                            <ButtonText1 text="Low" />
                            <ButtonText2 text="Med" />
                            <ButtonText1 text="High" />
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1d5282] text-[18px] text-right w-[56px]">25%</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                          <InputText text="Professional Persistence" />
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Evaluates the participant’s ability to persist in raising legitimate concerns when initially dismissed, while maintaining professionalism.</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                            <ButtonText1 text="Low" />
                            <ButtonText2 text="Med" />
                            <ButtonText1 text="High" />
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1d5282] text-[18px] text-right w-[56px]">25%</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                          <InputText text="Recognition and Resistance of Rationalization" />
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Evaluates whether the participant can identify when organizational pressure uses rationalization and push back appropriately.</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                            <ButtonText1 text="Low" />
                            <ButtonText2 text="Med" />
                            <ButtonText1 text="High" />
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1d5282] text-[18px] text-right w-[56px]">25%</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                          <InputText text="Appropriate Escalation" />
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Evaluates the participant’s understanding of when and how to escalate concerns through proper channels.</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                            <ButtonText1 text="Low" />
                            <ButtonText2 text="Med" />
                            <ButtonText1 text="High" />
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1d5282] text-[18px] text-right w-[56px]">25%</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
                      <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                        <Trim>
                          <path d={svgPaths.p28614000} fill="var(--fill-0, #0D004D)" id="icon" />
                        </Trim>
                      </div>
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                        <p className="leading-[16px]">Add criteria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Review Scenario</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                  <Trim>
                    <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                  </Trim>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">
          <p className="mb-0">{`Define `}</p>
          <p>evaluation criteria</p>
        </div>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Select any criteria you want to use for this training, add new criteria if needed. Users will be assessed and received feedback based on these criteria.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
              <div className="aspect-[454/240] relative rounded-[4px] shrink-0 w-full" data-name="Midshipman">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
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
                <Wrapper1>
                  <g id="MapPin">
                    <path d={svgPaths.p2791bf80} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Naval Air Station Oceana</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper1>
                  <g id="Clock">
                    <path d={svgPaths.p11cad330} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">1800, Friday evening</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper1>
                  <g id="UserCircle">
                    <path d={svgPaths.p36f904f0} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Aviation Maintenance Chief, Rodriguez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}