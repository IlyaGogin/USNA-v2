import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";

export default function Frame() {
  return (
    <div className="relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
        <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(169.737287deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
      </div>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
              <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">
                <p className="mb-[8px]">{`Overall `}</p>
                <p>readiness</p>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white">79</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(97, 209, 152, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                <line id="Line 1" stroke="var(--stroke-0, #61D198)" x2="448" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#61d198] text-[16px] text-center text-nowrap w-full">
            <p className="relative shrink-0">3rd Class:</p>
            <p className="relative shrink-0">On Track</p>
          </div>
        </div>
      </div>
    </div>
  );
}