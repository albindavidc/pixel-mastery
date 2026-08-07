const fs = require('fs');

let content = fs.readFileSync('src/components/ComponentsShowcase.tsx', 'utf8');

// Add import for componentMap
if (!content.includes('componentMap')) {
  content = content.replace("import { Infrastructure } from './showcase/categories/Infrastructure';", "import { Infrastructure } from './showcase/categories/Infrastructure';\nimport { componentMap } from './showcase/componentMap';");
}

// Replace the Category Index block
const searchBlock = `          {(activeCategory === 'all' || activeCategory === 'essential' || activeCategory === 'top50') && (
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-indigo-400">📋</span> Category Index
              </h2>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.filter(c => !['all', 'essential', 'top50'].includes(c.id)).map(cat => (
                  <a 
                    key={cat.id} 
                    href={\`#category-\${cat.id}\`}
                    className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 text-zinc-400 text-sm transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          )}`;

const newBlock = `          {(activeCategory === 'all' || activeCategory === 'essential' || activeCategory === 'top50') && (
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-indigo-400">📋</span> Category Index
              </h2>
              <div className="flex flex-col gap-3">
                {CATEGORIES.filter(c => !['all', 'essential', 'top50'].includes(c.id)).map(cat => {
                  const allComps = componentMap[cat.id] || [];
                  const catFiltered = allComps.filter(name => !filterList || filterList.some(f => name.toLowerCase().includes(f.toLowerCase())));
                  
                  if (catFiltered.length === 0) return null;
                  
                  return (
                    <a 
                      key={cat.id} 
                      href={\`#category-\${cat.id}\`}
                      className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors shadow-sm flex flex-col gap-1.5 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{cat.icon}</span>
                        <span className="font-semibold text-zinc-200 group-hover:text-indigo-300">{cat.label}</span>
                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                          {catFiltered.length} {catFiltered.length === 1 ? 'component' : 'components'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-500 leading-relaxed pl-8 pr-4">
                        {catFiltered.join(', ')}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}`;

content = content.replace(searchBlock, newBlock);

fs.writeFileSync('src/components/ComponentsShowcase.tsx', content, 'utf8');
