import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { Image as ImageIcon, PlayCircle, Maximize2, Headphones } from 'lucide-react';

export function Media({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const components = [
    {
      name: 'Image',
      description: 'Standard graphic display with optional captions.',
      render: () => (
        <div className="w-full max-w-[200px]">
          <div className="w-full h-24 bg-zinc-800 rounded-t-lg flex items-center justify-center border border-zinc-700">
            <ImageIcon className="w-6 h-6 text-zinc-600" />
          </div>
          <div className="bg-zinc-900 border-x border-b border-zinc-800 rounded-b-lg p-2 text-[10px] text-zinc-400 text-center">
            Figure 1. Abstract placeholder.
          </div>
        </div>
      )
    },
    {
      name: 'Thumbnail',
      description: 'A small preview image for galleries or lists.',
      render: () => (
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="w-12 h-12 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="w-12 h-12 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-zinc-500" />
          </div>
        </div>
      )
    },
    {
      name: 'Lightbox / Carousel',
      description: 'An overlay for viewing full-size images or sliding through a gallery.',
      render: () => (
        <div className="relative w-full max-w-[200px] h-24 bg-zinc-900 border border-zinc-700 rounded overflow-hidden flex items-center justify-center group cursor-pointer">
          <ImageIcon className="w-8 h-8 text-zinc-600" />
          <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <Maximize2 className="w-5 h-5 text-white" />
          </div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-800/80 rounded-full flex items-center justify-center text-[8px] text-white">&lt;</div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-800/80 rounded-full flex items-center justify-center text-[8px] text-white">&gt;</div>
        </div>
      )
    },
    {
      name: 'Video Player',
      description: 'A container with controls for playing video content.',
      render: () => (
        <div className="w-full max-w-[200px] bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
          <div className="h-20 bg-zinc-950 flex items-center justify-center relative">
            <PlayCircle className="w-8 h-8 text-indigo-400 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            <div className="absolute bottom-1 right-1 bg-zinc-900/80 text-[8px] px-1 rounded text-white font-mono">3:24</div>
          </div>
          <div className="h-6 bg-zinc-800 flex items-center px-2 gap-2">
            <div className="w-2 h-2 rounded bg-indigo-500"></div>
            <div className="flex-1 h-0.5 bg-zinc-600 rounded-full relative">
              <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-indigo-500"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Audio Player',
      description: 'Controls for playing sound files.',
      render: () => (
        <div className="w-full bg-zinc-900 border border-zinc-700 rounded-full h-10 flex items-center px-3 gap-3 shadow-md">
          <PlayCircle className="w-5 h-5 text-indigo-400 cursor-pointer" />
          <div className="flex-1 h-1 bg-zinc-700 rounded-full relative">
             <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-indigo-500 rounded-full"></div>
             <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow"></div>
          </div>
          <Headphones className="w-4 h-4 text-zinc-500" />
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🖼️ Media">
      {filtered.map(c => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
