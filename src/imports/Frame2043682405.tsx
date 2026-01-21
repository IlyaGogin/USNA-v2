import svgPaths from "./svg-mwrhv2apb1";

function Frame2043682405Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(13, 0, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 808 1">
          <line id="Line 2" stroke="var(--stroke-0, #0D004D)" strokeOpacity="0.15" x2="808" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[18px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f6f6fb] relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[16px] relative size-full">
          <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#5d5d5d] text-[16px]">Hide universal metrics</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg]">
                <div className="relative size-[24px]" data-name="CaretDown">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="CaretDown">
                      <path d={svgPaths.p21dac100} fill="var(--fill-0, #171717)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
            <InputText text="Decision Velocity" />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Time taken to reach final decision after last complication</p>
          </div>
          <Frame2043682405Helper />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
            <InputText text="Reasoning Quality" />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Clarity, coherence, and logical consistency of justifications</p>
          </div>
          <Frame2043682405Helper />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input-radio">
            <InputText text="Self-Correction Rate" />
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Adaptability when presented with new information</p>
          </div>
        </div>
      </div>
    </div>
  );
}