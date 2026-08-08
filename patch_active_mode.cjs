const fs = require('fs');

let cep = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Add activeMode prop
cep = cep.replace(
  'onExample?: () => void;',
  "onExample?: () => void;\n  activeMode?: 'eg' | 'try' | null;"
);
cep = cep.replace(
  'onExample,',
  'onExample,\n  activeMode,'
);

// Update 'eg' button
cep = cep.replace(
  /onClick=\{onExample\}\s*className="text-zinc-400 hover:text-white px-2 py-1 rounded border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold"/g,
  `onClick={onExample}
                className={\`px-2 py-1 rounded border hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold \${
                  activeMode === 'eg' 
                    ? 'bg-zinc-800 text-white border-zinc-500' 
                    : 'text-zinc-400 hover:text-white border-zinc-700'
                }\`}`
);

// Update 'try' button
cep = cep.replace(
  /onClick=\{onTry\}\s*className="text-zinc-400 hover:text-white px-2 py-1 rounded border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold"/g,
  `onClick={onTry}
                className={\`px-2 py-1 rounded border hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold \${
                  activeMode === 'try' 
                    ? 'bg-zinc-800 text-white border-zinc-500' 
                    : 'text-zinc-400 hover:text-white border-zinc-700'
                }\`}`
);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', cep);

let hp = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

if (!hp.includes('const [activeMode, setActiveMode]')) {
  hp = hp.replace(
    /const \[code, setCode\] = useState\(getDefaultCode\(activeCategory\)\);/,
    `const [code, setCode] = useState(getDefaultCode(activeCategory));\n  const [activeMode, setActiveMode] = useState<'eg' | 'try' | null>(null);`
  );

  hp = hp.replace(
    /useEffect\(\(\) => \{\n    setCode\(getDefaultCode\(activeCategory\)\);\n  \}, \[activeCategory\]\);/g,
    `useEffect(() => {
    setCode(getDefaultCode(activeCategory));
    setActiveMode(null);
  }, [activeCategory]);`
  );

  hp = hp.replace(
    /onReset=\{.*?\}\s*onTry=\{.*?\}\s*onExample=\{.*?\}/s,
    `onReset={() => { setCode(getDefaultCode(activeCategory)); setActiveMode(null); }}
        onTry={() => { setCode(''); setActiveMode('try'); }}
        onExample={() => { setCode(getExampleCode(activeCategory)); setActiveMode('eg'); }}
        activeMode={activeMode}`
  );

  fs.writeFileSync('src/components/HtmlPlayground.tsx', hp);
}
