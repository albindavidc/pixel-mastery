const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

const oldLegend = `<div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 shrink-0">
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400"></span>Structure</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Styling</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>Behavior</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>Variants</div>
        </div>`;

const newLegend = `<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800 w-full sm:w-auto overflow-x-auto hide-scrollbar shrink-0">
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span><span className="font-semibold text-zinc-300">Layout</span> <span className="text-zinc-500 hidden md:inline">(display, size, space, border)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span><span className="font-semibold text-zinc-300">Appearance</span> <span className="text-zinc-500 hidden lg:inline">(background, text, svg, effect, filter)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span><span className="font-semibold text-zinc-300">Behaviour</span> <span className="text-zinc-500 hidden xl:inline">(transform, transition, animation)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-fuchsia-400 shrink-0"></span><span className="font-semibold text-zinc-300">Variants</span> <span className="text-zinc-500 hidden xl:inline">(state, responsive, dark mode)</span></div>
        </div>`;

code = code.replace(oldLegend, newLegend);
fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
