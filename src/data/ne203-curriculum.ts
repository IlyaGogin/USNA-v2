/**
 * NE 203: Ethics & Moral Reasoning for Naval Leaders
 * Complete curriculum structure with blocks, weeks, and learning objectives
 */

export type MoralFactor = 'constraints' | 'consequences' | 'character' | 'specialObligations';

export interface WeekContent {
  week: number;
  block: 'I' | 'II' | 'III' | 'IV';
  title: string;
  topics: string[];
  learningObjectives: string[];
  caseStudies: string[];
  primaryMoralFactors: MoralFactor[];
}

export interface BlockContent {
  id: 'I' | 'II' | 'III' | 'IV';
  name: string;
  theme: string;
  description: string;
  weeks: WeekContent[];
}

export const NE203_CURRICULUM = {
  courseId: 'NE-203',
  courseName: 'Ethics & Moral Reasoning for Naval Leaders',
  blocks: [
    // Block I: Moral Perception
    {
      id: 'I' as const,
      name: 'Moral Perception',
      theme: 'How we see moral situations',
      description: 'Understanding how culture, rationalization, and social pressure shape moral perception',
      weeks: [
        {
          week: 1,
          block: 'I' as const,
          title: 'Moral Perception: Social Influences & Personal Integrity',
          topics: ['Moral narratives', 'Cultural perception', 'Asch conformity'],
          learningObjectives: [
            'Identify how cultures, religions, and philosophies shape moral perception',
            'Evaluate appropriate ways to engage in moral discourse despite differences',
            'Apply to military leadership case study'
          ],
          caseStudies: ['The Tunnel', 'Bacha Bazi / Afghan Culture'],
          primaryMoralFactors: ['character', 'specialObligations']
        },
        {
          week: 2,
          block: 'I' as const,
          title: 'Rationalization, Socialization, and Moral Perception',
          topics: ['Rationalization', 'Integrity', 'Milgram', 'Challenger'],
          learningObjectives: [
            'Explain how rationalization and socialization corrupt organizations',
            'Analyze different concepts of integrity',
            'Describe impact on military decision-making',
            'Explain Milgram and Asch experiments'
          ],
          caseStudies: ['Challenger Disaster', 'Organizational Scandals', 'Milgram Obedience'],
          primaryMoralFactors: ['character', 'constraints']
        }
      ]
    },
    // Block II: Moral Deliberation
    {
      id: 'II' as const,
      name: 'Moral Deliberation',
      theme: 'The Four Moral Factors framework',
      description: 'Systematic approach to analyzing ethical dilemmas using Constraints, Consequences, Character, and Special Obligations',
      weeks: [
        {
          week: 3,
          block: 'II' as const,
          title: 'The Moral Deliberation Roadmap',
          topics: ['Four Moral Factors', 'Human dignity', 'Tribalism'],
          learningObjectives: [
            'Explain the Four Moral Factors',
            'Analyze how dignity constrains deliberation',
            'Explain foundations of human dignity',
            'Evaluate respect for persons in military'
          ],
          caseStudies: ['Dignity in Detention'],
          primaryMoralFactors: ['constraints', 'consequences', 'character', 'specialObligations']
        },
        {
          week: 4,
          block: 'II' as const,
          title: 'Constraints: Mere Means',
          topics: ['Kant', 'Categorical Imperative', 'Using persons as means'],
          learningObjectives: [
            'Explain Kant\'s Categorical Imperative',
            'Evaluate when treating persons as mere means',
            'Apply constraints to military contexts',
            'Analyze competing duties'
          ],
          caseStudies: ['The Prisoner', 'Strategic Bombing'],
          primaryMoralFactors: ['constraints', 'consequences']
        },
        {
          week: 5,
          block: 'II' as const,
          title: 'Constraints: Doctrine of Double Effect',
          topics: ['Double Effect', 'Intention vs. Foresight', 'Collateral damage'],
          learningObjectives: [
            'Explain Doctrine of Double Effect',
            'Distinguish intention from foresight',
            'Apply to targeting decisions',
            'Evaluate proportionality in harm'
          ],
          caseStudies: ['The Trolley Problem', 'Collateral Damage Scenarios'],
          primaryMoralFactors: ['constraints', 'consequences']
        },
        {
          week: 6,
          block: 'II' as const,
          title: 'Consequences',
          topics: ['Utilitarianism', 'Short/Long-term Analysis', 'Abu Ghraib'],
          learningObjectives: [
            'Analyze complex short-term and long-term consequences',
            'Evaluate how consequences influence moral deliberations',
            'Evaluate when consequential thinking is appropriate/inappropriate',
            'Evaluate constraints vs. consequences in military context'
          ],
          caseStudies: ['Abu Ghraib', 'The Interrogation Dilemma'],
          primaryMoralFactors: ['consequences', 'constraints']
        },
        {
          week: 7,
          block: 'II' as const,
          title: 'Special Obligations',
          topics: ['Role duties', 'Loyalty', 'Competing loyalties', 'Oaths'],
          learningObjectives: [
            'Identify special obligations from roles and relationships',
            'Evaluate competing loyalties in military context',
            'Navigate conflicts between personal and professional obligations',
            'Apply oath and commission obligations'
          ],
          caseStudies: ['Loyalty Dilemma', 'Whistleblower Scenarios'],
          primaryMoralFactors: ['specialObligations', 'character']
        }
      ]
    },
    // Block III: Character & Virtue
    {
      id: 'III' as const,
      name: 'Character & Virtue',
      theme: 'Becoming a person of virtue',
      description: 'Developing character through habituation, examining virtues like courage, humility, and resilience',
      weeks: [
        {
          week: 8,
          block: 'III' as const,
          title: 'Character and Virtue Ethics',
          topics: ['Aristotle', 'Habituation', 'Eudaimonia', 'Navy core values'],
          learningObjectives: [
            'Explain virtue ethics and character formation',
            'Analyze role of habituation in moral development',
            'Apply Navy core values (Honor, Courage, Commitment)',
            'Evaluate "what kind of person do I want to be"'
          ],
          caseStudies: ['Character Formation', 'Aristotle\'s Nicomachean Ethics'],
          primaryMoralFactors: ['character', 'consequences']
        },
        {
          week: 9,
          block: 'III' as const,
          title: 'Pride, Humility, and Obedience',
          topics: ['Pride vs. Humility', 'Obedience', 'Authority', 'My Lai'],
          learningObjectives: [
            'Distinguish appropriate pride from dangerous hubris',
            'Evaluate when obedience is virtuous vs. vicious',
            'Analyze moral courage to disobey unlawful orders',
            'Apply to military chain of command'
          ],
          caseStudies: ['My Lai Massacre', 'The Failing Leader'],
          primaryMoralFactors: ['character', 'specialObligations']
        },
        {
          week: 10,
          block: 'III' as const,
          title: 'Stoicism and Resilience',
          topics: ['Stoicism', 'Resilience', 'Emotional regulation', 'Epictetus'],
          learningObjectives: [
            'Explain Stoic philosophy and resilience',
            'Evaluate role of emotional control in leadership',
            'Apply Stoic principles to military stress',
            'Develop strategies for moral resilience'
          ],
          caseStudies: ['Under Pressure', 'Stockdale Paradox'],
          primaryMoralFactors: ['character', 'consequences']
        },
        {
          week: 11,
          block: 'III' as const,
          title: 'Courage',
          topics: ['Moral courage', 'Physical courage', 'Speaking truth to power'],
          learningObjectives: [
            'Distinguish moral courage from physical courage',
            'Evaluate when to speak up vs. remain silent',
            'Navigate proper channels for raising concerns',
            'Build courage for ethical leadership'
          ],
          caseStudies: ['2 AM Courage', 'Whistleblowing in Military'],
          primaryMoralFactors: ['character', 'specialObligations']
        },
        {
          week: 12,
          block: 'III' as const,
          title: 'Moral Injury',
          topics: ['Moral injury', 'Trauma', 'Recovery', 'Leadership responsibility'],
          learningObjectives: [
            'Explain concept of moral injury',
            'Distinguish moral injury from PTSD',
            'Evaluate leader responsibility for subordinate moral injury',
            'Develop strategies for prevention and recovery'
          ],
          caseStudies: ['After the Mission', 'Blackhearts', 'Moral Injury Case Studies'],
          primaryMoralFactors: ['character', 'consequences']
        }
      ]
    },
    // Block IV: Just War Tradition
    {
      id: 'IV' as const,
      name: 'Just War Tradition',
      theme: 'Ethics of war and military operations',
      description: 'Applying Just War principles to modern military contexts',
      weeks: [
        {
          week: 13,
          block: 'IV' as const,
          title: 'Jus ad Bellum',
          topics: ['Just cause', 'Legitimate authority', 'Right intention', 'Proportionality'],
          learningObjectives: [
            'Explain Jus ad Bellum principles',
            'Apply Just War criteria to case studies',
            'Evaluate legitimate authority for use of force',
            'Assess proportionality in going to war'
          ],
          caseStudies: ['Declaration of War', 'Iraq War 2003'],
          primaryMoralFactors: ['constraints', 'consequences']
        },
        {
          week: 14,
          block: 'IV' as const,
          title: 'Jus in Bello',
          topics: ['Discrimination', 'Proportionality in combat', 'ROE', 'Geneva Conventions'],
          learningObjectives: [
            'Explain Jus in Bello principles',
            'Apply discrimination between combatants/non-combatants',
            'Evaluate proportionality in use of force',
            'Navigate Rules of Engagement scenarios'
          ],
          caseStudies: ['Rules of Engagement', 'Lone Survivor'],
          primaryMoralFactors: ['constraints', 'consequences']
        },
        {
          week: 15,
          block: 'IV' as const,
          title: 'Modern War and Asymmetric Conflict',
          topics: ['Asymmetric warfare', 'Terrorism', 'Cyber warfare', 'Autonomous weapons'],
          learningObjectives: [
            'Apply Just War tradition to modern contexts',
            'Evaluate ethical challenges of asymmetric warfare',
            'Assess responsibility in autonomous systems',
            'Navigate emerging ethical challenges'
          ],
          caseStudies: ['Asymmetric Warfare', 'Drone Strikes', 'Cyber Operations'],
          primaryMoralFactors: ['constraints', 'consequences', 'specialObligations']
        }
      ]
    }
  ] as BlockContent[]
};

// Helper function to get weeks by course and block
export function getWeeksByBlock(blockId: 'I' | 'II' | 'III' | 'IV'): WeekContent[] {
  const block = NE203_CURRICULUM.blocks.find(b => b.id === blockId);
  return block?.weeks || [];
}

// Helper function to get a specific week
export function getWeek(weekNumber: number): WeekContent | undefined {
  for (const block of NE203_CURRICULUM.blocks) {
    const week = block.weeks.find(w => w.week === weekNumber);
    if (week) return week;
  }
  return undefined;
}

// Helper function to get block info
export function getBlock(blockId: 'I' | 'II' | 'III' | 'IV'): BlockContent | undefined {
  return NE203_CURRICULUM.blocks.find(b => b.id === blockId);
}

// All available courses (for future expansion)
export const COURSES = [
  { id: 'NE-201', name: 'NE-201: Leadership' },
  { id: 'NE-203', name: 'NE-203: Ethics & Moral Reasoning' },
  { id: 'NE-204', name: 'NE-204: Advanced Leadership' },
  { id: 'HE-210', name: 'HE-210: Organizational Renewal' },
  { id: 'NE-301', name: 'NE-301: Strategic Leadership' },
  { id: 'NE-302', name: 'NE-302: Naval Operations' },
  { id: 'NE-303', name: 'NE-303: Maritime Strategy' },
  { id: 'HE-301', name: 'HE-301: Military History I' },
  { id: 'HE-302', name: 'HE-302: Military History II' },
  { id: 'NS-101', name: 'NS-101: Introduction to Naval Science' },
  { id: 'NS-201', name: 'NS-201: Naval Ships & Aircraft Systems' },
  { id: 'NS-301', name: 'NS-301: Navigation & Naval Operations' },
];
