import svgPaths from "../imports/svg-a2fa3lnmfx";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";

type Character = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
};

type SelectCharacterModalProps = {
  onClose: () => void;
  onSelectCharacter: (character: Character) => void;
  onCreateNew: () => void;
  selectedCharacterId?: string;
};

export default function SelectCharacterModal({
  onClose,
  onSelectCharacter,
  onCreateNew,
  selectedCharacterId
}: SelectCharacterModalProps) {
  // Mock character data
  const characters: Character[] = [
    {
      id: '1',
      name: 'Chief Rodriguez',
      role: 'Aviation Maintenance Chief',
      imageUrl: imgRectangle12189
    },
    {
      id: '2',
      name: 'Commander Harris',
      role: 'Department Head',
      imageUrl: imgRectangle12189
    },
    {
      id: '3',
      name: 'Petty Officer Chen',
      role: 'Senior Technician',
      imageUrl: imgRectangle12189
    },
    {
      id: '4',
      name: 'Lieutenant Baker',
      role: 'Division Officer',
      imageUrl: imgRectangle12189
    },
    {
      id: '5',
      name: 'Master Chief Thompson',
      role: 'Command Master Chief',
      imageUrl: imgRectangle12189
    },
    {
      id: '6',
      name: 'Ensign Martinez',
      role: 'Junior Officer',
      imageUrl: imgRectangle12189
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-[24px]">
      <div className="bg-[#f6f6fb] content-stretch flex flex-col rounded-[8px] shadow-[0px_5px_24px_4px_rgba(13,0,77,0.05),0px_13px_19px_2px_rgba(13,0,77,0.1),0px_7px_8px_-4px_rgba(13,0,77,0.15)] w-full max-w-[800px] max-h-[90vh]">
        {/* Header */}
        <div className="h-[93px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
            <p className="font-medium leading-[32px] text-[#171717] text-[28px] text-nowrap tracking-[-0.56px]">Select AI Character</p>
            <button
              onClick={onClose}
              className="h-[44px] w-[44px] rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors flex items-center justify-center"
            >
              <div className="size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M1 1L15 15M15 1L1 15" stroke="#0D004D" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-[40px] py-[32px]">
          <div className="flex flex-col gap-[16px]">
            {/* Create New Character Card */}
            <button
              onClick={onCreateNew}
              className="bg-white h-[100px] relative rounded-[12px] w-full hover:bg-[#fafafa] transition-colors group"
            >
              <div aria-hidden="true" className="absolute border-2 border-dashed border-[rgba(13,0,77,0.3)] inset-0 pointer-events-none rounded-[12px] group-hover:border-[#0d004d]" />
              <div className="flex items-center gap-[20px] px-[24px] size-full">
                <div className="bg-[rgba(13,0,77,0.08)] rounded-full size-[52px] flex items-center justify-center">
                  <div className="size-[24px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M12 5V19M5 12H19" stroke="#0D004D" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium leading-[22px] text-[#0d004d] text-[18px]">Create New Character</p>
                  <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">Build a custom AI character for your scenario</p>
                </div>
              </div>
            </button>

            {/* Existing Characters */}
            <div className="flex flex-col gap-[12px]">
              <p className="font-medium leading-[24px] text-[#5d5d5d] text-[16px]">Your characters</p>
              {characters.map((character) => (
                <button
                  key={character.id}
                  onClick={() => onSelectCharacter(character)}
                  className={`bg-white h-[100px] relative rounded-[12px] w-full hover:bg-[#fafafa] transition-colors ${
                    selectedCharacterId === character.id ? 'ring-2 ring-[#0d004d]' : ''
                  }`}
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex items-center gap-[20px] px-[24px] size-full">
                    <div className="content-stretch flex flex-col items-start rounded-[80px] size-[52px]">
                      <div className="content-stretch flex flex-col h-[52px] items-start overflow-clip rounded-[80px] relative shrink-0 w-full">
                        <div className="relative shrink-0 w-full h-full">
                          <img 
                            alt={character.name} 
                            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" 
                            src={character.imageUrl} 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium leading-[22px] text-[#171717] text-[18px]">{character.name}</p>
                      <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px]">{character.role}</p>
                    </div>
                    {selectedCharacterId === character.id && (
                      <div className="size-[24px] flex items-center justify-center">
                        <div className="size-[20px] rounded-full bg-[#0d004d] flex items-center justify-center">
                          <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[93px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-end gap-[16px] px-[40px] relative size-full">
            <button
              onClick={onClose}
              className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#0d004d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              <p className="font-medium leading-[16px] text-[#0d004d] text-[16px] text-center text-nowrap">Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
