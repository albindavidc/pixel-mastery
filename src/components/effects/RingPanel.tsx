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

export function RingPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const [activeSubTab, setActiveSubTab] = useState<'RING' | 'COLOR' | 'INSET_RING' | 'INSET_COLOR'>('RING');
  const [selectedColorFamily, setSelectedColorFamily] = useState<string | null>(null);

  const ringSizes = ['ring', 'ring-1', 'ring-2', 'ring-4', 'ring-8'];
  const insetRingSizes = ['inset-ring', 'inset-ring-1', 'inset-ring-2', 'inset-ring-4', 'inset-ring-8'];
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
        {['RING', 'COLOR', 'INSET_RING', 'INSET_COLOR'].map(tab => (
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
        {activeSubTab === 'RING' && (
          <>
            {ringSizes.map(cls => (
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
            <CustomValueInput property="ring" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
        
        {activeSubTab === 'INSET_RING' && (
          <>
            {insetRingSizes.map(cls => (
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
            <CustomValueInput property="inset-ring" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}

        {(activeSubTab === 'COLOR' || activeSubTab === 'INSET_COLOR') && (
          <>
            {baseColors.map(c => {
              const cls = activeSubTab === 'COLOR' ? `ring-${c}` : `inset-ring-${c}`;
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
            {renderColorRange(activeSubTab === 'COLOR' ? 'ring' : 'inset-ring')}
            <div className="w-full h-px bg-zinc-800/50 my-1"></div>
            {activeSubTab === 'COLOR' && <CustomValueInput property="ring" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />}
          </>
        )}
      </div>
    </div>
  );
}
