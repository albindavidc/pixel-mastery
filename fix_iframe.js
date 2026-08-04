import fs from 'fs';

let content = fs.readFileSync('src/components/IframePreview.tsx', 'utf8');

// The block to replace:
/*
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">1</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">2</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-rose-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">3</div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">4</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">5</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center text-violet-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">6</div>
                      </div>
                      {(simClasses.includes('flex-wrap') || simClasses.includes('flex-nowrap')) && (
                        <div className="flex flex-col gap-4">
                          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-pink-500/20 border-2 border-pink-500 flex items-center justify-center text-pink-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">7</div>
                          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">8</div>
                        </div>
                      )}
*/

content = content.replace(
  /<div className="flex flex-col gap-4">[\s\S]*?<\/div>\s*<\/div>\s*\)\}/m,
  `<div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">1</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">2</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-rose-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">3</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">4</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">5</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center text-violet-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">6</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-pink-500/20 border-2 border-pink-500 flex items-center justify-center text-pink-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">7</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">8</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">9</div>
`
);

fs.writeFileSync('src/components/IframePreview.tsx', content);

