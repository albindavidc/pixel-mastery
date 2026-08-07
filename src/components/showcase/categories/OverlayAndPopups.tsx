import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { X, HelpCircle, ChevronRight } from 'lucide-react';

export function OverlayAndPopups({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const components = [
    {
      name: 'Modal / Dialog',
      description: 'An overlay requiring user attention before proceeding.',
      render: () => (
        <div className="relative w-full h-40 bg-zinc-950 rounded flex items-center justify-center overflow-hidden border border-dashed border-zinc-800">
          <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 w-3/4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-white">Delete Item?</h3>
              <X className="w-4 h-4 text-zinc-500" />
            </div>
            <p className="text-xs text-zinc-400 mb-4">This action cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button className="px-3 py-1 bg-zinc-800 text-xs text-zinc-300 rounded">Cancel</button>
              <button className="px-3 py-1 bg-rose-500 text-xs text-white rounded">Delete</button>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Drawer / Offcanvas',
      description: 'A panel that slides in from the edge of the screen.',
      render: () => (
        <div className="relative w-full h-32 bg-zinc-950 rounded overflow-hidden border border-dashed border-zinc-800 flex justify-end">
          <div className="absolute inset-0 bg-zinc-950/40 z-10"></div>
          <div className="relative z-20 w-1/2 h-full bg-zinc-900 border-l border-zinc-700 shadow-2xl p-3 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-white">Filters</span>
              <X className="w-3 h-3 text-zinc-500" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-zinc-800 rounded w-full"></div>
              <div className="h-2 bg-zinc-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Tooltip',
      description: 'A small text box that appears on hover to explain an element.',
      render: () => (
        <div className="flex flex-col items-center gap-2">
          <div className="bg-zinc-800 text-white text-[10px] px-2 py-1 rounded shadow-lg relative">
            Save changes
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></div>
          </div>
          <button className="px-4 py-1.5 bg-indigo-500 text-sm text-white rounded font-medium">Save</button>
        </div>
      )
    },
    {
      name: 'Popover',
      description: 'A transient view that appears above other content on click.',
      render: () => (
        <div className="flex flex-col items-center gap-2">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 w-40 relative">
            <div className="text-xs font-semibold text-white mb-1">Dimensions</div>
            <div className="text-[10px] text-zinc-400">Set the width and height of the element.</div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700 rotate-45"></div>
          </div>
          <HelpCircle className="w-5 h-5 text-zinc-500 cursor-pointer" />
        </div>
      )
    },
    {
      name: 'Backdrop / Overlay',
      description: 'A dimmed background layer behind a modal.',
      render: () => (
        <div className="w-full h-24 rounded relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20"></div>
          <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px] z-10 flex items-center justify-center">
             <span className="text-xs text-white font-medium">Backdrop Layer</span>
          </div>
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🪟 Overlay & Popups">
      {filtered.map(c => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
