import svgPaths from "../imports/svg-799rv86d4z";

type Mentor = {
  id: string;
  name: string;
  specialty: string;
  image: string;
};

type MentorProfileModalProps = {
  onClose: () => void;
  mentor: Mentor;
  onSelectMentor?: (mentor: Mentor) => void;
};

const mentors: Mentor[] = [
  { id: '1', name: 'Admiral McRaven', specialty: 'Ethics Mentor', image: '' },
  { id: '2', name: 'General Mattis', specialty: 'Leadership Mentor', image: '' },
  { id: '3', name: 'Captain Abrashoff', specialty: 'Team Building Mentor', image: '' },
  { id: '4', name: 'Colonel Hackworth', specialty: 'Strategic Thinking Mentor', image: '' },
  { id: '5', name: 'Admiral Stockdale', specialty: 'Philosophy & Resilience', image: '' },
];

export default function MentorProfileModal({ onClose, mentor: currentMentor, onSelectMentor }: MentorProfileModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#f6f6fb] rounded-[12px] w-[600px] max-h-[80vh] overflow-hidden shadow-[0px_1px_14px_0px_rgba(13,0,77,0.05),0px_5px_8px_0px_rgba(13,0,77,0.1),0px_3px_5px_-1px_rgba(13,0,77,0.15)]">
        {/* Header */}
        <div className="content-stretch flex items-center justify-between p-[24px] border-b border-[rgba(13,0,77,0.15)]">
          <p className="font-semibold leading-[22px] text-[#171717] text-[18px]">Select Your Mentor</p>
          <button
            onClick={onClose}
            className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="X">
                <path d={svgPaths.p2c65ca00} fill="#171717" id="Vector" />
              </g>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-[24px] overflow-y-auto max-h-[calc(80vh-96px)]">
          <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
            {mentors.map((mentor) => (
              <button
                key={mentor.id}
                onClick={() => {
                  onSelectMentor?.(mentor);
                  onClose();
                }}
                className={`bg-white relative rounded-[8px] w-full hover:bg-[#ededf7] transition-colors ${
                  currentMentor.id === mentor.id ? 'ring-2 ring-[#0074dd]' : ''
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
                  <div className="relative shrink-0 size-[64px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" fill="#1D5282" r="32" />
                    </svg>
                    <p className="absolute font-medium leading-[20px] left-[50%] text-[16px] text-center text-nowrap text-white top-[50%] translate-x-[-50%] translate-y-[-50%]">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col font-medium gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="leading-[20px] text-[#171717] text-[16px] w-full text-left">{mentor.name}</p>
                    <p className="leading-[16px] text-[#0074dd] text-[14px] w-full text-left">{mentor.specialty}</p>
                  </div>
                  {currentMentor.id === mentor.id && (
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" fill="#0074dd" r="12" />
                        <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="content-stretch flex items-center justify-end gap-[12px] p-[24px] border-t border-[rgba(13,0,77,0.15)]">
          <button
            onClick={onClose}
            className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative rounded-[1000px] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
          >
            <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Close</p>
          </button>
        </div>
      </div>
    </div>
  );
}
