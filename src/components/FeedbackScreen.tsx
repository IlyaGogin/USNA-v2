import svgPaths from "../imports/svg-x61tr0380k";
import imgRectangle12176 from "figma:asset/4cc0eab7cce4bc40b38d346117c0b34c9a705863.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";
import imgFrame2043682546 from "figma:asset/241d003cbb5e1b8c9408ea2d5ed8d6aee35e0646.png";
import imgFrame2043682475 from "figma:asset/6ef0060730ce05f8f38ac72753d96213f10dcfef.png";
import imgEllipse2 from "figma:asset/30055d4db907cb64cc8a54daeacc28bb11169364.png";

interface FeedbackScreenProps {
  scenarioTitle: string;
  userName: string;
  userInitials: string;
  role: 'instructor' | 'midshipman';
  onTryAnother?: () => void;
  onBack?: () => void;
  onTabChange?: ((tab: 'dashboard' | 'scenarios' | 'students' | 'assignments' | 'analytics') => void) | ((tab: string) => void);
}

const FEEDBACK_DATA: Record<string, any> = {
  'The Flight Test': {
    overall: 72,
    overallText: 'You demonstrated proficient ability to articulate technical concerns under authority pressure, with particular strength in expressing your engineering judgment clearly. You showed moral courage in raising the issue despite implicit organizational pressure. You could have explored the downstream safety implications more thoroughly and been more explicit about your recommendation.',
    strengths: [
      'Clearly articulated specific technical observations with data',
      'Maintained respectful tone while advocating for your position',
      'Acknowledged limits of your experience while standing by your concern',
      'Asked Dr. Vance to explain the reasoning rather than just dismissing your worry'
    ],
    growth: [
      'Explore what happens if this issue manifests during operational use',
      'Ask explicitly what additional testing or analysis could resolve your concern',
      'Discuss whether this should be disclosed to the Navy program office',
      'Consider your responsibility if you stay silent and something goes wrong'
    ],
    categories: [
      {
        title: 'Technical Clarity',
        score: 85,
        rating: 'Proficient',
        description: 'You explained the temperature spike pattern precisely and accurately',
        quote: 'I saw the spike at 1,847°F twice during high-G maneuvers. It\'s within the 1,850°F limit, but the pattern concerns me—it\'s at 99.8% of maximum, and it repeated under similar stress conditions.'
      },
      {
        title: 'Moral Courage',
        score: 78,
        rating: 'Proficient',
        description: 'You maintained your concern despite authority pressure and dismissal',
        quote: 'I understand you\'ve seen this before, Dr. Vance, and I respect your experience. But I need to say—I\'d rather delay one day and be certain than move forward and be wrong.'
      },
      {
        title: 'Consequence Analysis',
        score: 58,
        rating: 'Developing',
        description: 'You identified immediate risks but didn\'t fully explore long-term safety implications',
        quote: 'If something goes wrong during the Navy\'s test tomorrow, it could be catastrophic. [You focused on the immediate test but didn\'t discuss implications for operational deployment, crew safety, or future flights under similar conditions]'
      },
      {
        title: 'Professional Judgment',
        score: 75,
        rating: 'Proficient',
        description: 'You balanced deference to experience with responsibility to advocate for safety',
        quote: 'I\'m not saying I know better than the team. But I\'m the one who found this pattern, and I need to understand why it\'s acceptable before I can sign off on it feeling confident.'
      }
    ]
  },
  'The Quick Decision': {
    overall: 81,
    overallText: 'You demonstrated strong awareness of being pushed into fast thinking, with excellent self-regulation under social pressure. You asked clarifying questions before committing and recognized how Alex\'s stress influenced your initial impulse. You could have been more explicit about acknowledging the time constraint while still gathering necessary information.',
    strengths: [
      'Noticed the feeling of being rushed before reacting',
      'Asked questions without making Alex feel bad for asking',
      'Identified what information you actually needed to decide',
      'Found a solution that balanced helping with being responsible'
    ],
    growth: [
      'Practice naming the dynamic explicitly: "I notice we\'re both feeling time pressure"',
      'Consider what makes it hard to slow down even when it\'s the right thing to do',
      'Reflect on other situations where you react automatically to social pressure',
      'Think about how to help others slow down when they\'re rushing you'
    ],
    categories: [
      {
        title: 'System 1/2 Awareness',
        score: 88,
        rating: 'Advanced',
        description: 'You recognized the pressure to react automatically and deliberately slowed down',
        quote: 'Wait—I want to help, but I\'m feeling rushed and I don\'t actually know enough to do this right. Let me ask a few quick questions first.'
      },
      {
        title: 'Information Gathering',
        score: 85,
        rating: 'Proficient',
        description: 'You asked key clarifying questions despite time pressure',
        quote: 'Who is Marcus exactly—do you mean Marcus in Engineering? And why can\'t this be a text? Is there something specific about delivering this in person?'
      },
      {
        title: 'Self-Regulation',
        score: 78,
        rating: 'Proficient',
        description: 'You managed the social pressure to just say yes without making Alex feel dismissed',
        quote: 'I can see you\'re stressed and I genuinely want to help. But I need 30 more seconds to make sure I do this right rather than make things worse by delivering a message to the wrong person.'
      },
      {
        title: 'Decision Quality',
        score: 72,
        rating: 'Proficient',
        description: 'You made a deliberate choice based on information rather than impulse',
        quote: 'Okay, here\'s what I can do—I\'ll text Marcus in Engineering right now while you\'re in your presentation. If that doesn\'t work for some reason, explain why and I\'ll figure out plan B. [You found a solution that addressed the need while accounting for what you didn\'t know]'
      }
    ]
  },
  'The Difficult Conversation': {
    overall: 76,
    overallText: 'You demonstrated proficient ability to deliver difficult feedback directly while maintaining relational care. You addressed the missed deadlines explicitly and listened to understand Jordan\'s situation. You balanced accountability with empathy throughout. You could have been clearer about specific expectations going forward and explored concrete support you could offer.',
    strengths: [
      'Named the specific issue with concrete examples',
      'Expressed care for Jordan while maintaining accountability',
      'Listened to understand before proposing solutions',
      'Made it clear this conversation came from respect, not criticism'
    ],
    growth: [
      'Be explicit about what needs to change: "Here\'s what I need from you going forward"',
      'Offer specific support: "Would it help if we redistributed some tasks or adjusted deadlines?"',
      'Get commitment: "Can you commit to the next milestone on Tuesday?"',
      'Follow up: "Let\'s check in midweek to make sure you\'re on track"'
    ],
    categories: [
      {
        title: 'Honest Communication',
        score: 82,
        rating: 'Proficient',
        description: 'You addressed the issue directly without softening it into vague feedback',
        quote: 'Jordan, I need to talk with you about something that\'s affecting the team. You\'ve missed two deadlines in the past two weeks—the stakeholder analysis last Monday and the draft recommendations on Friday.'
      },
      {
        title: 'Relational Care',
        score: 85,
        rating: 'Proficient',
        description: 'You showed genuine concern for Jordan as a person while holding them accountable',
        quote: 'I can see you\'re dealing with a lot right now, and I really respect your work and what you bring to this team. That\'s exactly why I wanted to have this conversation—because you matter to this project and to me.'
      },
      {
        title: 'Leadership Presence',
        score: 68,
        rating: 'Developing',
        description: 'You listened and empathized but weren\'t clear enough about path forward',
        quote: 'I hear you about what\'s going on. That sounds really hard. [You validated Jordan\'s challenges but didn\'t establish clear expectations or offer specific ways to help them succeed in the final push]'
      },
      {
        title: 'Constructive Problem-Solving',
        score: 72,
        rating: 'Proficient',
        description: 'You explored causes before jumping to solutions',
        quote: 'Help me understand what\'s been getting in the way. Is it the workload, something going on outside the program, or something about how the team is working together? [You asked open questions to understand root causes]'
      }
    ]
  },
  'The Accountability Question': {
    overall: 74,
    overallText: 'You demonstrated proficient understanding of leadership accountability by taking appropriate ownership for the outcome while providing honest analysis of contributing factors. You identified your own oversight failures and showed self-awareness about your development areas. You could have been more explicit about specific actions you\'ll take differently as a leader going forward.',
    strengths: [
      'Took ownership immediately without making excuses',
      'Acknowledged both your failures and your teammate\'s challenges fairly',
      'Recognized your role in creating conditions for the failure',
      'Showed you understand leadership means responsibility for outcomes you didn\'t directly create'
    ],
    growth: [
      'Explain specifically what you\'ll do differently on the next review',
      'Reflect on why you focused on your section instead of the whole project',
      'Discuss what would have helped you notice your teammate was struggling earlier',
      'Consider how this experience changes your understanding of command responsibility'
    ],
    categories: [
      {
        title: 'Ownership',
        score: 79,
        rating: 'Proficient',
        description: 'You took clear responsibility as project lead without deflecting',
        quote: 'This is my responsibility as project lead. I own this outcome. There were things I should have seen and didn\'t, and decisions I should have made differently.'
      },
      {
        title: 'Fairness',
        score: 82,
        rating: 'Proficient',
        description: 'You acknowledged your teammate\'s role without scapegoating them',
        quote: 'One team member struggled with their section, and I didn\'t catch it in time. But I created the environment where they didn\'t feel comfortable asking for help—that\'s on me as the leader, not on them for struggling.'
      },
      {
        title: 'Self-Awareness',
        score: 68,
        rating: 'Developing',
        description: 'You identified some failures but didn\'t deeply analyze your own decision-making',
        quote: 'I was focused on the technical work I was directly responsible for and didn\'t check in enough on other sections. [True, but doesn\'t show reflection on why you made that choice or what belief about leadership led to that approach]'
      },
      {
        title: 'Growth Orientation',
        score: 65,
        rating: 'Developing',
        description: 'You acknowledged needing to improve but weren\'t specific about how',
        quote: 'I need to be better at seeing the whole project, not just my pieces. [What specifically will you do differently? How will you know if you\'re improving?]'
      }
    ]
  },
  'The Inner Ring': {
    overall: 78,
    overallText: 'You demonstrated developing proficiency in ethical reasoning, with particular strength in understanding constraints and special obligations. You recognized the ethical concerns but could have explored the full scope of consequences more thoroughly.',
    strengths: [
      'Immediate recognition of Honor Concept violation',
      'Connected decision to future leadership identity',
      'Considered impact on excluded peers'
    ],
    growth: [
      'Explore systematic consequences beyond personal impact',
      'Consider duty to report vs. duty to peers',
      'Develop strategies for maintaining relationships while declining'
    ],
    categories: [
      {
        title: 'Constraints',
        score: 85,
        rating: 'Proficient',
        description: 'You clearly identified the Honor Concept violation. Work on applying the same clarity to situations where the rules are less explicit.',
        quote: 'This clearly violates the Honor Concept - they\'re sharing exam information, which is cheating. I can\'t be part of that even if it helps my grades.'
      },
      {
        title: 'Consequences',
        score: 65,
        rating: 'Developing',
        description: 'You focused on personal impacts but missed broader effects on the brigade, excluded peers, and your future credibility as a leader.',
        quote: 'If I join, I\'ll feel guilty. If I don\'t join, they might exclude me from other things.'
      },
      {
        title: 'Character',
        score: 82,
        rating: 'Proficient',
        description: 'Excellent connection to your officer identity. Next time, explain how declining this invitation actively builds the character you want to develop.',
        quote: 'As an officer, I need to be someone my sailors can trust. If I compromise now on something I know is wrong, where do I draw the line later?'
      },
      {
        title: 'Special Obligations',
        score: 75,
        rating: 'Proficient',
        description: 'You recognized your duty to excluded classmates. Consider also your obligation to the institution and whether staying silent about cheating upholds that duty.',
        quote: 'I should tell the classmates being left out what\'s happening - they deserve to know.'
      }
    ]
  },
  'Milgram Obedience - Authority and Moral Agency': {
    overall: 82,
    overallText: 'You demonstrated high moral agency while maintaining professional military protocol. You recognized the ethical conflict of falsifying records early and effectively navigated the chain of command pressures from CDR Wilkins.',
    strengths: [
      'Recognized the illegality of falsifying maintenance logs',
      'Maintained professional inquiry without becoming insubordinate',
      'Correctly identified escalation paths to the XO or CO'
    ],
    growth: [
      'Deepen awareness of career trajectory threats as a psychological pressure',
      'Articulate the safety implications of incomplete documentation more explicitly',
      'Reference specific Navy regulations or UCMJ articles'
    ],
    categories: [
      {
        title: 'Order Recognition',
        score: 88,
        rating: 'Proficient',
        description: 'You correctly identified that the order to backdate logs was ethically problematic and potentially illegal under Navy regulations.',
        quote: 'Ma\'am, I have concerns about signing off on incomplete inspections. It doesn\'t align with our maintenance protocols.'
      },
      {
        title: 'Moral Agency',
        score: 85,
        rating: 'Proficient',
        description: 'You demonstrated clear understanding that personal responsibility cannot be delegated to authority, even when "full responsibility" is offered.',
        quote: 'I understand the XO is involved, but I\'m the one signing the log. I have to take personal accountability for its accuracy.'
      },
      {
        title: 'Professional Inquiry',
        score: 80,
        rating: 'Proficient',
        description: 'You asked excellent clarifying questions about alternatives and timelines while maintaining appropriate military decorum.',
        quote: 'Could we expedite the final inspection tomorrow morning to ensure the logs are complete before the ORE begins?'
      },
      {
        title: 'Authority Navigation',
        score: 75,
        rating: 'Proficient',
        description: 'You balanced respect for CDR Wilkins with your ethical duty. You correctly recognized when to suggest escalating the concern through channels.',
        quote: 'I respect your position, but if the order stands, I may need to consult with the XO directly to clarify these requirements.'
      }
    ]
  },
  'Inside the Wire': {
    overall: 78,
    overallText: 'You demonstrated developing proficiency in ethical reasoning, with particular strength in understanding constraints and special obligations. You recognized the ethical concerns but could have explored the full scope of consequences more thoroughly.',
    strengths: [
      'Immediate recognition of Honor Concept violation',
      'Connected decision to future leadership identity',
      'Considered impact on excluded peers'
    ],
    growth: [
      'Explore systematic consequences beyond personal impact',
      'Consider duty to report vs. duty to peers',
      'Develop strategies for maintaining relationships while declining'
    ],
    categories: [
      {
        title: 'Constraints',
        score: 85,
        rating: 'Proficient',
        description: 'You clearly identified the Honor Concept violation. Work on applying the same clarity to situations where the rules are less explicit.',
        quote: 'This clearly violates the Honor Concept - they\'re sharing exam information, which is cheating. I can\'t be part of that even if it helps my grades.'
      },
      {
        title: 'Consequences',
        score: 65,
        rating: 'Developing',
        description: 'You focused on personal impacts but missed broader effects on the brigade, excluded peers, and your future credibility as a leader.',
        quote: 'If I join, I\'ll feel guilty. If I don\'t join, they might exclude me from other things.'
      },
      {
        title: 'Character',
        score: 82,
        rating: 'Proficient',
        description: 'Excellent connection to your officer identity. Next time, explain how declining this invitation actively builds the character you want to develop.',
        quote: 'As an officer, I need to be someone my sailors can trust. If I compromise now on something I know is wrong, where do I draw the line later?'
      },
      {
        title: 'Special Obligations',
        score: 75,
        rating: 'Proficient',
        description: 'You recognized your duty to excluded classmates. Consider also your obligation to the institution and whether staying silent about cheating upholds that duty.',
        quote: 'I should tell the classmates being left out what\'s happening - they deserve to know.'
      }
    ]
  }
};

export function FeedbackScreen({ scenarioTitle, userName, userInitials, role, onTryAnother, onBack, onTabChange }: FeedbackScreenProps) {
  const data = FEEDBACK_DATA[scenarioTitle] || FEEDBACK_DATA['Inside the Wire'];

  return (
    <div className="bg-[#efeef7] relative size-full min-h-screen">
      {/* Midshipman Header - only shown for midshipman role */}
      {role === 'midshipman' && (
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[12px] top-0 w-full z-10">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#05205d] inset-0" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2043682546} />
          </div>
          
          {/* Logo */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-end-auto col-start-1 ml-0 mt-0 relative row-end-auto row-start-1 size-[54px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
            </div>
            <div className="col-end-auto col-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.45px] mt-[14.11px] place-items-start relative row-end-auto row-start-1">
              <div className="bg-white col-end-auto col-start-1 h-[30.068px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.227px] mask-size-[85.909px_28.227px] ml-[-1.23px] mt-[-1.23px] row-end-auto row-start-1 w-[87.75px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <button onClick={() => onTabChange?.('dashboard')} className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Dashboard</p>
              </div>
            </button>
            <button onClick={() => onTabChange?.('scenarios')} className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Scenarios</p>
              </div>
            </button>
            <button onClick={() => onTabChange?.('skills')} className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Skills Profile</p>
              </div>
            </button>
            <button onClick={() => onTabChange?.('physical')} className="content-stretch flex flex-col h-[35px] items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Physical Development</p>
              </div>
            </button>
          </div>

          {/* User Avatar */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[48px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" fill="#1D5282" r="24" />
              </svg>
              <p className="absolute font-medium leading-[20px] left-[50%] text-[16px] text-center text-nowrap text-white top-[50%] translate-x-[-50%] translate-y-[-50%]">{userInitials}</p>
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar */}
      <div className={`absolute bg-[#e8e6f3] overflow-y-auto ${role === 'midshipman' ? 'inset-[78px_67.59%_0_0]' : 'inset-[0_67.59%_0_0]'}`}>
        <div className="content-stretch flex flex-col gap-[32px] p-[40px] items-start min-h-full">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative rounded-[1000px] shrink-0 hover:bg-[rgba(13,0,77,0.05)] transition-colors border-2 border-[#0d004d] border-solid"
          >
            <div className="content-stretch flex items-center relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p3dc50bc0} fill="#0D004D" fillRule="evenodd" />
              </svg>
            </div>
            <p className="font-medium leading-[16px] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">Back</p>
          </button>

          {/* Title Section */}
          <div className="content-stretch flex flex-col font-medium gap-[16px] items-start relative shrink-0 w-full">
            <p className="leading-[28px] relative shrink-0 text-[#0074dd] text-[20px] tracking-[-0.4px]">Your results</p>
            <p className="leading-[56px] relative shrink-0 text-[#171717] text-[48px] tracking-[-0.96px]">{scenarioTitle}</p>
          </div>

          {/* Try Another Scenario Button */}
          <button
            onClick={onTryAnother}
            className="bg-[#ffce00] hover:bg-[#fcc32b] transition-colors content-stretch flex items-center relative shrink-0 w-full rounded-[1000px]"
          >
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
              <p className="font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Try another scenario</p>
            </div>
          </button>

          {/* Overall Performance Card */}
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute inset-0 rounded-[12px] bg-[#05205d]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame2043682475} />
              <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundImage: "linear-gradient(167.382114deg, rgba(97, 209, 152, 0) 40.731%, rgba(97, 209, 152, 0.24) 101.13%)" }} />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0">
                  <p className="font-medium leading-[22px] relative shrink-0 text-[#e8e8e8] text-[18px]">Overall<br />performance</p>
                </div>
                <p className="font-normal leading-[120px] relative shrink-0 text-[120px] text-nowrap text-right text-white ml-auto">{data.overall}</p>
              </div>
              <div className="h-[1px] relative shrink-0 w-full bg-[#61d198]" />
              <p className="font-normal leading-[22px] relative shrink-0 text-[#61d198] text-[14px]">{data.overallText}</p>
            </div>
          </div>

          {/* Strengths Section */}
          <div className="bg-[#f6f6fb] rounded-[8px] w-full">
            <div className="flex flex-col w-full">
              {data.strengths.map((strength: string, idx: number) => (
                <div key={idx} className={`flex gap-[12px] items-center px-[16px] py-[16px] ${idx !== data.strengths.length - 1 ? 'border-b border-[rgba(13,0,77,0.15)]' : ''}`}>
                  <div className="bg-[rgba(0,176,87,0.1)] flex items-center justify-center rounded-full size-[40px] shrink-0">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p368ccf00} fill="#006632" />
                    </svg>
                  </div>
                  <p className="font-medium leading-[20px] text-[#171717] text-[16px] flex-1">{strength}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Opportunities Section */}
          <div className="bg-[#f6f6fb] rounded-[8px] w-full">
            <div className="flex flex-col w-full">
              {data.growth.map((opportunity: string, idx: number) => (
                <div key={idx} className={`flex gap-[12px] items-center px-[16px] py-[16px] ${idx !== data.growth.length - 1 ? 'border-b border-[rgba(13,0,77,0.15)]' : ''}`}>
                  <div className="bg-[rgba(255,54,42,0.1)] flex items-center justify-center rounded-full size-[40px] shrink-0">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.pe839500} fill="#B20900" />
                    </svg>
                  </div>
                  <p className="font-medium leading-[20px] text-[#171717] text-[16px] flex-1">{opportunity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Area - Detailed Scores */}
      <div className={`absolute content-stretch flex flex-col gap-[20px] items-start pb-[40px] pt-[24px] px-[40px] overflow-y-auto ${role === 'midshipman' ? 'inset-[78px_0_0_32.41%]' : 'inset-[0_0_0_32.41%]'}`}>
        <div className="flex flex-col gap-[20px] w-full">
          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-[20px] items-stretch relative shrink-0 w-full">
            {data.categories.map((category: any, idx: number) => (
              <div key={idx} className="bg-white relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(13,0,77,0.05),0px_1px_1px_0px_rgba(13,0,77,0.1),0px_2px_1px_-1px_rgba(13,0,77,0.15)]">
                <div className="flex flex-col gap-[16px] items-start p-[24px]">
                  <div className="flex gap-[10px] items-start w-full">
                    <div className="flex flex-col gap-[12px] flex-1">
                      <p className="font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">{category.title}</p>
                      <p className="font-medium leading-[20px] text-[#0074dd] text-[16px]">{category.rating}</p>
                    </div>
                    <p className="font-medium leading-[56px] text-[#171717] text-[48px] text-nowrap tracking-[-0.96px]">{category.score}</p>
                  </div>
                  <div className="h-[1px] w-full bg-[rgba(13,0,77,0.15)]" />
                  <p className="font-normal leading-[24px] text-[#5d5d5d] text-[16px] h-[72px] overflow-hidden">{category.description}</p>
                  <div className="bg-[#f6f6fb] rounded-[4px] w-full p-[8px] flex gap-[8px]">
                    <img src={imgEllipse2} alt="" className="size-[32px] shrink-0" />
                    <p className="font-medium leading-[20px] text-[#464646] text-[16px] italic">"{category.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}