import svgPaths from "./svg-ib595u95ix";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
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
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Helper({ text, text1, text2, text3 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center px-0 py-[12px] relative shrink-0 text-[#171717] text-[18px] w-[563px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 w-full">{text}</p>
      <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <li className="mb-[8px] ms-[27px]">
          <span className="leading-[28px]">{text1}</span>
        </li>
        <li className="mb-[8px] ms-[27px]">
          <span className="leading-[28px]">{text2}</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[28px]">{text3}</span>
        </li>
      </ul>
    </div>
  );
}
type TabLabelTextProps = {
  text: string;
};

function TabLabelText({ text }: TabLabelTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function InstructorGuideFacilitationTips() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Instructor Guide: Facilitation Tips">
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
        <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <TabLabelText text="Facilitation Tips" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
            <div className="bg-[#c1bfff] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
              <div className="size-full" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
            <Wrapper>{`Success & Misconceptions`}</Wrapper>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[627px]">
          <Wrapper1>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <Helper text="Create Psychological Safety" text1="Acknowledge that these decisions are genuinely difficult" text2="Validate multiple approaches rather than seeking “the right answer”" text3="Share that experienced officers struggle these tensions" />
              </div>
            </div>
          </Wrapper1>
          <Wrapper1>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <Helper text="Draw Out Quiet Voices" text1="“I notice some of you haven’t spoke yet - what’s your reaction to [specific point]?”" text2="Use think-pair-share before full group discussion" text3="Call on specific students by name with open-ended questions" />
              </div>
            </div>
          </Wrapper1>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[627px]">
          <Wrapper1>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <Helper text="Manage Strong Opinions" text1="“That’s an important perspective. Who sees it differently?”" text2="“What would make you change your mind?”" text3="Redirect to evidence from the scenario rather than abstract principles" />
              </div>
            </div>
          </Wrapper1>
          <Wrapper1>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <Helper text="Connect to Personal Experience" text1="“Have you ever felt pressure to go along with something that didn’t feel right?”" text2="”When have you seen someone successfully challenge a decision?”" text3="Don’t require personal disclosure, but create openings" />
              </div>
            </div>
          </Wrapper1>
        </div>
      </div>
    </div>
  );
}