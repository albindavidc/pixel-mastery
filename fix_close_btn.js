import fs from 'fs';

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');

  // Add X to imports
  if (!content.includes('X }')) {
    content = content.replace("RotateCcw } from 'lucide-react'", "RotateCcw, X } from 'lucide-react'");
  }

  // Find Row 2
  const row2Regex = /\{\/\* Row 2: Variants \*\/\}\s*<div\s*className=\{`overflow-hidden[^`]*`\}\s*>\s*<div\s*className="[^"]*"\s*onWheel=\{handleWheel\}\s*>\s*(\{selectedProperty[\s\S]*?\}<\/button>\s*\)\)\}\s*)<\/div>\s*<\/div>/g;
  
  content = content.replace(row2Regex, (match, variantsCode) => {
    return `{/* Row 2: Variants */}
        <div 
          className={\`overflow-hidden transition-all duration-200 ease-out bg-zinc-900/50 \${selectedProperty ? 'max-h-96 opacity-100 border-b border-zinc-800/50' : 'max-h-0 opacity-0'}\`}
        >
          <div 
            className="p-3 flex items-start sm:items-center justify-between gap-4 px-4 pb-2 min-w-0" 
            onWheel={handleWheel}
          >
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              ${variantsCode}
            </div>
            {selectedProperty && (
              <button
                onClick={() => setSelectedProperty(null)}
                className="shrink-0 p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors border border-transparent hover:border-zinc-700/80 mt-0.5 sm:mt-0"
                title="Close variants"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>`;
  });

  fs.writeFileSync(file, content);
};

replaceInFile('src/components/Playground.tsx');
replaceInFile('src/components/TailwindPlayground.tsx');

