import svgPaths from "./svg-vze9kxt6ft";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682542 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";

function Trim({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative size-full">{children}</div>
      </div>
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
    <Wrapper>
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-nowrap">{text}</p>
    </Wrapper>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#512eab] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[8px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{text}</p>
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

function TableCell() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0" data-name="_table-cell">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
            <Checkbox1 />
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
            <Checkbox1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <Wrapper>
      <div className="bg-[#ebf9f0] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
        <LabelWrapperText text="On Track" />
      </div>
    </Wrapper>
  );
}

function TableCell4() {
  return (
    <Wrapper>
      <div className="bg-[#ebf9f0] content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0" data-name="label-static">
        <LabelWrapperText text="On Track" />
      </div>
    </Wrapper>
  );
}

function TableCell5() {
  return (
    <Wrapper>
      <div className="bg-[#ffe7e5] content-stretch flex items-center pb-[5px] pt-[2px] px-[5px] relative rounded-[4px] shrink-0" data-name="label-static">
        <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Wrapper">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b20900] text-[16px] text-center text-nowrap">
            <p className="leading-[20px]">Struggling</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default function InstructorStudents() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Instructor: Students">
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] h-[1039px] items-center left-0 p-[24px] top-[78px] w-[349px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Status</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[280px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                  <Checkbox />
                </div>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">On Track</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                  <Checkbox />
                </div>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Needs Attention</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-checkbox">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                  <Checkbox />
                </div>
                <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">Struggling</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            <Text text="NE203: Ethics and Moral Reasoning" />
            <Text text="NL110: Applied Behavioral Science" />
            <Text text="NL200: Human Behavior" />
            <Text text="NL310: Organizational Behavior" />
            <Text text="NL400: Law for the Naval Leader" />
            <Text text="NL311: Psychology of Leadership" />
            <Text text="NL411: Human Factors in Combat" />
            <Text text="NL340: Change Management" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[389px] top-[118px] w-[1299px]">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
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
                          <Trim>
                            <path clipRule="evenodd" d={svgPaths.p1626e300} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="icon" />
                          </Trim>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-full" data-name="table (detach me)">
          <div className="content-stretch flex items-center relative shrink-0 w-full z-[1]" data-name="Table">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_table-column">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] py-0 relative shrink-0" data-name="_table-header">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input-checkbox">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_input-checkbox-item">
                      <Checkbox1 />
                    </div>
                  </div>
                </div>
              </div>
              <TableCell />
              <TableCell />
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
                        <Trim>
                          <path clipRule="evenodd" d={svgPaths.p427f780} fill="var(--fill-0, #171717)" fillRule="evenodd" id="icon" />
                        </Trim>
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
              <TableHeaderText text="Course" />
              {[...Array(19).keys()].map((_, i) => (
                <TableCell1>{`NE203: Ethics & Moral Reasoning`}</TableCell1>
              ))}
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_table-column">
              <TableHeaderText text="Status" />
              <TableCell3 />
              <TableCell4 />
              <Wrapper>
                <div className="bg-[#ffebd6] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0" data-name="label-static">
                  <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Wrapper">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[16px] text-center text-nowrap">
                      <p className="leading-[20px]">Needs Attention</p>
                    </div>
                  </div>
                </div>
              </Wrapper>
              <TableCell4 />
              <TableCell4 />
              <TableCell5 />
              <TableCell4 />
              <TableCell5 />
              <TableCell3 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
              <TableCell4 />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-[1728px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682542} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
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
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Students</p>
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
              <TabLabelText text="Assignments" />
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
              <div className="relative shrink-0 size-[16px]" data-name="trim">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
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
    </div>
  );
}