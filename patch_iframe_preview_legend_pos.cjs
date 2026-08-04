const fs = require('fs');

const file = 'src/components/IframePreview.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchStr = `        <div className="absolute top-4 left-4 flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700/50 text-slate-300 z-10 shadow-lg pointer-events-none">`;

const replaceStr = `        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 flex flex-col items-start gap-4 text-[10px] font-bold tracking-widest uppercase bg-slate-900/80 backdrop-blur px-4 py-4 rounded-lg border border-slate-700/50 text-slate-300 z-10 shadow-lg pointer-events-none">`;

content = content.replace(searchStr, replaceStr);

fs.writeFileSync(file, content);
