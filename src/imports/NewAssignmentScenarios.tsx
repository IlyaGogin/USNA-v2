import svgPaths from "./svg-xfx7sr1noz";
import imgInstructor from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
    </div>
  );
}

function Trim({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="aspect-[288/180] relative shrink-0 w-full">
      <Image />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ScenarioCard() {
  return (
    <Wrapper1>
      <Wrapper>
        <Text text="NE-203" />
      </Wrapper>
      <Helper />
    </Wrapper1>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">{"The Inner Ring"}</p>
                <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Social Influence & Peer Pressure`}</p>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{"Train participants to recognize and resist unhealthy social pressures to belong to exclusive “inner rings” or in-groups."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor} />
      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[28px]">{text}</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
        <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
          <p className="leading-[14px]">{"HARD"}</p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
        </div>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}

export default function NewAssignmentScenarios() {
  return (
    <div className="bg-white relative size-full" data-name="New Assignment: Scenarios">
      <div className="absolute content-stretch flex flex-col h-[1117px] items-start left-0 px-[32px] py-0 right-[32.87%] top-0">
        <div className="content-stretch flex items-center justify-between px-0 py-[40px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
                <Trim>
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                </Trim>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New assignment</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <ButtonText text="Cancel" />
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center p-[80px] relative size-full">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center max-w-[800px] min-h-px min-w-px relative shrink-0" data-name="input-search">
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
                        <div aria-hidden="true" className="absolute border border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Search...</p>
                            <div className="content-stretch flex items-center relative shrink-0" data-name="_input-combobox-action">
                              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="control-wrapper">
                                <div className="content-stretch flex items-center relative shrink-0" data-name="controls/search">
                                  <div className="relative shrink-0 size-[18px]" data-name="trim">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                      <g id="trim">
                                        <path clipRule="evenodd" d={svgPaths.p1626e300} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <ButtonText text="Filter" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">1 scenario selected</p>
                  <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
                    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                      <Trim>
                        <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                      </Trim>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Scenario Card">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                          <Image />
                          <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-end justify-between p-[16px] relative size-full">
                              <div className="content-stretch flex items-center justify-center relative rounded-[1440px] shrink-0" data-name="_input-checkbox-item">
                                <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[1440px]" />
                                <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
                                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 82, 130, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                      <g id="Checkbox">
                                        <path d={svgPaths.p1ebded00} fill="var(--fill-0, #1D5282)" />
                                        <path d={svgPaths.p1de71f00} fill="var(--fill-0, white)" id="check mark" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <Text text="NE-203" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                        </div>
                        <Helper />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#1d74c2] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
                    </div>
                    {[...Array(2).keys()].map((_, i) => (
                      <ScenarioCard />
                    ))}
                  </div>
                  {[...Array(2).keys()].map((_, i) => (
                    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                      <Wrapper1>
                        <Wrapper>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                              <p className="leading-[28px]">NE-203</p>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                              <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                                <p className="leading-[14px]">EASY</p>
                              </div>
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                              </div>
                            </div>
                          </div>
                        </Wrapper>
                        <Helper />
                      </Wrapper1>
                      <Wrapper1>
                        <Wrapper>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                              <p className="leading-[28px]">NE-203</p>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                              <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                                <p className="leading-[14px]">INT</p>
                              </div>
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                                <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                              </div>
                            </div>
                          </div>
                        </Wrapper>
                        <Helper />
                      </Wrapper1>
                      <ScenarioCard />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">Select scenarios</p>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Choose which scenarios you want the Midshipmen to complete. Select as many as you need.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <div className="relative shrink-0 size-[24px]" data-name="Book">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Book">
                      <path d={svgPaths.p3f64b100} fill="var(--fill-0, #171717)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">The Inner Ring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}