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
  },

  // Japanese Language Scenarios (FJ-101 to FJ-202)
  {
    id: "fj101-l01-001",
    title: "First Meeting",
    subtitle: "Self-Introduction & Basic Keigo",
    course: "FJ-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice basic self-introduction (自己紹介) using appropriate honorific language when meeting a Japanese colleague for the first time.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ101: Japanese I",
    situation: "You have arrived at the JMSDF headquarters in Yokosuka for a two-week exchange program. Lieutenant Commander Tanaka (田中二等海佐) will greet you and expect a proper self-introduction. This is your first formal interaction with a Japanese naval officer.",
    dilemma: "You must navigate the balance between showing appropriate respect through keigo (敬語) while not being so formal that you appear robotic or insincere. LCDR Tanaka will judge whether you've prepared appropriately for this cultural exchange.",
    briefing: "This scenario tests whether you can execute a proper Japanese self-introduction including appropriate bowing, exchanging business cards (名刺交換), and using basic keigo structures. Success requires demonstrating awareness that first impressions in Japan carry lasting weight.",
    frameworks: ["Self-Introduction", "Keigo", "Business Card Exchange", "Formal Greetings", "Bowing Etiquette"],
    primaryMission: "Complete a proper Japanese self-introduction that demonstrates cultural awareness and appropriate use of honorific language. Establish a positive first impression that will support your exchange program.",
    successCriteria: [
      "Use correct jikoshoukai (self-introduction) structure",
      "Demonstrate appropriate bowing and physical etiquette",
      "Execute meishi koukan (business card exchange) correctly",
      "Show respect without appearing stiff or rehearsed",
      "Respond appropriately to follow-up questions using basic keigo"
    ],
    tags: ["FJ-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Self-Introduction", "Keigo", "JMSDF", "Yokosuka"],
    language: "Japanese",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "初めまして (hajimemashite) - Nice to meet you (first time)",
      "よろしくお願いします (yoroshiku onegai shimasu) - Please treat me well",
      "○○と申します (... to moushimasu) - I am called... (humble)",
      "失礼します (shitsurei shimasu) - Excuse me (polite)",
      "お会いできて光栄です (oai dekite kouei desu) - It's an honor to meet you"
    ],
    culturalTips: [
      "Bow at approximately 30-45 degrees for a formal first meeting",
      "Present business card with both hands, text facing the recipient",
      "Receive their card with both hands, study it briefly, then place it respectfully on the table",
      "Wait to sit until invited",
      "Make eye contact briefly, then look slightly down as a sign of respect"
    ],
    culturalGotchas: [
      "Never put a received business card in your back pocket",
      "Don't use first names unless explicitly invited",
      "Avoid \"no\" - use indirect expressions like \"chotto...\" (a little...)",
      "Don't bow while speaking - bow, then speak",
      "Don't point with your finger - use your whole hand"
    ]
  },
  {
    id: "fj101-l01-002",
    title: "At the Base Cafeteria",
    subtitle: "Ordering Food & Polite Requests",
    course: "FJ-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice ordering food and making polite requests in Japanese using appropriate expressions for service interactions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ101: Japanese I",
    situation: "You are at the base cafeteria during lunch hour. The cafeteria worker speaks limited English. You need to order a meal and navigate dietary preferences. The menu has pictures but is primarily in Japanese. Other JMSDF personnel are watching to see how well the American midshipman manages.",
    dilemma: "You need to order food but aren't sure of all the ingredients in the dishes. You also want to ask for a modification (less spicy / no pork) but don't want to be demanding or inconvenient in a culture that values harmony.",
    briefing: "This scenario tests practical Japanese for daily survival situations. You must use polite request forms, express preferences without being demanding, and navigate unexpected situations when your vocabulary is limited.",
    frameworks: ["Transactional Japanese", "Polite Requests", "Food Vocabulary", "Cultural Etiquette"],
    primaryMission: "Successfully order a meal using appropriate Japanese while demonstrating awareness of dining etiquette. Handle any complications with grace and appropriate language.",
    successCriteria: [
      "Successfully communicate meal order",
      "Use polite request forms correctly",
      "Ask clarifying questions about menu items",
      "Handle unexpected situations (out of stock, substitutions) appropriately",
      "Display proper dining etiquette phrases"
    ],
    tags: ["FJ-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Ordering Food", "Polite Requests", "Daily Situations"],
    language: "Japanese",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "これをください (kore wo kudasai) - Please give me this",
      "○○がありますか (... ga arimasu ka) - Do you have...?",
      "辛いですか (karai desu ka) - Is it spicy?",
      "少し (sukoshi) - A little",
      "すみません (sumimasen) - Excuse me / I'm sorry",
      "ありがとうございます (arigatou gozaimasu) - Thank you (polite)",
      "お願いします (onegai shimasu) - Please"
    ],
    culturalTips: [
      "Say \"itadakimasu\" (いただきます) before eating",
      "Say \"gochisousama deshita\" (ごちそうさまでした) after eating",
      "Don't leave food on your plate - it's considered wasteful",
      "Use \"sumimasen\" to get staff attention, not \"hey\" or waving",
      "Tipping is not customary and may cause confusion"
    ],
    culturalGotchas: [
      "Don't stick chopsticks upright in rice (funeral association)",
      "Don't pass food directly from chopstick to chopstick",
      "Don't pour your own drink when with others - pour for them first",
      "Don't complain about the food, even politely",
      "Don't rush the service staff"
    ]
  },
  {
    id: "fj102-l02-001",
    title: "The Dinner Invitation",
    subtitle: "Accepting/Declining with Appropriate Register",
    course: "FJ-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Practice accepting or politely declining invitations while navigating the cultural expectations around gift-giving and social obligations (義理, giri).",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ102: Japanese II",
    situation: "Commander Suzuki (鈴木一等海佐), who has been your supervisor during the exchange, invites you to a farewell dinner. You must accept graciously and navigate the conversation, including appropriate thanks and the expectation that you may need to bring an appropriate gift.",
    dilemma: "You want to express genuine gratitude, but you're unsure about Japanese gift-giving protocols. You also have a schedule conflict with another engagement. How do you accept while addressing the conflict, and what gift protocols should you follow?",
    briefing: "This scenario tests your ability to navigate Japanese social obligations while expressing genuine gratitude. You must balance directness with appropriate indirectness, and demonstrate understanding of gift culture.",
    frameworks: ["Social Invitations", "Gift-Giving Protocol", "Giri (Obligation)", "Gratitude Expressions"],
    primaryMission: "Successfully accept the dinner invitation with appropriate expressions, navigate gift-giving protocols, and express genuine gratitude while maintaining professional relationship.",
    successCriteria: [
      "Accept invitation with appropriate level of enthusiasm and humility",
      "Navigate scheduling concerns politely if they arise",
      "Demonstrate awareness of gift-giving protocols",
      "Express gratitude appropriately at multiple points",
      "Maintain appropriate register throughout the conversation"
    ],
    tags: ["FJ-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Social Invitations", "Gift-Giving", "Giri"],
    language: "Japanese",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "ぜひ、よろこんで (zehi, yorokonde) - Yes, I'd be delighted",
      "お誘いいただきありがとうございます (osasoi itadaki arigatou gozaimasu) - Thank you for the invitation",
      "つまらないものですが (tsumaranai mono desu ga) - This is a trivial thing, but... (when giving gift)",
      "おかげさまで (okage sama de) - Thanks to you",
      "お世話になりました (osewa ni narimashita) - Thank you for taking care of me"
    ],
    culturalTips: [
      "Accept with enthusiasm but also appropriate humility",
      "Gifts should be wrapped nicely; presentation matters",
      "Bring a gift representative of your home region/country",
      "Thank multiple times - before receiving, when receiving, and afterward",
      "Write a thank-you note (お礼状) within a few days"
    ],
    culturalGotchas: [
      "Don't decline a senior's invitation unless absolutely necessary",
      "Never give gifts in sets of 4 (sounds like \"death\" - 死)",
      "Don't open gifts immediately when received (unless prompted)",
      "Don't decline food/drink offerings repeatedly",
      "Don't one-up your host's generosity"
    ]
  },
  {
    id: "fj102-l02-002",
    title: "Schedule Conflict",
    subtitle: "Rescheduling with Appropriate Register",
    course: "FJ-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Practice navigating schedule changes and expressing conflicts while maintaining harmony and not causing loss of face.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ102: Japanese II",
    situation: "You have a scheduled training session with Petty Officer Yamamoto (山本一等海曹), but you've just learned of a mandatory briefing at the same time. You must reschedule without causing offense or implying his time is less valuable.",
    dilemma: "Rescheduling is necessary, but you don't want PO Yamamoto to feel his session is unimportant. Japanese culture values keeping commitments, and you must frame the situation carefully to maintain harmony (和) and not cause loss of face.",
    briefing: "This scenario tests your ability to navigate schedule conflicts using indirect language and face-saving techniques. Success requires demonstrating understanding that how you deliver a message is as important as the message itself.",
    frameworks: ["Indirect Communication", "Face-Saving", "Apology Culture", "Schedule Management"],
    primaryMission: "Successfully reschedule the training session while preserving relationship with Petty Officer Yamamoto and maintaining harmony.",
    successCriteria: [
      "Lead with appropriate apology expression",
      "Explain situation without making excuses",
      "Propose alternative times proactively",
      "Maintain respectful tone throughout",
      "Express appreciation for their understanding"
    ],
    tags: ["FJ-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Rescheduling", "Indirect Communication", "Face-Saving"],
    language: "Japanese",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "申し訳ございません (moushiwake gozaimasen) - I'm very sorry (formal apology)",
      "ご都合はいかがでしょうか (gotsugou wa ikaga deshou ka) - How is your availability?",
      "急な変更で恐縮ですが (kyuu na henkou de kyoushuku desu ga) - I'm sorry for the sudden change",
      "別の日程を (betsu no nittei wo) - Another schedule/date",
      "お時間をいただけますか (ojikan wo itadakemasu ka) - Could I have your time?"
    ],
    culturalTips: [
      "Lead with the apology, not the request",
      "Explain the reason (mandatory briefing) to show it's not personal choice",
      "Offer alternative times to show commitment",
      "Express that you were looking forward to the session",
      "Follow up with thanks for understanding"
    ],
    culturalGotchas: [
      "Don't be too direct about the conflict (\"I can't make it\")",
      "Don't imply their event is less important",
      "Don't reschedule via text/email if face-to-face is possible",
      "Don't make excuses that sound like lies",
      "Don't forget to follow through on the rescheduled commitment"
    ]
  },
  {
    id: "fj201-l03-001",
    title: "The Disagreement",
    subtitle: "Polite Disagreement While Preserving Wa",
    course: "FJ-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice expressing disagreement in Japanese while maintaining harmony (和, wa) and preserving face for all parties.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ201: Japanese III",
    situation: "You're participating in planning for a US-Japan joint exercise. Lieutenant Commander Kato (加藤二等海佐) has proposed a timeline you believe is unrealistic based on US capabilities. You must express disagreement without causing embarrassment or disrupting the harmony of the planning group.",
    dilemma: "LCDR Kato is senior to you and has already presented his plan to the group. Disagreeing directly would cause him to lose face. However, the unrealistic timeline could jeopardize the exercise. You must find a way to surface your concerns that allows him to adjust without appearing wrong.",
    briefing: "This scenario tests advanced interpersonal communication skills in Japanese. You must express substantive disagreement while using face-saving techniques, indirect language, and collaborative framing. Silence or hesitation can be used strategically.",
    frameworks: ["Indirect Communication", "Face-Saving", "Wa (Harmony)", "Professional Disagreement", "Hedging Language"],
    primaryMission: "Successfully communicate your concerns about the timeline while maintaining harmony and allowing LCDR Kato to save face. The goal is collaborative problem-solving, not winning the argument.",
    successCriteria: [
      "Use appropriate indirect language to raise concerns",
      "Acknowledge valid aspects of the proposal first",
      "Frame concerns as questions or alternative perspectives",
      "Allow opportunity for face-saving response",
      "Contribute to collaborative solution without forcing your view"
    ],
    tags: ["FJ-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Disagreement", "Wa", "Face-Saving", "Military Coordination"],
    language: "Japanese",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "失礼ですが (shitsurei desu ga) - Excuse me, but...",
      "おっしゃる通りですが (ossharu toori desu ga) - You're right, however...",
      "ちょっと難しいかもしれません (chotto muzukashii kamo shiremasen) - It might be a bit difficult",
      "別の視点から (betsu no shiten kara) - From another perspective",
      "ご検討いただければ (gokentou itadakereba) - If you would consider..."
    ],
    culturalTips: [
      "Use hedging language (\"might,\" \"perhaps,\" \"a little\")",
      "Frame as a question rather than a statement",
      "Pause strategically to signal you're thinking carefully",
      "Acknowledge their point's validity before offering yours",
      "Offer to provide supporting information privately"
    ],
    culturalGotchas: [
      "Never say \"No, that's wrong\" directly",
      "Don't interrupt or speak over them",
      "Don't attribute the disagreement to their error",
      "Don't use strong negative language",
      "Don't push if they signal they need time to consider"
    ]
  },
  {
    id: "fj201-l03-002",
    title: "JMSDF Liaison Meeting",
    subtitle: "Military Coordination with Hierarchy Awareness",
    course: "FJ-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice conducting a military liaison meeting in Japanese, navigating rank hierarchies and formal briefing protocols.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ201: Japanese III",
    situation: "You are briefing JMSDF officers on US Navy participation in an upcoming joint exercise. The audience includes officers senior and junior to you. You must deliver information clearly while maintaining appropriate register shifts for different ranks.",
    dilemma: "Your brief includes some challenges with the original plan that were caused by Japanese planning assumptions. You must communicate this professionally without implying criticism, while also establishing credibility with both senior and junior officers.",
    briefing: "This scenario tests formal military Japanese including briefing language, rank-appropriate address, and diplomatic framing of challenging topics. Success requires code-switching between formality levels.",
    frameworks: ["Military Briefing", "Rank-Based Register", "Formal Reporting", "Diplomatic Framing"],
    primaryMission: "Deliver an effective liaison brief that communicates key information, addresses challenges diplomatically, and maintains appropriate respect for rank hierarchies.",
    successCriteria: [
      "Use appropriate formal briefing structures",
      "Navigate rank-based register shifts correctly",
      "Frame challenges diplomatically",
      "Respond appropriately to questions from various ranks",
      "Demonstrate professional military bearing in Japanese"
    ],
    tags: ["FJ-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Military Briefing", "Liaison", "Hierarchy"],
    language: "Japanese",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "ご報告申し上げます (gohoukoku moushiagemasu) - I respectfully report",
      "現状について (genjou ni tsuite) - Regarding the current situation",
      "課題がございます (kadai ga gozaimasu) - There are challenges (humble)",
      "ご検討をお願いいたします (gokentou wo onegai itashimasu) - We request your consideration",
      "連携を強化 (renkei wo kyouka) - Strengthen coordination"
    ],
    culturalTips: [
      "Address highest-ranking officer first",
      "Use most formal language for senior officers",
      "Stand when addressing seniors if they're standing",
      "Provide written materials in addition to verbal brief",
      "End with a clear summary and action items"
    ],
    culturalGotchas: [
      "Don't use casual language even if they do",
      "Don't skip hierarchical greetings",
      "Don't present problems without proposed solutions",
      "Don't take questions out of rank order",
      "Don't rush the Q&A period"
    ]
  },
  {
    id: "fj202-l04-001",
    title: "Crisis Communication",
    subtitle: "Delivering Bad News Appropriately",
    course: "FJ-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice delivering difficult news in Japanese during a crisis situation while maintaining composure and appropriate communication protocols.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ202: Japanese IV",
    situation: "During a joint exercise, a US ship has had a navigation system failure and is unable to continue the planned maneuver. You must inform Captain Mori (森一等海佐) immediately. This affects the entire exercise timeline and puts Japanese assets in an awkward position.",
    dilemma: "You must deliver bad news quickly and clearly in a high-stress situation, but Japanese communication norms favor indirect delivery of negative information. The urgency demands directness, but cultural sensitivity remains important. Captain Mori will be frustrated but you must maintain professional relationship.",
    briefing: "This scenario tests your ability to adapt Japanese communication style to crisis situations. You must balance urgency with face-saving, deliver clear information without being offensive, and maintain composure under pressure.",
    frameworks: ["Crisis Communication", "Bad News Delivery", "Emergency Protocols", "Face Management Under Pressure"],
    primaryMission: "Deliver the bad news clearly and promptly while maintaining appropriate cultural sensitivity and professional relationship with Japanese counterparts.",
    successCriteria: [
      "Communicate critical information clearly and promptly",
      "Use appropriate emergency language while maintaining respect",
      "Accept appropriate responsibility",
      "Propose solutions or next steps",
      "Maintain composure and professional demeanor"
    ],
    tags: ["FJ-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Crisis Communication", "Bad News", "Emergency"],
    language: "Japanese",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "緊急報告です (kinkyuu houkoku desu) - This is an emergency report",
      "問題が発生しました (mondai ga hassei shimashita) - A problem has occurred",
      "申し訳ございませんが (moushiwake gozaimasen ga) - I'm very sorry, but...",
      "状況を説明いたします (joukyou wo setsumei itashimasu) - I will explain the situation",
      "対応策として (taiousaku to shite) - As a countermeasure"
    ],
    culturalTips: [
      "Lead with the critical information in crisis situations",
      "Accept responsibility on behalf of your side",
      "Have proposed solutions ready",
      "Maintain calm demeanor despite urgency",
      "Follow up with written summary"
    ],
    culturalGotchas: [
      "Don't appear panicked - it undermines confidence",
      "Don't blame specific individuals",
      "Don't minimize the severity",
      "Don't make promises you can't keep",
      "Don't forget to apologize for the inconvenience"
    ]
  },
  {
    id: "fj202-l04-002",
    title: "Cross-Cultural Conflict Resolution",
    subtitle: "Mediating US-Japan Disagreement",
    course: "FJ-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice mediating a disagreement between US and Japanese personnel, applying cultural knowledge to bridge communication gaps.",
    image: "placeholder",
    area: "Language",
    courseCode: "FJ202: Japanese IV",
    situation: "A joint exercise has concluded with significant friction between US and Japanese units. Japanese officers feel US personnel were dismissive of their concerns; US officers feel Japanese counterparts were too rigid. As the liaison officer with the strongest Japanese language skills, you've been asked to help resolve the impasse.",
    dilemma: "Both sides have legitimate grievances rooted in cultural differences. You must help each side understand the other's perspective while navigating your own position as an American officer. Success requires using Japanese cultural concepts to bridge the gap.",
    briefing: "This scenario tests advanced cross-cultural mediation in Japanese. You must demonstrate understanding of both cultures' communication styles, translate concerns in culturally appropriate ways, and guide the conversation toward resolution.",
    frameworks: ["Cross-Cultural Mediation", "Conflict Resolution", "Face-Saving Techniques", "Alliance Management"],
    primaryMission: "Facilitate productive dialogue that helps both sides understand each other's perspectives and moves toward resolution while preserving the working relationship.",
    successCriteria: [
      "Create space for both sides to express concerns",
      "Translate cultural concepts appropriately",
      "Identify common ground and shared interests",
      "Propose or elicit face-saving solutions",
      "Maintain neutrality while guiding toward resolution"
    ],
    tags: ["FJ-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Conflict Resolution", "Mediation", "Cross-Cultural"],
    language: "Japanese",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "双方のご意見 (souhou no goiken) - Both sides' opinions",
      "理解を深める (rikai wo fukameru) - Deepen understanding",
      "誤解があったかもしれません (gokai ga atta kamo shiremasen) - There may have been a misunderstanding",
      "共通の目標 (kyoutsuu no mokuhyou) - Common goals",
      "前向きに (maemuki ni) - Positively, constructively"
    ],
    culturalTips: [
      "Acknowledge both sides' concerns as valid",
      "Use \"we\" language to emphasize partnership",
      "Reference shared mission and history",
      "Allow silence for reflection",
      "Propose face-saving compromise"
    ],
    culturalGotchas: [
      "Don't take sides openly",
      "Don't force immediate resolution",
      "Don't dismiss \"soft\" concerns as irrelevant",
      "Don't let frustration show",
      "Don't forget to follow up after the meeting"
    ]
  },

  // ============================================
  // CHINESE LANGUAGE SCENARIOS (FC)
  // 8 scenarios across 4 semesters
  // ============================================

  // FC-101 (Semester 1, GSE 22-29, A1, Novice Mid)
  {
    id: "fc101-l01-001",
    title: "First Meeting at the Embassy",
    subtitle: "Self-Introduction & Formal Greetings",
    course: "FC-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice basic self-introduction (自我介绍) and formal greetings when meeting Chinese officials at a diplomatic reception.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC101: Chinese I",
    situation: "You are attending a diplomatic reception at the Chinese Embassy as part of a USNA international affairs program. Colonel Li (李上校) from the Chinese Naval Attaché office will introduce himself and expect a proper response.",
    dilemma: "You must balance showing respect through formal language while not being overly familiar. Colonel Li will assess whether American military students understand Chinese customs. The interaction sets the tone for the entire visit.",
    briefing: "This scenario tests whether you can execute a proper Chinese self-introduction including appropriate address forms, exchange of pleasantries, and basic small talk about studies and interests.",
    frameworks: ["Self-Introduction", "Formal Greetings", "Diplomatic Etiquette", "Address Forms"],
    primaryMission: "Complete a proper Chinese self-introduction that demonstrates cultural awareness and appropriate respect for Chinese customs in a diplomatic setting.",
    successCriteria: [
      "Use correct self-introduction structure and formal pronouns",
      "Respond appropriately to questions about background",
      "Display proper physical etiquette (handshake, card exchange)",
      "Navigate small talk with appropriate formality",
      "Show interest in Chinese culture without being obsequious"
    ],
    tags: ["FC-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Self-Introduction", "Diplomatic Reception"],
    language: "Chinese",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "您好 (nín hǎo) - Hello (formal)",
      "我叫... (wǒ jiào...) - I am called...",
      "很高兴认识您 (hěn gāoxìng rènshi nín) - Pleased to meet you",
      "幸会幸会 (xìnghuì xìnghuì) - Honored to meet you (formal)",
      "请多关照 (qǐng duō guānzhào) - Please take care of me / I'm in your hands"
    ],
    culturalTips: [
      "Use 您 (nín) instead of 你 (nǐ) with officials and elders",
      "Offer and receive business cards with both hands",
      "A slight bow or nod shows respect",
      "Avoid overly firm handshakes",
      "Accept tea if offered even if you don't want it"
    ],
    culturalGotchas: [
      "Don't call someone by their first name unless invited",
      "Don't refuse hospitality (tea, snacks) directly",
      "Don't point with your index finger",
      "Don't discuss sensitive political topics",
      "Don't compliment objects too enthusiastically (host may feel obligated to give them)"
    ]
  },
  {
    id: "fc101-l01-002",
    title: "Navigating Beijing",
    subtitle: "Asking for Directions & Basic Transactions",
    course: "FC-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice asking for directions and completing basic transactions while navigating a Chinese city.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC101: Chinese I",
    situation: "You have free time during your Language Summer Study Abroad Program in Beijing. You need to find a specific bookstore to buy study materials, then navigate to a restaurant to meet your group. A helpful local shop owner will assist you.",
    dilemma: "Your language skills are limited, and signage is in Chinese characters. You must communicate effectively despite vocabulary gaps and understand directions that may include unfamiliar landmarks.",
    briefing: "This scenario tests practical survival Chinese for navigation and basic purchasing. Success requires using polite request forms and understanding common directional vocabulary.",
    frameworks: ["Navigation", "Transactions", "Polite Requests", "Survival Chinese"],
    primaryMission: "Successfully navigate to your destination by asking for and understanding directions, then complete a simple purchase using appropriate Chinese.",
    successCriteria: [
      "Ask for directions using correct question structures",
      "Understand and respond to directional information",
      "Complete a transaction with appropriate politeness",
      "Handle communication breakdowns gracefully",
      "Express gratitude appropriately"
    ],
    tags: ["FC-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Directions", "Transactions", "LSAP"],
    language: "Chinese",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "请问 (qǐng wèn) - May I ask...",
      "...在哪儿? (...zài nǎr?) - Where is...?",
      "往左/右走 (wǎng zuǒ/yòu zǒu) - Go left/right",
      "一直走 (yīzhí zǒu) - Go straight",
      "多少钱? (duōshao qián?) - How much?",
      "谢谢 (xièxie) - Thank you",
      "不客气 (bú kèqi) - You're welcome"
    ],
    culturalTips: [
      "Start with \"请问\" to politely get attention",
      "Expect people to physically point and gesture",
      "Bargaining is expected at markets, not fixed-price stores",
      "Saying \"太贵了\" (too expensive) is normal, not rude",
      "Thank people warmly for help"
    ],
    culturalGotchas: [
      "Don't assume English will work",
      "Don't get frustrated if initial communication fails",
      "Don't skip polite openers",
      "Don't hand money with one hand (use both for large amounts)",
      "Don't refuse help when offered"
    ]
  },

  // FC-102 (Semester 2, GSE 30-35, A2, Novice High)
  {
    id: "fc102-l02-001",
    title: "The Banquet",
    subtitle: "Navigating Chinese Dining Culture",
    course: "FC-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate the complex social protocols of a Chinese banquet including toasting culture (敬酒), seating arrangements, and food etiquette.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC102: Chinese II",
    situation: "You are a guest at a formal banquet hosted by Shanghai Maritime University. Professor Wang (王教授) is your host and will guide the evening, but you must participate appropriately in toasts and conversation. Your behavior reflects on USNA.",
    dilemma: "Chinese banquet culture includes multiple toasts with baijiu (strong liquor), elaborate food serving rituals, and complex seating politics. You must participate appropriately while managing alcohol consumption and demonstrating cultural respect.",
    briefing: "This scenario tests your understanding of Chinese hospitality culture, toasting etiquette, and the ability to participate in extended social situations with appropriate language and behavior.",
    frameworks: ["Banquet Etiquette", "Toasting Culture", "Face and Hospitality", "Relationship Building"],
    primaryMission: "Successfully navigate the banquet while participating appropriately in toasts, demonstrating respect for the host, and building positive relationships with Chinese colleagues.",
    successCriteria: [
      "Participate appropriately in toasting culture",
      "Navigate food etiquette correctly",
      "Make appropriate small talk with various guests",
      "Handle alcohol expectations diplomatically",
      "Express gratitude to the host appropriately"
    ],
    tags: ["FC-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Banquet", "Toasting", "Hospitality"],
    language: "Chinese",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "干杯 (gān bēi) - Bottoms up / Cheers (requires finishing drink)",
      "随意 (suí yì) - At will / Drink what you like",
      "请先吃 (qǐng xiān chī) - Please eat first",
      "太客气了 (tài kèqi le) - You're too kind",
      "我不太能喝酒 (wǒ bú tài néng hē jiǔ) - I can't drink much"
    ],
    culturalTips: [
      "Wait for host to start eating before you begin",
      "Serve others before serving yourself",
      "Toast the host and honored guests",
      "It's polite to leave a little food on your plate",
      "Use 随意 to toast without requiring full drink"
    ],
    culturalGotchas: [
      "Don't refuse the first toast",
      "Don't tap chopsticks on bowls (begging association)",
      "Don't stick chopsticks upright in rice",
      "Don't fill your own glass (let others do it)",
      "Don't say \"干杯\" unless you plan to empty the glass"
    ]
  },
  {
    id: "fc102-l02-002",
    title: "The Misunderstanding",
    subtitle: "Clarifying Communication Errors",
    course: "FC-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Practice clarifying misunderstandings and offering appropriate apologies when communication errors occur.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC102: Chinese II",
    situation: "Due to a language misunderstanding, you arrived at the wrong time for a meeting with Professor Chen (陈教授). She waited for an hour and is understandably frustrated. You must apologize appropriately and clarify what happened without making excuses.",
    dilemma: "In Chinese culture, taking responsibility is valued over explaining reasons (which can sound like excuses). However, you also need to clarify the misunderstanding to prevent future issues. You must balance sincere apology with face-saving for both parties.",
    briefing: "This scenario tests your ability to navigate the complex Chinese apology culture, take appropriate responsibility, and recover from a social mishap while maintaining the relationship.",
    frameworks: ["Apology Culture", "Face Management", "Misunderstanding Resolution", "Relationship Repair"],
    primaryMission: "Successfully apologize for the misunderstanding, clarify what happened without making excuses, and repair the relationship with Professor Chen.",
    successCriteria: [
      "Open with sincere, appropriate apology",
      "Take responsibility without over-explaining",
      "Clarify the misunderstanding diplomatically",
      "Propose a solution or make-up action",
      "End with relationship intact"
    ],
    tags: ["FC-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Apology", "Misunderstanding", "Face"],
    language: "Chinese",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "对不起 (duìbuqǐ) - I'm sorry",
      "真不好意思 (zhēn bù hǎoyìsi) - I'm really embarrassed/sorry",
      "是我的错 (shì wǒ de cuò) - It was my mistake",
      "我误解了 (wǒ wùjiě le) - I misunderstood",
      "下次一定注意 (xià cì yīdìng zhùyì) - I'll definitely be careful next time"
    ],
    culturalTips: [
      "Apologize sincerely before explaining",
      "Take full responsibility even if not fully at fault",
      "Offer to make amends concretely",
      "Don't over-explain (sounds like excuses)",
      "Follow up with another apology later"
    ],
    culturalGotchas: [
      "Don't defend yourself immediately",
      "Don't blame the language barrier (though true)",
      "Don't minimize the inconvenience caused",
      "Don't expect immediate forgiveness",
      "Don't forget to thank them for their patience"
    ]
  },

  // FC-201 (Semester 3, GSE 36-50, B1, Intermediate Low-Mid)
  {
    id: "fc201-l03-001",
    title: "The Naval Port Visit",
    subtitle: "Military Exchange Protocols",
    course: "FC-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice military diplomatic language during a naval port visit, navigating protocol while building professional relationships.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC201: Chinese III",
    situation: "Your ship is conducting a port visit to Qingdao. You are assigned to attend an official reception with your CO. Commander Zhang (张少校) is your counterpart and will discuss the visit program. You must communicate professionally while avoiding politically sensitive topics.",
    dilemma: "The conversation naturally drifts toward topics that could be sensitive - South China Sea, Taiwan, military capabilities. You must redirect diplomatically while maintaining rapport and demonstrating professionalism.",
    briefing: "This scenario tests your ability to use military diplomatic language in Chinese, navigate sensitive topics gracefully, and build professional relationships within appropriate boundaries.",
    frameworks: ["Military Diplomacy", "Sensitive Topic Navigation", "Cross-Military Relationships", "Protocol"],
    primaryMission: "Successfully engage in professional military diplomatic conversation, building rapport while navigating sensitive topics appropriately.",
    successCriteria: [
      "Use appropriate military diplomatic language",
      "Redirect sensitive topics gracefully",
      "Build genuine professional rapport",
      "Demonstrate cultural respect",
      "Maintain appropriate boundaries"
    ],
    tags: ["FC-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Military Diplomacy", "Port Visit"],
    language: "Chinese",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "军事交流 (jūnshì jiāoliú) - Military exchange",
      "友好访问 (yǒuhǎo fǎngwèn) - Friendly visit",
      "增进了解 (zēngjìn liǎojiě) - Enhance understanding",
      "这个问题很复杂 (zhège wèntí hěn fùzá) - This issue is complex",
      "互相尊重 (hùxiāng zūnzhòng) - Mutual respect"
    ],
    culturalTips: [
      "Focus on shared professional interests",
      "Express appreciation for hospitality",
      "Ask about their naval traditions and history",
      "Redirect political questions to positive topics",
      "Note common challenges (maritime safety, disaster response)"
    ],
    culturalGotchas: [
      "Don't discuss Taiwan, South China Sea directly",
      "Don't compare navies in ways that imply superiority",
      "Don't photograph anything without permission",
      "Don't discuss intelligence or capabilities",
      "Don't make political statements even if prompted"
    ]
  },
  {
    id: "fc201-l03-002",
    title: "Regional Security Discussion",
    subtitle: "Academic Conference Participation",
    course: "FC-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice participating in an academic discussion about regional security using appropriate academic Chinese and diplomatic framing.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC201: Chinese III",
    situation: "You are participating in an academic panel on Indo-Pacific maritime security. Chinese scholars are present and one, Dr. Liu (刘博士), engages you directly about US naval presence in the region. You must articulate positions diplomatically in Chinese.",
    dilemma: "Dr. Liu is pressing you on US policy in ways that require careful diplomatic language. You must express viewpoints professionally without being argumentative or representing official policy beyond your standing.",
    briefing: "This scenario tests your ability to engage in substantive discussion on complex topics in Chinese while maintaining academic courtesy and diplomatic precision.",
    frameworks: ["Academic Chinese", "Diplomatic Framing", "Security Studies Vocabulary", "Cross-Cultural Dialogue"],
    primaryMission: "Engage productively in academic security discussion while maintaining diplomatic appropriateness and building positive intellectual rapport.",
    successCriteria: [
      "Articulate viewpoints in academic Chinese",
      "Navigate provocative questions diplomatically",
      "Demonstrate intellectual engagement",
      "Maintain appropriate role boundaries",
      "Build positive impression of USNA"
    ],
    tags: ["FC-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Academic Conference", "Security Discussion"],
    language: "Chinese",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "从学术角度来看 (cóng xuéshù jiǎodù lái kàn) - From an academic perspective",
      "和平与稳定 (hépíng yǔ wěndìng) - Peace and stability",
      "共同利益 (gòngtóng lìyì) - Common interests",
      "以我个人理解 (yǐ wǒ gèrén lǐjiě) - In my personal understanding",
      "这是个有趣的问题 (zhè shì ge yǒuqù de wèntí) - That's an interesting question"
    ],
    culturalTips: [
      "Frame as personal views, not official policy",
      "Acknowledge complexity of issues",
      "Find common ground where possible",
      "Use academic hedging language",
      "Show genuine interest in their perspective"
    ],
    culturalGotchas: [
      "Don't get drawn into debate mode",
      "Don't speak for US government",
      "Don't dismiss Chinese perspectives",
      "Don't become defensive",
      "Don't forget you're building relationships, not winning arguments"
    ]
  },

  // FC-202 (Semester 4, GSE 51-58, B1+, Intermediate High)
  {
    id: "fc202-l04-001",
    title: "Community Relations Crisis",
    subtitle: "Addressing Local Concerns",
    course: "FC-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice handling community relations challenges in Chinese, addressing local concerns while representing the US Navy appropriately.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC202: Chinese IV",
    situation: "An incident involving US military personnel has upset the local Chinese-speaking community (in a Pacific partner nation). You are the most fluent Chinese speaker on staff and must address community concerns at an emergency meeting. Speaking Chinese demonstrates respect and may help de-escalate tensions.",
    dilemma: "Community members are upset and speaking rapidly. Some concerns are legitimate, others are based on rumors. You must listen empathetically, address what you can, and promise follow-up without making unauthorized commitments.",
    briefing: "This scenario tests advanced interpersonal skills in Chinese under pressure, including active listening, empathetic response, and managing expectations while representing your command appropriately.",
    frameworks: ["Crisis Communication", "Community Relations", "Active Listening", "De-escalation"],
    primaryMission: "De-escalate community tensions through empathetic, professional communication in Chinese while representing the command appropriately.",
    successCriteria: [
      "Demonstrate genuine listening and empathy",
      "Address concerns with appropriate specificity",
      "Manage expectations without dismissing",
      "Make only promises you can keep",
      "Leave community feeling heard and respected"
    ],
    tags: ["FC-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Community Relations", "Crisis"],
    language: "Chinese",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "我们非常重视 (wǒmen fēicháng zhòngshì) - We take this very seriously",
      "我理解您的担忧 (wǒ lǐjiě nín de dānyōu) - I understand your concerns",
      "我们正在调查 (wǒmen zhèngzài diàochá) - We are investigating",
      "我个人承诺 (wǒ gèrén chéngnuò) - I personally promise",
      "保持沟通 (bǎochí gōutōng) - Maintain communication"
    ],
    culturalTips: [
      "Listen fully before responding",
      "Acknowledge emotions before facts",
      "Use Chinese to show respect",
      "Be specific about next steps",
      "Follow up on every promise"
    ],
    culturalGotchas: [
      "Don't become defensive",
      "Don't blame the community for misunderstanding",
      "Don't make promises beyond your authority",
      "Don't dismiss rumors without addressing the underlying concern",
      "Don't forget face considerations for community leaders"
    ]
  },
  {
    id: "fc202-l04-002",
    title: "Bilateral Negotiation",
    subtitle: "Complex Multi-Party Discussion",
    course: "FC-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice complex negotiation in Chinese, working toward mutually acceptable outcomes on practical matters.",
    image: "placeholder",
    area: "Language",
    courseCode: "FC202: Chinese IV",
    situation: "You are part of a working group developing procedures to prevent maritime incidents. Your Chinese counterpart, Lieutenant Commander Wei (韦少校), has different interpretations of key terms. You must negotiate language that both sides can accept without compromising core interests.",
    dilemma: "Both sides have legitimate interests and constraints. Direct confrontation won't work, but neither will simply accepting their language. You must find creative solutions that address both sides' needs.",
    briefing: "This scenario tests advanced negotiation skills in Chinese, including understanding underlying interests, proposing creative solutions, and building consensus through language choices.",
    frameworks: ["Negotiation", "Interest-Based Bargaining", "Face Management", "Bilateral Relations"],
    primaryMission: "Achieve mutually acceptable language that advances both sides' interests while building a professional relationship for ongoing cooperation.",
    successCriteria: [
      "Identify underlying interests on both sides",
      "Propose creative solutions that address both needs",
      "Use appropriate negotiation language in Chinese",
      "Maintain positive relationship throughout",
      "Achieve concrete progress on key issues"
    ],
    tags: ["FC-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Negotiation", "Bilateral"],
    language: "Chinese",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "共同语言 (gòngtóng yǔyán) - Common ground/language",
      "互利共赢 (hùlì gòng yíng) - Mutual benefit, win-win",
      "我们能否这样表述 (wǒmen néng fǒu zhèyàng biǎoshù) - Could we phrase it this way",
      "考虑到双方 (kǎolǜ dào shuāngfāng) - Considering both sides",
      "灵活处理 (línghuó chǔlǐ) - Handle flexibly"
    ],
    culturalTips: [
      "Focus on interests, not positions",
      "Use indirect language to test ideas",
      "Allow face-saving revisions",
      "Acknowledge their constraints",
      "Build personal rapport separately from official positions"
    ],
    culturalGotchas: [
      "Don't treat it as zero-sum",
      "Don't back them into corners",
      "Don't underestimate their flexibility in private",
      "Don't forget implementation matters as much as language",
      "Don't neglect relationship-building"
    ]
  },

  // ============================================
  // ARABIC LANGUAGE SCENARIOS (FA)
  // 8 scenarios across 4 semesters
  // ============================================

  // FA-101 (Semester 1, GSE 22-29, A1, Novice Mid)
  {
    id: "fa101-l01-001",
    title: "Meeting at the Port",
    subtitle: "Greetings & Basic Introductions",
    course: "FA-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice basic Arabic greetings and introductions when meeting a Gulf partner nation naval officer during a port visit.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA101: Arabic I",
    situation: "Your ship has arrived for a port visit. Captain Al-Rashid (الرشيد) from the UAE Navy will greet you. He speaks excellent English but appreciates when guests make an effort in Arabic. First impressions are crucial in Arab culture.",
    dilemma: "You want to show respect by using Arabic, but you're uncertain of correct formal greetings and worry about making mistakes. Captain Al-Rashid will assess your effort and attitude.",
    briefing: "This scenario tests basic Arabic greetings including appropriate religious phrases (السلام عليكم), honorific address, and the cultural importance of hospitality acceptance.",
    frameworks: ["Arabic Greetings", "Hospitality Culture", "Gulf Naval Partnership", "Formal Address"],
    primaryMission: "Execute appropriate Arabic greetings and introduction while accepting hospitality graciously and demonstrating respect for Arab culture.",
    successCriteria: [
      "Use correct greeting formula (السلام عليكم)",
      "Respond appropriately to return greeting",
      "Accept hospitality (coffee/dates) appropriately",
      "Show genuine interest in host and their country",
      "Avoid cultural mistakes"
    ],
    tags: ["FA-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Greetings", "UAE", "Port Visit"],
    language: "Arabic",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "السلام عليكم (as-salamu alaykum) - Peace be upon you",
      "وعليكم السلام (wa alaykum as-salam) - And upon you peace",
      "تشرفنا (tasharrafna) - Honored to meet you",
      "أهلاً وسهلاً (ahlan wa sahlan) - Welcome",
      "إن شاء الله (in sha'allah) - God willing"
    ],
    culturalTips: [
      "Right hand over heart shows sincerity",
      "Accept coffee/dates when offered (refuse politely after third offering)",
      "Men may hold hands while walking - a sign of friendship",
      "Don't rush greetings - take time for pleasantries",
      "Ask about their family/well-being before business"
    ],
    culturalGotchas: [
      "Don't use left hand for greetings or giving/receiving",
      "Don't refuse hospitality directly (say \"thank you, I've had enough\")",
      "Don't cross legs showing sole of foot toward host",
      "Don't discuss alcohol or pork",
      "Don't make negative comments about heat/region"
    ]
  },
  {
    id: "fa101-l01-002",
    title: "The Souk Visit",
    subtitle: "Basic Shopping & Negotiation",
    course: "FA-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice basic Arabic for shopping transactions including numbers, prices, and polite negotiation.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA101: Arabic I",
    situation: "You have free time to explore a traditional souk. A friendly shopkeeper, Abu Mohammed (أبو محمد), invites you to see his wares. Bargaining is expected and considered part of the social interaction.",
    dilemma: "You want to buy something authentic as a gift, but you're unsure about appropriate prices and bargaining etiquette. The merchant will test to see if you understand the cultural game of negotiation.",
    briefing: "This scenario tests survival Arabic for basic transactions including numbers, polite requests, and the cultural art of bargaining while maintaining friendly relations.",
    frameworks: ["Numbers", "Bargaining", "Polite Transactions", "Cultural Shopping Norms"],
    primaryMission: "Successfully navigate the souk, engage appropriately with the merchant, and complete a transaction using basic Arabic while demonstrating cultural awareness.",
    successCriteria: [
      "Use Arabic numbers correctly",
      "Engage in appropriate bargaining",
      "Maintain positive relationship with merchant",
      "Accept hospitality offered during shopping",
      "Complete transaction politely"
    ],
    tags: ["FA-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Shopping", "Bargaining", "Souk"],
    language: "Arabic",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "كم؟ (kam?) - How much?",
      "غالي جداً (ghali jiddan) - Very expensive",
      "آخر سعر (akhir si'r) - Final price?",
      "تفضل (tafaddal) - Please (take/come/proceed)",
      "شكراً (shukran) - Thank you",
      "معليش (ma'alesh) - No problem/It's okay"
    ],
    culturalTips: [
      "Bargaining is expected - start at 50% and negotiate up",
      "Take your time - rushing is rude",
      "Accept offered tea/coffee while browsing",
      "Don't touch items you have no intention of buying",
      "Compliment the shop/items sincerely"
    ],
    culturalGotchas: [
      "Don't bargain if price is already clearly marked as fixed",
      "Don't walk away as a tactic unless you mean it",
      "Don't show too much enthusiasm for specific items",
      "Don't criticize items (even to negotiate lower)",
      "Don't forget to take offered business cards"
    ]
  },

  // FA-102 (Semester 2, GSE 30-35, A2, Novice High)
  {
    id: "fa102-l02-001",
    title: "The Majlis",
    subtitle: "Traditional Hospitality & Conversation",
    course: "FA-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate an invitation to a traditional majlis (sitting room gathering), practicing extended hospitality rituals and polite conversation.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA102: Arabic II",
    situation: "Lieutenant Ahmed (أحمد) has invited you to his family's majlis for coffee and dates. This is an honor and an opportunity to deepen the professional relationship. His father, who speaks limited English, will be host.",
    dilemma: "You're uncertain about majlis etiquette - seating protocol, how long to stay, appropriate conversation topics, and how to politely depart. The family is judging whether Americans understand Arab hospitality.",
    briefing: "This scenario tests your understanding of Arab hospitality culture, proper majlis behavior, and ability to conduct extended polite conversation in Arabic.",
    frameworks: ["Majlis Protocol", "Arab Hospitality", "Extended Conversation", "Family Interaction"],
    primaryMission: "Successfully participate in the majlis, demonstrating respect for Arab hospitality traditions and building deeper relationship with colleague's family.",
    successCriteria: [
      "Navigate coffee ritual correctly",
      "Engage in appropriate conversation topics",
      "Show respect for elder host",
      "Express gratitude appropriately",
      "Depart at appropriate time and manner"
    ],
    tags: ["FA-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Majlis", "Hospitality", "Family"],
    language: "Arabic",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "الحمد لله (alhamdulillah) - Praise be to God (used frequently)",
      "ما شاء الله (ma sha'allah) - What God has willed (for compliments)",
      "كيف الحال (kayf al-hal) - How are you?",
      "الله يعطيك العافية (allah ya'teek al-'afiya) - May God give you strength",
      "بس، شكراً (bas, shukran) - Enough, thank you (to stop coffee)"
    ],
    culturalTips: [
      "Shake the cup slightly to indicate you've had enough coffee",
      "Sit lower than the eldest person when possible",
      "Topics: family, travel, health, faith (positive) - not politics",
      "Admire the home but don't over-compliment specific items",
      "Leave when signaled (often after fruit is served)"
    ],
    culturalGotchas: [
      "Don't sit with feet pointing at anyone",
      "Don't ask about wife/daughters specifically (ask about \"family\")",
      "Don't decline coffee first two times offered",
      "Don't leave too quickly (minimum 30-45 mins)",
      "Don't forget to praise the hospitality repeatedly"
    ]
  },
  {
    id: "fa102-l02-002",
    title: "Religious Sensitivity",
    subtitle: "Navigating Prayer Times & Ramadan",
    course: "FA-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate situations involving Islamic religious practices including prayer times and Ramadan observances.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA102: Arabic II",
    situation: "You're working with Petty Officer Khalid (خالد) during Ramadan. It's near sunset, he hasn't eaten all day, and the call to prayer is approaching. You need to discuss something important but must be sensitive to his religious obligations.",
    dilemma: "You have a deadline but must respect his need to break fast and pray. How do you navigate the timing respectfully while still accomplishing the mission?",
    briefing: "This scenario tests understanding of Islamic religious practices and the ability to navigate work situations with appropriate cultural and religious sensitivity.",
    frameworks: ["Islamic Practices", "Ramadan Etiquette", "Prayer Time Awareness", "Religious Sensitivity"],
    primaryMission: "Successfully navigate the work situation while demonstrating respect for Islamic religious practices and maintaining positive relationship.",
    successCriteria: [
      "Show awareness of prayer time approach",
      "Respect iftar and prayer needs",
      "Find appropriate time to complete work",
      "Use appropriate religious phrases",
      "Demonstrate genuine respect, not just tolerance"
    ],
    tags: ["FA-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Ramadan", "Prayer", "Religious Sensitivity"],
    language: "Arabic",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "رمضان كريم (Ramadan kareem) - Generous Ramadan (greeting)",
      "صلاة (salat) - Prayer",
      "إفطار (iftar) - Breaking the fast",
      "إن شاء الله بعد الصلاة (in sha'allah ba'd al-salat) - God willing, after prayer",
      "كل عام وأنتم بخير (kull 'am wa antum bikhair) - May you be well every year"
    ],
    culturalTips: [
      "Don't eat/drink in front of fasting people",
      "Schedule meetings around prayer times when possible",
      "Offer Ramadan greetings appropriately",
      "Understand work pace slows during Ramadan",
      "Respect the call to prayer as sacred"
    ],
    culturalGotchas: [
      "Never interrupt prayer",
      "Don't suggest someone skip prayer \"this once\"",
      "Don't assume Ramadan is a burden they resent",
      "Don't forget night hours may be more productive",
      "Don't schedule important meetings at prayer times"
    ]
  },

  // FA-201 (Semester 3, GSE 36-50, B1, Intermediate Low-Mid)
  {
    id: "fa201-l03-001",
    title: "Partner Nation Coordination",
    subtitle: "Military Planning Discussion",
    course: "FA-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice military coordination language in Arabic during joint planning sessions with Gulf partner nations.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA201: Arabic III",
    situation: "You're participating in a coordination meeting with Saudi and Emirati naval officers to plan a joint patrol. Commander Saeed (سعيد) leads the discussion in Arabic with English interpretation available, but using Arabic will build trust.",
    dilemma: "The discussion involves complex operational matters. You can follow general topics but may miss nuances. You must decide when to use Arabic to build rapport versus English for precision on critical matters.",
    briefing: "This scenario tests military Arabic vocabulary and the judgment to code-switch appropriately between languages during professional military discussions.",
    frameworks: ["Military Arabic", "Coalition Operations", "Meeting Protocols", "Code-Switching"],
    primaryMission: "Participate effectively in the coordination meeting, building rapport through Arabic while ensuring operational clarity on critical matters.",
    successCriteria: [
      "Use military Arabic appropriately",
      "Build rapport with partner officers",
      "Navigate meeting protocols correctly",
      "Switch to English when precision required",
      "Leave with clear mutual understanding"
    ],
    tags: ["FA-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Coalition", "Military Planning"],
    language: "Arabic",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "دورية (dawriyya) - Patrol",
      "منطقة العمليات (mintaqat al-'amaliyyat) - Area of operations",
      "التعاون البحري (al-ta'awun al-bahri) - Maritime cooperation",
      "الأمن البحري (al-amn al-bahri) - Maritime security",
      "قواعد الاشتباك (qawa'id al-ishitibak) - Rules of engagement"
    ],
    culturalTips: [
      "Start meetings with extended greetings",
      "Relationship comes before business",
      "Direct \"no\" is rarely used - listen for hedges",
      "\"In sha'allah\" may signal uncertainty, not just piety",
      "Follow the lead of most senior officer"
    ],
    culturalGotchas: [
      "Don't rush to agenda",
      "Don't challenge directly in group settings",
      "Don't mistake politeness for agreement",
      "Don't forget side conversations are important",
      "Don't underestimate partner capabilities"
    ]
  },
  {
    id: "fa201-l03-002",
    title: "Community Coordination",
    subtitle: "Understanding Local Decision-Making",
    course: "FA-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate a coordination meeting where understanding local community structures and relationships is essential for mission success.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA201: Arabic III",
    situation: "You're assisting coordination for humanitarian relief. Sheikh Abdullah (عبدالله), a respected community leader, has concerns about how aid distribution will affect existing community relationships. Understanding local decision-making structures is critical to mission success.",
    dilemma: "Different communities have different approaches to collective decision-making. You must listen carefully to understand local concerns and find solutions that work within established community structures.",
    briefing: "This scenario tests your understanding of local community dynamics and ability to navigate complex stakeholder relationships while achieving operational objectives.",
    frameworks: ["Tribal Dynamics", "Local Politics", "Humanitarian Operations", "Cultural Intelligence"],
    primaryMission: "Understand tribal concerns, demonstrate appropriate respect, and find solutions that work within local cultural frameworks while achieving humanitarian objectives.",
    successCriteria: [
      "Listen actively to understand concerns",
      "Show appropriate respect for tribal structures",
      "Navigate competing interests diplomatically",
      "Find culturally appropriate solutions",
      "Build relationships for ongoing cooperation"
    ],
    tags: ["FA-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "Tribal", "Humanitarian", "Local Dynamics"],
    language: "Arabic",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "قبيلة (qabila) - Tribe/extended family",
      "شيخ (sheikh) - Elder/leader",
      "وجيه (wajih) - Notable/community leader",
      "التوازن (al-tawazun) - Balance",
      "الاحترام (al-ihtiram) - Respect"
    ],
    culturalTips: [
      "Community and family networks are important in decision-making",
      "Engaging respected community leaders builds trust",
      "Decisions often require broader consultation",
      "Public respect for leaders facilitates cooperation",
      "Historical relationships between groups may affect current dynamics"
    ],
    culturalGotchas: [
      "Don't bypass community leaders who have established trust",
      "Understand local hierarchy and protocol",
      "Learn about local decision-making processes",
      "Don't make commitments without understanding who needs to be consulted",
      "Build relationships with diverse community stakeholders"
    ]
  },

  // FA-202 (Semester 4, GSE 51-58, B1+, Intermediate High)
  {
    id: "fa202-l04-001",
    title: "Media Engagement",
    subtitle: "Regional Press Interview",
    course: "FA-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice handling media interviews in Arabic, communicating key messages while navigating sensitive questions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA202: Arabic IV",
    situation: "You've been asked to support a media interview in Arabic about US-Gulf naval cooperation. The reporter, Ms. Fatima (فاطمة), is professional but will ask challenging questions about US presence in the region.",
    dilemma: "The interview will be broadcast across the Arab world. You must communicate positive messages about partnership while deflecting politically charged questions without appearing evasive.",
    briefing: "This scenario tests advanced Arabic media skills including message discipline, bridging techniques, and maintaining composure under pressure while speaking a foreign language.",
    frameworks: ["Media Relations", "Public Affairs", "Message Discipline", "Arabic Media Environment"],
    primaryMission: "Complete a successful media interview that communicates key messages positively while handling difficult questions diplomatically.",
    successCriteria: [
      "Communicate partnership messages clearly",
      "Bridge from difficult questions to key points",
      "Maintain composure throughout",
      "Avoid politically damaging statements",
      "Leave positive impression with Arabic audience"
    ],
    tags: ["FA-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Media", "Public Affairs"],
    language: "Arabic",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "التعاون الاستراتيجي (al-ta'awun al-istratiji) - Strategic cooperation",
      "الأمن الإقليمي (al-amn al-iqlimi) - Regional security",
      "الشراكة (al-sharaka) - Partnership",
      "من المهم أن نذكر (min al-muhimm an nathkur) - It's important to mention",
      "لن أتطرق للسياسة (lan atatarraq lil-siyasa) - I won't discuss politics"
    ],
    culturalTips: [
      "Arabic media expects warmth and eloquence",
      "Opening pleasantries matter even in interviews",
      "Deflect gracefully, don't stonewall",
      "Acknowledge legitimate concerns",
      "Speak to the Arab audience, not just the reporter"
    ],
    culturalGotchas: [
      "Don't criticize any Arab nation by name",
      "Don't appear arrogant or dismissive",
      "Don't forget religious sensitivities in language",
      "Don't let frustration show",
      "Don't go off message under pressure"
    ]
  },
  {
    id: "fa202-l04-002",
    title: "Strategic Dialogue",
    subtitle: "High-Level Discussion on Regional Issues",
    course: "FA-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Participate in high-level strategic discussions about regional security in Arabic, engaging substantively with complex topics.",
    image: "placeholder",
    area: "Language",
    courseCode: "FA202: Arabic IV",
    situation: "During a regional security conference, you have an opportunity for a sidebar discussion with Colonel Mansour (منصور), a senior Gulf military official. He wants to discuss US commitment to Gulf security and future cooperation.",
    dilemma: "Colonel Mansour is testing whether Americans truly understand regional perspectives or just impose their views. You must engage substantively with Gulf concerns while maintaining appropriate boundaries on policy commitments.",
    briefing: "This scenario tests advanced strategic discussion skills in Arabic, including understanding regional perspectives, engaging with complex arguments, and building trust through substantive dialogue.",
    frameworks: ["Strategic Dialogue", "Regional Security", "Diplomatic Communication", "Trust Building"],
    primaryMission: "Engage meaningfully in strategic dialogue that builds trust and demonstrates genuine understanding of regional perspectives while maintaining appropriate policy boundaries.",
    successCriteria: [
      "Demonstrate genuine understanding of Gulf concerns",
      "Engage substantively with complex regional issues",
      "Build personal trust with counterpart",
      "Maintain appropriate policy boundaries",
      "Leave door open for ongoing dialogue"
    ],
    tags: ["FA-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Strategic Dialogue", "Regional Security"],
    language: "Arabic",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "الاستقرار الإقليمي (al-istiqrar al-iqlimi) - Regional stability",
      "التهديدات المشتركة (al-tahdeedat al-mushtaraka) - Common threats",
      "الالتزام (al-iltizam) - Commitment",
      "التصور الاستراتيجي (al-tasawwur al-istratiji) - Strategic vision",
      "المصالح المتبادلة (al-masalih al-mutabadila) - Mutual interests"
    ],
    culturalTips: [
      "Listen more than speak",
      "Acknowledge regional perspectives seriously",
      "Find common ground before differences",
      "Use \"we\" language for shared interests",
      "Follow up with personal note"
    ],
    culturalGotchas: [
      "Don't dismiss concerns about US reliability",
      "Don't make policy commitments beyond your authority",
      "Don't ignore historical context",
      "Don't treat as just transactional",
      "Don't forget the personal relationship aspect"
    ]
  },

  // ============================================
  // RUSSIAN LANGUAGE SCENARIOS (FR)
  // 8 scenarios across 4 semesters
  // ============================================

  // FR-101 (Semester 1, GSE 22-29, A1, Novice Mid)
  {
    id: "fr101-l01-001",
    title: "Academic Conference",
    subtitle: "Meeting Russian Academics",
    course: "FR-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice formal Russian introductions at an academic security conference where Russian scholars are present.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR101: Russian I",
    situation: "Dr. Petrov (Петров) from a Russian maritime research institute approaches you during a break. He's curious about American midshipmen's perspectives on naval strategy. The interaction is friendly but requires appropriate formality.",
    dilemma: "You want to engage meaningfully, but conversation could drift toward sensitive topics. You must maintain appropriate boundaries while building genuine rapport.",
    briefing: "This scenario tests basic Russian self-introduction and the ability to navigate initial professional interactions with appropriate formality.",
    frameworks: ["Formal Introductions", "Academic Register", "Professional Boundaries", "Cultural Formality"],
    primaryMission: "Complete a proper Russian introduction that demonstrates cultural awareness and appropriate use of formal language (вы forms).",
    successCriteria: [
      "Use formal \"вы\" (vy) forms correctly",
      "Navigate small talk about studies/interests",
      "Show respect for Russian academic tradition",
      "Avoid political topics gracefully",
      "Leave positive impression"
    ],
    tags: ["FR-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Academic", "Formal Introduction"],
    language: "Russian",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Здравствуйте (Zdravstvuyte) - Hello (formal)",
      "Очень приятно (Ochen' priyatno) - Very pleased (to meet you)",
      "Как вас зовут? (Kak vas zovut?) - What is your name (formal)",
      "Спасибо (Spasibo) - Thank you",
      "До свидания (Do svidaniya) - Goodbye"
    ],
    culturalTips: [
      "Use formal \"вы\" (vy) forms with strangers and professionals",
      "Maintain appropriate formality at academic events",
      "Show genuine interest in their research",
      "Russians appreciate intellectual conversations",
      "Let them guide conversation topics"
    ],
    culturalGotchas: [
      "Don't use informal \"ты\" (ty) with strangers",
      "Don't be overly familiar or casual",
      "Don't bring up sensitive political topics",
      "Don't dismiss Soviet-era accomplishments",
      "Don't make assumptions about their politics"
    ]
  },
  {
    id: "fr101-l01-002",
    title: "Arctic Encounter",
    subtitle: "Search and Rescue Communication",
    course: "FR-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice basic emergency communication phrases during a simulated Arctic search and rescue scenario.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR101: Russian I",
    situation: "During an Arctic training exercise, you establish radio contact with a Russian Coast Guard vessel assisting with search and rescue. Basic Russian communication enhances coordination.",
    dilemma: "Communication must be clear and precise for safety, but your Russian is limited. You need to convey critical information while managing language gaps.",
    briefing: "This scenario tests basic emergency communication phrases and the ability to coordinate professionally across language barriers in high-stakes situations.",
    frameworks: ["Emergency Communication", "Maritime Coordination", "SAR Protocol", "Language Clarity"],
    primaryMission: "Successfully coordinate with Russian Coast Guard using basic Russian, maintaining professional tone while ensuring clear communication.",
    successCriteria: [
      "Communicate basic coordination information",
      "Use maritime terminology correctly",
      "Maintain professional tone",
      "Express gratitude appropriately",
      "Bridge communication gaps with gestures/repetition"
    ],
    tags: ["FR-101", "Semester 1", "GSE 22-29", "A1", "Novice", "SAR", "Arctic", "Emergency"],
    language: "Russian",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Помощь (Pomoshch') - Help",
      "Координаты (Koordinaty) - Coordinates",
      "Понятно (Ponyatno) - Understood",
      "Повторите (Povtorite) - Repeat",
      "Спасибо за помощь (Spasibo za pomoshch') - Thank you for help"
    ],
    culturalTips: [
      "Russians respect professional competence",
      "Clear communication is more important than perfect grammar",
      "Express gratitude for cooperation",
      "Arctic cooperation has long precedent",
      "Focus on shared mission, not politics"
    ],
    culturalGotchas: [
      "Don't let pride prevent asking for clarification",
      "Don't make political statements on official channels",
      "Don't forget to thank them for assistance",
      "Don't assume English is preferred",
      "Don't rush critical safety communications"
    ]
  },

  // FR-102 (Semester 2, GSE 30-35, A2, Novice High)
  {
    id: "fr102-l02-001",
    title: "Cultural Evening",
    subtitle: "Russian Hospitality & Toasting",
    course: "FR-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate Russian hospitality including elaborate toasting traditions at a formal dinner.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR102: Russian II",
    situation: "You've been invited to a cultural reception at the Russian Consulate. The evening includes formal toasting traditions, and you'll be expected to participate appropriately.",
    dilemma: "Russian toasting culture involves multiple rounds with vodka or wine. You must participate respectfully while managing consumption and maintaining professional composure.",
    briefing: "This scenario tests understanding of Russian hospitality customs, particularly the elaborate toasting traditions central to Russian social gatherings.",
    frameworks: ["Toasting Traditions", "Russian Hospitality", "Social Protocol", "Alcohol Culture"],
    primaryMission: "Navigate the formal dinner successfully, participating appropriately in toasts while demonstrating respect for Russian cultural traditions.",
    successCriteria: [
      "Deliver thoughtful toast in Russian",
      "Make eye contact during toasting",
      "Participate in multiple rounds appropriately",
      "Manage alcohol consumption professionally",
      "Show genuine warmth and appreciation"
    ],
    tags: ["FR-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Toasting", "Hospitality", "Cultural"],
    language: "Russian",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "За здоровье! (Za zdorov'ye!) - To health! (toast)",
      "За дружбу (Za druzhbu) - To friendship",
      "Горько! (Gor'ko!) - Bitter! (wedding tradition)",
      "Душевный (Dushevniy) - Soulful/heartfelt",
      "Тост (Tost) - Toast"
    ],
    culturalTips: [
      "Russians take toasting seriously - prepare thoughtful words",
      "Look people in eyes during toast",
      "Don't put empty bottle on table",
      "Don't toast with water",
      "\"Na zdorov'ye\" is NOT the toast (it's \"you're welcome\")"
    ],
    culturalGotchas: [
      "Don't refuse to participate in toasts",
      "Don't break eye contact during toast",
      "Don't leave glasses on table during toast",
      "Don't give shallow or insincere toasts",
      "Don't forget to reciprocate with your own toast"
    ]
  },
  {
    id: "fr102-l02-002",
    title: "Train Journey",
    subtitle: "Everyday Conversation",
    course: "FR-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Practice extended casual conversation with Russian civilians during a long train journey.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR102: Russian II",
    situation: "You're sharing a train compartment with Nikolai, a retired Russian naval officer now working as an engineer. He's curious about America and enjoys practicing his limited English while you practice Russian.",
    dilemma: "The conversation may drift toward topics that require careful navigation - historical events, politics, or sensitive comparisons between countries. You must maintain genuine connection while being thoughtful.",
    briefing: "This scenario tests the ability to sustain extended casual conversation in Russian, navigating cultural topics while building genuine human connection.",
    frameworks: ["Extended Conversation", "Cultural Exchange", "Sensitive Topics", "Human Connection"],
    primaryMission: "Build genuine rapport through extended conversation, sharing about American culture while showing interest in Russian perspectives.",
    successCriteria: [
      "Sustain extended conversation on everyday topics",
      "Share about American culture appropriately",
      "Show genuine interest in Russian perspectives",
      "Handle topics that drift toward sensitive areas",
      "Build genuine human connection"
    ],
    tags: ["FR-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Conversation", "Cultural Exchange"],
    language: "Russian",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Расскажите о... (Rasskazhite o...) - Tell me about...",
      "Интересно (Interesno) - Interesting",
      "В России (V Rossii) - In Russia",
      "В Америке (V Amerike) - In America",
      "Я думаю (Ya dumayu) - I think"
    ],
    culturalTips: [
      "Russians enjoy deep, philosophical conversations",
      "Personal stories are valued over statistics",
      "Show genuine curiosity about their experiences",
      "It's okay to discuss differences respectfully",
      "Russians appreciate when you challenge stereotypes"
    ],
    culturalGotchas: [
      "Don't be defensive about American issues",
      "Don't dismiss Soviet era as all negative",
      "Don't make everything about politics",
      "Don't assume they love or hate their government",
      "Don't forget they're individuals, not representatives"
    ]
  },

  // FR-201 (Semester 3, GSE 36-50, B1, Intermediate Low-Mid)
  {
    id: "fr201-l03-001",
    title: "Joint Operations Brief",
    subtitle: "Formal Military Communication",
    course: "FR-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice formal military Russian during a hypothetical joint operations briefing (CUES implementation).",
    image: "placeholder",
    area: "Language",
    courseCode: "FR201: Russian III",
    situation: "You're participating in a Code for Unplanned Encounters at Sea (CUES) communication exercise. Your Russian counterpart will communicate ship intentions and you must respond appropriately using formal military terminology.",
    dilemma: "Military communication requires precision, but using Russian demonstrates commitment to international protocols. You must balance clarity with appropriate use of Russian terminology.",
    briefing: "This scenario tests formal military Russian vocabulary and the ability to communicate clearly in professional naval contexts.",
    frameworks: ["Military Russian", "CUES Protocol", "Bridge-to-Bridge Communication", "Professional Precision"],
    primaryMission: "Successfully execute bridge-to-bridge communication using appropriate military Russian while maintaining professional protocol.",
    successCriteria: [
      "Use formal military register correctly",
      "Communicate intentions clearly",
      "Respond appropriately to Russian communications",
      "Maintain professional tone throughout",
      "Follow CUES protocols appropriately"
    ],
    tags: ["FR-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "CUES", "Military", "Naval"],
    language: "Russian",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "Боевой корабль (Boyevoy korabl') - Warship",
      "Намерения (Namereniya) - Intentions",
      "Курс и скорость (Kurs i skorost') - Course and speed",
      "Безопасное расстояние (Bezopasnoe rasstoyaniye) - Safe distance",
      "Подтверждаю (Podtverzhdayu) - I confirm"
    ],
    culturalTips: [
      "Russian military values precision and professionalism",
      "Using Russian shows respect for protocols",
      "CUES provides common framework",
      "Focus on safety, not politics",
      "Professional competence builds mutual respect"
    ],
    culturalGotchas: [
      "Don't be casual in military communications",
      "Don't mix military and political language",
      "Don't hesitate to clarify if unclear",
      "Don't forget proper radio protocol",
      "Don't assume hostile intent from formality"
    ]
  },
  {
    id: "fr201-l03-002",
    title: "Historical Discussion",
    subtitle: "WWII Shared History",
    course: "FR-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Engage in discussion about shared WWII history (convoys, Lend-Lease), building rapport through historical appreciation.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR201: Russian III",
    situation: "You're at a ceremony honoring WWII convoy veterans. Retired Admiral Sokolov (Соколов) shares memories of his father who served on convoy duty. This is an opportunity for meaningful connection through shared history.",
    dilemma: "WWII history evokes deep emotions for Russians who lost millions. You must show genuine respect without inadvertently minimizing their sacrifices or creating awkward Cold War references.",
    briefing: "This scenario tests the ability to engage with sensitive historical topics in Russian, building rapport through shared appreciation of WWII alliance history.",
    frameworks: ["Shared History", "WWII Alliance", "Cultural Sensitivity", "Historical Appreciation"],
    primaryMission: "Connect meaningfully with Russian counterparts through respectful discussion of shared WWII history, demonstrating knowledge and genuine appreciation.",
    successCriteria: [
      "Demonstrate knowledge of shared WWII history",
      "Express genuine respect for Russian sacrifices",
      "Navigate Soviet-era references appropriately",
      "Build rapport through historical appreciation",
      "Avoid triumphalist Cold War framing"
    ],
    tags: ["FR-201", "Semester 3", "GSE 36-50", "B1", "Intermediate", "WWII", "History", "Murmansk"],
    language: "Russian",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "Великая Отечественная война (Velikaya Otechestvennaya voyna) - Great Patriotic War",
      "Союзники (Soyuzniki) - Allies",
      "Конвой (Konvoy) - Convoy",
      "Подвиг (Podvig) - Heroic deed",
      "Память (Pamyat') - Memory"
    ],
    culturalTips: [
      "Russians call WWII \"Great Patriotic War\" (1941-1945)",
      "Soviet losses were catastrophic (27 million dead)",
      "Convoys and Lend-Lease are remembered positively",
      "This is rare common ground - use it",
      "Personal stories matter more than statistics"
    ],
    culturalGotchas: [
      "Don't minimize Soviet sacrifices",
      "Don't bring up Cold War tensions",
      "Don't say \"we won the war\" (all allies contributed)",
      "Don't ignore their role in defeating Hitler",
      "Don't make it about politics"
    ]
  },

  // FR-202 (Semester 4, GSE 51-58, B1+, Intermediate High)
  {
    id: "fr202-l04-001",
    title: "Arms Control Discussion",
    subtitle: "Track II Dialogue",
    course: "FR-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Participate in track II dialogue on maritime arms control with Russian counterparts.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR202: Russian IV",
    situation: "You're participating in an unofficial (track II) dialogue with Russian academics and former officials on maritime arms control. The discussion is substantive and requires nuanced engagement on complex strategic topics.",
    dilemma: "Track II dialogues allow frank discussion, but you're not authorized to represent official policy. You must engage substantively with Russian perspectives while maintaining appropriate boundaries.",
    briefing: "This scenario tests advanced political and strategic vocabulary in Russian and the ability to engage diplomatically on sensitive security topics.",
    frameworks: ["Track II Diplomacy", "Arms Control", "Strategic Dialogue", "Academic Discourse"],
    primaryMission: "Participate meaningfully in track II dialogue, demonstrating understanding of strategic concepts while building professional relationships.",
    successCriteria: [
      "Use strategic/diplomatic vocabulary appropriately",
      "Engage substantively with Russian perspectives",
      "Maintain appropriate policy boundaries",
      "Build intellectual rapport",
      "Navigate disagreements diplomatically"
    ],
    tags: ["FR-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Arms Control", "Track II"],
    language: "Russian",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "Стратегическая стабильность (Strategicheskaya stabil'nost') - Strategic stability",
      "Взаимное сдерживание (Vzaimnoye sderzhivaniye) - Mutual deterrence",
      "Доверие (Doveriye) - Trust",
      "Транспарентность (Transparentnost') - Transparency",
      "Общие интересы (Obshchiye interesy) - Common interests"
    ],
    culturalTips: [
      "Russian strategic culture emphasizes security above all",
      "Historical context matters deeply",
      "Russians value substantive engagement over platitudes",
      "Track II allows more candor than Track I",
      "Personal relationships enable policy progress"
    ],
    culturalGotchas: [
      "Don't dismiss Russian security concerns",
      "Don't speak for US government",
      "Don't ignore historical grievances",
      "Don't treat them as defeated Cold War adversary",
      "Don't forget mutual vulnerability is real"
    ]
  },
  {
    id: "fr202-l04-002",
    title: "Deconfliction",
    subtitle: "Preventing Miscalculation",
    course: "FR-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Practice communication during a potential incident at sea, using Russian to de-escalate and clarify intentions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FR202: Russian IV",
    situation: "During a training exercise, your vessel has an unplanned close encounter with a Russian naval vessel. Clear communication is essential to prevent miscalculation. Using Russian can help establish rapport and reduce tension.",
    dilemma: "The situation is tense and requires immediate, clear communication. You must balance urgency with professionalism, using Russian to demonstrate peaceful intentions while ensuring no misunderstanding occurs.",
    briefing: "This scenario tests crisis communication skills in Russian, emphasizing clarity, professionalism, and the ability to de-escalate through effective communication.",
    frameworks: ["Crisis Communication", "De-escalation", "CUES Protocol", "Incident Prevention"],
    primaryMission: "Communicate clearly and professionally to prevent miscalculation, using Russian to demonstrate peaceful intentions and achieve safe resolution.",
    successCriteria: [
      "Communicate intentions clearly",
      "Maintain professional, non-escalatory tone",
      "Use CUES protocols appropriately",
      "Navigate language gaps without frustration",
      "Achieve safe resolution"
    ],
    tags: ["FR-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Deconfliction", "Crisis", "CUES"],
    language: "Russian",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "Не имею враждебных намерений (Ne imeyu vrazhdebnykh namereniy) - I have no hostile intentions",
      "Прошу сохранять дистанцию (Proshu sokhranyat' distantsiyu) - Request maintain distance",
      "Понял (Ponyal) - Understood",
      "Следую международным правилам (Sleduyu mezhdunarodnym pravilam) - Following international rules",
      "Готов к диалогу (Gotov k dialogu) - Ready for dialogue"
    ],
    culturalTips: [
      "Russians respect calm professionalism under pressure",
      "Using Russian demonstrates respect and peaceful intent",
      "Reference CUES and international law",
      "Maintain dignity while de-escalating",
      "Clear communication prevents miscalculation"
    ],
    culturalGotchas: [
      "Don't escalate through aggressive language",
      "Don't assume hostile intent",
      "Don't forget professional courtesy even in tension",
      "Don't let frustration show",
      "Don't forget they want safe resolution too"
    ]
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
