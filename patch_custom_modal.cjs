const fs = require('fs');

const file = 'src/components/CustomValuesHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/BasisHelpModalProps/g, 'CustomValuesHelpModalProps');
content = content.replace(/export function BasisHelpModal/g, 'export function CustomValuesHelpModal');
content = content.replace(/\{ isOpen, onClose \}: CustomValuesHelpModalProps/, '{ isOpen, onClose, property }: CustomValuesHelpModalProps');

// Add property string to props
content = content.replace(/interface CustomValuesHelpModalProps \{/, 'interface CustomValuesHelpModalProps {\n  property: string | null;');

// Change the title
content = content.replace(/<h3 className="text-xl font-bold text-zinc-100 tracking-tight">Flex Basis Reference<\/h3>/, 
  `{property === 'flex-basis' ? <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Flex Basis Reference</h3> : <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Flex Reference</h3>}`);

// Now we need to render the flex table if property === 'flex', otherwise the flex-basis table.
// Let's replace the whole table content based on the property.

// Let's just create a new component file content entirely to be safe and clean since it's quite different for `flex`

const fullComponent = `import React from 'react';
import { X, Lightbulb, Code2 } from 'lucide-react';

interface CustomValuesHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: string | null;
}

export function CustomValuesHelpModal({ isOpen, onClose, property }: CustomValuesHelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-800/80 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl shadow-black/90 animate-in zoom-in-95 duration-200 overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></div>
        <div className="flex items-center justify-between p-6 border-b border-zinc-800/80 bg-zinc-950/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20"> 
              <Lightbulb className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">{property === 'flex-basis' ? 'Flex Basis' : 'Flex'} Reference</h3>
              <p className="text-sm text-zinc-400 mt-1">Available classes and their CSS output</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-zinc-900/50">
          <div className="bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
              <Code2 className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-400 font-medium">tailwind.config.js default theme</span>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900/40">
                <tr>
                  <th className="px-6 py-3 font-semibold text-zinc-400 w-1/3">Class</th>
                  <th className="px-6 py-3 font-semibold text-zinc-400">Styles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {property === 'flex-basis' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
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
                        <div className="flex flex-wrap gap-2 mt-2">
                          {['1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12'].map(frac => (
                            <div key={frac} className="flex items-center gap-2 text-xs bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                              <span className="text-sky-300">basis-{frac}</span>
                            </div>
                          ))}
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
                          <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[1/7]</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex-basis: 1/7; <span className="text-slate-600 font-sans italic">/* aspect ratio or custom fraction */</span></span>
                          </div>
                          <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[calc(100%/7)]</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex-basis: calc(100% / 7);</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[min(20vw,300px)]</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex-basis: min(20vw, 300px);</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">basis-[16/9]</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex-basis: 16/9; <span className="text-slate-600 font-sans italic">/* aspect ratio */</span></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-full</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: 100%;</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-auto</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: auto;</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-3xs</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-3xs); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 16rem (256px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-2xs</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-2xs); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 18rem (288px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-xs</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-xs); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 20rem (320px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-sm</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-sm); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 24rem (384px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-md</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-md); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 28rem (448px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-lg</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-lg); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 32rem (512px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 36rem (576px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-2xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-2xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 42rem (672px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-3xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-3xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 48rem (768px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-4xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-4xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 56rem (896px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-5xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-5xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 64rem (1024px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-6xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-6xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 72rem (1152px) */</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">basis-7xl</td>
                      <td className="px-6 py-3.5 text-slate-300">flex-basis: var(--container-7xl); <span className="text-slate-500 font-sans italic text-xs ml-2">/* 80rem (1280px) */</span></td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">flex-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">flex: &lt;number&gt;;</div>
                        <div className="flex flex-col gap-1.5 mt-2">
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">flex-1</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-slate-400">flex: 1;</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">flex-2</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-slate-400">flex: 2;</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">flex-&lt;fraction&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">flex: calc(&lt;fraction&gt; * 100%);</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {['1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5'].map(frac => (
                            <div key={frac} className="flex items-center gap-2 text-xs bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                              <span className="text-sky-300">flex-{frac}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">flex-auto</td>
                      <td className="px-6 py-3.5 text-slate-300">flex: auto;</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">flex-initial</td>
                      <td className="px-6 py-3.5 text-slate-300">flex: 0 auto;</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sky-400 font-medium">flex-none</td>
                      <td className="px-6 py-3.5 text-slate-300">flex: none;</td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">flex-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex: var(&lt;custom-property&gt;);</div>
                        <div className="flex flex-col gap-1.5 mt-2">
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">flex-(--my-flex)</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex: var(--my-flex);</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-fuchsia-500/10 border-l-4 border-l-fuchsia-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">flex-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex: &lt;value&gt;;</div>
                        <div className="flex flex-col gap-1.5 mt-2">
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-fuchsia-300 bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">flex-[2_2_10%]</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-indigo-300">flex: 2 2 10%;</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(file, fullComponent);
