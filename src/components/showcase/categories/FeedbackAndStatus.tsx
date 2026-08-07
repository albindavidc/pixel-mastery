import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export function FeedbackAndStatus({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const components = [
    {
      name: 'Alert / Banner',
      description: 'An inline block communicating a state that affects the system.',
      render: () => (
        <div className="w-full bg-rose-500/10 border-l-4 border-rose-500 p-3 rounded-r-md flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
          <div>
            <div className="text-sm font-bold text-rose-400">Connection Error</div>
            <div className="text-xs text-rose-500/80 mt-0.5">Could not connect to the server. Please try again later.</div>
          </div>
        </div>
      )
    },
    {
      name: 'Toast / Snackbar',
      description: 'A brief, temporary notification that appears on screen.',
      alsoIn: ['Overlay & Popups'],
      render: () => (
        <div className="w-full max-w-xs bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-2xl flex items-center gap-3 relative translate-y-2 opacity-90">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <div className="text-sm font-medium text-white">Item saved successfully.</div>
        </div>
      )
    },
    {
      name: 'Notification',
      description: 'A message informing the user about an event.',
      render: () => (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 shadow-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white flex justify-between">
              New Message <span className="text-[10px] font-normal text-zinc-500">2m ago</span>
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">Sarah commented on your post.</div>
          </div>
        </div>
      )
    },
    {
      name: 'Progress Bar',
      description: 'A horizontal bar indicating the completion status of a task.',
      render: () => (
        <div className="w-full space-y-1">
          <div className="flex justify-between text-xs font-medium text-zinc-400">
            <span>Uploading...</span>
            <span>65%</span>
          </div>
          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      )
    },
    {
      name: 'Circular Progress / Spinner',
      description: 'A circular indicator for an indeterminate loading state.',
      render: () => (
        <div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-indigo-500 animate-spin"></div>
      )
    },
    {
      name: 'Skeleton',
      description: 'A placeholder for content that is still loading.',
      render: () => (
        <div className="w-full flex gap-3 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-3 bg-zinc-800 rounded w-3/4"></div>
            <div className="space-y-1">
              <div className="h-2 bg-zinc-800 rounded"></div>
              <div className="h-2 bg-zinc-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Empty State',
      description: 'Communicates that a list or container has no data.',
      render: () => (
        <div className="w-full py-6 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-lg bg-zinc-900/30">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
            <Info className="w-5 h-5 text-zinc-500" />
          </div>
          <div className="text-sm font-medium text-zinc-300">No items found</div>
          <div className="text-xs text-zinc-500 mt-1">Try adjusting your filters</div>
        </div>
      )
    },
    {
      name: 'Status Dot / Indicator',
      description: 'A tiny circle indicating online/offline or health status.',
      render: () => (
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div> Online
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div> Away
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-zinc-600"></div> Offline
          </div>
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🚦 Feedback & Status" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
