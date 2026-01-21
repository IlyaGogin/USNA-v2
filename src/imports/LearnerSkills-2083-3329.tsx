import svgPaths from "./svg-rayzzo9w43";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgFrame2043682475 from "figma:asset/6ef0060730ce05f8f38ac72753d96213f10dcfef.png";
import imgEllipse2 from "figma:asset/30055d4db907cb64cc8a54daeacc28bb11169364.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function ScenarioCardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486 1">
          <line id="Line 2" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="486" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-[#f6f6fb] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse2} width="32" />
          </div>
          <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">{text}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">{text}</p>
      <p className="leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">{text1}</p>
    </div>
  );
}

function QuestionMarkBackgroundImage() {
  return (
    <BackgroundImage3>
      <g id="QuestionMark">
        <path d={svgPaths.pe839500} fill="var(--fill-0, #B20900)" id="Vector" />
      </g>
    </BackgroundImage3>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{text}</p>
    </div>
  );
}

function CheckBackgroundImage() {
  return (
    <BackgroundImage3>
      <g id="Check">
        <path d={svgPaths.p368ccf00} fill="var(--fill-0, #006632)" id="Vector" />
      </g>
    </BackgroundImage3>
  );
}
type TabLabelBackgroundImageAndTextProps = {
  text: string;
};

function TabLabelBackgroundImageAndText({ text }: TabLabelBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}

export default function LearnerSkills() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Learner: Skills">
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
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Dashboard" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Scenarios" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Skills Profile" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Physical Development" />
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
      <div className="absolute bg-[#e8e6f3] inset-[78px_67.59%_0_0] overflow-clip">
        <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_63px_40px] items-start">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
              <div className="relative shrink-0 size-[16px]" data-name="trim">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 w-full">
            <p className="leading-[28px] min-w-full relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px] w-[min-content]">Your results</p>
            <p className="leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">The Inner Ring</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 bg-[#ffce00] grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Try another scenario</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
                <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(167.382114deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
              </div>
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0">
                      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">
                        <p className="mb-[8px]">{`Overall `}</p>
                        <p>performance</p>
                      </div>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white">78</p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(97, 209, 152, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                        <line id="Line 1" stroke="var(--stroke-0, #61D198)" x2="448" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#61d198] text-[14px]">{`You demonstrated developing proficiency in ethical reasoning, with particular strength in understanding constraints and special obligations. You recognized the ethical concerns but could have explored the full scope of consequences more thoroughly. `}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <BackgroundImage2>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <CheckBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Immediate recognition of Honor Concept violation" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <CheckBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Connected decision to future leadership identity" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <CheckBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Considered impact on excluded peers" />
                  </div>
                </div>
              </BackgroundImage2>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <BackgroundImage2>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <QuestionMarkBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Explore systematic consequences beyond personal impact" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <QuestionMarkBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Consider duty to report vs. duty to peers" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
                      <QuestionMarkBackgroundImage />
                    </div>
                    <BackgroundImageAndText text="Develop strategies for maintaining relationships while declining" />
                  </div>
                </div>
              </BackgroundImage2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] inset-[78px_0_0_32.41%] items-start pb-0 pt-[24px] px-[40px]">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Constraints" text1="Proficient" />
                <BackgroundImageAndText1 text="85" />
              </div>
            </div>
            <BackgroundImage1 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">You clearly identified the Honor Concept violation. Work on applying the same clarity to situations where the rules are less explicit.</p>
            <BackgroundImageAndText2 text="“This clearly violates the Honor Concept - they’re sharing exam information, which is cheating. I can’t be part of that even if it helps my grades.”" />
          </ScenarioCardBackgroundImage>
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Consequences" text1="Developing" />
                <BackgroundImageAndText1 text="65" />
              </div>
            </div>
            <BackgroundImage1 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`You focused on personal impacts but missed broader effects on the brigade, excluded peers, and your future credibility as a leader. `}</p>
            <BackgroundImageAndText2 text="“If I join, I’ll feel guilty. If I don’t join, they might exclude me from other things.”" />
          </ScenarioCardBackgroundImage>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Character" text1="Proficient" />
                <BackgroundImageAndText1 text="82" />
              </div>
            </div>
            <BackgroundImage1 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`Excellent connection to your officer identity. Next time, explain how declining this invitation actively builds the character you want to develop. `}</p>
            <BackgroundImageAndText2 text="“As an officer, I need to be someone my sailors can trust. If I compromise now on something I know is wrong, where do I draw the line later?”" />
          </ScenarioCardBackgroundImage>
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Special Obligations" text1="Proficient" />
                <BackgroundImageAndText1 text="75" />
              </div>
            </div>
            <BackgroundImage1 />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{`You recognized your duty to excluded classmates. Consider also your obligation to the institution and whether staying silent about cheating upholds that duty. `}</p>
            <BackgroundImageAndText2 text="“I should tell the classmates being left out what’s happening - they deserve to know.”" />
          </ScenarioCardBackgroundImage>
        </div>
      </div>
    </div>
  );
}