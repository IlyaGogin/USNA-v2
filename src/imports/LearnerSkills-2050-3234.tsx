import svgPaths from "./svg-qd89eej4z7";
import clsx from "clsx";
import imgFrame2043682475 from "figma:asset/8cb07111e6bd9f2523160f87f6099c79d47a1154.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
type ScenarioCardBackgroundImageProps = {
  additionalClassNames?: string;
};

function ScenarioCardBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ScenarioCardBackgroundImageProps>) {
  return (
    <div className={clsx("basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[32px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage3() {
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

function BackgroundImage2() {
  return (
    <div className="h-[172px] relative shrink-0 w-[486px]">
      <div className="absolute inset-[-0.29%_0_0_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486.489 172.5">
          <g id="Group 10">
            <path d={svgPaths.p4a4c80} id="Vector 2" stroke="var(--stroke-0, #00B057)" />
            <path d={svgPaths.pf398f80} fill="url(#paint0_linear_2050_3238)" id="Vector 3" opacity="0.4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2050_3238" x1="243.489" x2="243.489" y1="0.500466" y2="172.5">
              <stop stopColor="#00B057" />
              <stop offset="1" stopColor="#00B057" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <BackgroundImage text="Response Rate" text1="Good" />
      <BackgroundImageAndText1 text="73%" />
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
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{text}</p>
    </div>
  );
}

export default function LearnerSkills() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Learner: Skills">
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[78px_67.59%_0_0] items-center p-[24px]">
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
            <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(173.3111deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
          </div>
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
                  <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">
                    <p className="mb-[8px]">{`Physical `}</p>
                    <p>readiness</p>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white">67</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <BackgroundImage4>
            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">You’ve maintained 92% training consistency this semester</p>
                <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">12% above class average</p>
              </div>
            </div>
          </BackgroundImage4>
          <BackgroundImage4>
            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
              <BackgroundImageAndText text="Your cognitive performance in scenarios peaks 24-48 hours after strength training" />
            </div>
          </BackgroundImage4>
          <BackgroundImage4>
            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
              <BackgroundImageAndText text="Your recovery pattern suggests you’re ready for high-intensity scenarios today" />
            </div>
          </BackgroundImage4>
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
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Physical Development</p>
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
      <div className="absolute content-stretch flex flex-col gap-[20px] inset-[78px_0_0_32.41%] items-start pb-0 pt-[24px] px-[40px]">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <BackgroundImage1 />
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Focus Rate" text1="Good" />
                <BackgroundImageAndText1 text="27%" />
              </div>
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Attention Span" text1="Good" />
                <BackgroundImageAndText1 text="6 min" />
              </div>
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Fidget Minutes" text1="Good" />
                <BackgroundImageAndText1 text="4" />
              </div>
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
          <ScenarioCardBackgroundImage>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <BackgroundImage text="Steps" text1="Good" />
                <BackgroundImageAndText1 text="302" />
              </div>
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
          <ScenarioCardBackgroundImage additionalClassNames="opacity-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <BackgroundImage1 />
            </div>
            <BackgroundImage3 />
            <BackgroundImage2 />
          </ScenarioCardBackgroundImage>
        </div>
      </div>
    </div>
  );
}