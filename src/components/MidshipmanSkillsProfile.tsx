import svgPaths from "../imports/svg-m8xp6jvxca";
import imgImage40 from "figma:asset/65343c0263ff378c8fa576fc1ff00589cf6f456d.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgSkillsRadar from "figma:asset/3a69b850b3e69d29ff06641d9751229009bc47e6.png";
import { imgTrackColor, imgProgress } from "../imports/svg-0vb9b";
import { useState } from "react";
import StudentProfileModal from "./StudentProfileModal";

type MidshipmanSkillsProfileProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onSignOut?: () => void;
};

export default function MidshipmanSkillsProfile({
  onLogoClick,
  onTabChange,
  onSignOut
}: MidshipmanSkillsProfileProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="bg-[#efeef7] min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 relative bg-[#05205d] flex items-center justify-between px-6 py-3 z-10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame2043682546} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer" onClick={onLogoClick}>
          <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1">
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
          </div>
        </div>
        <div className="flex gap-2 items-start justify-center relative flex-1">
          <button 
            onClick={() => onTabChange?.("dashboard")}
            className="flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center px-3 py-2">
              <p className="font-medium leading-[20px] text-[#e8e8e8] text-[16px] text-nowrap">Dashboard</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("scenarios")}
            className="flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center px-3 py-2">
              <p className="font-medium leading-[20px] text-[#e8e8e8] text-[16px] text-nowrap">Scenarios</p>
            </div>
          </button>
          <button onClick={() => onTabChange?.("skills")} className="flex flex-col items-center justify-end rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex items-center justify-center px-3 py-2">
              <p className="font-medium leading-[20px] text-[#fcc32a] text-[16px] text-nowrap">Skills Profile</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="bg-[#fcc32a] h-[4px] rounded-tl-[4px] rounded-tr-[4px] w-full" />
            </div>
          </button>
          <button onClick={() => onTabChange?.("physical")} className="flex flex-col h-[35px] items-center rounded-tl-[8px] rounded-tr-[8px] hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center px-3 py-2">
              <p className="font-medium leading-[20px] text-[#e8e8e8] text-[16px] text-nowrap">Physical Development</p>
            </div>
          </button>
        </div>
        <div className="flex gap-4 items-center relative">
          <button
            onClick={() => setShowProfileModal(true)}
            className="relative size-12 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="#1D5282" r="24" />
            </svg>
            <p className="absolute font-medium leading-[20px] left-1/2 text-[16px] text-center text-white top-1/2 -translate-x-1/2 -translate-y-1/2">DR</p>
          </button>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="bg-[#e8e6f3] w-[42.53%] flex flex-col gap-8 p-6 overflow-auto">
          {/* Radar Chart */}
          <div className="bg-[#f6f6fb] rounded-xl p-8 flex items-center justify-center">
            <img 
              src={imgSkillsRadar} 
              alt="Skills Radar Chart" 
              className="w-full h-auto max-w-full object-contain"
            />
          </div>

          {/* Badges Section */}
          <div className="flex flex-col">
            {/* Skills Wallet Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10">Skills Wallet</p>
              <button className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#f6f6fb] transition-colors">
                <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">See all</p>
              </button>
            </div>

            {/* Badge 1 */}
            <div className="border-b border-[rgba(13,0,77,0.15)] py-8 px-8">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <p className="font-medium text-[28px] text-[#171717] tracking-[-0.56px] leading-9">Moral Reasoning Foundation</p>
                  <p className="font-medium text-sm text-[#0074dd] mt-2">Earned Jan 15, 2025</p>
                </div>
                <div className="w-16 h-16 shrink-0">
                  <img alt="" className="w-full h-full object-cover" src={imgImage40} />
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="border-b border-[rgba(13,0,77,0.15)] py-8 px-8">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <p className="font-medium text-[28px] text-[#171717] tracking-[-0.56px] leading-9">Leadership Ethics</p>
                  <p className="font-medium text-sm text-[#0074dd] mt-2">Earned Dec 20, 2024</p>
                </div>
                <div className="w-16 h-16 shrink-0">
                  <img alt="" className="w-full h-full object-cover" src={imgImage40} />
                </div>
              </div>
            </div>

            {/* In Progress Badge */}
            <div className="border-b border-[rgba(13,0,77,0.15)] py-8 px-8">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <p className="font-medium text-[28px] text-[#171717] tracking-[-0.56px] leading-9">Ethical Frameworks</p>
                  <p className="font-medium text-sm text-[#0074dd] mt-2">40% complete</p>
                  <p className="font-medium text-sm text-[#5d5d5d] mt-2">Complete 2 more advanced ethics scenarios demonstrating multiple frameworks in complex situations.</p>
                </div>
                <div className="w-16 h-16 shrink-0 relative">
                  <svg className="w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(0, 116, 221, 0.15)" strokeWidth="4" />
                    <circle cx="32" cy="32" r="30" fill="none" stroke="#0074DD" strokeWidth="4" strokeDasharray="75.4 188.5" strokeDashoffset="0" transform="rotate(-90 32 32)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-5 p-10 overflow-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-5">
            {/* Leadership Card */}
            <div className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] p-6 flex flex-col min-h-[400px]">
              <div className="flex gap-2.5 items-start mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10 truncate">Leadership</p>
                  <p className="font-medium text-[16px] text-[#0074dd] leading-5 mt-3">Proficient</p>
                </div>
                <div className="flex gap-2.5 items-center shrink-0">
                  <p className="font-semibold text-sm text-[#00b057] opacity-70 leading-4">+4</p>
                  <p className="font-medium text-[48px] text-[#171717] tracking-[-0.96px] leading-[56px]">72</p>
                </div>
              </div>
              <div className="h-px w-full bg-[rgba(13,0,77,0.15)] mb-4" />
              <p className="font-normal text-[16px] text-[#5d5d5d] leading-6 flex-1">You're making confident decisions under pressure and your team responds well to your direction. Your recent scenarios show you're comfortable taking charge in crisis situations.</p>
              <div className="bg-[#f6f6fb] rounded p-2 mt-4">
                <p className="text-[16px]"><span className="font-semibold text-[#0074dd] leading-6">Try</span><span className="font-medium text-[#464646] leading-5"> the Empowering Reluctant Team Members scenario to develop your delegation skills when working with less confident sailors.</span></p>
              </div>
            </div>

            {/* Communication Card */}
            <div className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] p-6 flex flex-col min-h-[400px]">
              <div className="flex gap-2.5 items-start mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10 truncate">Communication</p>
                  <p className="font-medium text-[16px] text-[#0074dd] leading-5 mt-3">Advanced</p>
                </div>
                <div className="flex gap-2.5 items-center shrink-0">
                  <p className="font-semibold text-sm text-[#00b057] opacity-70 leading-4">+3</p>
                  <p className="font-medium text-[48px] text-[#171717] tracking-[-0.96px] leading-[56px]">81</p>
                </div>
              </div>
              <div className="h-px w-full bg-[rgba(13,0,77,0.15)] mb-4" />
              <p className="font-normal text-[16px] text-[#5d5d5d] leading-6 flex-1">Excellent command presence and clarity in tactical situations. You adapt your communication style well for different contexts and your briefings are consistently well-structured.</p>
              <div className="bg-[#f6f6fb] rounded p-2 mt-4">
                <p className="text-[16px]"><span className="font-semibold text-[#0074dd] leading-6">Try</span><span className="font-medium text-[#464646] leading-5"> Cross-Cultural Communication scenarios to prepare for join operations with international partners.</span></p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-5">
            {/* Technical Skills Card */}
            <div className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] p-6 flex flex-col min-h-[400px]">
              <div className="flex gap-2.5 items-start mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10 truncate">Technical Skills</p>
                  <p className="font-medium text-[16px] text-[#0074dd] leading-5 mt-3">Proficient</p>
                </div>
                <div className="flex gap-2.5 items-center shrink-0">
                  <p className="font-semibold text-sm text-[#00b057] opacity-70 leading-4">+5</p>
                  <p className="font-medium text-[48px] text-[#171717] tracking-[-0.96px] leading-[56px]">76</p>
                </div>
              </div>
              <div className="h-px w-full bg-[rgba(13,0,77,0.15)] mb-4" />
              <p className="font-normal text-[16px] text-[#5d5d5d] leading-6 flex-1">Strong systems knowledge and troubleshooting ability. You correctly diagnosed complex failures in your last three engineering scenarios and are ready for more advanced technical challenges.</p>
              <div className="bg-[#f6f6fb] rounded p-2 mt-4">
                <p className="text-[16px]"><span className="font-semibold text-[#0074dd] leading-6">Try</span><span className="font-medium text-[#464646] leading-5"> Advanced Damage Control: Multi-System Integration to build on your current skills and work toward your Tactical Systems credential.</span></p>
              </div>
            </div>

            {/* Ethics Card */}
            <div className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] p-6 flex flex-col min-h-[400px]">
              <div className="flex gap-2.5 items-start mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10 truncate">Ethics</p>
                  <p className="font-medium text-[16px] text-[#0074dd] leading-5 mt-3">Proficient</p>
                </div>
                <div className="flex gap-2.5 items-center shrink-0">
                  <p className="font-semibold text-sm text-[#00b057] opacity-70 leading-4">+1</p>
                  <p className="font-medium text-[48px] text-[#171717] tracking-[-0.96px] leading-[56px]">65</p>
                </div>
              </div>
              <div className="h-px w-full bg-[rgba(13,0,77,0.15)] mb-4" />
              <p className="font-normal text-[16px] text-[#5d5d5d] leading-6 flex-1">You consistently apply the Honor Concept in straightforward situations and show good moral reasoning. You hesitate when facing ethical dilemmas with competing loyalties.</p>
              <div className="bg-[#f6f6fb] rounded p-2 mt-4">
                <p className="text-[16px]"><span className="font-semibold text-[#0074dd] leading-6">Try</span><span className="font-medium text-[#464646] leading-5"> the Moral Courage Under Pressure series - these scenarios will help you build frameworks for navigating ethical gray zones.</span></p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-5">
            {/* Physical Card */}
            <div className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)] p-6 flex flex-col min-h-[400px]">
              <div className="flex gap-2.5 items-start mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[32px] text-[#171717] tracking-[-0.64px] leading-10 truncate">Physical</p>
                  <p className="font-medium text-[16px] text-[#0074dd] leading-5 mt-3">Developing</p>
                </div>
                <div className="flex gap-2.5 items-center shrink-0">
                  <p className="font-semibold text-sm text-[#00b057] opacity-70 leading-4">+2</p>
                  <p className="font-medium text-[48px] text-[#171717] tracking-[-0.96px] leading-[56px]">58</p>
                </div>
              </div>
              <div className="h-px w-full bg-[rgba(13,0,77,0.15)] mb-4" />
              <p className="font-normal text-[16px] text-[#5d5d5d] leading-6 flex-1">Your cardio endurance has improved significantly over the past month, and you're maintaining good training consistency. Your strength benchmarks are below where they need to be for your class year.</p>
              <div className="bg-[#f6f6fb] rounded p-2 mt-4">
                <p className="text-[16px]"><span className="font-semibold text-[#0074dd] leading-6">Try</span><span className="font-medium text-[#464646] leading-5"> incorporating two additional strength sessions per week. Your performance data suggests you recover well, so you can handle the load.</span></p>
              </div>
            </div>

            {/* Empty placeholder */}
            <div className=""></div>
          </div>
        </div>
      </div>

      {/* Student Profile Modal */}
      {showProfileModal && (
        <StudentProfileModal 
          onClose={() => setShowProfileModal(false)}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
}