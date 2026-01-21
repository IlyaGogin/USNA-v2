import imgRectangle12176 from "figma:asset/cb0c26b8b5b54d6c401abf16ab957f7b87496de8.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgInstructor from "figma:asset/9208864159f90648e458c16717502e452a71870f.png";
import imgMidshipman from "figma:asset/19834413170ec74e967487790cb4d94301063882.png";
import imgInstructorDashboard from "figma:asset/84d70ea2805dee6a965291971002364048aab3f2.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">{children}</div>
    </div>
  );
}

export default function InstructorDashboard() {
  return (
    <div className="relative size-full" data-name="Instructor: Dashboard">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgInstructorDashboard} />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-[calc(50%-0.02px)] translate-x-[-50%] translate-y-[-50%] w-[987px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-end-auto col-start-1 h-[156.272px] ml-0 mt-0 relative row-end-auto row-start-1 w-[156.276px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[163.38px] mt-[40.84px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[87.015px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.552px] mask-size-[248.621px_81.688px] ml-[-3.55px] mt-[-3.55px] row-end-auto row-start-1 w-[253.948px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
          <div className="bg-[rgba(0,0,0,0.12)] relative rounded-[15px] shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[40px] items-center p-[24px] relative w-full">
                <div className="content-stretch flex flex-col items-center px-[16px] py-[20px] relative rounded-[12px] shrink-0 w-[656px]">
                  <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[7px] items-center leading-[0] relative shrink-0 text-center w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full">
                      <p className="leading-[40px]">Character Development</p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[16px] w-full">
                      <p className="leading-[20px]">{`LEADERSHIP, ETHICS, & LAW`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Instructor">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                      <div className="absolute bg-white inset-0 rounded-[8px]" />
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgInstructor} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <BackgroundImage>
                      <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                          <p className="leading-[28px]">Instructor</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                          <p className="leading-[14px]">{`CREATE & ASSESS`}</p>
                        </div>
                      </div>
                    </BackgroundImage>
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="aspect-[288/180] basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Midshipman">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                      <div className="absolute bg-white inset-0 rounded-[8px]" />
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgMidshipman} />
                      <div className="absolute bg-gradient-to-b from-[rgba(21,34,56,0)] inset-0 rounded-[8px] to-[93.536%] to-[rgba(21,34,56,0.93)]" />
                    </div>
                    <BackgroundImage>
                      <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start leading-[0] relative shrink-0 w-full">
                        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                          <p className="leading-[28px]">Midshipman</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[#fcc32b] text-[12px] w-full">
                          <p className="leading-[14px]">{`LEARN & DEVELOP`}</p>
                        </div>
                      </div>
                    </BackgroundImage>
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-center w-full">
            <p className="mb-[8px]">United States Naval Academy</p>
            <p>{`Leadership & Ethics Training Platform`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}