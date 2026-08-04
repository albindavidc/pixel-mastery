const fs = require('fs');

const file = 'src/components/IframePreview.tsx';
let content = fs.readFileSync(file, 'utf8');

const classProcessing = `  let simClasses = classes;
  if (hover) simClasses = simClasses.replace(/hover:/g, '');
  if (focus) simClasses = simClasses.replace(/focus:/g, '');

  const itemPrefixes = [
    'basis-', 'grow', 'shrink', 'order-', 
    'col-', 'row-', 'justify-self-', 'self-', 'place-self-'
  ];

  const classList = simClasses.split(' ').map(c => c.trim()).filter(Boolean);
  const containerClassList = [];
  const itemClassList = [];

  classList.forEach(c => {
    // Only EXACT matches for 'grow' and 'shrink', otherwise prefix matches
    const isItemClass = itemPrefixes.some(prefix => 
      (prefix === 'grow' && c === 'grow') ||
      (prefix === 'shrink' && c === 'shrink') ||
      (prefix.endsWith('-') && c.startsWith(prefix))
    );
    
    if (isItemClass) {
      itemClassList.push(c);
    } else {
      containerClassList.push(c);
    }
  });

  const containerClassesStr = containerClassList.join(' ');
  const itemClassesStr = itemClassList.join(' ');`;

content = content.replace(`  let simClasses = classes;
  if (hover) simClasses = simClasses.replace(/hover:/g, '');
  if (focus) simClasses = simClasses.replace(/focus:/g, '');`, classProcessing);


const newPreviewContainer = `                  {/* The actual preview container with simClasses */}
                   <div className={\`absolute inset-0 p-4 transition-all duration-300 \${containerClassesStr}\`}>
                        <div className={\`w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0 \${itemClassesStr}\`}>1</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">2</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-rose-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">3</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">4</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">5</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center text-violet-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">6</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-pink-500/20 border-2 border-pink-500 flex items-center justify-center text-pink-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">7</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">8</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">9</div>
                   </div>`;

const searchPreviewStr = `                  {/* The actual preview container with simClasses */}
                   <div className={\`absolute inset-0 p-4 transition-all duration-300 \${simClasses}\`}>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">1</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">2</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-rose-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">3</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">4</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">5</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center text-violet-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">6</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-pink-500/20 border-2 border-pink-500 flex items-center justify-center text-pink-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">7</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">8</div>
                        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">9</div>
                   </div>`;

content = content.replace(searchPreviewStr, newPreviewContainer);
fs.writeFileSync(file, content);
