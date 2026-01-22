import { ArrowLeft, Play, Check, AlertTriangle } from 'lucide-react';
import { Scenario } from '../data/scenarios';
import imgImage18 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

interface SimulationBriefingProps {
  scenario: Scenario;
  onStartRoleplay: () => void;
  onBack: () => void;
}

export function SimulationBriefing({ scenario, onStartRoleplay, onBack }: SimulationBriefingProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-[#1d5282] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
        <p className="text-[#e8e8e8] text-[14px] font-['SF_Mono:Regular',sans-serif]">
          SIMULATION \\ {scenario.title.toUpperCase()} \\ {scenario.subtitle.toUpperCase()}
        </p>
      </div>

      {/* Mission Context Banner */}
      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] px-8 py-4 border-b border-[rgba(255,255,255,0.2)]">
        <p className="text-white/90 text-[13px] leading-relaxed max-w-[1600px] mx-auto">
          As a future naval officer, you will face ethical challenges that test your character and values. This simulation prepares you to recognize ethical issues, deliberate using moral frameworks, and act with integrity and moral courage.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto p-8 flex gap-8">
        {/* Main Briefing */}
        <div className="flex-1 bg-white border border-[rgba(13,0,77,0.15)] rounded-lg overflow-hidden">
          {/* Hero Section with Image */}
          <div className="relative h-[280px] bg-gradient-to-r from-[#1d5282] to-[rgba(29,82,130,0)]">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={scenario.image} 
                alt={scenario.title}
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d5282] from-[43.733%] to-transparent" />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.24)]" />
            
            <div className="relative h-full flex items-center gap-4 px-10">
              <div className="size-[160px] rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src={imgImage18} 
                  alt="Scenario Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[28px] mb-2">
                  {scenario.title.toUpperCase()}
                </h1>
                <p className="text-[#fcc32a] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[20px]">
                  {scenario.subtitle.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Briefing Details */}
          <div className="px-10 py-0">
            {/* Location, Role, Time */}
            <div className="border-b border-[rgba(13,0,77,0.15)] py-6 space-y-3">
              <div className="flex gap-4">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] w-[160px] shrink-0">
                  [LOCATION]
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                  {scenario.location}
                </p>
              </div>
              <div className="flex gap-4">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] w-[160px] shrink-0">
                  [YOUR ROLE]
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                  {scenario.role}
                </p>
              </div>
              <div className="flex gap-4">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] w-[160px] shrink-0">
                  [TIME]
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                  {scenario.time}
                </p>
              </div>
            </div>

            {/* Situation */}
            <div className="border-b border-[rgba(13,0,77,0.15)] py-6">
              <div className="flex gap-4">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] w-[160px] shrink-0">
                  [SITUATION]
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                  {scenario.situation}
                </p>
              </div>
            </div>

            {/* Dilemma */}
            <div className="py-6">
              <div className="flex gap-4">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] w-[160px] shrink-0">
                  [DILEMMA]
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                  {scenario.dilemma}
                </p>
              </div>
            </div>

            {/* Cultural Preparation - only for language scenarios with keyVocabulary */}
            {scenario.keyVocabulary && scenario.keyVocabulary.length > 0 && (
              <div className="border-t border-[rgba(13,0,77,0.15)] py-6">
                <p className="font-['SF_Mono:Regular',sans-serif] text-[#171717] text-[16px] mb-4">
                  [CULTURAL PREPARATION]
                </p>

                {/* Key Vocabulary */}
                <div className="mb-4">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[#171717] text-[14px] mb-2">
                    Key Vocabulary
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.keyVocabulary.map((vocab, index) => (
                      <span
                        key={index}
                        className="bg-[#e8e6f3] text-[#512eab] px-3 py-1 rounded-[4px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[12px]"
                      >
                        {vocab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cultural Tips */}
                {scenario.culturalTips && scenario.culturalTips.length > 0 && (
                  <div className="mb-4">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[#171717] text-[14px] mb-2">
                      Cultural Tips
                    </p>
                    <ul className="space-y-2">
                      {scenario.culturalTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="size-[16px] text-[#006632] mt-0.5 shrink-0" />
                          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cultural Gotchas */}
                {scenario.culturalGotchas && scenario.culturalGotchas.length > 0 && (
                  <div>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[#171717] text-[14px] mb-2">
                      Cultural Gotchas
                    </p>
                    <ul className="space-y-2">
                      {scenario.culturalGotchas.map((gotcha, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="size-[16px] text-[#b20900] mt-0.5 shrink-0" />
                          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#171717] text-[14px]">
                            {gotcha}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="px-10 py-6 flex gap-4">
            <button
              onClick={onBack}
              className="px-6 py-4 rounded-full border-2 border-[#0d004d] text-[#0d004d] hover:bg-[#0d004d] hover:text-white transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px]"
            >
              ← Back to Portfolio
            </button>
            <button
              onClick={onStartRoleplay}
              className="flex-1 px-6 py-4 rounded-full bg-[#fcc32a] hover:bg-[#ffd84d] text-black transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] flex items-center justify-center gap-2"
            >
              <span>Begin Simulation</span>
              <Play className="size-[16px] fill-current" />
            </button>
          </div>
        </div>

        {/* Sidebar - Mission Info */}
        <div className="w-[572px] bg-[rgba(0,0,0,0.76)] rounded-lg overflow-hidden">
          {/* Primary Mission */}
          <div className="border-b border-[rgba(255,255,255,0.25)] p-6">
            <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-2">
              PRIMARY MISSION
            </p>
            <p className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px]">
              {scenario.primaryMission || 'Navigate the ethical dilemma while maintaining professional standards and Navy values.'}
            </p>
          </div>

          {/* Success Criteria */}
          {scenario.successCriteria && scenario.successCriteria.length > 0 && (
            <div className="border-b border-[rgba(255,255,255,0.25)] p-6">
              <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-3">
                SUCCESS CRITERIA
              </p>
              <ul className="space-y-2">
                {scenario.successCriteria.map((criteria, index) => (
                  <li key={index} className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] flex gap-2">
                    <span className="text-[#fcc32a]">•</span>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Evaluation Metrics */}
          <div className="border-b border-[rgba(255,255,255,0.25)] p-6">
            <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-2">
              MORAL DECISION MAKING
            </p>
            <p className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px]">
              The consistency with which you apply the expected ethics framework (or an alternative, if justified).
            </p>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.25)] p-6">
            <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-2">
              DECISION VELOCITY
            </p>
            <p className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px]">
              The time taken to reach a final decision after the last complicating factor is introduced.
            </p>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.25)] p-6">
            <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-2">
              REASONING QUALITY
            </p>
            <p className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px]">
              Analysis of your justification for your choices, scoring for clarity, coherence, and logical consistency.
            </p>
          </div>

          <div className="p-6">
            <p className="text-[#e8e8e8] font-['SF_Mono:Medium',sans-serif] text-[16px] mb-2">
              SELF-CORRECTION RATE
            </p>
            <p className="text-[#e8e8e8] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px]">
              How often you change your initial stance when new information or pressure is applied.
            </p>
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2">
        <div className="rotate-90 origin-center">
          <p className="text-[#e8e8e8] font-['SF_Mono:Regular',sans-serif] text-[20px] whitespace-nowrap">
            {scenario.course} \\ BRIEFING
          </p>
        </div>
      </div>
    </div>
  );
}