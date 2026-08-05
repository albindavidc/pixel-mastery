const fs = require('fs');

const files = ['src/components/Playground.tsx', 'src/components/TailwindPlayground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const customTagUi = `              {selectedProperty && wildcards[selectedProperty]?.map(variant => (
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
              {selectedProperty === 'flex-basis' && Array.from(activeClassesSet).filter(c => c.startsWith('basis-') && !wildcards['flex-basis']?.includes(c)).map(variant => (
                <button
                  key={variant}
                  onClick={() => handleVariantClick(variant)}
                  className="shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border bg-indigo-600 text-white border-indigo-500 shadow-sm flex items-center gap-1.5"
                >
                  {variant}
                  <X className="w-3 h-3 text-indigo-200" />
                </button>
              ))}`;

  const searchTag = `              {selectedProperty && wildcards[selectedProperty]?.map(variant => (
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
              ))}`;

  content = content.replace(searchTag, customTagUi);
  fs.writeFileSync(file, content);
});
