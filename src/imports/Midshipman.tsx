import imgMidshipman from "figma:asset/19834413170ec74e967487790cb4d94301063882.png";

export default function Midshipman() {
  return (
    <div className="overflow-clip relative rounded-[4px] size-full" data-name="Midshipman">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <div className="absolute bg-white inset-0 rounded-[4px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[4px]">
          <img alt="" className="absolute h-[112%] left-0 max-w-none top-[-1.56%] w-full" src={imgMidshipman} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] text-[20px] text-nowrap text-white top-[136px] tracking-[-0.4px] translate-y-[-50%]">
        <p className="leading-[28px]">Midshipman</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] text-[#fcc32b] text-[12px] text-nowrap top-[157px] translate-y-[-50%]">
        <p className="leading-[14px]">{`LEARN & DEVELOP`}</p>
      </div>
    </div>
  );
}