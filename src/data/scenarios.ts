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
