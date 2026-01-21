import svgPaths from "../imports/svg-ktyldrwkex";
import imgQRCode from "figma:asset/eaaeb1173d5087380d98fa189a23fef44769113f.png";
import imgQRCodeAccountability from "figma:asset/b5787ab306c76f30047adad5d206075e39ce4043.png";
import imgQRCodeDifficultConversation from "figma:asset/5557c72f1fd355e653b25a14fa0ad074ce8e4386.png";
import imgQRCodeQuickDecision from "figma:asset/04c85522855aeb4579e5eda6259e431e60dc3aaa.png";

type QRCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  scenarioId: string;
};

// QR code images mapping - add more as they become available
const qrCodeImages: Record<string, string> = {
  // Example QR code - will need to be updated with actual scenario-specific QR codes
  '11': imgQRCode,
  '12': imgQRCodeQuickDecision, // The Quick Decision
  '13': imgQRCodeDifficultConversation, // The Difficult Conversation
  '14': imgQRCodeAccountability, // The Accountability Question
  // Add more scenario IDs and their QR codes here
};

export default function QRCodeModal({ isOpen, onClose, scenarioId }: QRCodeModalProps) {
  if (!isOpen) return null;

  // Get the QR code for this scenario, or use a default
  const qrCodeSrc = qrCodeImages[scenarioId] || imgQRCode;

  return (
    <>
      {/* Lightbox overlay */}
      <div 
        className="fixed inset-0 bg-[#0D004D] z-40"
        style={{ opacity: 0.4 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[32px] py-[32px] relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-full max-w-[600px]">
          
          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Scenario QR Code</p>
            <button 
              onClick={onClose}
              className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p11ba9b00} fill="var(--fill-0, #171717)" />
                </g>
              </svg>
            </button>
          </div>

          {/* QR Code Image */}
          <div className="flex items-center justify-center w-full">
            <img 
              src={qrCodeSrc} 
              alt="Scenario QR Code"
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Optional: Instructions text */}
          <div className="w-full">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] text-center text-[#5d5d5d] text-[14px]">
              Scan this QR code to access the scenario on your mobile device
            </p>
          </div>
        </div>
      </div>
    </>
  );
}