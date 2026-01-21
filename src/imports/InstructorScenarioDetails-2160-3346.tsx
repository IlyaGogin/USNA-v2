import svgPaths from "./svg-v9tar8smaz";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">{children}</div>
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

function Frame2043682545Helper() {
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{text1}</p>
    </div>
  );
}

export default function InstructorScenarioDetails() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Instructor: Scenario Details">
      <div className="absolute bg-[#e8e6f3] inset-[78px_67.59%_0_0] overflow-clip">
        <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_63px_40px] items-start">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
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
            <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
              <div className="relative shrink-0 size-[24px]" data-name="QrCode">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="QrCode">
                    <path d={svgPaths.p34fb2b00} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px] w-full">The Maintenance Dilemma</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="basis-0 bg-[#ffce00] grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Assign Scenario</p>
              </Wrapper1>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <Wrapper1>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                  <p className="leading-[16px]">Test Scenario</p>
                </div>
              </Wrapper1>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <Wrapper2>
                  <g id="MapPin">
                    <path d={svgPaths.p3336b800} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                  </g>
                </Wrapper2>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Location</p>
              </div>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">Naval Air Station Oceana</p>
            </div>
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <Wrapper2>
                  <g id="Clock">
                    <path d={svgPaths.p20121700} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                  </g>
                </Wrapper2>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Time</p>
              </div>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">1800, Friday evening</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
              <Wrapper>
                <div className="relative rounded-[80px] shrink-0 size-[67px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[80px]">
                    <img alt="" className="absolute h-[143.75%] left-[-61.19%] max-w-none top-[-21.88%] w-[222.39%]" src={imgRectangle12189} />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                  <Helper text="Chief Rodriguez" text1="Aviation Maintenance Chief" />
                </div>
              </Wrapper>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Student role</p>
              <Wrapper>
                <div className="relative shrink-0 size-[67px]">
                  <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%+0.5px)] text-[#171717] text-[18px] text-center text-nowrap top-[calc(50%-10.5px)] translate-x-[-50%]">MD</p>
                </div>
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-radio">
                  <Helper text="Lieutenant (JG)" text1="Maintenance Division Officer" />
                </div>
              </Wrapper>
            </div>
          </div>
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
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.228px_1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Dashboard" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Scenarios</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
                <div className="size-full" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Skills Profile" />
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
      <div className="absolute content-stretch flex flex-col gap-[24px] inset-[78px_0_0_32.41%] items-start p-[40px]">
        <div className="aspect-[1088/357] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-white inset-0 rounded-[8px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[8px]">
              <img alt="" className="absolute h-[166.23%] left-0 max-w-none top-[-20.53%] w-full" src={imgMidshipman} />
            </div>
            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
          </div>
          <div className="flex flex-col justify-end size-full">
            <div className="size-full" />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[624px] relative shrink-0 w-full">
          <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[24px] items-start left-0 p-[32px] right-[44.12%] rounded-[12px] top-[80.79px]">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">
                  <p className="mb-[18px]">{`You are a junior officer (LTJG) serving as the Maintenance Division Officer aboard a naval air station. It’s Friday evening, 1800, and you’re conducting a final walkthrough before a long weekend. `}</p>
                  <p className="mb-[18px]">During your inspection, you discover that Chief Rodriguez, your highly respected Aviation Maintenance Chief with 18 years of experience and an impeccable safety record, is about to sign off on maintenance logs for work that hasn’t been fully completed. The aircraft in question is scheduled for a training flight Monday morning.</p>
                  <p>{`The incomplete work involves a non-critical inspection item that “usually checks out fine” and has a low historical failure rate. However, this item is still required by regulation. The Commanding Officer has been pushing hard for improved readiness metrics, and your division has been struggling to meet targets. The CO has specifically praised divisions that maintain high readiness numbers, and other divisions have been rumored to take similar shortcuts. `}</p>
                </div>
              </div>
            </div>
            <Frame2043682545Helper />
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{`Chief Rodriguez privately asks you to “use discretion” this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor’s career, or trusting his experience while risking flight safety and your own integrity. Your career evaluation is coming up, and Chief Rodriguez’s endorsement matters significantly. `}</p>
              </div>
            </div>
            <Frame2043682545Helper />
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] text-nowrap">Student Mission</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#171717] text-[18px] w-[min-content]">{`Navigate the tension between regulatory compliance, operational pressure, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold professional standards when facing personal and institutional pressures. `}</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col items-start left-[58.09%] p-[32px] right-0 rounded-[12px] top-[81px]">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <Text text="Identify when organizational pressure creates rationalization for ethical shortcuts" />
                  <Text text="Demonstrate integrity by addressing the ethical issue directly rather than avoiding it" />
                  <Text text="Navigate the conversation with respect while maintaining your position on the ethical issue" />
                  <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
                    <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">Identify appropriate escalation pathways when facing organizational pressure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f6f6fb] content-stretch flex items-center justify-between left-0 pl-[32px] pr-[12px] py-[16px] rounded-[12px] top-[-7.21px] w-[1088px]">
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Want to know how to prepare Midshipmen for this scenario?</p>
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">View Instructor Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}