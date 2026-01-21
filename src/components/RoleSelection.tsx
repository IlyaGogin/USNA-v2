import imgRectangle12176 from "figma:asset/cb0c26b8b5b54d6c401abf16ab957f7b87496de8.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgInstructor from "figma:asset/9208864159f90648e458c16717502e452a71870f.png";
import imgMidshipman from "figma:asset/19834413170ec74e967487790cb4d94301063882.png";
import imgInstructorDashboard from "figma:asset/84d70ea2805dee6a965291971002364048aab3f2.png";
import svgPaths from "../imports/svg-uxyc2mcggo";

type RoleSelectionProps = {
  onSelectRole: (role: 'instructor' | 'midshipman') => void;
};

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgInstructorDashboard} />
      </div>
      <div className="relative content-stretch flex flex-col gap-[72px] items-center w-[min(987px,90%)] z-10">
        <div className="bg-[rgba(0,0,0,0.12)] relative rounded-[15px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center p-[24px] relative w-full">
              <div className="relative rounded-[12px] shrink-0 w-full">
                <div className="flex flex-row items-center justify-between px-[16px] py-[20px]">
                  <div className="flex flex-col font-medium gap-[7px] items-start">
                    <p className="font-medium leading-[40px] text-[32px] text-white tracking-[-0.64px]">Character Development</p>
                    <p className="font-medium leading-[20px] text-[#fcc32b] text-[16px]">{`LEADERSHIP, ETHICS, & LAW`}</p>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                    <div className="col-end-auto col-start-1 h-[86.101px] ml-0 mt-0 relative row-end-auto row-start-1 w-[86.103px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
                    </div>
                    <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[90.02px] mt-[22.5px] place-items-start relative row-end-auto row-start-1">
                      <div className="bg-white col-end-auto col-start-1 h-[47.943px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.957px] mask-size-[136.983px_45.007px] ml-[-1.96px] mt-[-1.96px] row-end-auto row-start-1 w-[139.918px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <button
                  onClick={() => onSelectRole('instructor')}
                  className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-white inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgInstructor} />
                    <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                  </div>
                  <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                      <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                        <p className="font-medium leading-[28px] text-[20px] text-white tracking-[-0.4px]">Instructor</p>
                        <p className="font-medium leading-[14px] text-[#fcc32b] text-[12px]">{`CREATE & ASSESS`}</p>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </button>
                <button
                  onClick={() => onSelectRole('midshipman')}
                  className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-white inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgMidshipman} />
                    <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                  </div>
                  <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                      <div className="content-stretch flex flex-col font-medium items-start leading-[0] relative shrink-0 w-full">
                        <p className="font-medium leading-[28px] text-[20px] text-white tracking-[-0.4px]">Midshipman</p>
                        <p className="font-medium leading-[14px] text-[#fcc32b] text-[12px]">{`LEARN & DEVELOP`}</p>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
          <div className="font-medium leading-[16px] text-[14px] text-[rgba(255,255,255,0.5)] text-center">
            <p className="mb-[8px]">United States Naval Academy</p>
            <p>{`Leadership & Ethics Training Platform`}</p>
          </div>
          <div className="h-[24px] relative w-[119.461px]">
            <div className="absolute h-[23.591px] left-0 top-0 w-[10.519px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5192 23.5909">
                <g>
                  <path d={svgPaths.p3ffa6980} fill="white" />
                  <path d={svgPaths.p108f5a00} fill="white" />
                </g>
              </svg>
            </div>
            <div className="absolute h-[24px] left-[12.92px] top-0 w-[106.542px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.542 24.0002">
                <g>
                  <path d={svgPaths.pf735700} fill="white" />
                  <path d={svgPaths.p253b1180} fill="white" />
                  <path d={svgPaths.p2e856500} fill="white" />
                  <path d={svgPaths.p28bba800} fill="white" />
                  <path d={svgPaths.p2b1ec880} fill="white" />
                  <path d={svgPaths.p1f8e2900} fill="white" />
                  <path d={svgPaths.p19fe0f00} fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}