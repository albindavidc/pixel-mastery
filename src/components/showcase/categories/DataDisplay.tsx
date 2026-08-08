import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { ChevronRight, ChevronDown, User, FileText, Image as ImageIcon } from 'lucide-react';

export function useDataDisplayComponents() {

  const [accordionOpen, setAccordionOpen] = useState(false);

  const components = [
    {
      name: 'Table',
      description: 'Displays data in rows and columns.',
      render: () => (
        <div className="w-full overflow-hidden border border-zinc-800 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
              <tr>
                <th className="p-2 font-medium">Name</th>
                <th className="p-2 font-medium">Status</th>
                <th className="p-2 font-medium">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50 bg-zinc-950/50 text-zinc-300">
              <tr>
                <td className="p-2">Jane Doe</td>
                <td className="p-2"><span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">Active</span></td>
                <td className="p-2 text-zinc-500">Admin</td>
              </tr>
              <tr>
                <td className="p-2">John Smith</td>
                <td className="p-2"><span className="px-1.5 py-0.5 rounded-full bg-zinc-500/20 text-zinc-400 text-[10px]">Offline</span></td>
                <td className="p-2 text-zinc-500">User</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      name: 'Data Grid',
      description: 'Advanced table with features like sorting, filtering, and pagination.',
      render: () => (
        <div className="w-full border border-zinc-700 rounded-lg flex flex-col bg-zinc-900 overflow-hidden">
          <div className="p-2 border-b border-zinc-700 flex justify-between items-center bg-zinc-800/50">
            <div className="w-4 h-4 bg-zinc-600 rounded"></div>
            <div className="flex gap-1">
              <div className="w-12 h-4 bg-zinc-700 rounded"></div>
              <div className="w-12 h-4 bg-zinc-700 rounded"></div>
            </div>
          </div>
          <div className="p-2 grid grid-cols-4 gap-2 border-b border-zinc-800 text-xs text-zinc-400">
             <span>ID</span><span>Name</span><span>Amount</span><span>Date</span>
          </div>
          <div className="p-2 grid grid-cols-4 gap-2 bg-zinc-950 text-xs text-zinc-300">
             <span>#104</span><span>Acme Corp</span><span>$120</span><span>Jan 4</span>
          </div>
        </div>
      )
    },
    {
      name: 'List',
      description: 'A continuous, vertical index of text or images.',
      render: () => (
        <ul className="w-full border border-zinc-800 rounded-lg divide-y divide-zinc-800 bg-zinc-900">
          <li className="p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400"><User className="w-4 h-4" /></div>
            <div>
              <div className="text-sm font-medium text-white">Alice Freeman</div>
              <div className="text-xs text-zinc-500">alice@example.com</div>
            </div>
          </li>
          <li className="p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><User className="w-4 h-4" /></div>
            <div>
              <div className="text-sm font-medium text-white">Bob Smith</div>
              <div className="text-xs text-zinc-500">bob@example.com</div>
            </div>
          </li>
        </ul>
      )
    },
    {
      name: 'Tree',
      description: 'Displays hierarchical data in a nested list. Component for Tree',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full font-mono text-sm space-y-1 text-zinc-300">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-zinc-800 px-1 rounded">
                  <ChevronDown className="w-3 h-3 text-zinc-500" />
                  <span className="text-indigo-300">src</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-zinc-800 px-1 rounded">
                    <ChevronRight className="w-3 h-3 text-zinc-500" />
                    <span className="text-indigo-300">components</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-zinc-800 px-1 rounded pl-5">
                    <span className="text-zinc-400">App.tsx</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-zinc-800 px-1 rounded pl-5">
                    <span className="text-zinc-400">index.css</span>
                  </div>
                </div>
              </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-400 flex flex-col gap-1.5">
                <div className="flex items-center gap-1"><div className="w-3 h-3 text-zinc-500 flex items-center justify-center">▾</div><div className="w-3 h-3 bg-zinc-700 rounded-sm"></div> Documents</div>
                <div className="flex items-center gap-1 pl-4"><div className="w-3 h-3 text-zinc-600 flex items-center justify-center">▸</div><div className="w-3 h-3 bg-zinc-700 rounded-sm"></div> Work</div>
                <div className="flex items-center gap-1 pl-4"><div className="w-3 h-3 text-zinc-500 flex items-center justify-center">▾</div><div className="w-3 h-3 bg-zinc-700 rounded-sm"></div> Personal</div>
                <div className="flex items-center gap-1 pl-8"><div className="w-3 h-3 text-zinc-600"></div><div className="w-3 h-3 bg-zinc-600 rounded-sm"></div> Resume.pdf</div>
              </div>
                  </div>
                </div>
             )
    },
    {
      name: 'Accordion',
      description: 'Vertically stacked interactive headings that reveal content. Component for Expansion Panel',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                      <div className="w-full border border-zinc-800 rounded-md overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-3 bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-800"
                  onClick={() => setAccordionOpen(!accordionOpen)}
                >
                  How does this work?
                  {accordionOpen ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
                </button>
                {accordionOpen && (
                  <div className="p-3 bg-zinc-950 text-sm text-zinc-400 border-t border-zinc-800">
                    It expands and collapses when you click the header.
                  </div>
                )}
              </div>
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="w-full flex flex-col gap-1"><div className="bg-zinc-800 p-2 rounded flex justify-between items-center"><span className="text-xs text-zinc-300">Title</span><span className="text-[10px] text-zinc-500">▼</span></div><div className="p-2 text-xs text-zinc-500">Content here...</div></div>
                    </div>
                  </div>
               )
    },
    {
      name: 'Description List',
      description: 'A list of terms and their corresponding descriptions.',
      render: () => (
        <dl className="w-full grid grid-cols-3 gap-y-2 text-sm">
          <dt className="text-zinc-500 font-medium">Status</dt>
          <dd className="col-span-2 text-emerald-400">Completed</dd>
          
          <dt className="text-zinc-500 font-medium">Date</dt>
          <dd className="col-span-2 text-white">Oct 24, 2023</dd>
          
          <dt className="text-zinc-500 font-medium">Amount</dt>
          <dd className="col-span-2 text-white">$120.00</dd>
        </dl>
      )
    },
    {
      name: 'Avatar',
      description: 'A graphical representation of a user.',
      alsoIn: ['Media'],
      render: () => (
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg border-2 border-zinc-950">
          JD
        </div>
      )
    },
    {
      name: 'Avatar Group',
      description: 'A stacked group of avatars showing multiple users.',
      render: () => (
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold text-white z-30">A</div>
          <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold text-white z-20">B</div>
          <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold text-white z-10">C</div>
          <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-zinc-400 z-0">+2</div>
        </div>
      )
    },
    {
      name: 'Calendar',
      description: 'Displays a grid of days for viewing or selecting dates.',
      render: () => (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 w-48 shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-white">October</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-zinc-800 rounded"></div>
              <div className="w-4 h-4 bg-zinc-800 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className="text-[8px] text-zinc-500">{d}</div>)}
            {Array.from({length: 14}).map((_, i) => (
              <div key={i} className={`w-5 h-5 flex items-center justify-center rounded text-[10px] ${i === 8 ? 'bg-indigo-500 text-white font-bold' : 'text-zinc-300 hover:bg-zinc-800 cursor-pointer'}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      name: 'Timeline',
      description: 'Displays a list of events in chronological order.',
      render: () => (
        <div className="w-full relative pl-4 space-y-4 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-zinc-800">
          <div className="relative">
            <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950"></div>
            <div className="text-xs font-bold text-white">Shipped</div>
            <div className="text-[10px] text-zinc-500">Today, 2:30 PM</div>
          </div>
          <div className="relative">
            <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
            <div className="text-xs font-bold text-zinc-400">Processing</div>
            <div className="text-[10px] text-zinc-600">Yesterday</div>
          </div>
        </div>
      )
    },
    {
      name: 'Chart',
      description: 'Graphical representation of data.',
      render: () => (
        <div className="w-full h-32 flex items-end gap-2 px-2 border-b border-l border-zinc-700 pb-1">
          <div className="w-1/4 bg-indigo-500/40 border border-indigo-500/80 rounded-t h-[40%] hover:h-[45%] transition-all"></div>
          <div className="w-1/4 bg-cyan-500/40 border border-cyan-500/80 rounded-t h-[60%] hover:h-[65%] transition-all"></div>
          <div className="w-1/4 bg-emerald-500/40 border border-emerald-500/80 rounded-t h-[30%] hover:h-[35%] transition-all"></div>
          <div className="w-1/4 bg-rose-500/40 border border-rose-500/80 rounded-t h-[80%] hover:h-[85%] transition-all"></div>
        </div>
      )
    },
    {
      name: 'Metric Card',
      description: 'Highlights a single key performance indicator.',
      alsoIn: ['Specialized Components (Dashboard)'],
      render: () => (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-medium text-zinc-400 mb-1">Total Revenue</div>
          <div className="text-2xl font-display font-bold text-white mb-2">$45,231.89</div>
          <div className="text-xs font-medium text-emerald-400 bg-emerald-500/10 inline-block px-1.5 py-0.5 rounded">
            +20.1% from last month
          </div>
        </div>
      )
    },
    {
      name: 'Carousel',
      description: 'Component for Carousel',
      render: () => (
        <div className="w-full flex gap-2 overflow-hidden"><div className="w-2/3 h-24 bg-zinc-800 rounded flex-shrink-0"></div><div className="w-1/3 h-24 bg-zinc-800/50 rounded flex-shrink-0"></div></div>
      )
    },
    {
      name: 'Compare',
      description: 'Component for Compare',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full h-24 relative bg-zinc-800 rounded overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-zinc-700 border-r-2 border-indigo-500"></div><div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-indigo-500 rounded-full flex items-center justify-center text-white text-[8px]">&lt;&gt;</div></div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full h-24 relative bg-zinc-800 rounded overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-zinc-700 border-r-2 border-indigo-500"></div><div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-indigo-500 rounded-full flex items-center justify-center text-white text-[8px]">&lt;&gt;</div></div>
                  </div>
                </div>
             )
    },
    {
      name: 'Data View',
      description: 'Component for Data View',
      render: () => (
        <div className="flex flex-col gap-3 w-full"><div className="p-3 border border-zinc-800 rounded-lg flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-zinc-800 rounded"></div><div><div className="font-semibold text-sm">Product A</div><div className="text-xs text-zinc-500">Category</div></div></div><span className="font-bold text-indigo-400">$99</span></div></div>
      )
    },
    {
      name: 'Gallery',
      description: 'Component for Gallery',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full grid grid-cols-2 gap-2"><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div></div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full grid grid-cols-2 gap-2"><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div></div>
                  </div>
                </div>
             )
    },
    {
      name: 'Image',
      description: 'Component for Image Standard graphic display with optional captions.',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full grid grid-cols-2 gap-2"><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div><div className="h-12 bg-zinc-800 rounded"></div></div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full max-w-[200px]">
                <div className="w-full h-24 bg-zinc-800 rounded-t-lg flex items-center justify-center border border-zinc-700">
                  <ImageIcon className="w-6 h-6 text-zinc-600" />
                </div>
                <div className="bg-zinc-900 border-x border-b border-zinc-800 rounded-b-lg p-2 text-[10px] text-zinc-400 text-center">
                  Figure 1. Abstract placeholder.
                </div>
              </div>
                  </div>
                </div>
             )
    },
    {
      name: 'Organization Chart',
      description: 'Component for Organization Chart',
      render: () => (
        <div className="flex flex-col items-center gap-2"><div className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded text-sm font-semibold text-indigo-300">CEO</div><div className="w-px h-4 bg-zinc-700"></div><div className="flex gap-4"><div className="w-full border-t border-zinc-700 relative top-0"></div><div className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs">CTO</div><div className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs">CFO</div></div></div>
      )
    },
    {
      name: 'Pagination',
      description: 'Component for Paginator Controls for navigating between pages of content. Advanced pagination with page size controls.',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="flex items-center justify-center gap-1"><div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-zinc-500">&lt;</div><div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-[10px] text-white">1</div><div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-zinc-300">2</div><div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-zinc-500">&gt;</div></div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="flex flex-col gap-4 w-full">
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                            <div className="flex items-center gap-1">
                      <button className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-zinc-400">&lt;</button>
                      <button className="px-2.5 py-1 bg-indigo-500 rounded text-white text-sm">1</button>
                      <button className="px-2.5 py-1 hover:bg-zinc-800 rounded text-zinc-400 text-sm">2</button>
                      <button className="px-2.5 py-1 hover:bg-zinc-800 rounded text-zinc-400 text-sm">3</button>
                      <button className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-zinc-400">&gt;</button>
                    </div>
                          </div>
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                            <div className="w-full flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-800 text-xs">
                      <div className="text-zinc-500">1-10 of 42</div>
                      <div className="flex gap-2 items-center">
                        <span className="text-zinc-500">Rows:</span>
                        <span className="bg-zinc-800 px-2 py-1 rounded">10</span>
                      </div>
                    </div>
                          </div>
                        </div>
                  </div>
                </div>
             )
    },
    {
      name: 'Virtual Scroll',
      description: 'Component for Virtual Scroller Component for Virtual Scroll',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full max-w-xs h-32 border border-zinc-800 rounded bg-zinc-900 overflow-hidden relative"><div className="absolute inset-0 overflow-y-auto p-2"><div className="h-[1000px] relative"><div className="absolute top-0 w-full p-2 bg-zinc-800 rounded mb-1 text-sm">Item 1</div><div className="absolute top-[40px] w-full p-2 bg-zinc-800 rounded mb-1 text-sm">Item 2</div></div></div></div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full h-24 bg-zinc-900 border border-zinc-800 rounded relative overflow-hidden p-2"><div className="space-y-2"><div className="h-4 bg-zinc-800 w-full rounded"></div><div className="h-4 bg-zinc-800 w-5/6 rounded"></div><div className="h-4 bg-zinc-800 w-4/6 rounded"></div><div className="h-4 bg-zinc-800 w-full rounded"></div></div><div className="absolute top-1 right-1 w-1.5 h-10 bg-zinc-700 rounded-full"></div></div>
                  </div>
                </div>
             )
    },
  ];
    return components;
}

export function DataDisplay({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useDataDisplayComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="📊 Data Display" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
