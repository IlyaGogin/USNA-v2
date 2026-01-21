import svgPaths from "./svg-n2ra7dgf2q";
import imgNe203Mission from "figma:asset/30a6557faa760589fc2b3060f20e769cf0c079c8.png";
import imgMicrosoftTeamsImage9 from "figma:asset/4f6db1fe228a97539266b3a8ff0a45a41e2dc3e1.png";

export default function Ne203Mission() {
  return (
    <div className="relative size-full" data-name="NE-203: Mission">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f6f6fb] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgNe203Mission} />
      </div>
      <div className="absolute backdrop-blur-[14.5px] backdrop-filter bg-gradient-to-r from-[rgba(13,0,77,0.1)] inset-0 to-[rgba(13,0,77,0.1)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1728 1117\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.10000000149011612\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(7.2876e-14 94.75 -127.63 1.1737e-13 864 558.5)\\\'><stop stop-color=\\\'rgba(13,0,77,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,0,77,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute aspect-[1625/974] left-[3.01%] right-[2.95%] top-[calc(50%+71.5px)] translate-y-[-50%]" data-name="MicrosoftTeams-image (9)">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.44%] left-[-20.23%] max-w-none top-[2.38%] w-[144.12%]" src={imgMicrosoftTeamsImage9} />
        </div>
      </div>
      <p className="absolute font-['DM_Mono:Regular',sans-serif] leading-[32px] left-[32px] not-italic text-[#e8e8e8] text-[18px] text-nowrap top-[32px] tracking-[-0.36px]">{`MISSION  \\  COMMAND CLIMATE \ REPORTING MISCONDUCT`}</p>
      <div className="absolute flex h-[199px] items-center justify-center right-[64px] top-[32px] translate-x-[100%] w-[32px]" style={{ "--transform-inner-width": "176.875", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['DM_Mono:Regular',sans-serif] leading-[32px] not-italic relative text-[#e8e8e8] text-[18px] text-nowrap tracking-[-0.36px]">{`PEARSON  \\  NE-203 `}</p>
        </div>
      </div>
      <div className="absolute bg-[#ffce00] bottom-[48px] content-stretch flex gap-[12px] items-center justify-center left-1/2 p-[16px] rounded-[1000px] size-[80px] translate-x-[-50%]" data-name="button">
        <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
          <div className="relative shrink-0 size-[24px]" data-name="trim">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
              <g id="trim">
                <path clipRule="evenodd" d={svgPaths.p1a1e100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e50b00] bottom-[32px] content-stretch flex gap-[12px] items-center justify-center left-[32px] px-[20px] py-[12px] rounded-[1000px]" data-name="button">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-center text-nowrap text-white">End mission</p>
      </div>
    </div>
  );
}