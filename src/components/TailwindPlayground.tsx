import { useAppStore } from '../store';
import { Copy, RotateCcw, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { IframePreview } from './IframePreview';
import { controlBarData, wildcards } from '../data/controlBar';

export function TailwindPlayground() {
  const { 
    playgroundClasses, 
    setPlaygroundClasses,
    playgroundState,
    setPlaygroundState,
    playgroundSize,
    setPlaygroundSize
  } = useAppStore();

  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState('flex');
  const previewModes = ['flex', 'grid'];
  
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  // Close Row 2 if we switch tabs
  useEffect(() => {
    setSelectedProperty(null);
  }, [previewMode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(playgroundClasses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWidthValue = () => {
    switch(playgroundSize) {
      case 'sm': return 640;
      case 'md': return 768;
      case 'lg': return 1024;
      case 'xl': return 1280;
      case '2xl': return 1536;
      default: return null;
    }
  };

  const handlePropertyClick = (prop: string) => {
    const isWildcard = prop.endsWith('-*') || (prop in wildcards && prop !== 'flex' && prop !== 'grid');
    const isSpecialWildcard = prop === 'flex' || prop === 'grid';
    const hasVariants = isWildcard || isSpecialWildcard;

    if (hasVariants) {
      if (selectedProperty === prop) {
        setSelectedProperty(null);
        if (isWildcard) {
          // Remove any active variant from the string for pure wildcards
          let newClasses = playgroundClasses.split(' ');
          const variants = wildcards[prop] || [];
          newClasses = newClasses.filter(c => !variants.includes(c));
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());
        } else {
          // For 'flex' and 'grid', clicking again removes it and its variants
          let newClasses = playgroundClasses.split(' ');
          const variants = wildcards[prop] || [];
          newClasses = newClasses.filter(c => c !== prop && !variants.includes(c));
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());
        }
      } else {
        setSelectedProperty(prop);
        if (isSpecialWildcard) {
          // It's 'flex' or 'grid'. Add it, and remove the other mutually exclusive display classes
          let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
          const displayClasses = ['block', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'flex', 'grid', 'hidden'];
          
          if (prop === 'flex') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'flex');
          } else if (prop === 'grid') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'grid');
          }
          if (!newClasses.includes(prop)) {
            newClasses.push(prop);
          }
          setPlaygroundClasses(newClasses.join(' '));
        }
      }
    } else {
      // Toggle individual property without variants
      let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
      
      const displayClasses = ['block', 'inline', 'inline-block', 'hidden', 'inline-flex', 'inline-grid'];
      if (displayClasses.includes(prop)) {
         newClasses = newClasses.filter(c => !displayClasses.includes(c) && c !== 'flex' && c !== 'grid');
         newClasses.push(prop);
         // if changing display mode, maybe close any selected 'flex' or 'grid' row 2?
         if (selectedProperty === 'flex' || selectedProperty === 'grid') {
            setSelectedProperty(null);
         }
      } else if (newClasses.includes(prop)) {
        newClasses = newClasses.filter(c => c !== prop);
      } else {
        newClasses.push(prop);
      }
      
      setPlaygroundClasses(newClasses.join(' '));
    }
  };

  const handleVariantClick = (variant: string) => {
    if (!selectedProperty) return;
    
    // Replace any existing variant from the same property
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    const variantsForProp = wildcards[selectedProperty] || [];
    
    newClasses = newClasses.filter(c => !variantsForProp.includes(c));
    
    // If not already active (toggle behavior on variants too if they match)
    const wasActive = playgroundClasses.split(' ').includes(variant);
    if (!wasActive) {
      newClasses.push(variant);
    }
    
    setPlaygroundClasses(newClasses.join(' '));
  };

  const activeControlData = controlBarData[previewMode as keyof typeof controlBarData] || [];
  
  // Get active classes for checking active state
  const activeClassesSet = new Set(playgroundClasses.split(' ').filter(c => c.trim() !== ''));

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden relative transition-colors">
      {/* Dynamic Property Control Bar */}
      <div className="flex-shrink-0 bg-zinc-900 border-b border-zinc-800 flex flex-col z-10 shadow-sm transition-colors w-full sticky top-0">
        <div className="flex flex-col border-b border-zinc-800/50">
          {activeControlData.map((group, gIdx) => (
            <div key={group.group} className={`flex items-start sm:items-center justify-between gap-4 p-3 ${gIdx !== activeControlData.length - 1 ? 'border-b border-zinc-800/50' : ''}`}>
              <div className="w-24 shrink-0 flex flex-col justify-center border-r border-zinc-800/50 pr-2 mr-1 mt-1 sm:mt-0 relative">
                {group.group.split(' ').map((word, i) => (
                  <span key={i} className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">{word}</span>
                ))}
                {(group.group.includes('Container')) && (
                  <div className="mt-1 flex items-center gap-1.5 opacity-80">
                    <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
                  </div>
                )}
                {(group.group.includes('Item') || group.group.includes('Items')) && (
                  <div className="mt-1 flex items-center gap-1.5 opacity-80">
                    <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none text-fuchsia-400">1</span>
                  </div>
                )}
              </div>
              <div 
                className="flex-1 flex flex-wrap items-center gap-1.5 px-1 pb-1 min-w-0" 
                onWheel={handleWheel}
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  {group.properties.map(prop => {
                    const isWildcard = prop.endsWith('-*') || (prop in wildcards && prop !== 'flex' && prop !== 'grid');
                    const isSpecialWildcard = prop === 'flex' || prop === 'grid';
                    
                    let isActive = false;
                    if (isWildcard) {
                      const variants = wildcards[prop] || [];
                      isActive = variants.some(v => activeClassesSet.has(v));
                    } else {
                      isActive = activeClassesSet.has(prop);
                      if (isSpecialWildcard && !isActive) {
                          const variants = wildcards[prop] || [];
                          isActive = variants.some(v => activeClassesSet.has(v));
                      }
                    }
                    
                    const isSelected = selectedProperty === prop;

                    return (
                      <button
                        key={prop}
                        onClick={() => handlePropertyClick(prop)}
                        className={`shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border ${
                          isSelected || isActive
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                            : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                        }`}
                      >
                        {prop}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {gIdx === 0 && (
                <button
                  onClick={() => setPlaygroundClasses('flex flex-col flex-wrap items-center gap-10 w-full h-full')}
                  className="w-7 h-7 shrink-0 flex items-center justify-center text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded transition-colors ml-2"
                  title="Clear classes"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Variants */}
        <div 
          className={`overflow-hidden transition-all duration-200 ease-out bg-zinc-900/50 ${selectedProperty ? 'max-h-96 opacity-100 border-b border-zinc-800/50' : 'max-h-0 opacity-0'}`}
        >
          <div 
            className="p-3 flex items-start sm:items-center justify-between gap-4 px-4 pb-2 min-w-0" 
            onWheel={handleWheel}
          >
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {selectedProperty && wildcards[selectedProperty]?.map(variant => (
                <button
                  key={variant}
                  onClick={() => handleVariantClick(variant)}
                  className={`shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border ${
                    activeClassesSet.has(variant)
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                      : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
            {selectedProperty && (
              <button
                onClick={() => setSelectedProperty(null)}
                className="w-7 h-7 shrink-0 flex items-center justify-center text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded transition-colors ml-2"
                title="Close variants"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto p-4 md:p-8 flex flex-col relative bg-zinc-950">
        <div 
          className="flex-1 w-full max-w-[50%] mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-[#0B1120]"
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

          <div className="absolute top-3 right-4 flex gap-4 items-center z-10">
            {/* Legend */}
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-[#0f172a]/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-300 shadow-lg pointer-events-none">
              <div className="flex items-center gap-2 text-sky-400">
                <span className="w-4 h-0 border-t-2 border-dotted border-sky-400"></span>
                <span>Container</span>
              </div>
              <div className="flex items-center gap-2 text-fuchsia-400">
                <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none">1</span>
                <span>Item (1-9)</span>
              </div>
            </div>
            {/* Preview Modes */}
            <div className="flex gap-1 bg-[#0f172a]/80 backdrop-blur rounded-lg p-1 border border-slate-700/50 shadow-lg">
              {previewModes.map(mode => (
                <button
                  key={mode}
                  onClick={() => setPreviewMode(mode)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${previewMode === mode ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
            <IframePreview 
              classes={playgroundClasses} 
              dark={playgroundState.dark} 
              width={getWidthValue()}
              hover={playgroundState.hover}
              focus={playgroundState.focus}
              previewMode={previewMode}
            />
          </div>

          {/* Breakpoint Indicator */}
          {playgroundSize !== '100%' && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded shadow-lg pointer-events-none">
              {playgroundSize} breakpoint
            </div>
          )}
        </div>

        {/* Code Editor Area */}
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
              className="w-full bg-zinc-950 text-indigo-100 font-mono text-sm p-4 rounded-lg border border-indigo-500/30 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none min-h-[100px]"
              placeholder="Enter Tailwind classes here..."
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 p-2 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
            <div className="flex gap-1 items-center">
              <span className="text-[10px] text-zinc-500 uppercase font-bold mr-2 hidden sm:inline">Breakpoints:</span>
              {(['100%', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setPlaygroundSize(size)}
                  className={`w-9 h-7 rounded text-[10px] font-bold border transition-colors ${
                    playgroundSize === size 
                      ? 'bg-indigo-600 text-white border-indigo-400' 
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {size === '100%' ? 'ALL' : size.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPlaygroundState('hover', !playgroundState.hover)}
                className="flex items-center gap-2 group"
                title="Simulate :hover"
              >
                <div className={`w-8 h-4 rounded-full relative border transition-colors ${playgroundState.hover ? 'bg-indigo-600 border-indigo-400' : 'bg-zinc-800 border-zinc-700 group-hover:bg-zinc-700'}`}>
                  <div className={`absolute top-[3px] w-2 h-2 rounded-full transition-all ${playgroundState.hover ? 'right-1 bg-white' : 'left-1 bg-zinc-500'}`}></div>
                </div>
                <span className={`text-[10px] font-bold uppercase transition-colors ${playgroundState.hover ? 'text-white italic' : 'text-zinc-400'}`}>Hover State</span>
              </button>
              <button
                onClick={() => setPlaygroundState('focus', !playgroundState.focus)}
                className="flex items-center gap-2 group"
                title="Simulate :focus"
              >
                <div className={`w-8 h-4 rounded-full relative border transition-colors ${playgroundState.focus ? 'bg-indigo-600 border-indigo-400' : 'bg-zinc-800 border-zinc-700 group-hover:bg-zinc-700'}`}>
                  <div className={`absolute top-[3px] w-2 h-2 rounded-full transition-all ${playgroundState.focus ? 'right-1 bg-white' : 'left-1 bg-zinc-500'}`}></div>
                </div>
                <span className={`text-[10px] font-bold uppercase transition-colors ${playgroundState.focus ? 'text-white italic' : 'text-zinc-400'}`}>Focus State</span>
              </button>
              <button
                onClick={() => setPlaygroundState('dark', !playgroundState.dark)}
                className="flex items-center gap-2 group"
                title="Toggle Dark Mode"
              >
                <div className={`w-8 h-4 rounded-full relative border transition-colors ${playgroundState.dark ? 'bg-indigo-600 border-indigo-400' : 'bg-zinc-800 border-zinc-700 group-hover:bg-zinc-700'}`}>
                  <div className={`absolute top-[3px] w-2 h-2 rounded-full transition-all ${playgroundState.dark ? 'right-1 bg-white' : 'left-1 bg-zinc-500'}`}></div>
                </div>
                <span className={`text-[10px] font-bold uppercase transition-colors ${playgroundState.dark ? 'text-white italic' : 'text-zinc-400'}`}>Dark Mode</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

