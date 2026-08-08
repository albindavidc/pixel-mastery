import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function useVisualEffectsComponents() {

  const components = [
    {
      name: 'Shadow / Elevation',
      description: 'Uses drop shadows to indicate depth (Z-axis).',
      render: () => (
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-zinc-800 rounded shadow-sm flex items-center justify-center text-xs text-zinc-500">sm</div>
          <div className="w-16 h-16 bg-zinc-800 rounded shadow-md flex items-center justify-center text-xs text-zinc-500">md</div>
          <div className="w-16 h-16 bg-zinc-800 rounded shadow-lg flex items-center justify-center text-xs text-zinc-500 border border-zinc-700">lg</div>
          <div className="w-16 h-16 bg-zinc-800 rounded shadow-xl flex items-center justify-center text-xs text-zinc-500 border border-zinc-700">xl</div>
        </div>
      )
    },
    {
      name: 'Gradient',
      description: 'Smooth transitions between two or more colors.',
      render: () => (
        <div className="w-full flex gap-2">
          <div className="h-12 flex-1 rounded bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <div className="h-12 flex-1 rounded bg-gradient-to-br from-emerald-400 to-cyan-500"></div>
          <div className="h-12 flex-1 rounded bg-gradient-to-t from-rose-500 to-orange-400"></div>
        </div>
      )
    },
    {
      name: 'Glassmorphism',
      description: 'Semi-transparent backgrounds with background blur.',
      render: () => (
        <div className="relative w-full h-24 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-rose-500 rounded-full mix-blend-screen blur-xl"></div>
          <div className="absolute bottom-2 right-2 w-16 h-16 bg-cyan-500 rounded-full mix-blend-screen blur-xl"></div>
          
          <div className="relative z-10 w-3/4 h-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded shadow-xl flex items-center justify-center text-white text-xs font-medium">
            Glass
          </div>
        </div>
      )
    },
    {
      name: 'Mask',
      description: 'Uses an image or shape to hide parts of an element.',
      render: () => (
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-500 relative flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
          <span className="text-white text-[10px] font-bold">Hexagon</span>
        </div>
      )
    },
    {
      name: 'Animation',
      description: 'Smooth changes between states or looping movements.',
      render: () => (
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs hover:scale-110 hover:rotate-6 hover:bg-indigo-400 transition-all cursor-pointer">Hover</div>
          <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center text-white text-xs animate-bounce">Bounce</div>
          <div className="w-12 h-12 bg-rose-500 rounded flex items-center justify-center text-white text-[10px] animate-pulse">Pulse</div>
        </div>
      )
    },
    {
      name: 'Animate On Scroll',
      description: 'Component for Animate On Scroll',
      render: () => (
        <div className="w-full flex flex-col gap-2 overflow-hidden h-32"><div className="p-3 bg-zinc-900 rounded border border-zinc-800 translate-y-2 opacity-50 text-sm">Scroll up to reveal</div><div className="p-3 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 text-sm transform transition-all duration-700 translate-y-0 opacity-100">I animate into view!</div><div className="p-3 bg-zinc-900 rounded border border-zinc-800 translate-y-4 opacity-0 text-sm">More content below</div></div>
      )
    },
    {
      name: 'Auto Focus',
      description: 'Component for Auto Focus',
      render: () => (
        <input type="text" className="w-full max-w-xs bg-zinc-900 border border-indigo-500 rounded px-3 py-2 text-sm shadow-[0_0_0_2px_rgba(99,102,241,0.2)] outline-none" placeholder="I get focus on mount" defaultValue="Focused automatically" />
      )
    },
    {
      name: 'Block UI',
      description: 'Component for Block UI',
      render: () => (
        <div className="w-full max-w-xs h-24 relative border border-zinc-800 rounded overflow-hidden bg-zinc-900"><div className="p-4 blur-sm opacity-50"><div className="h-2 bg-zinc-700 rounded w-3/4 mb-2"></div><div className="h-2 bg-zinc-800 rounded w-1/2"></div></div><div className="absolute inset-0 flex items-center justify-center bg-zinc-950/30"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div></div>
      )
    },
    {
      name: 'Ripple',
      description: 'Component for Ripple',
      render: () => (
        <button className="relative overflow-hidden px-6 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700"><span className="relative z-10">Click Me</span><span className="absolute w-20 h-20 bg-white/20 rounded-full scale-0 animate-[ping_1s_ease-out_forwards] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span></button>
      )
    },
    {
      name: 'Style Class',
      description: 'Component for Style Class',
      render: () => (
        <div className="flex flex-col gap-2"><button className="px-4 py-2 bg-indigo-500 text-white rounded text-sm w-max transition-all hover:scale-105 active:scale-95">Toggle Class</button><div className="p-3 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded text-sm transition-all duration-300 transform scale-100 opacity-100">Toggled element</div></div>
      )
    },
  ];
    return components;
}

export function VisualEffects({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useVisualEffectsComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🎨 Effects & Interaction" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
