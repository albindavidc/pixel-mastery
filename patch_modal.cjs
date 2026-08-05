const fs = require('fs');

const file = 'src/components/BasisHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const search = `<div className="text-slate-300 mb-2">flex-basis: calc(&lt;fraction&gt; * 100%);</div>
                      <div className="flex flex-col gap-1.5 mt-2">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">basis-1/2</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-slate-400">flex-basis: 50%;</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">basis-2/5</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-slate-400">flex-basis: 40%;</span>
                        </div>
                      </div>`;

const replace = `<div className="text-slate-300 mb-2">flex-basis: calc(&lt;fraction&gt; * 100%);</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12'].map(frac => (
                          <div key={frac} className="flex items-center gap-2 text-xs bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                            <span className="text-sky-300">basis-{frac}</span>
                          </div>
                        ))}
                      </div>`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
