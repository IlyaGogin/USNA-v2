import svgPaths from "./svg-799rv86d4z";
import imgScenarioCard from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";
import imgScenarioCard1 from "figma:asset/b779ee82ddb43e48acba6d3e4b1deaae48a83e0b.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgEllipse1 from "figma:asset/7fd7eac2510bc98d4055eb243441bfb65a516c11.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6f6fb] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trim">{children}</g>
      </svg>
    </div>
  );
}

function Trim() {
  return (
    <Wrapper>
      <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
    </Wrapper>
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

export default function LearnerMentor() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Learner: Mentor">
      <div className="absolute h-[991px] left-[24px] rounded-[8px] top-[102px] w-[1306px]" data-name="Scenario Card">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute h-[106.59%] left-[-7.7%] max-w-none top-[-0.84%] w-[120.45%]" src={imgScenarioCard1} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(29,82,130,0)] inset-0 rounded-[8px] to-[82.493%] to-[rgba(18,50,79,0.2)]" />
        </div>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bg-[#e50b00] content-stretch flex gap-[12px] items-center justify-center left-[627px] p-[16px] rounded-[1000px] shadow-[0px_1px_14px_0px_rgba(13,0,77,0.05),0px_5px_8px_0px_rgba(13,0,77,0.1),0px_3px_5px_-1px_rgba(13,0,77,0.15)] top-[908px]" data-name="button">
            <div className="relative shrink-0 size-[20px]" data-name="PhoneDisconnect">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="PhoneDisconnect">
                  <path d={svgPaths.p15f55980} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-[1728px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.228px_1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Dashboard" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_tab-label">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Scenarios</p>
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
              <TabLabelText text="Skills Profile" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelText text="Physical Development" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
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
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col h-[1039px] items-start justify-between left-[1354px] p-[24px] top-[78px] w-[374px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
              <Wrapper>
                <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
              </Wrapper>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
              <p className="leading-[16px]">Back</p>
            </div>
          </div>
          <div className="bg-[#f6f6fb] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
                <div className="relative shrink-0 size-[48px]">
                  <img alt="" className="block max-w-none size-full" height="48" src={imgEllipse1} width="48" />
                </div>
                <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                  <p className="leading-[16px] relative shrink-0 text-[#171717] text-[14px] w-full">Admiral McRaven</p>
                  <p className="leading-[14px] relative shrink-0 text-[#0074dd] text-[12px] w-full">Ethics Mentor</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                  <Trim />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <Wrapper1>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px]">Recommend scenarios</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Trim />
              </div>
            </Wrapper1>
            <Wrapper1>
              <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px]">Review performance</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                <Trim />
              </div>
            </Wrapper1>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-text-line">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="_input_text_line_field">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
                  <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center p-[12px] relative size-full">
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}