import { useState } from 'react';
import svgPaths from "../imports/svg-vt4om84vmc";

interface ModalAddConflictProps {
  onClose: () => void;
  onAdd: (conflict: { title: string; subtitle: string; description: string }) => void;
}

export default function ModalAddConflict({ onClose, onAdd }: ModalAddConflictProps) {
  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    if (name && subtitle && description) {
      onAdd({ title: name, subtitle, description });
      onClose();
    }
  };

  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-[520px]" data-name="Modal: Add Conflict">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Add conflict</p>
            <button onClick={onClose} className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity" data-name="X">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" stroke="#171717" strokeWidth="2">
                <path d={svgPaths.pd841500} />
              </svg>
            </button>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-white relative rounded-[4px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-white relative rounded-[4px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Subtitle"
                className="w-full p-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-white h-[120px] relative rounded-[4px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1d5282] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full h-full p-[12px] font-normal leading-[24px] text-[#464646] text-[16px] outline-none bg-transparent resize-none"
              />
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
            <button 
              onClick={onClose}
              className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Cancel</p>
            </button>
            <button 
              onClick={handleContinue}
              disabled={!name || !subtitle || !description}
              className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#e6b900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Continue</p>
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path clipRule="evenodd" d={svgPaths.pd2da900} fill="black" fillRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}