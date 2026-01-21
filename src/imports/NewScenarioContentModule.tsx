import svgPaths from "./svg-np0pm0imwd";
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
    <div className="bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Trim1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}
type LabelStaticTextProps = {
  text: string;
};

function LabelStaticText({ text }: LabelStaticTextProps) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[40px]">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.45)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#171717] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Trim({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[2px] pr-0 py-0 relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="h-[8.997px] relative w-[5.136px]" data-name="icon">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 23, 23, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewScenarioContentModule() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Content - Module">
      <div className="absolute bg-[#1d5282] h-[1117px] left-0 overflow-clip top-0 w-[80px]">
        <div className="absolute left-[12px] size-[56px] top-[16px]" data-name="image 17">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[20px] p-[12px] rounded-[1000px] top-[96px]" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
            <Trim1>
              <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
            </Trim1>
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
                <Trim1>
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                </Trim1>
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
                  <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline">Ethics</p>
                  <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon Wrapper">
                    <div className="content-stretch flex items-center relative shrink-0 size-[14px]" data-name="navigation/next">
                      <Trim>
                        <path clipRule="evenodd" d={svgPaths.p3652d940} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                      </Trim>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Item 2">
                  <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline">NE203</p>
                  <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon Wrapper">
                    <div className="content-stretch flex items-center relative shrink-0 size-[14px]" data-name="navigation/next">
                      <Trim>
                        <path clipRule="evenodd" d={svgPaths.p3652d940} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                      </Trim>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Item Active">
                  <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] text-nowrap underline">Module</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which module will it focus on?</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <Wrapper>
                    <LabelStaticText text="1" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">{`Moral Perception: Social Influences & Personal Integrity`}</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="2" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Rationalization, Socialization, and Moral Perception</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="3" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">The Moral Deliberation Roadmap</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="4" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Constraints: Mere Means</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="5" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Constraints: Doctrine of Double Effect</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="6" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Consequences</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="7" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Special Obligations</p>
                  </Wrapper>
                  <Wrapper>
                    <LabelStaticText text="8" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Character and Virtue Ethics</p>
                  </Wrapper>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <LabelStaticText text="9" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Pride, Humility, and Obedience</p>
                  </div>
                  <div className="bg-[#f6f6fb] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[856px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <LabelStaticText text="10" />
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[22px] leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-[744px]">Just War Tradition</p>
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
          <p>course content</p>
        </div>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Select which Leadership, Ethics, and Law (LEL) course this scenario supports. This ensure the training objectives align with the Brigade’s core curriculum and allows for integrated assessment across classroom and simulation learning.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <div className="relative shrink-0 size-[24px]" data-name="Book">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Book">
                      <path d={svgPaths.p3f64b100} fill="var(--fill-0, #171717)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">NE203: Ethics and Moral Reasoning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}