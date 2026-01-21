import { Scenario } from '../App';
import { getCourseById } from '../data/lel-curriculum';

interface ScenarioCardProps {
  scenario: Scenario;
  isAdmin?: boolean;
  onClick?: () => void;
}

export function ScenarioCard({ scenario, isAdmin = false, onClick }: ScenarioCardProps) {
  // Get full course information
  const courseInfo = getCourseById(scenario.course);
  const courseCode = courseInfo?.code || scenario.course;

  const handleClick = () => {
    // For Instructor view, always open the preview modal first
    if (isAdmin) {
      onClick?.();
    } 
    // For Midshipman view, check if this is the Milgram Obedience scenario
    else if (scenario.id === 'ne203-w01-002' || scenario.title === 'Milgram Obedience') {
      // Open the external training link
      window.open('https://training.digitalhumans.com/immersive-training/conversation/d7a69a84-b002-4a57-b249-4c3008cd469b?locale=en-US:en-GB:en-AU:en-IN', '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="relative rounded-[8px] size-full cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
      onClick={handleClick}
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#143d61] inset-0 rounded-[8px]" />
        <img alt={scenario.title} className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={scenario.image} />
        <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(185.887948deg, rgba(29, 82, 130, 0) 6.8189%, rgba(21, 34, 56, 0.93) 62.485%), linear-gradient(rgba(29, 82, 130, 0) 0%, rgba(18, 50, 79, 0.2) 64.452%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>

      {/* Content */}
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[96px] items-start justify-center pb-[16px] pt-[24px] px-[24px] relative w-full">
              {/* Badges */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Status Badge */}
                {scenario.status === 'published' && (
                  <div className="bg-[#ebf9f0] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" fill="#006632" r="3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#006632] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">PUBLISHED</p>
                      </div>
                    </div>
                  </div>
                )}
                {scenario.status === 'draft' && (
                  <div className="bg-[#fef3c7] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">DRAFT</p>
                      </div>
                    </div>
                  </div>
                )}
                {scenario.status === 'in-progress' && (
                  <div className="bg-[#fef3c7] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">IN-PROGRESS</p>
                      </div>
                    </div>
                  </div>
                )}
                {scenario.status === 'completed' && (
                  <div className="bg-[#dbeafe] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e40af] text-[14px] text-center text-nowrap">
                        <p className="leading-[16px]">COMPLETED</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Course Badge */}
                <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                  <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                    <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
                      <p className="leading-[16px]">{courseCode}</p>
                    </div>
                  </div>
                </div>
                
                {/* Difficulty Badge */}
                <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                  <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
                      <p className="leading-[16px]">{scenario.difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                      <p className="leading-[28px] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">{scenario.title}</p>
                      <p className="leading-[16px] relative shrink-0 text-[#fcc32a] text-[14px] w-full line-clamp-2">{scenario.subtitle}</p>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9ccbf6] text-[14px] w-full line-clamp-2">{scenario.description}</p>
                  </div>
                </div>
                {scenario.lastEdit && (
                  <p className="font-['SF_Mono:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#50a2ec] text-[10px] w-full">LAST EDIT // {scenario.lastEdit.toUpperCase()}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Border */}
      <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}