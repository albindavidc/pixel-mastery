import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function VisualEffects({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
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
      name: 'Animation / Transition',
      description: 'Smooth changes between states or looping movements.',
      render: () => (
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs hover:scale-110 hover:rotate-6 hover:bg-indigo-400 transition-all cursor-pointer">Hover</div>
          <div className="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center text-white text-xs animate-bounce">Bounce</div>
          <div className="w-12 h-12 bg-rose-500 rounded flex items-center justify-center text-white text-[10px] animate-pulse">Pulse</div>
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🎨 Visual Effects">
      {filtered.map(c => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
