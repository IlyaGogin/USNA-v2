import svgPaths from "./svg-f5sqqqf7k3";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgInstructor from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgMidshipman from "figma:asset/16f078e810c44ea0d7cbaed6d9a76428f3dc6fe8.png";
import imgMidshipman1 from "figma:asset/dbda829de53edf905d04a9fcc6b339864b41c891.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
        <p className="leading-[14px]">{text1}</p>
      </div>
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

export default function NewScenarioContentStart() {
  return (
    <div className="bg-white relative size-full" data-name="New Scenario: Content - Start">
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
      <div className="absolute content-stretch flex flex-col h-[1117px] items-start left-[4.63%] px-[32px] py-0 right-[32.87%] top-0">
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
        <div className="h-[861px] relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[56px] items-center justify-center p-[80px] relative size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which area will this scenario address?</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[856px]">
                  <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Instructor">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <Wrapper1>
                      <Helper text="Ethics" text1="NE" />
                    </Wrapper1>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Midshipman">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <Wrapper1>
                      <Helper text="Leadership" text1="NL" />
                    </Wrapper1>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Midshipman">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman1} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <Wrapper1>
                      <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                          <p className="leading-[28px]">{`Philosophy & Psychology`}</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                          <p className="leading-[14px]">NP</p>
                        </div>
                      </div>
                    </Wrapper1>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Or create a less targeted scenario</p>
                </div>
                <ButtonText text="Skip this step" />
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
      </div>
    </div>
  );
}