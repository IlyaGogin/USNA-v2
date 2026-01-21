import svgPaths from "./svg-mragxph045";
import clsx from "clsx";
import imgFrame2043682411 from "figma:asset/60d29d220dbf34890ce90df0c9f9daa970f5c37e.png";
import imgFrame2043682412 from "figma:asset/10b591f3618af33a494f33441eac84b0e03f1450.png";
import imgImage18 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">{children}</div>
    </div>
  );
}
type TrimBackgroundImageProps = {
  additionalClassNames?: string;
};

function TrimBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TrimBackgroundImageProps>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}
type LabelWrapperBackgroundImageAndTextProps = {
  text: string;
};

function LabelWrapperBackgroundImageAndText({ text }: LabelWrapperBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#045caf] text-[16px] text-center text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex items-start leading-[22px] relative text-[#171717] w-full", additionalClassNames)}>
      <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">{text}</p>
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-tl-[4px] rounded-tr-[4px] size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[284.13%] left-[43.11%] max-w-none top-[-32.1%] w-[63.69%]" src={imgFrame2043682411} />
            </div>
            <div className="absolute bg-gradient-to-r from-[#1d5282] from-[43.733%] inset-0 to-[rgba(29,82,130,0)]" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682412} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(29, 82, 130) 8.6925%, rgba(29, 82, 130, 0) 79.721%), linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%)" }} />
          </div>
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center px-[40px] py-[24px] relative w-full">
              <div className="relative shrink-0 size-[160px]" data-name="image 18">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full">THE INNER RING</p>
                  <p className="leading-[28px] relative shrink-0 text-[#fcc32a] text-[20px] tracking-[-0.4px] w-full">{`SOCIAL INFLUENCE & PEER PRESSURE`}</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
                      <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
                        <TrimBackgroundImage additionalClassNames="relative shrink-0">
                          <circle cx="8" cy="8" fill="var(--fill-0, #006632)" id="icon" r="3" />
                        </TrimBackgroundImage>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#006632] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">PUBLISHED</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">NE-203</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0" data-name="Label">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">INT: 3/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(29,82,130,0.45)] content-stretch flex items-center justify-center p-[10px] right-[16px] rounded-[80px] top-[15px] w-[32px]">
                <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="X">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="X">
                      <path d={svgPaths.p5ff8500} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start px-[40px] py-0 relative size-full">
              <BackgroundImage1>
                <div className="content-stretch flex items-start pl-0 pr-[32px] py-[24px] relative text-[#171717] text-[16px] w-full">
                  <p className="font-['SF_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 w-[160px]">[DESCRIPTION]</p>
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0">Train participants to recognize and resist unhealthy social pressures to belong to exclusive “inner rings” or in-groups.</p>
                </div>
              </BackgroundImage1>
              <BackgroundImage1>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-0 pr-[32px] py-[24px] relative w-full">
                  <BackgroundImage text="[LOCATION]" text1="Norfolk Naval Base, VA" additionalClassNames="justify-between shrink-0" />
                  <BackgroundImage text="[YOUR ROLE]" text1="Junior Officer (O-s/Ensign or O-3/Lieutenant)" additionalClassNames="justify-between shrink-0" />
                  <BackgroundImage text="[TIME]" text1="Week 2-3 of new assignment // 15-20 mins" additionalClassNames="justify-between shrink-0" />
                </div>
              </BackgroundImage1>
              <BackgroundImage1>
                <BackgroundImage text="[SITUATION]" text1="You are a Junior Officer newly assigned to USS Valor. You’ve been at the command for 2-3 weeks. LCDS Hayes, the Executive Officer’s assistant, has invited you for a private conversation. He will begin the conversation." additionalClassNames="pl-0 pr-[32px] py-[24px]" />
              </BackgroundImage1>
              <BackgroundImage1>
                <div className="content-stretch flex items-start leading-[22px] pl-0 pr-[32px] py-[24px] relative text-[#171717] w-full">
                  <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[DILEMMA]</p>
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{`LCDR Hayes tests whether you can be “trusted” to be part of the inner circle by pressuring you to prove loyalty through bending rules, sharing confidential information, or excluding others to gain acceptance into an exclusive group. `}</p>
                </div>
              </BackgroundImage1>
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex items-start pl-0 pr-[32px] py-[24px] relative w-full">
                    <p className="font-['SF_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#171717] text-[16px] w-[160px]">[FRAMEWORKS]</p>
                    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                        <LabelWrapperBackgroundImageAndText text="MORAL PERCEPTION" />
                      </div>
                      <div className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                        <LabelWrapperBackgroundImageAndText text="SOCIAL INFLUENCE" />
                      </div>
                      <div className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                        <LabelWrapperBackgroundImageAndText text="PEER PRESSURE" />
                      </div>
                      <div className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                        <LabelWrapperBackgroundImageAndText text="INTEGRITY" />
                      </div>
                      <div className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                        <LabelWrapperBackgroundImageAndText text="INNER RING" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[40px] py-[24px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                  <p className="leading-[16px]">Edit Scenario</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                  <div className="relative shrink-0 size-[18px]" data-name="trim">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="trim">
                        <path clipRule="evenodd" d={svgPaths.p12533c00} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                    <p className="leading-[16px]">Use as template</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="Trail Icon">
                    <TrimBackgroundImage additionalClassNames="absolute left-0 top-0">
                      <path clipRule="evenodd" d={svgPaths.p34304100} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                    </TrimBackgroundImage>
                  </div>
                </div>
                <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Test Scenario</p>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="button/arrow-right">
                    <TrimBackgroundImage additionalClassNames="relative shrink-0">
                      <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                    </TrimBackgroundImage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}