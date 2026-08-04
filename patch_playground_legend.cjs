const fs = require('fs');

const files = ['src/components/Playground.tsx', 'src/components/TailwindPlayground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const searchStr = `              <div className="w-24 shrink-0 flex flex-col justify-center border-r border-zinc-800/50 pr-2 mr-1 mt-1 sm:mt-0">
                {group.group.split(' ').map((word, i) => (
                  <span key={i} className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">{word}</span>
                ))}
              </div>`;

  const replaceStr = `              <div className="w-24 shrink-0 flex flex-col justify-center border-r border-zinc-800/50 pr-2 mr-1 mt-1 sm:mt-0 relative">
                {group.group.split(' ').map((word, i) => (
                  <span key={i} className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">{word}</span>
                ))}
                {(group.group.includes('Container')) && (
                  <div className="mt-1 flex items-center gap-1.5 opacity-80">
                    <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
                  </div>
                )}
                {(group.group.includes('Item') || group.group.includes('Items')) && (
                  <div className="mt-1 flex items-center gap-1.5 opacity-80">
                    <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none text-fuchsia-400">1</span>
                  </div>
                )}
              </div>`;

  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync(file, content);
});
