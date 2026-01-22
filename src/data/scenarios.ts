// Centralized Scenario Data File
// Extended Scenario interface supporting 112 scenarios across 5 domains

// Scenario images from Figma
import imgFlightTest from "figma:asset/4ac71b9ca7ac1f8bff2625e5c11ae7cbda5b2af7.png";
import imgQuickDecision from "figma:asset/52593c1b1eda0a0753111d28198dd73a8cdbc1ee.png";
import imgDifficultConversation from "figma:asset/6ce5ced382fd8d29c1d4b680e27ffcbba8506e7c.png";
import imgAccountability from "figma:asset/6393ea8d3a5fc64d2d9a630576264b8a92e2d81d.png";
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

/**
 * Extended Scenario Interface
 * Supports scenarios across all domains: Ethics, Leadership, Language, Communication, Cross-Cultural, Philosophy
 */
export interface Scenario {
  // Core fields (existing)
  id: string;
  title: string;
  subtitle: string;
  course: string;
  difficulty: string;
  difficultyLevel: number;
  description: string;
  image: string;
  area: string;
  courseCode: string;

  // Common new fields (all scenarios)
  situation?: string;
  dilemma?: string;
  briefing?: string;
  frameworks?: string[];
  primaryMission?: string;
  successCriteria?: string[];
  tags?: string[];

  // Language-specific fields (for foreign language scenarios)
  language?: string;
  semester?: number;
  actflLevel?: string;
  ilrLevel?: string;
  cefrLevel?: string;
  gseRange?: string;
  keyVocabulary?: string[];
  culturalTips?: string[];
  culturalGotchas?: string[];
}

/**
 * All scenarios across 5 domains
 * Currently includes 14 existing scenarios
 * Will expand to 112 scenarios total
 */
export const scenarios: Scenario[] = [
  {
    id: "11",
    title: "The Flight Test",
    subtitle: "Moral Perception Under Authority Pressure",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 2,
    description: "Develop moral courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions.",
    image: imgFlightTest,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "12",
    title: "The Quick Decision",
    subtitle: "Recognizing Rushed Thinking",
    course: "NL-110",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action.",
    image: imgQuickDecision,
    area: "Leadership",
    courseCode: "NL110: Applied Behavioral Science"
  },
  {
    id: "13",
    title: "The Difficult Conversation",
    subtitle: "Leading Others with Honest Feedback",
    course: "NL-310",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect.",
    image: imgDifficultConversation,
    area: "Leadership",
    courseCode: "NL310: Organizational Behavior"
  },
  {
    id: "14",
    title: "The Accountability Question",
    subtitle: "Owning Outcomes as a Leader",
    course: "NL-400",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame.",
    image: imgAccountability,
    area: "Leadership",
    courseCode: "NL400: Law for the Naval Leader"
  },
  {
    id: "1",
    title: "The Authority Question",
    subtitle: "Authority & Moral Agency",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Train participants to understand the psychology of obedience and develop skills to maintain moral agency when receiving questionable orders.",
    image: imgMilgram,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "10",
    title: "Pressure Point",
    subtitle: "Moral Perception",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.",
    image: imgMidshipman,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "2",
    title: "The Launch Decision",
    subtitle: "Organizational Ethics & Dissent",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Explore the ethical responsibilities of engineers and managers when faced with pressure to launch despite safety concerns.",
    image: imgChallenger,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "3",
    title: "Inside the Wire",
    subtitle: "Social Influence & Peer Pressure",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Train participants to recognize and resist unhealthy social pressures to belong to exclusive \"inner rings\" or in-groups.",
    image: imgInnerRing,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "4",
    title: "The Dark Hours",
    subtitle: "Situational Ethics & Military Conduct",
    course: "NE-203",
    difficulty: "EASY",
    difficultyLevel: 2,
    description: "Analyze the breakdown of ethical standards in extreme situations and the importance of moral courage in military settings.",
    image: imgAbuGhraib,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "5",
    title: "The Moral Roadmap",
    subtitle: "Utilitarian vs. Deontological Ethics",
    course: "NE-203",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning.",
    image: imgTrolley,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "6",
    title: "2 AM Courage",
    subtitle: "War Crimes & Moral Courage",
    course: "NE-203",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Study the breakdown of ethical conduct in combat and examine the role of moral courage in preventing atrocities.",
    image: imgMyLai,
    area: "Ethics",
    courseCode: "NE203: Ethics and Moral Reasoning"
  },
  {
    id: "7",
    title: "The Loyalty Test",
    subtitle: "Loyalty vs. Integrity",
    course: "NL-110",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Explore the ethical complexities of reporting misconduct while balancing organizational loyalty and personal integrity.",
    image: imgWhistleblowing,
    area: "Leadership",
    courseCode: "NL110: Applied Behavioral Science"
  },
  {
    id: "8",
    title: "Character in Crisis",
    subtitle: "Power & Moral Corruption",
    course: "NL-200",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Investigate how good people can be led to do bad things when given power in corrupt systems.",
    image: imgLucifer,
    area: "Leadership",
    courseCode: "NL200: Human Behavior"
  },
  {
    id: "9",
    title: "Abu Ghraib Echo",
    subtitle: "Role Identity & Ethical Behavior",
    course: "NL-311",
    difficulty: "INT",
    difficultyLevel: 4,
    description: "Examine how assigned roles and situational factors can override individual moral values and behavior.",
    image: imgStanford,
    area: "Leadership",
    courseCode: "NL311: Psychology of Leadership"
  }
];

/**
 * Helper function to get scenario by ID
 */
export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(s => s.id === id);
};

/**
 * Helper function to get scenarios by area
 */
export const getScenariosByArea = (area: string): Scenario[] => {
  return scenarios.filter(s => s.area === area);
};

/**
 * Helper function to get scenarios by course
 */
export const getScenariosByCourse = (courseCode: string): Scenario[] => {
  return scenarios.filter(s => s.courseCode === courseCode);
};

/**
 * Helper function to get scenarios by language
 */
export const getScenariosByLanguage = (language: string): Scenario[] => {
  return scenarios.filter(s => s.language === language);
};

/**
 * Helper function to get scenarios by semester
 */
export const getScenariosBySemester = (semester: number): Scenario[] => {
  return scenarios.filter(s => s.semester === semester);
};
