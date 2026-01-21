import svgPaths from "./svg-4x6020qtlb";
import imgRectangle12176 from "figma:asset/c199ccfd162cd14d2f50a6bac646c6a8366c90e6.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgScenarioCard from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function InputBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <div className="content-stretch flex items-center p-[12px] relative size-full">{children}</div>
    </BackgroundImage1>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[rgba(29,82,130,0.12)] grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[31px] items-center not-italic px-[32px] py-[19px] relative text-[#1d5282] w-full">{children}</div>
      </div>
    </div>
  );
}

function LabelBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function TrimBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function TrimBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trim">
          <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#f6f6fb] relative size-full" data-name="MacBook Pro 16' - 21">
      <div className="absolute bg-[#1d5282] h-[1117px] left-0 overflow-clip top-0 w-[301px]">
        <div className="absolute contents left-[20px] top-[24px]">
          <div className="absolute left-[20px] size-[88px] top-[24px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="absolute contents left-[112px] top-[47px]" data-name="Mask group">
            <div className="absolute bg-white h-[49px] left-[110px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[140px_46px] top-[45px] w-[143px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[24px] px-[20px] py-[12px] rounded-[1000px] top-[131px] w-[253px]" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Create Scenario</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
            <TrimBackgroundImage1>
              <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
            </TrimBackgroundImage1>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[203px] w-[165px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none h-full rotate-[270deg] scale-y-[-100%]">
                  <div className="content-stretch flex flex-col h-full items-start relative w-[44px]" data-name="_tabs-item-border">
                    <div className="bg-[#fcc32a] h-[4px] relative shrink-0 w-full" data-name="Underline">
                      <div className="size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[12px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
                    <BackgroundImage2>
                      <g id="Books">
                        <path d={svgPaths.p30e35700} fill="var(--fill-0, #FCC32A)" id="Vector" />
                      </g>
                    </BackgroundImage2>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">SCENARIOS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
            <LabelBackgroundImage>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
                <BackgroundImage2>
                  <g id="ChartBar">
                    <path d={svgPaths.p3cf02090} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </BackgroundImage2>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">REPORTS</p>
              </div>
            </LabelBackgroundImage>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
            <LabelBackgroundImage>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
                <BackgroundImage2>
                  <g id="ChartLine">
                    <path d={svgPaths.p6e42a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </BackgroundImage2>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">INSIGHTS</p>
              </div>
            </LabelBackgroundImage>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs-vertical">
            <LabelBackgroundImage>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_tab-label">
                <BackgroundImage2>
                  <g id="Users">
                    <path d={svgPaths.p82d3500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                  </g>
                </BackgroundImage2>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">ADMIN</p>
              </div>
            </LabelBackgroundImage>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[333px] top-[367px] w-[1363px]">
        {[...Array(3).keys()].map((_, i) => (
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
            {[...Array(3).keys()].map((_, i) => (
              <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Scenario Card">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
                  <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(185.887948deg, rgba(29, 82, 130, 0) 6.8189%, rgba(21, 34, 56, 0.93) 62.485%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 64.452%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[96px] items-start justify-center pb-[16px] pt-[24px] px-[24px] relative w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0" data-name="label-static">
                            <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Wrapper">
                              <div className="content-stretch flex items-center relative shrink-0" data-name="bullets/dot">
                                <TrimBackgroundImage1>
                                  <circle cx="8" cy="8" fill="var(--fill-0, #006632)" id="icon" r="3" />
                                </TrimBackgroundImage1>
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
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                                <p className="leading-[28px] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">The Inner Ring</p>
                                <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] w-full">{`Social Influence & Peer Pressure`}</p>
                              </div>
                              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9ccbf6] text-[14px] w-full">Train participants to recognize and resist unhealthy social pressures to belong to exclusive “inner rings” or in-groups.</p>
                            </div>
                          </div>
                          <p className="font-['SF_Mono:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#50a2ec] text-[10px] w-full">LAST EDIT // 1 WEEK AGO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[1045px] w-[253px]">
        <div className="relative shrink-0 size-[48px]">
          <div className="absolute left-0 size-[48px] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="var(--fill-0, #153C60)" id="Ellipse 1" r="24" />
            </svg>
          </div>
          <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
        </div>
        <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <p className="leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] w-full">Charlie Mitchell</p>
          <p className="leading-[14px] relative shrink-0 text-[#fcc32a] text-[12px] w-full">charlie.mitchell2@pearson.com</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[333px] top-[40px] w-[1363px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[12px] items-start relative shrink-0 w-[641px]">
            <p className="leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">Welcome, LCDR Smith</p>
            <p className="leading-[20px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Create and manage leadership and ethics scenarios aligned to LEL course objectives</p>
          </div>
          <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create Scenario</p>
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
              <TrimBackgroundImage1>
                <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
              </TrimBackgroundImage1>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <BackgroundImage>
            <div className="basis-0 font-['SF_Mono:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px opacity-70 relative shrink-0 text-[16px]">
              <p className="mb-[8px]">{`TOTAL `}</p>
              <p>SCENARIOS</p>
            </div>
            <p className="font-['SF_Mono:Light',sans-serif] leading-[56px] relative shrink-0 text-[56px] text-nowrap">8</p>
          </BackgroundImage>
          <BackgroundImage>
            <div className="basis-0 font-['SF_Mono:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px opacity-70 relative shrink-0 text-[16px]">
              <p className="mb-[8px]">{`PUBLISHED `}</p>
              <p>SCENARIOS</p>
            </div>
            <p className="font-['SF_Mono:Light',sans-serif] leading-[56px] relative shrink-0 text-[56px] text-nowrap">8</p>
          </BackgroundImage>
          <BackgroundImage>
            <p className="basis-0 font-['SF_Mono:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px opacity-70 relative shrink-0 text-[16px]">
              IN
              <br aria-hidden="true" />
              PROGRESS
            </p>
            <p className="font-['SF_Mono:Light',sans-serif] leading-[56px] relative shrink-0 text-[56px] text-nowrap">0</p>
          </BackgroundImage>
          <BackgroundImage>
            <div className="basis-0 font-['SF_Mono:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px opacity-70 relative shrink-0 text-[16px]">
              <p className="mb-[8px]">COMPLETED</p>
              <p>USES</p>
            </div>
            <p className="font-['SF_Mono:Light',sans-serif] leading-[56px] relative shrink-0 text-[56px] text-nowrap">0</p>
          </BackgroundImage>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-search">
            <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
              <BackgroundImage1>
                <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Search...</p>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="_input-combobox-action">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="control-wrapper">
                      <div className="content-stretch flex items-center relative shrink-0" data-name="controls/search">
                        <BackgroundImage2>
                          <g id="trim">
                            <path clipRule="evenodd" d={svgPaths.p1626e300} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                          </g>
                        </BackgroundImage2>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundImage1>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <BackgroundImage3>
                <InputBackgroundImage>
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Area</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                      <TrimBackgroundImage />
                    </div>
                  </div>
                </InputBackgroundImage>
              </BackgroundImage3>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <BackgroundImage3>
                <InputBackgroundImage>
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Course</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                      <TrimBackgroundImage />
                    </div>
                  </div>
                </InputBackgroundImage>
              </BackgroundImage3>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <BackgroundImage3>
                <InputBackgroundImage>
                  <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Status</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                      <TrimBackgroundImage />
                    </div>
                  </div>
                </InputBackgroundImage>
              </BackgroundImage3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}