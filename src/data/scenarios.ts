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
  },

  // ========================================
  // FRENCH LANGUAGE SCENARIOS (FF)
  // 8 scenarios across 4 semesters (FF-101 to FF-202)
  // ========================================

  {
    id: "ff101-l01-001",
    title: "NATO Welcome",
    subtitle: "Meeting French Naval Officers",
    course: "FF-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice formal French introductions when meeting French Navy officers at a NATO event.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF101: French I",
    situation: "Capitaine de Frégate Dubois from the French Navy approaches you. He appreciates Americans who make an effort in French and will test whether you've prepared.",
    dilemma: "You want to demonstrate respect through French language effort, but you're uncertain about formality levels. French officers value precision and correctness in language.",
    briefing: "This scenario tests basic French self-introduction and the ability to navigate formal Allied interactions with appropriate etiquette.",
    frameworks: ["Formal Introductions", "NATO Protocol", "French Formality", "Allied Relations"],
    primaryMission: "Complete a proper French introduction that demonstrates cultural awareness and appropriate formality with a NATO ally.",
    successCriteria: [
      "Use \"vous\" forms correctly",
      "Navigate formal greetings appropriately",
      "Show respect for French precision",
      "Demonstrate NATO partnership awareness",
      "Leave positive impression"
    ],
    tags: ["FF-101", "Semester 1", "GSE 22-29", "A1", "Novice", "NATO", "Formal Introduction"],
    language: "French",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Enchanté(e) - Pleased to meet you",
      "Je suis... - I am...",
      "Très bien, merci - Very well, thank you",
      "S'il vous plaît - Please",
      "Je ne comprends pas - I don't understand"
    ],
    culturalTips: [
      "Shake hands with everyone (one firm shake)",
      "Use \"vous\" until invited to \"tu\"",
      "Don't start with first names",
      "Expect directness balanced with formality",
      "\"Bonjour Monsieur/Madame\" before any conversation"
    ],
    culturalGotchas: [
      "Don't use informal \"tu\" with strangers or superiors",
      "Don't skip greetings before making requests",
      "Don't be overly familiar immediately",
      "Don't forget the handshake",
      "Don't mispronounce their rank or name"
    ]
  },
  {
    id: "ff101-l01-002",
    title: "Paris Navigation",
    subtitle: "Metro and Basic Transactions",
    course: "FF-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Navigate Paris using basic French for directions, tickets, and simple transactions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF101: French I",
    situation: "You have a free afternoon during your Language Summer Study Abroad Program. You need to purchase Metro tickets, navigate to your destination, and order food at a café.",
    dilemma: "Your French is limited, and Parisians expect politeness (\"Bonjour\" before any interaction). Poor etiquette may result in curt responses, even if your language is correct.",
    briefing: "This scenario tests survival French for navigation and transactions, with emphasis on the critical importance of French politeness norms.",
    frameworks: ["Survival French", "Politeness Norms", "Navigation", "Transactions"],
    primaryMission: "Successfully navigate Paris using French for directions and transactions while demonstrating appropriate French politeness conventions.",
    successCriteria: [
      "Purchase Metro ticket using French",
      "Ask for and understand basic directions",
      "Order food/drink politely",
      "Handle communication gaps gracefully",
      "Thank people appropriately"
    ],
    tags: ["FF-101", "Semester 1", "GSE 22-29", "A1", "Novice", "Survival French", "LSAP"],
    language: "French",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Bonjour - Hello/Good day",
      "Un billet, s'il vous plaît - A ticket, please",
      "Où est...? - Where is...?",
      "Je voudrais... - I would like...",
      "Merci beaucoup - Thank you very much"
    ],
    culturalTips: [
      "Always say \"Bonjour\" before any interaction",
      "Use \"s'il vous plaît\" and \"merci\" liberally",
      "Parisians appreciate effort, even if imperfect",
      "Maintain polite formality in service interactions",
      "Small talk is minimal in transactions"
    ],
    culturalGotchas: [
      "Don't skip \"Bonjour\" - it's considered rude",
      "Don't use \"tu\" with service workers or strangers",
      "Don't speak English first without asking",
      "Don't be loud or overly casual",
      "Don't forget to say goodbye (\"Au revoir\")"
    ]
  },
  {
    id: "ff102-l02-001",
    title: "Diplomatic Reception",
    subtitle: "French Social Protocol",
    course: "FF-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate a French diplomatic reception including proper greetings, conversation topics, and farewell protocols.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF102: French II",
    situation: "You've been invited to the Bastille Day reception at the French Embassy. You'll meet diplomats, military officers, and cultural figures, all expecting sophisticated social interaction.",
    dilemma: "French social protocol includes subtle expectations about greetings, conversation topics, and departure etiquette. Missteps can create lasting negative impressions.",
    briefing: "This scenario tests understanding of French diplomatic social norms and the ability to conduct extended social conversation in French.",
    frameworks: ["Diplomatic Protocol", "Social Conversation", "French Etiquette", "Embassy Events"],
    primaryMission: "Navigate the diplomatic reception successfully, demonstrating understanding of French social protocols while building positive relationships.",
    successCriteria: [
      "Execute proper French greetings and introductions",
      "Engage in appropriate social conversation",
      "Navigate sensitive topics gracefully",
      "Demonstrate cultural appreciation",
      "Say goodbye to host before leaving"
    ],
    tags: ["FF-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Diplomacy", "Social Protocol"],
    language: "French",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Je vous en prie - You're welcome / Please go ahead",
      "C'est très gentil - That's very kind",
      "Mes félicitations - Congratulations",
      "À votre santé - To your health (toast)",
      "Bonsoir - Good evening"
    ],
    culturalTips: [
      "La bise (cheek kisses) may be offered - follow their lead",
      "Don't discuss money or salaries",
      "Politics is acceptable if intellectual, not personal",
      "Food and wine are serious topics - show appreciation",
      "Always say goodbye to the host before leaving"
    ],
    culturalGotchas: [
      "Don't ask about salary or personal finances",
      "Don't be overly enthusiastic or loud",
      "Don't leave without saying goodbye to host",
      "Don't criticize French culture or cuisine",
      "Don't refuse offered food or drink without good reason"
    ]
  },
  {
    id: "ff102-l02-002",
    title: "The Misunderstanding",
    subtitle: "Clarifying and Apologizing",
    course: "FF-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Handle a cultural misunderstanding during study abroad and apologize appropriately in French.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF102: French II",
    situation: "Due to a miscommunication, you missed a scheduled meeting with your French counterpart, Lieutenant Moreau. The French value punctuality and reliability highly, and you need to apologize.",
    dilemma: "A simple \"sorry\" won't suffice in French culture. You must demonstrate genuine contrition while explaining what happened without making excuses.",
    briefing: "This scenario tests the ability to apologize appropriately in French and recover from a social misstep in a way that repairs the relationship.",
    frameworks: ["Apology Protocols", "Relationship Repair", "French Directness", "Professional Standards"],
    primaryMission: "Apologize appropriately for the missed meeting, clarify the misunderstanding, and repair the professional relationship.",
    successCriteria: [
      "Apologize sincerely using appropriate French expressions",
      "Explain situation without making excuses",
      "Demonstrate understanding of why punctuality matters",
      "Propose remedy or follow-up",
      "Leave relationship intact"
    ],
    tags: ["FF-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Apology", "Relationship Repair"],
    language: "French",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Je suis vraiment désolé(e) - I am truly sorry",
      "Je m'excuse - I apologize",
      "C'était ma faute - It was my fault",
      "Comment puis-je réparer? - How can I make it right?",
      "Pardonnez-moi - Forgive me"
    ],
    culturalTips: [
      "French value sincerity over elaborate apologies",
      "Take responsibility directly without hedging",
      "Explain briefly without lengthy excuses",
      "Propose concrete remedy or follow-up",
      "Maintain professional dignity while apologizing"
    ],
    culturalGotchas: [
      "Don't make elaborate excuses",
      "Don't deflect responsibility to others",
      "Don't minimize the importance of punctuality",
      "Don't over-apologize to the point of weakness",
      "Don't leave without proposing a remedy"
    ]
  },
  {
    id: "ff201-l03-001",
    title: "Joint Exercise Planning",
    subtitle: "Franco-American Naval Coordination",
    course: "FF-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Participate in planning discussions for a joint Franco-American naval exercise, using military French.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF201: French III",
    situation: "You're part of the planning team for a joint Franco-American exercise. French officers appreciate when Americans make an effort to work in French, but precision matters for operational matters.",
    dilemma: "You must balance using French to build rapport with ensuring complete clarity on operational details where miscommunication could be dangerous.",
    briefing: "This scenario tests military French vocabulary and the judgment to code-switch appropriately between languages during joint planning.",
    frameworks: ["Military French", "Joint Operations", "Code-Switching", "NATO Standards"],
    primaryMission: "Contribute effectively to exercise planning, using French to build rapport while ensuring operational clarity.",
    successCriteria: [
      "Use military French terminology correctly",
      "Build rapport with French counterparts",
      "Ensure clarity on critical operational matters",
      "Navigate French meeting protocols",
      "Demonstrate professional competence"
    ],
    tags: ["FF-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Low", "Military", "Joint Ops"],
    language: "French",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "L'exercice conjoint - Joint exercise",
      "La manœuvre - Maneuver",
      "Les règles d'engagement - Rules of engagement",
      "Le commandement - Command",
      "La coordination - Coordination"
    ],
    culturalTips: [
      "French appreciate effort to use French in planning",
      "Be direct and precise in operational discussions",
      "Show respect for French military professionalism",
      "Code-switch to English for critical safety matters if needed",
      "French officers value substantive contributions"
    ],
    culturalGotchas: [
      "Don't assume English is always preferred",
      "Don't let language pride compromise safety",
      "Don't patronize French military capabilities",
      "Don't forget formal meeting protocols",
      "Don't confuse politeness with lack of rigor"
    ]
  },
  {
    id: "ff201-l03-002",
    title: "African Partner Meeting",
    subtitle: "Francophone Africa Engagement",
    course: "FF-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Engage with French-speaking African naval officers during a maritime security initiative.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF201: French III",
    situation: "You're meeting with Senegalese naval officers to discuss maritime security cooperation. French is the working language, and demonstrating fluency builds respect for American commitment to partnership.",
    dilemma: "Francophone Africa has distinct norms from France. You must demonstrate respect for African perspectives and partnerships while using French appropriately for the regional context.",
    briefing: "This scenario tests the ability to use French in a Francophone African context, recognizing that cultural norms differ from metropolitan France.",
    frameworks: ["Francophone Africa", "Partnership", "Maritime Security", "Regional Context"],
    primaryMission: "Engage effectively with Senegalese partners using French, demonstrating respect for their perspectives and building lasting professional relationships.",
    successCriteria: [
      "Use French appropriately for African context",
      "Show respect for partner capabilities",
      "Build genuine professional rapport",
      "Navigate cultural differences from France",
      "Establish foundation for ongoing cooperation"
    ],
    tags: ["FF-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Mid", "Africa", "Partnership"],
    language: "French",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "Le partenariat - Partnership",
      "La sécurité maritime - Maritime security",
      "La coopération - Cooperation",
      "Les capacités - Capabilities",
      "L'engagement - Commitment/engagement"
    ],
    culturalTips: [
      "Francophone Africa has distinct norms from France",
      "Extended greetings are important - don't rush",
      "Respect for hierarchy is paramount",
      "Personal relationship building precedes business",
      "Acknowledge colonial history sensitivities"
    ],
    culturalGotchas: [
      "Don't assume French norms apply in Africa",
      "Don't rush through greetings to get to business",
      "Don't patronize or treat as lesser partners",
      "Don't ignore colonial history context",
      "Don't compare unfavorably to European standards"
    ]
  },
  {
    id: "ff202-l04-001",
    title: "Crisis Communication",
    subtitle: "Emergency Coordination",
    course: "FF-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Coordinate emergency response with French naval forces during a maritime crisis.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF202: French IV",
    situation: "A maritime emergency requires immediate coordination with French naval forces. Time is critical, and French counterparts are responding rapidly. Clear communication is essential.",
    dilemma: "Emergency situations require speed and clarity. You must communicate effectively in French under pressure while ensuring no critical information is lost in translation.",
    briefing: "This scenario tests crisis communication skills in French, emphasizing clarity, urgency, and the ability to coordinate effectively under pressure.",
    frameworks: ["Crisis Communication", "Emergency Response", "Coordination Under Pressure", "Clarity"],
    primaryMission: "Coordinate emergency response effectively with French forces, using French to maintain clear communication during the crisis.",
    successCriteria: [
      "Communicate emergency information clearly",
      "Respond appropriately to French transmissions",
      "Maintain composure under pressure",
      "Achieve effective coordination",
      "Use appropriate emergency protocols"
    ],
    tags: ["FF-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Crisis", "Emergency"],
    language: "French",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "Urgence - Emergency",
      "Assistance immédiate - Immediate assistance",
      "Coordonnées - Coordinates/contact info",
      "Procédure d'urgence - Emergency procedure",
      "Confirmer - Confirm"
    ],
    culturalTips: [
      "French appreciate calm professionalism in crisis",
      "Be direct and concise - no time for elaborate politeness",
      "Confirm understanding of critical information",
      "Trust French professional competence",
      "Clear communication saves lives"
    ],
    culturalGotchas: [
      "Don't let politeness slow critical communication",
      "Don't assume they understand without confirmation",
      "Don't panic or show excessive emotion",
      "Don't hesitate to clarify if uncertain",
      "Don't forget to thank partners after resolution"
    ]
  },
  {
    id: "ff202-l04-002",
    title: "Bilateral Negotiation",
    subtitle: "Alliance Burden-Sharing Discussion",
    course: "FF-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Engage in sensitive discussions about alliance cooperation and burden-sharing.",
    image: "placeholder",
    area: "Language",
    courseCode: "FF202: French IV",
    situation: "You're participating in bilateral discussions on NATO cooperation. French officials have concerns about burden-sharing and want substantive engagement on alliance issues.",
    dilemma: "France has an independent strategic tradition and complex views on NATO. You must engage substantively with French perspectives while representing US interests diplomatically.",
    briefing: "This scenario tests advanced diplomatic French and the ability to engage with complex alliance politics while maintaining positive bilateral relationships.",
    frameworks: ["Bilateral Diplomacy", "Alliance Politics", "Burden-Sharing", "Strategic Dialogue"],
    primaryMission: "Participate meaningfully in bilateral discussions, demonstrating understanding of French strategic perspectives while advancing common alliance interests.",
    successCriteria: [
      "Navigate sensitive alliance topics diplomatically",
      "Present US perspectives without appearing demanding",
      "Understand French strategic concerns",
      "Find common ground for cooperation",
      "Maintain strong bilateral relationship"
    ],
    tags: ["FF-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "NATO", "Diplomacy"],
    language: "French",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "L'alliance - The alliance",
      "Le partage du fardeau - Burden-sharing",
      "L'autonomie stratégique - Strategic autonomy",
      "Les intérêts communs - Common interests",
      "La souveraineté - Sovereignty"
    ],
    culturalTips: [
      "France values strategic autonomy within alliances",
      "Acknowledge French military history and capabilities",
      "Be substantive - French respect intellectual engagement",
      "Find historical touchpoints (Lafayette, WWI, WWII)",
      "Respect French pride in independent strategic thinking"
    ],
    culturalGotchas: [
      "Don't lecture on burden-sharing",
      "Don't dismiss French strategic concerns",
      "Don't assume France will follow US lead automatically",
      "Don't forget France is a nuclear power",
      "Don't ignore historical alliance contributions"
    ]
  },

  // German Language Scenarios (FG-101 to FG-202)
  // AOR Focus: NATO Central Europe, Germany Partnership, Historical Understanding

  // FG-101 (Semester 1, GSE 22-29, A1, Novice Mid)
  {
    id: "fg101-l01-001",
    title: "Bundeswehr Welcome",
    subtitle: "German Military Introduction",
    course: "FG-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice formal German introductions when meeting Bundeswehr officers during an exchange visit.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG101: German I",
    situation: "Kapitänleutnant Schneider welcomes you to the German Naval Academy. Germans value punctuality, directness, and professional demeanor. Your German effort will be appreciated but correctness matters.",
    dilemma: "Germans appreciate directness and substance over excessive friendliness. You must calibrate your communication style to match German professional norms while showing genuine effort.",
    briefing: "This scenario tests basic German self-introduction and understanding of German professional culture, particularly the value placed on directness and substance.",
    frameworks: ["Formal Introductions", "German Professional Culture", "Directness", "Military Exchange"],
    primaryMission: "Complete a proper German introduction that demonstrates respect for German professional culture and appropriate use of formal language.",
    successCriteria: [
      "Use formal \"Sie\" forms correctly",
      "Navigate formal greetings appropriately",
      "Show respect for German directness",
      "Demonstrate professional demeanor",
      "Leave positive impression"
    ],
    tags: ["FG-101", "Semester 1", "GSE 22-29", "A1", "Novice Mid", "Bundeswehr", "Formal Introduction"],
    language: "German",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Guten Tag - Good day",
      "Freut mich, Sie kennenzulernen - Pleased to meet you (formal)",
      "Ich bin... - I am...",
      "Danke schön - Thank you very much",
      "Auf Wiedersehen - Goodbye"
    ],
    culturalTips: [
      "Punctuality is valued - arrive exactly on time",
      "Handshake is firm, brief, and professional",
      "Use titles (Herr Kapitän, Frau Doktor)",
      "Professional demeanor is valued; rapport builds through substance",
      "Direct communication is appreciated - be clear and concise"
    ],
    culturalGotchas: [
      "Don't use first names without invitation",
      "Don't make jokes about German efficiency/stereotypes",
      "Don't be offended by directness - it's respect, not rudeness",
      "Don't expect small talk before business",
      "Don't compare German military to WWII Wehrmacht"
    ]
  },
  {
    id: "fg101-l01-002",
    title: "Berlin Exploration",
    subtitle: "Navigating a German City",
    course: "FG-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Navigate Berlin using basic German for transportation, dining, and simple interactions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG101: German I",
    situation: "You have a free day during your Language Summer Study Abroad Program. You need to navigate Berlin's U-Bahn, find a restaurant, and handle basic transactions.",
    dilemma: "Germans appreciate when foreigners make an effort in German, but they also value efficiency. You must balance using German with not wasting people's time if your skills are limited.",
    briefing: "This scenario tests survival German for navigation and transactions, with emphasis on German expectations for directness and efficiency.",
    frameworks: ["Survival German", "Navigation", "Efficiency", "Transactions"],
    primaryMission: "Successfully navigate Berlin using German for directions and transactions while demonstrating appropriate German communication style.",
    successCriteria: [
      "Purchase U-Bahn ticket using German",
      "Ask for and understand basic directions",
      "Order food at a restaurant",
      "Handle transactions efficiently",
      "Thank people appropriately"
    ],
    tags: ["FG-101", "Semester 1", "GSE 22-29", "A1", "Novice Mid", "Survival German", "LSAP", "Berlin"],
    language: "German",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Entschuldigung - Excuse me",
      "Wo ist...? - Where is...?",
      "Die Rechnung, bitte - The bill, please",
      "Ich möchte... - I would like...",
      "Sprechen Sie Englisch? - Do you speak English?"
    ],
    culturalTips: [
      "Germans appreciate language effort",
      "Be direct and efficient in requests",
      "Use polite forms (Sie) with strangers",
      "Maintain professional demeanor",
      "Punctuality matters for reservations"
    ],
    culturalGotchas: [
      "Don't expect excessive friendliness from service workers",
      "Don't be offended by directness",
      "Don't waste time with excessive pleasantries",
      "Don't jaywalk - Germans follow traffic rules",
      "Don't assume everyone speaks English"
    ]
  },

  // FG-102 (Semester 2, GSE 30-35, A2, Novice High)
  {
    id: "fg102-l02-001",
    title: "Bavarian Culture",
    subtitle: "Regional Customs and Hospitality",
    course: "FG-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate Bavarian social customs including toasting, regional pride, and hospitality norms.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG102: German II",
    situation: "Your German naval colleagues have invited you to a traditional Bavarian gathering. The atmosphere is more relaxed than formal Northern German events, with emphasis on \"Gemütlichkeit\" (comfortable conviviality).",
    dilemma: "Bavarian culture differs from North German culture. You must adapt to the more relaxed atmosphere while still demonstrating respect and avoiding stereotypical assumptions.",
    briefing: "This scenario tests understanding of German regional differences and the ability to participate appropriately in Bavarian social traditions.",
    frameworks: ["Regional Culture", "Bavarian Hospitality", "Gemütlichkeit", "Social Customs"],
    primaryMission: "Participate authentically in the Bavarian gathering, demonstrating appreciation for regional culture while building rapport with German colleagues.",
    successCriteria: [
      "Use appropriate Bavarian greetings/toasts",
      "Participate in toasting culture correctly",
      "Show genuine interest without stereotyping",
      "Build rapport with colleagues",
      "Navigate regional customs appropriately"
    ],
    tags: ["FG-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Bavaria", "Social Customs"],
    language: "German",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Prost! - Cheers!",
      "Gemütlichkeit - Coziness/comfort (important concept)",
      "Servus - Hello/Goodbye (Bavarian)",
      "Auf Ihr Wohl - To your health",
      "Das ist sehr lecker - That is very tasty"
    ],
    culturalTips: [
      "Bavarians are more relaxed than Northern Germans",
      "Eye contact during toasts is important",
      "Gemütlichkeit is a core value - embrace comfort and conviviality",
      "Regional pride is strong - show genuine appreciation",
      "Food and beer culture are serious topics"
    ],
    culturalGotchas: [
      "Don't make lederhosen/dirndl jokes",
      "Don't refuse toasts - participate fully",
      "Don't assume all Germans are like Bavarians",
      "Don't criticize the beer",
      "Don't break eye contact during toasts"
    ]
  },
  {
    id: "fg102-l02-002",
    title: "Hosting German Guests",
    subtitle: "Reverse Cultural Exchange",
    course: "FG-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Host German naval cadets visiting USNA, explaining American culture while speaking German.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG102: German II",
    situation: "German naval cadets are visiting USNA, and you've been selected as a host due to your German skills. They're curious about American naval education and culture.",
    dilemma: "You must explain American culture and USNA traditions in German while being sensitive to German perspectives and avoiding assumptions about what they know.",
    briefing: "This scenario tests the ability to serve as a cultural ambassador, explaining American institutions in German while demonstrating cross-cultural awareness.",
    frameworks: ["Cultural Ambassador", "Explaining American Culture", "Cross-Cultural Awareness", "Hosting Skills"],
    primaryMission: "Successfully host German visitors, using German to explain USNA and American culture while building positive international relationships.",
    successCriteria: [
      "Explain USNA traditions clearly in German",
      "Answer questions about American culture",
      "Show interest in their perspectives",
      "Handle comparisons diplomatically",
      "Build genuine rapport"
    ],
    tags: ["FG-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Hosting", "Cultural Exchange", "USNA"],
    language: "German",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Die Tradition - Tradition",
      "Die Marineakademie - Naval Academy",
      "Der Unterschied - Difference",
      "Die Ausbildung - Training/Education",
      "Das Verständnis - Understanding"
    ],
    culturalTips: [
      "Germans appreciate substantive explanations",
      "Be prepared for direct questions and comparisons",
      "Show genuine interest in their system",
      "Acknowledge differences without judgment",
      "Use humor carefully - Germans prefer substance"
    ],
    culturalGotchas: [
      "Don't assume superiority of American system",
      "Don't be defensive about differences",
      "Don't oversimplify or condescend",
      "Don't avoid difficult comparisons",
      "Don't forget to ask about their experiences"
    ]
  },

  // FG-201 (Semester 3, GSE 36-50, B1, Intermediate Low-Mid)
  {
    id: "fg201-l03-001",
    title: "NATO Staff Meeting",
    subtitle: "Multilateral Military Planning",
    course: "FG-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Participate in NATO staff meeting conducted partially in German.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG201: German III",
    situation: "You're participating in a NATO staff meeting where German is frequently used alongside English. German officers appreciate when Americans participate in German where possible.",
    dilemma: "NATO meetings require precision, but using German demonstrates commitment to alliance partnership. You must balance rapport-building with ensuring clarity on critical matters.",
    briefing: "This scenario tests military German vocabulary and the ability to participate in multinational planning sessions using appropriate military terminology.",
    frameworks: ["NATO Operations", "Military German", "Alliance Partnership", "Multilateral Coordination"],
    primaryMission: "Contribute effectively to NATO planning, using German where appropriate while ensuring operational clarity and building allied relationships.",
    successCriteria: [
      "Use military German terminology correctly",
      "Participate actively in discussions",
      "Build rapport with German colleagues",
      "Ensure clarity on critical matters",
      "Demonstrate professionalism throughout"
    ],
    tags: ["FG-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Low", "NATO", "Military Terminology"],
    language: "German",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "Die Einsatzbereitschaft - Operational readiness",
      "Der Einsatzbefehl - Operations order",
      "Die Lagebeurteilung - Situation assessment",
      "Die Zusammenarbeit - Cooperation",
      "Der Befehlshaber - Commander"
    ],
    culturalTips: [
      "Germans value precision in operational contexts",
      "Using German shows alliance commitment",
      "Direct communication is expected in military contexts",
      "Acknowledge German military expertise",
      "Substance matters more than style"
    ],
    culturalGotchas: [
      "Don't oversimplify complex operational matters",
      "Don't assume US approach is always best",
      "Don't make WWII references in military context",
      "Don't miss critical details due to language barriers",
      "Don't confuse German directness with rudeness"
    ]
  },
  {
    id: "fg201-l03-002",
    title: "Historical Reconciliation",
    subtitle: "Discussing WWII Legacy Sensitively",
    course: "FG-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate discussions about Germany's WWII history and the modern German military's relationship to that past.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG201: German III",
    situation: "During a memorial event, German counterparts discuss Vergangenheitsbewältigung (coming to terms with the past). You must engage thoughtfully with this sensitive topic while showing understanding of German historical consciousness.",
    dilemma: "WWII history remains emotionally significant for Germans. You must show genuine respect for their commitment to historical responsibility without creating awkward comparisons or appearing to lecture.",
    briefing: "This scenario tests the ability to engage sensitively with German historical consciousness in German, demonstrating understanding of how the modern Bundeswehr relates to its past.",
    frameworks: ["Historical Consciousness", "Vergangenheitsbewältigung", "Reconciliation", "Modern German Identity"],
    primaryMission: "Engage meaningfully in discussion of German historical memory, showing respect for German commitment to \"never again\" while building professional rapport.",
    successCriteria: [
      "Engage respectfully with historical topics",
      "Show understanding of German perspective",
      "Avoid awkward comparisons or stereotypes",
      "Express genuine appreciation for reconciliation",
      "Build professional relationship"
    ],
    tags: ["FG-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Mid", "WWII", "Historical Memory", "Reconciliation"],
    language: "German",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "Die Vergangenheitsbewältigung - Coming to terms with the past",
      "Die Verantwortung - Responsibility",
      "Die Versöhnung - Reconciliation",
      "Die Erinnerungskultur - Culture of remembrance",
      "Nie wieder - Never again"
    ],
    culturalTips: [
      "Germans take historical responsibility seriously",
      "Don't compare modern Germany to Nazi era",
      "Acknowledge German contributions to NATO/peace",
      "Be aware that this topic evokes genuine emotion",
      "Respect their commitment to \"never again\""
    ],
    culturalGotchas: [
      "Don't make light of WWII history",
      "Don't draw facile parallels to current events",
      "Don't lecture on historical responsibility",
      "Don't avoid the topic if Germans raise it",
      "Don't conflate Wehrmacht with modern Bundeswehr"
    ]
  },

  // FG-202 (Semester 4, GSE 51-58, B1+, Intermediate High)
  {
    id: "fg202-l04-001",
    title: "Diplomatic Incident",
    subtitle: "Managing Sensitive Situation",
    course: "FG-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Handle a sensitive situation involving US forces in Germany requiring diplomatic German communication.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG202: German IV",
    situation: "An incident involving US military personnel has upset the local German community. You must address concerns with local officials and community leaders, using German to demonstrate respect and good faith.",
    dilemma: "Community relations are critical for continued US presence in Germany. You must acknowledge concerns genuinely while representing your command appropriately and not making unauthorized commitments.",
    briefing: "This scenario tests crisis communication skills in German and the ability to manage community relations under difficult circumstances.",
    frameworks: ["Crisis Communication", "Community Relations", "Diplomatic German", "Accountability"],
    primaryMission: "Address community concerns effectively using German, demonstrating respect for local perspectives while maintaining appropriate command representation.",
    successCriteria: [
      "Communicate empathetically in German",
      "Address concerns without being defensive",
      "Commit only to what you can deliver",
      "Maintain positive community relationship",
      "Represent command appropriately"
    ],
    tags: ["FG-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Crisis Communication", "Community Relations"],
    language: "German",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "Die Besorgnis - Concern",
      "Die Verantwortlichkeit - Accountability",
      "Das Vertrauen - Trust",
      "Die Lösung - Solution",
      "Die Zusammenarbeit - Cooperation"
    ],
    culturalTips: [
      "Germans expect accountability, not excuses",
      "Using German shows respect and good faith",
      "Direct acknowledgment of problems is valued",
      "Community relationships matter for long-term presence",
      "Follow through is critical"
    ],
    culturalGotchas: [
      "Don't make excuses or minimize concerns",
      "Don't make promises you can't keep",
      "Don't blame individuals without full information",
      "Don't be defensive about US presence",
      "Don't forget to follow up as promised"
    ]
  },
  {
    id: "fg202-l04-002",
    title: "Energy Security Debate",
    subtitle: "Strategic Policy Discussion",
    course: "FG-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Engage in sophisticated discussion about European energy security and NATO implications.",
    image: "placeholder",
    area: "Language",
    courseCode: "FG202: German IV",
    situation: "You're participating in a policy conference on European energy security. German experts want substantive engagement on how energy dependencies affect alliance security.",
    dilemma: "Energy security is a sensitive topic touching on German domestic politics and alliance burden-sharing. You must engage substantively without appearing to lecture or dictate policy to allies.",
    briefing: "This scenario tests advanced policy German and the ability to engage with complex strategic topics while maintaining positive alliance relationships.",
    frameworks: ["Energy Security", "Alliance Politics", "Strategic Policy", "Diplomatic Engagement"],
    primaryMission: "Participate meaningfully in strategic discussion, demonstrating understanding of German energy policy perspectives while articulating alliance interests diplomatically.",
    successCriteria: [
      "Use policy vocabulary appropriately",
      "Engage substantively with German perspectives",
      "Articulate US views diplomatically",
      "Find common ground where possible",
      "Build professional relationships"
    ],
    tags: ["FG-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Energy Security", "Strategic Policy", "Alliance"],
    language: "German",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "Die Energiesicherheit - Energy security",
      "Die Abhängigkeit - Dependency",
      "Die Bündnissolidarität - Alliance solidarity",
      "Der Kompromiss - Compromise",
      "Die strategische Partnerschaft - Strategic partnership"
    ],
    culturalTips: [
      "Germans value substantive policy engagement",
      "Energy policy touches on domestic politics",
      "Acknowledge complexity of German position",
      "Find common strategic interests",
      "Respect German sovereignty on domestic policy"
    ],
    culturalGotchas: [
      "Don't lecture on German energy policy",
      "Don't oversimplify complex policy tradeoffs",
      "Don't ignore legitimate German concerns",
      "Don't frame as US vs. Germany",
      "Don't forget historical sensitivities about sovereignty"
    ]
  },

  // Spanish Language Scenarios (FS-101 to FS-202)
  // AOR Focus: SOUTHCOM, Latin America, Caribbean Operations, Counter-Narcotics

  // FS-101 (Semester 1, GSE 22-29, A1, Novice Mid)
  {
    id: "fs101-l01-001",
    title: "Naval Partner Meeting",
    subtitle: "Latin American Naval Introduction",
    course: "FS-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Practice formal Spanish introductions when meeting Latin American naval officers during a UNITAS exercise.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS101: Spanish I",
    situation: "Capitán de Fragata García from the Colombian Navy welcomes your ship. Spanish-speaking ability demonstrates respect for partnership and will open doors for more meaningful interaction.",
    dilemma: "You want to demonstrate respect through Spanish, but Latin American greetings are warmer and more extended than American norms. Rushing or being too businesslike could seem cold.",
    briefing: "This scenario tests basic Spanish self-introduction and understanding of Latin American warmth and relationship-building customs.",
    frameworks: ["Formal Introductions", "Latin American Warmth", "Relationship Building", "UNITAS Partnership"],
    primaryMission: "Complete a proper Spanish introduction that demonstrates respect for Colombian culture and builds foundation for professional partnership.",
    successCriteria: [
      "Use formal \"usted\" forms correctly",
      "Navigate warm greetings appropriately",
      "Show appreciation for hospitality",
      "Build personal rapport alongside professional",
      "Leave positive impression"
    ],
    tags: ["FS-101", "Semester 1", "GSE 22-29", "A1", "Novice Mid", "UNITAS", "Formal Introduction", "Colombia"],
    language: "Spanish",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "Mucho gusto - Pleased to meet you",
      "Encantado/a - Delighted",
      "¿Cómo está usted? - How are you (formal)",
      "Gracias por su hospitalidad - Thank you for your hospitality",
      "Es un honor estar aquí - It's an honor to be here"
    ],
    culturalTips: [
      "Expect warm, somewhat longer greetings than US",
      "Two-cheek kiss may be offered (men to women, women to women)",
      "Physical proximity is closer than American norms",
      "Take time for small talk before business",
      "Family questions are appropriate and welcomed"
    ],
    culturalGotchas: [
      "Don't be too business-focused too quickly",
      "Don't pull away from close proximity (rude)",
      "Don't refuse coffee or refreshments offered",
      "Don't assume everyone wants to practice English",
      "Don't confuse different countries' cultures"
    ]
  },
  {
    id: "fs101-l01-002",
    title: "Cartagena Port Call",
    subtitle: "Liberty and Local Interaction",
    course: "FS-101",
    difficulty: "EASY",
    difficultyLevel: 1,
    description: "Navigate a Colombian port city using basic Spanish for transportation, food, and simple interactions.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS101: Spanish I",
    situation: "You have liberty in Cartagena's historic old city. You need to navigate transportation, find food, and interact with locals who may speak limited English.",
    dilemma: "Colombians are warm and helpful, but your limited Spanish may lead to misunderstandings. You must communicate effectively while showing appreciation for their patience.",
    briefing: "This scenario tests survival Spanish for navigation and transactions, with emphasis on Colombian warmth and hospitality culture.",
    frameworks: ["Survival Spanish", "Navigation", "Transactions", "Colombian Hospitality"],
    primaryMission: "Successfully navigate Cartagena using Spanish for directions and transactions while demonstrating appreciation for Colombian culture and hospitality.",
    successCriteria: [
      "Ask for and understand directions",
      "Complete basic transactions",
      "Order food politely",
      "Handle communication gaps gracefully",
      "Show appreciation for help received"
    ],
    tags: ["FS-101", "Semester 1", "GSE 22-29", "A1", "Novice Mid", "Survival Spanish", "Port Call", "Cartagena"],
    language: "Spanish",
    semester: 1,
    actflLevel: "Novice Mid",
    ilrLevel: "0+",
    cefrLevel: "A1",
    gseRange: "22-29",
    keyVocabulary: [
      "¿Cuánto cuesta? - How much does it cost?",
      "La cuenta, por favor - The bill, please",
      "¿Dónde está...? - Where is...?",
      "No entiendo - I don't understand",
      "Más despacio, por favor - More slowly, please"
    ],
    culturalTips: [
      "Colombians are warm and patient with learners",
      "Greet everyone you interact with",
      "Use polite forms (usted) with strangers",
      "Tipping culture exists but is not excessive",
      "Ask before taking photos of people"
    ],
    culturalGotchas: [
      "Don't be excessively loud (ugly American stereotype)",
      "Don't assume everyone speaks English",
      "Don't compare Colombia to other Latin American countries",
      "Don't discuss drugs/narcotics casually",
      "Don't forget to say goodbye"
    ]
  },

  // FS-102 (Semester 2, GSE 30-35, A2, Novice High)
  {
    id: "fs102-l02-001",
    title: "Colombian Hospitality",
    subtitle: "Social Gathering and Customs",
    course: "FS-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Navigate a Colombian social gathering, understanding regional hospitality norms and appropriate behavior.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS102: Spanish II",
    situation: "Your Colombian naval counterpart has invited you to Sunday lunch with his family. This is a significant honor that indicates developing friendship and trust.",
    dilemma: "Colombian family gatherings are long and personal. You must participate fully without rushing, while navigating conversations that may get more personal than American norms.",
    briefing: "This scenario tests understanding of Colombian hospitality culture and the ability to participate appropriately in extended family social events.",
    frameworks: ["Colombian Hospitality", "Family Culture", "Personalismo", "Extended Social Events"],
    primaryMission: "Navigate the family gathering successfully, demonstrating appreciation for Colombian hospitality while building deeper professional and personal relationships.",
    successCriteria: [
      "Participate in extended meal appropriately",
      "Navigate personal conversations warmly",
      "Show appreciation for food and hospitality",
      "Build rapport with extended family",
      "Leave at appropriate time"
    ],
    tags: ["FS-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Family Gathering", "Hospitality"],
    language: "Spanish",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Salud - Cheers (toast)",
      "¡Qué rico! - How delicious!",
      "Con mucho gusto - With pleasure",
      "Gracias por invitarme - Thank you for inviting me",
      "Me siento como en casa - I feel at home"
    ],
    culturalTips: [
      "Expect extended meal times (lunch can be 3+ hours)",
      "Second helpings show appreciation",
      "Conversations may get personal (family, relationships)",
      "Music and dancing may happen spontaneously",
      "Leaving early is insulting"
    ],
    culturalGotchas: [
      "Don't check your watch or seem rushed",
      "Don't refuse food - take small portions if full",
      "Don't be too reserved - warmth is expected",
      "Don't discuss politics or violence",
      "Don't leave without thanking everyone"
    ]
  },
  {
    id: "fs102-l02-002",
    title: "The Faux Pas",
    subtitle: "Recovering from Cultural Mistakes",
    course: "FS-102",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Handle a situation where you've inadvertently caused offense and must apologize appropriately.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS102: Spanish II",
    situation: "You made an offhand comment about Colombian coffee being \"almost as good as Starbucks\" - intended as a compliment but taken as an insult to Colombian national pride. Capitán Rodríguez's response is cool.",
    dilemma: "Latin American national pride is significant, and comparing local products unfavorably to American brands is offensive. You must apologize sincerely without over-explaining.",
    briefing: "This scenario tests the ability to recover from cultural missteps in Spanish, demonstrating genuine contrition and cultural appreciation.",
    frameworks: ["Cultural Recovery", "Apology Culture", "National Pride", "Relationship Repair"],
    primaryMission: "Apologize sincerely for the offense, demonstrate genuine appreciation for Colombian culture, and repair the professional relationship.",
    successCriteria: [
      "Recognize the nature of the offense",
      "Apologize sincerely without over-explaining",
      "Show genuine appreciation for Colombian culture",
      "Repair the relationship warmly",
      "Learn from the mistake"
    ],
    tags: ["FS-102", "Semester 2", "GSE 30-35", "A2", "Novice High", "Cultural Mistake", "Apology", "National Pride"],
    language: "Spanish",
    semester: 2,
    actflLevel: "Novice High",
    ilrLevel: "1",
    cefrLevel: "A2",
    gseRange: "30-35",
    keyVocabulary: [
      "Lo siento mucho - I'm very sorry",
      "Fue un error - It was a mistake",
      "No quise ofender - I didn't mean to offend",
      "Tengo mucho que aprender - I have much to learn",
      "Valoro mucho su cultura - I value your culture greatly"
    ],
    culturalTips: [
      "Latin Americans take national pride seriously",
      "Colombian coffee is a source of significant national pride",
      "Sincere apologies are valued",
      "Humor can help after apology is accepted",
      "Personal relationships can recover from mistakes"
    ],
    culturalGotchas: [
      "Don't make excuses or explain away the mistake",
      "Don't minimize their feelings",
      "Don't make it about American culture being 'different'",
      "Don't repeat similar mistakes",
      "Don't forget - Colombian coffee is world-class"
    ]
  },

  // FS-201 (Semester 3, GSE 36-50, B1, Intermediate Low-Mid)
  {
    id: "fs201-l03-001",
    title: "Counter-Narcotics Coordination",
    subtitle: "Joint Operations Planning",
    course: "FS-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Participate in counter-narcotics coordination meeting with Colombian and regional partners.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS201: Spanish III",
    situation: "You're participating in a counter-narcotics coordination meeting with Colombian and regional partners. Spanish is the working language for building rapport, though English is available.",
    dilemma: "Counter-narcotics is sensitive - partners want respect for their significant sacrifices. You must coordinate effectively while showing appreciation for their efforts and avoiding any appearance of condescension.",
    briefing: "This scenario tests military Spanish vocabulary and the ability to participate respectfully in joint counter-narcotics coordination.",
    frameworks: ["Counter-Narcotics", "Joint Operations", "Partner Respect", "SOUTHCOM Cooperation"],
    primaryMission: "Contribute effectively to coordination meeting, using Spanish to build rapport and demonstrate respect for partner nation efforts.",
    successCriteria: [
      "Use counter-narcotics terminology correctly",
      "Build rapport with regional partners",
      "Show respect for partner sacrifices",
      "Contribute useful information",
      "Navigate sensitive topics appropriately"
    ],
    tags: ["FS-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Low", "Counter-Narcotics", "Joint Operations"],
    language: "Spanish",
    semester: 3,
    actflLevel: "Intermediate Low",
    ilrLevel: "1+",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "El narcotráfico - Drug trafficking",
      "La interdicción - Interdiction",
      "El patrullaje marítimo - Maritime patrol",
      "La inteligencia - Intelligence",
      "La coordinación bilateral - Bilateral coordination"
    ],
    culturalTips: [
      "Acknowledge partner nation sacrifices in drug war",
      "Avoid appearing to dictate solutions",
      "Show respect for their operational experience",
      "Build personal rapport alongside professional",
      "Understand sensitivities about US drug demand driving market"
    ],
    culturalGotchas: [
      "Don't minimize partner nation efforts",
      "Don't appear condescending about capabilities",
      "Don't ignore US role in creating drug demand",
      "Don't treat as purely US operation",
      "Don't discuss operations in public spaces"
    ]
  },
  {
    id: "fs201-l03-002",
    title: "Humanitarian Assistance",
    subtitle: "HA/DR Operations Communication",
    course: "FS-201",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Coordinate humanitarian assistance efforts with local authorities in a Spanish-speaking disaster zone.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS201: Spanish III",
    situation: "Following a natural disaster, your ship is providing assistance. You must coordinate with local emergency management officials who speak limited English. Your Spanish is critical for effective operations.",
    dilemma: "Disaster response requires urgent action, but local officials have established protocols and community relationships. You must coordinate effectively while respecting their leadership and local knowledge.",
    briefing: "This scenario tests Spanish communication in humanitarian operations, with emphasis on respectful coordination with local authorities.",
    frameworks: ["HA/DR Operations", "Local Coordination", "Respecting Local Leadership", "Emergency Spanish"],
    primaryMission: "Coordinate humanitarian assistance effectively using Spanish, respecting local leadership while ensuring aid reaches those in need.",
    successCriteria: [
      "Communicate needs and capabilities clearly",
      "Understand local priorities",
      "Navigate bureaucratic requirements",
      "Build trust with local officials",
      "Coordinate logistics effectively"
    ],
    tags: ["FS-201", "Semester 3", "GSE 36-50", "B1", "Intermediate Mid", "HA/DR", "Humanitarian Assistance"],
    language: "Spanish",
    semester: 3,
    actflLevel: "Intermediate Mid",
    ilrLevel: "2",
    cefrLevel: "B1",
    gseRange: "36-50",
    keyVocabulary: [
      "La asistencia humanitaria - Humanitarian assistance",
      "La respuesta a desastres - Disaster response",
      "Los suministros - Supplies",
      "La coordinación local - Local coordination",
      "Las prioridades - Priorities"
    ],
    culturalTips: [
      "Respect local official authority and knowledge",
      "Understand you are supporting, not taking over",
      "Build trust through cultural respect",
      "Acknowledge community resilience",
      "Follow local protocols even if different"
    ],
    culturalGotchas: [
      "Don't assume US way is better",
      "Don't bypass local officials to 'be efficient'",
      "Don't ignore community social structures",
      "Don't make promises you can't keep",
      "Don't forget to coordinate departure"
    ]
  },

  // FS-202 (Semester 4, GSE 51-58, B1+, Intermediate High)
  {
    id: "fs202-l04-001",
    title: "Media Relations",
    subtitle: "Spanish-Language Press Interview",
    course: "FS-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Handle a media interview in Spanish about US naval activities in Latin America.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS202: Spanish IV",
    situation: "You're conducting a Spanish-language media interview about US naval cooperation in Latin America. The reporter will ask about partnership activities and may probe historical sensitivities.",
    dilemma: "US history in Latin America is complex, and some questions may touch on historical interventions. You must stay on message while acknowledging legitimate regional perspectives.",
    briefing: "This scenario tests Spanish media skills including message discipline, bridging from difficult questions, and maintaining composure on live television.",
    frameworks: ["Media Relations", "Message Discipline", "Historical Sensitivity", "Public Affairs"],
    primaryMission: "Complete a successful media interview that communicates partnership messages positively while handling difficult questions about US-Latin American relations.",
    successCriteria: [
      "Communicate partnership messages clearly",
      "Bridge from difficult questions to key points",
      "Acknowledge regional perspectives respectfully",
      "Maintain composure throughout",
      "Leave positive impression with Spanish-speaking audience"
    ],
    tags: ["FS-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Media Relations", "Public Affairs"],
    language: "Spanish",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "La cooperación regional - Regional cooperation",
      "La seguridad marítima - Maritime security",
      "El compromiso estadounidense - US commitment",
      "Las relaciones bilaterales - Bilateral relations",
      "Respeto mutuo - Mutual respect"
    ],
    culturalTips: [
      "Latin American media may be more confrontational than US",
      "Acknowledge historical complexities honestly",
      "Focus on mutual benefit and partnership",
      "Show you've done homework on regional issues",
      "Speaking Spanish itself demonstrates respect"
    ],
    culturalGotchas: [
      "Don't be defensive about US history",
      "Don't lecture on what's best for region",
      "Don't ignore legitimate concerns",
      "Don't speak only in talking points",
      "Don't forget Monroe Doctrine is a sore point"
    ]
  },
  {
    id: "fs202-l04-002",
    title: "Regional Security Discussion",
    subtitle: "Latin American Perspectives",
    course: "FS-202",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Engage in substantive discussion about regional security with Latin American counterparts.",
    image: "placeholder",
    area: "Language",
    courseCode: "FS202: Spanish IV",
    situation: "You're participating in discussions about hemispheric security. Latin American officers have mixed views about US involvement in the region. You must engage substantively with their concerns while representing US interests.",
    dilemma: "Historical US interventions in Latin America create sensitivities. You must engage with legitimate concerns while articulating current partnership approaches and mutual interests.",
    briefing: "This scenario tests advanced strategic Spanish and the ability to engage diplomatically with complex historical and political dynamics in US-Latin American relations.",
    frameworks: ["Hemispheric Security", "Historical Sensitivities", "Strategic Dialogue", "Inter-American Relations"],
    primaryMission: "Engage meaningfully in hemispheric security discussions, demonstrating understanding of Latin American perspectives while articulating US partnership approach.",
    successCriteria: [
      "Engage substantively with regional concerns",
      "Acknowledge historical sensitivities appropriately",
      "Articulate mutual interests effectively",
      "Build professional relationships",
      "Represent US interests diplomatically"
    ],
    tags: ["FS-202", "Semester 4", "GSE 51-58", "B1+", "Intermediate High", "Regional Security", "Strategic Dialogue"],
    language: "Spanish",
    semester: 4,
    actflLevel: "Intermediate High",
    ilrLevel: "2+",
    cefrLevel: "B1+",
    gseRange: "51-58",
    keyVocabulary: [
      "La seguridad hemisférica - Hemispheric security",
      "La soberanía - Sovereignty",
      "Los intereses mutuos - Mutual interests",
      "El multilateralismo - Multilateralism",
      "La cooperación de seguridad - Security cooperation"
    ],
    culturalTips: [
      "Acknowledge historical sensitivities (Monroe Doctrine, interventions)",
      "Frame partnership as mutual benefit",
      "Show genuine interest in their perspectives",
      "Avoid condescension",
      "Build personal relationships alongside professional"
    ],
    culturalGotchas: [
      "Don't minimize historical US interventions",
      "Don't present US approach as only solution",
      "Don't ignore sovereignty concerns",
      "Don't forget US has made mistakes in region",
      "Don't assume economic development = security"
    ]
  },

  // ========================================
  // English Communication Scenarios (9 scenarios)
  // HE-111/112 (Rhetoric & Literature) and NL-420 (Communicating as a Leader)
  // ========================================

  // HE-111: Rhetoric (3 scenarios)
  {
    id: "he111-w05-001",
    title: "The Persuasive Argument",
    subtitle: "Building and Delivering Logical Arguments",
    course: "HE-111",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Practice constructing and delivering a persuasive argument on a controversial topic, demonstrating logical structure and rhetorical skill.",
    image: "placeholder",
    area: "Communication",
    courseCode: "HE111: Rhetoric and Introduction to Literature I",
    situation: "Your professor has assigned you to argue for a position you may or may not personally hold. You must construct a logical argument with clear claims, evidence, and reasoning, then defend it against Socratic questioning from Professor Williams.",
    dilemma: "The position is defensible but controversial. You must make the strongest possible case using logical reasoning and rhetorical techniques, then respond to counterarguments without becoming defensive or abandoning logical rigor.",
    briefing: "This scenario tests classical rhetorical skills: logos (logic), ethos (credibility), and pathos (emotional appeal), with emphasis on logos. Success requires structured argument, acknowledgment of counterpoints, and grace under questioning.",
    frameworks: ["Logos (Logic)", "Ethos (Credibility)", "Pathos (Emotional Appeal)", "Toulmin Model", "Argument Structure"],
    primaryMission: "Deliver a persuasive argument that demonstrates command of rhetorical structure and ability to defend your position through logical reasoning.",
    successCriteria: [
      "Clear thesis statement and argument structure",
      "Use of evidence and logical reasoning",
      "Anticipation and address of counterarguments",
      "Maintain composure under Socratic questioning",
      "Demonstrate intellectual honesty when point is valid"
    ],
    tags: ["HE-111", "Rhetoric", "Persuasion", "Argumentation", "Critical Thinking"]
  },
  {
    id: "he111-w08-001",
    title: "The Counterpoint",
    subtitle: "Responding to Opposing Viewpoints",
    course: "HE-111",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Practice listening to, understanding, and effectively responding to opposing viewpoints in a structured debate format.",
    image: "placeholder",
    area: "Communication",
    courseCode: "HE111: Rhetoric and Introduction to Literature I",
    situation: "You are participating in a Lincoln-Douglas style debate. Your opponent (another midshipman played by AI) has just made their opening argument. You must listen carefully, identify weaknesses, and construct a compelling rebuttal.",
    dilemma: "Your opponent has made several strong points. You must acknowledge what's valid while finding weaknesses to exploit, all within time constraints and debate rules.",
    briefing: "This scenario tests active listening, critical thinking, and the ability to construct rebuttals on the fly while maintaining respectful discourse.",
    frameworks: ["Active Listening", "Critical Analysis", "Rebuttal Structure", "Lincoln-Douglas Debate Format"],
    primaryMission: "Deliver an effective rebuttal that demonstrates careful listening, identifies logical weaknesses, and advances your position persuasively.",
    successCriteria: [
      "Demonstrate active listening",
      "Accurately summarize opponent's position",
      "Identify logical weaknesses",
      "Construct coherent rebuttal",
      "Maintain respectful discourse"
    ],
    tags: ["HE-111", "Debate", "Rebuttal", "Active Listening", "Critical Thinking"]
  },
  {
    id: "he112-w10-001",
    title: "The Literary Analysis Brief",
    subtitle: "Oral Presentation of Written Work",
    course: "HE-112",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Present a literary analysis orally, translating written analytical skills to verbal communication.",
    image: "placeholder",
    area: "Communication",
    courseCode: "HE112: Rhetoric and Introduction to Literature II",
    situation: "You're presenting your literary analysis to Professor Williams and classmates. You must translate written arguments into compelling oral presentation and handle questions about your interpretation.",
    dilemma: "Written analysis can be dense and complex, but oral presentation requires clarity and engagement. You must simplify without losing sophistication, and defend your interpretation under questioning.",
    briefing: "This scenario tests the ability to translate written analytical skills to oral communication, including presentation delivery and handling academic questions.",
    frameworks: ["Literary Analysis", "Oral Presentation", "Academic Discourse", "Question Handling"],
    primaryMission: "Deliver a clear, engaging oral presentation of your literary analysis and defend your interpretation under questioning.",
    successCriteria: [
      "Present complex ideas clearly",
      "Maintain audience engagement",
      "Handle questions thoughtfully",
      "Defend interpretation without being defensive",
      "Demonstrate literary knowledge"
    ],
    tags: ["HE-112", "Literary Analysis", "Oral Presentation", "Academic Communication"]
  },

  // NL-420: Communicating as a Leader (6 scenarios)
  {
    id: "nl420-w03-001",
    title: "The SITREP",
    subtitle: "Situation Report to Superior",
    course: "NL-420",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Deliver a clear, concise situation report to your commanding officer during an operational situation.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "An incident is developing on the ship. You've been summoned to brief the Commanding Officer who was sleeping. You have limited information and limited time. CAPT Morrison is known for demanding clarity and hating wasted words.",
    dilemma: "You have incomplete information but the CO needs to make decisions. You must communicate what you know, what you don't know, and what you're doing about it - all while remaining calm and organized.",
    briefing: "This scenario tests military communication skills: BLUF (Bottom Line Up Front), clear organization, appropriate detail level, and composure under pressure.",
    frameworks: ["BLUF (Bottom Line Up Front)", "SALUTE Report", "5 W's", "PCE (Problem, Cause, Effects)"],
    primaryMission: "Deliver a situation report that gives the CO what they need to make decisions without wasting their time or requiring excessive follow-up questions.",
    successCriteria: [
      "Lead with BLUF",
      "Organized structure (SALUTE or similar)",
      "Distinguish facts from assessments",
      "State unknowns clearly",
      "Propose recommended action"
    ],
    tags: ["NL-420", "SITREP", "Military Communication", "Briefing", "BLUF"]
  },
  {
    id: "nl420-w05-001",
    title: "The Decision Brief",
    subtitle: "Presenting Recommendation with BLUF",
    course: "NL-420",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Present a decision brief to senior leadership with clear recommendation and supporting analysis.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "You've been tasked with analyzing options for a maintenance scheduling challenge. You must present your analysis and recommendation to the Department Head, Commander Jackson. She has three minutes before her next meeting.",
    dilemma: "You have thorough analysis but limited time. You must distill complex information into a brief presentation that gives CDR Jackson what she needs to decide quickly.",
    briefing: "This scenario tests the ability to structure a decision brief using BLUF, present complex analysis concisely, and handle questions efficiently.",
    frameworks: ["BLUF", "Decision Brief Format", "Options Analysis", "Risk Assessment"],
    primaryMission: "Deliver a clear decision brief that gives CDR Jackson the information she needs to make a decision in the time available.",
    successCriteria: [
      "BLUF with clear recommendation",
      "Concise analysis of alternatives",
      "Identify risks and mitigations",
      "Handle questions efficiently",
      "Accept direction gracefully if recommendation rejected"
    ],
    tags: ["NL-420", "Decision Brief", "BLUF", "Leadership Communication"]
  },
  {
    id: "nl420-w07-001",
    title: "The Bad News",
    subtitle: "Delivering Difficult Information",
    course: "NL-420",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Deliver difficult news to a subordinate while maintaining their dignity and the professional relationship.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "Petty Officer Second Class Martinez has been denied advancement for the third time. He's a good sailor who struggles with the exam. You must inform him of the result and have a productive conversation about his path forward.",
    dilemma: "Martinez is demoralized but you need him to remain motivated. You must deliver the bad news honestly without being brutal, and help him see a path forward without making false promises.",
    briefing: "This scenario tests the communication skill of delivering difficult news while preserving dignity, maintaining motivation, and providing genuine support.",
    frameworks: ["Difficult Conversations", "Compassionate Communication", "Path Forward", "Dignity Preservation"],
    primaryMission: "Deliver the difficult news in a way that maintains PO2 Martinez's dignity and motivation while being honest and helpful.",
    successCriteria: [
      "Deliver news directly but compassionately",
      "Acknowledge the disappointment",
      "Avoid false hope or empty platitudes",
      "Provide concrete path forward",
      "Leave relationship intact"
    ],
    tags: ["NL-420", "Difficult Conversations", "Counseling", "Bad News", "Leadership Communication"]
  },
  {
    id: "nl420-w09-001",
    title: "The Counseling Session",
    subtitle: "Performance Feedback Conversation",
    course: "NL-420",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Conduct a counseling session with a subordinate whose performance needs to improve.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "Seaman Apprentice Johnson has been late to muster three times this month. Previous informal corrections haven't worked. You need to have a formal counseling conversation that addresses the behavior while understanding underlying causes.",
    dilemma: "You must be firm about the behavior while not being punitive if there are legitimate underlying issues. The goal is improvement, not punishment.",
    briefing: "This scenario tests performance counseling skills including addressing specific behaviors, seeking to understand causes, and setting clear expectations while maintaining a constructive relationship.",
    frameworks: ["Performance Counseling", "Behavioral Feedback", "Root Cause Analysis", "Constructive Communication"],
    primaryMission: "Conduct an effective counseling session that addresses the behavior, understands causes, and sets a clear path to improvement.",
    successCriteria: [
      "Address specific behaviors directly",
      "Seek to understand root causes",
      "Set clear expectations",
      "Document appropriately",
      "End with path forward"
    ],
    tags: ["NL-420", "Counseling", "Performance Feedback", "Leadership"]
  },
  {
    id: "nl420-w11-001",
    title: "The Media Interview",
    subtitle: "Handle Press Questions Professionally",
    course: "NL-420",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Handle media questions professionally during a public affairs event.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "Your ship is hosting a media day. A reporter is asking questions about ship operations, readiness, and recent incidents. You must communicate positively while staying within public affairs guidelines.",
    dilemma: "The reporter may ask about sensitive topics or recent incidents. You must stay on message without appearing evasive or uncooperative.",
    briefing: "This scenario tests media relations skills including message discipline, bridging techniques, and maintaining composure during press interactions.",
    frameworks: ["Media Relations", "Message Discipline", "Bridging Techniques", "Public Affairs Guidelines"],
    primaryMission: "Handle the media interview professionally, staying on message while representing the Navy positively.",
    successCriteria: [
      "Stay on message",
      "Bridge from difficult questions",
      "Don't speculate or go off-topic",
      "Represent the Navy positively",
      "Maintain composure throughout"
    ],
    tags: ["NL-420", "Media Relations", "Public Affairs", "Communication"]
  },
  {
    id: "nl420-w13-001",
    title: "The Town Hall",
    subtitle: "Address Crew Concerns Transparently",
    course: "NL-420",
    difficulty: "HARD",
    difficultyLevel: 5,
    description: "Address crew concerns at an all-hands meeting during a challenging operational period.",
    image: "placeholder",
    area: "Communication",
    courseCode: "NL420: Communicating as a Leader",
    situation: "The ship has been extended on deployment for an additional month. Morale is low, and there are rumors about further extensions. You're holding a town hall to address concerns and maintain unit cohesion.",
    dilemma: "You can't promise things you can't deliver. Some concerns are valid and you can't fix them. You need to acknowledge reality while maintaining morale and unit cohesion.",
    briefing: "This scenario tests the most challenging leadership communication skill: addressing a skeptical audience with limited good news while maintaining trust and motivation.",
    frameworks: ["Transparent Leadership", "Morale Management", "Authentic Communication", "Mission Connection"],
    primaryMission: "Address crew concerns honestly while maintaining morale and unit cohesion during a difficult period.",
    successCriteria: [
      "Acknowledge reality and frustrations",
      "Be honest about what you know and don't know",
      "Avoid empty promises",
      "Connect to mission and purpose",
      "Leave crew feeling heard and respected",
      "Maintain your credibility"
    ],
    tags: ["NL-420", "Town Hall", "Leadership Communication", "Morale", "Transparency"]
  },

  // ============================================================================
  // CROSS-CULTURAL COMMUNICATION SCENARIOS (12 scenarios)
  // ============================================================================
  // Courses: NE-203 Week 1, NL-360, FAS (Foreign Area Studies Major)
  // Focus: Operational Cultural Proficiency (OCP)
  // ============================================================================

  // NE-203 Week 1: Moral Perception Across Cultures (2 scenarios)
  {
    id: "ne203-cc-001",
    title: "The Tunnel",
    subtitle: "Cross-Cultural Ethical Perception",
    course: "NE-203",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate a situation where American moral intuitions may conflict with local cultural norms and practices.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NE203: Ethics and Moral Reasoning",
    situation: "Your patrol has discovered what appears to be a tunnel system near a village. The village elder claims no knowledge, but his responses are indirect and evasive by American communication standards. Your partner nation counterpart explains that the elder's behavior reflects cultural norms around family protection and indirect communication, not necessarily deception.",
    dilemma: "What seems like evasion from your cultural perspective may reflect different communication norms and legitimate family concerns. How do you gather needed information while respecting cultural differences and maintaining ethical standards?",
    briefing: "This scenario tests whether you can recognize that moral intuitions vary across cultures, distinguish between moral relativism and moral perception, and navigate situations where cultural differences complicate ethical decision-making.",
    frameworks: ["Moral Perception", "Cultural Relativism", "Operational Ethics", "Partner Nation Dynamics"],
    primaryMission: "Navigate the situation in a way that accomplishes the mission while respecting cultural differences and maintaining your ethical boundaries.",
    successCriteria: [
      "Recognize cultural factors affecting the situation",
      "Distinguish cultural differences from ethical violations",
      "Navigate partner force dynamics appropriately",
      "Make decisions you can justify morally",
      "Maintain relationships for future operations"
    ],
    tags: ["NE-203", "Week 1", "Cross-Cultural Ethics", "Moral Perception", "Partner Nations"]
  },
  {
    id: "ne203-cc-002",
    title: "The Informant",
    subtitle: "Trust Across Cultural Boundaries",
    course: "NE-203",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate trust-building with a local informant whose cultural background creates different expectations about relationships and obligations.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NE203: Ethics and Moral Reasoning",
    situation: "A local civilian has approached offering information. Their cultural expectations about relationships involve long-term obligations, family involvement, and indirect communication. Your institutional expectations involve formal agreements, clear boundaries, and direct communication.",
    dilemma: "Building trust requires meeting cultural expectations, but you have institutional boundaries. You must navigate between relationship-building and appropriate professional limits.",
    briefing: "This scenario tests the ability to build cross-cultural trust while maintaining appropriate professional boundaries and institutional requirements.",
    frameworks: ["Cross-Cultural Trust", "Professional Boundaries", "Relationship Building", "Institutional Ethics"],
    primaryMission: "Navigate the initial meeting successfully, building appropriate trust while maintaining proper professional boundaries.",
    successCriteria: [
      "Recognize cultural expectations at play",
      "Build appropriate trust within boundaries",
      "Communicate clearly across cultural gaps",
      "Navigate competing institutional and cultural demands",
      "Maintain ethical standards"
    ],
    tags: ["NE-203", "Week 1", "Cross-Cultural Ethics", "Trust Building", "Intelligence"]
  },

  // NL-360: Culture and Leadership (5 scenarios)
  {
    id: "nl360-w04-001",
    title: "The Coalition Partner",
    subtitle: "Leading Multinational Teams",
    course: "NL-360",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Lead a multinational team where different cultural approaches to leadership, time, and decision-making create friction.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NL360: Culture and Leadership",
    situation: "You're leading a planning team with members from the US, UK, Germany, and Japan. The British member thinks the Americans rush decisions. The German member insists on thorough process. The Japanese member hasn't spoken but you sense disagreement. Deadline is in two hours.",
    dilemma: "Cultural differences in communication style, decision-making process, and relationship to authority are creating friction. You must lead effectively across these differences while meeting the deadline.",
    briefing: "This scenario tests your ability to recognize different cultural approaches to teamwork and adapt your leadership style to a multicultural context.",
    frameworks: ["Cultural Leadership", "Multinational Teamwork", "Communication Styles", "Time Management"],
    primaryMission: "Lead the multinational team to produce a quality product on time while maintaining team cohesion across cultural differences.",
    successCriteria: [
      "Recognize different cultural work styles",
      "Adapt leadership approach appropriately",
      "Create space for diverse input styles",
      "Meet the deadline without steamrolling",
      "Build team cohesion across cultures"
    ],
    tags: ["NL-360", "Coalition", "Multinational Teams", "Cultural Leadership"]
  },
  {
    id: "nl360-w06-001",
    title: "The Host Nation Commander",
    subtitle: "Partnership and Respect",
    course: "NL-360",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Navigate a relationship with a host nation military commander whose leadership style and expectations differ significantly from yours.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NL360: Culture and Leadership",
    situation: "Colonel Rahman is your counterpart in a partner nation military. His leadership style is more hierarchical and relationship-focused than yours. He's offended by what he sees as American impatience and lack of respect for his experience. But you're also under pressure to show progress.",
    dilemma: "You need to repair the relationship while still meeting your mission requirements. Rushing will make things worse, but you have real deadlines.",
    briefing: "This scenario tests the ability to adapt your leadership and communication style to work effectively with partners from hierarchical, relationship-focused cultures.",
    frameworks: ["Partnership", "Hierarchical Leadership", "Relationship Building", "Cultural Adaptation"],
    primaryMission: "Rebuild the relationship with Colonel Rahman while finding a way to meet mission objectives through culturally appropriate engagement.",
    successCriteria: [
      "Understand his cultural framework",
      "Adapt your approach appropriately",
      "Build genuine relationship",
      "Still accomplish mission objectives",
      "Maintain your integrity"
    ],
    tags: ["NL-360", "Partnership", "Military Advisors", "Relationship Focus"]
  },
  {
    id: "nl360-w08-001",
    title: "Professional Adaptation",
    subtitle: "Navigating Different Workplace Norms",
    course: "NL-360",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Navigate a situation where host nation professional norms differ from American expectations, requiring creative approaches to mission accomplishment.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NL360: Culture and Leadership",
    situation: "Local professional norms and protocols differ from American expectations. Some community members have specific preferences about how meetings are conducted and who participates in certain discussions. Your diverse team brings essential capabilities to the mission.",
    dilemma: "How do you accomplish the mission while respecting local protocols and ensuring your entire team can contribute their expertise?",
    briefing: "This scenario tests the ability to find creative solutions when local norms and your team's needs don't immediately align, requiring cultural sensitivity and problem-solving.",
    frameworks: ["Cultural Protocols", "Team Inclusion", "Creative Problem-Solving", "Mission Accomplishment"],
    primaryMission: "Find an approach that accomplishes the mission while respecting local protocols and enabling all team members to contribute effectively.",
    successCriteria: [
      "Understand the local context and protocols",
      "Find creative, mutually respectful solutions",
      "Maintain mission effectiveness",
      "Ensure all team members can contribute",
      "Build sustainable relationships"
    ],
    tags: ["NL-360", "Cultural Protocols", "Inclusion", "Problem-Solving"]
  },
  {
    id: "nl360-w10-001",
    title: "The Interpreting Challenge",
    subtitle: "Working Through Interpreters",
    course: "NL-360",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate a critical negotiation where your interpreter may be adding their own cultural lens or bias.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NL360: Culture and Leadership",
    situation: "You're negotiating with a village elder through an interpreter. You're noticing that the elder's reactions don't always match what the interpreter tells you was said. The interpreter is local and has their own relationships in play.",
    dilemma: "You suspect filtering or bias in interpretation, but you can't verify it directly. Questioning the interpreter could damage that relationship too.",
    briefing: "This scenario tests the ability to work effectively through interpreters while recognizing that interpretation can be filtered by local relationships and cultural lenses.",
    frameworks: ["Interpreter Dynamics", "Verification Strategies", "Cultural Filtering", "Negotiation"],
    primaryMission: "Navigate the negotiation successfully while developing strategies to verify meaning and build direct rapport where possible.",
    successCriteria: [
      "Recognize interpretation may be filtered",
      "Develop strategies to verify meaning",
      "Navigate the relationship with the interpreter",
      "Accomplish communication objectives",
      "Build direct rapport where possible"
    ],
    tags: ["NL-360", "Interpreters", "Negotiation", "Communication"]
  },
  {
    id: "nl360-w12-001",
    title: "The Ceremony",
    subtitle: "Participating in Cultural Rituals",
    course: "NL-360",
    difficulty: "INT",
    difficultyLevel: 2,
    description: "Participate appropriately in a host nation cultural or religious ceremony.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "NL360: Culture and Leadership",
    situation: "You've been invited to participate in a national day ceremony that includes religious elements. Your participation shows respect; incorrect participation shows disrespect. You're uncertain of the protocols.",
    dilemma: "You want to participate respectfully but don't want to make mistakes that could cause offense. You're uncertain whether to ask questions or just observe and follow.",
    briefing: "This scenario tests the ability to navigate unfamiliar cultural and religious ceremonies with dignity and respect.",
    frameworks: ["Cultural Ceremonies", "Religious Sensitivity", "Protocol Navigation", "Respectful Participation"],
    primaryMission: "Participate in the ceremony appropriately, showing genuine respect while navigating unfamiliar protocols gracefully.",
    successCriteria: [
      "Prepare appropriately",
      "Participate with dignity",
      "Navigate unfamiliar rituals gracefully",
      "Show genuine respect",
      "Represent US Navy positively"
    ],
    tags: ["NL-360", "Ceremonies", "Cultural Protocol", "Religious Sensitivity"]
  },

  // FAS Major: Regional Expertise (5 scenarios)
  {
    id: "fas-ea-001",
    title: "The Consensus",
    subtitle: "Japanese Decision-Making",
    course: "FAS (East Asia Track)",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Navigate Japanese consensus-building (nemawashi) in an alliance coordination context.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "FAS: Foreign Area Studies (East Asia)",
    situation: "A proposal is being discussed. Your Japanese counterparts seem to agree in the meeting but nothing moves forward. You're frustrated by lack of apparent decision-making.",
    dilemma: "Pushing for immediate decisions will be counterproductive, but you have genuine time pressures. You need to understand and work within Japanese consensus processes.",
    briefing: "This scenario tests understanding of Japanese nemawashi (consensus-building) and the ability to achieve outcomes through culturally appropriate processes.",
    frameworks: ["Nemawashi", "Consensus Building", "Japanese Decision-Making", "Alliance Coordination"],
    primaryMission: "Navigate Japanese decision-making processes effectively, achieving outcomes through relationship-building and appropriate pre-meeting groundwork.",
    successCriteria: [
      "Understand nemawashi process",
      "Identify where real decisions happen",
      "Build relationships for pre-meeting consensus",
      "Exercise patience while maintaining urgency",
      "Achieve outcomes through appropriate process"
    ],
    tags: ["FAS", "East Asia", "Japan", "Nemawashi", "Consensus"]
  },
  {
    id: "fas-mena-001",
    title: "The Honor Code",
    subtitle: "Navigating Professional Reputation",
    course: "FAS (MENA Track)",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Navigate a situation where professional reputation and saving face are central to the interaction.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "FAS: Foreign Area Studies (MENA)",
    situation: "A joint operation had a problem that, from your perspective, was clearly the partner nation's error. But addressing it directly would cause your counterpart to lose face. The error needs to be corrected for future operations.",
    dilemma: "You need to fix the problem to prevent future issues, but direct blame would damage the relationship and your counterpart's standing.",
    briefing: "This scenario tests understanding of honor/shame dynamics and the ability to address problems through face-saving approaches.",
    frameworks: ["Honor Culture", "Face-Saving", "Indirect Communication", "Partnership"],
    primaryMission: "Find a way to address the operational issue effectively while preserving your counterpart's dignity and the partnership relationship.",
    successCriteria: [
      "Understand honor/shame dynamics",
      "Find face-saving approaches",
      "Correct the problem effectively",
      "Preserve the relationship",
      "Maintain your integrity"
    ],
    tags: ["FAS", "MENA", "Honor Culture", "Face-Saving", "Partnership"]
  },
  {
    id: "fas-la-001",
    title: "The Personalismo",
    subtitle: "Relationship-Centered Business",
    course: "FAS (Latin America Track)",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate a business relationship where personal connection (personalismo) is essential to professional success.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "FAS: Foreign Area Studies (Latin America)",
    situation: "You're trying to coordinate a joint exercise but your counterpart seems more interested in extended social conversation than getting to the agenda. Your timeline is pressing, but rushing is clearly counterproductive.",
    dilemma: "Rushing to business would be rude and counterproductive, but you have real deadlines. You must invest in relationship while still achieving your objectives.",
    briefing: "This scenario tests understanding of personalismo culture and the ability to achieve results through relationship investment rather than task-focus alone.",
    frameworks: ["Personalismo", "Relationship Building", "Task vs Relationship", "Latin American Culture"],
    primaryMission: "Build the personal relationship required for effective partnership while still making progress on exercise coordination.",
    successCriteria: [
      "Understand personalismo culture",
      "Invest in relationship appropriately",
      "Find balance between social and business",
      "Achieve objectives through relationship",
      "Build long-term partnership foundation"
    ],
    tags: ["FAS", "Latin America", "Personalismo", "Relationship Building"]
  },
  {
    id: "fas-af-001",
    title: "The Community",
    subtitle: "Collective Decision Structures",
    course: "FAS (Africa Track)",
    difficulty: "HARD",
    difficultyLevel: 4,
    description: "Navigate decision-making in a context where community consultation and collective agreement are important parts of the process.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "FAS: Foreign Area Studies (Africa)",
    situation: "You've been meeting with a respected community leader about a partnership initiative. He explains that important decisions involve consultation with other community stakeholders before commitments can be made. Your timeline anticipated faster decision-making.",
    dilemma: "Your timeline assumed individual decision-making authority, but this context requires broader consultation. Pushing will undermine trust; patience may exceed your flexibility.",
    briefing: "This scenario tests understanding of collective decision-making processes and the ability to adapt approaches to achieve sustainable outcomes.",
    frameworks: ["Collective Decision-Making", "Community Consultation", "African Leadership", "Sustainable Partnerships"],
    primaryMission: "Engage appropriately with the community decision-making process, adapting your approach to achieve sustainable outcomes through proper channels.",
    successCriteria: [
      "Understand local decision-making processes",
      "Engage appropriate stakeholders respectfully",
      "Adapt timeline expectations appropriately",
      "Build relationships that support the initiative",
      "Achieve sustainable outcomes through proper process"
    ],
    tags: ["FAS", "Africa", "Community Decision-Making", "Stakeholder Engagement"]
  },
  {
    id: "fas-eu-001",
    title: "The Directness",
    subtitle: "European Communication Styles",
    course: "FAS (Europe Track)",
    difficulty: "INT",
    difficultyLevel: 3,
    description: "Navigate different communication styles across European allies in a multinational meeting.",
    image: "placeholder",
    area: "Cross-Cultural",
    courseCode: "FAS: Foreign Area Studies (Europe)",
    situation: "You're in a meeting with colleagues from several European allied nations. You notice significant variation in communication styles - some colleagues are very direct in their feedback, others communicate more indirectly or use humor that may have hidden meanings. All are committed allies working toward common goals.",
    dilemma: "Different communication styles can create friction or misunderstanding even among allies. You must interpret various styles accurately and adapt your own communication for clarity.",
    briefing: "This scenario tests the ability to work effectively across varied European communication styles within the alliance context.",
    frameworks: ["European Communication", "Direct vs Indirect", "Alliance Dynamics", "Cultural Interpretation"],
    primaryMission: "Navigate the meeting successfully, building cohesion across different communication styles while ensuring clear understanding and progress.",
    successCriteria: [
      "Recognize that communication styles vary across individuals and cultures",
      "Avoid taking different styles personally",
      "Pay attention to both direct and indirect communication",
      "Adapt your own communication for clarity",
      "Build cohesive alliance team"
    ],
    tags: ["FAS", "Europe", "NATO", "Communication Styles", "Alliance"]
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
