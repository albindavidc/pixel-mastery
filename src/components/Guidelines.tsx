import React from 'react';

export function Guidelines() {
  return (
    <div className="p-8 max-w-4xl mx-auto w-full">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">CSS & Tailwind Guidelines</h1>
        <p className="text-zinc-400">Essential rules and syntax patterns for modern web development.</p>
      </div>
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-8 shadow-xl">
        <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
          <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Easy rule to remember
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="text-xs text-zinc-300 uppercase bg-zinc-800/50">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Thing</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              <tr className="hover:bg-zinc-800/20 transition-colors group">
                <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Property</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-sky-400 font-mono shadow-sm">background-color</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-sky-400 font-mono shadow-sm">display</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-sky-400 font-mono shadow-sm">justify-content</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-sky-400 font-mono shadow-sm">gap</code>
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/20 transition-colors group">
                <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Value</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-emerald-400 font-mono shadow-sm">red</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-emerald-400 font-mono shadow-sm">flex</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-emerald-400 font-mono shadow-sm">center</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-emerald-400 font-mono shadow-sm">16px</code>
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/20 transition-colors group">
                <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Class</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-fuchsia-400 font-mono shadow-sm">.bg-red-500</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-fuchsia-400 font-mono shadow-sm">.flex</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-fuchsia-400 font-mono shadow-sm">.justify-center</code>
                  <code className="text-[11px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-fuchsia-400 font-mono shadow-sm">.gap-4</code>
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/20 transition-colors group">
                <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">Tailwind Utility Class</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <code className="text-[11px] bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 font-mono shadow-sm">bg-red-500</code>
                  <code className="text-[11px] bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 font-mono shadow-sm">flex</code>
                  <code className="text-[11px] bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 font-mono shadow-sm">justify-center</code>
                  <code className="text-[11px] bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 font-mono shadow-sm">gap-4</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
