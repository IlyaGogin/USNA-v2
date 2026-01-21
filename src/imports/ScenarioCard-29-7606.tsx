import imgFrame6 from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";

export default function ScenarioCard() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Scenario Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[159px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#ede2e2] inset-0" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame6} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(29, 82, 130, 0.16) 0%, rgba(29, 82, 130, 0.16) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex items-end p-[24px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
                      <div className="relative shrink-0 size-[16px]" data-name="trim">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="trim">
                            <circle cx="8" cy="8" fill="var(--fill-0, #006632)" id="icon" r="3" />
                          </g>
                        </svg>
                      </div>
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
                      <p className="leading-[16px]">Hard: 5/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                    <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">The Inner Ring</p>
                    <p className="leading-[20px] relative shrink-0 text-[#2877be] text-[16px] w-full">{`Social Influence & Peer Pressure`}</p>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#171717] text-[14px] w-full">Train participants to recognize and resist unhealthy social pressures to belong to exclusive “inner rings” or in-groups.</p>
                </div>
              </div>
              <p className="font-['SF_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] w-full">LAST EDIT // 1 WEEK AGO</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}