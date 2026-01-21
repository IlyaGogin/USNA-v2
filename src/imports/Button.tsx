import svgPaths from "./svg-7koxvlsnb0";

export default function Button() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center p-[24px] relative rounded-[1000px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[24px]" data-name="trim">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
            <g id="trim">
              <path clipRule="evenodd" d={svgPaths.p1a732d00} fill="var(--fill-0, #0D004D)" fillRule="evenodd" id="icon" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}