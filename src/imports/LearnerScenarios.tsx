import svgPaths from "./svg-2s4vjry5ri";
import imgScenarioCard from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";
import imgScenarioCard1 from "figma:asset/b779ee82ddb43e48acba6d3e4b1deaae48a83e0b.png";
import imgInstructor from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[8px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[16px]">{children}</p>
        </div>
      </div>
    </div>
  );
}
type TabLabelBackgroundImageAndTextProps = {
  text: string;
};

function TabLabelBackgroundImageAndText({ text }: TabLabelBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage>{text}</BackgroundImage>;
}

export default function LearnerScenarios() {
  return (
    <div className="bg-[#efeef7] relative size-full" data-name="Learner: Scenarios">
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] h-[1039px] items-center left-0 p-[24px] top-[78px] w-[349px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="aspect-[441/288] relative rounded-[8px] shrink-0 w-full" data-name="Scenario Card">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard1} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(rgba(21, 34, 56, 0.6) 19.038%, rgba(21, 34, 56, 0) 30.287%), linear-gradient(185.887948deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col h-[197px] items-start justify-between left-0 p-[16px] top-0 w-[301px]">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e8e8e8] text-[14px] text-shadow-[0px_2px_1px_rgba(13,0,77,0.15),0px_1px_1px_rgba(13,0,77,0.1),0px_1px_3px_rgba(13,0,77,0.05)] w-full">Get recommendations from your mentor</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                        <p className="leading-[28px] min-w-full relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-[min-content]">Admiral McRaven</p>
                        <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-nowrap">Ethics Mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Area</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            <BackgroundImageAndText text="Ethics" />
            <BackgroundImageAndText text="Leadership" />
            <BackgroundImage>{`Philosophy & Psychology`}</BackgroundImage>
            <BackgroundImage>{`Language & Communication`}</BackgroundImage>
            <BackgroundImageAndText text="Coaching" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#171717] text-[16px] text-nowrap">Course</p>
          <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
            <BackgroundImageAndText text="NE203: Ethics and Moral Reasoning" />
            <BackgroundImageAndText text="NL110: Applied Behavioral Science" />
            <BackgroundImageAndText text="NL200: Human Behavior" />
            <BackgroundImageAndText text="NL310: Organizational Behavior" />
            <BackgroundImageAndText text="NL400: Law for the Naval Leader" />
            <BackgroundImageAndText text="NL311: Psychology of Leadership" />
            <BackgroundImageAndText text="NL411: Human Factors in Combat" />
            <BackgroundImageAndText text="NL340: Change Management" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[389px] top-[118px] w-[1299px]">
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
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          {[...Array(3).keys()].map((_, i) => (
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              {[...Array(3).keys()].map((_, i) => (
                <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
                  <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                            <p className="leading-[28px]">NE-203</p>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                            <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                              <p className="leading-[14px]">HARD</p>
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
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                              <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">The Inner Ring</p>
                              <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Social Influence & Peer Pressure`}</p>
                            </div>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Train participants to recognize and resist unhealthy social pressures to belong to exclusive “inner rings” or in-groups.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
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
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Dashboard" />
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
              <TabLabelBackgroundImageAndText text="Skills Profile" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <TabLabelBackgroundImageAndText text="Physical Development" />
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
    </div>
  );
}