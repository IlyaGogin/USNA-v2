import svgPaths from "../imports/svg-a2fa3lnmfx";
import svgPathsNew from "../imports/svg-v9tar8smaz";
import imgRectangle12189 from "figma:asset/bcbd963719ce9935dd0a927cea286c98f8f0e598.png";
import imgMidshipman from "figma:asset/07e7c8f77c04e0823c58852b881751af67d72e24.png";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import { useState } from 'react';
import InstructorGuideModal from './InstructorGuideModal';
import QRCodeModal from './QRCodeModal';

// Import scenario images from Figma
import imgInnerRing from "figma:asset/b25dac17eafb0809e8e66dfb8e38b0b478c49c3a.png";
import imgChallenger from "figma:asset/094aa37446df343e91a51c5e6370d33a29a9117e.png";
import imgMilgram from "figma:asset/e072d8b684744120a64985000a2e8c7945b7d891.png";
import imgAbuGhraib from "figma:asset/ac2d5005d1b01e0b1c79cb222edb110a7ae9648c.png";
import imgTrolley from "figma:asset/6577fdf878acc457e6a882fedb4da095ff1d4788.png";
import imgMyLai from "figma:asset/f86ef3ae06ccf54801dec90a63ad85ef95c67f7d.png";
import imgWhistleblowing from "figma:asset/81f017d3739b89f658f70b868744133c1c4cd42d.png";
import imgLucifer from "figma:asset/3bd37c1241aaaab4f0493222504af7f42f8b19f9.png";
import imgStanford from "figma:asset/6abce4617fb44ccfe048833e408277179041353b.png";

// Import new scenario images
import imgFlightTest from "figma:asset/4ac71b9ca7ac1f8bff2625e5c11ae7cbda5b2af7.png";
import imgQuickDecision from "figma:asset/52593c1b1eda0a0753111d28198dd73a8cdbc1ee.png";
import imgDifficultConversation from "figma:asset/6ce5ced382fd8d29c1d4b680e27ffcbba8506e7c.png";
import imgAccountability from "figma:asset/6393ea8d3a5fc64d2d9a630576264b8a92e2d81d.png";

// Import character avatars for new scenarios
import imgAvatarElenaVance from "figma:asset/4192a9d8ca69373ef1534e6d00c38cfa4b4a98a7.png";
import imgAvatarAlexChen from "figma:asset/aa59fcaf455f5de310a4e97c1e95f223e1227f95.png";
import imgAvatarJordanMartinez from "figma:asset/aaada308f577b645f4fd6932b6b3bf22ba227256.png";
import imgAvatarDavidWilliams from "figma:asset/e54a08b729507e6b026e03555cdc49221f351593.png";

type ScenarioDetailsPageProps = {
  scenarioId: string;
  onBack: () => void;
  onAssignScenario: () => void;
  onTestScenario: () => void;
  isMidshipman?: boolean;
  onLogoClick?: () => void;
  onTabChange?: (tab: string) => void;
};

type ScenarioDetail = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  time: string;
  aiCharacter: {
    name: string;
    role: string;
    avatar: string;
  };
  studentRole: {
    abbr: string;
    title: string;
    role: string;
  };
  situation: string;
  dilemma: string;
  studentMission: string;
  successCriteria: string[];
  heroImage: string;
};

const scenarioDetails: Record<string, ScenarioDetail> = {
  '1': {
    id: '1',
    title: 'The Authority Question',
    subtitle: 'Authority and Moral Agency',
    description: 'Train participants to understand the psychology of obedience to authority and develop skills to maintain moral agency when receiving questionable orders.',
    location: 'USS Constitution, Engineering Dept',
    time: '48 hours before ORE',
    aiCharacter: {
      name: 'CDR Patricia Wilkins',
      role: 'Department Head, Engineering',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'LT',
      title: 'Division Officer',
      role: 'Division Officer (O-3/Lieutenant)'
    },
    situation: 'Ship preparing for Operational Readiness Evaluation (ORE) in 48 hours. Fire Pump #3 was down for repairs. Pump is functional but weekly inspection documentation is incomplete. CDR Wilkins orders you to backdate maintenance log entries to show compliance.',
    dilemma: 'CDR Wilkins orders you to falsify official records, citing "full responsibility" from the XO. This tests whether you can distinguish between legitimate military discipline and harmful compliance while maintaining personal moral accountability.',
    studentMission: 'Navigate the conversation with CDR Wilkins. Appropriately question the order, seek clarification about alternatives, and either find a solution that maintains integrity or escalate concerns through proper channels.',
    successCriteria: [
      'Recognize and evaluate questionable orders',
      'Engage in professional inquiry and dialogue',
      'Navigate authority and chain of command appropriately',
      'Maintain personal moral agency and accountability'
    ],
    heroImage: imgMilgram
  },
  '2': {
    id: '2',
    title: 'The Launch Decision',
    subtitle: 'Organizational Ethics & Dissent',
    description: 'Explore the ethical responsibilities of engineers and managers when faced with pressure to launch despite safety concerns.',
    location: 'Kennedy Space Center, Launch Control',
    time: '0600, Launch day morning',
    aiCharacter: {
      name: 'Mission Director',
      role: 'NASA Launch Director',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'EN',
      title: 'Engineer',
      role: 'Flight Safety Engineer'
    },
    situation: 'Temperature data shows conditions outside safe parameters for O-ring seals. Previous launches had close calls. The mission has already been delayed multiple times, and political pressure is mounting. Your engineering team recommends delay, but management is pushing for launch.',
    dilemma: 'Continue raising safety concerns and risk being overruled or labeled as obstructionist, or defer to management\'s decision and accept the risk. The decision tests your willingness to stand firm on technical judgments despite organizational pressure.',
    studentMission: 'Advocate for safety while navigating organizational hierarchies and political pressures. The scenario examines your commitment to technical integrity and moral courage when facing authority.',
    successCriteria: [
      'Clearly articulates technical safety concerns',
      'Escalates appropriately through chain of command',
      'Documents concerns professionally',
      'Maintains professional relationships while dissenting'
    ],
    heroImage: imgChallenger
  },
  '3': {
    id: '3',
    title: 'Inside the Wire',
    subtitle: 'Social Influence & Peer Pressure',
    description: 'Train participants to recognize and resist unhealthy social pressures to belong to exclusive "inner rings" or in-groups.',
    location: 'Naval Academy, Bancroft Hall',
    time: '2100, Thursday evening',
    aiCharacter: {
      name: 'Captain Williams',
      role: 'Company Officer',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'MD',
      title: 'Midshipman',
      role: '2nd Class Midshipman'
    },
    situation: 'You\'re invited to join an exclusive study group that has suspiciously high grades. Other midshipmen hint that they share exam information. Joining would help your grades and social standing, but you notice the group excludes certain classmates and operates in secrecy.',
    dilemma: 'Accept the invitation to gain academic and social advantages while potentially compromising your integrity, or decline and risk social isolation while maintaining your ethical standards. The decision tests your resistance to the allure of exclusive groups.',
    studentMission: 'Navigate peer pressure and social dynamics while maintaining personal integrity and commitment to the Honor Concept. The scenario tests your ability to recognize and resist the subtle corrupting influence of exclusive in-groups.',
    successCriteria: [
      'Identifies the ethical red flags in the invitation',
      'Articulates the long-term consequences of joining',
      'Maintains relationships while declining participation',
      'Demonstrates understanding of the Honor Concept'
    ],
    heroImage: imgInnerRing
  },
  '4': {
    id: '4',
    title: 'The Dark Hours',
    subtitle: 'Situational Ethics & Military Conduct',
    description: 'Analyze the breakdown of ethical standards in extreme situations and the importance of moral courage in military settings.',
    location: 'Forward Operating Base, classified location',
    time: '1400, Wednesday afternoon',
    aiCharacter: {
      name: 'Mr. Mitchell',
      role: 'Senior Intelligence Analyst',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'OF',
      title: 'Officer',
      role: 'Intelligence Officer (O-3)'
    },
    situation: 'High-value detainee captured with potential intelligence about an imminent attack. Time is critical - attack may occur within 24-48 hours. Mr. Mitchell has requested a meeting to discuss interrogation methods.',
    dilemma: 'Mr. Mitchell is proposing "enhanced interrogation techniques" that you find ethically questionable. He argues that lives are at stake - information could prevent an attack that would kill dozens or hundreds. You must decide whether to approve these methods.',
    studentMission: 'Navigate the tension between consequentialist pressures (extracting information to save lives) and deontological constraints (human dignity, prohibition on torture). The scenario tests your ability to maintain ethical boundaries under extreme pressure.',
    successCriteria: [
      'Distinguish lawful interrogation from torture',
      'Maintain human dignity as a constraint',
      'Recognize long-term consequences of ethical failures',
      'Engage with complexity while avoiding rationalization'
    ],
    heroImage: imgAbuGhraib
  },
  '5': {
    id: '5',
    title: 'The Moral Roadmap',
    subtitle: 'Utilitarian vs. Deontological Ethics',
    description: 'Navigate the classic ethical dilemma exploring the tension between outcome-based and duty-based moral reasoning.',
    location: 'At sea, Western Pacific',
    time: 'Crisis - decision needed within minutes',
    aiCharacter: {
      name: 'LTJG Chen',
      role: 'Damage Control Assistant',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'OF',
      title: 'Officer',
      role: 'Watch Officer (O-3)'
    },
    situation: 'Ship has sustained significant damage. Fire is spreading through multiple compartments. LTJG Chen presents a critical decision: watertight doors must be closed to save the ship, but 12 personnel are still trapped in Compartment 3-144-2-L.',
    dilemma: 'To save the ship and most of the crew, watertight doors must be closed, sealing off the compartment with 12 personnel inside. If doors remain open, the fire will spread and the entire ship may be lost with all 300+ personnel. You must make this decision now.',
    studentMission: 'Navigate a "moral triage" situation where every available option involves violating a moral constraint. Work through this decision using the Moral Deliberation Roadmap (Constraints, Consequences, Character, and Special Obligations).',
    successCriteria: [
      'Apply structured moral reasoning',
      'Acknowledge moral complexity and weight of all options',
      'Make difficult decisions and take responsibility',
      'Articulate moral reasoning clearly'
    ],
    heroImage: imgTrolley
  },
  '6': {
    id: '6',
    title: '2 AM Courage',
    subtitle: 'War Crimes & Moral Courage',
    description: 'Study the breakdown of ethical conduct in combat and examine the role of moral courage in preventing atrocities.',
    location: 'Combat zone, Vietnam (historical scenario)',
    time: '0800, Village operation',
    aiCharacter: {
      name: 'Lt. Calley',
      role: 'Platoon Leader',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'OF',
      title: 'Officer',
      role: 'Platoon Leader (O-2)'
    },
    situation: 'Your unit has entered a village suspected of harboring enemy combatants. The situation is tense. Your commanding officer is ordering actions against civilians that clearly violate the laws of armed conflict and your moral compass.',
    dilemma: 'Orders are being given to harm unarmed civilians. You witness escalating violence against non-combatants. You must decide whether to obey unlawful orders, remain silent, or intervene to stop war crimes - knowing the personal and professional consequences.',
    studentMission: 'Exercise moral courage to prevent atrocities. Recognize unlawful orders, maintain adherence to the laws of armed conflict, and demonstrate the courage to intervene when witnessing war crimes.',
    successCriteria: [
      'Recognize unlawful orders and refuse to obey',
      'Intervene to protect civilians',
      'Exercise moral courage despite personal risk',
      'Demonstrate understanding of laws of armed conflict'
    ],
    heroImage: imgMyLai
  },
  '7': {
    id: '7',
    title: 'The Loyalty Test',
    subtitle: 'Loyalty vs. Integrity',
    description: 'Explore the ethical complexities of reporting misconduct while balancing organizational loyalty and personal integrity.',
    location: 'Naval Base, Unit Office',
    time: '1600, Friday afternoon',
    aiCharacter: {
      name: 'LCDR Davis',
      role: 'Department Head',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'OF',
      title: 'Officer',
      role: 'Division Officer (O-2)'
    },
    situation: 'You\'ve discovered that your Department Head has been falsifying training records to meet inspection requirements. The conduct is clearly wrong, but reporting it would damage a respected leader\'s career and create turmoil in your unit.',
    dilemma: 'Report the misconduct through proper channels and face potential retaliation and unit disruption, or remain silent to preserve unit cohesion and your working relationship with your Department Head. The decision tests your willingness to prioritize integrity over loyalty.',
    studentMission: 'Navigate the ethical complexities of reporting misconduct while understanding the competing values of organizational loyalty and personal integrity. Make the right decision despite the personal and professional costs.',
    successCriteria: [
      'Recognize the ethical obligation to report',
      'Navigate proper reporting channels',
      'Balance loyalty with integrity appropriately',
      'Demonstrate moral courage in facing consequences'
    ],
    heroImage: imgWhistleblowing
  },
  '8': {
    id: '8',
    title: 'Character in Crisis',
    subtitle: 'Power & Moral Corruption',
    description: 'Investigate how good people can be led to do bad things when given power in corrupt systems.',
    location: 'Forward Operating Base, Iraq',
    time: '6+ months deployed, unit under extreme stress',
    aiCharacter: {
      name: 'SGM Rodriguez',
      role: 'Company First Sergeant',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'CO',
      title: 'Commander',
      role: 'Company Commander (O-3)'
    },
    situation: 'Unit has been under extreme operational stress, taken significant casualties, morale is low. SGM Rodriguez has requested a meeting to discuss concerns about increasing misconduct and warning signs of unit degradation.',
    dilemma: 'SGM Rodriguez reports escalating minor misconduct: disrespect toward locals, desecration of enemy dead, excessive use of force, unit cohesion breaking down. Will you listen, recognize the problems, and take action - or dismiss concerns and make excuses?',
    studentMission: 'Recognize early warning signs of unit degradation and leadership failure. Demonstrate moral leadership under extreme stress and take action to address misconduct before it escalates further.',
    successCriteria: [
      'Recognize warning signs of unit moral degradation',
      'Maintain connection with subordinates',
      'Address misconduct directly',
      'Demonstrate moral leadership and character'
    ],
    heroImage: imgLucifer
  },
  '9': {
    id: '9',
    title: 'Abu Ghraib Echo',
    subtitle: 'Role Identity & Ethical Behavior',
    description: 'Examine how assigned roles and situational factors can override individual moral values and behavior.',
    location: 'Research Facility, Stanford University (educational scenario)',
    time: 'Day 3 of experiment',
    aiCharacter: {
      name: 'Dr. Zimbardo',
      role: 'Principal Investigator',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'GD',
      title: 'Guard',
      role: 'Experimental Guard'
    },
    situation: 'You are participating in a psychology experiment about prison dynamics. You\'ve been assigned the role of "guard" while other participants play "prisoners." Over the past three days, the behavior of both guards and prisoners has become increasingly disturbing.',
    dilemma: 'The experiment is revealing dark truths about how roles and situations can corrupt behavior. Guards are becoming abusive, prisoners are showing signs of psychological distress. You must decide whether to continue participating or speak up about ethical concerns.',
    studentMission: 'Recognize how situational factors and assigned roles can override personal values. Maintain moral agency even when institutional pressures and role expectations push toward unethical behavior.',
    successCriteria: [
      'Recognize role-induced behavioral changes',
      'Maintain personal moral agency',
      'Question institutional authority appropriately',
      'Demonstrate awareness of situational ethics'
    ],
    heroImage: imgStanford
  },
  '10': {
    id: '10',
    title: 'Pressure Point',
    subtitle: 'Moral Perception',
    description: 'Develop ethical decision-making skills when facing pressure to compromise safety standards for operational demands.',
    location: 'Naval Air Station Oceana',
    time: '1800, Friday evening',
    aiCharacter: {
      name: 'Chief Rodriguez',
      role: 'Aviation Maintenance Chief',
      avatar: imgRectangle12189
    },
    studentRole: {
      abbr: 'LT',
      title: 'Lieutenant',
      role: 'Maintenance Division Officer (LTJG)'
    },
    situation: 'You are a junior officer (LTJG) serving as the Maintenance Division Officer aboard a naval air station. It\'s Friday evening, 1800, and you\'re conducting a final walkthrough before a long weekend. During your inspection, you discover that Chief Rodriguez, your highly respected Aviation Maintenance Chief with 18 years of experience and an impeccable safety record, is about to sign off on maintenance logs for work that hasn\'t been fully completed. The aircraft in question is scheduled for a training flight Monday morning. The incomplete work involves a non-critical inspection item that "usually checks out fine" and has a low historical failure rate. However, this item is still required by regulation. The Commanding Officer has been pushing hard for improved readiness metrics, and your division has been struggling to meet targets.',
    dilemma: 'Chief Rodriguez privately asks you to "use discretion" this one time, mentioning his upcoming retirement and perfect record. You must choose between enforcing regulations and potentially damaging a good sailor\'s career, or trusting his experience while risking flight safety and your own integrity. Your career evaluation is coming up, and Chief Rodriguez\'s endorsement matters significantly.',
    studentMission: 'Navigate the tension between regulatory compliance, operational pressure, and the human element of leadership while maintaining unit effectiveness. The scenario tests your ability to uphold professional standards when facing personal and institutional pressures.',
    successCriteria: [
      'Identify when organizational pressure creates rationalization for ethical shortcuts',
      'Demonstrate integrity by addressing the ethical issue directly rather than avoiding it',
      'Navigate the conversation with respect while maintaining your position on the ethical issue',
      'Identify appropriate escalation pathways when facing organizational pressure'
    ],
    heroImage: imgMidshipman
  },
  '11': {
    id: '11',
    title: 'The Flight Test',
    subtitle: 'Moral Perception Under Authority Pressure',
    description: 'Develop moral courage to raise safety concerns with senior authority figures when facing institutional pressure to accept marginal technical decisions.',
    location: 'Meridian Aerospace',
    time: '1600, Thursday afternoon',
    aiCharacter: {
      name: 'Dr. Elena Vance',
      role: 'Chief Test Engineer',
      avatar: imgAvatarElenaVance
    },
    studentRole: {
      abbr: 'SE',
      title: 'Junior Systems Engineer',
      role: 'USNA Class of 2025'
    },
    situation: 'You graduated from the Naval Academy last May and took a position as a junior systems engineer at Meridian Aerospace, a defense contractor that builds propulsion systems for Navy aircraft. Your team has been preparing for a critical engine test demonstration, and the Navy program office is visiting tomorrow to evaluate whether to continue funding the project. Hundreds of jobs depend on this contract.',
    dilemma: 'During final data review, you noticed an unusual temperature spike in one of the engine test runs. It\'s technically within the acceptable range, but it\'s at the upper edge—and it appeared twice during high-stress maneuvers. You mentioned it to your team lead, who dismissed your concern, saying "It\'s within spec. Don\'t worry about it." Dr. Elena Vance, the Chief Test Engineer with 20 years of experience, has called you to her office because she\'s heard you\'re still thinking about that data.',
    studentMission: 'Navigate a conversation with a senior authority figure about a safety concern that may seem minor but could be significant. You need to articulate your technical observations clearly, explain why the pattern concerns you despite being within specifications, and determine whether to push the issue further—all while managing the pressure of being a new graduate in your first role at a company facing a critical contract decision.',
    successCriteria: [
      'Clearly explain the technical concern without overstating or understating the risk',
      'Demonstrate sound engineering judgment about what "within spec" actually means',
      'Navigate the implicit pressure from authority and institutional stakes',
      'Show you understand when to defer to experience and when to advocate for safety',
      'Balance respect for Dr. Vance\'s expertise with your responsibility to speak up'
    ],
    heroImage: imgFlightTest
  },
  '12': {
    id: '12',
    title: 'The Quick Decision',
    subtitle: 'Recognizing Rushed Thinking',
    description: 'Recognize automatic thinking patterns under time pressure and practice slowing down to gather information before committing to action.',
    location: 'TechForward Inc. Office Floor',
    time: '1345, Tuesday afternoon',
    aiCharacter: {
      name: 'Alex Chen',
      role: 'Fellow Intern',
      avatar: imgAvatarAlexChen
    },
    studentRole: {
      abbr: 'SI',
      title: 'Summer Intern',
      role: '2nd Week on the Job'
    },
    situation: 'It\'s your second week as a summer intern at a technology company. You\'re still learning the systems, getting to know your team, and figuring out how things work. The office is busy today, and people are moving quickly around you.',
    dilemma: 'Alex Chen, another intern who started the same day as you, rushes up to your desk looking stressed and clearly in a hurry. They need you to run down to the third floor right now to tell someone named Marcus that a meeting has moved to 2pm. Alex is about to walk into a presentation and can\'t do it themselves. You have about 30 seconds to decide. You don\'t know who Marcus is, you\'re not sure why this can\'t be a text or email, and you have your own work to do—but Alex is counting on you and there\'s no time to think.',
    studentMission: 'Recognize when you\'re being pushed into System 1 thinking by time pressure and social dynamics. Practice slowing down even when everything around you says to react immediately. Gather the information you need to make a good decision rather than just saying yes to make someone else comfortable.',
    successCriteria: [
      'Notice the pressure to react quickly without thinking',
      'Ask clarifying questions before committing to action',
      'Recognize how another person\'s stress influences your decision-making',
      'Distinguish between actual urgency and perceived urgency',
      'Make a deliberate choice rather than an automatic response'
    ],
    heroImage: imgQuickDecision
  },
  '13': {
    id: '13',
    title: 'The Difficult Conversation',
    subtitle: 'Leading Others with Honest Feedback',
    description: 'Build peer leadership skills by delivering honest, direct feedback that holds accountable while maintaining trust and respect.',
    location: 'Harbor Grounds Coffee Shop',
    time: '1345, Tuesday afternoon',
    aiCharacter: {
      name: 'Jordan Martinez',
      role: 'Team Member',
      avatar: imgAvatarJordanMartinez
    },
    studentRole: {
      abbr: 'TL',
      title: 'Team Lead',
      role: 'Summer Leadership Program'
    },
    situation: 'You\'re participating in a competitive summer leadership program where your team of five has been assigned a consulting project for a real nonprofit organization. You were selected as team lead. Jordan Martinez is one of your strongest team members—their analysis work is excellent and they bring creative ideas to discussions.',
    dilemma: 'Jordan has missed two deadlines in the past two weeks. Other team members are starting to notice and are quietly frustrated that they\'re picking up Jordan\'s work. The final presentation is in ten days, and you can\'t afford more missed deadlines. You asked Jordan to grab coffee, and they think it\'s just a casual check-in. You need to address the missed deadlines directly—but you also need to maintain the relationship, preserve Jordan\'s confidence, and keep them engaged for the critical final push.',
    studentMission: 'Give honest, direct feedback to a peer about performance issues in a way that addresses the problem without damaging your working relationship. Navigate the tension between accountability and empathy. Demonstrate that difficult conversations can be acts of respect and care, not just criticism.',
    successCriteria: [
      'Address the missed deadlines directly rather than hinting around the issue',
      'Show genuine concern for Jordan as a person while holding them accountable',
      'Listen to understand what\'s causing the problem before proposing solutions',
      'Maintain respect and empathy throughout the conversation',
      'Leave Jordan clear on expectations while feeling supported to meet them'
    ],
    heroImage: imgDifficultConversation
  },
  '14': {
    id: '14',
    title: 'The Accountability Question',
    subtitle: 'Owning Outcomes as a Leader',
    description: 'Understand command responsibility by taking appropriate ownership for team failures while accurately assessing contributing factors without deflection or blame.',
    location: 'Rickover Hall',
    time: '1400, Wednesday afternoon',
    aiCharacter: {
      name: 'Professor David Williams',
      role: 'Faculty Advisor',
      avatar: imgAvatarDavidWilliams
    },
    studentRole: {
      abbr: 'PL',
      title: 'Capstone Project Lead',
      role: 'Senior (1st Class)'
    },
    situation: 'It\'s your senior year at the Academy, and you\'re leading a capstone engineering project—a team of six building a prototype for a real Navy sponsor. You were selected as project lead based on your technical skills and leadership record. Yesterday, your team\'s critical design review went poorly. The sponsor pointed out significant gaps in the analysis that undermined confidence in your approach.',
    dilemma: 'Some of the gaps were in sections you personally oversaw and should have caught. Other gaps were in work done by a teammate who struggled throughout the semester but never asked for help—and you didn\'t notice they were falling behind. Professor Williams, your faculty advisor, has asked to meet with you to understand what happened and, more importantly, how you\'re thinking about it as a leader. You need to account for the failure without making excuses or unfairly blaming your teammate.',
    studentMission: 'Take appropriate ownership for a team failure as a leader. Analyze what happened honestly, including your own contributions and oversights. Demonstrate you understand the difference between taking responsibility and taking all the blame. Show mature thinking about command responsibility—that leaders are accountable for outcomes even when they didn\'t personally create every problem.',
    successCriteria: [
      'Take clear ownership for the outcome without deflecting or making excuses',
      'Provide an honest assessment of what went wrong at both individual and team levels',
      'Identify specific actions you could have taken differently as a leader',
      'Balance acknowledging your teammate\'s role without scapegoating them',
      'Demonstrate self-awareness about your development areas as a leader'
    ],
    heroImage: imgAccountability
  }
};

const getScenarioDetail = (id: string): ScenarioDetail => {
  return scenarioDetails[id] || scenarioDetails['1'];
};

export default function ScenarioDetailsPage({ scenarioId, onBack, onAssignScenario, onTestScenario, isMidshipman, onLogoClick, onTabChange }: ScenarioDetailsPageProps) {
  const scenario = getScenarioDetail(scenarioId);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isQRModalOpen, setQRModalOpen] = useState(false);

  return (
    <div className="bg-[#efeef7] relative flex-1 overflow-hidden">
      {/* Midshipman Header */}
      {isMidshipman && (
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 right-0 z-10">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#05205d] inset-0" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 hover:opacity-80 transition-opacity cursor-pointer" onClick={onLogoClick}>
            <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]" data-name="image 17">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
            </div>
            <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1" data-name="Mask group">
              <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px_1.228px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <button 
              onClick={() => onTabChange?.("dashboard")}
              className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Dashboard</p>
              </div>
            </button>
            <button 
              onClick={() => onTabChange?.("scenarios")}
              className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Scenarios</p>
              </div>
            </button>
            <button 
              onClick={() => onTabChange?.("skills")}
              className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
              </div>
            </button>
            <button 
              onClick={() => onTabChange?.("physical")}
              className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Physical Development</p>
              </div>
            </button>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[48px]">
              <div className="absolute left-0 size-[48px] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" fill="#1D5282" r="24" />
                </svg>
              </div>
              <p className="absolute font-medium leading-[20px] left-[calc(50%-0.5px)] text-[16px] text-center text-nowrap text-white top-[calc(50%-10px)] translate-x-[-50%]">CM</p>
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar */}
      <div className={`absolute bg-[#e8e6f3] ${isMidshipman ? 'top-[78px]' : 'top-0'} bottom-0 left-0 w-[32.41%] overflow-auto`}>
        <div className="flex flex-col gap-[32px] p-[40px]">
          {/* Back Button and QR Button */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <button
              onClick={onBack}
              className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
            >
              <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="trim">
                    <path clipRule="evenodd" d={svgPathsNew.p3dc50bc0} fill="#0D004D" fillRule="evenodd" id="icon" />
                  </g>
                </svg>
              </div>
              <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Back</p>
            </button>
            <button
              onClick={() => setQRModalOpen(true)}
              className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 hover:bg-[rgba(13,0,77,0.05)] rounded-[8px] transition-colors"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="QrCode">
                    <path d={svgPathsNew.p34fb2b00} fill="#171717" id="Vector" />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          {/* Scenario Title */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-medium leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px] w-full">{scenario.title}</p>
            <p className="font-normal leading-[28px] relative shrink-0 text-[#464646] text-[18px] w-full">{scenario.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            {isMidshipman ? (
              <button
                onClick={onTestScenario}
                className="w-full bg-[#ffce00] relative rounded-[1000px] shrink-0 hover:bg-[#fcc32b] transition-colors"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                    <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Start Mission</p>
                  </div>
                </div>
              </button>
            ) : (
              <>
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
                <button
                  onClick={onTestScenario}
                  className="flex-1 relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                      <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Test Scenario</p>
                    </div>
                  </div>
                </button>
              </>
            )}
          </div>

          {/* Location and Time */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="MapPin">
                      <path d={svgPaths.p3336b800} fill="#5D5D5D" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px]">Location</p>
              </div>
              <p className="flex-1 font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] text-right">{scenario.location}</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start px-0 py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Clock">
                      <path d={svgPaths.p20121700} fill="#5D5D5D" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-normal leading-[28px] relative shrink-0 text-[#5d5d5d] text-[18px]">Time</p>
              </div>
              <p className="flex-1 font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] text-right">{scenario.time}</p>
            </div>
          </div>

          {/* AI Character and Student Role */}
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            {/* AI Character */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">AI character</p>
              <div className="bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
                    <div className="relative rounded-[80px] shrink-0 size-[67px] overflow-hidden">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={scenario.aiCharacter.avatar} />
                    </div>
                    <div className="flex-1 content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenario.aiCharacter.name}</p>
                        <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{scenario.aiCharacter.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Midshipman Role */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">Midshipman role</p>
              <div className="bg-[#f6f6fb] relative rounded-[12px] shrink-0 w-full border border-[rgba(13,0,77,0.15)]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
                    <div className="relative shrink-0 size-[67px]">
                      <div className="absolute bg-[rgba(29,82,130,0.08)] left-0 rounded-[80px] size-[67px] top-0" />
                      <p className="absolute font-medium leading-[22px] left-1/2 text-[#171717] text-[18px] text-center text-nowrap top-[calc(50%-10.5px)] translate-x-[-50%]">{scenario.studentRole.abbr}</p>
                    </div>
                    <div className="flex-1 content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-medium leading-[22px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenario.studentRole.title}</p>
                        <p className="font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px] w-full">{scenario.studentRole.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`absolute ${isMidshipman ? 'top-[78px]' : 'top-0'} bottom-0 left-[32.41%] right-0 p-[40px] overflow-auto`}>
        <div className="flex flex-col gap-[24px] relative">
          {/* Hero Image */}
          <div className="aspect-[856/307] relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-white inset-0 rounded-[8px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                <img alt="" className="absolute h-[152.09%] left-0 max-w-none top-[-18.78%] w-full object-cover" src={scenario.heroImage} />
              </div>
              <div className="absolute inset-0 rounded-[8px]" style={{ background: 'linear-gradient(180deg, rgba(21, 34, 56, 0) 0%, rgba(21, 34, 56, 0.93) 93.536%)' }} />
            </div>
            <div className="flex flex-col justify-end size-full">
              <div className="size-full" />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>

          {/* Instructor Guide Banner (only for instructors) */}
          {!isMidshipman && (
            <div className="relative z-10 -mt-[64px] mb-[4px]">
              <div className="bg-[#f6f6fb] content-stretch flex items-center justify-between pl-[32px] pr-[12px] py-[16px] rounded-[12px] border border-[rgba(13,0,77,0.15)]">
                <p className="flex-1 font-medium leading-[20px] text-[#171717] text-[16px]">Want to know how to prepare Midshipmen for this scenario?</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[rgba(13,0,77,0.05)] transition-colors"
                >
                  <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">View Instructor Guide</p>
                </button>
              </div>
            </div>
          )}

          {/* Content Cards */}
          <div className="flex gap-[24px] w-full">
            {/* Left Card - Situation, Dilemma, Mission */}
            <div className="flex-[1.3] bg-[#e8e6f3] rounded-[12px] p-[32px]">
              <div className="flex flex-col gap-[24px]">
                {/* Situation */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <p className="font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Situation</p>
                    <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenario.situation}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full" />

                {/* Dilemma */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <p className="font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Dilemma</p>
                    <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenario.dilemma}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(13,0,77,0.15)] relative shrink-0 w-full" />

                {/* Midshipman Mission */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="flex-1 content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <p className="font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] text-nowrap">Midshipman Mission</p>
                    <p className="font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-full">{scenario.studentMission}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Success Criteria */}
            <div className="flex-1 bg-[#e8e6f3] rounded-[12px] p-[32px] h-fit">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="flex-1 content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                  <p className="font-medium leading-[20px] relative shrink-0 text-[#0074dd] text-[16px] w-full">Success Criteria</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {scenario.successCriteria.map((criteria, index) => (
                      <div key={index} className={`content-stretch flex items-center justify-center px-0 py-[16px] relative shrink-0 w-full ${
                        index !== scenario.successCriteria.length - 1 ? 'border-b border-[rgba(13,0,77,0.15)]' : ''
                      }`}>
                        <p className="flex-1 font-normal leading-[28px] relative shrink-0 text-[#171717] text-[18px]">{criteria}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Guide Modal */}
      <InstructorGuideModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        scenario={scenario}
      />

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setQRModalOpen(false)}
        scenarioId={scenarioId}
      />
    </div>
  );
}