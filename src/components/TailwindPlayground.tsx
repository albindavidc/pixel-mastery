import { useAppStore } from '../store';
import { Copy, RotateCcw, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { IframePreview } from './IframePreview';
import { CustomValuesHelpModal } from './CustomValuesHelpModal';
import { Info } from 'lucide-react';
import { controlBarData, wildcards } from '../data/controlBar';

export function TailwindPlayground() {
  const {
  moduleClasses,
  setModuleClasses,
  playgroundState,
  setPlaygroundState,
  playgroundSize,
  setPlaygroundSize
} = useAppStore();

  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState('display');
  
  const previewModes = ['display', 'flex', 'grid'];
  
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showBasisModal, setShowBasisModal] = useState(false);



  const getStoreKey = (mode: string) => mode === 'display' ? 'tailwind-layout-display' : `tailwind-layout-display-${mode}`;

  // Fallbacks just in case store doesn't merge new keys immediately
  const getFallback = (mode: string) => mode === 'grid' 
    ? 'grid p-6 w-full bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl grid-cols-3 gap-4 place-content-center' 
    : mode === 'flex'
    ? 'flex p-6 w-full bg-indigo-500/20 border-4 border-indigo-500 rounded-2xl shadow-xl flex-row flex-wrap gap-4 items-center justify-center'
    : 'block p-6 w-full bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl';

  const playgroundClasses = moduleClasses[getStoreKey(previewMode)] || getFallback(previewMode);
  
  const setPlaygroundClasses = (newClasses: string) => {
    setModuleClasses(getStoreKey(previewMode), newClasses);
  };

  const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
  };



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
          newClasses.push('block'); // Default back to block
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
         
         // If switching to a non-flex/grid display class, remove flex/grid specific variants to avoid leftover styles
         if (prop === 'block' || prop === 'inline' || prop === 'inline-block' || prop === 'hidden') {
            const flexGridWildcards = ['justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*', 'grow', 'shrink', 'basis-*'];
            flexGridWildcards.forEach(wc => {
              if (wc.endsWith('-*')) {
                const prefix = wc.replace('*', '');
                newClasses = newClasses.filter(c => !c.startsWith(prefix));
              } else {
                newClasses = newClasses.filter(c => c !== wc);
              }
            });
         }
         
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
    
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    
    const customInfo = getCustomValueInfo(selectedProperty);
    if (customInfo) {
      const prefix = customInfo.prefix;
      newClasses = newClasses.filter(c => !(c.startsWith(prefix) || c.startsWith('-' + prefix)));
    } else {
      const variantsForProp = wildcards[selectedProperty] || [];
      newClasses = newClasses.filter(c => !variantsForProp.includes(c));
    }
    
    const wasActive = playgroundClasses.split(' ').includes(variant);
    if (!wasActive) {
      newClasses.push(variant);
    }
    
    setPlaygroundClasses(newClasses.join(' '));
  };
  
  const getCustomValueInfo = (prop: string | null) => {
    if (!prop) return null;
    if (prop.endsWith('-*')) return { prefix: prop.slice(0, -1), isCustom: true };
    const propToPrefix: Record<string, string> = {
      'flex-basis': 'basis-', 'flex': 'flex-', 'flex-grow': 'grow-', 'flex-shrink': 'shrink-', 'order': 'order-',
      'grid-template-columns': 'grid-cols-', 'grid-template-rows': 'grid-rows-', 'grid-auto-columns': 'auto-cols-', 'grid-auto-rows': 'auto-rows-',
      'grid-column': 'col-', 'grid-row': 'row-', 'gap': 'gap-'
    };
    if (propToPrefix[prop]) return { prefix: propToPrefix[prop], isCustom: true };
    return null;
  };

  const handleCustomArbitraryValue = (value: string) => {
    const customInfo = getCustomValueInfo(selectedProperty);
    if (!customInfo) return;
    if (!value) return;
    
    let formattedValue = value.trim();
    let prefix = customInfo.prefix;
    
    let isNegativeOrder = false;
    if (formattedValue.startsWith('-') && !formattedValue.startsWith('-' + prefix)) {
       isNegativeOrder = true;
       formattedValue = formattedValue.substring(1);
    }
  
    if (!formattedValue.startsWith(prefix)) {
      if (formattedValue.startsWith('[') || formattedValue.startsWith('(')) {
        formattedValue = isNegativeOrder ? `-${prefix}${formattedValue}` : `${prefix}${formattedValue}`;
      } else if (
        /^\d+\/\d+$/.test(formattedValue) || 
        /^\d+(\.\d+)?$/.test(formattedValue) || 
        ['auto', 'full', 'px', 'none', 'initial', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'].includes(formattedValue)
      ) {
        formattedValue = isNegativeOrder ? `-${prefix}${formattedValue}` : `${prefix}${formattedValue}`;
      } else {
        formattedValue = `${prefix}[${formattedValue.replace(/\s+/g, '_')}]`;
      }
    }
    
    const isTargetProp = (c: string) => {
      return c.startsWith(prefix) || c.startsWith('-' + prefix);
    };

    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    newClasses = newClasses.filter(c => !isTargetProp(c));
    newClasses.push(formattedValue);
    setPlaygroundClasses(newClasses.join(' '));
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;
    }
  };

  const activeClassesSet = new Set(playgroundClasses.split(' '));
  let activeControlData = controlBarData[previewMode as keyof typeof controlBarData] || controlBarData.layouts || [];
  
  if (previewMode === 'display') {
      const hasFlex = activeClassesSet.has('flex') || activeClassesSet.has('inline-flex');
      const hasGrid = activeClassesSet.has('grid') || activeClassesSet.has('inline-grid');
      activeControlData = activeControlData.filter(group => {
         if (group.group === 'Flex Layout') return hasFlex;
         if (group.group === 'Grid Layout') return hasGrid;
         return true;
      });
  }

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-zinc-950">
      {showBasisModal && <CustomValuesHelpModal isOpen={showBasisModal} onClose={() => setShowBasisModal(false)} property={selectedProperty} />}
      
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
                    const isSpecialWildcard = prop === 'box-border' || prop === 'box-content';
                    
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
                  onClick={() => {
                    const defaultClass = previewMode === 'grid' 
                      ? 'grid p-6 w-full bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl grid-cols-3 gap-4 place-content-center' 
                      : previewMode === 'flex'
                      ? 'flex p-6 w-full bg-indigo-500/20 border-4 border-indigo-500 rounded-2xl shadow-xl flex-row flex-wrap gap-4 items-center justify-center'
                      : 'block p-6 w-full bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl';
                    setPlaygroundClasses(defaultClass);
                    setSelectedProperty(null);
                  }}
                  className="w-7 h-7 shrink-0 flex items-center justify-center text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded transition-colors ml-2"
                  title="Reset classes"
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
              {selectedProperty && getCustomValueInfo(selectedProperty) && Array.from(activeClassesSet as Set<string>).filter((c: string) => {
                const prefix = getCustomValueInfo(selectedProperty)!.prefix;
                return (c.startsWith(prefix) || c.startsWith('-' + prefix)) && !wildcards[selectedProperty]?.includes(c);
              }).map(variant => (
                <button
                  key={variant}
                  onClick={() => handleVariantClick(variant)}
                  className="shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border bg-indigo-600 text-white border-indigo-500 shadow-sm flex items-center gap-1.5"
                >
                  {variant}
                  <X className="w-3 h-3 text-indigo-200" />
                </button>
              ))}
              {selectedProperty && getCustomValueInfo(selectedProperty) && (
                <div className="flex items-center gap-1.5 ml-2 border-l border-zinc-800/50 pl-2">
                  <input
                    type="text"
                    placeholder="e.g. 10px, [10px]"
                    className="w-32 px-2 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded-md text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleCustomArbitraryValue(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => setShowBasisModal(true)}
                    className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors border bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20 flex items-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Custom Values
                  </button>
                </div>
              )}
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
          className="flex-1 w-full max-w-2xl mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-[#0B1120]"
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
                  onClick={() => handleModeChange(mode)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${previewMode === mode ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  {mode}
                </button>
              ))}
              {['flex-basis', 'flex', 'flex-grow', 'flex-shrink', 'order', 'grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-column', 'grid-row', 'gap'].includes(selectedProperty) && (
                <button
                  onClick={() => setShowBasisModal(true)}
                  className="shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors border bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400/50 flex items-center gap-1.5 shadow-sm"
                >
                  <Info className="w-4 h-4" />
                  Custom Values Reference
                </button>
              )}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
            <IframePreview 
              classes={playgroundClasses} 
              dark={playgroundState.dark} 
              width={getWidthValue()}
              hover={playgroundState.hover}
              focus={playgroundState.focus}
              active={playgroundState.active}
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
                onClick={() => setPlaygroundState('active', !playgroundState.active)}
                className="flex items-center gap-2 group"
                title="Simulate :active"
              >
                <div className={`w-8 h-4 rounded-full relative border transition-colors ${playgroundState.active ? 'bg-indigo-600 border-indigo-400' : 'bg-zinc-800 border-zinc-700 group-hover:bg-zinc-700'}`}>
                  <div className={`absolute top-[3px] w-2 h-2 rounded-full transition-all ${playgroundState.active ? 'right-1 bg-white' : 'left-1 bg-zinc-500'}`}></div>
                </div>
                <span className={`text-[10px] font-bold uppercase transition-colors ${playgroundState.active ? 'text-white italic' : 'text-zinc-400'}`}>Active State</span>
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

