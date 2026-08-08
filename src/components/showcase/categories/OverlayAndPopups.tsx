import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { X, HelpCircle, ChevronRight } from 'lucide-react';

export function useOverlayAndPopupsComponents() {

  const components = [
    {
      name: 'Dialog',
      description: 'An overlay requiring user attention before proceeding. Component for Dynamic Dialog',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
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
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden flex flex-col h-40"><div className="bg-zinc-800 px-3 py-2 flex justify-between items-center"><span className="text-sm font-semibold">User Profile</span><span className="text-zinc-400 cursor-pointer">×</span></div><div className="p-4 flex-1 overflow-y-auto"><div className="w-12 h-12 rounded-full bg-zinc-700 mb-2"></div><div className="h-2 bg-zinc-700 rounded w-1/2 mb-1"></div><div className="h-2 bg-zinc-800 rounded w-1/3"></div></div></div>
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
      name: 'Overlay',
      description: 'A dimmed background layer behind a modal.',
      render: () => (
        <div className="w-full h-24 rounded relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20"></div>
          <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px] z-10 flex items-center justify-center">
             <span className="text-xs text-white font-medium">Backdrop Layer</span>
          </div>
        </div>
      )
    },
    {
      name: 'Bottom Sheet',
      description: 'Component for Bottom Sheet',
      render: () => (
        <div className="relative w-full h-32 border border-zinc-800 rounded overflow-hidden bg-zinc-950 flex items-end"><div className="w-full bg-zinc-900 border-t border-zinc-700 rounded-t-xl p-4 shadow-2xl"><div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mb-4"></div><div className="text-sm font-semibold mb-2">Options</div><div className="h-2 bg-zinc-800 rounded w-3/4"></div></div></div>
      )
    },
    {
      name: 'Confirm Dialog',
      description: 'Component for Confirm Dialog',
      render: () => (
        <div className="w-64 bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-xl"><div className="flex gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center shrink-0">!</div><div><h4 className="font-semibold text-sm">Are you sure?</h4><p className="text-xs text-zinc-400 mt-1">This action cannot be undone.</p></div></div><div className="flex justify-end gap-2"><button className="px-3 py-1.5 bg-zinc-800 rounded text-xs">Cancel</button><button className="px-3 py-1.5 bg-rose-500 text-white rounded text-xs">Confirm</button></div></div>
      )
    },
    {
      name: 'Confirm Popup',
      description: 'Component for Confirm Popup',
      render: () => (
        <div className="relative inline-block"><button className="px-4 py-2 bg-indigo-500 text-white rounded text-sm">Save</button><div className="absolute top-full mt-2 left-0 w-48 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3"><p className="text-xs text-zinc-300 mb-3">Save changes to document?</p><div className="flex justify-end gap-2"><button className="px-2 py-1 bg-zinc-800 rounded text-xs">No</button><button className="px-2 py-1 bg-indigo-500 text-white rounded text-xs">Yes</button></div></div></div>
      )
    },
    {
      name: 'Hover Card',
      description: 'Component for Hover Card',
      render: () => (
        <div className="flex justify-center p-4"><span className="text-indigo-400 underline cursor-pointer border-b border-dashed border-indigo-400 relative group">Hover me<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"><div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 rounded-full bg-indigo-500"></div><span className="text-sm font-semibold text-white">@username</span></div><p className="text-xs text-zinc-400">Software engineer and designer.</p></div></span></div>
      )
    }
  ];
    return components;
}

export function OverlayAndPopups({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useOverlayAndPopupsComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🪟 Overlay & Popups" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
