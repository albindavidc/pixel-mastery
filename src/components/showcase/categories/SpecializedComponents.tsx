import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { Lock, Search, ShoppingCart, MessageSquare, LayoutDashboard, Sparkles, User, Settings, Check, CreditCard } from 'lucide-react';

export function useSpecializedComponentsComponents() {

  const allComponents = [
    {
      domain: 'Authentication',
      name: 'Login Form',
      description: 'Standard username/password entry.',
      render: () => (
        <div className="w-full max-w-[200px] bg-zinc-900 border border-zinc-800 rounded-lg p-4 space-y-3 shadow-lg">
          <div className="flex justify-center mb-2"><Lock className="w-6 h-6 text-indigo-400" /></div>
          <div className="h-7 bg-zinc-950 border border-zinc-700 rounded"></div>
          <div className="h-7 bg-zinc-950 border border-zinc-700 rounded"></div>
          <div className="h-7 bg-indigo-500 rounded flex items-center justify-center text-[10px] text-white font-bold uppercase mt-2">Sign In</div>
        </div>
      )
    },
    {
      domain: 'Authentication',
      name: 'SSO Buttons',
      description: 'Single Sign-On providers (Google, GitHub, etc.).',
      render: () => (
        <div className="w-full max-w-[200px] flex flex-col gap-2">
          <button className="w-full h-8 bg-white text-zinc-900 rounded text-xs font-medium flex items-center justify-center gap-2 border border-zinc-300">
             <div className="w-3 h-3 rounded-full bg-rose-500"></div> Google
          </button>
          <button className="w-full h-8 bg-zinc-800 text-white rounded text-xs font-medium flex items-center justify-center gap-2 border border-zinc-700 hover:bg-zinc-700">
             <div className="w-3 h-3 rounded-full bg-white"></div> GitHub
          </button>
        </div>
      )
    },
    {
      domain: 'Commerce',
      name: 'Product Card',
      description: 'Displays item image, price, and "Add to Cart".',
      render: () => (
        <div className="w-full max-w-[160px] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="h-24 bg-zinc-800"></div>
          <div className="p-3">
            <div className="text-xs font-bold text-white mb-1">Wireless Headphones</div>
            <div className="text-xs text-indigo-400 font-bold mb-2">$199.00</div>
            <button className="w-full py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded text-[10px] text-white font-medium flex items-center justify-center gap-1">
              <ShoppingCart className="w-3 h-3" /> Add
            </button>
          </div>
        </div>
      )
    },
    {
      domain: 'Commerce',
      name: 'Shopping Cart',
      description: 'List of selected items and total price.',
      render: () => (
        <div className="w-full max-w-[200px] bg-zinc-900 border border-zinc-800 rounded-lg p-3">
          <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
            <span className="text-xs font-bold text-white">Your Cart</span>
            <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded-full text-zinc-400">2</span>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Item 1</span>
              <span className="text-white">$45</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Item 2</span>
              <span className="text-white">$12</span>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-2 flex justify-between items-center text-sm font-bold">
            <span className="text-zinc-300">Total</span>
            <span className="text-indigo-400">$57</span>
          </div>
        </div>
      )
    },
    {
      domain: 'Commerce',
      name: 'Checkout Form',
      description: 'Payment and shipping details collection.',
      render: () => (
        <div className="w-full max-w-[220px] bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-white">Payment Details</span>
          </div>
          <div className="h-6 bg-zinc-950 border border-zinc-700 rounded w-full"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-zinc-950 border border-zinc-700 rounded w-1/2"></div>
            <div className="h-6 bg-zinc-950 border border-zinc-700 rounded w-1/2"></div>
          </div>
          <button className="w-full h-7 bg-indigo-500 rounded text-[10px] text-white font-bold mt-2">Pay Now</button>
        </div>
      )
    },
    {
      domain: 'Messaging',
      name: 'Chat Bubble',
      description: 'Individual message container (sent vs received styles).',
      render: () => (
        <div className="w-full flex flex-col gap-2 p-2">
          <div className="self-start max-w-[80%] bg-zinc-800 text-zinc-200 text-xs py-1.5 px-3 rounded-2xl rounded-tl-sm">
            Hey! Are we still on for today?
          </div>
          <div className="self-end max-w-[80%] bg-indigo-500 text-white text-xs py-1.5 px-3 rounded-2xl rounded-tr-sm flex items-end gap-1">
            Yes, see you at 3!
            <Check className="w-3 h-3 text-indigo-200" />
          </div>
        </div>
      )
    },
    {
      domain: 'Messaging',
      name: 'Message Composer',
      description: 'Input field with attachment and send buttons.',
      render: () => (
        <div className="w-full max-w-[240px] bg-zinc-900 border border-zinc-700 rounded-full flex items-center p-1 pl-3 shadow-md">
          <div className="flex-1 text-[10px] text-zinc-500">Type a message...</div>
          <button className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45 -ml-1"></div>
          </button>
        </div>
      )
    },
    {
      domain: 'Dashboard',
      name: 'Stat Widget',
      description: 'Small card showing a trend or single metric.',
      render: () => (
        <div className="w-full max-w-[150px] bg-zinc-900 border border-zinc-800 rounded-lg p-3">
          <div className="flex justify-between items-start mb-2">
            <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center">
              <User className="w-3 h-3 text-indigo-400" />
            </div>
            <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1 rounded">+12%</span>
          </div>
          <div className="text-lg font-bold text-white mb-0.5">8,492</div>
          <div className="text-[9px] text-zinc-500 uppercase tracking-wider">Active Users</div>
        </div>
      )
    },
    {
      domain: 'Dashboard',
      name: 'Activity Feed',
      description: 'Chronological list of system or user actions.',
      render: () => (
        <div className="w-full pl-2 space-y-3 border-l-2 border-zinc-800 ml-3">
          <div className="relative">
            <div className="absolute -left-[13px] w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-zinc-950"></div>
            <div className="text-[10px] text-zinc-300"><span className="font-bold text-white">Alice</span> pushed to <span className="font-mono text-indigo-400">main</span></div>
            <div className="text-[8px] text-zinc-500">2 mins ago</div>
          </div>
          <div className="relative">
            <div className="absolute -left-[13px] w-2 h-2 rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
            <div className="text-[10px] text-zinc-300"><span className="font-bold text-white">System</span> backup completed</div>
            <div className="text-[8px] text-zinc-500">1 hour ago</div>
          </div>
        </div>
      )
    },
    {
      domain: 'AI',
      name: 'Prompt Input',
      description: 'Large text area with "Generate" action and visual flair.',
      render: () => (
        <div className="w-full max-w-[240px] bg-zinc-900/80 border border-zinc-700 rounded-xl p-2 relative overflow-hidden group hover:border-indigo-500/50 transition-colors shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 flex items-start gap-2">
             <Sparkles className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
             <div className="flex-1 text-[10px] text-zinc-400 mt-1">Ask me anything to generate...</div>
          </div>
          <div className="relative z-10 flex justify-end mt-4">
             <button className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-[9px] text-white font-bold flex items-center gap-1 shadow-md shadow-indigo-500/20">
               Generate
             </button>
          </div>
        </div>
      )
    },
    {
      domain: 'AI',
      name: 'AI Response Block',
      description: 'Stylized container for AI-generated content (often markdown).',
      render: () => (
        <div className="w-full flex gap-3">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm border border-zinc-800">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="text-[10px] font-bold text-indigo-300">Assistant</div>
            <div className="text-[10px] text-zinc-300 leading-relaxed bg-zinc-900 border border-zinc-800 p-2 rounded-lg rounded-tl-sm">
              Here is a summary of the provided text, formatted as requested.
              <div className="w-3/4 h-2 bg-zinc-800 rounded mt-2"></div>
              <div className="w-1/2 h-2 bg-zinc-800 rounded mt-1"></div>
            </div>
            <div className="flex gap-2">
               <button className="text-[9px] text-zinc-500 hover:text-zinc-300 border border-zinc-800 px-1.5 py-0.5 rounded">Copy</button>
               <button className="text-[9px] text-zinc-500 hover:text-zinc-300 border border-zinc-800 px-1.5 py-0.5 rounded">Regenerate</button>
            </div>
          </div>
        </div>
      )
    }
  ];

    const unique = [];
  const seen = new Set();
  for (const c of allComponents) {
    if (!seen.has(c.name.toLowerCase())) {
      seen.add(c.name.toLowerCase());
      unique.push(c);
    }
  }
  return unique;
}

export function SpecializedComponents({ searchQuery, activeDomain, filterList, startIndex = 0 }: { searchQuery: string, activeDomain: string, filterList?: string[], startIndex?: number }) {
  const allComponents = useSpecializedComponentsComponents();
  const domainComponents = allComponents.filter(c => c.domain === activeDomain);
  const filtered = domainComponents.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  
  if (filtered.length === 0) return (
    <div className="text-center text-zinc-500 py-12 text-sm">
      No components found in {activeDomain} matching "{searchQuery}"
    </div>
  );

  return (
    <CategorySection title={`🧩 Specialized - ${activeDomain}`} count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
