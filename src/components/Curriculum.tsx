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
      <div className="max-w-2xl mx-auto p-8 lg:p-12">
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
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Flex Item
                </h4>
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

            {/* Grid */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Grid Container
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'justify-items'].map(prop => {
                    const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                    return (
                      <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Grid Item
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['grid-column', 'grid-row', 'justify-self'].map(prop => {
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
          
          {/* Common Properties */}
          <div className="pt-6 border-t border-zinc-800">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Common Properties (Flex & Grid)</h4>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Container
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {['gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items'].map(prop => {
                    const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                    return (
                      <span key={prop} className={`px-2 py-1 rounded text-[10px] font-mono border ${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Item
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {['align-self', 'place-self'].map(prop => {
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

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">{module.title}</h2>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-100 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </span>
            )}
          </div>
          <p className="text-lg text-zinc-400">{module.description}</p>
        </header>

        <div className="prose prose-invert max-w-none mb-10 text-zinc-400 leading-relaxed">
          <p>{module.content}</p>
          
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
      </div>
    </div>
  );
}
