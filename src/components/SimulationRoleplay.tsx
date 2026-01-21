import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, X } from 'lucide-react';
import { Scenario } from '../App';

interface SimulationRoleplayProps {
  scenario: Scenario;
  onComplete: (transcript: Array<{ speaker: string; message: string; timestamp: number }>) => void;
  onBack: () => void;
}

export function SimulationRoleplay({ scenario, onComplete, onBack }: SimulationRoleplayProps) {
  const [isMicActive, setIsMicActive] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [transcript, setTranscript] = useState<Array<{ speaker: string; message: string; timestamp: number }>>([]);
  const [isAvatarSpeaking, setIsAvatarSpeaking] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initial AI greeting
  useEffect(() => {
    const initialMessage = {
      speaker: 'AI',
      message: "Good afternoon. Thank you for meeting with me. I appreciate you making time for this conversation. I wanted to speak with you about a sensitive matter that's been weighing on me.",
      timestamp: Date.now()
    };
    setTranscript([initialMessage]);
    setIsAvatarSpeaking(true);
    
    setTimeout(() => {
      setIsAvatarSpeaking(false);
    }, 3000);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [transcript]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      speaker: 'You',
      message: inputMessage,
      timestamp: Date.now()
    };
    setTranscript(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      setIsAvatarSpeaking(true);
      const aiResponses = [
        "I understand your concern. Let me provide some additional context that might help clarify the situation.",
        "That's a valid point. However, I'm still uncertain about the right course of action given the circumstances.",
        "I appreciate your perspective. The policy does say that, but in this specific case, there are complicating factors.",
        "Thank you for listening. Your guidance has been helpful in thinking through this dilemma.",
        "I see. So you're suggesting I should prioritize the immediate operational needs while still following protocol?",
        "That makes sense. I hadn't considered it from that angle before."
      ];
      
      const aiMessage = {
        speaker: 'AI',
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: Date.now()
      };
      
      setTranscript(prev => [...prev, aiMessage]);
      
      setTimeout(() => {
        setIsAvatarSpeaking(false);
      }, 2500);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleComplete = () => {
    onComplete(transcript);
  };

  const handleExit = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    onBack();
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] relative">
      {/* Header */}
      <div className="bg-[#1d5282] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
        <div className="flex items-center justify-between">
          <p className="text-[#e8e8e8] text-[14px] font-['SF_Mono:Regular',sans-serif]">
            MISSION \\ {scenario.title.toUpperCase()} \\ ROLEPLAY
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(0,0,0,0.3)] rounded-lg">
              <div className="size-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[#4ade80] text-[12px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                LIVE
              </span>
            </div>
            <button
              onClick={handleExit}
              className="px-4 py-2 rounded-lg bg-[#ef4444] hover:bg-[#dc2626] text-white transition-colors font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px]"
            >
              Exit Simulation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-8 flex gap-8 h-[calc(100vh-120px)]">
        {/* Avatar Section */}
        <div className="w-[600px] flex flex-col">
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex-1 flex flex-col shadow-sm">
            {/* Video Avatar */}
            <div className="relative flex-1 bg-gradient-to-br from-[#1d5282] to-[#0d0e1a]">
              <img 
                src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdmF0YXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU4OTU4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Avatar"
                className={`w-full h-full object-cover transition-all ${isAvatarSpeaking ? 'scale-105' : 'scale-100'}`}
              />
              
              {/* Speaking Indicator */}
              {isAvatarSpeaking && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[rgba(0,0,0,0.8)] px-4 py-2 rounded-full">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-[#fcc32a] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-4 bg-[#fcc32a] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-4 bg-[#fcc32a] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-white text-[12px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                    Speaking...
                  </span>
                </div>
              )}

              {/* Avatar Info Overlay */}
              <div className="absolute top-4 left-4 bg-[rgba(0,0,0,0.8)] px-4 py-3 rounded-lg">
                <p className="text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px]">
                  Petty Officer Rivera
                </p>
                <p className="text-[#fcc32a] text-[12px]">{scenario.role}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-[#f9f9f9] border-t border-[rgba(0,0,0,0.1)] p-4 flex items-center justify-center gap-4">
              <button
                onClick={() => setIsMicActive(!isMicActive)}
                className={`p-4 rounded-full transition-all ${
                  isMicActive 
                    ? 'bg-[#fcc32a] hover:bg-[#ffd84d]' 
                    : 'bg-[#e5e5e5] hover:bg-[#d5d5d5]'
                }`}
                title={isMicActive ? 'Mute Microphone' : 'Unmute Microphone'}
              >
                {isMicActive ? (
                  <Mic className="size-[20px] text-black" />
                ) : (
                  <MicOff className="size-[20px] text-[#666666]" />
                )}
              </button>

              <button
                onClick={() => setIsSoundOn(!isSoundOn)}
                className={`p-4 rounded-full transition-all ${
                  isSoundOn 
                    ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' 
                    : 'bg-[#ef4444] hover:bg-[#dc2626]'
                }`}
                title={isSoundOn ? 'Mute Sound' : 'Unmute Sound'}
              >
                {isSoundOn ? (
                  <Volume2 className="size-[20px] text-[#666666]" />
                ) : (
                  <VolumeX className="size-[20px] text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex flex-col shadow-sm">
          {/* Chat Header */}
          <div className="border-b border-[rgba(0,0,0,0.1)] p-4">
            <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px]">
              Conversation
            </h2>
            <p className="text-[#666666] text-[12px] mt-1">
              {transcript.length} messages • Press Enter to send
            </p>
          </div>

          {/* Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {transcript.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.speaker === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.speaker === 'You' ? 'order-2' : 'order-1'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#666666] text-[11px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                      {message.speaker}
                    </span>
                    <span className="text-[#999999] text-[10px]">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      message.speaker === 'You'
                        ? 'bg-[#fcc32a] text-black'
                        : 'bg-[#f5f5f5] text-[#1a1a1a] border border-[rgba(0,0,0,0.1)]'
                    }`}
                  >
                    <p className="text-[14px]">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-[rgba(0,0,0,0.1)] p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                className="flex-1 bg-white border border-[rgba(0,0,0,0.2)] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-[#999999] focus:outline-none focus:border-[#1d5282] transition-colors"
                disabled={isAvatarSpeaking}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isAvatarSpeaking}
                className="px-6 py-3 rounded-lg bg-[#fcc32a] hover:bg-[#ffd84d] disabled:bg-[#cccccc] disabled:cursor-not-allowed text-black transition-colors flex items-center gap-2 font-['Plus_Jakarta_Sans:SemiBold',sans-serif]"
              >
                <Send className="size-[18px]" />
                Send
              </button>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <p className="text-[#666666] text-[12px]">
                {isMicActive ? '🎤 Voice input active' : 'Type or click mic to speak'}
              </p>
              <button
                onClick={handleComplete}
                className="px-4 py-2 rounded-lg bg-[#4ade80] hover:bg-[#22c55e] text-black transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px]"
              >
                Complete Simulation →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
          <div className="bg-white border border-[rgba(0,0,0,0.2)] rounded-lg p-8 max-w-md shadow-2xl">
            <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[20px] mb-4">
              Exit Simulation?
            </h3>
            <p className="text-[#666666] text-[14px] mb-6">
              Your progress will not be saved. Are you sure you want to exit?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-[#666666] text-[#1a1a1a] hover:bg-[#f5f5f5] transition-all font-['Plus_Jakarta_Sans:Medium',sans-serif]"
              >
                Continue Simulation
              </button>
              <button
                onClick={confirmExit}
                className="flex-1 px-4 py-3 rounded-lg bg-[#ef4444] hover:bg-[#dc2626] text-white transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif]"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}