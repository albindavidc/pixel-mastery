import { useAppStore } from '../store';
import { modules } from '../data/modules';
import { CheckCircle2, Play, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Curriculum() {
  const { currentModuleId, setPlaygroundClasses, completedModules, toggleModuleComplete } = useAppStore();
  const module = modules.find(m => m.id === currentModuleId);
  const isCompleted = module ? completedModules.includes(module.id) : false;

  // Simple challenge validation
  const { playgroundClasses } = useAppStore();
  const [challengePassed, setChallengePassed] = useState(false);

  useEffect(() => {
    if (!module) return;
    const currentClasses = playgroundClasses.split(' ').map(c => c.trim()).filter(Boolean);
    const passed = module.challenge.targetClasses.every(target => currentClasses.includes(target));
    setChallengePassed(passed);
    
    // Auto-complete if they pass the challenge and haven't already
    if (passed && !isCompleted) {
      // Small delay for visual satisfaction
      const timer = setTimeout(() => {
        toggleModuleComplete(module.id);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [playgroundClasses, module, isCompleted, toggleModuleComplete]);

  if (!module) return <div className="p-8">Module not found.</div>;

  return (
    <div className="bg-zinc-950 transition-colors">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto p-8 lg:p-12">
                                        {module.id === 'tailwind-flexbox-grid' && (
          <>
            {/* Quick Reference Guide */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-300">
              <Info className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm tracking-wide uppercase">Quick Reference Guide</h3>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Container</span>
              </div>
              <div className="flex items-center gap-1.5 text-fuchsia-400">
                <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
                <span>Item</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Mostly Used</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Flexbox */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Flex Container
                </h4>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-direction', 'flex-wrap', 'flex'].map(prop => {
                      const isMostlyUsed = ['flex-direction', 'flex-wrap', 'flex'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Flex Item
                </h4>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-basis', 'flex-grow', 'flex-shrink', 'order'].map(prop => {
                      const isMostlyUsed = ['flex-grow', 'flex-shrink'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Grid Container
                </h4>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-template-columns', 'grid-template-rows'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-items'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['place-items'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Grid Item
                </h4>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-column', 'grid-row'].map(prop => {
                      const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-self'].map(prop => {
                      const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['place-self'].map(prop => {
                      const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
{/* Common Properties */}
          <div className="pt-6 border-t border-zinc-800">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Common Properties (Flex & Grid)</h4>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Container
                </h5>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-content'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['align-content', 'align-items'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['place-content'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['gap'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Item
                </h5>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['align-self'].map(prop => {
                      const isMostlyUsed = ['align-self'].includes(prop);
                      return (
                        <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alignment Cheat Sheet */}
          <div className="pt-6 border-t border-zinc-800 mt-6">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Alignment Matrix (Flexbox & Grid)</h4>
            <div className="flex flex-col gap-4">
              
              {/* Content (Container) */}
              <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
                <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  1. Content (Container)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">justify-content</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">justify-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      normal, start, end, end-safe, center, center-safe, between, around, evenly, stretch, baseline
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">align-content</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">content-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      normal, start, end, center, between, around, evenly, baseline, stretch
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">place-content</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">place-content-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      start, end, end-safe, center, center-safe, between, around, evenly, baseline, stretch
                    </div>
                  </div>
                </div>
              </div>

              {/* Items (All Items) */}
              <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
                <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  2. Items (All Items)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">justify-items</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">justify-items-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      start, end, center, stretch
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">align-items</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">items-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      start, end, end-safe, center, center-safe, baseline, baseline-last, stretch
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">place-items</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">place-items-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      start, end, end-safe, center, center-safe, baseline, stretch
                    </div>
                  </div>
                </div>
              </div>

              {/* Self (Single Item) */}
              <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
                <h5 className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  3. Self (Single Item)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">justify-self</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">justify-self-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      auto, start, end, end-safe, center, center-safe, stretch
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">align-self</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">self-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      auto, start, end, end-safe, center, center-safe, baseline, stretch
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-zinc-300">place-self</span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">place-self-*</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      auto, start, end, end-safe, center, center-safe, stretch
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

          </>
        )}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">{module.title}</h2>
            
          </div>
          <p className="text-lg text-zinc-400">{module.description}</p>
        </header>

        <div className="prose prose-invert max-w-none mb-10 text-zinc-400 leading-relaxed">
          <p>{module.content}</p>

          {module.id === 'tailwind-flexbox-grid' && (
          <>
            {/* Definitions */}
          <div className="mt-8 mb-6 space-y-6 not-prose">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Core Layout Properties */}
              <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
                <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                  <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    Layout Properties
                  </h4>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { prop: 'flex-basis', desc: 'Sets the initial size of a flex item before extra space is distributed.' },
                    { prop: 'flex-direction', desc: 'Defines the main axis direction (row, column, etc.) of flex items.' },
                    { prop: 'flex-wrap', desc: 'Controls whether flex items stay on one line or wrap.' },
                    { prop: 'flex', desc: 'Shorthand for flex-grow, flex-shrink, and flex-basis.' },
                    { prop: 'flex-grow', desc: 'Determines how much a flex item expands to fill available space.' },
                    { prop: 'flex-shrink', desc: 'Determines how much a flex item shrinks when space is limited.' },
                    { prop: 'order', desc: 'Changes the visual order of flex or grid items without changing the HTML.' },
                    { prop: 'grid-template-columns', desc: 'Defines the number and size of explicit grid columns.' },
                    { prop: 'grid-column', desc: 'Specifies which column(s) a grid item occupies.' },
                    { prop: 'grid-template-rows', desc: 'Defines the number and size of explicit grid rows.' },
                    { prop: 'grid-row', desc: 'Specifies which row(s) a grid item occupies.' },
                    { prop: 'grid-auto-flow', desc: 'Controls how automatically placed grid items are inserted.' },
                    { prop: 'grid-auto-columns', desc: 'Sets the size of implicitly created grid columns.' },
                    { prop: 'grid-auto-rows', desc: 'Sets the size of implicitly created grid rows.' },
                    { prop: 'gap', desc: 'Sets the spacing between rows and columns.' },
                  ].map(item => (
                    <div key={item.prop} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-zinc-300 min-w-[170px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                      <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alignment Properties */}
              <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
                <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                  <h4 className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                    Alignment Properties
                  </h4>
                </div>
                <div className="p-4 border-b border-zinc-800/60 bg-fuchsia-500/5">
                  <div className="flex flex-col gap-6 text-xs">
                    <div className="space-y-4">
                      <div>
                        <span className="font-semibold text-fuchsia-300 block mb-2">Axis Mapping</span>
                        <div className="space-y-3 text-zinc-400">
                          <div className="flex flex-col gap-1">
                            <span className="text-zinc-200 font-medium">Flexbox</span>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400 leading-snug">
                              <span><code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">justify</code> = main axis (horizontal)</span>
                              <span><code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">align</code> = cross axis (vertical)</span>
                              <span className="italic text-zinc-500">(vice versa for flex-col)</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-zinc-200 font-medium">Grid</span>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400 leading-snug">
                              <span><code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">justify</code> = horizontal</span>
                              <span><code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">align</code> = vertical</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-zinc-200 font-medium">Place</span>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400 leading-snug">
                              <span><code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">justify</code> + <code className="text-[10px] bg-zinc-800/80 px-1 py-0.5 rounded text-fuchsia-200 border border-fuchsia-500/20 shadow-sm">align</code></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <span className="font-semibold text-fuchsia-300 block mb-2">Direction Rules</span>
                        <div className="space-y-2 text-zinc-400">
                          <p><code className="text-[10px] font-mono text-zinc-300">justify-*</code> <span className="text-zinc-500 mx-1">→</span> One direction</p>
                          <p><code className="text-[10px] font-mono text-zinc-300">align-*</code> <span className="text-zinc-500 mx-1">→</span> The other direction</p>
                          <p><code className="text-[10px] font-mono text-zinc-300">place-*</code> <span className="text-zinc-500 mx-1">→</span> Both directions simultaneously</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-fuchsia-300 block mb-2">Place Shorthands</span>
                        <div className="space-y-2.5 text-zinc-400 font-mono text-[10px]">
                          <div className="flex items-center gap-2">
                            <span className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-fuchsia-200 shrink-0 border border-fuchsia-500/20 shadow-sm">place-content</span>
                            <span className="text-zinc-500">=</span>
                            <span className="text-zinc-400">justify-content + align-content</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-fuchsia-200 shrink-0 border border-fuchsia-500/20 shadow-sm">place-items</span>
                            <span className="text-zinc-500">=</span>
                            <span className="text-zinc-400">justify-items + align-items</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-fuchsia-200 shrink-0 border border-fuchsia-500/20 shadow-sm">place-self</span>
                            <span className="text-zinc-500">=</span>
                            <span className="text-zinc-400">justify-self + align-self</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { prop: 'justify-content', desc: 'Aligns all items as a group along the main (or inline) axis.' },
                    { prop: 'justify-items', desc: 'Sets the default inline-axis alignment for all grid items inside their cells.' },
                    { prop: 'justify-self', desc: 'Aligns a single grid item along the inline axis within its own cell.' },
                    { prop: 'align-content', desc: 'Aligns multiple rows or columns as a group along the cross (or block) axis.' },
                    { prop: 'align-items', desc: 'Sets the default cross-axis alignment for all flex or grid items.' },
                    { prop: 'align-self', desc: 'Overrides align-items for one flex or grid item.' },
                    { prop: 'place-content', desc: 'Shorthand for align-content and justify-content.' },
                    { prop: 'place-items', desc: 'Shorthand for align-items and justify-items.' },
                    { prop: 'place-self', desc: 'Shorthand for align-self and justify-self.' },
                  ].map(item => (
                    <div key={item.prop} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-zinc-300 min-w-[140px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                      <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          
                    </>
        )}
        {/* Note about v4 changes */}
          <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Tailwind v4 Note</span>
              Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like `-opacity` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Examples to try</h3>
          <div className="space-y-3">
            {module.examples.map((example, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-indigo-500 transition-colors group">
                <div>
                  <div className="font-medium text-white mb-1">{example.label}</div>
                  <code className="text-sm text-indigo-400 bg-zinc-950 border border-indigo-500/30 px-1.5 py-0.5 rounded break-all">
                    {example.classes}
                  </code>
                </div>
                <button
                  onClick={() => setPlaygroundClasses(example.classes)}
                  className="shrink-0 flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 shadow-sm rounded-lg px-3 py-1.5 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
                >
                  <Play className="w-4 h-4" />
                  Try it
                </button>
              </div>
            ))}
          </div>
        </section>

        {module.challenge.description && (
        <section className="bg-zinc-900 p-6 rounded-2xl shadow-xl shadow-black/50 relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            Challenge
            {challengePassed && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
          </h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-md">{module.challenge.description}</p>
          
          <div className="space-y-3">
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Required Classes</div>
            <div className="flex flex-wrap gap-2">
              {module.challenge.targetClasses.map(target => {
                const currentClasses = playgroundClasses.split(' ').map(c => c.trim());
                const isMet = currentClasses.includes(target);
                return (
                  <span
                    key={target}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-mono transition-colors ${
                      isMet 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {isMet && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {target}
                  </span>
                )
              })}
            </div>
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
