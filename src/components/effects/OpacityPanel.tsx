import React from 'react';
import { CustomValueInput } from '../CustomValueInput';

interface PanelProps {
  activeClassesSet: Set<string>;
  onVariantClick: (variant: string) => void;
  onCustomApply: (variant: string) => void;
  onCustomRemove: (variant: string) => void;
}

export function OpacityPanel({ activeClassesSet, onVariantClick, onCustomApply, onCustomRemove }: PanelProps) {
  const opacities = ['0', '5', '10', '25', '50', '75', '90', '95', '100'];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-1.5 mt-3">
        {opacities.map(val => {
          const cls = `opacity-${val}`;
          const isActive = activeClassesSet.has(cls);
          return (
            <button
              key={cls}
              onClick={() => onVariantClick(cls)}
              className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors ${
                isActive
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              {cls}
            </button>
          );
        })}
        <CustomValueInput
          property="opacity"
          activeClassesSet={activeClassesSet}
          onApply={onCustomApply}
          onRemove={onCustomRemove}
          placeholder="e.g. 0.3"
        />
      </div>
    </div>
  );
}
