import svgPaths from "../imports/svg-8ov7848mip";
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import imgScenarioCard from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgScenarioCardMentor from "figma:asset/78b5f9880e3355f31936367c8969a5dcbd2b6a52.png";
import imgImage40 from "figma:asset/65343c0263ff378c8fa576fc1ff00589cf6f456d.png";
import imgImage38 from "figma:asset/561a60f605f61f0bbcbea5fe03d55134ac8ad233.png";
import imgImage39 from "figma:asset/948424b909e051d8a51652c2b4bd8c87cfd92e67.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682542 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import { useEffect, useRef, useState } from "react";
import StudentProfileModal from "./StudentProfileModal";

type MidshipmanDashboardProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onSignOut?: () => void;
  onMentorClick?: () => void;
};

export default function MidshipmanDashboard({ onLogoClick, onTabChange, onSignOut, onMentorClick }: MidshipmanDashboardProps) {
  const welcomeTextRef = useRef<HTMLParagraphElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const checkTextOverflow = () => {
      if (welcomeTextRef.current) {
        // Check if text height exceeds 2 lines (56px line-height * 2 = 112px)
        // OR if text overflows horizontally
        const heightOverflow = welcomeTextRef.current.scrollHeight > 120;
        const widthOverflow = welcomeTextRef.current.scrollWidth > welcomeTextRef.current.clientWidth;
        const shouldBeCompact = heightOverflow || widthOverflow;
        setIsCompact(shouldBeCompact);
        setIsCalculated(true);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, []);

  return (
    <div className="bg-[#efeef7] relative flex-1 overflow-hidden">
      {/* Header */}
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 right-0 z-10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682542} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer" onClick={onLogoClick}>
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="tabs-horizontal">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Dashboard</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_tabs-item-border">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Underline" />
            </div>
          </div>
          <button 
            onClick={() => onTabChange?.("scenarios")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity" data-name="tabs-horizontal"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Scenarios</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("skills")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity" data-name="tabs-horizontal"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("physical")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity" data-name="tabs-horizontal"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Label Wrapper">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Physical Development</p>
            </div>
          </button>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button 
            onClick={() => setShowProfileModal(true)}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="absolute left-0 size-[48px] top-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="#1D5282" id="Ellipse 1" r="24" />
            </svg>
            <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">DR</p>
          </button>
        </div>
      </div>

      {/* Main Content - Three Columns */}
      <div className="absolute inset-[78px_0_0_0] flex">
        {/* Left Sidebar */}
        <div className="bg-[#e8e6f3] w-[32.41%] overflow-auto">
          <div className="flex flex-col gap-[32px] p-[40px]">
            <div className="content-stretch flex flex-col font-medium gap-[20px] items-start relative shrink-0 w-full">
              <p ref={welcomeTextRef} className={`font-medium relative shrink-0 text-[#171717] tracking-[-0.96px] w-full break-words ${
                !isCalculated ? 'invisible' : ''
              } ${
                isCompact 
                  ? 'text-[36px] leading-[42px]' 
                  : 'text-[48px] leading-[56px]'
              }`}>Welcome back, Midshipman Rich</p>
              <p className="font-medium leading-[28px] relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px] w-full">Week 3</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {/* Overall Readiness Card */}
              <div className="relative rounded-[12px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                  <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
                  <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(169.737287deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
                </div>
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative w-full">
                    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
                        <p className="font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px]">Overall readiness</p>
                      </div>
                      <p className="font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white">79</p>
                    </div>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                          <line stroke="#61D198" x2="448" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#61d198] text-[16px] text-center text-nowrap w-full">
                      <p className="relative shrink-0">3rd Class:</p>
                      <p className="relative shrink-0">On Track</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
                      {[
                        { name: 'Leadership', change: '+3', score: '72' },
                        { name: 'Ethics', change: '+2', score: '68' },
                        { name: 'Technical Skills', change: '+1', score: '65' },
                        { name: 'Physical Readiness', change: '+4', score: '71' },
                        { name: 'Communication', change: '+2', score: '69' }
                      ].map((skill, index) => (
                        <div key={skill.name} className={`content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full ${
                          index !== 4 ? 'border-b border-[rgba(13,0,77,0.15)]' : ''
                        }`}>
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 text-nowrap">
                              <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">{skill.name}</p>
                              <p className="font-semibold leading-[16px] opacity-70 relative shrink-0 text-[#00b057] text-[14px]">{skill.change}</p>
                            </div>
                            <p className="font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">{skill.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => onTabChange?.("skills")}
                  className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
                >
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">View Skills</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 content-stretch flex flex-col gap-[24px] items-start px-[40px] py-[32px] overflow-auto">
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
            <button className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full hover:scale-[1.01] transition-transform">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
                <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(rgba(21, 34, 56, 0.6) 11.364%, rgba(21, 34, 56, 0) 30.287%), linear-gradient(187.530674deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
              </div>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-between p-[24px]">
                  <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                      <p className="font-normal leading-[16px] relative shrink-0 text-[#006632] text-[14px] text-center text-nowrap">2 days left</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                          <p className="font-medium leading-[28px] relative text-left text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">You've been assigned a scenario to complete</p>
                          <p className="font-medium leading-[16px] relative text-left text-[#fcc32a] text-[14px] w-full">Train participants to recognize and resist unhealthy social pressures to belong to exclusive "inner rings" or in-groups.</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[32px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="ArrowUpRight">
                          <path d={svgPaths.p2c65ca00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
            </button>
          </div>
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
            <button 
              onClick={onMentorClick}
              className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full hover:scale-[1.01] transition-transform"
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#1d5282] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCardMentor} />
                <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(186.188218deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.5) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
              </div>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                          <p className="font-medium leading-[28px] relative text-left text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">Talk with a digital mentor</p>
                          <p className="font-medium leading-[16px] relative text-left text-[#fcc32a] text-[14px] w-full">Have conversations with SME agents</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[32px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="ArrowUpRight">
                          <path d={svgPaths.p2c65ca00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[30.09%] content-stretch flex flex-col gap-[40px] items-start pb-0 pl-0 pr-[40px] pt-[32px] overflow-auto">
          {/* Stats Card */}
          <div className="bg-[#e8e6f3] h-[491px] relative rounded-[12px] shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Your endurance improved</p>
                  <div className="content-stretch flex flex-col font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap w-full">
                    <p className="font-medium leading-[72px] relative shrink-0 text-[#171717] text-[64px] text-nowrap">8%</p>
                    <p className="font-medium leading-[16px] relative shrink-0 text-[#171717] text-[14px] w-full whitespace-normal">Try an advanced scenario while you're performing well</p>
                  </div>
                </div>
                <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full" />
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">You've maintained</p>
                  <div className="content-stretch flex flex-col font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap w-full">
                    <p className="font-medium leading-[72px] relative shrink-0 text-[#171717] text-[64px] text-nowrap">92%</p>
                    <p className="font-medium leading-[16px] relative shrink-0 text-[#171717] text-[14px] w-full">training consistency this semester</p>
                  </div>
                </div>
                <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full" />
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">You're 2 scenarios away from earning:</p>
                    <p className="font-medium leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Advanced Ethics</p>
                  </div>
                  <div className="relative shrink-0 size-[64px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Recent Activity</p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {[
                { type: 'badge', icon: imgImage38, title: 'Badge earned', subtitle: 'Leadership Excellence', time: '1 day ago' },
                { type: 'completed', title: 'Scenario completed', subtitle: 'The Authority Question', time: '1 day ago' },
                { type: 'completed', title: 'Scenario completed', subtitle: 'The Launch Decision', time: '1 day ago' },
                { type: 'completed', title: 'Scenario completed', subtitle: 'The Dark Hours', time: '1 day ago' },
                { type: 'badge', icon: imgImage39, title: 'Badge earned', subtitle: 'Moral Reasoning Foundation', time: '1 day ago' }
              ].map((activity, index) => (
                <div key={index} className={`content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full ${
                  index !== 4 ? 'border-b border-[rgba(13,0,77,0.15)]' : ''
                }`}>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    {activity.type === 'badge' ? (
                      <div className="relative shrink-0 size-[40px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={activity.icon} />
                      </div>
                    ) : (
                      <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-center relative rounded-[31px] shrink-0 size-[40px]">
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="Check">
                              <path d={svgPaths.p368ccf00} fill="#006632" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex flex-col font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap">
                      <p className="font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px]">{activity.title}</p>
                      <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px]">{activity.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <StudentProfileModal 
          onClose={() => setShowProfileModal(false)} 
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
}