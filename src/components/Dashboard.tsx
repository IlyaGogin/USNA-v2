import svgPaths from "../imports/svg-rb6gmn5z8x";
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import imgImage40 from "figma:asset/65343c0263ff378c8fa576fc1ff00589cf6f456d.png";
import imgScenarioCard from "figma:asset/4faf473023df43c6db2235ada5b9e93b8232d875.png";
import imgScenarioCard1 from "figma:asset/16f078e810c44ea0d7cbaed6d9a76428f3dc6fe8.png";
import imgImage38 from "figma:asset/561a60f605f61f0bbcbea5fe03d55134ac8ad233.png";
import imgImage39 from "figma:asset/948424b909e051d8a51652c2b4bd8c87cfd92e67.png";
import { useEffect, useRef, useState } from "react";

type DashboardProps = {
  onCreateScenario: () => void;
  onAssignScenario: () => void;
  onTabChange?: (tab: 'dashboard' | 'scenarios' | 'students' | 'assignments' | 'analytics') => void;
};

type ActivityItem = {
  type: 'badge' | 'score' | 'avatar';
  midshipmanName: string;
  action: string;
  item: string;
  time: string;
  score?: number;
  avatarImage?: string;
};

const recentActivity: ActivityItem[] = [
  { type: 'avatar', midshipmanName: 'J. Rodriguez', action: 'earned', item: 'Leadership Excellence', time: '2 hours ago', avatarImage: imgImage38 },
  { type: 'score', midshipmanName: 'A. Chen', action: 'completed', item: 'The Authority Question', time: '3 hours ago', score: 92 },
  { type: 'score', midshipmanName: 'M. Thompson', action: 'completed', item: 'The Launch Decision', time: '5 hours ago', score: 78 },
  { type: 'score', midshipmanName: 'D. Washington', action: 'completed', item: 'The Dark Hours', time: '1 day ago', score: 85 },
  { type: 'avatar', midshipmanName: 'C. Kowalski', action: 'earned', item: 'Moral Reasoning Foundation', time: '1 day ago', avatarImage: imgImage39 },
  { type: 'avatar', midshipmanName: 'S. Patel', action: 'earned', item: 'Leadership Excellence', time: '2 days ago', avatarImage: imgImage38 },
  { type: 'score', midshipmanName: 'K. O\'Brien', action: 'completed', item: 'The Moral Roadmap', time: '2 days ago', score: 88 },
  { type: 'score', midshipmanName: 'L. Martinez', action: 'completed', item: '2 AM Courage', time: '3 days ago', score: 73 },
  { type: 'score', midshipmanName: 'R. Johnson', action: 'completed', item: 'Abu Ghraib Echo', time: '3 days ago', score: 95 },
  { type: 'avatar', midshipmanName: 'T. Nguyen', action: 'earned', item: 'Moral Reasoning Foundation', time: '4 days ago', avatarImage: imgImage39 },
  { type: 'avatar', midshipmanName: 'E. Williams', action: 'earned', item: 'Leadership Excellence', time: '5 days ago', avatarImage: imgImage38 },
  { type: 'score', midshipmanName: 'B. Anderson', action: 'completed', item: 'Ethical Leadership Under Fire', time: '5 days ago', score: 81 },
  { type: 'score', midshipmanName: 'H. Kim', action: 'completed', item: 'The Launch Decision', time: '1 week ago', score: 67 },
  { type: 'score', midshipmanName: 'N. Garcia', action: 'completed', item: 'The Dark Hours', time: '1 week ago', score: 90 },
  { type: 'avatar', midshipmanName: 'P. Jackson', action: 'earned', item: 'Moral Reasoning Foundation', time: '1 week ago', avatarImage: imgImage39 }
];

function ActivityRow({ activity }: { activity: ActivityItem }) {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
        {activity.type === 'score' && (
          <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-center relative rounded-[31px] shrink-0 size-[40px]">
            <p className="font-medium leading-[20px] relative shrink-0 text-[#006632] text-[16px] text-center text-nowrap">{activity.score}</p>
          </div>
        )}
        {activity.type === 'avatar' && activity.avatarImage && (
          <div className="relative shrink-0 size-[40px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={activity.avatarImage} />
          </div>
        )}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col font-medium gap-[8px] items-start justify-center pl-0 pr-[16px] py-0 relative w-full">
              <p className="leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">{activity.midshipmanName} {activity.action}</p>
              <p className="leading-[22px] relative shrink-0 text-[#171717] text-[16px] w-full">{activity.item}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">{activity.time}</p>
    </div>
  );
}

export default function Dashboard({ onCreateScenario, onAssignScenario, onTabChange }: DashboardProps) {
  const welcomeTextRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const checkTextOverflow = () => {
      if (welcomeTextRef.current) {
        // Check if text height exceeds 2 lines (56px line-height * 2 = 112px)
        const isOverflowing = welcomeTextRef.current.scrollHeight > 120;
        setIsCompact(isOverflowing);
        setIsCalculated(true);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, []);

  return (
    <div className="bg-[#efeef7] relative w-full h-[calc(100vh-78px)]">
      {/* Left Section - Welcome and Stats */}
      <div className="absolute bg-[#e8e6f3] content-stretch flex flex-col gap-[32px] inset-[0_67.59%_0_0] items-start overflow-auto p-[40px]">
        <div className="content-stretch flex flex-col font-medium gap-[20px] items-start relative shrink-0 w-full">
          <div 
            ref={welcomeTextRef}
            className={`relative shrink-0 text-[#171717] tracking-[-0.96px] w-full break-words ${
              !isCalculated ? 'invisible' : ''
            } ${
              isCompact 
                ? 'text-[36px] leading-[42px]' 
                : 'text-[48px] leading-[56px]'
            }`}
          >
            <p className="mb-0 break-words">Welcome back,</p>
            <p className="break-words">Captain Morrison</p>
          </div>
          <p className="leading-[28px] relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px] w-full">Ethics Instructor</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute inset-0 rounded-[12px] bg-[#05205d]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
            </div>
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative w-full">
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
                    <p className="basis-0 font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#e8e8e8] text-[18px]">Avg. Class Score</p>
                  </div>
                  <p className="font-normal leading-[120px] relative shrink-0 text-[120px] text-center text-nowrap text-white">76</p>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                      <line stroke="white" strokeOpacity="0.25" x2="448" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-center text-nowrap w-full">
                  <p className="relative shrink-0">Sessions today</p>
                  <p className="relative shrink-0">12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                    <p className="font-medium leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">3 below threshold in Consequences</p>
                    <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Try a targeted scenario to help these midshipmen</p>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">64% of midshipmen have achieved</p>
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Advanced Ethics</p>
                    </div>
                    <div className="relative shrink-0 size-[64px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onTabChange?.('students')}
              className="content-stretch flex gap-[12px] items-start px-[24px] py-[16px] relative rounded-[1000px] shrink-0 w-fit hover:bg-[rgba(13,0,77,0.05)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                <p className="leading-[16px]">View Midshipmen</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section - Action Cards */}
      <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_30.09%_0_32.41%] items-start px-[40px] py-[32px]">
        <button
          onClick={onCreateScenario}
          className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full hover:scale-[1.01] transition-transform"
        >
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard1} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(187.405393deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-end p-[24px]">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                        <p className="leading-[28px] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px]">Create new scenario</p>
                        <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px]">Create a new scenario from scratch</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p2c65ca00} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
          </div>
        </button>

        <button
          onClick={onAssignScenario}
          className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full hover:scale-[1.01] transition-transform"
        >
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgScenarioCard} />
              <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(187.405393deg, rgba(29, 82, 130, 0) 36.161%, rgba(21, 34, 56, 0.93) 77.66%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 82.493%)" }} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col inset-[0.25px_0_-0.75px_0] items-start justify-end p-[24px]">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full">
                        <p className="leading-[28px] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] text-left">Assign scenario</p>
                        <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] text-left">Browse the library and assign scenarios to midshipmen</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p2c65ca00} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]" />
          </div>
        </button>
      </div>

      {/* Right Section - Recent Activity */}
      <div className="absolute content-stretch flex flex-col gap-[24px] inset-[0_0_0_69.91%] items-start pb-[0px] pl-[0px] pr-[40px] pt-[32px] overflow-auto">
        <p className="font-semibold leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Recent Activity</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {recentActivity.map((activity, index) => (
            <ActivityRow key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}