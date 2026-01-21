import imgInstructor from "figma:asset/b25dac17eafb0809e8e66dfb8e38b0b478c49c3a.png";
import imgInstructor1 from "figma:asset/094aa37446df343e91a51c5e6370d33a29a9117e.png";
import imgInstructor2 from "figma:asset/e072d8b684744120a64985000a2e8c7945b7d891.png";
import imgInstructor3 from "figma:asset/ac2d5005d1b01e0b1c79cb222edb110a7ae9648c.png";
import imgInstructor4 from "figma:asset/6577fdf878acc457e6a882fedb4da095ff1d4788.png";
import imgInstructor5 from "figma:asset/f86ef3ae06ccf54801dec90a63ad85ef95c67f7d.png";
import imgInstructor6 from "figma:asset/81f017d3739b89f658f70b868744133c1c4cd42d.png";
import imgInstructor7 from "figma:asset/3bd37c1241aaaab4f0493222504af7f42f8b19f9.png";
import imgInstructor8 from "figma:asset/6abce4617fb44ccfe048833e408277179041353b.png";

function Instructor({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="aspect-[288/180] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
      <Wrapper1>
        <Text text="NE-203" />
      </Wrapper1>
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">{text}</p>
      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[28px]">{text}</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
        <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
          <p className="leading-[14px]">{"INT"}</p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
          <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[28px]">{text}</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
        <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
          <p className="leading-[14px]">{"HARD"}</p>
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
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <Instructor>
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor} />
            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
          </Instructor>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">The Inner Ring</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Social Influence & Peer Pressure`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <Instructor>
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor1} />
            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
          </Instructor>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">The Challenger Decision</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Organizational Ethics & Dissent`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <Instructor>
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor2} />
            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
          </Instructor>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Milgram Obedience</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Authority & Moral Agency`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor3} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper1>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.4px]">
                  <p className="leading-[28px]">NE-203</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0">
                  <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#fcc32b] text-[16px] text-nowrap tracking-[-0.064px]">
                    <p className="leading-[14px]">EASY</p>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                    <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-0 mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                    <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[5px] mt-0 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                    <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[10px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                    <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[15px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                    <div className="bg-[#fcc32b] col-end-auto col-start-1 h-[12px] ml-[20px] mt-0 opacity-30 rounded-[1px] row-end-auto row-start-1 w-[2px]" />
                  </div>
                </div>
              </div>
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          </div>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Abu Ghraib</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Situational Ethics & Military Conduct`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor4} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper1>
              <Text1 text="NE-203" />
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          </div>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Helper text="Trolley Problem" text1="Utilitarian vs. Deontological Ethics" />
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <Instructor>
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor5} />
            <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
          </Instructor>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">My Lai Massacre</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`War Crimes & Moral Courage`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor6} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper1>
              <Text1 text="NL-110" />
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          </div>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Helper text="Whistleblowing Dilemma" text1="Loyalty vs. Integrity" />
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor7} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper1>
              <Text text="NL-200" />
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          </div>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">The Lucifer Effect</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Power & Moral Corruption`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0" data-name="Scenario Card">
          <div className="aspect-[288/180] relative shrink-0 w-full" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructor8} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper1>
              <Text1 text="NL-311" />
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          </div>
          <Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                  <p className="leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Stanford Prison Experiment</p>
                  <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{`Role Identity & Ethical Behavior`}</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}