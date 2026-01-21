import svgPaths from "./svg-wqkaiqu7mk";

function Trim() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

export default function ModalAddCriteria() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Modal: Add Criteria">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[16px] pt-0 px-[16px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px]">Personal Details</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Trim />
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px]">{`Data & Privacy`}</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Trim />
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                <div className="relative shrink-0 size-[6px]">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 176, 87, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                      <circle cx="3" cy="3" fill="var(--fill-0, #00B057)" id="Ellipse 22" r="3" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#171717] text-[14px] text-nowrap">Revibe connection</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Trim />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="bg-[#e50b00] content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Sign out</p>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[16px]" data-name="Trail Icon">
                <div className="relative shrink-0 size-[18px]" data-name="box">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="box">
                      <path d={svgPaths.p8ae4c80} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}