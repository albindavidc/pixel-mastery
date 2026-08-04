const fs = require('fs');

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  
  const searchStr = `<div key={group.group} className={\`flex items-center justify-between gap-4 p-3 \${gIdx !== activeControlData.length - 1 ? 'border-b border-zinc-800/50' : ''}\`}>
              <div 
                className="flex-1 flex flex-wrap items-center gap-1.5 px-1 pb-1 min-w-0"`;

  const newStr = `<div key={group.group} className={\`flex items-start sm:items-center justify-between gap-4 p-3 \${gIdx !== activeControlData.length - 1 ? 'border-b border-zinc-800/50' : ''}\`}>
              <div className="w-24 shrink-0 flex flex-col justify-center border-r border-zinc-800/50 pr-2 mr-1 mt-1 sm:mt-0">
                {group.group.split(' ').map((word, i) => (
                  <span key={i} className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">{word}</span>
                ))}
              </div>
              <div 
                className="flex-1 flex flex-wrap items-center gap-1.5 px-1 pb-1 min-w-0"`;

  content = content.replace(searchStr, newStr);
  fs.writeFileSync(file, content);
};

replaceInFile('src/components/Playground.tsx');
replaceInFile('src/components/TailwindPlayground.tsx');
