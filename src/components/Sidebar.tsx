import { useState } from 'react';
import { CheckCircle2, BookOpen, List, Code2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { useAppStore } from '../store';
import { modules } from '../data/modules';
import { Module } from '../types';

export function Sidebar() {
  const { 
    viewMode, 
    setViewMode, 
    currentModuleId, 
    setCurrentModuleId,
    completedModules,
    toggleModuleComplete
  } = useAppStore();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [tailwindExpanded, setTailwindExpanded] = useState(true);
  const [htmlExpanded, setHtmlExpanded] = useState(true);
  const htmlModules = modules.filter(m => m.category === 'html');

  const tailwindModules = modules.filter(m => m.category === 'tailwind');

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const renderModuleButton = (module: Module, index: number, isSubmenu = false) => {
    const isActive = currentModuleId === module.id;
    return (
      <button
        key={module.id}
        onClick={() => {
          setCurrentModuleId(module.id);
          setViewMode('curriculum');
        }}
        title={module.title}
        className={`w-full text-left flex items-center ${isCollapsed ? (isSubmenu ? 'justify-center p-1 mb-1' : 'justify-center p-2 mb-2') : (isSubmenu ? 'gap-3 p-2 pl-6' : 'gap-3 p-2')} rounded-lg text-sm font-medium transition-all duration-300 border border-transparent ${
          isActive
            ? 'bg-zinc-900 border-indigo-500/50 text-white'
            : 'text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300'
        }`}
      >
        <div 
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all ${
            isSubmenu ? 'rounded-sm' : 'rounded-full'
          } ${
            isActive
              ? 'border-2 border-indigo-500 text-indigo-400 bg-indigo-500/20'
              : 'border-2 border-zinc-800 text-zinc-500'
        }`}>
          <span className="text-[10px] font-bold">{index + 1}</span>
        </div>
        <span className={`truncate overflow-hidden transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}`}>{module.title}</span>
      </button>
    );
  };

  const renderGroup = (group: any, index: number) => {
    const isExpanded = expandedGroups[group.groupId];
    const isActiveGroup = group.modules.some((m: any) => m.id === currentModuleId);
    
    let ringColor = 'border-zinc-800 text-zinc-500';
    let activeRingColor = 'border-indigo-500 text-indigo-400 bg-indigo-500/10';
    
    if (group.groupId === 'html-beginner') {
      ringColor = 'border-emerald-500/30 text-emerald-500';
      activeRingColor = 'border-emerald-500 text-emerald-400 bg-emerald-500/10';
    } else if (group.groupId === 'html-intermediate') {
      ringColor = 'border-amber-500/30 text-amber-500';
      activeRingColor = 'border-amber-500 text-amber-400 bg-amber-500/10';
    } else if (group.groupId === 'html-master') {
      ringColor = 'border-rose-500/30 text-rose-500';
      activeRingColor = 'border-rose-500 text-rose-400 bg-rose-500/10';
    }
    
    let activeBgClass = 'bg-zinc-900/50 border-indigo-500/30 text-zinc-200';
    if (group.groupId.startsWith('html-')) {
       if (group.groupId.includes('beginner')) activeBgClass = 'bg-zinc-900/50 border-emerald-500/30 text-zinc-200';
       if (group.groupId.includes('intermediate')) activeBgClass = 'bg-zinc-900/50 border-amber-500/30 text-zinc-200';
       if (group.groupId.includes('master')) activeBgClass = 'bg-zinc-900/50 border-rose-500/30 text-zinc-200';
    }

    return (
      <div key={group.groupId} className="mb-2">
        <button
          onClick={() => {
            const nextExpanded = !isExpanded;
            setExpandedGroups(nextExpanded ? { [group.groupId]: true } : {});
            if (nextExpanded && !isActiveGroup) {
              setCurrentModuleId(group.modules[0].id);
              setViewMode('curriculum');
            }
          }}
          title={group.groupTitle}
          className={`w-full text-left flex items-center justify-between ${isCollapsed ? 'p-2' : 'p-2'} rounded-lg text-sm font-medium transition-all duration-300 border border-transparent ${
            isActiveGroup && !isExpanded
              ? activeBgClass
              : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-300'
          }`}
        >
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'gap-3'}`}>
            <div 
              className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all rounded-full ${
                isActiveGroup ? activeRingColor : `border-2 ${ringColor}`
            }`}>
              <span className="text-[10px] font-bold">{group && group.groupId && group.groupId.startsWith('html-') ? (index === 0 ? '①' : index === 1 ? '②' : '③') : (index + 1)}</span>
            </div>
            <span className={`truncate overflow-hidden transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100'}`}>{group.groupTitle}</span>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[20px] opacity-100'}`}>
            {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />}
          </div>
        </button>
        {isExpanded && (
          <div className={`mt-1 flex flex-col gap-1 relative ${isCollapsed ? 'items-center' : 'before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800'}`}>
            {group.modules.map((m: Module, i: number) => renderModuleButton(m, i, true))}
          </div>
        )}
      </div>
    );
  };

  const groupedModules: any[] = [];
  const groupMap = new Map<string, any>();
  
    const groupedHtmlModules: any[] = [];
  const htmlGroupMap = new Map<string, any>();
  
  htmlModules.forEach(m => {
    if (m.groupId) {
      if (!htmlGroupMap.has(m.groupId)) {
        const groupObj = {
          isGroup: true,
          groupId: m.groupId,
          groupTitle: m.groupTitle,
          modules: []
        };
        htmlGroupMap.set(m.groupId, groupObj);
        groupedHtmlModules.push(groupObj);
      }
      htmlGroupMap.get(m.groupId).modules.push(m);
    } else {
      groupedHtmlModules.push(m);
    }
  });

  tailwindModules.forEach(m => {
    if (m.groupId) {
      if (!groupMap.has(m.groupId)) {
        const groupObj = {
          isGroup: true,
          groupId: m.groupId,
          groupTitle: m.groupTitle,
          modules: []
        };
        groupMap.set(m.groupId, groupObj);
        groupedModules.push(groupObj);
      }
      groupMap.get(m.groupId).modules.push(m);
    } else {
      groupedModules.push(m);
    }
  });

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-72'} bg-zinc-950 border-r border-zinc-800 h-screen flex flex-col z-20 shrink-0 transition-all duration-300 relative`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-7 -right-3 w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-50 cursor-pointer"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
      <div className={`p-6 border-b border-zinc-800 ${isCollapsed ? 'flex flex-col items-center px-4' : ''}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center mb-6' : 'gap-3 mb-6'}`}>
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-900/20 shrink-0">P</div>
          <h1 className={`text-lg font-semibold tracking-tight text-zinc-100 overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[150px] opacity-100'}`}>PixelMastery</h1>
        </div>
        
        <div className={`flex flex-col gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 w-full`}>
          <button
            onClick={() => setViewMode('guidelines')}
            title="Guidelines"
            className={`w-full flex items-center ${isCollapsed ? 'justify-center py-2' : 'justify-start gap-3 py-2 px-3'} rounded-md text-xs font-medium transition-all duration-300 ${
              viewMode === 'guidelines' 
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'}`}>Guidelines</span>
          </button>
          <button
            onClick={() => setViewMode('curriculum')}
            title="Learning"
            className={`w-full flex items-center ${isCollapsed ? 'justify-center py-2' : 'justify-start gap-3 py-2 px-3'} rounded-md text-xs font-medium transition-all duration-300 ${
              viewMode === 'curriculum' 
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'}`}>Learning</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        <nav className="space-y-4">
            <div className="mb-6">
              {!isCollapsed ? (
                <button 
                  onClick={() => setHtmlExpanded(!htmlExpanded)}
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                    HTML
                    {htmlExpanded && (
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] font-bold text-zinc-400 normal-case tracking-normal">[HTML5]</span>
                    )}
                  </h3>
                  {htmlExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">HTML</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || htmlExpanded) && groupedHtmlModules.map((item, i) => item.isGroup ? renderGroup(item, i) : renderModuleButton(item, i))}
              </div>
            </div>
            <div>
              {!isCollapsed ? (
                <button 
                  onClick={() => setTailwindExpanded(!tailwindExpanded)} 
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                    Tailwind
                    {tailwindExpanded && (
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] font-bold text-zinc-400 normal-case tracking-normal">v4.3</span>
                    )}
                  </h3>
                  {tailwindExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">TW</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || tailwindExpanded) && groupedModules.map((item, i) => item.isGroup ? renderGroup(item, i) : renderModuleButton(item, i))}
              </div>
            </div>


          </nav>
      </div>
    </aside>
  );
}
