import svgPaths from "./svg-1bkziqxa7x";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">{children}</div>
      </div>
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
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[20px] shrink-0 w-[64px]">
        <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Wrapper1>
          <circle cx="12" cy="12" fill="var(--fill-0, #1D5282)" id="Switch" r="12" />
        </Wrapper1>
      </div>
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{text}</p>
    </div>
  );
}

export default function NewAssignmentAdditionalSettings() {
  return (
    <div className="bg-white relative size-full" data-name="New Assignment: Additional Settings">
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
              <div className="content-stretch flex items-start px-0 py-[56px] relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <Wrapper>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <InputText text="Allow multiple attempts" />
                    </div>
                  </Wrapper>
                  <Wrapper>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <InputText text="Include AI mentor guidance" />
                    </div>
                  </Wrapper>
                  <Wrapper>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <InputText text="Share results with midshipman’s academic advisor" />
                    </div>
                  </Wrapper>
                  <Wrapper>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <InputText text="Send reminder notifications" />
                    </div>
                  </Wrapper>
                </div>
              </div>
              <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Launch assignment</p>
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
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">Additional settings</p>
        <div className="content-stretch flex gap-[4px] h-[3px] items-center relative shrink-0 w-full">
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
          <div className="basis-0 bg-[#171717] grow h-full min-h-px min-w-px shrink-0" />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Let us know if you want any of these additional settings before launching your assignment.</p>
        <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[24px] relative w-full">
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                <div className="flex flex-col justify-center relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">
                  <p className="leading-[28px]">Assignment title</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[#0074dd] text-[12px] w-full">
                  <p className="leading-[14px]">Description of the assignement</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper1>
                  <g id="CalendarDots">
                    <path d={svgPaths.p2749cb80} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Tue, 2 Jan 2026</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper1>
                  <g id="Book">
                    <path d={svgPaths.p3f64b100} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">The Inner Ring, The Inner Ring, The Inner Ring</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative shrink-0">
                <Wrapper1>
                  <g id="UserCircle">
                    <path d={svgPaths.p36f904f0} fill="var(--fill-0, #171717)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-[408px]">Thompson, Maya / Thompson, Maya / Thompson Maya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}