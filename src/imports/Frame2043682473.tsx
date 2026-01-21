import imgInstructor from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgMidshipman from "figma:asset/16f078e810c44ea0d7cbaed6d9a76428f3dc6fe8.png";
import imgMidshipman1 from "figma:asset/dbda829de53edf905d04a9fcc6b339864b41c891.png";
import imgInstructor1 from "figma:asset/1aa828c5c6067ca5848cbc0b819e2f3641b034ab.png";
import imgMidshipman2 from "figma:asset/dc6d3b09f88d93a33dd4c71814f8aacf3157e88a.png";
import imgMidshipman3 from "figma:asset/ee769b7176f83de145aa371dadbac1bf2ba30d7a.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
        <p className="leading-[14px]">{text1}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[856px]">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.4px] w-full">Which area will this scenario address?</p>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[856px]">
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <Helper text="Ethics" text1="NE" />
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <Helper text="Leadership" text1="NL" />
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman1} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                  <p className="leading-[28px]">{`Philosophy & Psychology`}</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                  <p className="leading-[14px]">NP</p>
                </div>
              </div>
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[856px]">
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Instructor">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor1} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <Helper text="Languages" text1="FL" />
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman2} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                  <p className="leading-[28px]">{`Coaching & Mentoring`}</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                  <p className="leading-[14px]">LU</p>
                </div>
              </div>
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Midshipman">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman3} />
              <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
            </div>
            <Wrapper>
              <Helper text="English Communication" text1="HE" />
            </Wrapper>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}