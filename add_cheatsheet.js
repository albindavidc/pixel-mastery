import fs from 'fs';

const file = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(file, 'utf8');

const cheatSheet = `        {/* Quick Reference Guide */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-zinc-300">
            <Info className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-sm tracking-wide uppercase">Quick Reference Guide</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Flexbox */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Flex Container
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['flex-direction', 'flex-wrap', 'flex', 'gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items'].map(prop => (
                    <span key={prop} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded text-[10px] font-mono">{prop}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-indigo-400/80 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500/50"></span>
                  Flex Item
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['flex-basis', 'flex-grow', 'flex-shrink', 'order', 'align-self', 'place-self'].map(prop => (
                    <span key={prop} className="px-2 py-1 bg-indigo-500/5 text-indigo-300/80 border border-indigo-500/10 rounded text-[10px] font-mono">{prop}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Grid Container
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'gap', 'justify-content', 'justify-items', 'align-content', 'align-items', 'place-content', 'place-items'].map(prop => (
                    <span key={prop} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded text-[10px] font-mono">{prop}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-400/80 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
                  Grid Item
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['grid-column', 'grid-row', 'justify-self', 'align-self', 'place-self'].map(prop => (
                    <span key={prop} className="px-2 py-1 bg-emerald-500/5 text-emerald-300/80 border border-emerald-500/10 rounded text-[10px] font-mono">{prop}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="mb-8">`;

content = content.replace('<header className="mb-8">', cheatSheet);
fs.writeFileSync(file, content);
