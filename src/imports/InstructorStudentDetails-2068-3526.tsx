import svgPaths from "./svg-129h6we5uu";
import clsx from "clsx";
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import imgEllipse2 from "figma:asset/0c229c6ea7bddf0026e4035aadd84b10c728a908.png";
import imgImage38 from "figma:asset/561a60f605f61f0bbcbea5fe03d55134ac8ad233.png";
import imgImage39 from "figma:asset/948424b909e051d8a51652c2b4bd8c87cfd92e67.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682544 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function TrimBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
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
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#006632] text-[16px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage3Props = {
  text: string;
  text1: string;
};

function BackgroundImage3({ text, text1 }: BackgroundImage3Props) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap">
      <p className="leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px]">{text}</p>
      <p className="leading-[22px] relative shrink-0 text-[#171717] text-[18px]">{text1}</p>
    </div>
  );
}

function ArrowRightBackgroundImage() {
  return (
    <BackgroundImage4>
      <g id="ArrowRight">
        <path d={svgPaths.p319dcd00} fill="var(--fill-0, #B20900)" id="Vector" />
      </g>
    </BackgroundImage4>
  );
}

function BackgroundImage2() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 1">
          <line id="Line 2" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="520" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage1({ text, text1, additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{text}</p>
      <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] tracking-[-0.48px] w-full">{text1}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[72px] relative shrink-0 text-[#171717] text-[64px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">{text}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] opacity-70 relative shrink-0 text-[#00b057] text-[14px]">{text1}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[40px]" data-name="image 38">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage38} />
        </div>
        <BackgroundImage3 text="Badge earned" text1="Leadership Excellence" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <BackgroundImageAndText2 text="78" />
        <BackgroundImage3 text="Scenario completed" text1="Milgram Obedience" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <BackgroundImageAndText2 text="78" />
        <BackgroundImage3 text="Scenario completed" text1="The Challenger Decision" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <BackgroundImageAndText2 text="78" />
        <BackgroundImage3 text="Scenario completed" text1="Abu Ghraib" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[40px]" data-name="image 39">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage39} />
        </div>
        <BackgroundImage3 text="Badge earned" text1="Moral Reasoning Foundation" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

export default function InstructorStudentDetails() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Instructor: Student Details">
      <div className="absolute bg-[#e8e6f3] inset-[78px_67.59%_0_0] overflow-clip">
        <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_63px_40px] items-start">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
              <TrimBackgroundImage>
                <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
              </TrimBackgroundImage>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 w-full">
            <div className="leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">
              <p className="mb-0">{`Maya `}</p>
              <p>Thompson</p>
            </div>
            <p className="leading-[28px] min-w-full relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px] w-[min-content]">{`NE203: Ethics & Moral Reasoning`}</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="basis-0 bg-[#ffce00] grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Assign Scenario</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
                <TrimBackgroundImage>
                  <path clipRule="evenodd" d={svgPaths.p248f7271} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                </TrimBackgroundImage>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
                <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(169.737287deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
              </div>
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0">
                      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">
                        <p className="mb-[8px]">{`Overall `}</p>
                        <p>readiness</p>
                      </div>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[120px] relative shrink-0 text-[120px] text-center text-nowrap text-white">79</p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(97, 209, 152, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                        <line id="Line 1" stroke="var(--stroke-0, #61D198)" x2="448" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#61d198] text-[16px] text-center text-nowrap w-full">
                    <p className="relative shrink-0">3rd Class</p>
                    <p className="relative shrink-0">On Track</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
                    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <BackgroundImage text="Leadership" text1="+2" />
                        <BackgroundImageAndText text="67" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <BackgroundImage text="Ethics" text1="+2" />
                        <BackgroundImageAndText text="67" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <BackgroundImage text="Technical Skills" text1="+2" />
                        <BackgroundImageAndText text="67" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <BackgroundImage text="Physical Readiness" text1="+2" />
                        <BackgroundImageAndText text="67" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <BackgroundImage text="Communication" text1="+2" />
                        <BackgroundImageAndText text="67" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[40px] size-[120px] top-[40px]">
          <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse2} width="120" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] inset-[78px_30.09%_0_32.41%] items-start px-[40px] py-[32px]">
        <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[32px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Sessions completed</p>
                  <BackgroundImageAndText1 text="5" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Average score</p>
                  <BackgroundImageAndText1 text="85%" />
                </div>
              </div>
              <BackgroundImage2 />
              <div className="content-stretch flex flex-col gap-[40px] items-start max-h-[560px] pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-end relative shrink-0 w-full">
                    <BackgroundImage1 text="Advanced" text1="Constraints" />
                    <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">90%</p>
                  </div>
                  <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
                    <div className="bg-[#0074dd] h-full shrink-0 w-[388.8px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-end relative shrink-0 w-full">
                    <BackgroundImage1 text="Developing" text1="Consequences" />
                    <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">70%</p>
                  </div>
                  <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
                    <div className="bg-[#0074dd] h-full shrink-0 w-[302.4px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-end relative shrink-0 w-full">
                    <BackgroundImage1 text="Advanced" text1="Character" />
                    <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">95%</p>
                  </div>
                  <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
                    <div className="bg-[#0074dd] h-full shrink-0 w-[410.4px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-end relative shrink-0 w-full">
                    <BackgroundImage1 text="Proficient" text1="Special Obligations" />
                    <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">80%</p>
                  </div>
                  <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
                    <div className="bg-[#0074dd] h-full shrink-0 w-[345.6px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[32px] relative w-full">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <BackgroundImage1 text="Excellent" text1="Framework application" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium" />
                <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                  <BackgroundImage4>
                    <g id="Check">
                      <path d={svgPaths.p368ccf00} fill="var(--fill-0, #006632)" id="Vector" />
                    </g>
                  </BackgroundImage4>
                </div>
              </div>
              <BackgroundImage2 />
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <BackgroundImage1 text="Needs work on" text1="Considering second-order consequences" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium" />
                <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                  <ArrowRightBackgroundImage />
                </div>
              </div>
              <BackgroundImage2 />
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <BackgroundImage1 text="Could benefit from more" text1="Stakeholder analysis" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium" />
                <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                  <ArrowRightBackgroundImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col inset-[78px_0_0_69.91%] items-start pb-0 pl-0 pr-[40px] pt-[32px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Recent Activity</p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <Frame />
            <Frame4 />
            <Frame1 />
            <Frame2 />
            <Frame3 />
            <Frame3 />
            <Frame />
            <Frame4 />
            <Frame1 />
            <Frame2 />
            <Frame3 />
            <Frame3 />
            <Frame1 />
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-[1728px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682544} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.908px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
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
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Students</p>
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
              <TabLabelBackgroundImageAndText text="Assignments" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Analytics" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create</p>
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
              <TrimBackgroundImage>
                <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
              </TrimBackgroundImage>
            </div>
          </div>
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
    </div>
  );
}