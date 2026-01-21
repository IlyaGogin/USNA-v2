import svgPaths from "./svg-kugi7pk76b";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">{children}</div>
    </div>
  );
}

function InputMultiSelectField({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">{children}</div>
    </div>
  );
}

function Trim1({ children }: React.PropsWithChildren<{}>) {
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
    <div className="bg-[#efeef7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
type LabelWrapperTextProps = {
  text: string;
};

function LabelWrapperText({ text }: LabelWrapperTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[10px] relative rounded-[20px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['SF_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d5282] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#1d5282] content-stretch flex flex-col items-center justify-center px-[16px] py-[10px] relative rounded-[20px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['SF_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f6f6fb] h-[1452px] left-0 top-0 w-[1728px]" />
      <div className="absolute content-stretch flex flex-col items-center left-[464px] top-0 w-[800px]">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <Text text="1" />
            <div className="bg-[#1d5282] h-[2px] rounded-[5px] shrink-0 w-[89px]" />
            <Text text="2" />
            <div className="bg-[rgba(29,82,130,0.1)] h-[2px] rounded-[5px] shrink-0 w-[89px]" />
            <Text1 text="3" />
            <div className="bg-[rgba(29,82,130,0.1)] h-[2px] rounded-[5px] shrink-0 w-[89px]" />
            <Text1 text="4" />
            <div className="bg-[rgba(29,82,130,0.1)] h-[2px] rounded-[5px] shrink-0 w-[89px]" />
            <Text1 text="5" />
          </div>
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-center relative shrink-0 text-center w-[292px]">
            <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">{`Course & Learning Objectives`}</p>
            <p className="leading-[14px] relative shrink-0 text-[#5d5d5d] text-[12px] w-full">Select the course content this scenario will address</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
          <Wrapper1>
            <div className="content-stretch flex flex-col items-start px-[40px] py-[64px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-multi-select">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-field-label">
                  <LabelWrapperText text="Select Area*" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <InputMultiSelectField>
                    <Input>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Ethics (NE)</p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                          <Trim />
                        </div>
                      </div>
                    </Input>
                  </InputMultiSelectField>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Moral reasoning and ethical decision-making</p>
              </div>
            </div>
          </Wrapper1>
          <Wrapper1>
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[40px] py-[64px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="input-multi-select">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-field-label">
                  <LabelWrapperText text="Select Course*" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <InputMultiSelectField>
                    <Input>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">NE203: Ethics and Moral Reasoning</p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                          <Trim />
                        </div>
                      </div>
                    </Input>
                  </InputMultiSelectField>
                </div>
              </div>
              <Wrapper>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input">
                    <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px]">{`Credits: 3-0-3   ·   Year: 3/C`}</p>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">This course is designed for midshipmen to evaluate the moral responsibilities inherent in military leadership, responsibilities that require discerning moral perception, reflective ethical deliberation, and the development of moral virtue.</p>
                </div>
              </Wrapper>
            </div>
          </Wrapper1>
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start px-[40px] py-[64px] relative w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-multi-select">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-field-label">
                    <LabelWrapperText text="Module" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <InputMultiSelectField>
                      <Input>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Module 1: Organizational Culture and Climate</p>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_dropdown-indicator">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Dropdown Collapse Icon">
                            <Trim />
                          </div>
                        </div>
                      </Input>
                    </InputMultiSelectField>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464646] text-[14px] w-full">Topics: Culture formation, Values alignment, Change management</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                    <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Learning Objectives*</p>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[1000px] shrink-0" data-name="button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[14px] text-center text-nowrap">
                          <p className="leading-[16px]">Select all</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[1000px] shrink-0" data-name="button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b20900] text-[14px] text-center text-nowrap">
                          <p className="leading-[16px]">Clear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Wrapper>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                          <Checkbox />
                        </div>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Analyze organizational culture elements</p>
                      </div>
                    </div>
                  </Wrapper>
                  <Wrapper>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                          <Checkbox />
                        </div>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Evaluate impact of leadership on culture</p>
                      </div>
                    </div>
                  </Wrapper>
                  <Wrapper>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                          <Checkbox />
                        </div>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Design culture change initiatives</p>
                      </div>
                    </div>
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between px-0 py-[32px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
              <Trim1>
                <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
              </Trim1>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">Previous</p>
            </div>
          </div>
          <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Next step</p>
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
              <Trim1>
                <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
              </Trim1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}