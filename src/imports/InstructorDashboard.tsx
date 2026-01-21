import svgPaths from "./svg-yw6iantzo8";
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import imgImage40 from "figma:asset/65343c0263ff378c8fa576fc1ff00589cf6f456d.png";
import imgScenarioCard from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgScenarioCard1 from "figma:asset/16f078e810c44ea0d7cbaed6d9a76428f3dc6fe8.png";
import imgImage38 from "figma:asset/561a60f605f61f0bbcbea5fe03d55134ac8ad233.png";
import imgImage39 from "figma:asset/948424b909e051d8a51652c2b4bd8c87cfd92e67.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682544 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
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
    <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[40px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#006632] text-[16px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap">
      <p className="leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px]">{text}</p>
      <p className="leading-[22px] relative shrink-0 text-[#171717] text-[18px]">{text1}</p>
    </div>
  );
}

function ArrowUpRightBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p2c65ca00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-[min-content]">{text}</p>
      <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-nowrap">{text1}</p>
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
        <BackgroundImage1 text="M. Thompson earned" text1="Leadership Excellence" />
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
        <BackgroundImageAndText text="78" />
        <BackgroundImage1 text="C. Kowalski completed" text1="Milgram Obedience" />
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
        <BackgroundImageAndText text="78" />
        <BackgroundImage1 text="M. Thompson completed" text1="The Challenger Decision" />
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
        <BackgroundImageAndText text="78" />
        <BackgroundImage1 text="F. Smith completed" text1="Abu Ghraib" />
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
        <BackgroundImage1 text="C. Kowalski earned" text1="Moral Reasoning Foundation" />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">1 day ago</p>
    </div>
  );
}

export default function InstructorDashboard() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Instructor: Dashboard">
      <div className="absolute bg-[#e8e6f3] h-[1039px] left-0 overflow-clip top-[78px] w-[560px]">
        <div className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] left-[40px] text-[#171717] text-[48px] text-nowrap top-[40px] tracking-[-0.96px]">
          <p className="mb-0">{`Welcome back, `}</p>
          <p>Captain Morrison</p>
        </div>
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] left-[40px] text-[#0074dd] text-[20px] text-nowrap top-[172px] tracking-[-0.4px]">Ethics Instructor</p>
        <div className="absolute content-stretch flex flex-col gap-[24px] items-start justify-center left-[40px] p-[16px] rounded-[12px] top-[232px] w-[480px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">Avg. Class Score</p>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[120px] relative shrink-0 text-[120px] text-center text-nowrap text-white">76</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.25" x2="448" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-center text-nowrap w-full">
            <p className="relative shrink-0">Sessions today</p>
            <p className="relative shrink-0">12</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[40px] top-[468px] w-[480px]">
          <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Students below threshold in Consequences</p>
                  <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center relative shrink-0 text-[#171717] w-full">
                    <p className="leading-[72px] relative shrink-0 text-[64px] text-nowrap">3</p>
                    <p className="leading-[16px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Try a targeted scenario to help these students</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">64% of students have achieved</p>
                    <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Advanced Ethics</p>
                  </div>
                  <div className="relative shrink-0 size-[64px]" data-name="image 40">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">View Students</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] h-[1039px] items-start left-[560px] px-[40px] py-[32px] top-[78px] w-[648px]">
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Scenario Card">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard1} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(187.405393deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-end p-[24px]">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <BackgroundImage text="Create new scenario" text1="Create a new scenario from scratch" />
                    </div>
                  </div>
                  <ArrowUpRightBackgroundImage />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Scenario Card">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(187.405393deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-end p-[24px]">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <BackgroundImage text="Assign scenario" text1="Browse the library and assign scenarios to students" />
                    </div>
                  </div>
                  <ArrowUpRightBackgroundImage />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] h-[1006px] items-start left-[1208px] px-[24px] py-0 top-[111px] w-[480px]">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Recent Activity</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <Frame />
          <Frame4 />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame />
          <Frame4 />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame />
          <Frame4 />
          <Frame1 />
          <Frame2 />
          <Frame3 />
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
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Dashboard</p>
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
              <TabLabelBackgroundImageAndText text="Scenarios" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Students" />
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
              <div className="relative shrink-0 size-[16px]" data-name="trim">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
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