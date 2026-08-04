import fs from 'fs';

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');

  // Add X to imports if missing
  if (!content.includes('X }')) {
    content = content.replace("RotateCcw } from 'lucide-react'", "RotateCcw, X } from 'lucide-react'");
  }

  // Rewrite Row 2
  const startIndex = content.indexOf('{/* Row 2: Variants */}');
  if (startIndex === -1) return;
  
  // Find the end of Row 2 div
  const searchStr = '</div>\n      </div>\n\n      {/* Canvas Area */}';
  const endIndex = content.indexOf(searchStr, startIndex);
  
  if (endIndex === -1) return;

  const pre = content.substring(0, startIndex);
  const post = content.substring(endIndex + searchStr.length);

  // The new Row 2
  const newRow2 = `{/* Row 2: Variants */}
        <div 
          className={\`overflow-hidden transition-all duration-200 ease-out bg-zinc-900/50 \${selectedProperty ? 'max-h-96 opacity-100 border-b border-zinc-800/50' : 'max-h-0 opacity-0'}\`}
        >
          <div 
            className="p-3 flex items-start sm:items-center justify-between gap-4 px-4 pb-2 min-w-0" 
            onWheel={handleWheel}
          >
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {selectedProperty && wildcards[selectedProperty]?.map(variant => (
                <button
                  key={variant}
                  onClick={() => handleVariantClick(variant)}
                  className={\`shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border \${
                    activeClassesSet.has(variant)
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                      : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                  }\`}
                >
                  {variant}
                </button>
              ))}
            </div>
            {selectedProperty && (
              <button
                onClick={() => setSelectedProperty(null)}
                className="w-7 h-7 shrink-0 flex items-center justify-center text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded transition-colors ml-2"
                title="Close variants"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Canvas Area */}`;

  fs.writeFileSync(file, pre + newRow2 + post);
};

replaceInFile('src/components/Playground.tsx');
replaceInFile('src/components/TailwindPlayground.tsx');

