const fs = require('fs');

const file = 'src/components/BasisHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchRows = `                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-3.5 text-sky-400 font-medium">basis-&lt;number&gt;</td>
                    <td className="px-6 py-3.5 text-slate-300">flex-basis: calc(var(--spacing) * &lt;number&gt;);</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-3.5 text-sky-400 font-medium">basis-&lt;fraction&gt;</td>
                    <td className="px-6 py-3.5 text-slate-300">flex-basis: calc(&lt;fraction&gt; * 100%);</td>
                  </tr>
                  <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500">
                    <td className="px-6 py-4 text-fuchsia-400 font-bold">basis-(&lt;custom-property&gt;)</td>
                    <td className="px-6 py-4 text-indigo-300">flex-basis: var(&lt;custom-property&gt;);</td>
                  </tr>
                  <tr className="bg-fuchsia-500/10 border-l-4 border-l-fuchsia-500">
                    <td className="px-6 py-4 text-fuchsia-400 font-bold">basis-[&lt;value&gt;]</td>
                    <td className="px-6 py-4 text-indigo-300">flex-basis: &lt;value&gt;;</td>
                  </tr>`;

const replaceRows = `                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="text-sky-400 font-medium">basis-&lt;number&gt;</div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="text-slate-300 mb-2">flex-basis: calc(var(--spacing) * &lt;number&gt;);</div>
                      <div className="flex flex-col gap-1.5 mt-2">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">basis-4</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-slate-400">flex-basis: 1rem; <span className="text-slate-600 font-sans italic">/* 16px */</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">basis-14</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-slate-400">flex-basis: 3.5rem; <span className="text-slate-600 font-sans italic">/* 56px */</span></span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="text-sky-400 font-medium">basis-&lt;fraction&gt;</div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="text-slate-300 mb-2">flex-basis: calc(&lt;fraction&gt; * 100%);</div>
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
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="text-fuchsia-400 font-bold">basis-(&lt;custom-property&gt;)</div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="text-indigo-300 mb-2">flex-basis: var(&lt;custom-property&gt;);</div>
                      <div className="flex flex-col gap-1.5 mt-2">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-(--my-width)</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: var(--my-width);</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-(--card-basis)</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: var(--card-basis);</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-fuchsia-500/10 border-l-4 border-l-fuchsia-500 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="text-fuchsia-400 font-bold">basis-[&lt;value&gt;]</div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="text-indigo-300 mb-2">flex-basis: &lt;value&gt;;</div>
                      <div className="flex flex-col gap-1.5 mt-2">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[14.2857%]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: 14.2857%;</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[min(20vw,300px)]</span>
                          <span className="text-slate-500">→</span>
                          <span className="text-indigo-300">flex-basis: min(20vw, 300px);</span>
                        </div>
                      </div>
                    </td>
                  </tr>`;

content = content.replace(searchRows, replaceRows);
fs.writeFileSync(file, content);
