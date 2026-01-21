import { Scenario } from '../App';
import Ne203Briefing from '../imports/Ne203Briefing';

interface SimulationBriefingNewProps {
  scenario: Scenario;
  onStartMission: () => void;
  onBack: () => void;
}

export function SimulationBriefingNew({ scenario, onStartMission, onBack }: SimulationBriefingNewProps) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" onClick={(e) => {
      // Check if the "Start mission" button was clicked
      const target = e.target as HTMLElement;
      if (target.closest('[data-name="button"]') || target.textContent?.includes('Start mission')) {
        onStartMission();
      }
    }}>
      <div className="w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>
        <Ne203Briefing />
      </div>
    </div>
  );
}