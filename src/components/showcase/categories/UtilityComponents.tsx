import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function UtilityComponents({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const [copied, setCopied] = useState(false);
  
  const components = [
    {
      name: 'Portal',
      description: 'Renders children into a DOM node outside the parent hierarchy.',
      alsoIn: ['Infrastructure'],
      render: () => (
        <div className="w-full p-4 border-2 border-dashed border-indigo-500/50 rounded-lg flex flex-col items-center justify-center bg-indigo-500/5 relative overflow-hidden">
          <div className="text-xs text-indigo-400 mb-2">React Tree Parent</div>
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-rose-500/20 border border-rose-500/50 rounded-full flex items-center justify-center transform rotate-45">
            <span className="text-[8px] text-rose-400">Portal</span>
          </div>
        </div>
      )
    },
    {
      name: 'Provider / Context',
      description: 'Wraps components to provide shared state without prop drilling.',
      alsoIn: ['Infrastructure'],
      render: () => (
        <div className="w-full p-2 border border-emerald-500/50 rounded-lg bg-emerald-500/5 flex flex-col gap-2">
          <div className="text-[10px] text-emerald-500 font-bold px-1">&lt;ThemeProvider&gt;</div>
          <div className="p-2 border border-zinc-700 rounded bg-zinc-900 ml-4 flex flex-col gap-2">
             <div className="text-[10px] text-zinc-500">Child Component</div>
             <div className="p-2 border border-zinc-600 rounded bg-zinc-800 ml-4">
                <div className="text-[10px] text-emerald-400">Deep Child (Accesses Theme)</div>
             </div>
          </div>
        </div>
      )
    },
    {
      name: 'ErrorBoundary',
      description: 'Catches JavaScript errors in their child component tree.',
      alsoIn: ['Infrastructure'],
      render: () => (
        <div className="w-full p-3 border border-rose-500 rounded-lg bg-rose-500/10 flex flex-col items-center justify-center gap-1">
          <div className="text-xs font-bold text-rose-500">Something went wrong.</div>
          <button className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded mt-1 hover:bg-rose-600">Try again</button>
        </div>
      )
    },
    {
      name: 'Visually Hidden',
      description: 'Hides content visually while remaining accessible to screen readers.',
      alsoIn: ['Accessibility'],
      render: () => (
        <div className="w-full flex items-center justify-center h-20 border border-dashed border-zinc-700 bg-zinc-900 rounded relative">
          <span className="text-xs text-zinc-500">Visible content only</span>
          <div className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 [clip:rect(0,0,0,0)]">
            This text is read by screen readers but invisible on screen.
          </div>
        </div>
      )
    },
    {
      name: 'Clipboard / Copy',
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
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🧰 Utility Components" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
