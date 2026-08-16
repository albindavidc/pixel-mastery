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

export function MaskPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const [activeSubTab, setActiveSubTab] = useState<'IMAGE' | 'COMPOSITE'>('IMAGE');
  const [imageTab, setImageTab] = useState<'BASE' | 'LINEAR' | 'DIRECTIONAL' | 'RADIAL' | 'CONIC'>('BASE');

  const renderStopSubRow = (prefix: string) => {
    return (
      <div className="flex-1 flex flex-col gap-2 mt-2 pl-2 border-l border-zinc-800/50">
        <span className="text-[10px] font-bold text-zinc-500 uppercase">{prefix.split('-').pop()} stop</span>
        <div className="flex flex-wrap items-center gap-1.5">
          {['0%', '25%', '50%', '75%', '100%'].map(val => {
            const cls = `${prefix}-${val}`;
            return (
              <button key={cls} onClick={() => onVariantClick(cls)} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>
                {val}
              </button>
            )
          })}
          <CustomValueInput property={prefix} activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b border-zinc-800/30 pb-2">
        {['IMAGE', 'COMPOSITE'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab as any)}
            className={`text-[9px] font-bold uppercase tracking-widest leading-tight py-0.5 px-1.5 rounded transition-colors text-left ${
              activeSubTab === tab ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-1.5">
        {activeSubTab === 'COMPOSITE' && (
          <>
            {['mask-add', 'mask-subtract', 'mask-intersect', 'mask-exclude'].map(cls => (
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
          </>
        )}

        {activeSubTab === 'IMAGE' && (
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2 border-b border-zinc-800/30 pb-2">
              {['BASE', 'LINEAR', 'DIRECTIONAL', 'RADIAL', 'CONIC'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setImageTab(tab as any)}
                  className={`text-[9px] font-bold uppercase tracking-widest leading-tight py-0.5 px-1.5 rounded transition-colors text-left ${
                    imageTab === tab ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {imageTab === 'BASE' && (
              <div className="flex flex-wrap items-center gap-1.5">
                <button onClick={() => onVariantClick('mask-none')} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has('mask-none') ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>mask-none</button>
                <CustomValueInput property="mask" activeClassesSet={activeClassesSet} onApply={onCustomApply} onRemove={onCustomRemove} />
              </div>
            )}

            {imageTab === 'LINEAR' && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {['45', '90', '135', '180'].map(deg => {
                    const cls = `mask-linear-${deg}`;
                    return <button key={cls} onClick={() => onVariantClick(cls)} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>{cls}</button>
                  })}
                </div>
                <div className="flex flex-row items-stretch gap-4 w-full">
                   {renderStopSubRow('mask-linear-from')}
                   <div className="w-px bg-zinc-700/50 self-stretch my-2 mt-4"></div>
                   {renderStopSubRow('mask-linear-to')}
                 </div>
              </div>
            )}

            {imageTab === 'DIRECTIONAL' && (
              <div className="flex flex-col gap-2">
                 <div className="flex flex-wrap items-center gap-1.5">
                   {['mask-t', 'mask-r', 'mask-b', 'mask-l', 'mask-x', 'mask-y'].map(cls => (
                     <button key={cls} onClick={() => onVariantClick(cls)} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>{cls}</button>
                   ))}
                 </div>
                 <span className="text-[10px] text-zinc-500 block">Note: x/y shorthands automatically apply mask-composite: intersect.</span>
                 <div className="flex flex-row items-stretch gap-4 w-full">
                   {renderStopSubRow('mask-t-from')}
                   <div className="w-px bg-zinc-700/50 self-stretch my-2 mt-4"></div>
                   {renderStopSubRow('mask-t-to')}
                 </div>
              </div>
            )}
            
            {imageTab === 'RADIAL' && (
              <div className="flex flex-col gap-2">
                 <div className="flex flex-wrap items-center gap-1.5">
                   {['mask-radial-circle', 'mask-radial-ellipse'].map(cls => (
                     <button key={cls} onClick={() => onVariantClick(cls)} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>{cls}</button>
                   ))}
                 </div>
                 <div className="flex flex-row items-stretch gap-4 w-full">
                   {renderStopSubRow('mask-radial-from')}
                   <div className="w-px bg-zinc-700/50 self-stretch my-2 mt-4"></div>
                   {renderStopSubRow('mask-radial-to')}
                 </div>
              </div>
            )}
            
            {imageTab === 'CONIC' && (
              <div className="flex flex-col gap-2">
                 <div className="flex flex-wrap items-center gap-1.5">
                   {['0', '45', '90', '180'].map(deg => {
                     const cls = `mask-conic-${deg}`;
                     return <button key={cls} onClick={() => onVariantClick(cls)} className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${activeClassesSet.has(cls) ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800'}`}>{cls}</button>
                   })}
                 </div>
                 <div className="flex flex-row items-stretch gap-4 w-full">
                   {renderStopSubRow('mask-conic-from')}
                   <div className="w-px bg-zinc-700/50 self-stretch my-2 mt-4"></div>
                   {renderStopSubRow('mask-conic-to')}
                 </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
