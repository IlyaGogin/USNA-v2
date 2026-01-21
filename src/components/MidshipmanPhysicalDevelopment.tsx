import svgPaths from "../imports/svg-8ov7848mip";
import imgFrame2043682475 from "figma:asset/8cb07111e6bd9f2523160f87f6099c79d47a1154.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import { useState } from "react";
import StudentProfileModal from "./StudentProfileModal";

type MidshipmanPhysicalDevelopmentProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onSignOut?: () => void;
};

// Different graph variations
function Graph1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 80">
        <path 
          d="M0 50 C20 45 30 42 45 38 C60 34 75 28 90 32 C105 36 120 44 135 42 C150 40 165 35 180 38 C190 40 195 42 200 44" 
          stroke="#00B057" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M0 50 C20 45 30 42 45 38 C60 34 75 28 90 32 C105 36 120 44 135 42 C150 40 165 35 180 38 C190 40 195 42 200 44 L200 80 L0 80 Z" 
          fill="url(#gradient1)" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="gradient1" x1="100" x2="100" y1="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B057" />
            <stop offset="1" stopColor="#00B057" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Graph2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 80">
        <path 
          d="M0 42 C15 38 25 35 40 32 C55 29 65 26 80 30 C95 34 105 40 120 44 C135 48 145 52 160 48 C175 44 185 40 200 38" 
          stroke="#00B057" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M0 42 C15 38 25 35 40 32 C55 29 65 26 80 30 C95 34 105 40 120 44 C135 48 145 52 160 48 C175 44 185 40 200 38 L200 80 L0 80 Z" 
          fill="url(#gradient2)" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="gradient2" x1="100" x2="100" y1="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B057" />
            <stop offset="1" stopColor="#00B057" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Graph3() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 80">
        <path 
          d="M0 35 C20 32 30 28 50 30 C70 32 85 38 100 42 C115 46 130 50 145 46 C160 42 175 36 190 32 C195 30 198 29 200 28" 
          stroke="#00B057" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M0 35 C20 32 30 28 50 30 C70 32 85 38 100 42 C115 46 130 50 145 46 C160 42 175 36 190 32 C195 30 198 29 200 28 L200 80 L0 80 Z" 
          fill="url(#gradient3)" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="gradient3" x1="100" x2="100" y1="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B057" />
            <stop offset="1" stopColor="#00B057" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Graph4() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 80">
        <path 
          d="M0 48 C18 52 28 54 45 50 C62 46 72 40 88 38 C104 36 114 38 130 42 C146 46 156 52 172 50 C185 48 192 45 200 42" 
          stroke="#00B057" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M0 48 C18 52 28 54 45 50 C62 46 72 40 88 38 C104 36 114 38 130 42 C146 46 156 52 172 50 C185 48 192 45 200 42 L200 80 L0 80 Z" 
          fill="url(#gradient4)" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="gradient4" x1="100" x2="100" y1="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B057" />
            <stop offset="1" stopColor="#00B057" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Graph5() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 80">
        <path 
          d="M0 45 C22 42 32 38 48 35 C64 32 76 30 92 34 C108 38 120 44 136 48 C152 52 164 54 180 50 C190 48 196 46 200 44" 
          stroke="#00B057" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M0 45 C22 42 32 38 48 35 C64 32 76 30 92 34 C108 38 120 44 136 48 C152 52 164 54 180 50 C190 48 196 46 200 44 L200 80 L0 80 Z" 
          fill="url(#gradient5)" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="gradient5" x1="100" x2="100" y1="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B057" />
            <stop offset="1" stopColor="#00B057" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

type MetricCardProps = {
  title: string;
  status: string;
  value: string;
  graphComponent: React.ReactNode;
  insight: string;
};

function MetricCard({ title, status, value, graphComponent, insight }: MetricCardProps) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Title, Status, Value - Full Width */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="leading-[40px] relative shrink-0 text-[#171717] text-[32px] tracking-[-0.64px] w-full">{title}</p>
                <p className="leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">{status}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <p className="font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">{value}</p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486 1">
                <line stroke="#0D004D" strokeOpacity="0.15" x2="486" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          {/* Insight and Graph - Side by Side */}
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <p className="flex-1 font-medium leading-[20px] relative text-[#5d5d5d] text-[14px]">{insight}</p>
            <div className="w-1/3 shrink-0">
              {graphComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MidshipmanPhysicalDevelopment({ onLogoClick, onTabChange, onSignOut }: MidshipmanPhysicalDevelopmentProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="bg-[#efeef7] relative flex-1 overflow-hidden">
      {/* Header */}
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 right-0 z-10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#05205d] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
        </div>
        <div 
          className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          onClick={onLogoClick}
        >
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <button 
            onClick={() => onTabChange?.("dashboard")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Dashboard</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("scenarios")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Scenarios</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("skills")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
            </div>
          </button>
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Physical Development</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button 
            onClick={() => setShowProfileModal(true)}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="absolute left-0 size-[48px] top-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="#1D5282" r="24" />
            </svg>
            <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">DR</p>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute flex inset-[78px_0_0_0]">
        {/* Left Sidebar */}
        <div className="bg-[#e8e6f3] w-[32.41%] content-stretch flex flex-col gap-[32px] items-center p-[24px] overflow-auto">
          {/* Physical Readiness Card */}
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 32, 93) 0%, rgb(5, 32, 93) 100%), linear-gradient(90deg, rgb(239, 238, 247) 0%, rgb(239, 238, 247) 100%)" }} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
              <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(173.3111deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
            </div>
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
                    <div className="font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px] w-[286px]">
                      <p className="mb-[8px]">Physical</p>
                      <p>readiness</p>
                    </div>
                  </div>
                  <p className="font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white">67</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Cards */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="content-stretch flex items-start p-[32px] relative w-full">
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">You've maintained 92% training consistency this semester</p>
                      <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">12% above class average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="content-stretch flex items-start p-[32px] relative w-full">
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 content-stretch flex flex-col font-medium grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Your cognitive performance in scenarios peaks 24-48 hours after strength training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="content-stretch flex items-start p-[32px] relative w-full">
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 content-stretch flex flex-col font-medium grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">Your recovery pattern suggests you're ready for high-intensity scenarios today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Metric Cards */}
        <div className="flex-1 content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[24px] px-[40px] overflow-auto">
          {/* Row 1 */}
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
            <MetricCard title="Response Rate" status="Good" value="73%" graphComponent={<Graph1 />} insight="Your response rate is above average, indicating quick reflexes and readiness." />
            <MetricCard title="Focus Rate" status="Good" value="27%" graphComponent={<Graph2 />} insight="Your focus rate is consistent, showing sustained attention during training sessions." />
          </div>

          {/* Row 2 */}
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
            <MetricCard title="Attention Span" status="Good" value="6m" graphComponent={<Graph3 />} insight="Your attention span is strong, allowing for effective learning and task completion." />
            <MetricCard title="Fidget Minutes" status="Good" value="4" graphComponent={<Graph4 />} insight="Your fidgeting is minimal, indicating good focus and engagement during training." />
          </div>

          {/* Row 3 */}
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
            <MetricCard title="Steps" status="Good" value="302" graphComponent={<Graph5 />} insight="Your daily step count is healthy, promoting overall physical fitness and well-being." />
            <div className="basis-0 grow min-h-px min-w-px opacity-0" />
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