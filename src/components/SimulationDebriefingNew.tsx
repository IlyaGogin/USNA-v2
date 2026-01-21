import { Scenario, SimulationSession } from '../App';
import Ne203Aar from '../imports/Ne203Aar';

interface SimulationDebriefingNewProps {
  scenario: Scenario;
  session: SimulationSession;
  onContinue: () => void;
}

export function SimulationDebriefingNew({ scenario, session, onContinue }: SimulationDebriefingNewProps) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" onClick={(e) => {
      // Check if the "Continue" button was clicked
      const target = e.target as HTMLElement;
      if (target.closest('[data-name="button"]') || target.textContent?.includes('Continue')) {
        onContinue();
      }
    }}>
      <div className="w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>
        <Ne203Aar />
      </div>
    </div>
  );
}