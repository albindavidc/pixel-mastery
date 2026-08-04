import fs from 'fs';

let content = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

const updatedContent = `import { useState } from 'react';
import { CheckCircle2, BookOpen, List, Code2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
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

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [cssExpanded, setCssExpanded] = useState(true);
  const [tailwindExpanded, setTailwindExpanded] = useState(true);

  const cssModules = modules.filter(m => m.category === 'css');
  const tailwindModules = modules.filter(m => m.category === 'tailwind');

  const renderModuleButton = (module: Module) => (
    <button
      key={module.id}
      onClick={() => setCurrentModuleId(module.id)}
      title={module.title}
      className={\`w-full text-left flex items-center \${isCollapsed ? 'justify-center p-2 mb-2' : 'gap-3 p-2'} rounded-lg text-sm font-medium transition-colors border border-transparent \${
        currentModuleId === module.id
          ? 'bg-zinc-900 border-indigo-500/50 text-white'
          : 'text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300'
      } \${
        completedModules.includes(module.id) && currentModuleId !== module.id ? '!bg-emerald-500/10 !border-emerald-500/20 !text-emerald-100' : ''
      }\`}
    >
      <div 
        onClick={(e) => {
          e.stopPropagation();
          toggleModuleComplete(module.id);
        }}
        className={\`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all \${
        completedModules.includes(module.id)
          ? 'bg-emerald-500 text-emerald-950'
          : currentModuleId === module.id
            ? 'border-2 border-indigo-500 hover:border-indigo-400 hover:bg-indigo-500/20'
            : 'border-2 border-zinc-800 hover:border-zinc-500'
      }\`}>
        {completedModules.includes(module.id) && <CheckCircle2 className="w-3.5 h-3.5" />}
      </div>
      {!isCollapsed && <span className="truncate">{module.title}</span>}
    </button>
  );

  return (
    <aside className={\`\${isCollapsed ? 'w-20' : 'w-72'} bg-zinc-950 border-r border-zinc-800 h-screen flex flex-col overflow-hidden shrink-0 transition-all duration-300 relative\`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-7 -right-3 w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-50 cursor-pointer"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      <div className={\`p-6 border-b border-zinc-800 \${isCollapsed ? 'flex flex-col items-center px-4' : ''}\`}>
        <div className={\`flex items-center \${isCollapsed ? 'justify-center mb-6' : 'gap-3 mb-6'}\`}>
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-900/20 shrink-0">S</div>
          {!isCollapsed && (
            <>
              <h1 className="text-lg font-semibold tracking-tight text-zinc-100">StyleSheet</h1>
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded uppercase font-bold tracking-widest border border-zinc-700">v4.3 Stable</span>
            </>
          )}
        </div>
        
        <div className={\`flex \${isCollapsed ? 'flex-col gap-2 w-full' : 'gap-2'} p-1 bg-zinc-900 rounded-lg border border-zinc-800\`}>
          <button
            onClick={() => setViewMode('curriculum')}
            title="Learning"
            className={\`flex-1 flex items-center justify-center \${isCollapsed ? 'py-2 px-0' : 'gap-2 py-1 px-3'} rounded-md text-xs font-medium transition-colors \${
              viewMode === 'curriculum' 
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700' 
                : 'text-zinc-500 hover:text-zinc-300'
            }\`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Learning</span>}
          </button>
          <button
            onClick={() => setViewMode('reference')}
            title="Reference"
            className={\`flex-1 flex items-center justify-center \${isCollapsed ? 'py-2 px-0' : 'gap-2 py-1 px-3'} rounded-md text-xs font-medium transition-colors \${
              viewMode === 'reference' 
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700' 
                : 'text-zinc-500 hover:text-zinc-300'
            }\`}
          >
            <List className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Reference</span>}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        {viewMode === 'curriculum' ? (
          <nav className="space-y-4">
            <div>
              {!isCollapsed ? (
                <button 
                  onClick={() => setCssExpanded(!cssExpanded)} 
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">CSS</h3>
                  {cssExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">CSS</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || cssExpanded) && cssModules.map(renderModuleButton)}
              </div>
            </div>

            <div>
              {!isCollapsed ? (
                <button 
                  onClick={() => setTailwindExpanded(!tailwindExpanded)} 
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">Tailwind</h3>
                  {tailwindExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 mt-6 text-center">Tailwind</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || tailwindExpanded) && tailwindModules.map(renderModuleButton)}
              </div>
            </div>
          </nav>
        ) : (
          <div className="p-3 text-sm text-zinc-500 text-center flex justify-center">
            {isCollapsed ? <List className="w-5 h-5" /> : 'Select categories from the main reference panel to explore utilities.'}
          </div>
        )}
      </div>
    </aside>
  );
}
`;

fs.writeFileSync('src/components/Sidebar.tsx', updatedContent);
