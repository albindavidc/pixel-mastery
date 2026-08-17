const fs = require('fs');
let curr = fs.readFileSync('src/components/Curriculum.tsx', 'utf8');

// Find the index of <ModuleDetails moduleId={module.id} />
const idx = curr.indexOf('<ModuleDetails moduleId={module.id} />');
if (idx === -1) {
  console.log("Could not find ModuleDetails tag!");
  process.exit(1);
}

// Slice the file up to that point, then append the restored content.
let newCurr = curr.slice(0, idx + '<ModuleDetails moduleId={module.id} />'.length);

newCurr += `
        {/* Note about v4 changes */}
        {!module.id.startsWith('html-') && module.id !== 'js-dom-bom' && (
          <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Tailwind v4 Note</span>
              Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like \`-opacity\` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
            </div>
          </div>
        )}
        {module.id === 'js-dom-bom' && (
          <div className="my-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 flex gap-3 text-sm text-amber-200">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Browser Compatibility Note</span>
              Most DOM and BOM APIs covered here are broadly supported across modern browsers. However, always check MDN for newer or less-consistently-supported methods before relying on them in production.
            </div>
          </div>
        )}
        </div>
        
        {module.id !== 'js-dom-bom' && (
        <section className="mb-12">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Examples to try</h3>
          <div className="space-y-3">
            {module.examples.map((example, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-indigo-500 transition-colors group">
                <div>
                  <div className="font-medium text-white mb-1">{example.label}</div>
                  <code className="text-sm text-indigo-400 bg-zinc-950 border border-indigo-500/30 px-1.5 py-0.5 rounded break-all">
                    {example.classes}
                  </code>
                </div>
                <button
                  onClick={() => setPlaygroundClasses(example.classes)}
                  className="shrink-0 flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 shadow-sm rounded-lg px-3 py-1.5 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
                >
                  <Play className="w-4 h-4" />
                  Try it
                </button>
              </div>
            ))}
          </div>
        </section>
        )}
        
        {module.challenge.description && (
        <section className="bg-zinc-900 p-6 rounded-2xl shadow-xl shadow-black/50 relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            Challenge
            {challengePassed && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
          </h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-md">{module.challenge.description}</p>
          
          <div className="space-y-3">
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Required Classes</div>
            <div className="flex flex-wrap gap-2">
              {module.challenge.targetClasses.map(target => {
                const currentClasses = playgroundClasses.split(' ').map(c => c.trim());
                const isMet = currentClasses.includes(target);
                return (
                  <span
                    key={target}
                    className={\`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-mono transition-colors \${
                      isMet 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700/50'
                    }\`}
                  >
                    {isMet ? <CheckCircle2 className="w-3.5 h-3.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />}
                    {target}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/Curriculum.tsx', newCurr);
console.log('Restored Curriculum.tsx');
