import svgPaths from "./svg-qx0pg2oj7t";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] text-nowrap">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{text}</p>
    </Wrapper>
  );
}
type TabLabelTextProps = {
  text: string;
};

function TabLabelText({ text }: TabLabelTextProps) {
  return <Wrapper1>{text}</Wrapper1>;
}

export default function InstructorGuideDiscussionGuideClosing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Instructor Guide: Discussion Guide (Closing)">
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
        <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Discussion Guide" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
            <div className="bg-[#c1bfff] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
              <div className="size-full" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Facilitation Tips" />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <Wrapper1>{`Success & Misconceptions`}</Wrapper1>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="bg-[#f6f6fb] content-stretch flex flex-col items-start p-[16px] relative rounded-[12px] shrink-0 w-[400px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <Text text="Opening Questions" />
                <Text text="Core Socratic Dialogue" />
                <Wrapper additionalClassNames="bg-[#0d004d]">
                  <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#e8e8e8] text-[16px]">Closing Synthesis</p>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[854px]">
          <Wrapper2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Connect to Challenger</p>
                <Text1 text="“How does this scenario mirror the engineers at Morton Thiokol?”" />
                <Text1 text="“What systemic factors made it hard for engineers to be heard?”" />
                <Text2 text="“What could have been done differently at an organizational level?”" />
              </div>
            </div>
          </Wrapper2>
          <Wrapper2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Bridge to Leadership</p>
                <Text1 text="“When you’re the senior leader, how will you create space for junior voices?”" />
                <Text1 text="“What systems can you build to protect those who raise safety concerns?”" />
                <Text2 text="“How do you balance mission accomplishment with prudent risk management?”" />
              </div>
            </div>
          </Wrapper2>
        </div>
      </div>
    </div>
  );
}