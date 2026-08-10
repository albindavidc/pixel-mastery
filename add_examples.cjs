const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

const newExamples = `
        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* LEVEL 4: INTERACTIVE & ANIMATED */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">04 · INTERACTIVE & ANIMATED</h3>
              <p className="text-zinc-400 text-sm mt-1">Combining states, transitions, and transforms</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">Motion & State</div>
              <div className="text-zinc-500 text-xs">Transform + Transition + Hover/Focus/Active</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;div&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-cyan-400">transform transition-all duration-300 ease-out</span>
                     <SvgBrace label="ANIMATION BASE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="MOTION" colorClass="text-cyan-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-pink-400">hover:scale-105 hover:-translate-y-1 hover:shadow-xl</span>
                     <SvgBrace label="HOVER STATES" colorClass="text-pink-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-fuchsia-400">active:scale-95 active:shadow-md</span>
                     <SvgBrace label="ACTIVE STATES" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="INTERACTIONS" colorClass="text-pink-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-amber-400">bg-gradient-to-r from-purple-500 to-pink-500</span>
                     <SvgBrace label="GRADIENT" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="STYLING" colorClass="text-amber-400" position="top" className="bottom-full mb-2" />
                 </div>

                 <span className="text-violet-400">"</span>
                 
               </div>
               <span className="text-blue-400">&gt;&lt;/div&gt;</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* LEVEL 5: RESPONSIVE GRID */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">05 · RESPONSIVE GRID</h3>
              <p className="text-zinc-400 text-sm mt-1">Structural breakpoints and grid templating</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">Adaptive Layout</div>
              <div className="text-zinc-500 text-xs">Grid + Columns + Breakpoints</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;div&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-blue-400">grid gap-4 sm:gap-6 lg:gap-8</span>
                     <SvgBrace label="GRID & GAPS" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="BASE STRUCTURE" colorClass="text-blue-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-cyan-400">grid-cols-1</span>
                     <SvgBrace label="MOBILE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <span>&nbsp;</span>
                   <div className="relative flex">
                     <span className="text-fuchsia-400">sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4</span>
                     <SvgBrace label="BREAKPOINTS" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="COLUMNS" colorClass="text-cyan-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-amber-400">w-full max-w-7xl mx-auto</span>
                     <SvgBrace label="CONTAINER" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="SIZING" colorClass="text-amber-400" position="top" className="bottom-full mb-2" />
                 </div>

                 <span className="text-violet-400">"</span>
                 
               </div>
               <span className="text-blue-400">&gt;&lt;/div&gt;</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* LEVEL 6: TYPOGRAPHIC POLISH */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">06 · TYPOGRAPHIC POLISH</h3>
              <p className="text-zinc-400 text-sm mt-1">Refined text styling, line heights, and letter spacing</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">Text Rendering</div>
              <div className="text-zinc-500 text-xs">Font + Size + Tracking + Leading + Color</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;h1&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-fuchsia-400">font-sans text-4xl md:text-6xl font-extrabold</span>
                     <SvgBrace label="FONT & WEIGHT" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="TYPOGRAPHY" colorClass="text-fuchsia-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-cyan-400">tracking-tight leading-none text-balance</span>
                     <SvgBrace label="METRICS & WRAPPING" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="READABILITY" colorClass="text-cyan-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-amber-400">text-transparent bg-clip-text</span>
                     <SvgBrace label="MASKING" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="EFFECTS" colorClass="text-amber-400" position="top" className="bottom-full mb-2" />
                 </div>

                 <span className="text-violet-400">"</span>
                 
               </div>
               <span className="text-blue-400">&gt;Hero&lt;/h1&gt;</span>
            </div>
          </div>
        </div>
`;

code = code.replace('      </div>\n    </div>\n  );\n}', newExamples + '\n      </div>\n    </div>\n  );\n}');

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
