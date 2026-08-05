const fs = require('fs');
const path = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Extract the "Alignment Cheat Sheet"
const alignStart = content.indexOf('{/* Alignment Cheat Sheet */}');
const alignEnd = content.indexOf('{/* Common Properties */}');

if (alignStart === -1 || alignEnd === -1) {
    console.error("Could not find blocks");
    process.exit(1);
}

// Remove the alignment cheat sheet from its current location
content = content.substring(0, alignStart) + content.substring(alignEnd);

// 2. Find the end of "Common Properties" and insert it there.
// The "Common Properties" ends with:
//               </div>
//             </div>
//           </div>
//         </div>
//
//         <header className="mb-8">

const insertTarget = '        </div>\n\n        <header className="mb-8">';
if (!content.includes(insertTarget)) {
    console.error("Could not find insert target");
    // let's try a generic fallback
}

const newAlignment = `
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
`;

content = content.replace(insertTarget, newAlignment + '\n' + insertTarget);
fs.writeFileSync(path, content, 'utf8');
