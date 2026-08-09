import React, { useState, useEffect } from 'react';
import { ColorFamilyBadge } from './ColorFamilyBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleColorFamiliesProps {
  colorFamilies: any[];
  activeClassesSet: Set<string>;
  selectedProperty: string | null;
  onPropertyClick: (prop: string) => void;
  stylingWildcards: Record<string, string[]>;
}

export function CollapsibleColorFamilies({
  colorFamilies,
  activeClassesSet,
  selectedProperty,
  onPropertyClick,
  stylingWildcards
}: CollapsibleColorFamiliesProps) {
  // Start collapsed by default
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand if a color family is selected or active
  useEffect(() => {
    const hasActiveOrSelected = colorFamilies.some((propObj: any) => {
      const prop = typeof propObj === 'string' ? propObj : propObj.prop;
      const isSelected = selectedProperty === prop;
      
      const isWildcard = prop.endsWith('-*') || (prop in stylingWildcards && prop !== 'flex' && prop !== 'grid');
      let isActive = false;
      if (isWildcard) {
        const variants = stylingWildcards[prop] || [];
        isActive = variants.some(v => activeClassesSet.has(v));
      } else {
        isActive = activeClassesSet.has(prop);
      }
      
      return isSelected || isActive;
    });

    if (hasActiveOrSelected) {
      setIsExpanded(true);
    }
  }, [colorFamilies, selectedProperty, activeClassesSet, stylingWildcards]);

  if (colorFamilies.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-2 mt-2">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors py-1 w-max"
      >
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        Color Scales (Red to Taupe)
      </button>
      
      <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-wrap items-center gap-1.5">
          {colorFamilies.map((propObj: any) => {
            const prop = typeof propObj === 'string' ? propObj : propObj.prop;
            const label = typeof propObj === 'string' ? propObj : propObj.label;
            const isWildcard = prop.endsWith('-*') || (prop in stylingWildcards && prop !== 'flex' && prop !== 'grid');
            
            let isActive = false;
            if (isWildcard) {
              const variants = stylingWildcards[prop] || [];
              isActive = variants.some(v => activeClassesSet.has(v));
            } else {
              isActive = activeClassesSet.has(prop);
            }
            
            const isSelected = selectedProperty === prop;

            return (
              <ColorFamilyBadge
                key={prop}
                family={label}
                isActive={isActive}
                isSelected={isSelected}
                onClick={() => onPropertyClick(prop)}
                colorVal={propObj.colorVal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
