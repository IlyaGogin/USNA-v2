import svgPaths from "./svg-5f0c44d6m0";

export default function ModalAddObjective() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full" data-name="Modal: Add Objective">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Add objective</p>
            <div className="relative shrink-0 size-[24px]" data-name="X">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="X">
                  <path d={svgPaths.pd841500} fill="var(--fill-0, #171717)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-area">
            <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="_input_text_area_field">
              <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
                <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[12px] relative size-full">
                    <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow h-full leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Learning objective</p>
                    <div className="absolute bottom-[3px] right-[3px] size-[8px]" data-name="_input-text-area-expand">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <g id="_input-text-area-expand">
                          <line id="Line 1" stroke="var(--stroke-0, #512EAB)" x1="0.646447" x2="7.01041" y1="7.30331" y2="0.939346" />
                          <line id="Line 2" stroke="var(--stroke-0, #512EAB)" x1="4.64645" x2="6.76777" y1="7.07107" y2="4.94975" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
            <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <div className="relative shrink-0 size-[16px]" data-name="trim">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
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