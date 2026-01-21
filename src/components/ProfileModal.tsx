import { useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-jw2goxqt60";

type ProfileModalProps = {
  onClose: () => void;
  onSignOut: () => void;
};

export default function ProfileModal({ onClose, onSignOut }: ProfileModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div 
      ref={modalRef}
      className="absolute right-0 top-[60px] z-50 w-[260px]"
    >
      <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] size-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[16px] pt-0 px-[16px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Course settings */}
              <button className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full hover:bg-[rgba(13,0,77,0.03)] transition-colors">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                <p className="basis-0 font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px] text-left">Course settings</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="trim">
                        <path clipRule="evenodd" d={svgPaths.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>

              {/* Notification settings */}
              <button className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full hover:bg-[rgba(13,0,77,0.03)] transition-colors">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                <p className="basis-0 font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px] text-left">Notification settings</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="trim">
                        <path clipRule="evenodd" d={svgPaths.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>

              {/* LMS integration */}
              <button className="content-stretch flex gap-[8px] items-start px-0 py-[24px] relative shrink-0 w-full hover:bg-[rgba(13,0,77,0.03)] transition-colors">
                <p className="basis-0 font-medium grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#171717] text-[14px] text-left">LMS integration</p>
                <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="trim">
                        <path clipRule="evenodd" d={svgPaths.pd2da900} fill="black" fillRule="evenodd" id="icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* Sign out button */}
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <button
                onClick={onSignOut}
                className="bg-[#e50b00] content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 hover:bg-[#c00a00] transition-colors"
              >
                <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Sign out</p>
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[16px]">
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="box">
                        <path d={svgPaths.p8ae4c80} fill="white" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}