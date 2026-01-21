import svgPaths from "./svg-ktyldrwkex";
import clsx from "clsx";

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

export default function InstructorGuideOverview() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Instructor Guide: Overview">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Instructor guide</p>
        <div className="relative shrink-0 size-[24px]" data-name="X">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="X">
              <path d={svgPaths.p11ba9b00} fill="var(--fill-0, #171717)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1274 1">
            <line id="Line 4" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="1274" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0">
        <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Overview" additionalClassNames="w-[81px]" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
            <div className="bg-[#c1bfff] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
              <div className="size-full" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Discussion Guide" />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Facilitation Tips" />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-nowrap">{`Success & Misconceptions`}</p>
            </div>
          </div>
        </div>
      </div>
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
                    <span className="leading-[28px]">Review the distinction between “within spec” and “safe”</span>
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
    </div>
  );
}