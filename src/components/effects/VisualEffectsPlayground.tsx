import { useAppStore } from '../../store';
import { Copy, RotateCcw } from 'lucide-react';
import React, { useState } from 'react';
import { IframePreview } from '../IframePreview';

// Import Panels
import { OpacityPanel } from './OpacityPanel';
import { ShadowPanel } from './ShadowPanel';
import { RingPanel } from './RingPanel';
import { TextShadowPanel } from './TextShadowPanel';
import { FilterPanel } from './FilterPanel';
import { BackdropFilterPanel } from './BackdropFilterPanel';
import { MaskPanel } from './MaskPanel';

export function VisualEffectsPlayground() {
  const { playgroundClasses, setPlaygroundClasses, playgroundState, setPlaygroundSize, playgroundSize, setPlaygroundState } = useAppStore();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('OPACITY');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(playgroundClasses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const activeClassesSet = new Set<string>(playgroundClasses.split(' ').map(c => c.trim()).filter(Boolean));
  
  const handleVariantClick = (variant: string) => {
    let classes = playgroundClasses.split(' ').filter(c => c.trim());
    
    if (activeClassesSet.has(variant)) {
      setPlaygroundClasses(classes.filter(c => c !== variant).join(' '));
      return;
    }

    let isMaskStop = false;
    let prefix = '';
    if (variant.includes('-from-') || variant.includes('-to-')) {
       isMaskStop = true;
       prefix = variant.substring(0, variant.lastIndexOf('-'));
    }

    if (isMaskStop) {
       classes = classes.filter(c => !c.startsWith(prefix + '-'));
       classes.push(variant);
    } else {
       const baseVariant = variant.split('-')[0];
       classes = classes.filter(c => !c.startsWith(baseVariant) || variant.startsWith('mask'));
       classes.push(variant);
    }
    setPlaygroundClasses(classes.join(' '));
  };

  const handleCustomApply = (variant: string) => {
    let classes = playgroundClasses.split(' ').filter(c => c.trim());
    
    let isMaskStop = false;
    let prefix = '';
    if (variant.includes('-from-') || variant.includes('-to-')) {
       isMaskStop = true;
       // Handle cases where the variant is like mask-linear-from-[20%]
       // the prefix should still be mask-linear-from
       const prefixMatch = variant.match(/^(mask-.*-(?:from|to))-/);
       if (prefixMatch) {
         prefix = prefixMatch[1];
       } else if (variant.includes('[')) {
         prefix = variant.substring(0, variant.indexOf('[') - 1);
       } else if (variant.includes('(')) {
         prefix = variant.substring(0, variant.indexOf('(') - 1);
       }
    }

    if (isMaskStop && prefix) {
       classes = classes.filter(c => !c.startsWith(prefix + '-'));
    }
    
    setPlaygroundClasses([...classes, variant].join(' '));
  };

  const handleCustomRemove = (variant: string) => {
    const classes = playgroundClasses.split(' ').filter(c => c.trim());
    setPlaygroundClasses(classes.filter(c => c !== variant).join(' '));
  };
  
  const LEFT_TABS = ['OPACITY', 'SHADOW', 'RING', 'TEXT SHADOW', 'MASK'];
  const RIGHT_TABS = ['FILTER', 'BACKDROP FILTER'];
  
  return (
    <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden relative transition-colors">
      {/* Dynamic Property Control Bar */}
      <div className="flex-shrink-0 bg-zinc-900 border-b border-zinc-800 flex flex-col z-10 shadow-sm transition-colors w-full sticky top-0 max-h-[50vh]">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none p-3 border-b border-zinc-800/50">
           {LEFT_TABS.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all border ${
                 activeTab === tab
                   ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 shadow-inner'
                   : 'bg-zinc-800/50 text-zinc-400 border-zinc-700/50 hover:bg-zinc-800 hover:text-zinc-300'
               }`}
             >
               {tab}
             </button>
           ))}
           <div className="w-px h-6 bg-zinc-700/50 mx-1"></div>
           {RIGHT_TABS.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all border ${
                 activeTab === tab
                   ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 shadow-inner'
                   : 'bg-zinc-800/50 text-zinc-400 border-zinc-700/50 hover:bg-zinc-800 hover:text-zinc-300'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>
        
        <div className="overflow-y-auto overflow-x-hidden p-3 min-h-[60px] scrollbar-thin">
           {activeTab === 'OPACITY' && <OpacityPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'SHADOW' && <ShadowPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'RING' && <RingPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'TEXT SHADOW' && <TextShadowPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'FILTER' && <FilterPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'BACKDROP FILTER' && <BackdropFilterPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
           {activeTab === 'MASK' && <MaskPanel activeClassesSet={activeClassesSet} onVariantClick={handleVariantClick} onCustomApply={handleCustomApply} onCustomRemove={handleCustomRemove} />}
        </div>
      </div>
      
      {/* Canvas Area (Similar to StylingPlayground) */}
      <div className="flex-1 overflow-auto p-4 md:p-8 flex flex-col relative bg-zinc-950">
        <div 
          className="flex-1 w-full max-w-[50%] mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-zinc-900"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        >
          {/* Mac window dots */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
            <IframePreview 
              classes={playgroundClasses} 
              dark={playgroundState.dark} 
              width={null}
              hover={playgroundState.hover}
              focus={playgroundState.focus}
              active={playgroundState.active}
              previewMode="effects"
            />
          </div>
        </div>

        {/* Utility Class String Bar */}
        <div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 shrink-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Utility Class String</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 hover:text-white transition-colors bg-zinc-800 px-2 py-1 rounded"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? 'COPIED!' : 'COPY'}
            </button>
          </div>
          <div className="relative">
            <textarea
              value={playgroundClasses}
              onChange={(e) => setPlaygroundClasses(e.target.value)}
              className="w-full bg-zinc-950 text-indigo-100 font-mono text-sm p-4 rounded-lg border border-indigo-500/30 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none min-h-[60px]"
              placeholder="Enter Tailwind classes here..."
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
