import svgPaths from "./svg-6zn8zvy6qq";

function Trim1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trim">{children}</g>
      </svg>
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

function TableCell1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap w-full">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function TableCell() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0" data-name="_table-cell">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0 w-[50px]" data-name="_table-cell">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewAssignmentStudents() {
  return (
    <div className="bg-white relative size-full" data-name="New Assignment: Students">
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
                                  <Trim1>
                                    <path clipRule="evenodd" d={svgPaths.p1626e300} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                                  </Trim1>
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
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">1 student selected</p>
                  <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
                    <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                      <Trim>
                        <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                      </Trim>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[8px] shrink-0 w-full" data-name="table (detach me)">
                  <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="content-stretch flex items-center relative shrink-0 w-full z-[1]" data-name="Table">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_table-column">
                        <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0" data-name="_table-header">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                                <Checkbox />
                              </div>
                            </div>
                          </div>
                        </div>
                        <TableCell />
                        <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0" data-name="_table-cell">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                              <div className="content-stretch flex items-center justify-center relative rounded-[1440px] shrink-0" data-name="_input-checkbox-item">
                                <div aria-hidden="true" className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[1440px]" />
                                <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
                                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 116, 194, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                      <g id="Checkbox">
                                        <path d={svgPaths.p1ebded00} fill="var(--fill-0, #1D74C2)" />
                                        <path d={svgPaths.p1de71f00} fill="var(--fill-0, white)" id="check mark" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <TableCell />
                        <TableCell />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell />
                        <TableCell />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                        <TableCell2 />
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="_table-column">
                        <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="_table-header">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[2px] items-center px-[16px] py-0 relative size-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Student</p>
                              <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="button-compact (deprecated)">
                                <div className="content-stretch flex items-center relative shrink-0" data-name="controls/sortable">
                                  <Trim1>
                                    <path clipRule="evenodd" d={svgPaths.p427f780} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                                  </Trim1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {[...Array(19).keys()].map((_, i) => (
                          <TableCell1>Maya Thompson</TableCell1>
                        ))}
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]" data-name="_table-column">
                        <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="_table-header">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
                            </div>
                          </div>
                        </div>
                        {[...Array(19).keys()].map((_, i) => (
                          <TableCell1>{`NE203: Ethics & Moral Reasoning`}</TableCell1>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efeef7] content-stretch flex flex-col gap-[32px] inset-[0_0_0_67.13%] items-start justify-center px-[40px] py-0">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">Assign students</p>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px opacity-10 shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Choose which Midshipmen you want to complete the assignment.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <div className="relative shrink-0 size-[24px]" data-name="UserCircle">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="UserCircle">
                      <path d={svgPaths.p36f904f0} fill="var(--fill-0, #171717)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Thompson, Maya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}