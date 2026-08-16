import React, { useState } from 'react';
import { CustomValueInput } from '../CustomValueInput';
import { ColorFamilyBadge } from '../ColorFamilyBadge';
import { tailwindColors } from '../../data/stylingControlBar';

interface PanelProps {
  activeClassesSet: Set<string>;
  onVariantClick: (variant: string) => void;
  onCustomApply: (variant: string) => void;
  onCustomRemove: (variant: string) => void;
}

export function FilterPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const [activeSubTab, setActiveSubTab] = useState<'BLUR' | 'BRIGHTNESS' | 'DROP_SHADOW' | 'DROP_SHADOW_COLOR'>('BLUR');
  const [selectedColorFamily, setSelectedColorFamily] = useState<string | null>(null);

  const blurSizes = ['blur-none', 'blur-xs', 'blur-sm', 'blur-md', 'blur-lg', 'blur-xl', 'blur-2xl', 'blur-3xl'];
  const brightnessSizes = ['brightness-0', 'brightness-50', 'brightness-75', 'brightness-90', 'brightness-95', 'brightness-100', 'brightness-105', 'brightness-110', 'brightness-125', 'brightness-150', 'brightness-200'];
  const dropShadowSizes = ['drop-shadow-none', 'drop-shadow-xs', 'drop-shadow-sm', 'drop-shadow-md', 'drop-shadow-lg', 'drop-shadow-xl', 'drop-shadow-2xl'];
  const baseColors = ['inherit', 'current', 'transparent', 'black', 'white'];
  
  const handleColorClick = (family: string) => {
    setSelectedColorFamily(selectedColorFamily === family ? null : family);
  };

  const renderColorRange = (prefix: string) => {
    if (!selectedColorFamily) return null;
    const colors = tailwindColors[selectedColorFamily as keyof typeof tailwindColors];
    if (!colors) return null;
    
    return (
      <div className="flex flex-wrap items-center gap-1.5 mt-2 p-2 bg-zinc-950/50 rounded-lg border border-zinc-800/50 w-full">
        <span className="text-[10px] font-bold text-zinc-500 uppercase mr-2">{selectedColorFamily}</span>
        {Object.keys(colors).sort((a,b) => parseInt(a)-parseInt(b)).map(shade => {
          const cls = `${prefix}-${selectedColorFamily}-${shade}`;
          const isActive = activeClassesSet.has(cls);
          return (
            <button
              key={shade}
              onClick={() => onVariantClick(cls)}
              className={`w-6 h-6 rounded border transition-all ${isActive ? 'ring-2 ring-white scale-110 z-10' : 'border-black/20 hover:scale-110'}`}
              style={{ backgroundColor: colors[shade] }}
              title={cls}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b border-zinc-800/30 pb-2">
        {['BLUR', 'BRIGHTNESS', 'DROP_SHADOW', 'DROP_SHADOW_COLOR'].map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveSubTab(tab as any); setSelectedColorFamily(null); }}
            className={`text-[9px] font-bold uppercase tracking-widest leading-tight py-0.5 px-1.5 rounded transition-colors text-left ${
              activeSubTab === tab ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
            }`}
          >
            {tab.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {activeSubTab === 'BLUR' && (
          <>
            {blurSizes.map(cls => (
              <button
                key={cls}
                onClick={() => onVariantClick(cls)}
                className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${
                  activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                {cls}
              </button>
            ))}
            <CustomValueInput property="blur" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
        
        {activeSubTab === 'BRIGHTNESS' && (
          <>
            {brightnessSizes.map(cls => (
              <button
                key={cls}
                onClick={() => onVariantClick(cls)}
                className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${
                  activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                {cls}
              </button>
            ))}
            <CustomValueInput property="brightness" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}

        {activeSubTab === 'DROP_SHADOW' && (
          <>
            {dropShadowSizes.map(cls => (
              <button
                key={cls}
                onClick={() => onVariantClick(cls)}
                className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${
                  activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                {cls}
              </button>
            ))}
            <CustomValueInput property="drop-shadow" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}

        {activeSubTab === 'DROP_SHADOW_COLOR' && (
          <>
            {baseColors.map(c => {
              const cls = `drop-shadow-${c}`;
              return (
                <button
                  key={c}
                  onClick={() => onVariantClick(cls)}
                  className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${
                    activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                  }`}
                >
                  {cls}
                </button>
              );
            })}
            <div className="w-full h-px bg-zinc-800/50 my-1"></div>
            {Object.keys(tailwindColors).map(family => (
              <ColorFamilyBadge 
                key={family} 
                family={family} isActive={false} 
                isSelected={selectedColorFamily === family} 
                onClick={() => handleColorClick(family)} 
              />
            ))}
            {renderColorRange('drop-shadow')}
            <div className="w-full h-px bg-zinc-800/50 my-1"></div>
            <CustomValueInput property="drop-shadow-color" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
      </div>
    </div>
  );
}
