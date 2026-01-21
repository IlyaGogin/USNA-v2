import { useState } from 'react';
import svgPaths from "../imports/svg-pt4g2wmv6r";

interface ModalAddCriteriaProps {
  onClose: () => void;
  onAdd: (criteria: { name: string; importance: 'low' | 'med' | 'high'; description: string }) => void;
}

export default function ModalAddCriteria({ onClose, onAdd }: ModalAddCriteriaProps) {
  const [name, setName] = useState('');
  const [importance, setImportance] = useState<'low' | 'med' | 'high'>('med');
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    if (name && description) {
      onAdd({ name, importance, description });
      onClose();
    }
  };

  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-[520px]" data-name="Modal: Add Criteria">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[16px] py-[24px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-medium leading-[28px] relative shrink-0 text-[#171717] text-[20px] text-nowrap tracking-[-0.4px]">Add criteria</p>
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
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
            <p className="basis-0 font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#464646] text-[16px]">Importance</p>
            <button
              onClick={() => setImportance('low')}
              className={`content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0 transition-colors ${
                importance === 'low' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
              }`}
            >
              {importance !== 'low' && <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />}
              <p className={`font-medium leading-[16px] relative shrink-0 text-[14px] text-center text-nowrap ${importance === 'low' ? 'text-white' : 'text-[#0d004d]'}`}>Low</p>
            </button>
            <button
              onClick={() => setImportance('med')}
              className={`content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0 transition-colors ${
                importance === 'med' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
              }`}
            >
              {importance !== 'med' && <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />}
              <p className={`font-medium leading-[16px] relative shrink-0 text-[14px] text-center text-nowrap ${importance === 'med' ? 'text-white' : 'text-[#0d004d]'}`}>Med</p>
            </button>
            <button
              onClick={() => setImportance('high')}
              className={`content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0 transition-colors ${
                importance === 'high' ? 'bg-[#0d004d]' : 'hover:bg-[#f5f5f5]'
              }`}
            >
              {importance !== 'high' && <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />}
              <p className={`font-medium leading-[16px] relative shrink-0 text-[14px] text-center text-nowrap ${importance === 'high' ? 'text-white' : 'text-[#0d004d]'}`}>High</p>
            </button>
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
              disabled={!name || !description}
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