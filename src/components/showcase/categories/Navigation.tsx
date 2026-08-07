import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { ChevronDown, MoreVertical, Search, Menu, Home, Settings, User } from 'lucide-react';

export function Navigation({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const [activeTab, setActiveTab] = useState(0);

  const components = [
    {
      name: 'Navbar',
      description: 'Top-level navigation header with brand and primary links.',
      render: () => (
        <div className="w-full bg-zinc-900 border-b border-zinc-800 p-2 flex justify-between items-center rounded">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-500 rounded"></div>
            <div className="text-sm font-semibold text-white">Brand</div>
          </div>
          <div className="flex gap-3 text-xs text-zinc-400">
            <span className="text-zinc-200">Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      )
    },
    {
      name: 'App Bar',
      description: 'A dedicated application header, often with context actions.',
      render: () => (
        <div className="w-full bg-indigo-600 p-2 flex justify-between items-center rounded shadow-md text-white">
          <Menu className="w-4 h-4" />
          <div className="text-sm font-medium">Dashboard</div>
          <Search className="w-4 h-4" />
        </div>
      )
    },
    {
      name: 'Toolbar',
      description: 'A horizontal container grouping action buttons.',
      alsoIn: ['Layout & Structure'],
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
      name: 'Navigation Rail',
      description: 'A compact side navigation for switching top-level views.',
      render: () => (
        <div className="w-14 bg-zinc-900 border-r border-zinc-800 rounded-l-lg py-3 flex flex-col items-center gap-4 h-32">
          <Home className="w-5 h-5 text-indigo-400" />
          <User className="w-5 h-5 text-zinc-500" />
          <Settings className="w-5 h-5 text-zinc-500" />
        </div>
      )
    },
    {
      name: 'Bottom Navigation',
      description: 'Primary mobile navigation fixed to the bottom of the screen.',
      render: () => (
        <div className="w-full max-w-[200px] bg-zinc-900 border-t border-zinc-800 rounded-t-lg p-2 flex justify-around items-center mt-auto h-12 shadow-lg">
          <div className="flex flex-col items-center text-indigo-400">
            <Home className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Home</span>
          </div>
          <div className="flex flex-col items-center text-zinc-500">
            <Search className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Search</span>
          </div>
          <div className="flex flex-col items-center text-zinc-500">
            <User className="w-4 h-4" />
            <span className="text-[9px] mt-0.5">Profile</span>
          </div>
        </div>
      )
    },
    {
      name: 'Menu',
      description: 'A list of actionable options typically triggered by a button.',
      render: () => (
        <div className="w-40 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-1 overflow-hidden">
          <div className="px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">Profile</div>
          <div className="px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">Settings</div>
          <div className="w-full h-px bg-zinc-800 my-1"></div>
          <div className="px-3 py-1.5 text-sm text-rose-400 hover:bg-rose-500/10 cursor-pointer">Logout</div>
        </div>
      )
    },
    {
      name: 'Dropdown Menu',
      description: 'A contextual menu attached to a specific trigger element.',
      render: () => (
        <div className="flex flex-col gap-1 items-start">
          <button className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-md text-sm text-white">
            Options <ChevronDown className="w-3 h-3 text-zinc-400" />
          </button>
          <div className="w-32 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg p-1 mt-1 ml-2">
             <div className="h-6 bg-zinc-800 rounded mb-1"></div>
             <div className="h-6 hover:bg-zinc-800 rounded"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Mega Menu',
      description: 'A large, multi-column dropdown for complex navigation.',
      render: () => (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-xl">
          <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase">Products</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-3 bg-zinc-800 rounded w-3/4"></div>
              <div className="h-3 bg-zinc-800 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-zinc-800 rounded w-full"></div>
              <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Context Menu',
      description: 'A menu that appears on right-click (secondary action).',
      render: () => (
        <div className="relative w-full h-32 bg-zinc-950 border border-dashed border-zinc-700 rounded flex items-center justify-center text-zinc-500 text-sm">
          Right click area
          <div className="absolute top-1/2 left-1/2 w-32 bg-zinc-800 border border-zinc-700 rounded-md shadow-xl py-1 z-10">
            <div className="px-3 py-1 text-xs text-zinc-300">Copy</div>
            <div className="px-3 py-1 text-xs text-zinc-300">Paste</div>
          </div>
        </div>
      )
    },
    {
      name: 'Breadcrumb',
      description: 'Indicates the current page location within a hierarchy.',
      render: () => (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Home</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Products</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-200 font-medium">Shoes</span>
        </div>
      )
    },
    {
      name: 'Tabs',
      description: 'Organizes related content into separate views.',
      render: () => {
        return (
          <div className="w-full flex flex-col">
            <div className="flex border-b border-zinc-800">
              {['Tab 1', 'Tab 2'].map((tab, i) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === i ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-b-md">
              <div className="text-sm text-zinc-400">Content for {activeTab === 0 ? 'Tab 1' : 'Tab 2'}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'Stepper',
      description: 'Conveys progress through numbered steps.',
      render: () => (
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">1</div>
            <div className="text-[10px] text-indigo-400">Start</div>
          </div>
          <div className="flex-1 h-px bg-indigo-500 mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold">2</div>
            <div className="text-[10px] text-zinc-300">Details</div>
          </div>
          <div className="flex-1 h-px bg-zinc-800 mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500 font-bold">3</div>
            <div className="text-[10px] text-zinc-500">Done</div>
          </div>
        </div>
      )
    },
    {
      name: 'Pagination',
      description: 'Controls for navigating between pages of content.',
      render: () => (
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-zinc-400">&lt;</button>
          <button className="px-2.5 py-1 bg-indigo-500 rounded text-white text-sm">1</button>
          <button className="px-2.5 py-1 hover:bg-zinc-800 rounded text-zinc-400 text-sm">2</button>
          <button className="px-2.5 py-1 hover:bg-zinc-800 rounded text-zinc-400 text-sm">3</button>
          <button className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-zinc-400">&gt;</button>
        </div>
      )
    },
    {
      name: 'Paginator',
      description: 'Advanced pagination with page size controls.',
      render: () => (
        <div className="w-full flex justify-between items-center bg-zinc-900 p-2 rounded border border-zinc-800 text-xs">
          <div className="text-zinc-500">1-10 of 42</div>
          <div className="flex gap-2 items-center">
            <span className="text-zinc-500">Rows:</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">10</span>
          </div>
        </div>
      )
    },
    {
      name: 'Command Palette',
      description: 'A global search and command execution interface (Cmd+K).',
      render: () => (
        <div className="w-full max-w-sm bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden">
          <div className="p-3 border-b border-zinc-800 flex items-center gap-2">
            <Search className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-400 text-sm">Search command...</span>
          </div>
          <div className="p-2 space-y-1">
            <div className="px-2 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs rounded">Go to Dashboard</div>
            <div className="px-2 py-1.5 hover:bg-zinc-800 text-zinc-400 text-xs rounded">Create New Project</div>
          </div>
        </div>
      )
    },
    {
      name: 'Sort Header',
      description: 'Table column header that allows sorting data.',
      render: () => (
        <div className="flex items-center gap-1 px-3 py-1.5 bg-zinc-800 rounded-md cursor-pointer hover:bg-zinc-700">
          <span className="text-sm font-semibold text-zinc-200">Name</span>
          <ChevronDown className="w-3 h-3 text-indigo-400" />
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🧭 Navigation">
      {filtered.map(c => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
