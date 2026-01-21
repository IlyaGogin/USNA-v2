import svgPaths from "../imports/svg-2wasbzlws9";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682544 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

type HeaderProps = {
  currentTab: 'dashboard' | 'scenarios' | 'students' | 'assignments' | 'analytics';
  onTabChange: (tab: 'dashboard' | 'scenarios' | 'students' | 'assignments' | 'analytics') => void;
  onCreateClick: () => void;
  onLogoClick?: () => void;
  onSignOut?: () => void;
};

export default function Header({ currentTab, onTabChange, onCreateClick, onLogoClick, onSignOut }: HeaderProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSignOut = () => {
    setShowProfileModal(false);
    if (onSignOut) {
      onSignOut();
    }
  };

  return (
    <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#05205d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682544} />
      </div>
      
      {/* Logo */}
      <button 
        onClick={onLogoClick}
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]">
          <img alt="USNA Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1">
          <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
        </div>
      </button>

      {/* Navigation Tabs */}
      <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
        <button
          onClick={() => onTabChange('dashboard')}
          className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0"
        >
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
            <p className={`font-medium leading-[20px] relative shrink-0 text-[16px] text-nowrap ${
              currentTab === 'dashboard' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              Dashboard
            </p>
          </div>
          {currentTab === 'dashboard' && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          )}
        </button>

        <button
          onClick={() => onTabChange('scenarios')}
          className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0"
        >
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
            <p className={`font-medium leading-[20px] relative shrink-0 text-[16px] text-nowrap ${
              currentTab === 'scenarios' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              Scenarios
            </p>
          </div>
          {currentTab === 'scenarios' && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          )}
        </button>

        <button
          onClick={() => onTabChange('students')}
          className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0"
        >
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
            <p className={`font-medium leading-[20px] relative shrink-0 text-[16px] text-nowrap ${
              currentTab === 'students' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              Midshipmen
            </p>
          </div>
          {currentTab === 'students' && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          )}
        </button>

        <button
          onClick={() => onTabChange('assignments')}
          className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0"
        >
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
            <p className={`font-medium leading-[20px] relative shrink-0 text-[16px] text-nowrap ${
              currentTab === 'assignments' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              Assignments
            </p>
          </div>
          {currentTab === 'assignments' && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          )}
        </button>

        <button
          onClick={() => onTabChange('analytics')}
          className="content-stretch flex flex-col items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0"
        >
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
            <p className={`font-medium leading-[20px] relative shrink-0 text-[16px] text-nowrap ${
              currentTab === 'analytics' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              Analytics
            </p>
          </div>
          {currentTab === 'analytics' && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#fcc32a] h-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" />
            </div>
          )}
        </button>
      </div>

      {/* Create Button and Avatar */}
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <button
          onClick={onCreateClick}
          className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
        >
          <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Create</p>
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="trim">
                  <path clipRule="evenodd" d={svgPaths.p3b85c100} fill="black" fillRule="evenodd" id="icon" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setShowProfileModal(!showProfileModal)}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition-opacity"
          >
            <div className="absolute left-0 size-[48px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" fill="#1D5282" r="24" />
              </svg>
            </div>
            <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
          </button>

          {/* Profile Modal */}
          {showProfileModal && (
            <ProfileModal
              onClose={() => setShowProfileModal(false)}
              onSignOut={handleSignOut}
            />
          )}
        </div>
      </div>
    </div>
  );
}