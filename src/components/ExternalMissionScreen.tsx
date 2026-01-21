import { X, Loader2, Play, ExternalLink, RefreshCw } from 'lucide-react';
import { useState, memo, useRef } from 'react';

type ExternalMissionScreenProps = {
  url: string;
  title: string;
  onEndMission: () => void;
};

export const ExternalMissionScreen = memo(function ExternalMissionScreen({ url, title, onEndMission }: ExternalMissionScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasLoadedRef = useRef(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout>();

  const handleBeginMission = () => {
    setHasStarted(true);
    setIsLoading(true);
    setHasError(false);
    
    // Set a timeout to detect if loading takes too long (potential rate limit)
    loadTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout
  };

  const handleOpenInNewWindow = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onEndMission(); // Return to previous screen
  };

  const handleRetry = () => {
    setHasError(false);
    setHasStarted(false);
    hasLoadedRef.current = false;
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
  };

  const handleIframeLoad = () => {
    // Only process the first load event
    if (hasLoadedRef.current) {
      return;
    }
    
    hasLoadedRef.current = true;
    
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
    
    // Check if iframe actually loaded content or an error page
    setTimeout(() => {
      try {
        // Try to check if we can access the iframe content
        // This will fail for cross-origin, but that's expected for successful loads
        const iframeDoc = iframeRef.current?.contentDocument;
        setIsLoading(false);
      } catch (e) {
        // Cross-origin - this is actually good, means it loaded
        setIsLoading(false);
      }
    }, 500);
  };

  const handleIframeError = () => {
    console.error('Iframe failed to load');
    setIsLoading(false);
    setHasError(true);
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header Bar */}
      <div className="h-[60px] bg-[#05205d] flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <p className="text-white font-medium text-sm tracking-wide">
            MISSION // {title.toUpperCase()}
          </p>
        </div>
        <button
          onClick={onEndMission}
          className="bg-[#e50b00] hover:bg-[#c00a00] text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          <span>End Mission</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative w-full h-full bg-black overflow-hidden">
        {/* Ready Screen - Before Mission Starts */}
        {!hasStarted && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-[#0a1628] to-black">
            <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-white tracking-wide">
                  MISSION READY
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  You are about to enter the {title} training simulation. This will launch an interactive scenario with a digital human instructor.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={handleBeginMission}
                  className="bg-[#e50b00] hover:bg-[#c00a00] text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="text-lg">Begin Mission</span>
                </button>
                <button
                  onClick={handleOpenInNewWindow}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-3"
                >
                  <ExternalLink size={18} />
                  <span>Open in New Window</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Screen */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-[#0a1628] to-black">
            <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
              <div className="w-20 h-20 rounded-full bg-red-900/50 flex items-center justify-center">
                <X size={40} className="text-red-400" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white tracking-wide">
                  CONNECTION ISSUE
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  The simulation couldn't load in embedded mode. This may be due to rate limiting or security restrictions.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={handleOpenInNewWindow}
                  className="bg-[#e50b00] hover:bg-[#c00a00] text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink size={20} />
                  <span className="text-lg">OPEN IN NEW WINDOW</span>
                </button>
                <button
                  onClick={handleRetry}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-3"
                >
                  <RefreshCw size={18} />
                  <span>Try Again</span>
                </button>
              </div>
              <p className="text-white/40 text-xs mt-2">
                Opening in a new window often resolves connection issues
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {hasStarted && isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="flex flex-col items-center gap-3 text-white/50">
              <Loader2 className="animate-spin" size={32} />
              <p className="text-sm font-medium tracking-wide">INITIALIZING SIMULATION...</p>
            </div>
          </div>
        )}

        {/* Iframe - Only render when started */}
        {hasStarted && !hasError && (
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            allow="microphone; camera; autoplay; fullscreen"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function - only re-render if props actually change
  return prevProps.url === nextProps.url && 
         prevProps.title === nextProps.title &&
         prevProps.onEndMission === nextProps.onEndMission;
});