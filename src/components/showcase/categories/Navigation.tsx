import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { ChevronDown, MoreVertical, Search, Menu, Home, Settings, User, X } from 'lucide-react';

export function useNavigationComponents() {

  const [activeTab, setActiveTab] = useState(0);

  const components = [
    {
      name: 'Navbar',
      description: 'Top-level navigation header with brand and primary links. A dedicated application header, often with context actions.',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
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
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="w-full bg-indigo-600 p-2 flex justify-between items-center rounded shadow-md text-white">
                <Menu className="w-4 h-4" />
                <div className="text-sm font-medium">Dashboard</div>
                <Search className="w-4 h-4" />
              </div>
                    </div>
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
    },
    {
      name: 'Dock',
      description: 'Component for Dock',
      render: () => (
        <div className="flex justify-center gap-2 p-3 bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 w-max mx-auto shadow-2xl"><div className="w-10 h-10 bg-indigo-500/20 border border-indigo-500/50 rounded-xl hover:-translate-y-2 transition-transform cursor-pointer"></div><div className="w-10 h-10 bg-rose-500/20 border border-rose-500/50 rounded-xl hover:-translate-y-2 transition-transform cursor-pointer"></div><div className="w-px h-10 bg-zinc-700 mx-1"></div><div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/50 rounded-xl hover:-translate-y-2 transition-transform cursor-pointer"></div></div>
      )
    },
    {
      name: 'Drawer',
      description: 'A panel that slides in from the edge of the screen.',
      render: () => (
        <div className="w-full h-32 relative bg-zinc-950 border border-zinc-800 rounded overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs">Content Area</div>
                <div className="absolute top-0 bottom-0 left-0 w-24 bg-zinc-900 border-r border-zinc-700 shadow-xl p-2 flex flex-col gap-2">
                  <div className="w-full h-2 bg-zinc-700 rounded-sm"></div>
                  <div className="w-3/4 h-2 bg-zinc-800 rounded-sm"></div>
                  <div className="w-5/6 h-2 bg-zinc-800 rounded-sm"></div>
                </div>
              </div>
      )
    },
    {
      name: 'Filter Drawer',
      description: 'A drawer specialized for filtering content.',
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
      name: 'Sidenav',
      description: 'Component for Sidenav',
      render: () => (
        <div className="w-full h-32 flex border border-zinc-800 rounded overflow-hidden">
          <div className="w-24 bg-zinc-900 border-r border-zinc-800 p-2 flex flex-col gap-2">
            <div className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Menu</div>
            <div className="w-full h-4 bg-indigo-500/20 border-l-2 border-indigo-500 rounded-r-sm"></div>
            <div className="w-full h-4 bg-zinc-800 rounded-sm"></div>
            <div className="w-full h-4 bg-zinc-800 rounded-sm"></div>
          </div>
          <div className="flex-1 bg-zinc-950 flex items-center justify-center text-xs text-zinc-600">Page</div>
        </div>
      )
    }
  ];
    return components;
}

export function Navigation({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useNavigationComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🧭 Navigation" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
