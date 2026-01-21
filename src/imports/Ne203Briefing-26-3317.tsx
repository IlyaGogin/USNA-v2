import svgPaths from "./svg-n47374tcfe";
import clsx from "clsx";
import imgFrame2043682411 from "figma:asset/60d29d220dbf34890ce90df0c9f9daa970f5c37e.png";
import imgFrame2043682412 from "figma:asset/10b591f3618af33a494f33441eac84b0e03f1450.png";
import imgImage18 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgNe203Briefing from "figma:asset/30a6557faa760589fc2b3060f20e769cf0c079c8.png";

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center size-full">
      <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none" />
      <BackgroundImage3>{children}</BackgroundImage3>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center not-italic relative shrink-0 text-[16px] w-full">
      <p className="basis-0 font-['SF_Mono:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#e8e8e8]">{text}</p>
      <p className="font-['SF_Mono:Light',sans-serif] leading-[normal] opacity-0 relative shrink-0 text-[#a2a2a2] text-nowrap tracking-[-0.32px]">{text1}</p>
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

export default function Ne203Briefing() {
  return (
    <div className="relative size-full" data-name="NE-203: Briefing">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f6f6fb] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgNe203Briefing} />
      </div>
      <div className="absolute h-[1117px] left-0 top-0 w-[1728px]" data-name="BG Contents">
        <div className="absolute backdrop-blur-[14.5px] backdrop-filter bg-gradient-to-r from-[rgba(13,0,77,0.1)] h-[1117px] left-0 to-[rgba(13,0,77,0.1)] top-0 w-[1728px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1728 1117\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.10000000149011612\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(7.2876e-14 94.75 -127.63 1.1737e-13 864 558.5)\\\'><stop stop-color=\\\'rgba(13,0,77,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,0,77,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        <p className="absolute font-['SF_Mono:Regular',sans-serif] leading-[32px] left-[40px] not-italic text-[#e8e8e8] text-[24px] text-nowrap top-[46px] tracking-[-0.48px]">{`MISSION  \\  COMMAND CLIMATE \ REPORTING MISCONDUCT`}</p>
        <div className="absolute flex h-[273px] items-center justify-center right-[72px] top-[40px] translate-x-[100%] w-[32px]" style={{ "--transform-inner-width": "235.828125", "--transform-inner-height": "32" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <p className="font-['SF_Mono:Regular',sans-serif] leading-[32px] not-italic relative text-[#e8e8e8] text-[24px] text-nowrap tracking-[-0.48px]">{`PEARSON  \\  NE-203 `}</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[999px] left-0 top-[118px] w-[1728px]">
        <div className="absolute bg-white h-[999px] left-[6.13%] right-[40.16%] rounded-tl-[4px] rounded-tr-[4px] top-0">
          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[40px] pt-0 px-0 relative rounded-[inherit] size-full">
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
                  <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                    <p className="leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full">COMMAND CLIMATE</p>
                    <p className="leading-[28px] relative shrink-0 text-[#fcc32a] text-[20px] tracking-[-0.4px] w-full">REPORTING MISCONDUCT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[40px] py-0 relative size-full">
                  <BackgroundImage4>
                    <div className="content-stretch flex flex-col gap-[12px] items-start pl-0 pr-[32px] py-[24px] relative w-full">
                      <BackgroundImage text="[LOCATION]" text1="USS Ronald Reagan, Forward Deployed, Yokosuka, Japan" additionalClassNames="justify-between shrink-0" />
                      <BackgroundImage text="[YOUR ROLE]" text1="Engineering Officer" additionalClassNames="justify-between shrink-0" />
                      <BackgroundImage text="[TIME]" text1="1430, Tuesday afternoon // 10-15 mins" additionalClassNames="justify-between shrink-0" />
                    </div>
                  </BackgroundImage4>
                  <BackgroundImage4>
                    <div className="content-stretch flex items-start leading-[22px] pl-0 pr-[32px] py-[24px] relative text-[#171717] w-full">
                      <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[SITUATION]</p>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{`You are the EOOW on a carrier underway. Your main propulsion plant reports a critical casualty that requires an immediate, high-risk, hours-long repair procedure that will stop the ship dead in the water. Intel reports an adversary submarine is suspected to be operating nearby. `}</p>
                    </div>
                  </BackgroundImage4>
                  <BackgroundImage4>
                    <BackgroundImage text="[DILEMMA]" text1="The safety protocol strictly mandates the presence of two experienced Chief Petty Officers for this specific repair. However, you only have one immediately available; the second is currently incapacitated due to a sudden medical emergency. The Commanding Officer is demanding immediate propulsion restoration to meet a critical tasking window." additionalClassNames="pl-0 pr-[32px] py-[24px]" />
                  </BackgroundImage4>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end px-[40px] py-0 relative w-full">
                  <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Start mission</p>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="button/arrow-right">
                      <div className="relative shrink-0 size-[16px]" data-name="trim">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="trim">
                            <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.76)] content-stretch flex flex-col gap-[12px] items-start left-[60.76%] right-[6.13%] rounded-[4px] top-0">
          <BackgroundImage2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[20px] min-h-px min-w-px relative shrink-0 text-[#e8e8e8]">
                <p className="font-['SF_Mono:Medium',sans-serif] not-italic relative shrink-0 text-[16px] text-nowrap">PRIMARY MISSION</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] w-[min-content]">Conduct a professional, empathetic conversation that ensures Petty Officer Rivera feels heard, supported, and informed while gathering necessary information and taking appropriate action in accordance with Navy policy.</p>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-[#e8e8e8]">
                <p className="font-['SF_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap">SUCCESS CRITERIA</p>
                <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[12px] w-[min-content]">
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Establish a safe environment for open communication</span>
                  </li>
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Demonstrate active listening and emotional intelligence</span>
                  </li>
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Gather relevant facts without conducting an unauthorized investigation</span>
                  </li>
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Correctly explain reporting options and procedures</span>
                  </li>
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Take appropriate immediate actions</span>
                  </li>
                  <li className="mb-[2px] ms-[18px]">
                    <span className="leading-[20px]">Document the conversation properly</span>
                  </li>
                  <li className="ms-[18px]">
                    <span className="leading-[20px]">Maintain professionalism and leadership composure</span>
                  </li>
                </ul>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <BackgroundImage1 text="MORAL DECISION MAKING" text1="25 PTS" />
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e8e8e8] text-[12px] w-full">The consistency with which you apply the expected ethics framework (or an alternative, if justified).</p>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <BackgroundImage1 text="DECISION VELOCITY" text1="25 PTS" />
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e8e8e8] text-[12px] w-full">The time taken to reach a final decision after the last complicating factor is introduced.</p>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <BackgroundImage1 text="REASONING QUALITY" text1="25 PTS" />
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e8e8e8] text-[12px] w-full">Analysis of your justification for your choices, scoring for clarity, coherence, and logical consistency.</p>
              </div>
            </div>
          </BackgroundImage2>
          <div className="relative shrink-0 w-full">
            <BackgroundImage3>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <BackgroundImage1 text="SELF-CORRECTION RATE" text1="25 PTS" />
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e8e8e8] text-[12px] w-full">How often you change your initial stance when new information or pressure is applied.</p>
                </div>
              </div>
            </BackgroundImage3>
          </div>
        </div>
      </div>
    </div>
  );
}