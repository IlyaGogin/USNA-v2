import { useState } from 'react';
import { BookOpen, ChartBar, Lightbulb, User, LogOut, Search, Filter, X, Edit, Copy, Play, FolderOpen, Upload, Video, FileText, Link, Trash2, BarChart3 } from 'lucide-react';
import { ScenarioCard } from './ScenarioCard';
import { mockScenarios } from '../data/mockScenarios';
import { ALL_COURSES, AREAS, type Area } from '../data/lel-curriculum';
import { Scenario } from '../App';
import { USNALogo } from './USNALogo';
import { AnalyticsPage } from './AnalyticsPage';
import imgImage18 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

interface AdminDashboardProps {
  userName: string;
  onCreateScenario: () => void;
  onCreateScenarioNew?: () => void;
  onEditScenario?: (scenario: Scenario) => void;
  onTestScenario?: (scenario: Scenario) => void;
  onLogout: () => void;
}

export function AdminDashboard({ userName, onCreateScenario, onCreateScenarioNew, onEditScenario, onTestScenario, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'reports' | 'insights' | 'analytics' | 'knowledge' | 'admin'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [areaFilter, setAreaFilter] = useState<Area | 'all'>('all');
  const [courseFilter, setCourseFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Knowledge Management filters
  const [knowledgeCourseFilter, setKnowledgeCourseFilter] = useState<'all' | 'agnostic' | string>('all');
  const [knowledgeTypeFilter, setKnowledgeTypeFilter] = useState<'all' | 'document' | 'video' | 'case-study'>('all');
  const [knowledgeConceptFilter, setKnowledgeConceptFilter] = useState('all');

  // Get courses filtered by area
  const availableCourses = areaFilter === 'all' 
    ? ALL_COURSES 
    : ALL_COURSES.filter(c => c.area === areaFilter);

  const filteredScenarios = mockScenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = areaFilter === 'all' || scenario.area === areaFilter;
    const matchesCourse = courseFilter === 'all' || scenario.course === courseFilter;
    const matchesStatus = statusFilter === 'all' || scenario.status === statusFilter;
    return matchesSearch && matchesArea && matchesCourse && matchesStatus;
  });

  const stats = {
    totalScenarios: mockScenarios.length,
    published: mockScenarios.filter(s => s.status === 'published').length,
    inProgress: mockScenarios.filter(s => s.status === 'in-progress' || s.status === 'draft').length,
    completed: mockScenarios.filter(s => s.status === 'completed').length
  };

  return (
    <div className="h-screen bg-[#f6f6fb] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[260px] bg-[#1d5282] flex flex-col h-full relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.25) 0%, transparent 70%)' }} />
        
        {/* Logo */}
        <div className="p-5 border-b border-[rgba(255,255,255,0.1)] relative z-10">
          <USNALogo />
          
          <button
            onClick={onCreateScenarioNew || onCreateScenario}
            className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-[#1d5282] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] py-2 px-3 rounded-full transition-all flex items-center justify-center gap-2 text-[14px] mt-5"
          >
            <span>Create Scenario</span>
            <span className="text-[16px]">+</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 pt-[12px] overflow-y-auto relative z-10">
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'scenarios'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <BookOpen className={`size-[16px] ${activeTab === 'scenarios' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'scenarios' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              SCENARIOS
            </span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'reports'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <ChartBar className={`size-[16px] ${activeTab === 'reports' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'reports' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              REPORTS
            </span>
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'insights'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <Lightbulb className={`size-[16px] ${activeTab === 'insights' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'insights' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              INSIGHTS
            </span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'analytics'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <BarChart3 className={`size-[16px] ${activeTab === 'analytics' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'analytics' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              ANALYTICS
            </span>
          </button>

          <button
            onClick={() => setActiveTab('knowledge')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'knowledge'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <FolderOpen className={`size-[16px] ${activeTab === 'knowledge' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'knowledge' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              KNOWLEDGE
            </span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`w-full h-[41px] flex items-center gap-[10px] px-[20px] transition-all ${
              activeTab === 'admin'
                ? 'bg-[rgba(0,0,0,0.16)] border-l-4 border-[#fcc32a]'
                : 'hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <User className={`size-[16px] ${activeTab === 'admin' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'}`} />
            <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] leading-[21px] ${
              activeTab === 'admin' ? 'text-[#fcc32a]' : 'text-[#e8e8e8]'
            }`}>
              ADMIN
            </span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="p-5 border-t border-[rgba(255,255,255,0.1)] relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[13px]">{userName}</p>
              <p className="text-[#a2a2a2] text-[11px]">Administrator</p>
            </div>
            <button
              onClick={onLogout}
              className="text-[#e8e8e8] hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="size-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'scenarios' && (
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col gap-3 w-[641px]">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] text-[#171717] text-[32px] tracking-[-0.64px]">
                  Welcome, {userName}
                </p>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#5d5d5d] text-[16px]">
                  Create and manage leadership and ethics scenarios aligned to LEL course objectives
                </p>
              </div>
              <button
                onClick={onCreateScenario}
                className="bg-[#ffce00] flex gap-3 items-center justify-center px-6 py-4 rounded-full hover:bg-[#ffd700] transition-colors"
              >
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] text-[16px] text-black text-nowrap">
                  Create Scenario
                </p>
                <div className="size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path clipRule="evenodd" d="M3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C9.05058 0 10.0909 0.206926 11.0615 0.608964C12.0321 1.011 12.914 1.60028 13.6569 2.34315C14.3997 3.08601 14.989 3.96793 15.391 4.93853C15.7931 5.90914 16 6.94942 16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346631 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824ZM12.4116 7.11945H8.8805V3.58832C8.8805 3.10203 8.48629 2.70782 8 2.70782C7.51371 2.70782 7.1195 3.10203 7.1195 3.58832V7.11945H3.58837C3.10208 7.11945 2.70786 7.51366 2.70786 7.99995C2.70786 8.48624 3.10208 8.88046 3.58837 8.88046L7.1195 8.88046V12.4116C7.1195 12.8979 7.51371 13.2921 8 13.2921C8.48629 13.2921 8.8805 12.8979 8.8805 12.4116L8.8805 8.88046L12.4116 8.88046C12.8979 8.88046 13.2921 8.48624 13.2921 7.99995C13.2921 7.51366 12.8979 7.11945 12.4116 7.11945Z" fill="black" fillRule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 bg-[rgba(29,82,130,0.12)] rounded-[4px] px-8 py-5 flex items-center justify-between gap-8">
                <div className="font-['SF_Mono:Medium',sans-serif] leading-[20px] text-[#1d5282] text-[16px] opacity-70">
                  <p>TOTAL</p>
                  <p>SCENARIOS</p>
                </div>
                <p className="font-['SF_Mono:Regular',sans-serif] font-extralight leading-[56px] text-[#1d5282] text-[56px]">{stats.totalScenarios}</p>
              </div>
              <div className="flex-1 bg-[rgba(29,82,130,0.12)] rounded-[4px] px-8 py-5 flex items-center justify-between gap-8">
                <div className="font-['SF_Mono:Medium',sans-serif] leading-[20px] text-[#1d5282] text-[16px] opacity-70">
                  <p>PUBLISHED</p>
                  <p>SCENARIOS</p>
                </div>
                <p className="font-['SF_Mono:Regular',sans-serif] font-extralight leading-[56px] text-[#1d5282] text-[56px]">{stats.published}</p>
              </div>
              <div className="flex-1 bg-[rgba(29,82,130,0.12)] rounded-[4px] px-8 py-5 flex items-center justify-between gap-8">
                <p className="font-['SF_Mono:Medium',sans-serif] leading-[20px] text-[#1d5282] text-[16px] opacity-70">
                  IN<br />PROGRESS
                </p>
                <p className="font-['SF_Mono:Regular',sans-serif] font-extralight leading-[56px] text-[#1d5282] text-[56px]">{stats.inProgress}</p>
              </div>
              <div className="flex-1 bg-[rgba(29,82,130,0.12)] rounded-[4px] px-8 py-5 flex items-center justify-between gap-8">
                <div className="font-['SF_Mono:Medium',sans-serif] leading-[20px] text-[#1d5282] text-[16px] opacity-70">
                  <p>COMPLETED</p>
                  <p>USES</p>
                </div>
                <p className="font-['SF_Mono:Regular',sans-serif] font-extralight leading-[56px] text-[#1d5282] text-[56px]">{stats.completed}</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#1d5282] rounded-[4px] px-3 py-3 pr-10 text-[#464646] placeholder-[#464646] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1d5282]/20"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-[18px] text-[#2e2e2e]" />
              </div>
              
              <select
                value={areaFilter}
                onChange={(e) => {
                  setAreaFilter(e.target.value as Area | 'all');
                  setCourseFilter('all');
                }}
                className="w-[240px] bg-white border border-[#1d5282] rounded-[4px] px-3 py-3 text-[#464646] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1d5282]/20 appearance-none bg-no-repeat bg-right pr-8"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.09941 9H15.9006C16.5078 9 17 9.49074 17 10.0961C17 10.3908 16.881 10.6731 16.6698 10.8793L12.7692 14.6871C12.3418 15.1043 11.6582 15.1043 11.2308 14.6871L7.33024 10.8793C6.8964 10.4558 6.88907 9.76179 7.31387 9.32925C7.52067 9.11867 7.80382 9 8.09941 9Z' fill='%232E2E2E'/%3E%3C/svg%3E")`, backgroundPosition: 'right 8px center', backgroundSize: '24px 24px' }}
              >
                <option value="all">Area</option>
                {AREAS.map(area => (
                  <option key={area.id} value={area.id}>{area.name}</option>
                ))}
              </select>

              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="w-[240px] bg-white border border-[#1d5282] rounded-[4px] px-3 py-3 text-[#464646] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1d5282]/20 appearance-none bg-no-repeat bg-right pr-8"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.09941 9H15.9006C16.5078 9 17 9.49074 17 10.0961C17 10.3908 16.881 10.6731 16.6698 10.8793L12.7692 14.6871C12.3418 15.1043 11.6582 15.1043 11.2308 14.6871L7.33024 10.8793C6.8964 10.4558 6.88907 9.76179 7.31387 9.32925C7.52067 9.11867 7.80382 9 8.09941 9Z' fill='%232E2E2E'/%3E%3C/svg%3E")`, backgroundPosition: 'right 8px center', backgroundSize: '24px 24px' }}
              >
                <option value="all">Course</option>
                {availableCourses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.code}: {course.name}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-[240px] bg-white border border-[#1d5282] rounded-[4px] px-3 py-3 text-[#464646] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1d5282]/20 appearance-none bg-no-repeat bg-right pr-8"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.09941 9H15.9006C16.5078 9 17 9.49074 17 10.0961C17 10.3908 16.881 10.6731 16.6698 10.8793L12.7692 14.6871C12.3418 15.1043 11.6582 15.1043 11.2308 14.6871L7.33024 10.8793C6.8964 10.4558 6.88907 9.76179 7.31387 9.32925C7.52067 9.11867 7.80382 9 8.09941 9Z' fill='%232E2E2E'/%3E%3C/svg%3E")`, backgroundPosition: 'right 8px center', backgroundSize: '24px 24px' }}
              >
                <option value="all">Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="in-progress">In Progress</option>
              </select>
            </div>

            {/* Scenario Grid */}
            <div className="grid grid-cols-3 gap-4">
              {filteredScenarios.map(scenario => (
                <div key={scenario.id} onClick={() => setSelectedScenario(scenario)} className="cursor-pointer">
                  <ScenarioCard scenario={scenario} isAdmin={true} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scenario Detail Modal */}
        {selectedScenario && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50"
            onClick={() => setSelectedScenario(null)}
          >
            <div 
              className="bg-white rounded-tl-[4px] rounded-tr-[4px] max-w-[928px] w-full max-h-[calc(100vh-32px)] flex flex-col shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fixed Header */}
              <div className="relative shrink-0">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute bg-gradient-to-r from-[#1d5282] from-[43.733%] inset-0 to-[rgba(29,82,130,0)]" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={selectedScenario.image} />
                    <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(29, 82, 130) 8.6925%, rgba(29, 82, 130, 0) 79.721%), linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%)" }} />
                  </div>
                </div>
                <div className="flex flex-row items-center size-full relative">
                  <div className="content-stretch flex gap-[16px] items-center px-[40px] py-[24px] relative w-full">
                    <div className="relative shrink-0 size-[160px]">
                      <img alt="USNA Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                      <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                        <p className="leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full">{selectedScenario.title}</p>
                        <p className="leading-[28px] relative shrink-0 text-[#fcc32a] text-[20px] tracking-[-0.4px] w-full">{selectedScenario.subtitle}</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className={`content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0 ${
                          selectedScenario.status === 'published' ? 'bg-[#ebf9f0]' : 
                          selectedScenario.status === 'draft' ? 'bg-[#fef3c7]' : 'bg-white/20'
                        }`}>
                          {selectedScenario.status === 'published' && (
                            <div className="content-stretch flex items-center relative shrink-0">
                              <div className="content-stretch flex items-center relative shrink-0">
                                <div className="relative shrink-0 size-[16px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" fill="#006632" r="3" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                            <div className={`flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
                              selectedScenario.status === 'published' ? 'text-[#006632]' : 
                              selectedScenario.status === 'draft' ? 'text-[#92400e]' : 'text-white'
                            }`}>
                              <p className="leading-[16px]">{selectedScenario.status.toUpperCase()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#efedff] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                            <div className="flex flex-col font-['SF_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#512eab] text-[14px] text-center text-nowrap">
                              <p className="leading-[16px]">{selectedScenario.course}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#ffebd6] content-stretch flex items-center px-[2px] py-0 relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex h-[20px] items-center justify-center pb-[2px] pt-0 px-[4px] relative shrink-0">
                            <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#793c00] text-[14px] text-center text-nowrap">
                              <p className="leading-[16px]">{selectedScenario.difficulty}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedScenario(null)}
                      className="absolute bg-[rgba(29,82,130,0.45)] content-stretch flex items-center justify-center p-[10px] right-[16px] rounded-full top-[15px] size-[32px] hover:bg-[rgba(29,82,130,0.65)] transition-colors"
                    >
                      <X className="size-[24px] text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto min-h-0">
                <div className="content-stretch flex flex-col items-start px-[40px] py-0">
                  {/* Description */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-start pl-0 pr-[32px] py-[24px] relative text-[#171717] text-[16px] w-full">
                      <p className="font-['SF_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 w-[160px]">[DESCRIPTION]</p>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0">{selectedScenario.description}</p>
                    </div>
                  </div>

                  {/* Context Details */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col gap-[12px] items-start pl-0 pr-[32px] py-[24px] relative w-full">
                      <div className="content-stretch flex items-start justify-between leading-[22px] relative shrink-0 text-[#171717] w-full">
                        <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[LOCATION]</p>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{selectedScenario.location}</p>
                      </div>
                      <div className="content-stretch flex items-start justify-between leading-[22px] relative shrink-0 text-[#171717] w-full">
                        <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[YOUR ROLE]</p>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{selectedScenario.role}</p>
                      </div>
                      <div className="content-stretch flex items-start justify-between leading-[22px] relative shrink-0 text-[#171717] w-full">
                        <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[TIME]</p>
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{selectedScenario.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Situation */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-start leading-[22px] pl-0 pr-[32px] py-[24px] relative text-[#171717] w-full">
                      <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[SITUATION]</p>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{selectedScenario.situation}</p>
                    </div>
                  </div>

                  {/* Dilemma */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-start leading-[22px] pl-0 pr-[32px] py-[24px] relative text-[#171717] w-full">
                      <p className="font-['SF_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-[160px]">[DILEMMA]</p>
                      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[14px]">{selectedScenario.dilemma}</p>
                    </div>
                  </div>

                  {/* Frameworks */}
                  {selectedScenario.frameworks && (
                    <div className="relative shrink-0 w-full">
                      <div className="content-stretch flex items-start pl-0 pr-[32px] py-[24px] pb-[40px] relative w-full">
                        <p className="font-['SF_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#171717] text-[16px] w-[160px]">[FRAMEWORKS]</p>
                        <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                          {selectedScenario.frameworks.map((framework, idx) => (
                            <div key={idx} className="bg-[#ebf5ff] content-stretch flex items-center pb-[4px] pt-[2px] px-[4px] relative rounded-[4px] shrink-0">
                              <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
                                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#045caf] text-[16px] text-center text-nowrap">
                                  <p className="leading-[20px]">{framework}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Fixed Footer */}
              <div className="bg-white relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(13,0,77,0.15)] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[40px] py-[24px] relative w-full">
                    <button
                      onClick={() => {
                        onEditScenario?.(selectedScenario);
                        setSelectedScenario(null);
                      }}
                      className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
                    >
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap">
                        <p className="leading-[16px]">Edit Scenario</p>
                      </div>
                      <Edit className="size-[18px] text-[#171717]" />
                    </button>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                      <button
                        onClick={() => {
                          const template = { ...selectedScenario, id: `${selectedScenario.id}-copy`, status: 'draft' as const };
                          onEditScenario?.(template);
                          setSelectedScenario(null);
                        }}
                        className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 border-2 border-[#0d004d] hover:bg-[#0d004d] hover:text-white transition-all group"
                      >
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0d004d] text-[16px] text-center text-nowrap group-hover:text-white">
                          <p className="leading-[16px]">Use as template</p>
                        </div>
                        <Copy className="size-[16px] text-[#171717] group-hover:text-white" />
                      </button>
                      <button
                        onClick={() => {
                          // Check if this is the Authority Question scenario
                          if (selectedScenario.id === 'ne203-w01-002' || selectedScenario.title === 'The Authority Question') {
                            // Open the external training link
                            window.open('https://training.digitalhumans.com/immersive-training/conversation/d7a69a84-b002-4a57-b249-4c3008cd469b?locale=en-US:en-GB:en-AU:en-IN', '_blank');
                            setSelectedScenario(null);
                          } else if (selectedScenario.title === 'The Flight Test') {
                            // Open the Flight Test external training link
                            window.open('https://training.digitalhumans.com/immersive-training/conversation/a1f0587c-79c4-4921-ad60-bf7475208c4f?locale=en-US:en-GB:en-AU:en-IN', '_blank');
                            setSelectedScenario(null);
                          } else {
                            onTestScenario?.(selectedScenario);
                            setSelectedScenario(null);
                          }
                        }}
                        className="bg-[#ffce00] content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[1000px] shrink-0 hover:bg-[#ffd700] transition-colors"
                      >
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-black text-center text-nowrap">Test Scenario</p>
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path clipRule="evenodd" d="M10.7681 7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H10.7681L7.36109 12.4159C6.99964 12.7783 6.99964 13.3658 7.36109 13.7282C7.72254 14.0906 8.30858 14.0906 8.67003 13.7282L13.7289 8.65617C14.0904 8.29378 14.0904 7.70622 13.7289 7.34383L8.67003 2.2718C8.30858 1.9094 7.72254 1.9094 7.36109 2.2718C6.99964 2.63419 6.99964 3.22175 7.36109 3.58414L10.7681 7Z" fill="#171717" fillRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="p-8">
            <h1 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-4">
              Performance Reports
            </h1>
            <p className="text-[#666666] text-[16px] mb-8">
              Track midshipman performance and scenario effectiveness
            </p>
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-12 text-center shadow-sm">
              <ChartBar className="size-[48px] text-[#999999] mx-auto mb-4" />
              <p className="text-[#666666] text-[16px]">Performance analytics and reports coming soon</p>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="p-8">
            <h1 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-4">
              AI Insights
            </h1>
            <p className="text-[#666666] text-[16px] mb-8">
              AI-powered analysis of midshipman decision-making patterns
            </p>
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-12 text-center shadow-sm">
              <Lightbulb className="size-[48px] text-[#999999] mx-auto mb-4" />
              <p className="text-[#666666] text-[16px]">AI insights and recommendations coming soon</p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <AnalyticsPage />
        )}

        {activeTab === 'knowledge' && (
          <div className="p-8">
            <h1 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-4">
              Knowledge Management
            </h1>
            <p className="text-[#666666] text-[16px] mb-8">
              Curate case studies, videos, syllabi, and course materials to enhance scenario generation and evaluation
            </p>
            
            {/* Upload Section */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <button className="bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] hover:from-[#2a6ba8] hover:to-[#1d5282] text-white rounded-2xl p-8 text-left transition-all shadow-lg hover:shadow-xl">
                <Upload className="size-10 mb-4" />
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-2">Upload Files</h3>
                <p className="text-white/80 text-[14px]">Upload syllabi, PDFs, and documents</p>
              </button>
              <button className="bg-white hover:bg-[#f8f9fa] border-2 border-[#1d5282] text-[#1d5282] rounded-2xl p-8 text-left transition-all shadow-sm hover:shadow-md">
                <Video className="size-10 mb-4" />
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-2">Add Video</h3>
                <p className="text-[#666666] text-[14px]">Link YouTube videos or recordings</p>
              </button>
              <button className="bg-white hover:bg-[#f8f9fa] border-2 border-[#1d5282] text-[#1d5282] rounded-2xl p-8 text-left transition-all shadow-sm hover:shadow-md">
                <Link className="size-10 mb-4" />
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-2">Add Link</h3>
                <p className="text-[#666666] text-[14px]">Save external resources and articles</p>
              </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-8">
              <select
                value={knowledgeCourseFilter}
                onChange={(e) => setKnowledgeCourseFilter(e.target.value as 'all' | 'agnostic' | string)}
                className="bg-white border-2 border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] focus:outline-none focus:border-[#1d5282] transition-colors min-w-[220px]"
              >
                <option value="all">All Materials</option>
                <option value="agnostic">Course-Agnostic</option>
                <optgroup label="Course-Specific">
                  <option value="NE-201">NE-201: Leadership</option>
                  <option value="NE-203">NE-203: Ethics</option>
                  <option value="NE-310">NE-310: Advanced Leadership</option>
                </optgroup>
              </select>

              <select
                value={knowledgeTypeFilter}
                onChange={(e) => setKnowledgeTypeFilter(e.target.value as 'all' | 'document' | 'video' | 'case-study')}
                className="bg-white border-2 border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] focus:outline-none focus:border-[#1d5282] transition-colors min-w-[200px]"
              >
                <option value="all">All Types</option>
                <option value="document">Documents</option>
                <option value="video">Videos</option>
                <option value="case-study">Case Studies</option>
              </select>

              <select
                value={knowledgeConceptFilter}
                onChange={(e) => setKnowledgeConceptFilter(e.target.value)}
                className="bg-white border-2 border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 text-[#1a1a1a] font-['Plus_Jakarta_Sans:Medium',sans-serif] focus:outline-none focus:border-[#1d5282] transition-colors min-w-[220px]"
              >
                <option value="all">All Concepts</option>
                <optgroup label="Ethics Concepts">
                  <option value="moral-courage">Moral Courage</option>
                  <option value="constraints">Constraints</option>
                  <option value="consequences">Consequences</option>
                  <option value="character">Character</option>
                  <option value="special-obligations">Special Obligations</option>
                </optgroup>
                <optgroup label="Leadership Concepts">
                  <option value="decision-making">Decision Making</option>
                  <option value="team-dynamics">Team Dynamics</option>
                  <option value="communication">Communication</option>
                  <option value="strategic-vision">Strategic Vision</option>
                </optgroup>
              </select>
            </div>

            {/* Course Materials */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)] mb-6">
              <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-4 flex items-center gap-2">
                <FileText className="size-6 text-[#1d5282]" />
                Course Materials (12)
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-[#1d5282] rounded-lg flex items-center justify-center">
                      <FileText className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px]">NE-203 Syllabus Fall 2024</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-[#666666] text-[13px]">PDF • Uploaded 2 days ago</p>
                        <span className="bg-[#1d5282] text-white text-[10px] px-2 py-0.5 rounded-full">NE-203</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-[#999999] hover:text-[#1d5282] transition-colors">
                    <Trash2 className="size-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-[#1d5282] rounded-lg flex items-center justify-center">
                      <FileText className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px]">Four Moral Factors Framework</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-[#666666] text-[13px]">PDF • Uploaded 1 week ago</p>
                        <span className="bg-[#1d5282] text-white text-[10px] px-2 py-0.5 rounded-full">NE-203</span>
                        <span className="bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-0.5 rounded-full">Constraints</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-[#999999] hover:text-[#1d5282] transition-colors">
                    <Trash2 className="size-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-[#1d5282] rounded-lg flex items-center justify-center">
                      <FileText className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px]">Leadership Case Studies Compendium</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-[#666666] text-[13px]">PDF • Uploaded 2 weeks ago</p>
                        <span className="bg-[#1d5282] text-white text-[10px] px-2 py-0.5 rounded-full">NE-201</span>
                        <span className="bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-0.5 rounded-full">Decision Making</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-[#999999] hover:text-[#1d5282] transition-colors">
                    <Trash2 className="size-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-[#1d5282] rounded-lg flex items-center justify-center">
                      <FileText className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px]">Professional Military Ethics Guide</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-[#666666] text-[13px]">PDF • Uploaded 3 weeks ago</p>
                        <span className="bg-[#4ade80] text-white text-[10px] px-2 py-0.5 rounded-full">Course-Agnostic</span>
                        <span className="bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-0.5 rounded-full">Moral Courage</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-[#999999] hover:text-[#1d5282] transition-colors">
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Resources */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)] mb-6">
              <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-4 flex items-center gap-2">
                <Video className="size-6 text-[#1d5282]" />
                Video Resources (8)
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="size-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-1">Moral Courage in Leadership</h3>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[#666666] text-[12px]">YouTube • 15:32</p>
                      <span className="bg-[#4ade80] text-white text-[9px] px-1.5 py-0.5 rounded-full">Course-Agnostic</span>
                      <span className="bg-[#fcc32a] text-[#1a1a1a] text-[9px] px-1.5 py-0.5 rounded-full">Moral Courage</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="size-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-1">The Moral Roadmap Explained</h3>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[#666666] text-[12px]">YouTube • 8:45</p>
                      <span className="bg-[#1d5282] text-white text-[9px] px-1.5 py-0.5 rounded-full">NE-203</span>
                      <span className="bg-[#fcc32a] text-[#1a1a1a] text-[9px] px-1.5 py-0.5 rounded-full">Consequences</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="size-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-1">Cultural Ethics in Military Ops</h3>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[#666666] text-[12px]">YouTube • 22:15</p>
                      <span className="bg-[#1d5282] text-white text-[9px] px-1.5 py-0.5 rounded-full">NE-203</span>
                      <span className="bg-[#fcc32a] text-[#1a1a1a] text-[9px] px-1.5 py-0.5 rounded-full">Character</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl hover:bg-[#f0f1f2] transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-br from-[#1d5282] to-[#2a6ba8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="size-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] mb-1">Decision Making Under Pressure</h3>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[#666666] text-[12px]">YouTube • 18:20</p>
                      <span className="bg-[#1d5282] text-white text-[9px] px-1.5 py-0.5 rounded-full">NE-201</span>
                      <span className="bg-[#fcc32a] text-[#1a1a1a] text-[9px] px-1.5 py-0.5 rounded-full">Decision Making</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(0,0,0,0.06)]">
              <h2 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] mb-4 flex items-center gap-2">
                <BookOpen className="size-6 text-[#1d5282]" />
                Historical Case Studies (15)
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">USS Cole Bombing</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Decision-making under ambiguous threat conditions</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#1d5282] text-white text-[10px] px-2 py-1 rounded-full">NE-203</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Consequences</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">2 AM Courage</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Moral courage and chain of command dilemmas</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#4ade80] text-white text-[10px] px-2 py-1 rounded-full">Course-Agnostic</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Moral Courage</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">Challenger Decision</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Organizational pressure vs. safety concerns</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#1d5282] text-white text-[10px] px-2 py-1 rounded-full">NE-201</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Decision Making</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">Abu Ghraib Scandal</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Professional ethics and accountability</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#1d5282] text-white text-[10px] px-2 py-1 rounded-full">NE-203</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Special Obligations</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">Hiroshima Decision</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Consequentialism vs. constraints in warfare</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#4ade80] text-white text-[10px] px-2 py-1 rounded-full">Course-Agnostic</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Consequences</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-[#1d5282] transition-all cursor-pointer">
                  <h3 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] mb-2">Tailhook Scandal</h3>
                  <p className="text-[#666666] text-[13px] mb-3 line-clamp-2">Bystander intervention and moral courage</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block bg-[#1d5282] text-white text-[10px] px-2 py-1 rounded-full">NE-201</span>
                    <span className="inline-block bg-[#fcc32a] text-[#1a1a1a] text-[10px] px-2 py-1 rounded-full">Moral Courage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="p-8">
            <h1 className="text-[#1a1a1a] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[32px] mb-4">
              Admin Settings
            </h1>
            <p className="text-[#666666] text-[16px] mb-8">
              Manage users, courses, and system settings
            </p>
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-12 text-center shadow-sm">
              <User className="size-[48px] text-[#999999] mx-auto mb-4" />
              <p className="text-[#666666] text-[16px]">Admin settings and user management coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}