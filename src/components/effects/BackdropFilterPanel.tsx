import React, { useState } from 'react';
import { CustomValueInput } from '../CustomValueInput';

interface PanelProps {
  activeClassesSet: Set<string>;
  onVariantClick: (variant: string) => void;
  onCustomApply: (variant: string) => void;
  onCustomRemove: (variant: string) => void;
}

export function BackdropFilterPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const [activeSubTab, setActiveSubTab] = useState<'BLUR' | 'BRIGHTNESS' | 'OPACITY'>('BLUR');

  const blurSizes = ['backdrop-blur-none', 'backdrop-blur-xs', 'backdrop-blur-sm', 'backdrop-blur-md', 'backdrop-blur-lg', 'backdrop-blur-xl', 'backdrop-blur-2xl', 'backdrop-blur-3xl'];
  const brightnessSizes = ['backdrop-brightness-0', 'backdrop-brightness-50', 'backdrop-brightness-75', 'backdrop-brightness-90', 'backdrop-brightness-95', 'backdrop-brightness-100', 'backdrop-brightness-105', 'backdrop-brightness-110', 'backdrop-brightness-125', 'backdrop-brightness-150', 'backdrop-brightness-200'];
  const opacitySizes = ['backdrop-opacity-0', 'backdrop-opacity-5', 'backdrop-opacity-10', 'backdrop-opacity-25', 'backdrop-opacity-50', 'backdrop-opacity-75', 'backdrop-opacity-90', 'backdrop-opacity-95', 'backdrop-opacity-100'];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b border-zinc-800/30 pb-2">
        {['BLUR', 'BRIGHTNESS', 'OPACITY'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab as any)}
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
            <CustomValueInput property="backdrop-blur" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
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
            <CustomValueInput property="backdrop-brightness" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}

        {activeSubTab === 'OPACITY' && (
          <>
            {opacitySizes.map(cls => (
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
            <CustomValueInput property="backdrop-opacity" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
          </>
        )}
      </div>
    </div>
  );
}
