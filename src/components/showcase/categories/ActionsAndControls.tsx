import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { Play, Pause, ChevronDown, Check, X, Star, Home, Settings } from 'lucide-react';

export function useActionsAndControlsComponents() {

  const [toggle, setToggle] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);

  const components = [
    {
      name: 'Button',
      description: 'Interactive element that triggers an action.',
      render: () => (
        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md font-medium transition-colors shadow-sm">
          Primary Action
        </button>
      )
    },
    {
      name: 'Icon Button',
      description: 'A button containing only an icon.',
      render: () => (
        <button className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full transition-colors border border-zinc-700">
          <Star className="w-5 h-5" />
        </button>
      )
    },
    {
      name: 'Toggle Button',
      description: 'A button that toggles between on/off states. Alternative name for a button representing a boolean state. Component for Toggle Button',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="flex flex-col gap-4 w-full">
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                            {(() => { return  (
                      <button 
                        onClick={() => setToggle(!toggle)}
                        className={`px-4 py-2 rounded-md font-medium transition-colors border ${toggle ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800'}`}
                      >
                        {toggle ? 'Active' : 'Inactive'}
                      </button>
                    ); })()}
                          </div>
                          <div className="w-full relative group">
                            <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                            <button className="p-2 rounded bg-zinc-800 text-indigo-400 border border-indigo-500/30">
                      <Play className="w-5 h-5 fill-current" />
                    </button>
                          </div>
                        </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Toggle Button View</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Button Group',
      description: 'A set of related buttons grouped together.',
      render: () => (
        <div className="flex items-center rounded-md overflow-hidden border border-zinc-700">
          <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-sm text-zinc-200">Day</button>
          <div className="w-px h-full bg-zinc-700"></div>
          <button className="px-3 py-1.5 bg-indigo-500 text-sm text-white font-medium">Week</button>
          <div className="w-px h-full bg-zinc-700"></div>
          <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-sm text-zinc-200">Month</button>
        </div>
      )
    },
    {
      name: 'Split Button',
      description: 'A primary button combined with a dropdown for alternate actions.',
      render: () => (
        <div className="flex items-stretch rounded-md overflow-hidden">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm">Save</button>
          <div className="w-px bg-indigo-700"></div>
          <button className="px-2 bg-indigo-500 hover:bg-indigo-600 text-white flex items-center justify-center">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )
    },
    {
      name: 'FAB',
      description: 'A prominent circular button for the primary screen action.',
      render: () => (
        <button className="w-12 h-12 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30">
          <span className="text-2xl font-light leading-none mb-1">+</span>
        </button>
      )
    },
    {
      name: 'Toggle Switch',
      description: 'A visual toggle switch for boolean settings. Component for Toggle Switch (Slide Toggle / Switch)',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    {(() => { return  (
                <div 
                  className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${toggle ? 'bg-emerald-500' : 'bg-zinc-700'}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${toggle ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              ); })()}
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Toggle Switch (Slide Toggle / Switch) View</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Checkbox',
      description: 'Allows selecting one or more items from a set. Component for Checkbox',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-5 h-5 rounded bg-zinc-900 border border-zinc-600 group-hover:border-indigo-400 flex items-center justify-center transition-colors">
                  <Check className="w-3.5 h-3.5 text-transparent" />
                </div>
                <span className="text-sm text-zinc-300">Remember me</span>
              </label>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Checkbox View</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Checkbox Group',
      description: 'A list of related checkboxes.',
      render: () => (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
            <span className="text-xs text-zinc-300">Option A</span>
          </label>
          <label className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-zinc-800 border border-zinc-600"></div>
            <span className="text-xs text-zinc-300">Option B</span>
          </label>
        </div>
      )
    },
    {
      name: 'Radio Button',
      description: 'Allows selecting exactly one item from a set. Component for Radio Button',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                </div>
                <span className="text-sm text-zinc-300">Selected</span>
              </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Radio Button View</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Radio Group',
      description: 'A group of mutually exclusive radio buttons.',
      render: () => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-indigo-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-indigo-500"></div></div>
            <span className="text-xs text-zinc-300">Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-zinc-600"></div>
            <span className="text-xs text-zinc-300">PayPal</span>
          </div>
        </div>
      )
    },
    {
      name: 'Slider',
      description: 'Allows selecting a value from a range by moving a thumb. Component for Slider',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="w-full flex items-center gap-3">
                <span className="text-xs text-zinc-500">0</span>
                <div className="flex-1 h-1.5 bg-zinc-800 rounded-full relative">
                  <div className="absolute left-0 top-0 bottom-0 bg-indigo-500 rounded-full" style={{ width: `${sliderVal}%` }}></div>
                  <input 
                    type="range" 
                    className="absolute inset-0 w-full opacity-0 cursor-pointer" 
                    value={sliderVal} 
                    onChange={(e) => setSliderVal(Number(e.target.value))} 
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md border-2 border-indigo-500" style={{ left: `calc(${sliderVal}% - 8px)` }}></div>
                </div>
                <span className="text-xs text-zinc-500">100</span>
              </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Slider View</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Range Slider',
      description: 'Allows selecting a start and end value from a range.',
      render: () => (
        <div className="w-full h-1.5 bg-zinc-800 rounded-full relative mt-4">
          <div className="absolute left-1/4 right-1/4 top-0 bottom-0 bg-emerald-500 rounded-full"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 left-1/4 -translate-x-2"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 right-1/4 translate-x-2"></div>
        </div>
      )
    },
    {
      name: 'Chip',
      description: 'Compact elements that represent an input, attribute, or action. Component for Chips',
      render: () => (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                      <div className="flex gap-2">
                <div className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">React</div>
                <div className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 flex items-center gap-1">
                  Tailwind <X className="w-3 h-3 hover:text-white cursor-pointer" />
                </div>
              </div>
                    </div>
                    <div className="w-full relative group">
                      <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                      <div className="flex flex-wrap gap-2"><span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Design</span><span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Development</span></div>
                    </div>
                  </div>
               )
    },
    {
      name: 'Badge',
      description: 'Small status descriptors for UI elements.',
      render: () => (
        <div className="relative inline-block">
          <div className="w-10 h-10 bg-zinc-800 rounded-md"></div>
          <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-zinc-950">
            3
          </div>
        </div>
      )
    },
    {
      name: 'Icon',
      description: 'A visual symbol used for actions or status. Component for Icon',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <div className="flex gap-4 items-center text-zinc-400">
                <Home className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
                <Settings className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
              </div>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="w-full p-2 bg-zinc-900 border border-zinc-800 rounded border-dashed text-center text-xs text-zinc-500 font-mono">Icon Configured</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Link',
      description: 'Navigational action, typically rendered as underlined text. Component for Link',
      alsoIn: ['Typography'],
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-400/50 hover:decoration-indigo-300 transition-colors">
                View Documentation
              </a>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="text-sm text-zinc-400">Sample typography for Link</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Speed Dial',
      description: 'Component for Speed Dial',
      render: () => (
        <div className="relative w-12 h-12"><button className="absolute bottom-0 right-0 w-12 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg text-xl transition-transform hover:rotate-45">+</button></div>
      )
    },
    {
      name: 'Knob',
      description: 'Component for Knob',
      render: () => (
        <div className="relative w-16 h-16 rounded-full border-4 border-zinc-800 flex items-center justify-center"><div className="absolute inset-0 rounded-full border-4 border-indigo-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)' }}></div><span className="text-sm font-semibold">75</span></div>
      )
    },
  ];
    return components;
}

export function ActionsAndControls({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useActionsAndControlsComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🎯 Actions & Controls" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
