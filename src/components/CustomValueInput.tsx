import React, { useState } from 'react';
import { Settings2, X, Plus, HelpCircle } from 'lucide-react';

interface CustomValueInputProps {
  propertyGroup: string;
  previewMode: string;
  onApply: (className: string) => void;
  activeClassesSet: Set<string>;
  onRemove: (className: string) => void;
  onOpenReference?: () => void;
}

export function CustomValueInput({ propertyGroup, previewMode, onApply, activeClassesSet, onRemove, onOpenReference }: CustomValueInputProps) {
  const [value, setValue] = useState('');
  const [forceMode, setForceMode] = useState<'auto' | 'bracket' | 'paren'>('auto');
  const [isFocused, setIsFocused] = useState(false);

  // Determine prefix based on group and mode
  let prefix = '';
  let placeholder = '';
  
  if (propertyGroup === 'SIZE') {
    prefix = previewMode === 'text' ? 'text-' : 'bg-length-';
    placeholder = previewMode === 'text' ? 'e.g. 16px, 1.5rem' : 'e.g. 200px, 100% 50%';
  } else if (propertyGroup === 'POSITION') {
    prefix = 'bg-position-';
    placeholder = 'e.g. 25% 75%';
  } else if (propertyGroup === 'COLOR') {
    prefix = previewMode === 'text' ? 'text-' : 'bg-';
    placeholder = 'e.g. #ff0000, rgba(0,0,0,0.5)';
  } else if (propertyGroup === 'FILL') {
    prefix = 'fill-';
    placeholder = 'e.g. #ff0000, rgba(0,0,0,0.5)';
  } else if (propertyGroup === 'STROKE') {
    prefix = 'stroke-';
    placeholder = 'e.g. #ff0000, rgba(0,0,0,0.5)';
  } else if (propertyGroup === 'STROKE WIDTH') {
    prefix = 'stroke-';
    placeholder = 'e.g. 2px, 1.5';
  } else if (propertyGroup === 'IMAGE') {
    prefix = 'bg-';
    placeholder = 'e.g. url(...)';
  } else if (propertyGroup.includes('FROM') || propertyGroup.includes('VIA') || propertyGroup.includes('TO')) {
    prefix = propertyGroup.includes('FROM') ? 'from-' : propertyGroup.includes('VIA') ? 'via-' : 'to-';
    placeholder = 'e.g. #ff0000, 50%';
  } else {
    return null;
  }

  const handleApply = () => {
    let val = value.trim();
    if (!val) return;
    
    // strip existing brackets or parens if user typed them
    if ((val.startsWith('[') && val.endsWith(']')) || (val.startsWith('(') && val.endsWith(')'))) {
      val = val.slice(1, -1);
    }
    
    let isVar = val.startsWith('--');
    let useParen = forceMode === 'paren' || (forceMode === 'auto' && isVar);
    let activePrefix = prefix; 
    if (propertyGroup === "IMAGE" && (val.includes("deg") || val.includes("turn") || val.includes("rad") || val.includes("grad")) && !val.includes("(")) { activePrefix = "bg-linear-"; } 
    let finalClass = useParen ? `${activePrefix}(${val})` : `${activePrefix}[${val}]`;
    
    // special case for size
    if (propertyGroup === 'SIZE' && previewMode !== 'text') {
       finalClass = useParen ? `bg-[size:(${val})]` : `bg-[size:${val}]`;
    }
    
    onApply(finalClass);
    setValue('');
  };

  // Find active custom classes for this prefix to show as dismissible chips
  // We look for prefix-[...] or prefix-(...)
  const activeCustomClasses = Array.from(activeClassesSet).filter(c => {
    if (propertyGroup === 'SIZE' && previewMode !== 'text') {
       return c.startsWith('bg-[size:') || c.startsWith('bg-[length:');
    }
    return c.startsWith(prefix) && (c.includes('[') || c.includes('('));
  });

  return (
    <>
      {activeCustomClasses.map(c => (
        <button
          key={c}
          onClick={() => onRemove(c)}
          className="shrink-0 px-2 py-1 text-xs font-mono rounded-md transition-colors border bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 flex items-center gap-1"
        >
          {c}
          <X className="w-3 h-3" />
        </button>
      ))}
      <div 
        className={`flex items-center transition-all duration-300 bg-zinc-950 border rounded-md overflow-hidden shrink-0 ${
          isFocused ? 'w-[320px] border-indigo-500/50 ring-1 ring-indigo-500/50' : 'w-[220px] border-zinc-800 focus-within:border-indigo-500/50'
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={e => { if (e.key === 'Enter') handleApply(); }}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-2 py-1 text-xs text-zinc-300 font-mono focus:outline-none w-full"
        />
        <button
          onClick={() => { 
             setForceMode(prev => prev === 'auto' ? 'bracket' : prev === 'bracket' ? 'paren' : 'auto');
          }}
          title={`Mode: ${forceMode}`}
          className="shrink-0 p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors border-l border-zinc-800"
        >
           <Settings2 className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleApply}
          className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 flex items-center gap-1 h-full border-l border-zinc-800"
        >
          <Plus className="w-3 h-3" /> Apply
        </button>
      </div>
    </>
  );
}
