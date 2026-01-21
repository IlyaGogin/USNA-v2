import imgScenarioCard from "figma:asset/78b5f9880e3355f31936367c8969a5dcbd2b6a52.png";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="aspect-[441/288] relative rounded-[8px] shrink-0 w-full" data-name="Scenario Card">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
          <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(185.887948deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.5) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
        </div>
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute content-stretch flex flex-col h-[197px] items-start justify-between left-0 p-[16px] top-0 w-[301px]">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e8e8e8] text-[14px] text-shadow-[0px_2px_1px_rgba(13,0,77,0.15),0px_1px_1px_rgba(13,0,77,0.1),0px_1px_3px_rgba(13,0,77,0.05)] w-full">Get recommendations from a mentor</p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-nowrap">SME agents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}