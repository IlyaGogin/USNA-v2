import svgPaths from "./svg-7qw9nlb5ai";
import imgScenarioCard from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgScenarioCard1 from "figma:asset/b779ee82ddb43e48acba6d3e4b1deaae48a83e0b.png";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative size-full">
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Scenario Card">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard1} />
          <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(187.530674deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
        </div>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-end p-[24px]">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-[min-content]">Talk with your digital mentor</p>
                    <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-nowrap">Admiral McRaven // Ethics Mentor</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="ArrowUpRight">
                    <path d={svgPaths.p2c65ca00} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
      </div>
    </div>
  );
}