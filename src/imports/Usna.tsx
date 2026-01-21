import svgPaths from "./svg-d9dnrwxj02";
import clsx from "clsx";
import imgImage from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgImage1 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Trim1Props = {
  additionalClassNames?: string;
};

function Trim1({ children, additionalClassNames = "" }: React.PropsWithChildren<Trim1Props>) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <g id="trim">{children}</g>
    </Wrapper>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[117px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type ParagraphText9Props = {
  text: string;
};

function ParagraphText9({ text }: ParagraphText9Props) {
  return (
    <div className="absolute h-[28px] left-[21.66px] top-0 w-[522.344px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#171717] text-[18px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type ParagraphText8Props = {
  text: string;
};

function ParagraphText8({ text }: ParagraphText8Props) {
  return <Wrapper1>{text}</Wrapper1>;
}
type ParagraphText7Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText7({ text, additionalClassNames = "" }: ParagraphText7Props) {
  return (
    <div className={clsx("h-[24px] w-[544px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">{text}</p>
    </div>
  );
}
type ParagraphText6Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText6({ text, additionalClassNames = "" }: ParagraphText6Props) {
  return (
    <div className={clsx("absolute h-[28px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#5d5d5d] text-[18px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type ParagraphText5Props = {
  text: string;
};

function ParagraphText5({ text }: ParagraphText5Props) {
  return (
    <Wrapper2 additionalClassNames="h-[22px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] text-nowrap top-0">{text}</p>
    </Wrapper2>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="absolute h-[24px] left-0 top-[30px] w-[403px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">{text}</p>
    </div>
  );
}
type ParagraphText4Props = {
  text: string;
};

function ParagraphText4({ text }: ParagraphText4Props) {
  return (
    <Wrapper3 additionalClassNames="h-[22px] w-[56px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[56.17px] text-[#1d5282] text-[18px] text-right top-0 translate-x-[-100%] w-[40px]">{text}</p>
    </Wrapper3>
  );
}
type ParagraphText3Props = {
  text: string;
};

function ParagraphText3({ text }: ParagraphText3Props) {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[30.938px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[15.5px] text-[#0d004d] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">{text}</p>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return (
    <Wrapper3 additionalClassNames="h-[16px] w-[29.938px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[15.01px] text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]">{text}</p>
    </Wrapper3>
  );
}
type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[28.078px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[14.51px] text-[#0d004d] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[403px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-0 text-[#171717] text-[18px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[22px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-0 text-[#171717] text-[18px] text-nowrap top-0">{text}</p>
    </Wrapper4>
  );
}

function Trim() {
  return (
    <div className="absolute contents inset-[12.5%]">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p26d43300} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
        </svg>
      </div>
    </div>
  );
}

export default function Usna() {
  return (
    <div className="bg-white relative size-full" data-name="USNA">
      <div className="absolute bg-[#f6f6fb] h-[951px] left-0 top-0 w-[1359px]" data-name="App" />
      <div className="absolute bg-white h-[951px] left-0 overflow-clip top-0 w-[1359px]" data-name="ScenarioCreationNew">
        <div className="absolute h-[951px] left-0 top-0 w-[910.531px]" data-name="Container">
          <div className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid h-[133px] left-[32px] top-0 w-[846.531px]" data-name="Container">
            <div className="absolute h-[44px] left-0 top-[44px] w-[259.438px]" data-name="Container">
              <div className="absolute border-2 border-[#0d004d] border-solid left-0 rounded-[1000px] size-[44px] top-0" data-name="Button">
                <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[12px]" data-name="Container">
                  <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Trim />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex h-[40px] items-start left-[60px] top-[2px] w-[199.438px]" data-name="Paragraph">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">New scenario</p>
              </div>
            </div>
            <div className="absolute content-stretch flex h-[52px] items-center justify-center left-[740.5px] p-[2px] rounded-[1000px] top-[40px] w-[106.031px]" data-name="Button">
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <Wrapper3 additionalClassNames="h-[16px] w-[54.031px]">
                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[27.5px] text-[#0d004d] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Cancel</p>
              </Wrapper3>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[818px] items-start left-[32px] overflow-clip rounded-[4px] top-[133px] w-[846.531px]" data-name="Container">
            <div className="content-stretch flex flex-col h-[818px] items-start overflow-clip pb-0 pt-[-172px] px-0 relative shrink-0 w-full" data-name="Container">
              <div className="h-[990px] relative shrink-0 w-full" data-name="ScenarioCreationNew">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[56px] items-start pb-0 pl-[80px] pr-0 pt-[40px] relative size-full">
                    <Wrapper3 additionalClassNames="h-[766px] w-[686.531px]">
                      <div className="absolute h-[92px] left-0 top-0 w-[686.531px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col gap-[8px] h-[92px] items-start left-0 top-0 w-[509.484px]" data-name="Container">
                          <Wrapper3 additionalClassNames="h-[28px] w-[182.922px]">
                            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#171717] text-[20px] text-nowrap top-0 tracking-[-0.4px]">Assessment Criteria</p>
                          </Wrapper3>
                          <Wrapper2 additionalClassNames="w-[509.484px]">
                            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#5d5d5d] text-[18px] top-0 w-[483px]">{`Set the importance of each criteria and we'll calculate the weighting for you.`}</p>
                          </Wrapper2>
                        </div>
                        <div className="absolute h-[48px] left-[541.48px] rounded-[1000px] top-[22px] w-[145.047px]" data-name="Button">
                          <div className="absolute h-[16px] left-[24px] top-[16px] w-[97.047px]" data-name="Paragraph">
                            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[49px] text-[#0d004d] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Manual entry</p>
                          </div>
                          <div className="absolute border-2 border-[#0d004d] border-solid h-[48px] left-0 rounded-[1000px] top-0 w-[145.047px]" data-name="Container" />
                        </div>
                      </div>
                      <div className="absolute h-[482px] left-0 top-[212px] w-[686.531px]" data-name="Container">
                        <div className="absolute h-[120px] left-0 top-0 w-[686.531px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[8px] h-[96px] items-start left-0 top-[12px] w-[419.578px]" data-name="Container">
                            <ParagraphText text="Articulation of Safety Concerns" additionalClassNames="w-[267.469px]" />
                            <Wrapper2 additionalClassNames="w-[419.578px]">
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[417px]">Evaluates whether the participant can clearly communicate the nature and severity of safety or ethical concerns using evidence and logic.</p>
                            </Wrapper2>
                          </div>
                          <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[451.58px] top-[44px] w-[234.953px]" data-name="Container">
                            <Wrapper2 additionalClassNames="h-[32px]">
                              <div className="absolute h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Button">
                                <ParagraphText1 text="Low" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Container" />
                              </div>
                              <div className="absolute bg-[#0d004d] content-stretch flex h-[32px] items-center justify-center left-[57.08px] rounded-[1000px] top-0 w-[53.938px]" data-name="Button">
                                <ParagraphText2 text="Med" />
                              </div>
                              <div className="absolute h-[32px] left-[116.02px] rounded-[1000px] top-0 w-[54.938px]" data-name="Button">
                                <ParagraphText3 text="High" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[54.938px]" data-name="Container" />
                              </div>
                            </Wrapper2>
                            <ParagraphText4 text="25%" />
                          </div>
                          <div className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid h-[120px] left-0 top-0 w-[686.531px]" data-name="Container" />
                        </div>
                        <div className="absolute h-[120px] left-0 top-[128px] w-[686.531px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[8px] h-[96px] items-start left-0 top-[12px] w-[419.578px]" data-name="Container">
                            <ParagraphText text="Professional Persistence" additionalClassNames="w-[211.156px]" />
                            <Wrapper2 additionalClassNames="w-[419.578px]">
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[411px]">{`Evaluates the participant's ability to persist in raising legitimate concerns when initially dismissed, while maintaining professionalism.`}</p>
                            </Wrapper2>
                          </div>
                          <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[451.58px] top-[44px] w-[234.953px]" data-name="Container">
                            <Wrapper2 additionalClassNames="h-[32px]">
                              <div className="absolute h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Button">
                                <ParagraphText1 text="Low" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Container" />
                              </div>
                              <div className="absolute bg-[#0d004d] content-stretch flex h-[32px] items-center justify-center left-[57.08px] rounded-[1000px] top-0 w-[53.938px]" data-name="Button">
                                <ParagraphText2 text="Med" />
                              </div>
                              <div className="absolute h-[32px] left-[116.02px] rounded-[1000px] top-0 w-[54.938px]" data-name="Button">
                                <ParagraphText3 text="High" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[54.938px]" data-name="Container" />
                              </div>
                            </Wrapper2>
                            <ParagraphText4 text="25%" />
                          </div>
                          <div className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid h-[120px] left-0 top-0 w-[686.531px]" data-name="Container" />
                        </div>
                        <div className="absolute h-[120px] left-0 top-[256px] w-[686.531px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[8px] h-[96px] items-start left-0 top-[12px] w-[419.578px]" data-name="Container">
                            <ParagraphText text="Recognition and Resistance of Rationalization" additionalClassNames="w-[389.578px]" />
                            <Wrapper2 additionalClassNames="w-[419.578px]">
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[382px]">Evaluates whether the participant can identify when organizational pressure uses rationalization and push back appropriately.</p>
                            </Wrapper2>
                          </div>
                          <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[451.58px] top-[44px] w-[234.953px]" data-name="Container">
                            <Wrapper2 additionalClassNames="h-[32px]">
                              <div className="absolute h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Button">
                                <ParagraphText1 text="Low" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Container" />
                              </div>
                              <div className="absolute bg-[#0d004d] content-stretch flex h-[32px] items-center justify-center left-[57.08px] rounded-[1000px] top-0 w-[53.938px]" data-name="Button">
                                <ParagraphText2 text="Med" />
                              </div>
                              <div className="absolute h-[32px] left-[116.02px] rounded-[1000px] top-0 w-[54.938px]" data-name="Button">
                                <ParagraphText3 text="High" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[54.938px]" data-name="Container" />
                              </div>
                            </Wrapper2>
                            <ParagraphText4 text="25%" />
                          </div>
                          <div className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid h-[120px] left-0 top-0 w-[686.531px]" data-name="Container" />
                        </div>
                        <div className="absolute h-[98px] left-0 top-[384px] w-[686.531px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[8px] h-[74px] items-start left-0 top-[12px] w-[419.578px]" data-name="Container">
                            <ParagraphText text="Appropriate Escalation" additionalClassNames="w-[197.203px]" />
                            <Wrapper2 additionalClassNames="w-[419.578px]">
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[404px]">{`Evaluates the participant's understanding of when and how to escalate concerns through proper channels.`}</p>
                            </Wrapper2>
                          </div>
                          <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[451.58px] top-[33px] w-[234.953px]" data-name="Container">
                            <Wrapper2 additionalClassNames="h-[32px]">
                              <div className="absolute h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Button">
                                <ParagraphText1 text="Low" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[52.078px]" data-name="Container" />
                              </div>
                              <div className="absolute bg-[#0d004d] content-stretch flex h-[32px] items-center justify-center left-[57.08px] rounded-[1000px] top-0 w-[53.938px]" data-name="Button">
                                <ParagraphText2 text="Med" />
                              </div>
                              <div className="absolute h-[32px] left-[116.02px] rounded-[1000px] top-0 w-[54.938px]" data-name="Button">
                                <ParagraphText3 text="High" />
                                <div className="absolute border-2 border-[#0d004d] border-solid h-[32px] left-0 rounded-[1000px] top-0 w-[54.938px]" data-name="Container" />
                              </div>
                            </Wrapper2>
                            <ParagraphText4 text="25%" />
                          </div>
                          <div className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid h-[98px] left-0 top-0 w-[686.531px]" data-name="Container" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center justify-center left-0 rounded-[1000px] top-[726px] w-[156.125px]" data-name="Button">
                        <Icon>
                          <path d={svgPaths.p28614000} fill="var(--fill-0, #0D004D)" id="Vector" />
                        </Icon>
                        <Wrapper3 additionalClassNames="h-[16px] w-[88.125px]">
                          <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[44.5px] text-[#0d004d] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Add criteria</p>
                        </Wrapper3>
                      </div>
                      <div className="absolute bg-[#f6f6fb] h-[56px] left-0 rounded-[12px] top-[124px] w-[686.531px]" data-name="Container">
                        <div className="absolute content-stretch flex gap-[24px] h-[56px] items-start left-0 pb-0 pt-[16px] px-[24px] top-0 w-[686.531px]" data-name="Container">
                          <Wrapper2 additionalClassNames="h-[24px]">
                            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#5d5d5d] text-[16px] text-nowrap top-[-1px]">View universal metrics</p>
                          </Wrapper2>
                          <Icon1>
                            <path d={svgPaths.p21dac100} fill="var(--fill-0, #171717)" id="Vector" />
                          </Icon1>
                        </div>
                        <div className="absolute border border-[rgba(13,0,77,0.15)] border-solid h-[56px] left-0 rounded-[12px] top-0 w-[686.531px]" data-name="Container" />
                      </div>
                    </Wrapper3>
                    <div className="bg-[#ffce00] h-[48px] relative rounded-[1000px] shrink-0 w-[686.531px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
                        <Wrapper3 additionalClassNames="h-[16px] w-[125.797px]">
                          <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[63px] text-[16px] text-black text-center text-nowrap top-[-1px] translate-x-[-50%]">Review Scenario</p>
                        </Wrapper3>
                        <Icon>
                          <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                        </Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#efeef7] h-[951px] left-[910.52px] top-0 w-[448.484px]" data-name="Container">
          <div className="absolute content-stretch flex flex-col h-[168px] items-start left-[40px] top-[134.02px] w-[368.484px]" data-name="Container">
            <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] left-0 text-[#171717] text-[48px] text-nowrap top-[-1px] tracking-[-0.96px]">Define</p>
            </div>
            <div className="h-[112px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[56px] left-0 text-[#171717] text-[48px] top-[-1px] tracking-[-0.96px] w-[228px]">evaluation criteria</p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[4px] h-[3px] items-center left-[40px] pl-0 pr-[-0.016px] py-0 top-[334.02px] w-[368.484px]" data-name="Container">
            {[...Array(5).keys()].map((_, i) => (
              <div className="basis-0 bg-[#171717] grow h-[3px] min-h-px min-w-px shrink-0" data-name="Container" />
            ))}
          </div>
          <div className="absolute h-[66px] left-[40px] top-[369.02px] w-[368.484px]" data-name="Paragraph">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[355px]">Select any criteria you want to use for this training, add new criteria if needed. Users will be assessed and received feedback based on these criteria.</p>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col h-[349.969px] items-start left-[40px] rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] top-[467.02px] w-[368.484px]" data-name="Container">
            <div className="h-[349.969px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] px-[16px] py-0 top-[213.97px] w-[476px]" data-name="Container">
                <Icon1>
                  <path d={svgPaths.p2791bf80} fill="var(--fill-0, #171717)" id="Vector" />
                </Icon1>
                <ParagraphText5 text="Naval Air Station Oceana" />
              </div>
              <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] px-[16px] py-0 top-[257.97px] w-[476px]" data-name="Container">
                <Icon1>
                  <path d={svgPaths.p11cad330} fill="var(--fill-0, #171717)" id="Vector" />
                </Icon1>
                <ParagraphText5 text="1800, Friday evening" />
              </div>
              <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] px-[16px] py-0 top-[301.97px] w-[476px]" data-name="Container">
                <Icon1>
                  <path d={svgPaths.p36f904f0} fill="var(--fill-0, #171717)" id="Vector" />
                </Icon1>
                <Wrapper2 additionalClassNames="h-[22px]">
                  <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5d5d5d] text-[14px] top-0 w-[292px]">Aviation Maintenance Chief, Chief Rodriguez</p>
                </Wrapper2>
              </div>
              <div className="absolute h-[177.969px] left-[16px] rounded-[4px] top-[16px] w-[336.484px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[177.969px] items-start justify-end left-0 overflow-clip pb-0 pl-[16px] pr-0 pt-[91.969px] rounded-[4px] top-0 w-[336.484px]" data-name="Container">
                  <div className="h-[70px] relative shrink-0 w-[304.484px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <Wrapper3 additionalClassNames="h-[28px] w-[240.453px]">
                        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] left-0 text-[20px] text-nowrap text-white top-0 tracking-[-0.4px]">The Maintenance Dilemma</p>
                      </Wrapper3>
                      <Wrapper2 additionalClassNames="w-[304.484px]">
                        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] left-0 text-[#fcc32b] text-[12px] top-[-1px] w-[291px]">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands</p>
                      </Wrapper2>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[177.969px] left-0 rounded-[4px] top-0 w-[336.484px]" data-name="Container">
                  <div className="absolute h-[177.969px] left-0 rounded-[4px] top-0 w-[336.484px]" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage} />
                  </div>
                  <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] h-[177.969px] left-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)] top-0 w-[336.484px]" data-name="Container" />
                </div>
                <div className="absolute border border-[rgba(13,0,77,0.15)] border-solid h-[177.969px] left-0 rounded-[4px] top-0 w-[336.484px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[951px] left-0 top-0 w-[1359px]" data-name="ScenarioReviewModal">
        <div className="absolute bg-[#f6f6fb] content-stretch flex flex-col h-[855.891px] items-start left-[79.5px] rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] top-[47.55px] w-[1200px]" data-name="Container">
          <div className="h-[93px] relative shrink-0 w-[1200px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[40px] relative size-full">
              <Wrapper3 additionalClassNames="h-[44px] w-[346.578px]">
                <div className="absolute h-[32px] left-[134.84px] top-[6px] w-[211.734px]" data-name="Paragraph">
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#171717] text-[28px] text-nowrap top-0 tracking-[-0.56px]">Review Scenario</p>
                </div>
                <div className="absolute border-2 border-[#0d004d] border-solid h-[44px] left-0 rounded-[1000px] top-0 w-[110.844px]" data-name="Button">
                  <div className="absolute content-stretch flex items-center left-[20px] size-[16px] top-[12px]" data-name="Container">
                    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Icon">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                        <Trim />
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[16px] left-[48px] top-[12px] w-[38.844px]" data-name="Paragraph">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[19.5px] text-[#0d004d] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Back</p>
                  </div>
                </div>
              </Wrapper3>
              <Wrapper3 additionalClassNames="h-[40px] w-[326.578px]">
                <div className="absolute bg-[#0d004d] h-[40px] left-0 rounded-[1000px] top-0 w-[113.203px]" data-name="Button">
                  <div className="absolute h-[16px] left-[20px] top-[12px] w-[73.203px]" data-name="Paragraph">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[37px] text-[16px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%]">Overview</p>
                  </div>
                </div>
                <div className="absolute h-[40px] left-[121.2px] rounded-[1000px] top-0 w-[205.375px]" data-name="Button">
                  <div className="absolute h-[16px] left-[20px] top-[12px] w-[165.375px]" data-name="Paragraph">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[83.01px] text-[#0d004d] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">AI Confidence Scores</p>
                  </div>
                </div>
              </Wrapper3>
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1200px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[32px] h-[966px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#e8e6f3] relative shrink-0 w-[544px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[41px] items-start p-[40px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Paragraph">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">The Maintenance Dilemma</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Paragraph">
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex gap-[10px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Container">
                        <div className="h-[32px] relative shrink-0 w-[119.297px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-0 size-[32px] top-0" data-name="Container">
                            <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <div className="absolute contents inset-[7.03%_16.41%_7.02%_16.41%]" data-name="MapPin">
                                <div className="absolute inset-[7.03%_16.41%_7.02%_16.41%]" data-name="Vector">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 27.503">
                                    <path d={svgPaths.pcc1e280} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ParagraphText6 text="Location" additionalClassNames="left-[44px] top-[2px] w-[75.297px]" />
                        </div>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">Naval Air Station Oceana</p>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Container">
                        <div className="h-[32px] relative shrink-0 w-[84.766px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-0 size-[32px] top-0" data-name="Container">
                            <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <div className="absolute contents inset-[10.16%]" data-name="Clock">
                                <div className="absolute inset-[10.16%]" data-name="Vector">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 25.5">
                                    <path d={svgPaths.p29bc9900} fill="var(--fill-0, #5D5D5D)" id="Vector" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ParagraphText6 text="Time" additionalClassNames="left-[44px] top-[2px] w-[40.766px]" />
                        </div>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px] text-right">1800, Friday evening</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                        <Text1 text="AI character" />
                        <Container>
                          <div className="h-[115px] relative shrink-0 w-full" data-name="Container">
                            <div className="absolute content-stretch flex flex-col items-start left-[24px] rounded-[80px] size-[67px] top-[24px]" data-name="Container">
                              <div className="content-stretch flex flex-col h-[67px] items-start overflow-clip pb-0 pl-[-40.984px] pr-[-41.016px] pt-[-14.656px] relative rounded-[80px] shrink-0 w-full" data-name="Container">
                                <div className="h-[96.313px] relative shrink-0 w-full" data-name="Image">
                                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
                                </div>
                              </div>
                            </div>
                            <div className="absolute h-[54px] left-[115px] top-[30.5px] w-[403px]" data-name="Container">
                              <Text text="Chief Rodriguez" />
                              <Text2 text="Aviation Maintenance Chief" />
                            </div>
                          </div>
                        </Container>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                        <Text1 text="Student role" />
                        <Container>
                          <div className="h-[115px] relative shrink-0 w-full" data-name="Container">
                            <div className="absolute left-[24px] size-[67px] top-[24px]" data-name="Container">
                              <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" data-name="Container" />
                              <div className="absolute h-[22px] left-[-12.25px] top-[23px] w-[91.641px]" data-name="Paragraph">
                                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[46.01px] text-[#171717] text-[18px] text-center text-nowrap top-0 translate-x-[-50%]">QA</p>
                              </div>
                            </div>
                            <div className="absolute h-[54px] left-[115px] top-[30.5px] w-[403px]" data-name="Container">
                              <Text text="Lieutenant" />
                              <Text2 text="Maintenance QA Officer" />
                            </div>
                          </div>
                        </Container>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pl-0 pr-[40px] py-[40px] relative w-full">
                      <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full" data-name="Midshipman">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                            <img alt="" className="absolute h-[152.09%] left-0 max-w-none top-[-18.78%] w-full" src={imgImage} />
                          </div>
                          <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                        </div>
                        <div className="flex flex-col justify-end size-full">
                          <div className="size-full" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                        <ParagraphText7 text="Situation" additionalClassNames="relative shrink-0" />
                        <ParagraphText8 text="During pre-flight inspection, you discover a maintenance discrepancy that was improperly signed off by a Chief with 18 years of spotless service. The issue is technically minor but grounds the aircraft. The squadron is already behind on flight hours." />
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                        <ParagraphText7 text="Dilemma" additionalClassNames="relative shrink-0" />
                        <Wrapper1>{`Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor's career, or trusting his experience while risking flight safety and your own integrity.`}</Wrapper1>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                        <ParagraphText7 text="Student mission" additionalClassNames="relative shrink-0" />
                        <ParagraphText8 text="Navigate the tension between professional standards, safety, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold standards while treating people with dignity." />
                      </div>
                      <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
                        <ParagraphText7 text="Success criteria" additionalClassNames="absolute left-0 top-0" />
                        <div className="absolute h-[128px] left-0 top-[36px] w-[544px]" data-name="Container">
                          <div className="absolute h-[28px] left-0 top-0 w-[544px]" data-name="Container">
                            <ParagraphText6 text="•" additionalClassNames="left-0 top-0 w-[9.656px]" />
                            <ParagraphText9 text="Maintains safety standards" />
                          </div>
                          <div className="absolute h-[28px] left-0 top-[36px] w-[544px]" data-name="Container">
                            <ParagraphText6 text="•" additionalClassNames="left-0 top-0 w-[9.656px]" />
                            <ParagraphText9 text="Communicates decision rationale clearly" />
                          </div>
                          <div className="absolute h-[56px] left-0 top-[72px] w-[544px]" data-name="Container">
                            <ParagraphText6 text="•" additionalClassNames="left-0 top-0 w-[9.656px]" />
                            <div className="absolute h-[56px] left-[21.66px] top-0 w-[522.344px]" data-name="Paragraph">
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#171717] text-[18px] top-0 w-[496px]">Treats Chief Rodriguez with respect while remaining firm on regulations</p>
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
          <div className="h-[93px] relative shrink-0 w-[1200px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-0 pt-px px-[40px] relative size-full">
              <Wrapper5>
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                    <p className="leading-[16px]">Edit</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                    <Trim1 additionalClassNames="relative shrink-0">
                      <path clipRule="evenodd" d={svgPaths.p861ba80} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                    </Trim1>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                    <p className="leading-[16px]">Test</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="Trail Icon">
                    <Trim1 additionalClassNames="absolute left-0 top-0">
                      <path clipRule="evenodd" d={svgPaths.p342d5400} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
                    </Trim1>
                  </div>
                </div>
              </Wrapper5>
              <Wrapper5>
                <div className="bg-[#0d004d] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Lead Icon">
                    <div className="relative shrink-0 size-[18px]" data-name="trim">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="trim">
                          <path clipRule="evenodd" d={svgPaths.p1d640e80} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Assign to students</p>
                </div>
                <div className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0" data-name="button">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Launch Scenario</p>
                  <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Trail Icon">
                    <Trim1 additionalClassNames="relative shrink-0">
                      <path clipRule="evenodd" d={svgPaths.pd2da900} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
                    </Trim1>
                  </div>
                </div>
              </Wrapper5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}