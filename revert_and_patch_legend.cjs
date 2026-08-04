const fs = require('fs');

const files = ['src/components/Playground.tsx', 'src/components/TailwindPlayground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Remove legend from mac dots
  const macDotsSearchStr = `          {/* Mac window dots */}
          <div className="absolute top-4 left-4 flex gap-4 items-center z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            
            {/* Legend (only show in layout modes) */}
            {(previewMode === 'layouts' || previewMode === 'tailwind' || previewMode === 'flex' || previewMode === 'grid') && (
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-[#0f172a]/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-300 shadow-lg pointer-events-none">
                <div className="flex items-center gap-2 text-sky-400">
                  <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
                  <span>Container</span>
                </div>
                <div className="flex items-center gap-2 text-fuchsia-400">
                  <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none">1</span>
                  <span>Item (1-9)</span>
                </div>
              </div>
            )}
          </div>`;

  const macDotsReplaceStr = `          {/* Mac window dots */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>`;

  content = content.replace(macDotsSearchStr, macDotsReplaceStr);

  // Add legend back to the left side of the tabs
  const tabSearchStr = `          <div className="absolute top-3 right-4 flex gap-4 items-center z-10">
            {/* Preview Modes */}`;

  const tabReplaceStr = `          <div className="absolute top-3 right-4 flex gap-4 items-center z-10">
            {/* Legend */}
            {(previewMode === 'layouts' || previewMode === 'tailwind' || previewMode === 'flex' || previewMode === 'grid') && (
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-[#0f172a]/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-300 shadow-lg pointer-events-none">
                <div className="flex items-center gap-2 text-sky-400">
                  <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
                  <span>Container</span>
                </div>
                <div className="flex items-center gap-2 text-fuchsia-400">
                  <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none">1</span>
                  <span>Item (1-9)</span>
                </div>
              </div>
            )}
            {/* Preview Modes */}`;

  content = content.replace(tabSearchStr, tabReplaceStr);
  fs.writeFileSync(file, content);
});
