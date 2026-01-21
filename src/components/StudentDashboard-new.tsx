import { useState } from 'react';
import { BookOpen, Award, Search, LogOut, Play, CheckCircle2, Clock, Target, Shield, TrendingUp, RotateCcw, Eye, CheckCircle, Star } from 'lucide-react';
import { ScenarioCard } from './ScenarioCard';
import { mockScenarios } from '../data/mockScenarios';
import { Scenario } from '../App';
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

interface StudentDashboardProps {
  userName: string;
  onStartSimulation: (scenario: Scenario) => void;
  onLogout: () => void;
}

export function StudentDashboard({ userName, onStartSimulation, onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<'assigned' | 'completed' | 'profile'>('assigned');
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('all');
  const [selectedMasteryCourse, setSelectedMasteryCourse] = useState('NE-203');

  // Simulate assigned scenarios (published ones)
  const assignedScenarios = mockScenarios.filter(s => s.status === 'published');
  
  // Simulate completed scenarios
  const completedScenarios = mockScenarios.filter(s => s.status === 'completed');

  const filteredAssignedScenarios = assignedScenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === 'all' || scenario.course === classFilter;
    return matchesSearch && matchesClass;
  });

  const filteredCompletedScenarios = completedScenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === 'all' || scenario.course === classFilter;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      {/* Sidebar */}
      <div className="w-[280px] bg-[#1d5282] flex flex-col">
        {/* Logo & User */}
        <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-[60px]">
              <img alt="USNA Logo" className="object-cover size-full rounded-full" src={imgImage17} />
            </div>
            <div>
              <h1 className="text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px]">USNA</h1>
              <p className="text-[#fcc32a] text-[12px]">Leadership & Ethics</p>
            </div>
          </div>
          
          {/* Proficiency Badge */}
          <div className="bg-[rgba(252,195,42,0.15)] border-2 border-[#fcc32a] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="size-5 text-[#fcc32a]" />
              <span className="text-[#fcc32a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px]">Proficient</span>
            </div>
            <p className="text-white text-[11px]">Character Development</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <button
            onClick={() => setActiveTab('assigned')}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
              activeTab === 'assigned'
                ? 'bg-[rgba(252,195,42,0.1)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <BookOpen className={`size-[18px] ${activeTab === 'assigned' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <div className="flex-1 text-left">
              <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] ${
                activeTab === 'assigned' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
              }`}>
                ASSIGNED
              </p>
              <p className="text-[#a2a2a2] text-[11px]">20 scenarios</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
              activeTab === 'completed'
                ? 'bg-[rgba(252,195,42,0.1)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <CheckCircle2 className={`size-[18px] ${activeTab === 'completed' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <div className="flex-1 text-left">
              <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] ${
                activeTab === 'completed' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
              }`}>
                COMPLETED
              </p>
              <p className="text-[#a2a2a2] text-[11px]">3 scenarios</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
              activeTab === 'profile'
                ? 'bg-[rgba(252,195,42,0.1)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <Target className={`size-[18px] ${activeTab === 'profile' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <div className="flex-1 text-left">
              <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] ${
                activeTab === 'profile' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
              }`}>
                SKILLS PROFILE
              </p>
              <p className="text-[#a2a2a2] text-[11px]">Character Development</p>
            </div>
          </button>
        </nav>

        {/* User Profile */}
        <div className="p-6 border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px]">{userName}</p>
              <p className="text-[#a2a2a2] text-[12px]">Midshipman 3/C</p>
            </div>
            <button
              onClick={onLogout}
              className="text-[#e8e8e8] hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="size-[20px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-2">
              {activeTab === 'profile' ? 'Character Development Profile' : `Welcome, ${userName}`}
            </h1>
            <p className="text-[#666666] text-[16px]">
              {activeTab === 'profile' 
                ? 'Monitor your growth across USNA Leadership, Ethics, and Law competencies'
                : activeTab === 'assigned'
                ? 'Complete character development scenarios aligned to your LEL coursework'
                : 'Review your completed character development scenarios and debriefings'
              }
            </p>
          </div>

          {activeTab !== 'profile' && (
            <>
              {/* Filters */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-[18px] text-[#666666]" />
                  <input
                    type="text"
                    placeholder="Search scenarios..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-[rgba(0,0,0,0.15)] rounded-lg pl-10 pr-4 py-3 text-[#1a1a1a] placeholder-[#999999] focus:outline-none focus:border-[#1d5282] transition-colors"
                  />
                </div>
                
                <select
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                  className="bg-white border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#1d5282] transition-colors min-w-[200px]"
                >
                  <option value="all">All Courses</option>
                  <option value="NE-201">NE-201: Leadership</option>
                  <option value="NE-203">NE-203: Ethics</option>
                  <option value="NE-310">NE-310: Advanced Leadership</option>
                </select>
              </div>
            </>
          )}

          {/* Assigned Scenarios */}
          {activeTab === 'assigned' && (
            <div className="space-y-8">
              {/* Assigned Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="size-6 text-[#1d5282]" />
                <div>
                  <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px]">
                    Assigned Scenarios
                  </h2>
                  <p className="text-[#666666] text-[14px]">{filteredAssignedScenarios.length} scenarios ready to complete</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {filteredAssignedScenarios.map(scenario => (
                  <ScenarioCard 
                    key={scenario.id} 
                    scenario={scenario} 
                    onStart={() => onStartSimulation(scenario)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed Scenarios */}
          {activeTab === 'completed' && (
            <div className="space-y-8">
              {/* Completed Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="size-6 text-[#4ade80]" />
                <div>
                  <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px]">
                    Completed Scenarios
                  </h2>
                  <p className="text-[#666666] text-[14px]">{filteredCompletedScenarios.length} scenarios completed with debriefings</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {filteredCompletedScenarios.map(scenario => (
                  <ScenarioCard 
                    key={scenario.id} 
                    scenario={scenario} 
                    onViewDebrief={() => console.log('View debrief:', scenario.id)}
                    onRetry={() => onStartSimulation(scenario)}
                  />
                ))}
              </div>

              {/* Skills Mastery by Course */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(0,0,0,0.06)]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-2">
                      Skills Mastery by Course
                    </h2>
                    <p className="text-[#666666] text-[15px]">
                      Track your skill development across all LEL courses
                    </p>
                  </div>
                  <select
                    value={selectedMasteryCourse}
                    onChange={(e) => setSelectedMasteryCourse(e.target.value)}
                    className="bg-white border-2 border-[#1d5282] rounded-lg px-4 py-2 text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1d5282]/20 transition-all cursor-pointer min-w-[280px]"
                  >
                    <option value="NE-203">NE-203: Ethics</option>
                    <option value="NE-201">NE-201: Leadership</option>
                    <option value="NE-310">NE-310: Advanced Leadership</option>
                  </select>
                </div>

                {/* NE-203: Ethics */}
                {selectedMasteryCourse === 'NE-203' && (
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#e0e0e0]">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] mb-1">NE-203: Ethics</h3>
                        <p className="text-[#666666] text-[15px]">Moral reasoning and ethical decision-making</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[48px] leading-none">88%</span>
                        <p className="text-[#999999] text-[14px] mt-1">Overall Mastery</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Constraints</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">88</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '88%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Consequences</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">91</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '91%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Character</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">86</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '86%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Special Obligations</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">89</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '89%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NE-201: Leadership */}
                {selectedMasteryCourse === 'NE-201' && (
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#e0e0e0]">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] mb-1">NE-201: Leadership</h3>
                        <p className="text-[#666666] text-[15px]">Foundations of leadership and organizational behavior</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[48px] leading-none">85%</span>
                        <p className="text-[#999999] text-[14px] mt-1">Overall Mastery</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Decision Making</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">92</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Team Dynamics</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">83</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '83%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Communication</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">87</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '87%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Strategic Vision</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">79</span>
                          <span className="text-[#666666] text-[18px] mb-1">%</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#1d5282] h-2.5 rounded-full transition-all duration-500" style={{width: '79%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NE-310: Advanced Leadership (Not Started) */}
                {selectedMasteryCourse === 'NE-310' && (
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#e0e0e0]">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] mb-1">NE-310: Advanced Leadership</h3>
                        <p className="text-[#666666] text-[15px]">Strategic leadership and organizational change</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[48px] leading-none">—</span>
                        <p className="text-[#999999] text-[14px] mt-1">Not Started</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-[#f8f9fa] rounded-xl p-5 opacity-50">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Systems Thinking</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">—</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#cccccc] h-2.5 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5 opacity-50">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Change Management</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">—</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#cccccc] h-2.5 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5 opacity-50">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Crisis Leadership</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">—</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#cccccc] h-2.5 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-xl p-5 opacity-50">
                        <p className="text-[#666666] text-[13px] mb-3 uppercase tracking-wide">Cultural Leadership</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] leading-none">—</span>
                        </div>
                        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
                          <div className="bg-[#cccccc] h-2.5 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Skills Profile Content - NEW STRUCTURE */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Top Level Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="size-5 text-[#666666]" />
                    <p className="text-[#666666] text-[13px] uppercase tracking-wide">Assigned</p>
                  </div>
                  <p className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px]">20</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="size-5 text-[#fcc32a]" />
                    <p className="text-[#666666] text-[13px] uppercase tracking-wide">In Progress</p>
                  </div>
                  <p className="text-[#fcc32a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px]">1</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="size-5 text-[#4ade80]" />
                    <p className="text-[#666666] text-[13px] uppercase tracking-wide">Completed</p>
                  </div>
                  <p className="text-[#4ade80] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px]">3</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="size-5 text-[#1d5282]" />
                    <p className="text-[#666666] text-[13px] uppercase tracking-wide">Avg Score</p>
                  </div>
                  <p className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px]">88%</p>
                </div>
              </div>

              {/* Navy Core Values Alignment */}
              <div className="bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] rounded-2xl p-8 text-white shadow-lg">
                <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-6 flex items-center gap-3">
                  <Shield className="size-7" />
                  Navy Core Values Alignment
                </h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px] mb-2">Honor</h3>
                    <p className="text-white/80 text-[13px] mb-4">Commitment to ethical conduct and moral courage</p>
                    <div className="flex items-end gap-2">
                      <span className="text-[42px] font-['Plus_Jakarta_Sans:Bold',sans-serif]">92</span>
                      <span className="text-[18px] mb-2 text-white/60">%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div className="bg-[#fcc32a] h-2 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px] mb-2">Courage</h3>
                    <p className="text-white/80 text-[13px] mb-4">Ability to face adversity and take principled stands</p>
                    <div className="flex items-end gap-2">
                      <span className="text-[42px] font-['Plus_Jakarta_Sans:Bold',sans-serif]">85</span>
                      <span className="text-[18px] mb-2 text-white/60">%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div className="bg-[#fcc32a] h-2 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[18px] mb-2">Commitment</h3>
                    <p className="text-white/80 text-[13px] mb-4">Dedication to mission and continuous development</p>
                    <div className="flex items-end gap-2">
                      <span className="text-[42px] font-['Plus_Jakarta_Sans:Bold',sans-serif]">90</span>
                      <span className="text-[18px] mb-2 text-white/60">%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div className="bg-[#fcc32a] h-2 rounded-full transition-all duration-500" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Four Moral Factors (NE-203 Framework) */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(0,0,0,0.06)]">
                <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-6 flex items-center gap-3">
                  <Target className="size-7 text-[#1d5282]" />
                  Four Moral Factors (NE-203 Ethics)
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[15px]">Constraints</span>
                      <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px]">88%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] h-3 rounded-full transition-all duration-500" style={{width: '88%'}}></div>
                    </div>
                    <p className="text-[#666666] text-[12px]">Understanding moral rules and legal boundaries</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[15px]">Consequences</span>
                      <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px]">91%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] h-3 rounded-full transition-all duration-500" style={{width: '91%'}}></div>
                    </div>
                    <p className="text-[#666666] text-[12px]">Analyzing outcomes and stakeholder impacts</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[15px]">Character</span>
                      <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px]">86%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] h-3 rounded-full transition-all duration-500" style={{width: '86%'}}></div>
                    </div>
                    <p className="text-[#666666] text-[12px]">Demonstrating virtues and ethical disposition</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[15px]">Special Obligations</span>
                      <span className="text-[#1d5282] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px]">89%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#1d5282] to-[#2a6ba8] h-3 rounded-full transition-all duration-500" style={{width: '89%'}}></div>
                    </div>
                    <p className="text-[#666666] text-[12px]">Fulfilling role-specific duties and commitments</p>
                  </div>
                </div>
              </div>

              {/* Course Progress */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(0,0,0,0.06)]">
                <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-6">
                  NE-203 Course Progress
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px]">Block 1: Moral Reasoning Foundations</h3>
                        <p className="text-[#666666] text-[13px]">3 of 3 scenarios completed</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#4ade80] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px]">100%</span>
                        <p className="text-[#4ade80] text-[12px]">Complete</p>
                      </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] h-3 rounded-full transition-all duration-500" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px]">Block 2: Ethical Frameworks</h3>
                        <p className="text-[#666666] text-[13px]">2 of 5 scenarios completed</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#fcc32a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px]">40%</span>
                        <p className="text-[#fcc32a] text-[12px]">In Progress</p>
                      </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#fcc32a] to-[#ffd84d] h-3 rounded-full transition-all duration-500" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px]">Block 3: Applied Ethics</h3>
                        <p className="text-[#666666] text-[13px]">0 of 5 scenarios completed</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px]">0%</span>
                        <p className="text-[#999999] text-[12px]">Not Started</p>
                      </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-[#e0e0e0] h-3 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px]">Block 4: Leadership Ethics</h3>
                        <p className="text-[#666666] text-[13px]">0 of 5 scenarios completed</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px]">0%</span>
                        <p className="text-[#999999] text-[12px]">Not Started</p>
                      </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-3">
                      <div className="bg-[#e0e0e0] h-3 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Skills Wallet */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-2">
                      Digital Skills Wallet
                    </h2>
                    <p className="text-[#666666] text-[15px]">
                      Credentials earned through demonstrated mastery
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#666666] text-[13px]">
                    <Award className="size-4" />
                    <span>Powered by Credly</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {/* Earned Badge */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#4ade80] relative overflow-hidden group hover:shadow-lg transition-all cursor-pointer">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#4ade80] text-white text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">EARNED</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#1d5282] via-[#2a6ba8] to-[#4ade80] flex items-center justify-center shadow-lg">
                        <Shield className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Moral Reasoning Foundation
                      </h3>
                      <p className="text-[#666666] text-[12px] mb-3">
                        Completed Block 1 with 90%+ mastery
                      </p>
                      <div className="flex items-center gap-1 text-[#4ade80] text-[11px]">
                        <CheckCircle className="size-3" />
                        <span>Earned Jan 15, 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* In Progress Badge */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#fcc32a] relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">IN PROGRESS</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#1d5282] via-[#2a6ba8] to-[#fcc32a] flex items-center justify-center shadow-lg opacity-70">
                        <Target className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Ethical Frameworks
                      </h3>
                      <p className="text-[#666666] text-[12px] mb-3">
                        40% complete - 3 more scenarios needed
                      </p>
                      <div className="w-full bg-[#f0f0f0] rounded-full h-2">
                        <div className="bg-[#fcc32a] h-2 rounded-full transition-all duration-500" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Locked Badge */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#e0e0e0] relative overflow-hidden opacity-60">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#999999] text-white text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">LOCKED</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#cccccc] to-[#999999] flex items-center justify-center shadow-lg">
                        <Award className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Applied Ethics Mastery
                      </h3>
                      <p className="text-[#999999] text-[12px] mb-3">
                        Complete Block 3 with 85%+ mastery
                      </p>
                      <div className="flex items-center gap-1 text-[#999999] text-[11px]">
                        <span>Not yet unlocked</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Earned Badge */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#4ade80] relative overflow-hidden group hover:shadow-lg transition-all cursor-pointer">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#4ade80] text-white text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">EARNED</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#1d5282] via-[#fcc32a] to-[#4ade80] flex items-center justify-center shadow-lg">
                        <TrendingUp className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Leadership Ethics
                      </h3>
                      <p className="text-[#666666] text-[12px] mb-3">
                        Mastered leadership decision-making
                      </p>
                      <div className="flex items-center gap-1 text-[#4ade80] text-[11px]">
                        <CheckCircle className="size-3" />
                        <span>Earned Dec 20, 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* Locked Badge 2 */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#e0e0e0] relative overflow-hidden opacity-60">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#999999] text-white text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">LOCKED</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#cccccc] to-[#999999] flex items-center justify-center shadow-lg">
                        <BookOpen className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Philosophical Foundations
                      </h3>
                      <p className="text-[#999999] text-[12px] mb-3">
                        Complete philosophy modules
                      </p>
                      <div className="flex items-center gap-1 text-[#999999] text-[11px]">
                        <span>Not yet unlocked</span>
                      </div>
                    </div>
                  </div>

                  {/* Locked Badge 3 */}
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-6 border-2 border-[#e0e0e0] relative overflow-hidden opacity-60">
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#999999] text-white text-[10px] px-2 py-1 rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif]">LOCKED</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#cccccc] to-[#999999] flex items-center justify-center shadow-lg">
                        <Star className="size-12 text-white" />
                      </div>
                      <h3 className="text-[#999999] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] mb-2">
                        Advanced Leadership
                      </h3>
                      <p className="text-[#999999] text-[12px] mb-3">
                        Complete NE-310 course
                      </p>
                      <div className="flex items-center gap-1 text-[#999999] text-[11px]">
                        <span>Not yet unlocked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
