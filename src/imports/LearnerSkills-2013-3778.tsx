import svgPaths from "./svg-m8xp6jvxca";
import clsx from "clsx";
import imgImage40 from "figma:asset/65343c0263ff378c8fa576fc1ff00589cf6f456d.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import { imgTrackColor, imgProgress } from "./svg-0vb9b";

function ScenarioCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[32px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Helper4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 398.5 1">
          <line id="Line 2" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="398.5" y1="0.5" y2="0.5" />
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
    <div className="bg-[#f6f6fb] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[8px] relative text-[16px] w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0074dd] text-nowrap">{text}</p>
          <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#464646]">{text1}</p>
        </div>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 text-nowrap">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] opacity-70 relative shrink-0 text-[#00b057] text-[14px]">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px]">{text1}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">{text}</p>
      <p className="leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type TabLabelTextProps = {
  text: string;
};

function TabLabelText({ text }: TabLabelTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}

function ImageImage() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{text}</p>
      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{text1}</p>
    </div>
  );
}
type Group8HelperProps = {
  additionalClassNames?: string;
};

function Group8Helper({ additionalClassNames = "" }: Group8HelperProps) {
  return (
    <div className={clsx("col-end-auto col-start-1 relative row-end-auto row-start-1 size-[3px]", additionalClassNames)}>
      <div className="absolute inset-[-33.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #0074DD)" id="Ellipse 17" r="2" stroke="var(--stroke-0, #0074DD)" />
        </svg>
      </div>
    </div>
  );
}

export default function LearnerSkills() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Learner: Skills">
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[78px_57.47%_0_0] items-center p-[24px]">
        <div className="aspect-[687/537] bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[48px] relative size-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-end-auto col-start-1 ml-[209.75px] mt-[41px] relative row-end-auto row-start-1 size-[400px]" data-name="Segments">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
                    <g id="Segments">
                      <g id="Ellipse 15">
                        <circle cx="200" cy="200" fill="var(--fill-0, #0D004D)" fillOpacity="0.08" r="200" />
                        <circle cx="200" cy="200" r="199.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
                      </g>
                      <g id="Ellipse 14">
                        <circle cx="200" cy="200" fill="var(--fill-0, #0D004D)" fillOpacity="0.08" r="160" />
                        <circle cx="200" cy="200" r="159.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
                      </g>
                      <g id="Ellipse 13">
                        <circle cx="200" cy="200" fill="var(--fill-0, #0D004D)" fillOpacity="0.08" r="120" />
                        <circle cx="200" cy="200" r="119.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
                      </g>
                      <g id="Ellipse 12">
                        <circle cx="200" cy="200" fill="var(--fill-0, #0D004D)" fillOpacity="0.08" r="80" />
                        <circle cx="200" cy="200" r="79.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
                      </g>
                      <g id="Ellipse 11">
                        <circle cx="200" cy="200" fill="var(--fill-0, #0D004D)" fillOpacity="0.08" r="40" />
                        <circle cx="200" cy="200" r="39.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="col-end-auto col-start-1 h-[361.918px] ml-[219.25px] mt-[41px] relative row-end-auto row-start-1 w-[381.267px]" data-name="Lines">
                  <div className="absolute inset-[0_0_0_-0.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381.576 361.918">
                      <g id="Lines">
                        <line id="Line 4" stroke="var(--stroke-0, white)" x1="190.809" x2="190.809" y1="200" y2="2.18557e-08" />
                        <line id="Line 5" stroke="var(--stroke-0, white)" x1="190.366" x2="0.154509" y1="199.279" y2="137.475" />
                        <line id="Line 6" stroke="var(--stroke-0, white)" x1="190.494" x2="72.9371" y1="199.786" y2="361.589" />
                        <line id="Line 7" stroke="var(--stroke-0, white)" x1="191.016" x2="308.573" y1="199.821" y2="361.624" />
                        <circle cx="190.809" cy="199.5" fill="var(--fill-0, white)" id="Ellipse 16" r="0.5" />
                        <line id="Line 8" stroke="var(--stroke-0, white)" x1="191.211" x2="381.422" y1="199.336" y2="137.532" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="col-end-auto col-start-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] ml-[410.25px] mt-0 relative row-end-auto row-start-1 text-[#171717] text-[14px] text-center translate-x-[-50%] w-[200px]">Technical Skills</p>
                <p className="col-end-auto col-start-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] ml-[620.25px] mt-[164px] relative row-end-auto row-start-1 text-[#171717] text-[14px] w-[200px]">Ethics</p>
                <p className="col-end-auto col-start-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] ml-[540.25px] mt-[422px] relative row-end-auto row-start-1 text-[#171717] text-[14px] w-[200px]">Leadership</p>
                <p className="col-end-auto col-start-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] ml-[200px] mt-[164px] relative row-end-auto row-start-1 text-[#171717] text-[14px] text-right translate-x-[-100%] w-[200px]">Physical</p>
                <p className="col-end-auto col-start-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] ml-[280px] mt-[422px] relative row-end-auto row-start-1 text-[#171717] text-[14px] text-right translate-x-[-100%] w-[200px]">Communication</p>
                <Group8Helper additionalClassNames="ml-[533.63px] mt-[198px]" />
                <Group8Helper additionalClassNames="ml-[493.63px] mt-[356px]" />
                <Group8Helper additionalClassNames="ml-[312.63px] mt-[370px]" />
                <Group8Helper additionalClassNames="ml-[298.63px] mt-[203px]" />
                <Group8Helper additionalClassNames="ml-[408.13px] mt-[88px]" />
                <div className="col-end-auto col-start-1 h-[282.5px] ml-[300.63px] mt-[89px] relative row-end-auto row-start-1 w-[235px]">
                  <div className="absolute inset-[-0.25%_-0.24%_-0.19%_-0.22%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236.077 283.73">
                      <path d={svgPaths.p38f61580} fill="var(--fill-0, #0074DD)" fillOpacity="0.15" id="Vector 1" stroke="var(--stroke-0, #0074DD)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <Wrapper>
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              <Helper text="Earned Jan 15, 2025" text1="Moral Reasoning Foundation" />
              <ImageImage />
            </div>
          </Wrapper>
          <Wrapper>
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              <Helper text="Earned Dec 20, 2024" text1="Leadership Ethics" />
              <ImageImage />
            </div>
          </Wrapper>
          <Wrapper>
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Ethical Frameworks</p>
                <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">40% complete</p>
                <p className="leading-[16px] max-w-[400px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Complete 2 more advanced ethics scenarios demonstrating multiple frameworks in complex situations.</p>
              </div>
              <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="progress-circular">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="progress-circle">
                  <div className="absolute inset-[-18.33%_-16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.667px_11.733px] mask-size-[64px_64px]" data-name="Track Color" style={{ maskImage: `url('${imgTrackColor}')` }}>
                    <div className="absolute bg-[rgba(0,116,221,0.15)] inset-0" data-name="Color" />
                  </div>
                  <div className="absolute aspect-[100/100] bottom-[-5.56%] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.556px] mask-size-[64px_64px] top-[-5.56%] translate-x-[-50%]" data-name="Circle Percentage" style={{ maskImage: `url('${imgTrackColor}')` }}>
                    <div className="absolute aspect-[83/83] left-[-9.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42.637px_6.667px] mask-size-[35.556px_64.321px] right-[-10.67%] top-[calc(50%+0.44px)] translate-y-[-50%]" data-name="Progress" style={{ maskImage: `url('${imgProgress}')` }}>
                      <div className="absolute bg-[#0074dd] inset-0" data-name="Color" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-[1728px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Dashboard" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Scenarios" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Skills Profile</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
                <div className="size-full">
                  <div className="size-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Physical Development" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[48px]">
            <div className="absolute left-0 size-[48px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" fill="var(--fill-0, #1D5282)" id="Ellipse 1" r="24" />
              </svg>
            </div>
            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] inset-[78px_0_0_42.53%] items-start pb-0 pt-[24px] px-[40px]">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCard>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <Helper1 text="Leadership" text1="Proficient" />
                <Helper2 text="+4" text1="72" />
              </div>
            </div>
            <Helper4 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">You’re making confident decisions under pressure and your team responds well to your direction. Your recent scenarios show you’re comfortable taking charge in crisis situations.</p>
            <Helper3 text="Try" text1="the Empowering Reluctant Team Members scenario to develop your delegation skills when working with less confident sailors." />
          </ScenarioCard>
          <ScenarioCard>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <Helper1 text="Communication" text1="Advanced" />
                <Helper2 text="+3" text1="81" />
              </div>
            </div>
            <Helper4 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`Excellent command presence and clarity in tactical situations. You adapt your communication style well for different contexts and your briefings are consistently well-structured. `}</p>
            <Helper3 text="Try" text1="Cross-Cultural Communication scenarios to prepare for join operations with international partners." />
          </ScenarioCard>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCard>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <Helper1 text="Technical Skills" text1="Proficient" />
                <Helper2 text="+5" text1="76" />
              </div>
            </div>
            <Helper4 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`Strong systems knowledge and troubleshooting ability. You correctly diagnosed complex failures in your last three engineering scenarios and are ready for more advanced technical challenges. `}</p>
            <Helper3 text="Try" text1="Advanced Damage Control: Multi-System Integration to build on your current skills and work toward your Tactical Systems credential." />
          </ScenarioCard>
          <ScenarioCard>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <Helper1 text="Ethics" text1="Proficient" />
                <Helper2 text="+1" text1="65" />
              </div>
            </div>
            <Helper4 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">You consistently apply the Honor Concept in straightforward situations and show good moral reasoning. You hesitate when facing ethical dilemmas with competing loyalties.</p>
            <Helper3 text="Try" text1="the Moral Courage Under Pressure series - these scenarios will help you build frameworks for navigating ethical gray zones." />
          </ScenarioCard>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCard>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <Helper1 text="Physical" text1="Developing" />
                <Helper2 text="+2" text1="58" />
              </div>
            </div>
            <Helper4 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`Your cardio endurance has improved significantly over the past month, and you’re maintaining good training consistency. Your strength benchmarks are below where they need to be for your class year. `}</p>
            <Helper3 text="Try" text1="incorporating two additional strength sessions per week. Your performance data suggests you recover well, so you can handle the load." />
          </ScenarioCard>
          <div className="basis-0 bg-white grow min-h-px min-w-px opacity-0 relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                    <Helper1 text="Communication" text1="Proficient" />
                    <Helper2 text="+2" text1="67" />
                  </div>
                </div>
                <Helper4 />
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`You’re doing this and that well, you could benefit from this other thing. Here’s some training we recommend. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}