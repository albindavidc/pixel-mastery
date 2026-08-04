import fs from 'fs';

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');

  const oldButtonRegex = /<button\s*onClick=\{([^}]*?setSelectedProperty\(null\)[^}]*?)\}\s*className="shrink-0 p-1\.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800\/80 transition-colors border border-transparent hover:border-zinc-700\/80 mt-0\.5 sm:mt-0"\s*title="Close variants"\s*>\s*<X className="w-4 h-4" \/>\s*<\/button>/g;
  
  content = content.replace(oldButtonRegex, `<button
                onClick={$1}
                className="w-7 h-7 shrink-0 flex items-center justify-center text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded transition-colors ml-2"
                title="Close variants"
              >
                <X className="w-3.5 h-3.5" />
              </button>`);

  fs.writeFileSync(file, content);
};

replaceInFile('src/components/Playground.tsx');
replaceInFile('src/components/TailwindPlayground.tsx');

