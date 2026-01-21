import svgPaths from "./svg-5ytmhj2wot";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center p-[12px] relative size-full">{children}</div>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[rgba(29,82,130,0.1)] grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['SF_Mono:Medium',sans-serif] gap-[31px] items-center not-italic px-[32px] py-[19px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Trim() {
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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[12px] items-start relative shrink-0 w-[641px]">
          <p className="leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">Welcome, LCDR Smith</p>
          <p className="leading-[20px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Create and manage leadership and ethics scenarios aligned to LEL course objectives</p>
        </div>
        <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create Scenario</p>
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
            <div className="relative shrink-0 size-[16px]" data-name="trim">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="trim">
                  <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <Wrapper>
          <div className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5d5d5d] text-[16px]">
            <p className="mb-[8px]">{`TOTAL `}</p>
            <p>SCENARIOS</p>
          </div>
          <p className="leading-[56px] relative shrink-0 text-[#1d5282] text-[56px] text-nowrap">8</p>
        </Wrapper>
        <Wrapper>
          <div className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5d5d5d] text-[16px]">
            <p className="mb-[8px]">{`PUBLISHED `}</p>
            <p>SCENARIOS</p>
          </div>
          <p className="leading-[56px] relative shrink-0 text-[#1d5282] text-[56px] text-nowrap">8</p>
        </Wrapper>
        <Wrapper>
          <p className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5d5d5d] text-[16px]">
            IN
            <br aria-hidden="true" />
            PROGRESS
          </p>
          <p className="leading-[56px] relative shrink-0 text-[#1d5282] text-[56px] text-nowrap">0</p>
        </Wrapper>
        <Wrapper>
          <div className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5d5d5d] text-[16px]">
            <p className="mb-[8px]">COMPLETED</p>
            <p>USES</p>
          </div>
          <p className="leading-[56px] relative shrink-0 text-[#1d5282] text-[56px] text-nowrap">0</p>
        </Wrapper>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-search">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Wrapper1>
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
            </Wrapper1>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <Wrapper2>
              <Input>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Area</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                    <Trim />
                  </div>
                </div>
              </Input>
            </Wrapper2>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <Wrapper2>
              <Input>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Course</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                    <Trim />
                  </div>
                </div>
              </Input>
            </Wrapper2>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="input-multi-select">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <Wrapper2>
              <Input>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Status</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                    <Trim />
                  </div>
                </div>
              </Input>
            </Wrapper2>
          </div>
        </div>
      </div>
    </div>
  );
}