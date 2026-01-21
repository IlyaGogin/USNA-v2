import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-v9y4ebmxp8";
import svgPathsMutedMic from "../imports/svg-7koxvlsnb0";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import StudentProfileModal from "./StudentProfileModal";
import ElevenLabsWidget from "./ElevenLabsWidget";

type MidshipmanMentorProps = {
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
  onBack?: () => void;
  onScenarioClick?: (scenarioId: string) => void;
  onSignOut?: () => void;
};

type SMEType = "General" | "Ethics" | "Leadership" | "Strategy" | "Philosophy";

const smeTypes: SMEType[] = ["General", "Ethics", "Leadership", "Strategy", "Philosophy"];

export default function MidshipmanMentor({ onLogoClick, onTabChange, onBack, onSignOut }: MidshipmanMentorProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedSME, setSelectedSME] = useState<SMEType>("General");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isTalking, setIsTalking] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Simulate talking animation - occasional pauses
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTalking(prev => {
        // 95% chance to toggle, 5% chance to stay the same (creates rare pauses)
        return Math.random() > 0.05 ? !prev : prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#efeef7] flex flex-col h-screen w-full overflow-hidden">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative z-10 shrink-0">
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
            <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.228px_1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
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
          <div className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#fcc32a] text-[16px] text-nowrap">Scenarios</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          </div>
          <button 
            onClick={() => onTabChange?.("skills")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
              <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
            </div>
          </button>
          <button 
            onClick={() => onTabChange?.("physical")}
            className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
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
              <circle cx="24" cy="24" fill="#1D5282" r="24" />
            </svg>
            <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">DR</p>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col items-center justify-between p-[24px] md:p-[40px] overflow-hidden">
        {/* Top Section - SME Selector */}
        <div className="content-stretch flex gap-[24px] items-center justify-center flex-wrap z-10">
          <p className="font-medium leading-[20px] text-[#171717] text-[16px] text-nowrap">Talking with your</p>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative rounded-[1000px] min-w-[157px] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <p className="font-medium leading-[16px] text-[#0d004d] text-[16px] text-center text-nowrap">{selectedSME}</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="trim">
                      <path clipRule="evenodd" d={svgPaths.p13cea400} fill="#0D004D" fillRule="evenodd" id="icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </button>
            
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute top-full left-0 mt-[8px] bg-white rounded-[8px] shadow-[0px_4px_6px_0px_rgba(13,0,77,0.1)] overflow-hidden z-20 min-w-full">
                {smeTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedSME(type);
                      setShowDropdown(false);
                    }}
                    className={`w-full px-[16px] py-[12px] text-left hover:bg-[#f6f6fb] transition-colors ${
                      selectedSME === type ? 'bg-[#e8e6f3]' : ''
                    }`}
                  >
                    <p className="font-medium leading-[16px] text-[#171717] text-[16px]">{type}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="font-medium leading-[20px] text-[#171717] text-[16px] text-nowrap">mentor</p>
        </div>

        {/* Center - Animated Voice Circles */}
        <div className="flex-1 flex items-center justify-center w-full relative p-[40px]">
          <style>{`
            @keyframes rotate-clockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            
            @keyframes rotate-counterclockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }
            
            @keyframes rotate-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            
            @keyframes pulse-scale {
              0%, 100% {
                transform: rotate(0deg) scale(1);
              }
              50% {
                transform: rotate(180deg) scale(1.03);
              }
            }

            .circle-outer {
              animation: rotate-clockwise 8s linear infinite;
            }

            .circle-middle {
              animation: rotate-counterclockwise 6s ease-in-out infinite;
            }

            .circle-inner {
              animation: pulse-scale 10s ease-in-out infinite;
            }

            .circle-paused {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="relative w-full max-w-[545.758px] aspect-[545.758/532.865]">
            <svg 
              className={`absolute inset-0 w-full h-full ${!isTalking ? 'circle-paused' : ''}`}
              fill="none" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 545.758 532.865"
              style={{ overflow: 'visible' }}
            >
              <g style={{ transformOrigin: '272.879px 266.4325px' }}>
                <path d={svgPaths.p2c9d6f00} fill="#052E5D" opacity="0.5" className={`circle-outer ${!isTalking ? 'circle-paused' : ''}`} style={{ transformOrigin: 'inherit' }} />
                <path d={svgPaths.p2d7dcd00} fill="#052E5D" className={`circle-middle ${!isTalking ? 'circle-paused' : ''}`} opacity="0.3" style={{ transformOrigin: 'inherit' }} />
                <path d={svgPaths.p1242e780} fill="#052E5D" className={`circle-inner ${!isTalking ? 'circle-paused' : ''}`} opacity="0.3" style={{ transformOrigin: 'inherit' }} />
                <ellipse cx="272.501" cy="267" fill="#E8E6F3" rx="204.5" ry="204" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom Section - Control Buttons */}
        <div className="content-stretch flex gap-[24px] items-center justify-center z-10">
          <button 
            onClick={onBack}
            className="content-stretch flex gap-[12px] items-center justify-center p-[24px] relative rounded-[1000px] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
          >
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p1a57780} fill="#0D004D" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="content-stretch flex gap-[12px] items-center justify-center p-[24px] relative rounded-[1000px] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
          >
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
                  <g id="trim">
                    <path 
                      clipRule="evenodd" 
                      d={isMuted ? svgPathsMutedMic.p1a732d00 : svgPaths.p1a1e100} 
                      fill="#0D004D" 
                      fillRule="evenodd" 
                      id="icon" 
                    />
                  </g>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <StudentProfileModal 
          onClose={() => setShowProfileModal(false)}
          onSignOut={onSignOut}
        />
      )}

      {/* ElevenLabs AI Ethics Coach Widget */}
      <ElevenLabsWidget agentId="agent_9001kew13xthfs69ze3tess1tymz" />
    </div>
  );
}