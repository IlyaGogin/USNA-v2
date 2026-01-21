import svgPaths from "./svg-3brt84pfo0";
import imgInstructor from "figma:asset/4ac71b9ca7ac1f8bff2625e5c11ae7cbda5b2af7.png";
import imgRectangle12189 from "figma:asset/4192a9d8ca69373ef1534e6d00c38cfa4b4a98a7.png";
import imgInstructor1 from "figma:asset/52593c1b1eda0a0753111d28198dd73a8cdbc1ee.png";
import imgRectangle12190 from "figma:asset/aa59fcaf455f5de310a4e97c1e95f223e1227f95.png";
import imgInstructor2 from "figma:asset/6ce5ced382fd8d29c1d4b680e27ffcbba8506e7c.png";
import imgRectangle12191 from "figma:asset/aaada308f577b645f4fd6932b6b3bf22ba227256.png";
import imgInstructor3 from "figma:asset/6393ea8d3a5fc64d2d9a630576264b8a92e2d81d.png";
import imgRectangle12192 from "figma:asset/e54a08b729507e6b026e03555cdc49221f351593.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{children}</p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{children}</p>
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
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="relative shrink-0 size-[67px]">
      <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-1/2 text-[#171717] text-[18px] text-center text-nowrap top-[calc(50%-10.5px)] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return <Wrapper1>{text}</Wrapper1>;
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return <Wrapper2>{text}</Wrapper2>;
}

function Helper4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 544 1">
          <line id="Line 5" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="544" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] text-nowrap">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#171717] text-[18px] w-[min-content]">{text1}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="relative shrink-0 size-[67px]">
      <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%+0.5px)] text-[#171717] text-[18px] text-center text-nowrap top-[calc(50%-10.5px)] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <Wrapper3>
          <g id="Clock">
            <path d={svgPaths.p20121700} fill="var(--fill-0, #5D5D5D)" id="Vector" />
          </g>
        </Wrapper3>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">{"Time"}</p>
      </div>
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <Wrapper3>
          <g id="MapPin">
            <path d={svgPaths.p3336b800} fill="var(--fill-0, #5D5D5D)" id="Vector" />
          </g>
        </Wrapper3>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">{"Location"}</p>
      </div>
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">{text}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px] w-full">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">{text1}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">{text}</p>
      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{text1}</p>
    </div>
  );
}

export default function NewScenarios() {
  return (
    <div className="relative size-full" data-name="New Scenarios">
      <div className="absolute bg-[#efeef7] h-[1822px] left-[146px] overflow-clip top-[125px] w-[1728px]" data-name="The Flight Test">
        <div className="absolute bg-[#e8e6f3] inset-[0_67.59%_0_0] overflow-clip">
          <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_846px_40px] items-start">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 w-[419.667px]" data-name="Scenario Card">
              <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor} />
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                </div>
                <Wrapper4>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                      <p className="leading-[28px]">NE-203</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                        <p className="leading-[14px]">EASY</p>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                      </div>
                    </div>
                  </div>
                </Wrapper4>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              </div>
              <Wrapper5>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <Helper text="The Flight Test" text1="Moral Perception Under Authority Pressure" />
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{`Develop moral  courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions. `}</p>
                  </div>
                </div>
              </Wrapper5>
            </div>
            <Helper1 text="The Flight Test" text1="Develop moral courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions." />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <Text text="Meridian Aerospace" />
              <Text1 text="1600, Thursday afternoon" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                <Wrapper>
                  <div className="relative rounded-[80px] shrink-0 size-[67px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgRectangle12189} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Dr. Elena Vance" text1="Chief Test Engineer" />
                  </div>
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
                <Wrapper>
                  <Text2 text="SE" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Junior Systems Engineer" text1="USNA Class of 2025" />
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_0_783px_32.41%] items-start p-[40px]">
          <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-white inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgInstructor} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <div className="flex flex-col justify-end size-full">
              <div className="size-full" />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="h-[624px] relative shrink-0 w-full">
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[24px] items-start left-0 p-[32px] right-[44.12%] rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">You graduated from the Naval Academy last May and took a position as a junior systems engineer at Meridian Aerospace, a defense contractor that builds propulsion systems for Navy aircraft. Your team has been preparing for a critical engine test demonstration, and the Navy program office is visiting tomorrow to evaluate whether to continue funding the project. Hundreds of jobs depend on this contract.</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`During final data review, you noticed an unusual temperature spike in one of the engine test runs. It's technically within the acceptable range, but it's at the upper edge—and it appeared twice during high-stress maneuvers. You mentioned it to your team lead, who dismissed your concern, saying "It's within spec. Don't worry about it." Dr. Elena Vance, the Chief Test Engineer with 20 years of experience, has called you to her office because she's heard you're still thinking about that data.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <Helper3 text="Student Mission" text1="Navigate a conversation with a senior authority figure about a safety concern that may seem minor but could be significant. You need to articulate your technical observations clearly, explain why the pattern concerns you despite being within specifications, and determine whether to push the issue further—all while managing the pressure of being a new graduate in your first role at a company facing a critical contract decision." />
              </div>
            </div>
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col items-start left-[58.09%] p-[32px] right-0 rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <Text3 text="Clearly explain the technical concern without overstating or understating the risk" />
                    <Wrapper2>{`Demonstrate sound engineering judgment about what "within spec" actually means`}</Wrapper2>
                    <Text3 text="Navigate the implicit pressure from authority and institutional stakes" />
                    <Text3 text="Show you understand when to defer to experience and when to advocate for safety" />
                    <Wrapper1>{`Balance respect for Dr. Vance's expertise with your responsibility to speak up`}</Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] h-[1822px] left-[2034px] overflow-clip top-[125px] w-[1728px]" data-name="The Quick Decision">
        <div className="absolute bg-[#e8e6f3] inset-[0_67.59%_0_0] overflow-clip">
          <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_846px_40px] items-start">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 w-[419.667px]" data-name="Scenario Card">
              <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor1} />
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                </div>
                <Wrapper4>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                      <p className="leading-[28px]">NL-110</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                        <p className="leading-[14px]">EASY</p>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                      </div>
                    </div>
                  </div>
                </Wrapper4>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              </div>
              <Wrapper5>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <Helper text="The Quick Decision" text1="Recognizing Rushed Thinking" />
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action.</p>
                  </div>
                </div>
              </Wrapper5>
            </div>
            <Helper1 text="The Quick Decision" text1="Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action." />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <Text text="TechForward Inc. Office Floor" />
              <Text1 text="1345, Tuesday afternoon" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                <Wrapper>
                  <div className="relative rounded-[80px] shrink-0 size-[67px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgRectangle12190} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Alex Chen" text1="Fellow Intern" />
                  </div>
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
                <Wrapper>
                  <Text2 text="SI" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Summer Intern" text1="2nd Week on the Job" />
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_0_783px_32.41%] items-start p-[40px]">
          <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-white inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgInstructor1} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <div className="flex flex-col justify-end size-full">
              <div className="size-full" />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="h-[624px] relative shrink-0 w-full">
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[24px] items-start left-0 p-[32px] right-[44.12%] rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`It's your second week as a summer intern at a technology company. You're still learning the systems, getting to know your team, and figuring out how things work. The office is busy today, and people are moving quickly around you.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`Alex Chen, another intern who started the same day as you, rushes up to your desk looking stressed and clearly in a hurry. They need you to run down to the third floor right now to tell someone named Marcus that a meeting has moved to 2pm. Alex is about to walk into a presentation and can't do it themselves. You have about 30 seconds to decide. You don't know who Marcus is, you're not sure why this can't be a text or email, and you have your own work to do—but Alex is counting on you and there's no time to think.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] text-nowrap">Student Mission</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#171717] text-[18px] w-[min-content]">{`Recognize when you're being pushed into System 1 thinking by time pressure and social dynamics. Practice slowing down even when everything around you says to react immediately. Gather the information you need to make a good decision rather than just saying yes to make someone else comfortable.`}</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col items-start left-[58.09%] p-[32px] right-0 rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <Text3 text="Notice the pressure to react quickly without thinking" />
                    <Text3 text="Ask clarifying questions before committing to action" />
                    <Wrapper2>{`Recognize how another person's stress influences your decision-making`}</Wrapper2>
                    <Text3 text="Distinguish between actual urgency and perceived urgency" />
                    <Text4 text="Make a deliberate choice rather than an automatic response" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] h-[1822px] left-[146px] overflow-clip top-[2107px] w-[1728px]" data-name="The Difficult Conversation">
        <div className="absolute bg-[#e8e6f3] inset-[0_67.59%_0_0] overflow-clip">
          <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_846px_40px] items-start">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 w-[419.667px]" data-name="Scenario Card">
              <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor2} />
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                </div>
                <Wrapper4>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                      <p className="leading-[28px]">NL-310</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                        <p className="leading-[14px]">INT</p>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                      </div>
                    </div>
                  </div>
                </Wrapper4>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              </div>
              <Wrapper5>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <Helper text="The Difficult Conversation" text1="Leading Others with Honest Feedback" />
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{`Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect. `}</p>
                  </div>
                </div>
              </Wrapper5>
            </div>
            <Helper1 text="The Difficult Conversation" text1="Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect." />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <Text text="Harbor Grounds Coffee Shop" />
              <Text1 text="1345, Tuesday afternoon" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                <Wrapper>
                  <div className="relative rounded-[80px] shrink-0 size-[67px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgRectangle12191} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Jordan Martinez" text1="Team Member" />
                  </div>
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
                <Wrapper>
                  <Text5 text="TL" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Team Lead" text1="Summer Leadership Program" />
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_0_783px_32.41%] items-start p-[40px]">
          <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-white inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgInstructor2} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <div className="flex flex-col justify-end size-full">
              <div className="size-full" />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="h-[624px] relative shrink-0 w-full">
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[24px] items-start left-0 p-[32px] right-[44.12%] rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`You're participating in a competitive summer leadership program where your team of five has been assigned a consulting project for a real nonprofit organization. You were selected as team lead. Jordan Martinez is one of your strongest team members—their analysis work is excellent and they bring creative ideas to discussions.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`Jordan has missed two deadlines in the past two weeks. Other team members are starting to notice and are quietly frustrated that they're picking up Jordan's work. The final presentation is in ten days, and you can't afford more missed deadlines. You asked Jordan to grab coffee, and they think it's just a casual check-in. You need to address the missed deadlines directly—but you also need to maintain the relationship, preserve Jordan's confidence, and keep them engaged for the critical final push.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <Helper3 text="Student Mission" text1="Give honest, direct feedback to a peer about performance issues in a way that addresses the problem without damaging your working relationship. Navigate the tension between accountability and empathy. Demonstrate that difficult conversations can be acts of respect and care, not just criticism." />
              </div>
            </div>
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col items-start left-[58.09%] p-[32px] right-0 rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <Text3 text="Address the missed deadlines directly rather than hinting around the issue" />
                    <Text3 text="Show genuine concern for Jordan as a person while holding them accountable" />
                    <Wrapper2>{`Listen to understand what's causing the problem before proposing solutions`}</Wrapper2>
                    <Text3 text="Maintain respect and empathy throughout the conversation" />
                    <Text4 text="Leave Jordan clear on expectations while feeling supported to meet them" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] h-[1822px] left-[2034px] overflow-clip top-[2107px] w-[1728px]" data-name="The Accountability Question">
        <div className="absolute bg-[#e8e6f3] inset-[0_67.59%_0_0] overflow-clip">
          <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_846px_40px] items-start">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0 w-[419.667px]" data-name="Scenario Card">
              <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor3} />
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                </div>
                <Wrapper4>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                      <p className="leading-[28px]">NL-400</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                        <p className="leading-[14px]">HARD</p>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                        <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                      </div>
                    </div>
                  </div>
                </Wrapper4>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              </div>
              <Wrapper5>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <Helper text="The Accountability Question" text1="Owning Outcomes as a Leader" />
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame.</p>
                  </div>
                </div>
              </Wrapper5>
            </div>
            <Helper1 text="The Accountability Question" text1="Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame." />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <Text text="Rickover Hall" />
              <Text1 text="1400, Wednesday afternoon" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
                <Wrapper>
                  <div className="relative rounded-[80px] shrink-0 size-[67px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgRectangle12192} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Professor David Williams" text1="Faculty Advisor" />
                  </div>
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
                <Wrapper>
                  <Text5 text="PL" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                    <Helper2 text="Capstone Project Lead" text1="Senior (1st Class)" />
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_0_783px_32.41%] items-start p-[40px]">
          <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-white inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgInstructor3} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <div className="flex flex-col justify-end size-full">
              <div className="size-full" />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="h-[624px] relative shrink-0 w-full">
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[24px] items-start left-0 p-[32px] right-[44.12%] rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`It's your senior year at the Academy, and you're leading a capstone engineering project—a team of six building a prototype for a real Navy sponsor. You were selected as project lead based on your technical skills and leadership record. Yesterday, your team's critical design review went poorly. The sponsor pointed out significant gaps in the analysis that undermined confidence in your approach.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`Some of the gaps were in sections you personally oversaw and should have caught. Other gaps were in work done by a teammate who struggled throughout the semester but never asked for help—and you didn't notice they were falling behind. Professor Williams, your faculty advisor, has asked to meet with you to understand what happened and, more importantly, how you're thinking about it as a leader. You need to account for the failure without making excuses or unfairly blaming your teammate.`}</p>
                </div>
              </div>
              <Helper4 />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] text-nowrap">Student Mission</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#171717] text-[18px] w-[min-content]">{`Take appropriate ownership for a team failure as a leader. Analyze what happened honestly, including your own contributions and oversights. Demonstrate you understand the difference between taking responsibility and taking all the blame. Show mature thinking about command responsibility—that leaders are accountable for outcomes even when they didn't personally create every problem.`}</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col items-start left-[58.09%] p-[32px] right-0 rounded-[12px] top-0">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <Text3 text="Take clear ownership for the outcome without deflecting or making excuses" />
                    <Text3 text="Provide an honest assessment of what went wrong at both individual and team levels" />
                    <Text3 text="Identify specific actions you could have taken differently as a leader" />
                    <Wrapper2>{`Balance acknowledging your teammate's role without scapegoating them`}</Wrapper2>
                    <Text4 text="Demonstrate self-awareness about your development areas as a leader" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}