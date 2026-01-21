import svgPaths from "./svg-z5tbfue0vx";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-nowrap">{children}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return (
    <ul className={clsx("block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full", additionalClassNames)}>
      <li className="mb-[8px] ms-[27px]">
        <span className="leading-[28px]">{text}</span>
      </li>
      <li className="ms-[27px]">
        <span className="leading-[28px]">{text1}</span>
      </li>
    </ul>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function Helper({ text, text1, text2 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{text}</p>
      <Helper1 text={text1} text1={text2} additionalClassNames="text-[#171717] text-[18px]" />
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
};

function TabLabelText({ text }: TabLabelTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function InstructorGuideSuccessAndMisconceptions() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Instructor Guide: Success and Misconceptions">
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
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Overview" />
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
        <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <Wrapper>{`Success & Misconceptions`}</Wrapper>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
            <div className="bg-[#c1bfff] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
              <div className="size-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <Wrapper1>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Indicators</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                  <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Students are grappling effectively with the material when they:</p>
                </div>
                <Text text="Move beyond “just follow orders” vs. “always speak up” dichotomies" />
                <Text text="Recognize that both action and inaction carry moral weight" />
                <Text text="Identify specific factors that made the engineers’ voices ineffective at Morton Thiokol" />
                <Text text="Articulate concrete steps for raising concerns respectfully but firmly" />
                <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Consider how to create better systems when they’re in leadership positions</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper1>
        <Wrapper1>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Common Misconceptions to Address</p>
              <Helper text="“The junior person should always defer to expertise”" text1="Counter: Expertise in one area doesn’t eliminate blind spots" text2="Fresh eyes can catch what familiarity misses" />
              <Helper text="“Speaking up is only about personal courage”" text1="Counter: Organizational culture either enables or suppresses dissent" text2="Systems matter as much as individual character" />
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-full">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">“You can’t challenge authority without being insubordinate”</p>
                <Helper1 text="Counter: There are professional ways to escalate concerns" text1="Providing information up the chain is part of your duty" />
              </div>
            </div>
          </div>
        </Wrapper1>
      </div>
    </div>
  );
}