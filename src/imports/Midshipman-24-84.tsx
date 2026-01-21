import imgMidshipman from "figma:asset/19834413170ec74e967487790cb4d94301063882.png";

export default function Midshipman() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Midshipman">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <div className="absolute bg-white inset-0 rounded-[4px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgMidshipman} />
        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end overflow-clip p-[16px] relative size-full">
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
              <p className="leading-[28px]">Midshipman</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
              <p className="leading-[14px]">{`LEARN & DEVELOP`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}