import { Scenario } from '../App';
import Ne203Mission from '../imports/Ne203Mission';

interface SimulationRoleplayNewProps {
  scenario: Scenario;
  onEndMission: () => void;
}

export function SimulationRoleplayNew({ scenario, onEndMission }: SimulationRoleplayNewProps) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" onClick={(e) => {
      // Check if the "End mission" button was clicked
      const target = e.target as HTMLElement;
      if (target.closest('[data-name="button"]') || target.textContent?.includes('End mission')) {
        onEndMission();
      }
    }}>
      <div className="w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>
        <Ne203Mission />
      </div>
    </div>
  );
}