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

export function ShadowPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const [activeSubTab, setActiveSubTab] = useState<'SHADOW' | 'COLOR' | 'INSET_SHADOW' | 'INSET_COLOR'>('SHADOW');
  const [selectedColorFamily, setSelectedColorFamily] = useState<string | null>(null);

  const shadowSizes = ['shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-none'];
  const insetShadowSizes = ['inset-shadow-2xs', 'inset-shadow-xs', 'inset-shadow-sm', 'inset-shadow-none'];
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
        {['SHADOW', 'COLOR', 'INSET_SHADOW', 'INSET_COLOR'].map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveSubTab(tab as any); setSelectedColorFamily(null); }}
            className={`text-[9px] font-bold uppercase tracking-widest leading-tight py-0.5 px-1.5 rounded transition-colors text-left ${
              activeSubTab === tab ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {activeSubTab === 'SHADOW' && (
          <>
            {shadowSizes.map(cls => (
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
            <CustomValueInput property="shadow" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
        
        {activeSubTab === 'INSET_SHADOW' && (
          <>
            {insetShadowSizes.map(cls => (
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
            <CustomValueInput property="inset-shadow" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}

        {(activeSubTab === 'COLOR' || activeSubTab === 'INSET_COLOR') && (
          <>
            {baseColors.map(c => {
              const cls = activeSubTab === 'COLOR' ? `shadow-${c}` : `inset-shadow-${c}`;
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
            {renderColorRange(activeSubTab === 'COLOR' ? 'shadow' : 'inset-shadow')}
            <div className="w-full h-px bg-zinc-800/50 my-1"></div>
            <CustomValueInput property={activeSubTab === 'COLOR' ? 'shadow-color' : 'inset-shadow-color'} activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
      </div>
    </div>
  );
}
