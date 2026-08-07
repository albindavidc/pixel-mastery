import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { ChevronRight, ChevronDown, User, FileText, Image as ImageIcon } from 'lucide-react';

export function DataDisplay({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
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
      name: 'Tree View',
      description: 'Displays hierarchical data in a nested list.',
      render: () => (
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
      )
    },
    {
      name: 'Accordion / Collapse',
      description: 'Vertically stacked interactive headings that reveal content.',
      render: () => (
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
      name: 'Chart / Statistics',
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
      name: 'Metric Card / KPI Card',
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
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="📊 Data Display">
      {filtered.map(c => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
