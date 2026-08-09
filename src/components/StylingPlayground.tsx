import { useAppStore } from '../store';
import { Copy, RotateCcw, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { IframePreview } from './IframePreview';
import { CustomValuesHelpModal } from './CustomValuesHelpModal';
import { Info, HelpCircle } from 'lucide-react';
import { stylingControlBarData, stylingWildcards, tailwindColors } from '../data/stylingControlBar';
import { CustomColorValuesModal } from './CustomColorValuesModal';
import { ControlBarAccordion } from './ControlBarAccordion';
import { ReferenceModal } from './ReferenceModal';

export function StylingPlayground() {
  const { 
    playgroundClasses, 
    setPlaygroundClasses,
    playgroundState,
    setPlaygroundState,
    playgroundSize,
    setPlaygroundSize,
    currentModuleId
  } = useAppStore();

  const [copied, setCopied] = useState(false);
  
  // Determine modes based on current module
  const moduleMode = currentModuleId === 'tailwind-styling-text' ? 'text' : currentModuleId === 'tailwind-styling-svg' ? 'svg' : 'background';
                   
  const [previewMode, setPreviewMode] = useState(moduleMode);
  const [activeTab, setActiveTab] = useState<string>('COLOR');
  const [showReference, setShowReference] = useState(false);

  
  
  // Keep preview mode in sync if module changes
  useEffect(() => {
    setPreviewMode(moduleMode);
  }, [moduleMode]);
  const previewModes = [moduleMode];
  
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showBasisModal, setShowBasisModal] = useState(false);

  const [showColorModal, setShowColorModal] = useState(false);
  const [colorFamily, setColorFamily] = useState<string | null>(null);
  const [colorProperty, setColorProperty] = useState<string | null>(null);
  const [activeGradientTab, setActiveGradientTab] = useState<'FROM' | 'VIA' | 'TO'>('FROM');


const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
  };

  // Close Row 2 if we switch tabs
  useEffect(() => {
    setSelectedProperty(null);
    if (previewMode === 'svg') {
      setActiveTab('FILL');
    } else if (previewMode === 'text') {
      setActiveTab('COLOR');
    } else {
      setActiveTab('COLOR');
    }
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
    const isWildcard = prop.endsWith('-*') || (prop in stylingWildcards && prop !== 'flex' && prop !== 'grid');
    const isSpecialWildcard = prop === 'box-border' || prop === 'box-content';
    const hasVariants = isWildcard || isSpecialWildcard;

    if (hasVariants) {
      if (selectedProperty === prop) {
        setSelectedProperty(null);
        if (isWildcard) {
          // Remove any active variant from the string for pure wildcards
          let newClasses = playgroundClasses.split(' ');
          
          if (prop.endsWith('-*')) {
             const prefix = prop.slice(0, -1);
             newClasses = newClasses.filter(c => !(c.startsWith(prefix) || c.startsWith('-' + prefix)));
          } else {
             const variants = stylingWildcards[prop] || [];
             newClasses = newClasses.filter(c => !variants.includes(c));
          }
          
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());
        } else {
          // For 'flex' and 'grid', clicking again removes it and its variants
          let newClasses = playgroundClasses.split(' ');
          const variants = stylingWildcards[prop] || [];
          newClasses = newClasses.filter(c => c !== prop && !variants.includes(c));
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());
        }
      } else {
        setSelectedProperty(prop);
        if (isSpecialWildcard) {
          // It's 'flex' or 'grid'. Add it, and remove the other mutually exclusive display classes
          let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
          const displayClasses = ['box-border', 'box-content'];
          
          if (prop === 'box-border') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'box-border');
          } else if (prop === 'box-content') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'box-content');
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
      
      const displayClasses = ['block', 'inline', 'inline-block', 'hidden', 'inline-flex', 'inline-grid', 'flex', 'grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell'];
      const positionClasses = ['static', 'fixed', 'absolute', 'relative', 'sticky'];
      const visibilityClasses = ['visible', 'invisible', 'collapse'];
      const zIndexClasses = ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'];
      const srClasses = ['sr-only', 'not-sr-only'];
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
        // Remove other mutually exclusive properties in the same group
        const activeGroup = activeControlData.find((g: any) => g.properties.some((p: any) => (typeof p === 'string' ? p : p.prop) === prop));
        if (activeGroup) {
          const allVariantsInGroup = new Set<string>();
          const allPrefixesInGroup = new Set<string>();
          activeGroup.properties.forEach((p: any) => {
            const pName = typeof p === 'string' ? p : p.prop;
            if (pName.endsWith('-*')) {
              allPrefixesInGroup.add(pName.slice(0, -1));
            } else if (pName.endsWith('-(<custom-property>)')) {
              allPrefixesInGroup.add(pName.replace('-(<custom-property>)', '-'));
            } else if (pName.endsWith('-[<value>]')) {
              allPrefixesInGroup.add(pName.replace('-[<value>]', '-'));
            } else if (stylingWildcards[pName]) {
              stylingWildcards[pName].forEach(v => allVariantsInGroup.add(v));
            } else {
              allVariantsInGroup.add(pName);
            }
          });
          
          newClasses = newClasses.filter(c => {
            if (allVariantsInGroup.has(c)) return false;
            for (const prefix of allPrefixesInGroup) {
              if (c.startsWith(prefix) || c.startsWith('-' + prefix)) return false;
            }
            return true;
          });
        }
        newClasses.push(prop);
      }
      
      // Special case: if prop is bg-auto, bg-cover, or bg-contain, strip custom size classes
      if (['bg-auto', 'bg-cover', 'bg-contain'].includes(prop)) {
         newClasses = newClasses.filter(c => !c.startsWith('bg-[size:') && !c.startsWith('bg-[length:'));
      }
      // Special case: if prop is a bg-position value, strip others in the group
      if (prop.startsWith('bg-') && ['bottom', 'center', 'left', 'right', 'top', 'bottom-left', 'bottom-right', 'top-left', 'top-right'].includes(prop.replace('bg-', ''))) {
          const positions = ['bg-bottom', 'bg-center', 'bg-left', 'bg-right', 'bg-top', 'bg-bottom-left', 'bg-bottom-right', 'bg-top-left', 'bg-top-right'];
          newClasses = newClasses.filter(c => c === prop || !positions.includes(c));
          newClasses = newClasses.filter(c => !c.startsWith('bg-position-'));
      }
      
      setPlaygroundClasses(newClasses.join(' '));
    }
  };


  const handleVariantClick = (variant: string, isColorFamily?: boolean, family?: string) => {
    if (!selectedProperty) return;
    if (isColorFamily) {
      setColorFamily(family || null);
      setColorProperty(selectedProperty);
      setShowColorModal(true);
      return;
    }
    
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');

    const activeGroup = activeControlData.find((g: any) => g.properties.some((p: any) => (typeof p === 'string' ? p : p.prop) === selectedProperty));
    
    if (activeGroup) {
      const allVariantsInGroup = new Set<string>();
      const allPrefixesInGroup = new Set<string>();
      activeGroup.properties.forEach((p: any) => {
        const prop = typeof p === 'string' ? p : p.prop;
        if (prop.endsWith('-*')) {
          allPrefixesInGroup.add(prop.slice(0, -1));
        } else if (prop.endsWith('-(<custom-property>)')) {
          allPrefixesInGroup.add(prop.replace('-(<custom-property>)', '-'));
        } else if (prop.endsWith('-[<value>]')) {
          allPrefixesInGroup.add(prop.replace('-[<value>]', '-'));
        } else if (stylingWildcards[prop]) {
          stylingWildcards[prop].forEach(v => allVariantsInGroup.add(v));
        } else {
          allVariantsInGroup.add(prop);
        }
      });
      
      newClasses = newClasses.filter(c => {
        if (allVariantsInGroup.has(c)) return false;
        for (const prefix of allPrefixesInGroup) {
          if (c.startsWith(prefix) || c.startsWith('-' + prefix)) return false;
        }
        return true;
      });
    } else {
      if (selectedProperty.endsWith('-*')) {
        const prefix = selectedProperty.slice(0, -1);
        newClasses = newClasses.filter(c => !(c.startsWith(prefix) || c.startsWith('-' + prefix)));
      } else {
        const variantsForProp = stylingWildcards[selectedProperty] || [];
        newClasses = newClasses.filter(c => !variantsForProp.includes(c));
      }
    }
    
    const wasActive = playgroundClasses.split(' ').includes(variant);
    if (!wasActive) {
      newClasses.push(variant);
    }
    
    setPlaygroundClasses(newClasses.join(' '));
  };
  
  const handleCustomArbitraryValue = (value: string, overrideProp?: string) => {
    if (!selectedProperty || !selectedProperty.endsWith('-*')) return;
    if (!value) return;
    
    let formattedValue = value.trim();
    let prefix = selectedProperty.slice(0, -1);
    
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

  
  const hasGradient = playgroundClasses.includes('bg-linear') || playgroundClasses.includes('bg-radial') || playgroundClasses.includes('bg-conic');
  const activeControlData = (stylingControlBarData[previewMode as keyof typeof stylingControlBarData] || []).filter((g: any) => {
    if (g.isGradientStop) {
      return hasGradient && g.group.startsWith(activeGradientTab);
    }
    return true;
  });

  
  // Get active classes for checking active state
  const activeClassesSet = new Set<string>(playgroundClasses.split(' ').filter(c => c.trim() !== ''));

  const handleCustomApply = (cls: string) => {
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    
    // Special handling for bg-[size:*]
    if (cls.startsWith('bg-[size:') || cls.startsWith('bg-[length:')) {
      newClasses = newClasses.filter(c => !c.startsWith('bg-[size:') && !c.startsWith('bg-[length:') && c !== 'bg-auto' && c !== 'bg-cover' && c !== 'bg-contain');
    } else {
      let prefix = cls.split('-[').shift();
      if (!prefix) prefix = cls.split('-(').shift();
      
      // Do not aggressively strip all 'bg-[' if the prefix is just 'bg', because that overrides images, colors, etc.
      // E.g. bg-[#fff], bg-[url(...)]
      if (prefix && prefix !== 'bg') {
        newClasses = newClasses.filter(c => !c.startsWith(prefix + '-[') && !c.startsWith(prefix + '-('));
      } else if (prefix === 'bg') {
        // if cls is bg-[url...], strip other bg-[url...]
        if (cls.startsWith('bg-[url')) {
          newClasses = newClasses.filter(c => !c.startsWith('bg-[url'));
        }
        // if cls is color bg-[#...], strip other bg color customs?
        // Let Tailwind handle it for now.
      }
    }
    newClasses.push(cls);
    setPlaygroundClasses(newClasses.join(' '));
  };
  
  const handleCustomRemove = (cls: string) => {
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '' && c !== cls);
    setPlaygroundClasses(newClasses.join(' '));
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden relative transition-colors">
      <CustomValuesHelpModal isOpen={showBasisModal} onClose={() => setShowBasisModal(false)} property={selectedProperty} />
      <CustomColorValuesModal isOpen={showColorModal} onClose={() => setShowColorModal(false)} property={colorProperty} family={colorFamily} onSelect={handleVariantClick} />
      {/* Dynamic Property Control Bar */}
      <div className="flex-shrink-0 bg-zinc-900 border-b border-zinc-800 flex flex-col z-10 shadow-sm transition-colors w-full sticky top-0 max-h-[50vh] flex-col">
        <div className="flex items-center justify-between p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {activeControlData
              .filter((group: any, index: number, self: any[]) => 
                 !group.isGradientStop || self.findIndex((g: any) => g.isGradientStop) === index
              )
              .map((group: any) => {
              let label = group.group;
              if (group.isGradientStop) {
                 label = 'GRADIENT';
              }
              return (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                    activeTab === label
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                      : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-thin p-1">
          {activeControlData.filter((g: any) => activeTab === (g.isGradientStop ? 'GRADIENT' : g.group)).map((group: any) => (
             <ControlBarAccordion
                key={group.group}
                group={group}
                isExpanded={true}
                onToggle={() => {}}
                activeClassesSet={activeClassesSet}
                previewMode={previewMode}
                selectedProperty={selectedProperty}
                onPropertyClick={(prop) => {
                  const activeGroup = activeControlData.find(g => g.properties.some(p => (typeof p === 'string' ? p : p.prop) === prop));
                  const propObj = activeGroup?.properties.find(p => (typeof p === 'string' ? p : p.prop) === prop);
                  
                  if (propObj && (propObj as any).isColorFamily) {
                     handlePropertyClick(prop); // Sets selected property
                     // Do not open modal, let ControlBarAccordion show inline swatches
                     return;
                  }
                  
                  if (prop.endsWith('_CUSTOM')) {
                     setColorProperty(prop.replace('_CUSTOM', ''));
                     setColorFamily(null);
                     setShowColorModal(true);
                  } else {
                     handlePropertyClick(prop);
                  }
                }}
                onVariantClick={handleVariantClick}
                onCustomApply={handleCustomApply}
                onCustomRemove={handleCustomRemove}
                activeGradientTab={activeGradientTab}
                setActiveGradientTab={setActiveGradientTab}
                onOpenReference={() => setShowReference(true)}
                onCloseVariantsRow={() => setSelectedProperty(null)}
             />
          ))}
        </div>
      </div>

      
      {showReference && (() => {
         const activeGroup = activeControlData.find((g: any) => activeTab === (g.isGradientStop ? 'GRADIENT' : g.group));
         if (!activeGroup) return null;
         
         // If it's gradient, we might want to show properties for the currently active FROM/VIA/TO sub-tab
         // But activeGroup will just be the first one (FROM). To get all, we can aggregate.
         const groupProperties = activeTab === 'GRADIENT' 
           ? activeControlData.filter((g: any) => g.isGradientStop).flatMap((g: any) => g.properties)
           : activeGroup.properties;

         return (
           <ReferenceModal
             isOpen={showReference}
             onClose={() => setShowReference(false)}
             propertyGroup={activeTab}
             previewMode={previewMode}
             groupProperties={groupProperties}
             activeClassesSet={activeClassesSet}
             onApply={handleCustomApply}
             onRemove={handleCustomRemove}
           />
         );
      })()}
      {/* Canvas Area */}
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
              key={previewMode}
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
              className="w-full bg-zinc-950 text-indigo-100 font-mono text-sm p-4 rounded-lg border border-indigo-500/30 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none min-h-[180px] overflow-y-scroll editor-scrollbar"
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

