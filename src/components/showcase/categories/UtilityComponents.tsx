import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function useUtilityComponentsComponents() {

  const [copied, setCopied] = useState(false);
  
  const components = [
    {
      name: 'Copy To Clipboard',
      description: 'Utility wrapper for copy-to-clipboard functionality.',
      render: () => (
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded p-1 pl-3">
          <span className="text-xs font-mono text-zinc-300">npm i my-pkg</span>
          <button 
            onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${copied ? 'bg-emerald-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )
    },
    {
      name: 'Bind',
      description: 'Component for Bind',
      render: () => (
        <div className="flex flex-col gap-2 w-full max-w-xs"><input type="text" className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" defaultValue="Two-way bound" /><div className="p-2 bg-zinc-800/50 rounded border border-zinc-800 text-sm text-zinc-300 font-mono">Output: Two-way bound</div></div>
      )
    },
    {
      name: 'Class Names',
      description: 'Component for Class Names',
      render: () => (
        <div className="p-3 border border-zinc-800 rounded bg-zinc-900 text-sm font-mono text-zinc-400 break-all"><span className="text-indigo-400">clsx</span>('px-4', 'py-2', active && 'bg-indigo-500')<br/>// "px-4 py-2 bg-indigo-500"</div>
      )
    },
    {
      name: 'Filter Service',
      description: 'Component for Filter Service',
      render: () => (
        <div className="w-full max-w-xs flex flex-col gap-2"><div className="flex gap-2"><input type="text" className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm" placeholder="Filter..." defaultValue="app"/><select className="bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm"><option>Contains</option></select></div><div className="p-2 border border-zinc-800 rounded bg-zinc-900/50 flex flex-col gap-1 text-sm"><div className="text-zinc-500">Banana</div><div className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded w-max">Apple</div><div className="text-zinc-500">Orange</div></div></div>
      )
    },
    {
      name: 'Fluid',
      description: 'Component for Fluid',
      render: () => (
        <div className="w-full p-4 border border-zinc-800 rounded border-dashed bg-zinc-900/30 flex flex-col gap-2"><div className="w-full p-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-center rounded text-sm">w-full (100%)</div><input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" placeholder="w-full input" /></div>
      )
    },
    {
      name: 'Scroll Top',
      description: 'Component for Scroll To Top',
      render: () => (
        <div className="w-full h-24 border border-zinc-800 rounded bg-zinc-900 overflow-y-auto relative p-2"><div className="h-48 text-xs text-zinc-600 flex flex-col justify-between"><span>Top of content</span><span>Scroll down ↓</span><span>Bottom of content</span></div><button className="absolute bottom-2 right-2 w-8 h-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg">↑</button></div>
      )
    }
  ];
    return components;
}

export function UtilityComponents({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useUtilityComponentsComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🧰 Utilities" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
