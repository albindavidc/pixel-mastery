import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { CustomValueInput } from './CustomValueInput';
import { stylingWildcards, tailwindColors } from '../data/stylingControlBar';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyGroup: string;
  previewMode: string;
  groupProperties: any[]; 
  activeClassesSet: Set<string>;
  onApply: (className: string) => void;
  onRemove: (className: string) => void;
}

export function ReferenceModal({ isOpen, onClose, propertyGroup, previewMode, groupProperties, activeClassesSet, onApply, onRemove }: ReferenceModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const expandedProperties = useMemo(() => {
     let list: { class: string, css?: string }[] = [];
     groupProperties.forEach(p => {
        const propName = typeof p === 'string' ? p : p.prop;
        if (propName.endsWith('-*')) {
           const variants = stylingWildcards[propName] || [];
           if (variants.length > 0) {
              variants.forEach(v => list.push({ class: v }));
           } else {
              // If it's a color family, expand it here
              if (p.isColorFamily) {
                 const shades = Object.keys(tailwindColors[p.family as keyof typeof tailwindColors] || {});
                 shades.forEach(shade => {
                    const prefix = propName.slice(0, -1);
                    const cls = `${prefix}${shade}`;
                    const hex = (tailwindColors[p.family as keyof typeof tailwindColors] as any)[shade];
                    list.push({ class: cls, css: `color: ${hex};` });
                 });
              } else {
                 list.push({ class: propName });
              }
           }
        } else {
           list.push({ class: propName });
        }
     });
     return list;
  }, [groupProperties]);

  const filteredProperties = useMemo(() => {
    if (!searchTerm) return expandedProperties;
    const term = searchTerm.toLowerCase();
    return expandedProperties.filter(p => p.class.toLowerCase().includes(term) || (p.css && p.css.toLowerCase().includes(term)));
  }, [searchTerm, expandedProperties]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-800/80 rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl shadow-black/90 animate-in zoom-in-95 duration-200 overflow-hidden relative max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 bg-zinc-950 border-b border-zinc-800">
           <h3 className="text-sm font-bold text-zinc-100">{propertyGroup} Reference</h3>
           <button onClick={onClose} className="text-zinc-500 hover:text-zinc-300 transition-colors">
             <X className="w-5 h-5" />
           </button>
        </div>
        
        <div className="p-4 border-b border-zinc-800/50 bg-zinc-900/50">
           <div className="relative mb-3">
             <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
             <input
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
             />
           </div>
           
           <CustomValueInput
              propertyGroup={propertyGroup}
              previewMode={previewMode}
              activeClassesSet={activeClassesSet}
              onApply={(cls) => { onApply(cls); onClose(); }} 
              onRemove={onRemove}
           />
        </div>

        <div className="flex-1 overflow-y-auto p-0 scrollbar-thin">
           <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/80 sticky top-0 backdrop-blur-sm z-10 text-xs text-zinc-500 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 font-medium">Class</th>
                  <th className="px-4 py-3 font-medium">CSS Output</th>
                  <th className="px-4 py-3 font-medium w-24">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/30">
                {filteredProperties.map((p, idx) => {
                   return (
                     <tr key={p.class} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-zinc-800/10'}>
                       <td className="px-4 py-2.5">
                         <span className="font-mono text-xs text-indigo-300">{p.class}</span>
                       </td>
                       <td className="px-4 py-2.5">
                         <span className="font-mono text-[10px] text-zinc-500">{p.css || '/* value */'}</span>
                       </td>
                       <td className="px-4 py-2.5">
                         <button
                           onClick={() => { onApply(p.class); onClose(); }}
                           className="text-[10px] font-bold uppercase bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 px-2 py-1 rounded transition-colors"
                         >
                           Apply
                         </button>
                       </td>
                     </tr>
                   );
                })}
                {filteredProperties.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-4 py-8 text-center text-zinc-500">
                      No classes found.
                    </td>
                  </tr>
                )}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
