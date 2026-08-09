import React from 'react';
import { tailwindColors } from '../data/stylingControlBar';

interface ColorFamilyBadgeProps {
  key?: React.Key;
  family: string;
  isActive: boolean;
  isSelected: boolean;
  onClick: () => void;
  colorVal?: string; // For explicit colors like black/white
}

export function ColorFamilyBadge({ family, isActive, isSelected, onClick, colorVal }: ColorFamilyBadgeProps) {
  // If it's a family, get the 500 shade, else use colorVal
  const swatchColor = colorVal || (tailwindColors[family as keyof typeof tailwindColors] ? tailwindColors[family as keyof typeof tailwindColors][500] : 'transparent');

  return (
    <button
      onClick={onClick}
      className={`shrink-0 flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded-md transition-all border ${
        isSelected || isActive
          ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
          : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
      }`}
      title={family}
    >
      <div 
        className="w-3 h-3 rounded-full shadow-sm border border-black/20" 
        style={{ backgroundColor: swatchColor as string }}
      />
      {family}
    </button>
  );
}
