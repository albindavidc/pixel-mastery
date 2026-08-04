const fs = require('fs');

const iframeFile = 'src/components/IframePreview.tsx';
let iframeContent = fs.readFileSync(iframeFile, 'utf8');

// Remove legend from IframePreview
iframeContent = iframeContent.replace(/      \{isLayoutMode && \([\s\S]*?      \)\}\n/, '');
fs.writeFileSync(iframeFile, iframeContent);

const playgroundFile = 'src/components/TailwindPlayground.tsx';
let playgroundContent = fs.readFileSync(playgroundFile, 'utf8');

const searchStr = `          <div className="absolute top-3 right-4 flex gap-4 items-center z-10">
            {/* Preview Modes */}
            <div className="flex gap-1 bg-[#0f172a]/80 backdrop-blur rounded-lg p-1 border border-slate-700/50 shadow-lg">`;

const replaceStr = `          <div className="absolute top-3 right-4 flex gap-4 items-center z-10">
            {/* Legend */}
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
            {/* Preview Modes */}
            <div className="flex gap-1 bg-[#0f172a]/80 backdrop-blur rounded-lg p-1 border border-slate-700/50 shadow-lg">`;

playgroundContent = playgroundContent.replace(searchStr, replaceStr);
fs.writeFileSync(playgroundFile, playgroundContent);
