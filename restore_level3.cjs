const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

const level3Str = `        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* LEVEL 3: ADVANCED */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">03 · ADVANCED</h3>
              <p className="text-zinc-400 text-sm mt-1">Full composition · layout + appearance + behavior + contextual variants</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">4 dimensions</div>
              <div className="text-zinc-500 text-xs">Layout + Appearance + Variants + Behavior</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar px-4 sm:px-8">
            <div className="w-max min-w-full flex justify-center">
              <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max px-4 sm:px-10 shrink-0">
               <span className="text-blue-400">&lt;button&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 {/* Layout Group */}
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-blue-400">flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3</span>
                     <SvgBrace label="FLEX · SIZE · SPACE" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="LAYOUT" colorClass="text-blue-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 {/* Appearance Group */}
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-blue-400">rounded-lg</span>
                     <SvgBrace label="BORDER" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-amber-400">bg-indigo-500 text-white font-medium</span>
                     <SvgBrace label="BACKGROUND · TEXT" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-amber-400">shadow-md</span>
                     <SvgBrace label="EFFECTS & FILTERS" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="APPEARANCE" colorClass="text-amber-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 {/* Variants Group */}
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-fuchsia-400">hover:bg-indigo-600 focus:outline-none disabled:cursor-not-allowed</span>
                     <SvgBrace label="STATE" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-cyan-400">transition-all duration-200</span>
                     <SvgBrace label="ANIMATION" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-fuchsia-400">dark:bg-indigo-400 dark:text-gray-950</span>
                     <SvgBrace label="THEME" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="VARIANTS" colorClass="text-fuchsia-400" position="top" className="bottom-full mb-2" />
                 </div>

                 <span className="text-violet-400">"</span>
                 
               </div>
               <span className="text-blue-400">&gt;Save &lt;/button&gt;</span>
              </div>
            </div>
          </div>
        </div>`;

code = code.replace(
    '               <span className="text-blue-400">&gt;Save &lt;/button&gt;</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">',
    '               <span className="text-blue-400">&gt;Save &lt;/button&gt;</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n' + level3Str + '\n      </div>\n\n    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">'
);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
