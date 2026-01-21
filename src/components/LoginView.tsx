import { useState } from 'react';
import { UserRole } from '../App';
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import Instructor from '../imports/Instructor-24-88';
import Midshipman from '../imports/Midshipman-24-84';

interface LoginViewProps {
  onLogin: (role: UserRole, name: string) => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);

  const handleContinue = () => {
    if (selectedRole) {
      const name = selectedRole === 'admin' ? 'LCDR Smith' : 'MIDN Johnson';
      onLogin(selectedRole, name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1d5282] to-[#0d0e1a] flex items-center justify-center p-4">
      <div className="max-w-[600px] w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="size-[100px] bg-white rounded-full p-2 shadow-2xl">
              <img alt="USNA Logo" className="object-cover size-full rounded-full" src={imgImage17} />
            </div>
          </div>
          <h1 className="text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] mb-3">
            USNA Character Development
          </h1>
          <p className="text-[#fcc32a] text-[16px] font-['Plus_Jakarta_Sans:Medium',sans-serif] mb-2">
            Leadership, Ethics, and Law
          </p>
          <p className="text-white/80 text-[14px] leading-relaxed max-w-[400px] mx-auto">
            Preparing leaders of character for naval service through ethical leadership simulations
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }} className="space-y-5">
          <div>
            <label className="block text-white text-[14px] mb-3 font-['Plus_Jakarta_Sans:Medium',sans-serif] text-center">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('admin');
                  onLogin('admin', 'LCDR Smith');
                }}
                className="aspect-[4/3] rounded-[8px] border transition-all overflow-hidden border-white/30 hover:border-[#fcc32a] hover:ring-2 hover:ring-[#fcc32a]/50"
              >
                <Instructor />
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('student');
                  onLogin('student', 'MIDN Johnson');
                }}
                className="aspect-[4/3] rounded-[8px] border transition-all overflow-hidden border-white/30 hover:border-[#fcc32a] hover:ring-2 hover:ring-[#fcc32a]/50"
              >
                <Midshipman />
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center text-white/60 text-[12px]">
          <p>United States Naval Academy</p>
          <p className="mt-1">Leadership & Ethics Training Platform</p>
        </div>
      </div>
    </div>
  );
}