const fs = require('fs');
const file = 'src/components/BasisHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const search = `<div className="flex items-center gap-3 text-xs">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[14.2857%]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: 14.2857%;</span>
                        </div>`;

const replace = search + `
                        <div className="flex items-center gap-3 text-xs mt-1">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[1/7]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: 1/7; <span className="text-slate-600 font-sans italic">/* aspect ratio or custom fraction */</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-xs mt-1">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[calc(100%/7)]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: calc(100% / 7);</span>
                        </div>`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
