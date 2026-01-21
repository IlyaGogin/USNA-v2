import svgPaths from "./svg-zs4dgiliw5";
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

function Trim({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function Info() {
  return (
    <Wrapper>
      <g id="Info">
        <path d={svgPaths.p37b3bc80} fill="var(--fill-0, #171717)" id="Vector" />
      </g>
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
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] w-[375px]">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5d5d5d] text-[14px] w-[min-content]">{text1}</p>
    </div>
  );
}

export default function NewScenarioEthicsConflict() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Ethics - Conflict">
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
      <div className="absolute content-stretch flex flex-col h-[1117px] items-start left-[80px] px-[32px] py-0 top-0 w-[1080px]">
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
            <div className="content-stretch flex flex-col gap-[56px] items-center p-[80px] relative size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which ethical conflict will this scenario explore?</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                      <Helper text="Deontology vs. Consequentialism" text1="Duty-based rules vs. greatest good outcomes" />
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                      <Helper text="Constraints vs. Consequences" text1="Rights/rules compete with outcome optimization" />
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                      <Helper text="Virtue Ethics Focus" text1="Character formation under pressure" />
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                      <Helper text="Loyalty vs. Duty" text1="Special obligations compete with institutional duties" />
                    </div>
                    <Info />
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                      <Helper text="Just War Principles" text1="Jus ad bellum / Jus in bello application" />
                    </div>
                    <Info />
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
                  <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                    <Trim>
                      <path d={svgPaths.p28614000} fill="var(--fill-0, #0D004D)" id="icon" />
                    </Trim>
                  </div>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                    <p className="leading-[16px]">Add conflict</p>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}