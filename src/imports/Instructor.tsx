import imgInstructor from "figma:asset/9208864159f90648e458c16717502e452a71870f.png";

export default function Instructor() {
  return (
    <div className="overflow-clip relative rounded-[4px] size-full" data-name="Instructor">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <div className="absolute bg-white inset-0 rounded-[4px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgInstructor} />
        <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[4px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] text-[20px] text-nowrap text-white top-[136px] tracking-[-0.4px] translate-y-[-50%]">
        <p className="leading-[28px]">Instructor</p>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] text-[#fcc32b] text-[12px] text-nowrap top-[157px] translate-y-[-50%]">
        <p className="leading-[14px]">{`CREATE & ASSESS`}</p>
      </div>
    </div>
  );
}