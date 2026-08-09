import React, { useState, useEffect } from 'react';
import { X, Palette, Type } from 'lucide-react';
import { tailwindColors } from '../data/stylingControlBar';

interface CustomColorValuesModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: string | null;
  family: string | null;
  onSelect: (variant: string) => void;
}

export function CustomColorValuesModal({ isOpen, onClose, property, family, onSelect }: CustomColorValuesModalProps) {
  const [mode, setMode] = useState<'range' | 'custom'>('range');
  const [activeFamily, setActiveFamily] = useState<string>(family || 'blue');
  const [rangeStart, setRangeStart] = useState<string>('100');
  const [rangeEnd, setRangeEnd] = useState<string>('900');
  const [customValue, setCustomValue] = useState('');

  useEffect(() => {
    if (family) {
      setActiveFamily(family);
      setMode('range');
    }
  }, [family, isOpen]);

  if (!isOpen) return null;

    const handleApplyCustom = () => {
    if (!customValue.trim() || !property) return;
    let val = customValue.trim();
    if (!val.startsWith('[') && !val.startsWith('(')) {
      val = `[${val}]`;
    }
    let finalVal = val;
    let prefix = property;
    if (property.endsWith('-*')) {
      prefix = property.slice(0, -1);
      finalVal = `${prefix}${val}`;
    } else if (property.endsWith('-(<custom-property>)')) {
      prefix = property.replace('-(<custom-property>)', '');
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1);
      }
      finalVal = `${prefix}-(${val})`;
    } else if (property.endsWith('-[<value>]')) {
      prefix = property.replace('-[<value>]', '');
      finalVal = `${prefix}-${val}`;
    } else {
      finalVal = `${prefix}-${val}`;
    }
    onSelect(finalVal);
    onClose();
  };

  const currentFamilyColors = tailwindColors[activeFamily as keyof typeof tailwindColors] || {};
  const shades = Object.keys(currentFamilyColors).map(Number).sort((a, b) => a - b);
  
  const startIndex = shades.indexOf(Number(rangeStart));
  const endIndex = shades.indexOf(Number(rangeEnd));
  
  const minIdx = Math.min(startIndex, endIndex);
  const maxIdx = Math.max(startIndex, endIndex);
  
  const activeShades = shades.slice(minIdx !== -1 ? minIdx : 0, (maxIdx !== -1 ? maxIdx : shades.length - 1) + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-800/80 rounded-2xl w-full max-w-lg flex flex-col shadow-2xl shadow-black/90 animate-in zoom-in-95 duration-200 overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 p-2 bg-zinc-950 border-b border-zinc-800">
          <button 
            onClick={() => setMode('range')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'range' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
          >
            <Palette className="w-4 h-4" /> Pick from scale
          </button>
          <button 
            onClick={() => setMode('custom')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'custom' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
          >
            <Type className="w-4 h-4" /> Custom value
          </button>
          <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors ml-auto rounded-lg hover:bg-zinc-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {mode === 'range' ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-400 font-medium">Color Family</label>
                <select 
                  value={activeFamily}
                  onChange={e => setActiveFamily(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
                >
                  {Object.keys(tailwindColors).map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-zinc-400 font-medium">From Shade</label>
                  <select 
                    value={rangeStart}
                    onChange={e => setRangeStart(e.target.value)}
                    className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
                  >
                    {shades.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-zinc-400 font-medium">To Shade</label>
                  <select 
                    value={rangeEnd}
                    onChange={e => setRangeEnd(e.target.value)}
                    className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
                  >
                    {shades.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <label className="text-sm text-zinc-400 font-medium">Live Swatch Strip (Click to apply)</label>
                <div className="flex flex-wrap gap-2">
                  {activeShades.map(shade => {
                    const colorVal = currentFamilyColors[shade as keyof typeof currentFamilyColors];
                    
                    let className = '';
                    if (property?.endsWith('-*')) {
                        if (family) {
                            className = property.replace(`-${family}-*`, `-${activeFamily}-${shade}`);
                        } else {
                            className = property.replace('*', shade.toString());
                        }
                    } else if (property?.endsWith('-(<custom-property>)')) {
                        className = property.replace('-(<custom-property>)', `-${activeFamily}-${shade}`);
                    } else if (property?.endsWith('-[<value>]')) {
                        className = property.replace('-[<value>]', `-${activeFamily}-${shade}`);
                    } else {
                        // fallback if property doesn't have a family embedded, wait, wait
                        // if family is passed, activeFamily is used.
                        const prefix = property?.replace(/-$/, '');
                        className = `${prefix}-${activeFamily}-${shade}`;
                    }

                    return (
                      <button
                        key={shade}
                        onClick={() => {
                          onSelect(className);
                          onClose();
                        }}
                        className="group flex flex-col items-center gap-1 transition-transform hover:scale-110 focus:outline-none"
                        title={className}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg shadow-sm border border-zinc-900/10 shadow-black/20"
                          style={{ backgroundColor: colorVal as string }}
                        ></div>
                        <span className="text-[10px] text-zinc-500 font-mono group-hover:text-zinc-300">{shade}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <label className="text-sm text-zinc-400 font-medium">Arbitrary Value</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={customValue}
                  onChange={e => setCustomValue(e.target.value)}
                  placeholder="e.g. #1a1a2e, [--brand-color]"
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                  onKeyDown={e => {
                    if (e.key === 'Enter') handleApplyCustom();
                  }}
                />
                <button 
                  onClick={handleApplyCustom}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
