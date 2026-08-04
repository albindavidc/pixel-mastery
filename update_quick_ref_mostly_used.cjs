const fs = require('fs');

const file = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(file, 'utf8');

const newQuickRef = `        {/* Quick Reference Guide */}
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
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
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <header`;

const startIndex = content.indexOf('{/* Quick Reference Guide */}');
const endIndex = content.indexOf('<header', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newQuickRef + content.substring(endIndex + 7);
  fs.writeFileSync(file, content);
}
