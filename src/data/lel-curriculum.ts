/**
 * Department of Leadership, Ethics, and Law (LEL)
 * Complete course catalogue organized by area
 * Source: https://www.usna.edu/LEL/
 */

export type MoralFactor = 'constraints' | 'consequences' | 'character' | 'specialObligations';
export type Area = 'ethics' | 'leadership' | 'philosophy';

export interface CourseModule {
  module: number;
  title: string;
  topics: string[];
  learningObjectives: string[];
  caseStudies: string[];
  primaryMoralFactors?: MoralFactor[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  area: Area;
  credits: string;
  classYear: '4/C' | '3/C' | '2/C' | '1/C' | 'Any';
  isRequired: boolean;
  prerequisites?: string;
  description: string;
  modules: CourseModule[];
}

// ============================================================================
// ETHICS COURSES (NE)
// ============================================================================

export const ETHICS_COURSES: Course[] = [
  {
    id: 'NE-203',
    code: 'NE203',
    name: 'Ethics and Moral Reasoning',
    area: 'ethics',
    credits: '3-0-3',
    classYear: '3/C',
    isRequired: true,
    prerequisites: '3/C standing',
    description: 'This course is designed for Midshipmen to evaluate the moral responsibilities inherent in military leadership, responsibilities that require discerning moral perception, reflective ethical deliberation, and the development of moral virtue.',
    modules: [
      {
        module: 1,
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
        module: 2,
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
      },
      {
        module: 3,
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
        module: 4,
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
        module: 5,
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
        module: 6,
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
        module: 7,
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
      },
      {
        module: 8,
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
        module: 9,
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
        module: 10,
        title: 'Just War Tradition',
        topics: ['Jus ad bellum', 'Jus in bello', 'Proportionality', 'Discrimination'],
        learningObjectives: [
          'Explain Just War principles',
          'Apply discrimination between combatants/non-combatants',
          'Evaluate proportionality in use of force',
          'Navigate Rules of Engagement scenarios'
        ],
        caseStudies: ['Rules of Engagement', 'Lone Survivor'],
        primaryMoralFactors: ['constraints', 'consequences']
      }
    ]
  }
];

// ============================================================================
// LEADERSHIP COURSES (NL)
// ============================================================================

export const LEADERSHIP_COURSES: Course[] = [
  {
    id: 'NL-110',
    code: 'NL110',
    name: 'Applied Behavioral Science',
    area: 'leadership',
    credits: '2-0-2',
    classYear: '4/C',
    isRequired: true,
    prerequisites: '4/C standing',
    description: 'Midshipmen examine fundamental tenets of leadership in the context of the theories and principles of individual and group leadership. Topics include self-knowledge, self-leadership, and team leadership.',
    modules: [
      {
        module: 1,
        title: 'Self-Knowledge and Self-Leadership',
        topics: ['Myers-Briggs Type Indicator', 'StrengthsFinder', 'Values in Action'],
        learningObjectives: [
          'Identify personal leadership strengths and development areas',
          'Create a personal life mission statement',
          'Apply self-awareness to leadership contexts'
        ],
        caseStudies: ['Personal Leadership Journey']
      },
      {
        module: 2,
        title: 'Team Leadership Fundamentals',
        topics: ['Team dynamics', 'Peer leadership', 'Communication'],
        learningObjectives: [
          'Demonstrate effective team leadership skills',
          'Navigate peer leadership challenges',
          'Apply leadership principles to Brigade context'
        ],
        caseStudies: ['Brigade Leader Scenarios']
      }
    ]
  },
  {
    id: 'NL-200',
    code: 'NL200',
    name: 'Human Behavior',
    area: 'leadership',
    credits: '3-0-3',
    classYear: 'Any',
    isRequired: false,
    description: 'An introduction to the science of psychology covering theories and principles of individual and group human behavior including learning, personality, social psychology, memory, and psychopathology.',
    modules: [
      {
        module: 1,
        title: 'Learning and Memory',
        topics: ['Classical conditioning', 'Operant conditioning', 'Memory systems'],
        learningObjectives: [
          'Explain major theories of learning',
          'Apply learning principles to training contexts',
          'Understand memory formation and retention'
        ],
        caseStudies: ['Training Program Design']
      },
      {
        module: 2,
        title: 'Personality and Individual Differences',
        topics: ['Trait theory', 'Five Factor Model', 'Assessment'],
        learningObjectives: [
          'Evaluate major personality theories',
          'Apply personality concepts to leadership',
          'Understand individual differences in teams'
        ],
        caseStudies: ['Team Composition Analysis']
      },
      {
        module: 3,
        title: 'Psychopathology and Health Psychology',
        topics: ['Mental health disorders', 'Stress', 'Resilience'],
        learningObjectives: [
          'Recognize signs of psychological distress',
          'Apply stress management principles',
          'Support mental health in operational settings'
        ],
        caseStudies: ['Combat Stress Reactions']
      }
    ]
  },
  {
    id: 'NL-310',
    code: 'NL310',
    name: 'Organizational Behavior',
    area: 'leadership',
    credits: '3-0-3',
    classYear: '2/C',
    isRequired: true,
    prerequisites: '2/C standing',
    description: 'Students examine the theory and research of the contingent and dynamic process of leadership, refining understanding of personal strengths, values, and growth opportunities in organizational contexts.',
    modules: [
      {
        module: 1,
        title: 'Organizational Culture and Climate',
        topics: ['Culture formation', 'Values alignment', 'Change management'],
        learningObjectives: [
          'Analyze organizational culture elements',
          'Evaluate impact of leadership on culture',
          'Design culture change initiatives'
        ],
        caseStudies: ['USS Benfold Turnaround', 'Corporate Culture Failures']
      },
      {
        module: 2,
        title: 'Motivation and Performance',
        topics: ['Expectancy theory', 'Goal setting', 'Rewards'],
        learningObjectives: [
          'Apply motivation theories to operational contexts',
          'Design effective performance management systems',
          'Diagnose and address performance issues'
        ],
        caseStudies: ['Motivating in Austere Environments']
      },
      {
        module: 3,
        title: 'Group Dynamics and Team Effectiveness',
        topics: ['Team development', 'Conflict', 'Decision-making'],
        learningObjectives: [
          'Facilitate high-performing teams',
          'Manage interpersonal conflict constructively',
          'Lead effective group decision processes'
        ],
        caseStudies: ['SEAL Team Dynamics', 'Aviation Crew Resource Management']
      }
    ]
  },
  {
    id: 'NL-400',
    code: 'NL400',
    name: 'Law for the Naval Leader',
    area: 'leadership',
    credits: '2-0-2',
    classYear: '1/C',
    isRequired: true,
    prerequisites: '1/C standing',
    description: 'Broad survey of military law applicable to the Naval Leader including operational law, Law of Armed Conflict, Law of the Sea, military justice, and administrative separations.',
    modules: [
      {
        module: 1,
        title: 'Military Justice System',
        topics: ['UCMJ', 'Non-judicial punishment', 'Courts-martial'],
        learningObjectives: [
          'Navigate military justice procedures',
          'Apply constitutional protections in military context',
          'Conduct lawful investigations'
        ],
        caseStudies: ['NJP Scenarios', 'Search and Seizure Cases']
      },
      {
        module: 2,
        title: 'Operational Law and LOAC',
        topics: ['Law of Armed Conflict', 'Rules of Engagement', 'Law of the Sea'],
        learningObjectives: [
          'Apply LOAC principles to tactical scenarios',
          'Navigate ROE decision-making',
          'Understand maritime law fundamentals'
        ],
        caseStudies: ['ROE Application', 'Freedom of Navigation Operations']
      }
    ]
  },
  {
    id: 'NL-311',
    code: 'NL311',
    name: 'Psychology of Leadership',
    area: 'leadership',
    credits: '3-0-3',
    classYear: '3/C',
    isRequired: false,
    prerequisites: '3/C standing or higher',
    description: 'Intensive experientially-focused course emphasizing leader self-analysis and skill development in personnel management, team development, and performance enhancement.',
    modules: [
      {
        module: 1,
        title: 'Leader Self-Analysis',
        topics: ['Self-awareness', 'Emotional intelligence', 'Leadership style'],
        learningObjectives: [
          'Conduct comprehensive self-assessment',
          'Develop emotional intelligence skills',
          'Adapt leadership style to context'
        ],
        caseStudies: ['360-Degree Feedback Analysis']
      },
      {
        module: 2,
        title: 'Personnel Management and Development',
        topics: ['Coaching', 'Mentoring', 'Performance counseling'],
        learningObjectives: [
          'Apply coaching techniques effectively',
          'Conduct developmental counseling',
          'Create individual development plans'
        ],
        caseStudies: ['Subordinate Development Scenarios']
      }
    ]
  },
  {
    id: 'NL-411',
    code: 'NL411',
    name: 'Human Factors in Combat',
    area: 'leadership',
    credits: '3-0-3',
    classYear: '1/C',
    isRequired: false,
    prerequisites: 'NL110, NE203',
    description: 'Examines realities of human factors associated with crisis, sustained operations, and combat including fatigue, uncertainty, stress, spirituality, morale, and cohesion.',
    modules: [
      {
        module: 1,
        title: 'Stress and Performance Under Pressure',
        topics: ['Combat stress', 'Decision-making under duress', 'Fatigue management'],
        learningObjectives: [
          'Understand physiological and psychological stress responses',
          'Apply stress management in combat contexts',
          'Maintain decision quality under extreme pressure'
        ],
        caseStudies: ['Battle of Midway', 'Black Hawk Down', 'Lone Survivor']
      },
      {
        module: 2,
        title: 'Unit Cohesion and Morale',
        topics: ['Cohesion building', 'Morale maintenance', 'Spiritual fitness'],
        learningObjectives: [
          'Build and sustain unit cohesion',
          'Recognize and address morale issues',
          'Support spiritual resilience in combat'
        ],
        caseStudies: ['Band of Brothers', 'Vietnam POW Experiences']
      }
    ]
  },
  {
    id: 'NL-340',
    code: 'NL340',
    name: 'Change Management',
    area: 'leadership',
    credits: '3-0-3',
    classYear: '2/C',
    isRequired: false,
    prerequisites: 'NL310 or permission',
    description: 'Explores theories, practices and tools for managing change in organizational environments including organizational development and Lean Six Sigma approaches.',
    modules: [
      {
        module: 1,
        title: 'Change Theory and Models',
        topics: ['Kotter\'s 8 steps', 'Resistance to change', 'Change leadership'],
        learningObjectives: [
          'Apply change management frameworks',
          'Diagnose and address resistance',
          'Lead organizational transformation'
        ],
        caseStudies: ['Navy IT Modernization', 'Surface Warfare Transformation']
      },
      {
        module: 2,
        title: 'Process Improvement and Innovation',
        topics: ['Lean Six Sigma', 'Continuous improvement', 'Innovation management'],
        learningObjectives: [
          'Apply process improvement methodologies',
          'Lead continuous improvement initiatives',
          'Foster innovation culture'
        ],
        caseStudies: ['Operational Efficiency Projects']
      }
    ]
  }
];

// ============================================================================
// PHILOSOPHY & PSYCHOLOGY COURSES (NP)
// ============================================================================

export const PHILOSOPHY_COURSES: Course[] = [
  {
    id: 'NP-232',
    code: 'NP232',
    name: 'Military Ethics: The Code of the Warrior',
    area: 'philosophy',
    credits: '3-0-3',
    classYear: 'Any',
    isRequired: false,
    description: 'Explores warrior traditions across cultures and history including Ancient Greeks, Vikings, Romans, Knights, Samurai, and modern warriors to create the ideal code for contemporary warriors.',
    modules: [
      {
        module: 1,
        title: 'Ancient Warrior Codes',
        topics: ['Greek hoplites', 'Roman legions', 'Viking warriors'],
        learningObjectives: [
          'Compare warrior codes across cultures',
          'Identify universal warrior virtues',
          'Apply ancient wisdom to modern context'
        ],
        caseStudies: ['Spartan Warrior Ethos', 'Roman Military Discipline'],
        primaryMoralFactors: ['character', 'specialObligations']
      },
      {
        module: 2,
        title: 'Medieval and Eastern Warrior Traditions',
        topics: ['Chivalry', 'Bushido', 'Shaolin monks'],
        learningObjectives: [
          'Evaluate medieval codes of honor',
          'Understand Eastern warrior philosophy',
          'Synthesize cross-cultural warrior values'
        ],
        caseStudies: ['Knights Templar', 'Samurai Code'],
        primaryMoralFactors: ['character', 'constraints']
      },
      {
        module: 3,
        title: 'Modern Warrior Ethos',
        topics: ['20th century warfare', 'Special operations', 'Contemporary military values'],
        learningObjectives: [
          'Define modern warrior code',
          'Apply warrior ethos to current challenges',
          'Develop personal warrior philosophy'
        ],
        caseStudies: ['Navy SEAL Ethos', 'Marine Corps Values'],
        primaryMoralFactors: ['character', 'specialObligations']
      }
    ]
  },
  {
    id: 'NP-350',
    code: 'NP350',
    name: 'Philosopher and Fighter Pilot',
    area: 'philosophy',
    credits: '3-0-3',
    classYear: '3/C',
    isRequired: false,
    prerequisites: 'NE203',
    description: 'Examines Admiral Stockdale\'s POW experiences and philosophical works including Stoicism, Epictetus, and Vietnam War ethics.',
    modules: [
      {
        module: 1,
        title: 'Stoic Philosophy Foundations',
        topics: ['Epictetus', 'Control dichotomy', 'Stoic resilience'],
        learningObjectives: [
          'Understand Stoic philosophical principles',
          'Apply control dichotomy to leadership',
          'Develop Stoic resilience practices'
        ],
        caseStudies: ['Stockdale POW Experience', 'Hanoi Hilton Leadership'],
        primaryMoralFactors: ['character', 'constraints']
      },
      {
        module: 2,
        title: 'Leadership Under Extreme Duress',
        topics: ['POW leadership', 'Moral injury', 'Survival ethics'],
        learningObjectives: [
          'Analyze leadership in extremis',
          'Navigate moral dilemmas under torture',
          'Maintain integrity under pressure'
        ],
        caseStudies: ['Tap Code Communication', 'Resistance Techniques'],
        primaryMoralFactors: ['character', 'specialObligations']
      }
    ]
  },
  {
    id: 'NP-410',
    code: 'NP410',
    name: 'Philosophy of War',
    area: 'philosophy',
    credits: '3-0-3',
    classYear: '1/C',
    isRequired: false,
    prerequisites: 'NE203',
    description: 'Philosophical analysis of the concept of war and critical investigation of its moral permissibility, including just war theory and modern applications.',
    modules: [
      {
        module: 1,
        title: 'Just War Theory',
        topics: ['Jus ad bellum', 'Jus in bello', 'Jus post bellum'],
        learningObjectives: [
          'Apply just war criteria to historical conflicts',
          'Evaluate moral justifications for war',
          'Analyze post-war justice obligations'
        ],
        caseStudies: ['Iraq War 2003', 'Humanitarian Intervention', 'Afghanistan'],
        primaryMoralFactors: ['constraints', 'consequences']
      },
      {
        module: 2,
        title: 'Modern Warfare Ethics',
        topics: ['Cyber warfare', 'Autonomous weapons', 'Asymmetric conflict'],
        learningObjectives: [
          'Apply traditional ethics to emerging technologies',
          'Evaluate moral status of non-state actors',
          'Navigate ethical ambiguity in modern conflict'
        ],
        caseStudies: ['Drone Warfare', 'Cyber Operations', 'Terrorism'],
        primaryMoralFactors: ['constraints', 'consequences']
      }
    ]
  },
  {
    id: 'NP-430',
    code: 'NP430',
    name: 'Ethics and Irregular Warfare',
    area: 'philosophy',
    credits: '3-0-3',
    classYear: '1/C',
    isRequired: false,
    prerequisites: 'NE203',
    description: 'Examines moral questions from the War on Terror including torture, assassination, detention, and fighting non-state actors employing terrorism.',
    modules: [
      {
        module: 1,
        title: 'Counterterrorism Ethics',
        topics: ['Targeted killing', 'Enhanced interrogation', 'Detention policy'],
        learningObjectives: [
          'Evaluate ethics of counterterrorism tactics',
          'Analyze legal and moral frameworks',
          'Navigate moral complexity in COIN operations'
        ],
        caseStudies: ['Abu Ghraib', 'Guantanamo', 'Bin Laden Raid'],
        primaryMoralFactors: ['constraints', 'consequences']
      },
      {
        module: 2,
        title: 'Insurgency and Counterinsurgency',
        topics: ['COIN doctrine', 'Population-centric warfare', 'Hearts and minds'],
        learningObjectives: [
          'Apply ethical principles to COIN operations',
          'Balance security and human rights',
          'Navigate cultural and moral complexity'
        ],
        caseStudies: ['Iraq Surge', 'Afghanistan COIN', 'Vietnam'],
        primaryMoralFactors: ['consequences', 'specialObligations']
      }
    ]
  },
  {
    id: 'NP-440',
    code: 'NP440',
    name: 'Stoic Philosophy and Leadership',
    area: 'philosophy',
    credits: '3-0-3',
    classYear: '1/C',
    isRequired: false,
    prerequisites: 'NE203',
    description: 'Philosophical analysis of Stoic principles and their application to midshipman and officer life, exploring virtue, emotions, knowledge, and fate.',
    modules: [
      {
        module: 1,
        title: 'Stoic Metaphysics and Ethics',
        topics: ['Stoic physics', 'Virtue as the only good', 'Indifferents'],
        learningObjectives: [
          'Understand Stoic worldview',
          'Apply virtue ethics to naval leadership',
          'Navigate preferred vs. dispreferred indifferents'
        ],
        caseStudies: ['Marcus Aurelius Meditations', 'Epictetus Discourses'],
        primaryMoralFactors: ['character', 'constraints']
      },
      {
        module: 2,
        title: 'Stoic Practice and Leadership',
        topics: ['Emotional regulation', 'Memento mori', 'Amor fati'],
        learningObjectives: [
          'Practice Stoic exercises daily',
          'Develop emotional resilience',
          'Accept fate while pursuing excellence'
        ],
        caseStudies: ['Stockdale Paradox', 'Modern Stoic Leaders'],
        primaryMoralFactors: ['character', 'consequences']
      }
    ]
  }
];

// ============================================================================
// COMBINED CATALOGUE
// ============================================================================

export const ALL_COURSES = [
  ...ETHICS_COURSES,
  ...LEADERSHIP_COURSES,
  ...PHILOSOPHY_COURSES
];

export const AREAS = [
  { id: 'ethics', name: 'Ethics (NE)', description: 'Moral reasoning and ethical decision-making' },
  { id: 'leadership', name: 'Leadership (NL)', description: 'Behavioral science, psychology, and organizational leadership' },
  { id: 'philosophy', name: 'Philosophy & Psychology (NP)', description: 'Philosophy, law, and specialized ethics' }
] as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getCoursesByArea(area: Area): Course[] {
  return ALL_COURSES.filter(c => c.area === area);
}

export function getCourseById(courseId: string): Course | undefined {
  return ALL_COURSES.find(c => c.id === courseId);
}

export function getRequiredCourses(): Course[] {
  return ALL_COURSES.filter(c => c.isRequired);
}

export function getCoursesByClassYear(classYear: '4/C' | '3/C' | '2/C' | '1/C'): Course[] {
  return ALL_COURSES.filter(c => c.classYear === classYear || c.classYear === 'Any');
}

export function getModuleById(courseId: string, moduleNumber: number): CourseModule | undefined {
  const course = getCourseById(courseId);
  return course?.modules.find(m => m.module === moduleNumber);
}
