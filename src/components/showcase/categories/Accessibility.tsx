import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function useAccessibilityComponents() {

  const components = [
    {
      name: 'Skip Link',
      description: 'Hidden link that becomes visible on focus to skip navigation.',
      render: () => (
        <div className="w-full h-24 bg-zinc-950 border border-zinc-800 rounded relative overflow-hidden flex flex-col">
          <div className="p-2 bg-zinc-900 border-b border-zinc-800 text-[10px] text-zinc-500">Header/Nav</div>
          <div className="absolute top-1 left-1 bg-indigo-500 text-white text-[10px] px-2 py-1 rounded font-bold shadow-lg ring-2 ring-white z-10">
            Skip to main content
          </div>
          <div className="flex-1 p-2 flex items-center justify-center">
            <span className="text-[10px] text-zinc-600">Main Content Area</span>
          </div>
        </div>
      )
    },
    {
      name: 'Focus Trap',
      description: 'Restricts tab navigation to within a specific container (e.g., modals). Component for Focus Trap',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full max-w-[200px] p-3 border-2 border-indigo-500 rounded-lg bg-zinc-900 relative">
                <div className="absolute -top-2 left-2 bg-zinc-950 text-[8px] text-indigo-400 px-1">Focus Trapped</div>
                <div className="space-y-2">
                  <input type="text" className="w-full h-6 bg-zinc-950 border border-indigo-500 ring-1 ring-indigo-500 rounded text-[10px] px-1 focus:outline-none" defaultValue="Focused" />
                  <div className="flex gap-2">
                    <button className="flex-1 h-6 bg-zinc-800 rounded text-[10px] text-zinc-400">Btn 1</button>
                    <button className="flex-1 h-6 bg-zinc-800 rounded text-[10px] text-zinc-400">Btn 2</button>
                  </div>
                </div>
              </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full max-w-xs p-4 bg-zinc-900 border-2 border-indigo-500 rounded-lg shadow-lg relative"><span className="absolute -top-3 left-4 bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide">TRAPPED</span><div className="flex flex-col gap-2"><input type="text" className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm focus:border-indigo-400 outline-none" placeholder="Input 1" /><input type="text" className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm focus:border-indigo-400 outline-none" placeholder="Input 2" /><button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded py-1 text-sm mt-1 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-900 outline-none">Action</button></div></div>
                  </div>
                </div>
             )
    },
    {
      name: 'Visually Hidden',
      description: 'Hides content visually while remaining accessible to screen readers. Component for Screen Reader Only Hides content visually while remaining accessible to screen readers.',
      alsoIn: ['Utility Components'],
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="flex flex-col gap-4 w-full">
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                            <div className="w-full flex items-center justify-center h-20 border border-dashed border-zinc-700 bg-zinc-900 rounded relative">
                      <span className="text-xs text-zinc-500">Visible icon only</span>
                      <div className="w-6 h-6 bg-zinc-800 rounded-full ml-2 flex items-center justify-center text-[10px] text-zinc-400">i</div>
                      <div className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 [clip:rect(0,0,0,0)]">
                        Information about this section
                      </div>
                    </div>
                          </div>
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                            <div className="w-full p-2 bg-zinc-900 border border-zinc-800 rounded border-dashed text-center text-xs text-zinc-500 font-mono">Screen Reader Only Configured</div>
                          </div>
                        </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full flex items-center justify-center h-20 border border-dashed border-zinc-700 bg-zinc-900 rounded relative">
                <span className="text-xs text-zinc-500">Visible content only</span>
                <div className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 [clip:rect(0,0,0,0)]">
                  This text is read by screen readers but invisible on screen.
                </div>
              </div>
                  </div>
                </div>
             )
    },
    {
      name: 'ARIA Live Region',
      description: 'Announces dynamic content changes to screen readers.',
      render: () => (
        <div className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-md">
          <div className="text-[10px] text-zinc-500 mb-1 font-mono">aria-live="polite"</div>
          <div className="text-xs text-indigo-400 font-medium">Search results updated: 42 items found.</div>
        </div>
      )
    },
    {
      name: 'Keyboard Input',
      description: 'Component for Keyboard Shortcut Help Indicates user input from a keyboard.',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full p-2 bg-zinc-900 border border-zinc-800 rounded border-dashed text-center text-xs text-zinc-500 font-mono">Keyboard Shortcut Help Configured</div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                Press 
                <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 border-b-2 rounded text-xs font-mono text-zinc-200">Cmd</kbd>
                +
                <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 border-b-2 rounded text-xs font-mono text-zinc-200">K</kbd>
                to search
              </div>
                  </div>
                </div>
             )
    }
  ];
    return components;
}

export function Accessibility({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useAccessibilityComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="♿ Accessibility" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
