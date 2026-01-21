import svgPaths from "./svg-gcv8e4meqy";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Scales({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Scales">{children}</g>
    </Wrapper>
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

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Info() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_71_3982)" id="Info">
        <path d={svgPaths.p29a13e00} fill="var(--fill-0, #171717)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_71_3982">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start leading-[22px] relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] relative shrink-0 text-[#171717] text-[18px] w-[375px]">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5d5d5d] text-[14px] w-[min-content]">{text1}</p>
    </div>
  );
}

function InputCheckboxItem() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[1440px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[1440px]" />
      <div className="relative shrink-0 size-[18px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 82, 130, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Checkbox">
              <path d={svgPaths.p1ebded00} fill="var(--fill-0, #1D5282)" />
              <path d={svgPaths.p1de71f00} fill="var(--fill-0, white)" id="check mark" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function NewScenarioEthicsMoralFactors() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Ethics - Moral Factors">
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
                <Wrapper1>
                  <g id="Books">
                    <path d={svgPaths.p551f340} fill="var(--fill-0, #FCC32A)" id="Vector" />
                  </g>
                </Wrapper1>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper1>
                  <g id="ChartBar">
                    <path d={svgPaths.p3cf02090} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper1>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper1>
                  <g id="ChartLine">
                    <path d={svgPaths.p6e42a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper1>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="tabs-vertical">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <Wrapper1>
                  <g id="Users">
                    <path d={svgPaths.p82d3500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </Wrapper1>
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
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[24px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="breadcrumb">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Item 1">
                  <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline">Constraints vs Consequences</p>
                  <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon Wrapper">
                    <div className="content-stretch flex items-center relative shrink-0 size-[14px]" data-name="navigation/next">
                      <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="trim">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                <div className="h-[8.997px] relative w-[5.136px]" data-name="icon">
                                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 23, 23, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                                      <path clipRule="evenodd" d={svgPaths.p3652d940} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
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
                <div className="content-stretch flex items-center relative shrink-0" data-name="Item Active">
                  <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline">Moral Factors</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">What are the primary moral factors you want to test?</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <InputCheckboxItem />
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="bg-[rgba(29,82,130,0.08)] content-stretch flex items-center p-[12px] relative rounded-[4px] shrink-0">
                        <Scales>
                          <path d={svgPaths.p85f9100} fill="var(--fill-0, #171717)" id="Vector" />
                        </Scales>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                        <Helper text="Constraints" text1="Rules, rights, dignity, Kant’s Categorical Imperative" />
                      </div>
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <InputCheckboxItem />
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="bg-[rgba(29,82,130,0.08)] content-stretch flex items-center p-[12px] relative rounded-[4px] shrink-0">
                        <Wrapper>
                          <g id="ChartLine">
                            <path d={svgPaths.p14cf9580} fill="var(--fill-0, #171717)" id="Vector" />
                          </g>
                        </Wrapper>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                        <Helper text="Consequences" text1="Short/long-term outcomes, stakeholder impact, utilitarian analysis" />
                      </div>
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                      <Checkbox />
                    </div>
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="bg-[rgba(29,82,130,0.08)] content-stretch flex items-center p-[12px] relative rounded-[4px] shrink-0">
                        <Wrapper>
                          <g id="Heart">
                            <path d={svgPaths.p2a812f00} fill="var(--fill-0, #171717)" id="Vector" />
                          </g>
                        </Wrapper>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                        <Helper text="Character" text1="Virtue ethics, habituation, “what kind of person do I want to be”" />
                      </div>
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                      <Checkbox />
                    </div>
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="bg-[rgba(29,82,130,0.08)] content-stretch flex items-center p-[12px] relative rounded-[4px] shrink-0">
                        <Wrapper>
                          <g id="Handshake">
                            <path d={svgPaths.p3d1ebdc0} fill="var(--fill-0, #171717)" id="Vector" />
                          </g>
                        </Wrapper>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                        <Helper text="Special Obligations" text1="Role duties, loyalty, oaths, competing loyalties" />
                      </div>
                    </div>
                    <Info />
                  </div>
                </div>
              </div>
              <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Generate scenario</p>
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
          <p className="mb-0">{`Select the `}</p>
          <p>ethical dimensions</p>
        </div>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Select which ethical framework should guide the assessment of this scenario. Midshipmen will be evaluated on how well they apply these principles when facing the dilemma presented.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper>
                  <g id="Book">
                    <path d={svgPaths.p3f64b100} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">NE203: Ethics and Moral Reasoning</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper>
                  <g id="BookOpenText">
                    <path d={svgPaths.pe05de00} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">{`Moral Perception: Social Influences & Personal Integrity`}</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper>
                  <g id="Target">
                    <path d={svgPaths.p31d08500} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Identify how cultures, religions, and philosophies shape moral perception</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Scales>
                  <path d={svgPaths.p2f6d6b80} fill="var(--fill-0, #171717)" id="Vector" />
                </Scales>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Constraints vs Consequences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}