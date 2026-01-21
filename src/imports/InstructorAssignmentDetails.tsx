import svgPaths from "./svg-uws9x6adpo";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682593 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#e8e6f3] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
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

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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
type LabelWrapperTextProps = {
  text: string;
};

function LabelWrapperText({ text }: LabelWrapperTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#006632] text-[16px] text-center text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type TableHeaderTextProps = {
  text: string;
};

function TableHeaderText({ text }: TableHeaderTextProps) {
  return (
    <Wrapper1>
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">{text}</p>
    </Wrapper1>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1d74c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{text}</p>
      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{text1}</p>
    </div>
  );
}
type TabLabelTextProps = {
  text: string;
};

function TabLabelText({ text }: TabLabelTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">{text}</p>
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

function TableCell1() {
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

function TableCell2() {
  return (
    <Wrapper1>
      <div className="bg-[#ebf9f0] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
        <LabelWrapperText text="Complete" />
      </div>
    </Wrapper1>
  );
}

function TableCell3() {
  return (
    <Wrapper1>
      <div className="bg-[#ebf9f0] content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0" data-name="label-static">
        <LabelWrapperText text="Complete" />
      </div>
    </Wrapper1>
  );
}

function TableCell4() {
  return (
    <Wrapper1>
      <div className="bg-[#ffe7e5] content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0" data-name="label-static">
        <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Wrapper">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b20900] text-[16px] text-center text-nowrap">
            <p className="leading-[20px]">Outstanding</p>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}

export default function InstructorAssignmentDetails() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Instructor: Assignment Details">
      <div className="absolute bg-[#e8e6f3] inset-[78px_67.59%_0_0] overflow-clip">
        <div className="absolute content-stretch flex flex-col gap-[32px] inset-[40px_40px_63px_40px] items-start">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
              <Trim>
                <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
              </Trim>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[48px] relative shrink-0 text-[#171717] text-[40px] tracking-[-0.8px] w-full">Crisis Communication Under Pressure</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">Description of the assignment.</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="basis-0 bg-[#ffce00] grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <Wrapper3>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Send Reminder</p>
              </Wrapper3>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <Wrapper3>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                  <p className="leading-[16px]">Extend</p>
                </div>
              </Wrapper3>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <Wrapper4>
                  <g id="CalendarDots">
                    <path d={svgPaths.p1ee32100} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Due</p>
              </div>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">Tue Jan 18, 2026</p>
            </div>
            <div className="content-stretch flex gap-[20px] items-center px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <Wrapper4>
                  <g id="CheckCircle">
                    <path d={svgPaths.p205bf340} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px] w-[120px]">Complete</p>
              </div>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">25/28 students</p>
            </div>
            <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
              <div className="bg-[#0074dd] h-full shrink-0 w-[410.4px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Scenarios</p>
              <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
                    <div className="aspect-[454/240] relative rounded-[4px] shrink-0 w-full" data-name="Midshipman">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
                        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
                        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                      </div>
                      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                            <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                              <p className="leading-[28px]">The Maintenance Dilemma</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                              <p className="leading-[14px]">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-[1728px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682593} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Dashboard" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Scenarios" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Students" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Assignments</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline">
                <div className="size-full">
                  <div className="size-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Analytics" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create</p>
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
              <Trim>
                <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
              </Trim>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]">
            <div className="absolute left-0 size-[48px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" fill="var(--fill-0, #1D5282)" id="Ellipse 1" r="24" />
              </svg>
            </div>
            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col inset-[78px_0_0_32.41%] items-start p-[40px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <Wrapper2>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <Helper text="Complete" text1="25" />
                <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                  <Wrapper5>
                    <g id="Check">
                      <path d={svgPaths.p368ccf00} fill="var(--fill-0, #006632)" id="Vector" />
                    </g>
                  </Wrapper5>
                </div>
              </div>
            </Wrapper2>
            <Wrapper2>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <Helper text="Incomplete" text1="3" />
                <div className="bg-[rgba(255,54,42,0.1)] content-stretch flex items-center justify-between p-[19px] relative rounded-[31px] shrink-0 size-[56px]">
                  <Wrapper5>
                    <g id="Flag">
                      <path d={svgPaths.p38582500} fill="var(--fill-0, #B20900)" id="Vector" />
                    </g>
                  </Wrapper5>
                </div>
              </div>
            </Wrapper2>
            <Wrapper2>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <Helper text="Most struggled with" text1="Consequences" />
              </div>
            </Wrapper2>
          </div>
          <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="table (detach me)">
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
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell />
                <TableCell />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
                <TableCell1 />
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="_table-column">
                <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="_table-header">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center px-[16px] py-0 relative size-full">
                      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">Student</p>
                      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="button-compact (deprecated)">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="controls/sortable">
                          <div className="relative shrink-0 size-[18px]" data-name="trim">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <g id="trim">
                                <path clipRule="evenodd" d={svgPaths.p427f780} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {[...Array(19).keys()].map((_, i) => (
                  <TableCellText text="Thompson, Maya" />
                ))}
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="_table-column">
                <TableHeaderText text="Result" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="-" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="-" />
                <TableCellText text="75%" />
                <TableCellText text="-" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <TableCellText text="75%" />
                <Wrapper>{`NE203: Ethics & Moral Reasoning`}</Wrapper>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_table-column">
                <TableHeaderText text="Status" />
                <TableCell2 />
                <TableCell3 />
                <Wrapper1>
                  <div className="bg-[#ffebd6] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                    <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Wrapper">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[16px] text-center text-nowrap">
                        <p className="leading-[20px]">In progress</p>
                      </div>
                    </div>
                  </div>
                </Wrapper1>
                <TableCell3 />
                <TableCell3 />
                <TableCell4 />
                <TableCell3 />
                <TableCell4 />
                <TableCell2 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
                <TableCell3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}