const fs = require('fs');
const file = 'src/components/BasisHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const search = `<span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[min(20vw,300px)]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: min(20vw, 300px);</span>
                        </div>`;

const replace = search + `
                        <div className="flex items-center gap-3 text-xs mt-1">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[16/9]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: 16/9; <span className="text-slate-600 font-sans italic">/* aspect ratio */</span></span>
                        </div>`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
