import svgPaths from "./svg-hmxhpa9dwt";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper>{children}</Wrapper>
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[320px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] w-full">{text}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{text1}</p>
    </div>
  );
}

export default function NewAssignmentDetails() {
  return (
    <div className="bg-white relative size-full" data-name="New Assignment: Details">
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
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[56px] items-center p-[80px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <Helper text="Assignment name" text1="Give this assignment a name and assign any tags. Tags allow you to assign scenarios to specific cohorts or leadership development tracks." />
                  <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-line">
                      <Wrapper1>
                        <Input>
                          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Name*</p>
                        </Input>
                      </Wrapper1>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-multi-select">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <Wrapper1>
                            <Input>
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Tags</p>
                              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                                <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                                  <Wrapper2>
                                    <g id="trim">
                                      <path clipRule="evenodd" d={svgPaths.p2b132cf0} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                                    </g>
                                  </Wrapper2>
                                </div>
                              </div>
                            </Input>
                          </Wrapper1>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                        <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                        <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                          <Trim>
                            <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                          </Trim>
                        </div>
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                          <p className="leading-[16px]">Create Tag</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  <Helper text="Description" text1="Describe any additional context or instructions for midshipmen." />
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-text-area">
                    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="_input_text_area_field">
                      <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
                        <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <Wrapper>
                          <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow h-full leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#464646] text-[16px] text-nowrap">Description*</p>
                          <div className="absolute bottom-[3px] right-[3px] size-[8px]" data-name="_input-text-area-expand">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                              <g id="_input-text-area-expand">
                                <line id="Line 1" stroke="var(--stroke-0, #512EAB)" x1="0.646447" x2="7.01041" y1="7.30331" y2="0.939346" />
                                <line id="Line 2" stroke="var(--stroke-0, #512EAB)" x1="4.64645" x2="6.76777" y1="7.07107" y2="4.94975" />
                              </g>
                            </svg>
                          </div>
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[88px] items-start px-0 py-[56px] relative shrink-0 w-full">
                  <Helper text="Due date" text1="When is the assignment due?" />
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[528px]">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-date">
                      <div className="content-stretch flex flex-col items-start justify-center min-w-[220px] relative shrink-0 w-full" data-name="_input-date-field">
                        <div className="bg-white h-[50px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#2e2e2e] text-[16px]">dd/mm/yy</p>
                              <div className="content-stretch flex items-center relative shrink-0" data-name="controls/date">
                                <div className="relative shrink-0 size-[18px]" data-name="trim">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                    <g id="trim">
                                      <path clipRule="evenodd" d={svgPaths.p6e8f100} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-switch">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Field">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-nowrap">
                          <p className="leading-[20px]">Don’t set a due date</p>
                        </div>
                        <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px]" data-name="_switch-item">
                          <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[20px]" />
                          <Wrapper2>
                            <circle cx="12" cy="12" fill="var(--fill-0, #1D5282)" id="Switch" r="12" />
                          </Wrapper2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                  <Trim>
                    <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                  </Trim>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">
          <p className="mb-0">{`Fill out `}</p>
          <p>assignment details</p>
        </div>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Create a name and description for your assignment, and set a due date to let Midshipmen know the details of the assignment.</p>
      </div>
    </div>
  );
}