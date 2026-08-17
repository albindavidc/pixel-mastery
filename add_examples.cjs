const fs = require('fs');
let code = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');

const examplesSection = `
      <section className="mb-6 mt-4">
        <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Examples to try</h3>
        <div className="space-y-3">
          {[
            { label: 'Toggle a class', classes: "document.querySelector('.box').classList.toggle('active')" },
            { label: 'Read the current URL', classes: "output.textContent = 'Current URL: ' + window.location.href;" },
            { label: 'Create and append an element', classes: "const el = document.createElement('p');\\nel.textContent = 'Hello!';\\noutput.appendChild(el);" }
          ].map((example, idx) => (
            <div key={idx} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-indigo-500 transition-colors group">
              <div>
                <div className="font-medium text-white mb-1">{example.label}</div>
                <code className="text-sm text-indigo-400 bg-zinc-950 border border-indigo-500/30 px-1.5 py-0.5 rounded break-all whitespace-pre-wrap">
                  {example.classes}
                </code>
              </div>
              <button
                onClick={() => handleTryCode(example.classes)}
                className="shrink-0 flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 shadow-sm rounded-lg px-3 py-1.5 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
              >
                <Play className="w-4 h-4" />
                Try it
              </button>
            </div>
          ))}
        </div>
      </section>
`;

code = code.replace(
  '<div className="bg-[#0f0f0f] border border-zinc-800/50 rounded-2xl p-6 mt-4">',
  examplesSection + '\\n      <div className="bg-[#0f0f0f] border border-zinc-800/50 rounded-2xl p-6 mt-4">'
);

fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', code);
console.log('Added Examples to Try');
