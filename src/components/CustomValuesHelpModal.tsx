import React from 'react';
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
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                {property === 'flex-basis' ? 'Flex Basis' : 
                 property === 'flex' ? 'Flex' :
                 property === 'flex-grow' ? 'Flex Grow' :
                 property === 'flex-shrink' ? 'Flex Shrink' :
                 property === 'order' ? 'Order' :
                 property === 'grid-template-columns' ? 'Grid Template Columns' :
                 property === 'grid-template-rows' ? 'Grid Template Rows' :
                 property === 'grid-auto-columns' ? 'Grid Auto Columns' :
                 property === 'grid-auto-rows' ? 'Grid Auto Rows' :
                 property === 'grid-column' ? 'Grid Column' :
                 property === 'grid-row' ? 'Grid Row' :
                 property === 'gap' ? 'Gap' : 'Reference'} Reference
              </h3>
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
                ) : property === 'flex-grow' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grow</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">flex-grow: 1;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grow-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">flex-grow: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grow-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex-grow: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grow-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex-grow: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'flex-shrink' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">shrink</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">flex-shrink: 1;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">shrink-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">flex-shrink: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">shrink-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex-shrink: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">shrink-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">flex-shrink: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'order' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">order-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">order: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">-order-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">order: calc(&lt;number&gt; * -1);</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">order-first</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">order: -9999;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">order-last</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300 mb-2">order: 9999;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">order-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">order: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">order-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300 mb-2">order: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-template-columns' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-cols-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-columns: repeat(&lt;number&gt;, minmax(0, 1fr));</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-cols-none</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-columns: none;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-cols-subgrid</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-columns: subgrid;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grid-cols-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-template-columns: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grid-cols-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-template-columns: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-template-rows' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-rows-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-rows: repeat(&lt;number&gt;, minmax(0, 1fr));</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-rows-none</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-rows: none;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">grid-rows-subgrid</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-template-rows: subgrid;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grid-rows-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-template-rows: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">grid-rows-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-template-rows: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-auto-columns' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-cols-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-columns: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-cols-min</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-columns: min-content;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-cols-max</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-columns: max-content;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-cols-fr</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-columns: minmax(0, 1fr);</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-cols-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-columns: calc(var(--spacing) * &lt;number&gt;);</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">auto-cols-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-auto-columns: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">auto-cols-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-auto-columns: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-auto-rows' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-rows-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-rows: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-rows-min</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-rows: min-content;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-rows-max</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-rows: max-content;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-rows-fr</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-rows: minmax(0, 1fr);</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">auto-rows-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-auto-rows: calc(var(--spacing) * &lt;number&gt;);</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">auto-rows-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-auto-rows: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">auto-rows-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-auto-rows: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-column' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-span-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column: span &lt;number&gt; / span &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-span-full</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column: 1 / -1;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-start-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column-start: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-start-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column-start: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-end-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column-end: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-end-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column-end: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">col-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-column: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">col-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-column: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">col-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-column: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'grid-row' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-span-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row: span &lt;number&gt; / span &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-span-full</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row: 1 / -1;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-start-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row-start: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-start-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row-start: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-end-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row-end: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-end-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row-end: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-auto</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row: auto;</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">row-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">grid-row: &lt;number&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">row-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-row: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">row-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">grid-row: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'gap' ? (
                  <>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">gap-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">gap: calc(var(--spacing) * &lt;value&gt;);</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">gap-x-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">column-gap: calc(var(--spacing) * &lt;value&gt;);</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-sky-400 font-medium">gap-y-&lt;number&gt;</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-300">row-gap: calc(var(--spacing) * &lt;value&gt;);</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">gap-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">gap: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">gap-x-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">column-gap: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">gap-y-[&lt;value&gt;]</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">row-gap: &lt;value&gt;;</div>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500/10 border-l-4 border-l-indigo-500 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-fuchsia-400 font-bold">gap-(&lt;custom-property&gt;)</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-indigo-300">gap: var(&lt;custom-property&gt;);</div>
                      </td>
                    </tr>
                  </>
                ) : property === 'flex' ? (
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
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
