import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function Infrastructure({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const components = [
    {
      name: 'Router',
      description: 'Manages URL state and maps paths to components.',
      render: () => (
        <div className="w-full font-mono text-[10px] text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
          <div className="text-indigo-400">&lt;Router&gt;</div>
          <div className="pl-4">
            <div className="text-emerald-400">&lt;Route path="/about" component=&#123;About&#125; /&gt;</div>
            <div className="text-emerald-400">&lt;Route path="/users/:id" component=&#123;User&#125; /&gt;</div>
          </div>
          <div className="text-indigo-400">&lt;/Router&gt;</div>
        </div>
      )
    },
    {
      name: 'App Shell',
      description: 'The minimal HTML/CSS/JS required to power the UI wrapper.',
      render: () => (
        <div className="w-full max-w-[200px] h-24 border-2 border-zinc-700 rounded-lg flex flex-col overflow-hidden bg-zinc-900">
          <div className="h-6 bg-zinc-800 border-b border-zinc-700 flex items-center px-2 text-[8px] text-zinc-400">Header</div>
          <div className="flex-1 flex">
            <div className="w-12 border-r border-zinc-700 bg-zinc-950/50 flex flex-col items-center pt-2 gap-1">
              <div className="w-4 h-4 bg-zinc-800 rounded"></div>
              <div className="w-4 h-4 bg-zinc-800 rounded"></div>
            </div>
            <div className="flex-1 bg-zinc-950 p-2 flex items-center justify-center">
              <div className="border border-dashed border-zinc-700 text-[10px] text-zinc-500 w-full h-full flex items-center justify-center rounded">Content</div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Provider / Context',
      description: 'Wraps components to provide shared state without prop drilling.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full p-2 border border-emerald-500/50 rounded-lg bg-emerald-500/5 flex flex-col gap-2">
          <div className="text-[10px] text-emerald-500 font-bold px-1">&lt;AuthProvider&gt;</div>
          <div className="p-2 border border-zinc-700 rounded bg-zinc-900 ml-4 flex flex-col gap-2">
             <div className="text-[10px] text-zinc-500">&lt;App /&gt;</div>
          </div>
        </div>
      )
    },
    {
      name: 'Portal',
      description: 'Renders children into a DOM node outside the parent hierarchy.',
      alsoIn: ['Utility Components'],
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
      name: 'ErrorBoundary',
      description: 'Catches JavaScript errors in their child component tree.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full p-3 border border-rose-500 rounded-lg bg-rose-500/10 flex flex-col items-center justify-center gap-1">
          <div className="text-xs font-bold text-rose-500">Something went wrong.</div>
          <button className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded mt-1 hover:bg-rose-600">Try again</button>
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="⚙️ Infrastructure" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
