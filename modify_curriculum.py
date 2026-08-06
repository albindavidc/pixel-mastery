import re

with open('src/components/Curriculum.tsx', 'r') as f:
    content = f.read()

# Replace Tailwind specific things conditionally
tailwind_note = """        {/* Note about v4 changes */}
          <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Tailwind v4 Note</span>
              Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like `-opacity` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
            </div>
          </div>"""

tailwind_note_conditional = """        {/* Note about v4 changes */}
        {!module.id.startsWith('html-') && (
          <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Tailwind v4 Note</span>
              Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like `-opacity` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
            </div>
          </div>
        )}"""

content = content.replace(tailwind_note, tailwind_note_conditional)


tailwind_examples_section = """        <section className="mb-12">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Examples to try</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {module.examples.map((ex, i) => (
              <button 
                key={i}
                onClick={() => {
                  setPlaygroundClasses(ex.classes);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500/50 transition-colors text-left overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="font-medium text-zinc-200 text-sm group-hover:text-white transition-colors">{ex.label}</span>
                  <Play className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <code className="text-xs text-indigo-300 font-mono bg-indigo-950/30 px-2 py-1 rounded block truncate w-full border border-indigo-500/10">{ex.classes}</code>
              </button>
            ))}
          </div>
        </section>"""

tailwind_examples_conditional = """        {!module.id.startsWith('html-') && (
        <section className="mb-12">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Examples to try</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {module.examples.map((ex, i) => (
              <button 
                key={i}
                onClick={() => {
                  setPlaygroundClasses(ex.classes);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500/50 transition-colors text-left overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="font-medium text-zinc-200 text-sm group-hover:text-white transition-colors">{ex.label}</span>
                  <Play className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <code className="text-xs text-indigo-300 font-mono bg-indigo-950/30 px-2 py-1 rounded block truncate w-full border border-indigo-500/10">{ex.classes}</code>
              </button>
            ))}
          </div>
        </section>
        )}"""

content = content.replace(tailwind_examples_section, tailwind_examples_conditional)

tailwind_challenge_section = """        <section>
          <div className={`p-6 rounded-xl border transition-colors ${
            isCompleted 
              ? 'bg-emerald-950/20 border-emerald-500/30' 
              : 'bg-zinc-900 border-zinc-800'
          }`}>
            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-inner ${
                isCompleted 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
              }`}>
                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <div className="w-3 h-3 rounded-full bg-zinc-600 animate-pulse"></div>}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                  {isCompleted ? 'Challenge Complete!' : 'Challenge'}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{module.challenge.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:self-end mt-4 sm:mt-0">
                {module.challenge.targetClasses.map((cls, i) => {
                  const hasClass = playgroundClasses.split(' ').map(c => c.trim()).filter(Boolean).includes(cls);
                  return (
                    <div 
                      key={i} 
                      className={`px-2 py-1 rounded text-xs font-mono border transition-all ${
                        hasClass 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                          : 'bg-zinc-950 text-zinc-500 border-zinc-800'
                      }`}
                    >
                      {cls}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>"""

tailwind_challenge_conditional = """        {!module.id.startsWith('html-') && (
        <section>
          <div className={`p-6 rounded-xl border transition-colors ${
            isCompleted 
              ? 'bg-emerald-950/20 border-emerald-500/30' 
              : 'bg-zinc-900 border-zinc-800'
          }`}>
            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-inner ${
                isCompleted 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
              }`}>
                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <div className="w-3 h-3 rounded-full bg-zinc-600 animate-pulse"></div>}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                  {isCompleted ? 'Challenge Complete!' : 'Challenge'}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{module.challenge.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:self-end mt-4 sm:mt-0">
                {module.challenge.targetClasses.map((cls, i) => {
                  const hasClass = playgroundClasses.split(' ').map(c => c.trim()).filter(Boolean).includes(cls);
                  return (
                    <div 
                      key={i} 
                      className={`px-2 py-1 rounded text-xs font-mono border transition-all ${
                        hasClass 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                          : 'bg-zinc-950 text-zinc-500 border-zinc-800'
                      }`}
                    >
                      {cls}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        )}"""

content = content.replace(tailwind_challenge_section, tailwind_challenge_conditional)

with open('src/components/Curriculum.tsx', 'w') as f:
    f.write(content)
