import svgPaths from "./svg-crzt03crxp";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
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
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[32px] shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="CheckCircle">
            <path d={svgPaths.p16338d80} fill="var(--fill-0, #00B057)" id="Vector" />
          </g>
        </svg>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center px-[15px] py-0 relative shrink-0">
      <div className="bg-[#e8e6f3] h-[72px] shrink-0 w-[2px]" />
    </div>
  );
}

export default function NewScenarioScenarioGenerating() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Scenario - Generating">
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
                <Wrapper additionalClassNames="relative shrink-0 size-[18px]">
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
                <Wrapper additionalClassNames="relative shrink-0 size-[18px]">
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
                <Wrapper additionalClassNames="relative shrink-0 size-[18px]">
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
                <Wrapper additionalClassNames="relative shrink-0 size-[18px]">
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
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[861px] relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[56px] items-center justify-center p-[80px] relative size-full">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <Text text="Analyzing scenario constraints and learning objectives..." />
                <Frame />
                <Text text="Retrieving relevant Pearson Learning Design Principles to craft effective tasks..." />
                <Frame />
                <div className="content-stretch flex gap-[10px] items-center justify-center p-[7px] relative rounded-[32px] shrink-0">
                  <div className="relative shrink-0 size-[18px]" data-name="loading-spinner">
                    <Wrapper additionalClassNames="absolute inset-[0_-0.01%_-0.01%_0]">
                      <g id="loading-spinner">
                        <path d={svgPaths.p25f2f80} fill="var(--fill-0, #512EAB)" fillOpacity="0.15" id="Main circle" />
                        <path clipRule="evenodd" d={svgPaths.p1d2e6e40} fill="var(--fill-0, #512EAB)" fillRule="evenodd" id="Ellipse 4 (Stroke)" />
                      </g>
                    </Wrapper>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Reviewing relevant materials to create an authentic, realistic persona and setting...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">
          <p className="mb-0">{`Generating `}</p>
          <p>your scenario</p>
        </div>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Please wait, we’re generating a realistic scenario based on your selections</p>
      </div>
    </div>
  );
}