const fs = require('fs');

const code = `import SvgBrace from './SvgBrace';

export default function TailwindAnatomyGuidelines() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Tailwind CSS Element Anatomy
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 shrink-0">
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400"></span>Structure</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Styling</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>Behavior</div>
           <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>Variants</div>
        </div>
      </div>
      
      <div className="flex flex-col gap-12 p-8 md:p-12 xl:p-16 overflow-hidden">
        
        {/* LEVEL 1: FUNDAMENTAL */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">01 · FUNDAMENTAL</h3>
              <p className="text-zinc-400 text-sm mt-1">Simple utility composition · basic structure and presentation</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">1 dimension · Styling</div>
              <div className="text-zinc-500 text-xs">Padding + background + text color</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-16 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-base sm:text-lg lg:text-xl font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;div&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 <div className="relative flex">
                   <span className="text-cyan-400">p-4</span>
                   <SvgBrace label="SPACE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-amber-400">bg-white</span>
                   <SvgBrace label="BACKGROUND" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-fuchsia-400">text-black</span>
                   <SvgBrace label="TEXT" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                 </div>
                 
                 <span className="text-violet-400">"</span>
                 
                 <SvgBrace label="STYLING" colorClass="text-amber-400" position="bottom" className="top-full mt-[4.5rem]" />
               </div>
               <span className="text-blue-400">&gt;Hello &lt;/div&gt;</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>
        
        {/* LEVEL 2: COMPOSED */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">02 · COMPOSED</h3>
              <p className="text-zinc-400 text-sm mt-1">Multiple utility families · layout + styling working together</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">2 dimensions</div>
              <div className="text-zinc-500 text-xs">Layout + Styling</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-16 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-base sm:text-lg lg:text-xl font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;button&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 <div className="relative flex">
                   <span className="text-blue-400">flex</span>
                   <SvgBrace label="LAYOUT" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-cyan-400">items-center gap-2 px-4 py-2</span>
                   <SvgBrace label="ALIGNMENT + SPACE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-blue-400">rounded-lg</span>
                   <SvgBrace label="BORDER" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-amber-400">bg-indigo-500</span>
                   <SvgBrace label="BACKGROUND" colorClass="text-amber-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-fuchsia-400">text-white font-medium</span>
                   <SvgBrace label="TYPOGRAPHY" colorClass="text-fuchsia-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>

                 <div className="relative flex">
                   <span className="text-pink-400">shadow-md</span>
                   <SvgBrace label="EFFECT" colorClass="text-pink-400" position="bottom" className="top-full mt-2" />
                 </div>
                 
                 <span className="text-violet-400">"</span>
                 
                 <SvgBrace label="STRUCTURE + STYLING" colorClass="text-amber-400" position="bottom" className="top-full mt-[4.5rem]" />
               </div>
               <span className="text-blue-400">&gt;Save &lt;/button&gt;</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* LEVEL 3: ADVANCED */}
        <div className="flex flex-col w-full relative">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">03 · ADVANCED</h3>
              <p className="text-zinc-400 text-sm mt-1">Full composition · layout + styling + behavior + contextual variants</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-right shrink-0">
              <div className="text-emerald-400 text-[10px] font-bold tracking-wider mb-1">DIFFICULTY PROFILE</div>
              <div className="text-zinc-200 text-sm font-semibold">4 dimensions</div>
              <div className="text-zinc-500 text-xs">Layout + Styling + Variants + Behavior</div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar flex justify-start lg:justify-center">
            <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">
               <span className="text-blue-400">&lt;button&nbsp;</span>
               <span className="text-rose-400">class</span>
               <span className="text-zinc-500">=</span>
               <div className="relative flex">
                 <span className="text-violet-400">"</span>
                 
                 {/* Layout Group */}
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-cyan-400">flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3</span>
                     <SvgBrace label="FLEX · SIZE · SPACE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="LAYOUT" colorClass="text-blue-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 {/* Styling Group */}
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
                     <span className="text-cyan-400">shadow-md</span>
                     <SvgBrace label="BEHAVIOUR" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                   </div>
                   <SvgBrace label="STYLING" colorClass="text-amber-400" position="top" className="bottom-full mb-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 {/* Variants Group */}
                 <div className="relative flex">
                   <div className="relative flex">
                     <span className="text-pink-400">hover:bg-indigo-600 focus:outline-none disabled:cursor-not-allowed</span>
                     <SvgBrace label="STATE" colorClass="text-pink-400" position="bottom" className="top-full mt-2" />
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

      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
