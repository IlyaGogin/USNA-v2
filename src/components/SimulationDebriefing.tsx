import { Download, Share2, RotateCcw, Home } from 'lucide-react';
import { Scenario, SimulationSession } from '../App';

interface SimulationDebriefingProps {
  scenario: Scenario;
  session: SimulationSession;
  onBack: () => void;
}

export function SimulationDebriefing({ scenario, session, onBack }: SimulationDebriefingProps) {
  const overallScore = session.score || 0;
  const feedback = session.feedback || {
    moralDecisionMaking: 0,
    decisionVelocity: 0,
    reasoningQuality: 0,
    selfCorrectionRate: 0
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-[#4ade80]';
    if (score >= 70) return 'text-[#fcc32a]';
    return 'text-[#ef4444]';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Satisfactory';
    return 'Needs Improvement';
  };

  const metrics = [
    {
      name: 'Moral Decision Making',
      score: feedback.moralDecisionMaking,
      description: 'Consistency in applying ethical frameworks',
      details: 'You demonstrated strong adherence to Navy values and ethical principles throughout the scenario. Your decisions reflected careful consideration of moral implications.'
    },
    {
      name: 'Decision Velocity',
      score: feedback.decisionVelocity,
      description: 'Speed of decision-making under pressure',
      details: 'Your decision-making pace was appropriate for the complexity of the situation. You took time to gather necessary information while maintaining operational tempo.'
    },
    {
      name: 'Reasoning Quality',
      score: feedback.reasoningQuality,
      description: 'Clarity and logic of justifications',
      details: 'Your reasoning was clear and well-articulated. You provided logical justifications for your choices and demonstrated critical thinking skills.'
    },
    {
      name: 'Self-Correction Rate',
      score: feedback.selfCorrectionRate,
      description: 'Adaptability to new information',
      details: 'You showed good flexibility in adjusting your approach when presented with new information, demonstrating adaptive leadership.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#1d5282] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
        <p className="text-[#e8e8e8] text-[14px] font-['SF_Mono:Regular',sans-serif]">
          MISSION \\ {scenario.title.toUpperCase()} \\ DEBRIEFING
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto p-8">
        {/* Overall Score Card */}
        <div className="bg-gradient-to-r from-[#1d5282] to-[#1a2642] border border-[rgba(255,255,255,0.2)] rounded-lg p-8 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-2">
                Mission Complete
              </h1>
              <p className="text-[#fcc32a] text-[18px] font-['Plus_Jakarta_Sans:Medium',sans-serif] mb-4">
                {scenario.title} - {scenario.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[rgba(0,0,0,0.4)] rounded-lg px-6 py-3">
                  <p className="text-[#a2a2a2] text-[12px] mb-1">Overall Score</p>
                  <p className={`${getScoreColor(overallScore)} font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px]`}>
                    {overallScore}%
                  </p>
                  <p className="text-[#e8e8e8] text-[14px] mt-1">
                    {getScoreLabel(overallScore)}
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-3">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-[rgba(0,0,0,0.3)] rounded-lg p-3">
                      <p className="text-[#a2a2a2] text-[10px] mb-1">{metric.name}</p>
                      <p className={`${getScoreColor(metric.score)} font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[20px]`}>
                        {metric.score}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-[#1d5282] text-white transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif] flex items-center gap-2">
                <Download className="size-[18px]" />
                Download Report
              </button>
              <button className="px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-[#1d5282] text-white transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif] flex items-center gap-2">
                <Share2 className="size-[18px]" />
                Share Results
              </button>
            </div>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px] mb-1">
                    {metric.name}
                  </h3>
                  <p className="text-[#666666] text-[14px]">{metric.description}</p>
                </div>
                <div className="text-right">
                  <p className={`${getScoreColor(metric.score)} font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[32px]`}>
                    {metric.score}%
                  </p>
                  <p className="text-[#666666] text-[12px]">{getScoreLabel(metric.score)}</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#e5e5e5] rounded-full h-3 mb-4">
                <div
                  className={`h-3 rounded-full transition-all ${
                    metric.score >= 90 ? 'bg-[#4ade80]' :
                    metric.score >= 70 ? 'bg-[#fcc32a]' :
                    'bg-[#ef4444]'
                  }`}
                  style={{ width: `${metric.score}%` }}
                />
              </div>

              {/* Feedback */}
              <div className="bg-[#f5f5f5] border border-[rgba(0,0,0,0.1)] rounded-lg p-4">
                <p className="text-[#1a1a1a] text-[14px]">{metric.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[20px] mb-4 flex items-center gap-2">
            <span className="text-[24px]">🤖</span>
            AI Insights & Recommendations
          </h2>
          
          <div className="space-y-4">
            <div className="bg-[#f5f5f5] border border-[rgba(0,0,0,0.1)] rounded-lg p-4">
              <h4 className="text-[#4ade80] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-2">
                ✓ Strengths
              </h4>
              <ul className="space-y-2 text-[#1a1a1a] text-[14px]">
                <li className="flex gap-2">
                  <span className="text-[#4ade80]">•</span>
                  <span>Strong application of Navy core values in decision-making</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#4ade80]">•</span>
                  <span>Effective communication and active listening skills</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#4ade80]">•</span>
                  <span>Demonstrated empathy while maintaining professional boundaries</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f5f5] border border-[rgba(0,0,0,0.1)] rounded-lg p-4">
              <h4 className="text-[#fcc32a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-2">
                ⚠ Areas for Improvement
              </h4>
              <ul className="space-y-2 text-[#1a1a1a] text-[14px]">
                <li className="flex gap-2">
                  <span className="text-[#fcc32a]">•</span>
                  <span>Consider exploring alternative perspectives more thoroughly before deciding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#fcc32a]">•</span>
                  <span>Practice balancing urgency with deliberation in crisis scenarios</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f5f5] border border-[rgba(0,0,0,0.1)] rounded-lg p-4">
              <h4 className="text-[#1d5282] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-2">
                📚 Recommended Resources
              </h4>
              <ul className="space-y-2 text-[#1a1a1a] text-[14px]">
                <li className="flex gap-2">
                  <span className="text-[#1d5282]">•</span>
                  <span>Review: NE-203 Chapter 4 - Ethical Decision Making in Crisis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1d5282]">•</span>
                  <span>Practice: Similar scenarios focusing on stakeholder analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conversation Transcript */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[20px] mb-4">
            Conversation Transcript
          </h2>
          <div className="bg-[#f5f5f5] border border-[rgba(0,0,0,0.1)] rounded-lg p-4 max-h-[400px] overflow-y-auto">
            <div className="space-y-3">
              {session.transcript?.map((message, index) => (
                <div key={index} className="border-b border-[rgba(0,0,0,0.05)] pb-3 last:border-0">
                  <p className="text-[#1d5282] text-[12px] mb-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">
                    {message.speaker} - {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                  <p className="text-[#1a1a1a] text-[14px]">{message.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-full bg-[#fcc32a] hover:bg-[#ffd84d] text-black transition-all font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px] flex items-center gap-2"
          >
            <Home className="size-[20px]" />
            Return to Dashboard
          </button>
          <button
            className="px-8 py-4 rounded-full border-2 border-[#1d5282] hover:bg-[#1d5282] hover:text-white text-[#1d5282] transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] flex items-center gap-2"
          >
            <RotateCcw className="size-[20px]" />
            Retry Scenario
          </button>
        </div>
      </div>
    </div>
  );
}