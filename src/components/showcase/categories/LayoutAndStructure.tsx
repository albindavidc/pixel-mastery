import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';

export function useLayoutAndStructureComponents() {

  const components = [
    {
      name: 'Container',
      description: 'Constrains content width to the current breakpoint.',
      render: () => (
        <div className="w-full bg-zinc-800 rounded-md p-4 text-center text-zinc-400 border border-dashed border-zinc-600">
          Max Width Container
        </div>
      )
    },
    {
      name: 'Section',
      description: 'Semantic wrapper for grouping related thematic content.',
      render: () => (
        <section className="w-full bg-indigo-500/10 border-l-4 border-indigo-500 p-4 rounded-r-md">
          <h4 className="text-indigo-400 font-semibold mb-2">Section Heading</h4>
          <div className="h-2 bg-indigo-500/20 rounded w-3/4 mb-2"></div>
          <div className="h-2 bg-indigo-500/20 rounded w-1/2"></div>
        </section>
      )
    },
    {
      name: 'Box',
      description: 'A generic, styled container with padding and background.',
      render: () => (
        <div className="w-full p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/50 shadow-inner">
          <div className="text-zinc-300 text-sm">Box Content</div>
        </div>
      )
    },
    {
      name: 'Card',
      description: 'A contained surface for displaying related information.',
      render: () => (
        <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
          <div className="h-20 bg-zinc-800/50"></div>
          <div className="p-4">
            <div className="h-4 bg-zinc-700 rounded w-1/3 mb-2"></div>
            <div className="h-3 bg-zinc-800 rounded w-full mb-1"></div>
            <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Paper',
      description: 'A flat, elevated surface with subtle shadow and border.',
      render: () => (
        <div className="w-full p-6 bg-zinc-100 rounded-sm shadow-md text-zinc-900 font-medium">
          Paper Surface
        </div>
      )
    },
    {
      name: 'Panel',
      description: 'A distinctly bordered area for grouping complex controls.',
      render: () => (
        <div className="w-full border-2 border-zinc-800 bg-zinc-950 rounded-lg p-3">
          <div className="border-b border-zinc-800 pb-2 mb-2 text-xs font-semibold text-zinc-500 uppercase">Settings Panel</div>
          <div className="h-6 bg-zinc-900 rounded mb-2 w-full"></div>
          <div className="h-6 bg-zinc-900 rounded w-full"></div>
        </div>
      )
    },
    {
      name: 'Grid',
      description: 'A two-dimensional layout system for aligning content.',
      render: () => (
        <div className="w-full grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map(i => <div key={i} className="h-10 bg-indigo-500/20 rounded border border-indigo-500/30"></div>)}
        </div>
      )
    },
    {
      name: 'Grid List',
      description: 'A responsive grid of homogeneous items.',
      render: () => (
        <div className="w-full grid grid-cols-2 gap-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-2 bg-zinc-800 p-2 rounded">
              <div className="w-6 h-6 rounded-full bg-zinc-700"></div>
              <div className="h-2 bg-zinc-700 rounded flex-1"></div>
            </div>
          ))}
        </div>
      )
    },
    {
      name: 'Flex',
      description: 'A one-dimensional layout system for distributing space.',
      render: () => (
        <div className="w-full flex justify-between items-center bg-zinc-800/50 p-3 rounded-lg">
          <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/50 rounded"></div>
          <div className="w-16 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded"></div>
          <div className="w-8 h-8 bg-rose-500/20 border border-rose-500/50 rounded"></div>
        </div>
      )
    },
    {
      name: 'Stack',
      description: 'Manages vertical or horizontal spacing between children.',
      render: () => (
        <div className="w-full flex flex-col space-y-3">
          <div className="h-4 bg-zinc-700 rounded w-full"></div>
          <div className="h-4 bg-zinc-700 rounded w-full"></div>
          <div className="h-4 bg-zinc-700 rounded w-full"></div>
        </div>
      )
    },
    {
      name: 'Divider',
      description: 'A thin line that visually separates content.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full flex flex-col items-center">
          <div className="text-zinc-500 text-sm mb-4">Above</div>
          <div className="w-full h-px bg-zinc-700"></div>
          <div className="text-zinc-500 text-sm mt-4">Below</div>
        </div>
      )
    },
    {
      name: 'Separator',
      description: 'An accessible divider for semantic separation.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full flex items-center justify-center gap-4 text-sm text-zinc-400">
          <span>Blog</span>
          <span className="w-px h-4 bg-zinc-700"></span>
          <span>Docs</span>
          <span className="w-px h-4 bg-zinc-700"></span>
          <span>API</span>
        </div>
      )
    },
    {
      name: 'Spacer',
      description: 'An invisible block that takes up available space.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full flex bg-zinc-800 rounded p-2">
          <div className="w-8 h-8 bg-zinc-600 rounded"></div>
          <div className="flex-1 border-2 border-dashed border-zinc-600/50 mx-2 flex items-center justify-center text-xs text-zinc-500">Spacer</div>
          <div className="w-8 h-8 bg-zinc-600 rounded"></div>
        </div>
      )
    },
    {
      name: 'Header',
      description: 'Top-level container for branding and main navigation.',
      render: () => (
        <header className="w-full bg-zinc-900 border-b border-zinc-700 p-3 flex justify-between items-center rounded-t-lg">
          <div className="w-6 h-6 bg-indigo-500 rounded-sm"></div>
          <div className="flex gap-2">
            <div className="w-4 h-1 bg-zinc-600 rounded"></div>
            <div className="w-4 h-1 bg-zinc-600 rounded"></div>
          </div>
        </header>
      )
    },
    {
      name: 'Footer',
      description: 'Bottom container for secondary links and copyright.',
      render: () => (
        <footer className="w-full bg-zinc-900 border-t border-zinc-700 p-4 flex flex-col gap-2 rounded-b-lg mt-8">
          <div className="flex justify-between w-full">
            <div className="w-12 h-2 bg-zinc-700 rounded"></div>
            <div className="w-12 h-2 bg-zinc-700 rounded"></div>
          </div>
          <div className="w-full h-px bg-zinc-800 my-1"></div>
          <div className="w-24 h-1.5 bg-zinc-800 rounded mx-auto"></div>
        </footer>
      )
    },
    {
      name: 'Sidebar',
      description: 'A side-anchored container for navigation or tools.',
      render: () => (
        <div className="flex flex-col gap-4 w-full h-full justify-center">
          <div className="w-full relative group">
            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
            <div className="w-full h-32 bg-zinc-950 flex border border-zinc-800 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-zinc-900 border-r border-zinc-800 p-2 flex flex-col gap-2">
                <div className="h-2 bg-zinc-700 rounded w-full"></div>
                <div className="h-2 bg-zinc-700 rounded w-3/4"></div>
                <div className="h-2 bg-zinc-700 rounded w-5/6"></div>
              </div>
              <div className="flex-1 p-3">
                <div className="h-4 bg-zinc-800 rounded w-1/2 mb-2"></div>
                <div className="h-full bg-zinc-800/50 rounded border border-dashed border-zinc-700"></div>
              </div>
            </div>
          </div>
          <div className="w-full relative group">
            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
            <div className="w-full h-32 flex border border-zinc-800 rounded overflow-hidden">
              <div className="w-20 bg-zinc-900 border-r border-zinc-800 p-2 flex flex-col gap-3 items-center">
                <div className="w-6 h-6 bg-indigo-500/20 rounded"></div>
                <div className="w-6 h-6 bg-zinc-800 rounded"></div>
                <div className="w-6 h-6 bg-zinc-800 rounded"></div>
              </div>
              <div className="flex-1 bg-zinc-950 flex items-center justify-center text-xs text-zinc-600">Main Content</div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Toolbar',
      description: 'A horizontal container grouping action buttons.',
      alsoIn: ['Navigation'],
      render: () => (
        <div className="w-full bg-zinc-800 rounded-md p-1.5 flex gap-1 items-center shadow-sm">
                <div className="w-6 h-6 bg-zinc-700 rounded hover:bg-zinc-600 transition-colors"></div>
                <div className="w-6 h-6 bg-zinc-700 rounded hover:bg-zinc-600 transition-colors"></div>
                <div className="w-px h-4 bg-zinc-600 mx-1"></div>
                <div className="w-6 h-6 bg-zinc-700 rounded hover:bg-zinc-600 transition-colors"></div>
              </div>
      )
    },
    {
      name: 'Split Pane/Panel/Screen/View',
      description: 'A layout divided into adjustable resizable sections.',
      render: () => (
        <div className="w-full h-24 border border-zinc-700 rounded flex overflow-hidden">
          <div className="flex-1 bg-zinc-800/50 flex items-center justify-center text-zinc-500 text-xs">Pane 1</div>
          <div className="w-1 bg-zinc-600 hover:bg-indigo-500 cursor-col-resize transition-colors"></div>
          <div className="w-1/3 bg-zinc-900 flex items-center justify-center text-zinc-500 text-xs">Pane 2</div>
        </div>
      )
    },
    {
      name: 'Resizable Panel',
      description: 'A container that can be resized by the user.',
      render: () => (
        <div className="w-3/4 h-20 border border-zinc-700 bg-zinc-900 rounded relative group">
          <div className="absolute right-0 bottom-0 w-3 h-3 border-r-2 border-b-2 border-zinc-500 cursor-se-resize rounded-br"></div>
        </div>
      )
    },
    {
      name: 'Scroll Area',
      description: 'A container that manages scrolling for overflowing content.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full h-24 bg-zinc-900 border border-zinc-800 rounded relative overflow-hidden p-2"><div className="space-y-2"><div className="h-4 bg-zinc-800 w-full rounded"></div><div className="h-4 bg-zinc-800 w-5/6 rounded"></div><div className="h-4 bg-zinc-800 w-4/6 rounded"></div><div className="h-4 bg-zinc-800 w-full rounded"></div></div><div className="absolute top-1 right-1 w-1.5 h-10 bg-zinc-700 rounded-full"></div></div>
      )
    },
    {
      name: 'Aspect Ratio',
      description: 'Constrains a container to a specific width-to-height ratio.',
      alsoIn: ['Utility Components'],
      render: () => (
        <div className="w-full max-w-[160px] relative bg-zinc-800 rounded overflow-hidden" style={{ paddingBottom: '56.25%' }}>
           <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-sm">16:9</div>
        </div>
      )
    },
    {
      name: 'Splitter',
      description: 'Component for Splitter',
      render: () => (
        <div className="w-full h-24 border border-zinc-800 rounded flex overflow-hidden"><div className="flex-1 bg-zinc-900 flex items-center justify-center text-zinc-500 text-sm">Pane 1</div><div className="w-1 bg-zinc-700 cursor-col-resize hover:bg-indigo-500 transition-colors"></div><div className="flex-1 bg-zinc-900 flex items-center justify-center text-zinc-500 text-sm">Pane 2</div></div>
      )
    },
  ];
    return components;
}

export function LayoutAndStructure({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useLayoutAndStructureComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🏗️ Layout & Structure" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
