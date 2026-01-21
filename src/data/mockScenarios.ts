import { Scenario } from '../App';
import imgFrame6 from "figma:asset/3488fd780dd6834e569d406a4c78763511974a9c.png";

// Scenario images from Figma
import imgInnerRing from "figma:asset/b25dac17eafb0809e8e66dfb8e38b0b478c49c3a.png";
import imgChallenger from "figma:asset/094aa37446df343e91a51c5e6370d33a29a9117e.png";
import imgMilgram from "figma:asset/e072d8b684744120a64985000a2e8c7945b7d891.png";
import imgAbuGhraib from "figma:asset/ac2d5005d1b01e0b1c79cb222edb110a7ae9648c.png";
import imgTrolley from "figma:asset/6577fdf878acc457e6a882fedb4da095ff1d4788.png";
import imgMyLai from "figma:asset/f86ef3ae06ccf54801dec90a63ad85ef95c67f7d.png";
import imgWhistleblowing from "figma:asset/81f017d3739b89f658f70b868744133c1c4cd42d.png";
import imgLucifer from "figma:asset/3bd37c1241aaaab4f0493222504af7f42f8b19f9.png";
import imgStanford from "figma:asset/6abce4617fb44ccfe048833e408277179041353b.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";

export const mockScenarios: Scenario[] = [
  // NE-203 Week 1 - Moral Perception & Social Influence
  {
    id: 'ne203-w01-001',
    title: 'The Inner Ring',
    subtitle: 'Social Influence & Peer Pressure',
    area: 'ethics',
    course: 'NE-203',
    module: 1,
    status: 'published',
    difficulty: 'INT: 3/5',
    complexityLevel: 3,
    image: imgInnerRing,
    description: 'Train participants to recognize and resist unhealthy social pressures to belong to exclusive "inner rings" or in-groups.',
    location: 'Norfolk Naval Base, VA',
    role: 'Junior Officer (O-2/Ensign or O-3/Lieutenant)',
    time: 'Week 2-3 of new assignment // 15-20 mins',
    lastEdit: 'Dec 15, 2024',
    situation: 'You are a Junior Officer newly assigned to USS Valor. You\'ve been at the command for 2-3 weeks. LCDR Hayes, the Executive Officer\'s assistant, has invited you for a private conversation. He will begin the conversation.',
    dilemma: 'LCDR Hayes tests whether you can be \"trusted\" to be part of the inner circle by pressuring you to prove loyalty through bending rules, sharing confidential information, or excluding others to gain acceptance into an exclusive group.',
    briefing: 'This scenario tests whether you can recognize subtle social manipulation and maintain integrity when pressured to compromise values for social acceptance and career advancement. The pressure involves bending rules, sharing confidential information inappropriately, excluding others to prove loyalty, and rationalizing compromises as \"how things work.\"',
    frameworks: ['Moral Perception', 'Social Influence', 'Peer Pressure', 'Integrity', 'Inner Ring'],
    primaryMission: 'Navigate this conversation while maintaining your integrity and professional standards. Recognize manipulation tactics, maintain ethical boundaries, and balance building professional relationships with maintaining integrity.',
    successCriteria: [
      'Recognize social manipulation tactics',
      'Maintain ethical boundaries without alienating colleagues',
      'Navigate organizational dynamics with integrity',
      'Exercise moral courage by refusing to compromise values'
    ],
    tags: ['Week 1', 'Moral Perception', 'Social Influence', 'Peer Pressure', 'Integrity', 'Inner Ring']
  },
  {
    id: 'ne203-w01-003',
    title: 'The Maintenance Dilemma',
    subtitle: 'Moral Perception',
    area: 'ethics',
    course: 'NE-203',
    module: 1,
    status: 'published',
    difficulty: 'EASY: 1/5',
    complexityLevel: 1,
    image: imgMidshipman,
    description: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.',
    location: 'Naval Air Station Oceana',
    role: 'Lieutenant (JG), Maintenance Division Officer',
    time: '1800, Friday evening // 15-20 mins',
    lastEdit: 'Jan 9, 2026',
    situation: 'You are a junior officer (LTJG) serving as the Maintenance Division Officer aboard a naval air station. It\'s Friday evening, 1800, and you\'re conducting a final walkthrough before a long weekend. During your inspection, you discover that Chief Rodriguez, your highly respected Aviation Maintenance Chief with 18 years of experience and an impeccable safety record, is about to sign off on maintenance logs for work that hasn\'t been fully completed. The aircraft in question is scheduled for a training flight Monday morning. The incomplete work involves a non-critical inspection item that "usually checks out fine" and has a low historical failure rate. However, this item is still required by regulation. The Commanding Officer has been pushing hard for improved readiness metrics, and your division has been struggling to meet targets. The CO has specifically praised divisions that maintain high readiness numbers, and other divisions have been rumored to take similar shortcuts.',
    dilemma: 'Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor\'s career, or trusting his experience while risking flight safety and your own integrity. Your career evaluation is coming up, and Chief Rodriguez\'s endorsement matters significantly.',
    briefing: 'This scenario tests your ability to identify when organizational pressure creates rationalization for ethical shortcuts and to navigate the tension between regulatory compliance, operational pressure, and the human element of leadership while maintaining unit effectiveness.',
    frameworks: ['Moral Perception', 'Integrity', 'Regulatory Compliance', 'Leadership Under Pressure'],
    primaryMission: 'Navigate the tension between regulatory compliance, operational pressure, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold professional standards when facing personal and institutional pressures.',
    successCriteria: [
      'Identify when organizational pressure creates rationalization for ethical shortcuts',
      'Demonstrate integrity by addressing the ethical issue directly rather than avoiding it',
      'Navigate the conversation with respect while maintaining your position on the ethical issue',
      'Identify appropriate escalation pathways when facing organizational pressure'
    ],
    tags: ['Week 1', 'Moral Perception', 'Integrity', 'Regulatory Compliance', 'Safety Standards', 'Organizational Pressure']
  },

  // NE-203 Week 2 - Moral Courage
  {
    id: 'ne203-w02-001',
    title: 'The Challenger Decision',
    subtitle: 'Moral Courage and Organizational Pressure',
    area: 'ethics',
    course: 'NE-203',
    module: 2,
    status: 'published',
    difficulty: 'HARD: 5/5',
    complexityLevel: 5,
    image: imgChallenger,
    description: 'Exercise moral courage when facing organizational pressure to remain silent about safety or ethical concerns.',
    location: 'Naval Air Station Pensacola, FL',
    role: 'Engineer or Junior Officer (O-2/O-3)',
    time: 'Final meeting before operation scheduled tomorrow // 15-20 mins',
    lastEdit: 'Dec 13, 2024',
    situation: 'A critical flight operation is scheduled for tomorrow morning. Weather conditions will be below operational limits for aircraft systems. You\'ve already raised concerns once and been overruled. CAPT Foster will begin the conversation.',
    dilemma: 'CAPT Foster wants to proceed despite your safety concerns. The operation is high-profile, schedule is tight, others have already agreed to proceed. You must exercise moral courage when facing organizational pressure to remain silent.',
    briefing: 'This scenario tests whether you can exercise moral courage when facing organizational pressure to remain silent about legitimate safety concerns. The pressure includes schedule pressure, appeals to authority and experience, rationalization ("we\'ve done this before"), social pressure (others have agreed), and career implications.',
    frameworks: ['Moral Courage', 'Rationalization', 'Organizational Pressure', 'Whistleblowing', 'Roger Boisjoly'],
    primaryMission: 'Effectively communicate your concerns and exercise moral courage in the face of organizational pressure. Articulate safety concerns with evidence, persist professionally, and recognize rationalization.',
    successCriteria: [
      'Articulate safety concerns effectively using evidence and logic',
      'Persist professionally under pressure while refusing to be silenced',
      'Recognize and resist organizational rationalization',
      'Escalate appropriately through proper channels when standard channels fail'
    ],
    tags: ['Week 2', 'Moral Courage', 'Rationalization', 'Organizational Pressure', 'Whistleblowing', 'Roger Boisjoly']
  },

  // NE-203 Week 4 - Moral Triage & Constraints
  {
    id: 'ne203-w04-001',
    title: 'Crimson Tide',
    subtitle: 'Moral Triage and Catastrophic Choices',
    area: 'ethics',
    course: 'NE-203',
    module: 4,
    status: 'published',
    difficulty: 'HARD: 5/5',
    complexityLevel: 5,
    image: imgTrolley,
    description: 'Navigate situations where every available option involves violating a moral constraint - "moral triage" situations.',
    location: 'At sea, Western Pacific',
    role: 'Officer (O-3/O-4) in command position during crisis',
    time: 'Crisis - decision needed within minutes // 15-20 mins',
    lastEdit: 'Dec 12, 2024',
    situation: 'Ship has sustained significant damage. Fire is spreading through multiple compartments. LTJG Chen, your Damage Control Assistant, will present the situation. She will begin the conversation.',
    dilemma: 'To save the ship and most of the crew, watertight doors must be closed, sealing off Compartment 3-144-2-L with 12 personnel still inside. If the doors remain open, the fire will spread and the entire ship may be lost with all 300+ personnel.',
    briefing: 'This scenario tests whether you can navigate a "moral triage" situation where every available option involves violating a moral constraint. You must choose between closing doors (save ship but condemn 12 to death) or keeping doors open (attempt rescue but risk entire ship). There is no option that avoids harm.',
    frameworks: ['Moral Triage', 'Constraints', 'Catastrophe Situations', 'Military Decision-Making', 'Trolley Problem'],
    primaryMission: 'Work through this decision using the Moral Deliberation Roadmap (Constraints, Consequences, Character, and Special Obligations). You must make a decision - choosing not to decide is itself a choice with consequences.',
    successCriteria: [
      'Apply structured moral reasoning using the Moral Deliberation Roadmap',
      'Acknowledge moral complexity and the weight of all options',
      'Make difficult decisions and take responsibility',
      'Articulate moral reasoning and show awareness of how to communicate decisions'
    ],
    tags: ['Week 4', 'Moral Triage', 'Constraints', 'Catastrophe Situations', 'Military Decision-Making', 'Trolley Problem']
  },

  // NE-203 Week 6 - Consequences & Constraints
  {
    id: 'ne203-w06-001',
    title: 'Abu Ghraib',
    subtitle: 'Interrogation Ethics and Human Dignity',
    area: 'ethics',
    course: 'NE-203',
    module: 6,
    status: 'published',
    difficulty: 'HARD: 5/5',
    complexityLevel: 5,
    image: imgAbuGhraib,
    description: 'Navigate the tension between consequentialist pressures (extracting information to save lives) and deontological constraints (human dignity, prohibition on torture).',
    location: 'Forward Operating Base, classified location',
    role: 'Officer (O-3/O-4) involved in detention operations or intelligence gathering',
    time: 'High-value detainee captured, attack may occur within 24-48 hours // 20-25 mins',
    lastEdit: 'Dec 11, 2024',
    situation: 'High-value detainee captured with potential intelligence about an imminent attack. Time is critical - attack may occur within 24-48 hours. Mr. Mitchell, Senior Intelligence Analyst, has requested a meeting. He will begin the conversation.',
    dilemma: 'Mr. Mitchell is proposing "enhanced interrogation techniques" that you find ethically questionable. He argues that lives are at stake - information could prevent an attack that would kill dozens or hundreds.',
    briefing: 'This scenario tests whether you can maintain ethical boundaries (prohibition on torture, human dignity) when facing compelling consequentialist arguments (lives at stake, ticking time bomb). You must distinguish lawful interrogation from torture, maintain human dignity as a constraint, recognize long-term consequences, and engage thoughtfully with the complexity while maintaining boundaries.',
    frameworks: ['Consequences', 'Constraints', 'Torture', 'Human Dignity', 'Abu Ghraib', 'Interrogation Ethics'],
    primaryMission: 'Navigate this conversation, understanding both the consequentialist arguments being made and the constraints that should govern your actions. Consider what makes torture wrong and why constraints matter even when consequences are significant.',
    successCriteria: [
      'Distinguish lawful interrogation from torture',
      'Maintain human dignity as a constraint even under pressure',
      'Recognize long-term consequences of ethical failures',
      'Engage with complexity while avoiding both rationalization and oversimplification'
    ],
    tags: ['Week 6', 'Consequences', 'Constraints', 'Torture', 'Human Dignity', 'Abu Ghraib', 'Interrogation Ethics']
  },

  // NE-203 Week 9 - Leadership & Virtue Ethics
  {
    id: 'ne203-w09-001',
    title: 'Blackhearts',
    subtitle: 'Leadership Failure and Unit Degradation',
    area: 'ethics',
    course: 'NE-203',
    module: 9,
    status: 'published',
    difficulty: 'HARD: 5/5',
    complexityLevel: 5,
    image: imgLucifer,
    description: 'Recognize early warning signs of unit degradation and leadership failure. Develop skills to maintain moral leadership under extreme stress.',
    location: 'Forward Operating Base, Iraq',
    role: 'Company Commander (O-3/O-4), Alpha Company',
    time: '6+ months deployed, unit under extreme stress // 20-25 mins',
    lastEdit: 'Dec 10, 2024',
    situation: 'Unit has been under extreme operational stress, taken significant casualties, morale is low. SGM Rodriguez, your Company First Sergeant, has requested a meeting to discuss concerns about the unit. He will begin the conversation.',
    dilemma: 'SGM Rodriguez is reporting escalating minor misconduct and warning signs of unit degradation: increasing incidents of disrespect toward locals, desecration of enemy dead, excessive use of force, unit cohesion breaking down. Will you listen, recognize the problems, and take action - or dismiss concerns and make excuses?',
    briefing: 'This scenario tests whether you can recognize early warning signs of unit degradation and take action to address them. You must recognize warning signs, maintain connection with subordinates, address misconduct directly, and demonstrate moral leadership.',
    frameworks: ['Leadership', 'Virtue Ethics', 'Character', 'Combat Stress', 'Unit Cohesion', 'Blackhearts'],
    primaryMission: 'Listen, assess the situation, and demonstrate leadership. Consider the warning signs of unit degradation, your responsibility as a leader to address these issues, and how to maintain moral standards under extreme stress.',
    successCriteria: [
      'Recognize warning signs of unit moral degradation and leadership failure',
      'Maintain connection with subordinates despite operational pressures',
      'Address misconduct directly rather than ignoring or enabling it',
      'Demonstrate moral leadership and show awareness of the relationship between leader character and unit behavior'
    ],
    tags: ['Week 9', 'Leadership', 'Virtue Ethics', 'Character', 'Combat Stress', 'Unit Cohesion', 'Blackhearts']
  },

  // Additional example scenarios for other courses can be added here
  // These are placeholder scenarios - you can add scenarios for NL-310, NP-410, etc.

  // Example NL-310 Leadership Course scenario
  {
    id: 'nl310-w01-001',
    title: 'The New Division Officer',
    subtitle: 'Building Credibility',
    area: 'leadership',
    course: 'NL-310',
    module: 1,
    status: 'published',
    difficulty: 'INT: 3/5',
    image: imgWhistleblowing,
    description: 'Navigate the challenges of establishing credibility as a new division officer.',
    location: 'USS Port Royal (CG-73), Division Spaces',
    role: 'Ensign (New Division Officer)',
    time: 'Week 1 of first assignment // 15-20 mins',
    lastEdit: 'Dec 9, 2024',
    situation: 'You are a newly commissioned Ensign reporting as Division Officer to your first ship. Your Leading Chief Petty Officer has more time in service than you\'ve been alive.',
    dilemma: 'How do you establish credibility and leadership when you know less than everyone you\'re supposed to lead? The Chief is testing you to see if you\'ll try to fake knowledge or admit what you don\'t know.',
    frameworks: ['Authentic Leadership', 'Credibility', 'Leader Development'],
    primaryMission: 'Build a foundation of trust and credibility with your division while learning your job and demonstrating leadership potential.',
    successCriteria: [
      'Demonstrate humility and willingness to learn',
      'Establish professional authority appropriately',
      'Build relationship with senior enlisted',
      'Show leadership potential through character',
      'Balance confidence with appropriate deference to expertise'
    ]
  },

  // Example NP-410 Philosophy & Psychology scenario
  {
    id: 'np410-w01-001',
    title: 'The Examined Life',
    subtitle: 'Socratic Method',
    area: 'philosophy',
    course: 'NP-410',
    module: 1,
    status: 'published',
    difficulty: 'INT: 3/5',
    image: imgStanford,
    description: 'Engage with the Socratic method to examine fundamental questions about the good life.',
    location: 'USNA Classroom, Sampson Hall',
    role: 'Midshipman in Philosophy Seminar',
    time: 'Seminar discussion // 15-20 mins',
    lastEdit: 'Dec 8, 2024',
    situation: 'You are a midshipman in an upper-level philosophy seminar. The instructor is using the Socratic method to challenge your assumptions about what makes life worth living.',
    dilemma: 'The professor is pressing you to defend your claim that \"success\" and \"happiness\" are the same thing. Every answer you give raises new questions. You\'re starting to realize your beliefs may not be as solid as you thought.',
    frameworks: ['Socratic Method', 'Philosophy', 'Critical Thinking'],
    primaryMission: 'Engage authentically with philosophical questioning, examining your own beliefs and assumptions about the good life.',
    successCriteria: [
      'Engage genuinely with philosophical questions',
      'Demonstrate intellectual humility',
      'Follow the argument where it leads',
      'Distinguish examined from unexamined beliefs',
      'Show capacity for philosophical reflection'
    ]
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return mockScenarios.find(s => s.id === id);
};

export const getScenariosByStatus = (status: string): Scenario[] => {
  if (status === 'all') return mockScenarios;
  return mockScenarios.filter(s => s.status === status);
};

export const getScenariosByCourse = (course: string): Scenario[] => {
  if (course === 'all') return mockScenarios;
  return mockScenarios.filter(s => s.course === course);
};

export const getScenariosByArea = (area: string): Scenario[] => {
  if (area === 'all') return mockScenarios;
  return mockScenarios.filter(s => s.area === area);
};

export const getScenariosByModule = (course: string, module: number): Scenario[] => {
  return mockScenarios.filter(s => s.course === course && s.module === module);
};