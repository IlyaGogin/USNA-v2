import svgPaths from "../imports/svg-lpbbxjcmd0";
import imgFrame2043682475 from "figma:asset/9162d475606cf5df5ee843d391b69e4c9218b156.png";
import imgEllipse2 from "figma:asset/0c229c6ea7bddf0026e4035aadd84b10c728a908.png";
import imgImage38 from "figma:asset/561a60f605f61f0bbcbea5fe03d55134ac8ad233.png";
import imgImage39 from "figma:asset/948424b909e051d8a51652c2b4bd8c87cfd92e67.png";

type StudentDetailsPageProps = {
  studentId: string;
  onBack: () => void;
  onAssignScenario: () => void;
};

const studentData: Record<string, any> = {
  '1': {
    name: 'Maya Thompson',
    firstName: 'Maya',
    lastName: 'Thompson',
    course: 'NE203: Ethics & Moral Reasoning',
    sessionsCompleted: 5,
    averageScore: 85,
    overallReadiness: 79,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100',
    skills: [
      { name: 'Leadership', level: '+3', score: 72 },
      { name: 'Ethics', level: '+2', score: 68 },
      { name: 'Technical Skills', level: '+1', score: 65 },
      { name: 'Physical Readiness', level: '+4', score: 71 },
      { name: 'Communication', level: '+2', score: 69 }
    ],
    frameworks: [
      { level: 'Advanced', name: 'Constraints', score: 90 },
      { level: 'Developing', name: 'Consequences', score: 70 },
      { level: 'Advanced', name: 'Character', score: 95 },
      { level: 'Proficient', name: 'Special Obligations', score: 80 }
    ],
    insights: [
      { status: 'Excellent', title: 'Framework application', type: 'check' },
      { status: 'Needs work on', title: 'Considering second-order consequences', type: 'arrow' },
      { status: 'Could benefit from more', title: 'Stakeholder analysis', type: 'arrow' }
    ],
    recentActivity: [
      { type: 'badge', title: 'Leadership Excellence', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 day ago' },
      { type: 'scenario', title: 'Milgram Obedience', subtitle: 'Scenario completed', score: 78, timestamp: '1 day ago' },
      { type: 'scenario', title: 'The Challenger Decision', subtitle: 'Scenario completed', score: 85, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Ethical Frameworks Analysis', subtitle: 'Assignment completed', score: 92, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Abu Ghraib', subtitle: 'Scenario completed', score: 81, timestamp: '4 days ago' },
      { type: 'badge', title: 'Moral Reasoning Foundation', subtitle: 'Badge earned', icon: imgImage39, timestamp: '5 days ago' },
      { type: 'assignment', title: 'Case Study: Trolley Problem', subtitle: 'Assignment completed', score: 88, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Stanford Prison Experiment', subtitle: 'Scenario completed', score: 76, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Whistleblowing Dilemma', subtitle: 'Scenario completed', score: 83, timestamp: '1 week ago' },
      { type: 'badge', title: 'Critical Thinking', subtitle: 'Badge earned', icon: imgImage38, timestamp: '2 weeks ago' },
      { type: 'assignment', title: 'Virtue Ethics Reflection', subtitle: 'Assignment completed', score: 90, timestamp: '2 weeks ago' },
      { type: 'scenario', title: 'My Lai Massacre', subtitle: 'Scenario completed', score: 79, timestamp: '2 weeks ago' }
    ]
  },
  '2': {
    name: 'James Rodriguez',
    firstName: 'James',
    lastName: 'Rodriguez',
    course: 'NE203: Ethics and Moral Reasoning',
    sessionsCompleted: 4,
    averageScore: 90,
    overallReadiness: 82,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100',
    recentActivity: [
      { type: 'scenario', title: 'The Trolley Problem', subtitle: 'Scenario completed', score: 94, timestamp: '12 hours ago' },
      { type: 'assignment', title: 'Deontological Ethics Essay', subtitle: 'Assignment completed', score: 91, timestamp: '1 day ago' },
      { type: 'badge', title: 'Ethical Reasoning Master', subtitle: 'Badge earned', icon: imgImage39, timestamp: '2 days ago' },
      { type: 'scenario', title: 'Milgram Obedience', subtitle: 'Scenario completed', score: 88, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Abu Ghraib', subtitle: 'Scenario completed', score: 92, timestamp: '4 days ago' },
      { type: 'assignment', title: 'Moral Courage Analysis', subtitle: 'Assignment completed', score: 89, timestamp: '5 days ago' },
      { type: 'scenario', title: 'The Challenger Decision', subtitle: 'Scenario completed', score: 95, timestamp: '6 days ago' },
      { type: 'badge', title: 'Honor and Integrity', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Whistleblowing Dilemma', subtitle: 'Scenario completed', score: 87, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Utilitarian Framework', subtitle: 'Assignment completed', score: 93, timestamp: '2 weeks ago' }
    ]
  },
  '3': {
    name: 'Sarah Chen',
    firstName: 'Sarah',
    lastName: 'Chen',
    course: 'NE203: Ethics and Moral Reasoning',
    sessionsCompleted: 3,
    averageScore: 75,
    overallReadiness: 68,
    classYear: '3rd Class',
    classStatus: 'Needs Attention',
    profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Stanford Prison Experiment', subtitle: 'Scenario completed', score: 72, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Character Ethics Paper', subtitle: 'Assignment completed', score: 68, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Abu Ghraib', subtitle: 'Scenario completed', score: 75, timestamp: '5 days ago' },
      { type: 'badge', title: 'Moral Foundation', subtitle: 'Badge earned', icon: imgImage39, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Milgram Obedience', subtitle: 'Scenario completed', score: 71, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Ethical Decision Making', subtitle: 'Assignment completed', score: 78, timestamp: '1 week ago' },
      { type: 'scenario', title: 'The Trolley Problem', subtitle: 'Scenario completed', score: 69, timestamp: '2 weeks ago' },
      { type: 'scenario', title: 'Whistleblowing Dilemma', subtitle: 'Scenario completed', score: 73, timestamp: '2 weeks ago' }
    ]
  },
  '4': {
    name: 'Michael Johnson',
    firstName: 'Michael',
    lastName: 'Johnson',
    course: 'NE203: Ethics and Moral Reasoning',
    sessionsCompleted: 5,
    averageScore: 88,
    overallReadiness: 80,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100',
    recentActivity: [
      { type: 'badge', title: 'Strategic Thinker', subtitle: 'Badge earned', icon: imgImage38, timestamp: '18 hours ago' },
      { type: 'scenario', title: 'The Challenger Decision', subtitle: 'Scenario completed', score: 91, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Just War Theory', subtitle: 'Assignment completed', score: 86, timestamp: '2 days ago' },
      { type: 'scenario', title: 'My Lai Massacre', subtitle: 'Scenario completed', score: 89, timestamp: '4 days ago' },
      { type: 'scenario', title: 'Abu Ghraib', subtitle: 'Scenario completed', score: 84, timestamp: '5 days ago' },
      { type: 'badge', title: 'Leadership Excellence', subtitle: 'Badge earned', icon: imgImage39, timestamp: '6 days ago' },
      { type: 'assignment', title: 'Naval Ethics Case Study', subtitle: 'Assignment completed', score: 90, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Milgram Obedience', subtitle: 'Scenario completed', score: 87, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Stanford Prison Experiment', subtitle: 'Scenario completed', score: 88, timestamp: '2 weeks ago' }
    ]
  },
  '5': {
    name: 'Emily Davis',
    firstName: 'Emily',
    lastName: 'Davis',
    course: 'NE203: Ethics and Moral Reasoning',
    sessionsCompleted: 4,
    averageScore: 92,
    overallReadiness: 85,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Whistleblowing Dilemma', subtitle: 'Scenario completed', score: 96, timestamp: '6 hours ago' },
      { type: 'badge', title: 'Integrity Champion', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Consequentialism Analysis', subtitle: 'Assignment completed', score: 94, timestamp: '2 days ago' },
      { type: 'scenario', title: 'The Challenger Decision', subtitle: 'Scenario completed', score: 93, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Abu Ghraib', subtitle: 'Scenario completed', score: 91, timestamp: '4 days ago' },
      { type: 'assignment', title: 'Moral Reasoning Framework', subtitle: 'Assignment completed', score: 95, timestamp: '5 days ago' },
      { type: 'badge', title: 'Excellence in Ethics', subtitle: 'Badge earned', icon: imgImage39, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Stanford Prison Experiment', subtitle: 'Scenario completed', score: 89, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Milgram Obedience', subtitle: 'Scenario completed', score: 92, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Virtue Ethics Reflection', subtitle: 'Assignment completed', score: 97, timestamp: '2 weeks ago' }
    ]
  },
  '6': {
    name: 'David Martinez',
    firstName: 'David',
    lastName: 'Martinez',
    course: 'NL110: Applied Behavioral Science',
    sessionsCompleted: 2,
    averageScore: 60,
    overallReadiness: 55,
    classYear: '3rd Class',
    classStatus: 'Struggling',
    profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Group Dynamics Challenge', subtitle: 'Scenario completed', score: 58, timestamp: '3 days ago' },
      { type: 'assignment', title: 'Behavioral Analysis Report', subtitle: 'Assignment completed', score: 62, timestamp: '5 days ago' },
      { type: 'scenario', title: 'Leadership Under Pressure', subtitle: 'Scenario completed', score: 55, timestamp: '1 week ago' },
      { type: 'badge', title: 'First Steps', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Team Dynamics Study', subtitle: 'Assignment completed', score: 64, timestamp: '2 weeks ago' },
      { type: 'scenario', title: 'Communication Breakdown', subtitle: 'Scenario completed', score: 59, timestamp: '2 weeks ago' }
    ]
  },
  '7': {
    name: 'Jessica Williams',
    firstName: 'Jessica',
    lastName: 'Williams',
    course: 'NL110: Applied Behavioral Science',
    sessionsCompleted: 4,
    averageScore: 85,
    overallReadiness: 78,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100',
    recentActivity: [
      { type: 'badge', title: 'Behavioral Science Expert', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 day ago' },
      { type: 'scenario', title: 'Team Leadership Challenge', subtitle: 'Scenario completed', score: 87, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Organizational Behavior', subtitle: 'Assignment completed', score: 84, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Conflict Resolution', subtitle: 'Scenario completed', score: 86, timestamp: '5 days ago' },
      { type: 'scenario', title: 'Group Dynamics Challenge', subtitle: 'Scenario completed', score: 82, timestamp: '6 days ago' },
      { type: 'badge', title: 'Communication Skills', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Leadership Styles Analysis', subtitle: 'Assignment completed', score: 88, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Decision Making Under Stress', subtitle: 'Scenario completed', score: 85, timestamp: '2 weeks ago' }
    ]
  },
  '8': {
    name: 'Robert Brown',
    firstName: 'Robert',
    lastName: 'Brown',
    course: 'NL200: Human Behavior',
    sessionsCompleted: 1,
    averageScore: 55,
    overallReadiness: 50,
    classYear: '3rd Class',
    classStatus: 'Struggling',
    profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Basic Decision Making', subtitle: 'Scenario completed', score: 52, timestamp: '4 days ago' },
      { type: 'assignment', title: 'Introduction to Psychology', subtitle: 'Assignment completed', score: 58, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Stress Response Analysis', subtitle: 'Scenario completed', score: 54, timestamp: '2 weeks ago' },
      { type: 'badge', title: 'Getting Started', subtitle: 'Badge earned', icon: imgImage39, timestamp: '2 weeks ago' }
    ]
  },
  '9': {
    name: 'Amanda Taylor',
    firstName: 'Amanda',
    lastName: 'Taylor',
    course: 'NL200: Human Behavior',
    sessionsCompleted: 5,
    averageScore: 90,
    overallReadiness: 83,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Cognitive Bias Recognition', subtitle: 'Scenario completed', score: 93, timestamp: '8 hours ago' },
      { type: 'badge', title: 'Psychology Master', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Human Motivation Study', subtitle: 'Assignment completed', score: 91, timestamp: '2 days ago' },
      { type: 'scenario', title: 'Emotional Intelligence Test', subtitle: 'Scenario completed', score: 89, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Behavioral Patterns Analysis', subtitle: 'Scenario completed', score: 92, timestamp: '5 days ago' },
      { type: 'assignment', title: 'Social Psychology Report', subtitle: 'Assignment completed', score: 88, timestamp: '6 days ago' },
      { type: 'badge', title: 'Critical Analysis', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Group Behavior Study', subtitle: 'Scenario completed', score: 90, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Personality Assessment', subtitle: 'Assignment completed', score: 94, timestamp: '2 weeks ago' }
    ]
  },
  '10': {
    name: 'Christopher Lee',
    firstName: 'Christopher',
    lastName: 'Lee',
    course: 'NL310: Organizational Behavior',
    sessionsCompleted: 4,
    averageScore: 88,
    overallReadiness: 81,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100',
    recentActivity: [
      { type: 'assignment', title: 'Organizational Culture Analysis', subtitle: 'Assignment completed', score: 90, timestamp: '1 day ago' },
      { type: 'scenario', title: 'Change Management Challenge', subtitle: 'Scenario completed', score: 86, timestamp: '2 days ago' },
      { type: 'badge', title: 'Organizational Excellence', subtitle: 'Badge earned', icon: imgImage38, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Leadership Transition', subtitle: 'Scenario completed', score: 89, timestamp: '4 days ago' },
      { type: 'assignment', title: 'Team Performance Metrics', subtitle: 'Assignment completed', score: 87, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Conflict in Organizations', subtitle: 'Scenario completed', score: 85, timestamp: '1 week ago' },
      { type: 'badge', title: 'Strategic Leadership', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Organizational Politics', subtitle: 'Scenario completed', score: 91, timestamp: '2 weeks ago' }
    ]
  },
  '11': {
    name: 'Lauren Anderson',
    firstName: 'Lauren',
    lastName: 'Anderson',
    course: 'NL310: Organizational Behavior',
    sessionsCompleted: 5,
    averageScore: 92,
    overallReadiness: 86,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100',
    recentActivity: [
      { type: 'badge', title: 'Leadership Mastery', subtitle: 'Badge earned', icon: imgImage38, timestamp: '12 hours ago' },
      { type: 'scenario', title: 'Strategic Decision Making', subtitle: 'Scenario completed', score: 95, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Culture and Performance', subtitle: 'Assignment completed', score: 93, timestamp: '2 days ago' },
      { type: 'scenario', title: 'Change Management Challenge', subtitle: 'Scenario completed', score: 91, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Organizational Redesign', subtitle: 'Scenario completed', score: 94, timestamp: '5 days ago' },
      { type: 'badge', title: 'Innovation Leader', subtitle: 'Badge earned', icon: imgImage39, timestamp: '6 days ago' },
      { type: 'assignment', title: 'Leadership Development Plan', subtitle: 'Assignment completed', score: 96, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Team Building Exercise', subtitle: 'Scenario completed', score: 89, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Organizational Strategy', subtitle: 'Assignment completed', score: 92, timestamp: '2 weeks ago' }
    ]
  },
  '12': {
    name: 'Daniel White',
    firstName: 'Daniel',
    lastName: 'White',
    course: 'NL400: Law for the Naval Leader',
    sessionsCompleted: 5,
    averageScore: 85,
    overallReadiness: 79,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Rules of Engagement', subtitle: 'Scenario completed', score: 87, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Military Justice System', subtitle: 'Assignment completed', score: 83, timestamp: '2 days ago' },
      { type: 'badge', title: 'Legal Reasoning', subtitle: 'Badge earned', icon: imgImage38, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Law of Armed Conflict', subtitle: 'Scenario completed', score: 85, timestamp: '5 days ago' },
      { type: 'assignment', title: 'UCMJ Case Analysis', subtitle: 'Assignment completed', score: 86, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Legal Decision Making', subtitle: 'Scenario completed', score: 84, timestamp: '1 week ago' },
      { type: 'badge', title: 'Justice and Law', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'International Law', subtitle: 'Scenario completed', score: 88, timestamp: '2 weeks ago' }
    ]
  },
  '13': {
    name: 'Samantha Moore',
    firstName: 'Samantha',
    lastName: 'Moore',
    course: 'NL400: Law for the Naval Leader',
    sessionsCompleted: 4,
    averageScore: 90,
    overallReadiness: 82,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100',
    recentActivity: [
      { type: 'assignment', title: 'Naval Law and Ethics', subtitle: 'Assignment completed', score: 92, timestamp: '1 day ago' },
      { type: 'badge', title: 'Legal Scholar', subtitle: 'Badge earned', icon: imgImage38, timestamp: '2 days ago' },
      { type: 'scenario', title: 'Law of Armed Conflict', subtitle: 'Scenario completed', score: 91, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Rules of Engagement', subtitle: 'Scenario completed', score: 88, timestamp: '4 days ago' },
      { type: 'assignment', title: 'International Maritime Law', subtitle: 'Assignment completed', score: 93, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Military Justice Scenarios', subtitle: 'Scenario completed', score: 89, timestamp: '1 week ago' },
      { type: 'badge', title: 'Naval Jurisprudence', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Legal Ethics Challenge', subtitle: 'Scenario completed', score: 90, timestamp: '2 weeks ago' }
    ]
  },
  '14': {
    name: 'Matthew Harris',
    firstName: 'Matthew',
    lastName: 'Harris',
    course: 'NL311: Psychology of Leadership',
    sessionsCompleted: 5,
    averageScore: 88,
    overallReadiness: 80,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Leadership Styles Assessment', subtitle: 'Scenario completed', score: 90, timestamp: '18 hours ago' },
      { type: 'badge', title: 'Psychological Insight', subtitle: 'Badge earned', icon: imgImage38, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Motivation and Performance', subtitle: 'Assignment completed', score: 87, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Emotional Intelligence', subtitle: 'Scenario completed', score: 86, timestamp: '4 days ago' },
      { type: 'scenario', title: 'Team Psychology', subtitle: 'Scenario completed', score: 89, timestamp: '6 days ago' },
      { type: 'assignment', title: 'Leadership Psychology Report', subtitle: 'Assignment completed', score: 91, timestamp: '1 week ago' },
      { type: 'badge', title: 'Behavioral Leadership', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Stress and Decision Making', subtitle: 'Scenario completed', score: 85, timestamp: '2 weeks ago' }
    ]
  },
  '15': {
    name: 'Nicole Clark',
    firstName: 'Nicole',
    lastName: 'Clark',
    course: 'NL311: Psychology of Leadership',
    sessionsCompleted: 4,
    averageScore: 92,
    overallReadiness: 85,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100',
    recentActivity: [
      { type: 'badge', title: 'Leadership Psychology Expert', subtitle: 'Badge earned', icon: imgImage38, timestamp: '1 day ago' },
      { type: 'scenario', title: 'Cognitive Leadership', subtitle: 'Scenario completed', score: 94, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Behavioral Science in Leadership', subtitle: 'Assignment completed', score: 95, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Leadership Styles Assessment', subtitle: 'Scenario completed', score: 91, timestamp: '4 days ago' },
      { type: 'scenario', title: 'Emotional Intelligence', subtitle: 'Scenario completed', score: 93, timestamp: '6 days ago' },
      { type: 'badge', title: 'Advanced Psychology', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'assignment', title: 'Group Dynamics Study', subtitle: 'Assignment completed', score: 96, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Crisis Leadership', subtitle: 'Scenario completed', score: 89, timestamp: '2 weeks ago' }
    ]
  },
  '16': {
    name: 'Ryan Lewis',
    firstName: 'Ryan',
    lastName: 'Lewis',
    course: 'NL411: Human Factors in Combat',
    sessionsCompleted: 5,
    averageScore: 85,
    overallReadiness: 78,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1630534658718-395efda906cb?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Combat Stress Management', subtitle: 'Scenario completed', score: 86, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Human Performance in Combat', subtitle: 'Assignment completed', score: 84, timestamp: '2 days ago' },
      { type: 'badge', title: 'Combat Readiness', subtitle: 'Badge earned', icon: imgImage38, timestamp: '4 days ago' },
      { type: 'scenario', title: 'Fatigue and Performance', subtitle: 'Scenario completed', score: 83, timestamp: '5 days ago' },
      { type: 'scenario', title: 'Decision Making Under Fire', subtitle: 'Scenario completed', score: 87, timestamp: '6 days ago' },
      { type: 'assignment', title: 'Tactical Psychology', subtitle: 'Assignment completed', score: 85, timestamp: '1 week ago' },
      { type: 'badge', title: 'Tactical Excellence', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Team Cohesion in Combat', subtitle: 'Scenario completed', score: 88, timestamp: '2 weeks ago' }
    ]
  },
  '17': {
    name: 'Megan Robinson',
    firstName: 'Megan',
    lastName: 'Robinson',
    course: 'NL411: Human Factors in Combat',
    sessionsCompleted: 4,
    averageScore: 90,
    overallReadiness: 83,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1726220064042-e1233e0d16bb?w=100',
    recentActivity: [
      { type: 'badge', title: 'Combat Psychology Master', subtitle: 'Badge earned', icon: imgImage38, timestamp: '12 hours ago' },
      { type: 'scenario', title: 'High-Stress Decision Making', subtitle: 'Scenario completed', score: 92, timestamp: '1 day ago' },
      { type: 'assignment', title: 'Human Factors Analysis', subtitle: 'Assignment completed', score: 91, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Combat Stress Management', subtitle: 'Scenario completed', score: 89, timestamp: '4 days ago' },
      { type: 'scenario', title: 'Situational Awareness', subtitle: 'Scenario completed', score: 93, timestamp: '5 days ago' },
      { type: 'assignment', title: 'Performance Under Pressure', subtitle: 'Assignment completed', score: 88, timestamp: '1 week ago' },
      { type: 'badge', title: 'Resilience Leader', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Team Dynamics in Combat', subtitle: 'Scenario completed', score: 90, timestamp: '2 weeks ago' }
    ]
  },
  '18': {
    name: 'Kevin Walker',
    firstName: 'Kevin',
    lastName: 'Walker',
    course: 'NL340: Change Management',
    sessionsCompleted: 5,
    averageScore: 88,
    overallReadiness: 81,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?w=100',
    recentActivity: [
      { type: 'scenario', title: 'Leading Organizational Change', subtitle: 'Scenario completed', score: 90, timestamp: '1 day ago' },
      { type: 'badge', title: 'Change Agent', subtitle: 'Badge earned', icon: imgImage38, timestamp: '2 days ago' },
      { type: 'assignment', title: 'Change Management Strategy', subtitle: 'Assignment completed', score: 87, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Resistance to Change', subtitle: 'Scenario completed', score: 86, timestamp: '5 days ago' },
      { type: 'scenario', title: 'Transformation Leadership', subtitle: 'Scenario completed', score: 89, timestamp: '6 days ago' },
      { type: 'assignment', title: 'Organizational Transformation', subtitle: 'Assignment completed', score: 91, timestamp: '1 week ago' },
      { type: 'badge', title: 'Innovation Leadership', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Culture Change Challenge', subtitle: 'Scenario completed', score: 85, timestamp: '2 weeks ago' }
    ]
  },
  '19': {
    name: 'Ashley Young',
    firstName: 'Ashley',
    lastName: 'Young',
    course: 'NL340: Change Management',
    sessionsCompleted: 4,
    averageScore: 92,
    overallReadiness: 84,
    classYear: '3rd Class',
    classStatus: 'On Track',
    profileImage: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?w=100',
    recentActivity: [
      { type: 'assignment', title: 'Strategic Change Initiative', subtitle: 'Assignment completed', score: 95, timestamp: '1 day ago' },
      { type: 'scenario', title: 'Leading Organizational Change', subtitle: 'Scenario completed', score: 93, timestamp: '2 days ago' },
      { type: 'badge', title: 'Transformation Leader', subtitle: 'Badge earned', icon: imgImage38, timestamp: '3 days ago' },
      { type: 'scenario', title: 'Change Communication', subtitle: 'Scenario completed', score: 91, timestamp: '4 days ago' },
      { type: 'assignment', title: 'Managing Resistance', subtitle: 'Assignment completed', score: 94, timestamp: '6 days ago' },
      { type: 'scenario', title: 'Cultural Transformation', subtitle: 'Scenario completed', score: 89, timestamp: '1 week ago' },
      { type: 'badge', title: 'Strategic Vision', subtitle: 'Badge earned', icon: imgImage39, timestamp: '1 week ago' },
      { type: 'scenario', title: 'Innovation and Change', subtitle: 'Scenario completed', score: 92, timestamp: '2 weeks ago' }
    ]
  }
};

const getStudentData = (id: string) => {
  if (studentData[id]) {
    return {
      ...studentData['1'], // Use student 1's complete data as defaults
      ...studentData[id]    // Override with specific student data
    };
  }
  
  // Fallback for any unknown IDs
  return studentData['1'];
};

export default function StudentDetailsPage({ studentId, onBack, onAssignScenario }: StudentDetailsPageProps) {
  const student = getStudentData(studentId);
  
  return (
    <div className="bg-[#efeef7] relative flex-1 overflow-hidden">
      {/* Left Sidebar */}
      <div className="absolute bg-[#e8e6f3] top-0 bottom-0 left-0 w-[32.41%] overflow-auto">
        <div className="flex flex-col gap-[32px] p-[40px]">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors w-fit"
          >
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="trim">
                  <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="#0D004D" fillRule="evenodd" id="icon" />
                </g>
              </svg>
            </div>
            <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Back</p>
          </button>

          {/* Midshipman Name */}
          <div className="content-stretch flex flex-col font-medium gap-[16px] items-start relative shrink-0 w-full">
            <div className="leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px]">
              <p className="mb-0">{student.firstName} </p>
              <p>{student.lastName}</p>
            </div>
            <p className="leading-[28px] relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px]">{student.course}</p>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <button
              onClick={onAssignScenario}
              className="flex-1 bg-[#ffce00] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Assign Scenario</p>
                </div>
              </div>
            </button>
            <button className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors">
              <div className="content-stretch flex items-center relative shrink-0">
                <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPaths.p248f7271} fill="#0D004D" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          {/* Overall Readiness Card */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                <div className="absolute inset-0 rounded-[12px] bg-[#05205d]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
                <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(169.737287deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
              </div>
              <div className="flex flex-col justify-center size-full relative">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0">
                      <div className="font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px]">
                        <p className="mb-[8px]">Overall </p>
                        <p>readiness</p>
                      </div>
                    </div>
                    <p className="font-normal leading-[120px] relative grow text-[120px] text-right text-nowrap text-white">{student.overallReadiness}</p>
                  </div>
                  <div className="h-px bg-[#61D198] relative shrink-0 w-full" />
                  <div className="content-stretch flex font-medium items-center justify-between leading-[20px] relative shrink-0 text-[#61d198] text-[16px] text-center text-nowrap w-full">
                    <p className="relative shrink-0">{student.classYear}</p>
                    <p className="relative shrink-0">{student.classStatus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Breakdown */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#f6f6fb] relative rounded-[8px] shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
                    {student.skills.map((skill: any, index: number) => (
                      <div key={index} className="content-stretch flex flex-col items-start justify-center px-0 py-[16px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)] last:border-0">
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                          <div className="flex-1 content-stretch flex gap-[10px] items-center relative shrink-0 text-nowrap">
                            <p className="font-medium leading-[20px] relative shrink-0 text-[#171717] text-[16px]">{skill.name}</p>
                            <p className="font-semibold leading-[16px] opacity-70 relative shrink-0 text-[#00b057] text-[14px]">{skill.level}</p>
                          </div>
                          <div className="content-stretch flex items-center justify-end relative shrink-0">
                            <p className="font-medium leading-[40px] relative shrink-0 text-[#171717] text-[32px] text-nowrap tracking-[-0.64px]">{skill.score}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image - positioned absolutely in top right of sidebar */}
        <div className="absolute right-[40px] size-[120px] top-[40px]">
          <img alt="" className="block max-w-none size-full rounded-full" height="120" src={student.profileImage} width="120" />
        </div>
      </div>

      {/* Scrollable container for Middle and Right sections */}
      <div className="absolute top-0 bottom-0 left-[32.41%] right-0 overflow-auto">
        <div className="flex gap-[40px] p-[40px_40px_32px_40px] min-h-full">
          {/* Middle Section - Stats and Frameworks */}
          <div className="flex-1" style={{ maxWidth: 'calc((100% - 80px) * 0.6993)' }}>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              {/* Stats and Frameworks Card */}
              <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[32px] relative w-full">
                    {/* Top Stats */}
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                      <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                        <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">Sessions completed</p>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                          <p className="font-medium leading-[72px] relative shrink-0 text-[#171717] text-[64px] text-nowrap">{student.sessionsCompleted}</p>
                        </div>
                      </div>
                      <div className="flex-1 content-stretch flex flex-col gap-[8px] items-end relative shrink-0">
                        <p className="font-medium leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full text-left">Average score</p>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                          <p className="font-medium leading-[72px] relative shrink-0 text-[#171717] text-[64px] text-nowrap">{student.averageScore}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full" />

                    {/* Framework Progress Bars */}
                    <div className="content-stretch flex flex-col gap-[40px] items-start max-h-[560px] pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                      {student.frameworks.map((framework: any, index: number) => (
                        <div key={index} className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex font-medium gap-[16px] items-end relative shrink-0 w-full">
                            <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                              <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{framework.level}</p>
                              <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{framework.name}</p>
                            </div>
                            <p className="leading-[32px] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">{framework.score}%</p>
                          </div>
                          <div className="bg-[rgba(0,116,221,0.1)] content-stretch flex h-[2px] items-start relative shrink-0 w-full">
                            <div className="bg-[#0074dd] h-full shrink-0" style={{ width: `${framework.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Framework Application Insights Card */}
              <div className="bg-[#e8e6f3] relative rounded-[12px] shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[32px] relative w-full">
                    {student.insights.map((insight: any, index: number) => (
                      <div key={index} className="w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                          <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0 font-medium">
                            <p className="leading-[16px] relative shrink-0 text-[#0074dd] text-[14px] w-full">{insight.status}</p>
                            <p className="leading-[36px] relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-full">{insight.title}</p>
                          </div>
                          <div className={`content-stretch flex items-center justify-center relative rounded-[31px] shrink-0 size-[56px] ${
                            insight.type === 'check' ? 'bg-[rgba(0,176,87,0.1)]' : 'bg-[rgba(255,54,42,0.1)]'
                          }`}>
                            {insight.type === 'check' ? (
                              <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g id="Check">
                                  <path d={svgPaths.p368ccf00} fill="#006632" id="Vector" />
                                </g>
                              </svg>
                            ) : (
                              <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g id="ArrowRight">
                                  <path d={svgPaths.p319dcd00} fill="#B20900" id="Vector" />
                                </g>
                              </svg>
                            )}
                          </div>
                        </div>
                        {index < student.insights.length - 1 && (
                          <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full my-[32px]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Recent Activity */}
          <div className="flex-1 pl-0 pr-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">Recent Activity</p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                {student.recentActivity.map((activity: any, index: number) => (
                  <div key={index} className="content-stretch flex items-start justify-between px-0 py-[16px] relative shrink-0 w-full border-b border-[rgba(13,0,77,0.15)] last:border-0">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                      {activity.type === 'badge' ? (
                        <div className="relative shrink-0 size-[40px]">
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={activity.icon} />
                        </div>
                      ) : (
                        <div className="bg-[rgba(0,176,87,0.1)] content-stretch flex items-center justify-center relative rounded-[31px] shrink-0 size-[40px]">
                          <p className="font-medium leading-[20px] relative shrink-0 text-[#006632] text-[16px] text-center text-nowrap">{activity.score}</p>
                        </div>
                      )}
                      <div className="content-stretch flex flex-col font-medium gap-[8px] items-start justify-center relative shrink-0 text-nowrap">
                        <p className="leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px]">{activity.subtitle}</p>
                        <p className="leading-[22px] relative shrink-0 text-[#171717] text-[16px]">{activity.title}</p>
                      </div>
                    </div>
                    <p className="font-medium leading-[16px] relative shrink-0 text-[#5d5d5d] text-[14px] text-nowrap text-right">{activity.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}