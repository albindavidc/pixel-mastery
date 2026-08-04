const fs = require('fs');

const file = 'src/components/IframePreview.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchStr = `  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div 
        style={{`;

const replaceStr = `  const isLayoutMode = previewMode === 'layouts' || previewMode === 'tailwind' || previewMode === 'flex' || previewMode === 'grid';

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden relative">
      {isLayoutMode && (
        <div className="absolute top-4 left-4 flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700/50 text-slate-300 z-10 shadow-lg pointer-events-none">
          <div className="flex items-center gap-2 text-sky-400">
            <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
            <span>Container</span>
          </div>
          <div className="flex items-center gap-2 text-fuchsia-400">
            <span className="w-3 h-3 rounded bg-fuchsia-500/20 border-2 border-fuchsia-500"></span>
            <span>Items</span>
          </div>
        </div>
      )}
      <div 
        style={{`;

content = content.replace(searchStr, replaceStr);

const searchStr2 = `                   {/* The actual preview container with simClasses */}
                   <div className={\`absolute inset-0 p-4 transition-all duration-300 \${containerClassesStr}\`}>`;

const replaceStr2 = `                   {/* The actual preview container with simClasses */}
                   <div className={\`absolute inset-0 p-4 transition-all duration-300 border-2 border-dotted border-sky-400/50 \${containerClassesStr}\`}>`;

content = content.replace(searchStr2, replaceStr2);

fs.writeFileSync(file, content);
