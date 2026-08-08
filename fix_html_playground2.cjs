const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const colorMap = {
  indigo: 'bg-indigo-500 text-white',
  emerald: 'bg-emerald-500 text-white',
  rose: 'bg-rose-500 text-white',
  amber: 'bg-amber-500 text-white',
  cyan: 'bg-cyan-500 text-white',
  teal: 'bg-teal-500 text-white',
  pink: 'bg-pink-500 text-white',
  violet: 'bg-violet-500 text-white',
  zinc: 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
};

const replacement = `
      {/* Tag filter bar (sticky) */}
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
          {categories.map((cat: any) => {
            const isActive = activeCategory === cat.name;
            let activeColorClass = 'bg-indigo-500 text-white';
            if (cat.color === 'indigo') activeColorClass = 'bg-indigo-500 text-white';
            else if (cat.color === 'emerald') activeColorClass = 'bg-emerald-500 text-white';
            else if (cat.color === 'rose') activeColorClass = 'bg-rose-500 text-white';
            else if (cat.color === 'amber') activeColorClass = 'bg-amber-500 text-white';
            else if (cat.color === 'cyan') activeColorClass = 'bg-cyan-500 text-white';
            else if (cat.color === 'teal') activeColorClass = 'bg-teal-500 text-white';
            else if (cat.color === 'pink') activeColorClass = 'bg-pink-500 text-white';
            else if (cat.color === 'violet') activeColorClass = 'bg-violet-500 text-white';
            
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={\`px-4 py-1.5 rounded-full font-mono text-sm whitespace-nowrap transition-colors \${
                  isActive
                    ? activeColorClass
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                }\`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <CodeEditorPreview
        code={code}
        onChange={setCode}
        onReset={() => setCode(getDefaultCode(activeCategory))}
        iframeRef={iframeRef}
        title={activeCatObj ? \`\${activeCatObj.name}.html\` : "index.html"}
        language="html"
      />
`;

content = content.replace(
  /\{\/\* Tag filter bar \(sticky\) \*\/\}[\s\S]*?language="html"\n      \/>/,
  replacement
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
