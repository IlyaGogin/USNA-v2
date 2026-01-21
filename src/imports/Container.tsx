import svgPaths from "./svg-fztqnffq9s";
import clsx from "clsx";
import imgUsnaLogo from "figma:asset/5b148ddb4e6c9d9e3ff7c305d285c5ac163f63a5.png";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("h-[20px] relative rounded-[340282001837565597733306976381245063168px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type TextBackgroundImageProps = {
  additionalClassNames?: string;
};

function TextBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TextBackgroundImageProps>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage>
      <g id="Icon">{children}</g>
    </BackgroundImage>
  );
}

export default function Container() {
  return (
    <div className="bg-[#1d5282] relative size-full" data-name="Container">
      <div className="absolute h-[951px] left-0 top-0 w-[260px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 260 951\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -98.59 -98.59 0 260 951)\\\'><stop stop-color=\\\'rgba(0,0,0,0.25)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid h-[203.344px] left-0 top-0 w-[260px]" data-name="Container">
        <div className="absolute h-[74.344px] left-[32px] top-[20px] w-[196px]" data-name="USNALogo">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsnaLogo} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.17)] content-stretch flex flex-col gap-[4px] h-[68px] items-start left-[20px] pb-[2px] pt-[14px] px-[14px] rounded-[4px] top-[114.34px] w-[220px]" data-name="Container">
          <div aria-hidden="true" className="absolute border border-[#fcc32a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="content-stretch flex gap-[8px] h-[19px] items-center relative shrink-0 w-full" data-name="Container">
            <TextBackgroundImage additionalClassNames="h-[19px]">
              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[19.5px] left-0 text-[#fcc32a] text-[12px] text-nowrap top-[-1px] uppercase">Proficient</p>
            </TextBackgroundImage>
            <IconBackgroundImage>
              <path d={svgPaths.p95d9c00} id="Vector" stroke="var(--stroke-0, #FCC32A)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p27180a80} id="Vector_2" stroke="var(--stroke-0, #FCC32A)" strokeLinecap="round" strokeLinejoin="round" />
            </IconBackgroundImage>
          </div>
          <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['SF_Mono:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-nowrap text-white top-0 tracking-[0.1172px] uppercase">Character Development</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[671.656px] items-start left-0 pb-0 pt-[12px] px-0 top-[203.34px] w-[260px]" data-name="Navigation">
        <div className="bg-[rgba(0,0,0,0.16)] h-[41px] relative shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute border-[#fcc32a] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[24px] pr-[20px] py-0 relative size-full">
              <IconBackgroundImage>
                <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #FCC32A)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #FCC32A)" strokeLinecap="round" strokeLinejoin="round" />
              </IconBackgroundImage>
              <TextBackgroundImage additionalClassNames="h-[21px]">
                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-[36px] text-[#fcc32a] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">ASSIGNED</p>
              </TextBackgroundImage>
              <BackgroundImage1 additionalClassNames="bg-[#fcc32a] w-[29.609px]">
                <p className="absolute font-['SF_Mono:Medium',sans-serif] leading-[16.5px] left-[15px] not-italic text-[#1d5282] text-[11px] text-center text-nowrap top-px translate-x-[-50%]">20</p>
              </BackgroundImage1>
            </div>
          </div>
        </div>
        <div className="h-[41px] relative shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
              <BackgroundImage>
                <g clipPath="url(#clip0_37_9444)" id="Icon">
                  <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_37_9444">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </BackgroundImage>
              <TextBackgroundImage additionalClassNames="h-[21px]">
                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-[43.5px] text-[#e8e8e8] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">COMPLETED</p>
              </TextBackgroundImage>
              <BackgroundImage1 additionalClassNames="bg-[rgba(255,255,255,0.2)] w-[22.813px]">
                <p className="absolute font-['SF_Mono:Medium',sans-serif] leading-[16.5px] left-[11.51px] not-italic text-[11px] text-center text-nowrap text-white top-px translate-x-[-50%]">3</p>
              </BackgroundImage1>
            </div>
          </div>
        </div>
        <div className="h-[41px] relative shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[20px] pr-0 py-0 relative size-full">
              <BackgroundImage>
                <g clipPath="url(#clip0_37_9433)" id="Icon">
                  <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_37_9433">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </BackgroundImage>
              <div className="h-[21px] relative shrink-0 w-[106.078px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-[53.51px] text-[#e8e8e8] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">SKILLS PROFILE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-0 pt-[21px] px-[20px] top-[875px] w-[260px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex h-[35px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <BackgroundImage2 additionalClassNames="h-[35px] w-[86.594px]">
            <div className="h-[19px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[19.5px] left-0 text-[13px] text-nowrap text-white top-[-1px]">MIDN Johnson</p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#a2a2a2] text-[11px] text-nowrap top-0 tracking-[0.0645px]">Midshipman 3/C</p>
            </div>
          </BackgroundImage2>
          <BackgroundImage2 additionalClassNames="size-[18px]">
            <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
                <div className="absolute inset-[-10%_-20%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                    <path d="M0.75 8.25L4.5 4.5L0.75 0.75" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
                <div className="absolute inset-[-0.75px_-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M9.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-5.56%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
                    <path d={svgPaths.pe3abc80} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </BackgroundImage2>
        </div>
      </div>
    </div>
  );
}