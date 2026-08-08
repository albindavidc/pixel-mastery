import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export function useFeedbackAndStatusComponents() {

  const components = [
    {
      name: 'Alert',
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
      name: 'Toast',
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
      name: 'Spinner',
      description: 'A circular indicator for an indeterminate loading state. Component for Progress Spinner',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                      <div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-indigo-500 animate-spin"></div>
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="w-8 h-8 border-2 border-zinc-700 border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>
                  </div>
               )
    },
    {
      name: 'Skeleton',
      description: 'A placeholder for content that is still loading.',
      render: () => (
        <div className="w-full flex gap-3">
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
      name: 'Status Indicator',
      description: 'A tiny circle indicating online/offline or health status. Component for Status Indicator',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
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
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span className="text-xs text-zinc-300">Online</span></div>
                    </div>
                  </div>
               )
    },
    {
      name: 'Message',
      description: 'Component for Message',
      render: () => (
        <div className="w-full bg-zinc-800 border-l-2 border-indigo-500 p-2 rounded"><div className="text-xs font-semibold text-zinc-200">New Message</div><div className="text-[10px] text-zinc-400 mt-1">Hello, you have a notification.</div></div>
      )
    }
  ];
    return components;
}

export function FeedbackAndStatus({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useFeedbackAndStatusComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🚦 Feedback & Status" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
