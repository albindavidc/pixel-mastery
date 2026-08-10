import React, { useState } from 'react';
import { ChevronRight, Settings2, HelpCircle, X } from 'lucide-react';
import { CustomValueInput } from './CustomValueInput';
import { ColorFamilyBadge } from './ColorFamilyBadge';
import { ReferenceModal } from './ReferenceModal';
import { stylingWildcards, tailwindColors, stylingControlBarData } from '../data/stylingControlBar';

interface ControlBarAccordionProps {
  key?: React.Key;
  group: any;
  isExpanded: boolean;
  onToggle: () => void;
  activeClassesSet: Set<string>;
  previewMode: string;
  selectedProperty: string | null;
  onPropertyClick: (prop: string) => void;
  onVariantClick: (variant: string) => void;
  onCustomApply: (variant: string) => void;
  onCustomRemove: (variant: string) => void;
  activeSubTab?: string;
  setActiveSubTab?: (tab: string) => void;
  onOpenReference?: () => void;
  onCloseVariantsRow?: () => void;
}

export function ControlBarAccordion({
  group,
  isExpanded,
  onToggle,
  activeClassesSet,
  previewMode,
  selectedProperty,
  onPropertyClick,
  onVariantClick,
  onCustomApply,
  onCustomRemove,
  activeSubTab,
  setActiveSubTab,
  onOpenReference,
  onCloseVariantsRow
}: ControlBarAccordionProps) {
  
  // Determine active chips for this group to show in collapsed state
  const activeChipsForGroup = group.properties.filter((propObj: any) => {
    const prop = typeof propObj === 'string' ? propObj : propObj.prop;
    const isWildcard = prop.endsWith('-*') || (prop in stylingWildcards && prop !== 'flex' && prop !== 'grid');
    if (isWildcard) {
      const variants = stylingWildcards[prop] || [];
      return variants.some(v => activeClassesSet.has(v));
    }
    return activeClassesSet.has(prop);
  }).map((propObj: any) => typeof propObj === 'string' ? propObj : propObj.prop);

  // also include active variants of wildcards
  const activeVariants: string[] = [];
  group.properties.forEach((propObj: any) => {
     const prop = typeof propObj === 'string' ? propObj : propObj.prop;
     if (prop.endsWith('-*') || prop in stylingWildcards) {
        const variants = stylingWildcards[prop] || [];
        variants.forEach(v => {
           if (activeClassesSet.has(v)) activeVariants.push(v);
        });
        // also check active variants like custom colors
        if (prop.endsWith('-*')) {
           const prefix = prop.slice(0, -1);
           Array.from(activeClassesSet).forEach(c => {
              if (c.startsWith(prefix) || c.startsWith('-' + prefix)) {
                 if (!variants.includes(c) && !activeVariants.includes(c)) activeVariants.push(c);
              }
           });
        }
     }
  });

  const allActiveForBadge = Array.from(new Set([...activeChipsForGroup, ...activeVariants, ...Array.from(activeClassesSet).filter(c => {
     // match custom inputs
     if (group.group === 'SIZE' && c.startsWith('bg-size-')) return true;
     if (group.group === 'POSITION' && c.startsWith('bg-position-')) return true;
     // simple heuristic
     return false;
  })])).slice(0, 3); // show up to 3

  return (
    <div className="border-b border-zinc-800/50 flex flex-col bg-zinc-900">
      {(group.isGradientStop || group.isSubGroup) && setActiveSubTab && (
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-950/50 transition-colors border-b border-zinc-800/30">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
              
              {(() => {
                let subTabs = [];
                if (group.isGradientStop) {
                   subTabs = ['FROM', 'VIA', 'TO'];
                } else if (group.isSubGroup && group.parentGroup) {
                   const parent = (stylingControlBarData[previewMode as keyof typeof stylingControlBarData] || []).find((g: any) => g.group === group.parentGroup);
                   if (parent && parent.subGroups) subTabs = parent.subGroups;
                }
                return subTabs.map(tab => (

                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab as any)}
                  className={`text-[9px] font-bold uppercase tracking-widest leading-tight py-0.5 px-1.5 rounded transition-colors text-left ${
                    activeSubTab === tab ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))})()}
            </div>
        </div>
      </div>
)}
      
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className={`p-3 pt-0 flex flex-col gap-3 ${(group.isGradientStop || group.isSubGroup) ? "border-t border-zinc-800/50" : ""}`}>
             <div className="flex flex-wrap items-center gap-1.5 mt-3">
                {group.properties.map((propObj: any) => {
                  const prop = typeof propObj === 'string' ? propObj : propObj.prop;
                  const label = typeof propObj === 'string' ? propObj : propObj.label;
                  const isWildcard = prop.endsWith('-*') || (prop in stylingWildcards && prop !== 'flex' && prop !== 'grid');
                  
                  let isActive = false;
                  if (isWildcard) {
                    if (propObj.isColorFamily && propObj.family) {
                       const familyColors = tailwindColors[propObj.family as keyof typeof tailwindColors];
                       if (familyColors) {
                           const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                           isActive = shades.some(shade => {
                              let variant = prop.replace('*', shade.toString());
                              if (prop.endsWith('-(<custom-property>)')) {
                                  variant = prop.replace('-(<custom-property>)', `-${propObj.family}-${shade}`);
                              } else if (prop.endsWith('-[<value>]')) {
                                  variant = prop.replace('-[<value>]', `-${propObj.family}-${shade}`);
                              } else if (!prop.endsWith('-*')) {
                                  const prefix = prop.replace(/-$/, '');
                                  variant = `${prefix}-${propObj.family}-${shade}`;
                              }
                              return activeClassesSet.has(variant);
                           });
                       }
                    } else {
                       const variants = stylingWildcards[prop] || [];
                       isActive = variants.some(v => activeClassesSet.has(v));
                    }
                  } else {
                    isActive = activeClassesSet.has(prop);
                  }
                  
                  const isSelected = selectedProperty === prop;
                  if (propObj.isColorFamily || propObj.isColor) {
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
                  }

                  return (
                    <button
                      key={prop}
                      onClick={() => onPropertyClick(prop)}
                      className={`shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border ${
                        isSelected || isActive
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                          : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
             
             <CustomValueInput
                propertyGroup={(group.isGradientStop || group.isSubGroup) ? group.group : group.group}
                previewMode={previewMode}
                onApply={onCustomApply}
                onRemove={onCustomRemove}
                activeClassesSet={activeClassesSet}
                onOpenReference={onOpenReference}
             />
             </div>
             
             {/* Variants Row if a property is selected inside this group */}
             {selectedProperty && group.properties.some((p: any) => (typeof p === 'string' ? p : p.prop) === selectedProperty) && (
               <div className="flex flex-wrap items-center gap-1.5 p-2 bg-zinc-950/30 rounded-lg border border-zinc-800/30">
                  {(() => {
                      const propObj = group.properties.find((p: any) => (typeof p === 'string' ? p : p.prop) === selectedProperty);
                      if (propObj && propObj.isColorFamily && propObj.family) {
                          const familyColors = tailwindColors[propObj.family as keyof typeof tailwindColors];
                          const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                          return (
                             <div className="flex flex-wrap items-center justify-between gap-1.5 w-full">
                                <div className="flex flex-wrap items-center gap-1.5">
                                {shades.map(shade => {
                                   let variant = selectedProperty.replace('*', shade.toString());
                                   const colorVal = familyColors[shade as keyof typeof familyColors];
                                   
                                   // If prefix is text-red-* or bg-red-*
                                   if (selectedProperty.endsWith('-(<custom-property>)')) {
                                      variant = selectedProperty.replace('-(<custom-property>)', `-${propObj.family}-${shade}`);
                                   } else if (selectedProperty.endsWith('-[<value>]')) {
                                      variant = selectedProperty.replace('-[<value>]', `-${propObj.family}-${shade}`);
                                   } else if (!selectedProperty.endsWith('-*')) {
                                      const prefix = selectedProperty.replace(/-$/, '');
                                      variant = `${prefix}-${propObj.family}-${shade}`;
                                   }
                                   
                                   return (
                                      <button
                                         key={variant}
                                         onClick={() => onVariantClick(variant)}
                                         className={`group flex flex-col items-center gap-1 focus:outline-none`}
                                         title={variant}
                                      >
                                         <div 
                                            className={`w-8 h-8 rounded-full shadow-sm border transition-all duration-200 ${
                                              activeClassesSet.has(variant) ? 'border-white scale-110 shadow-lg z-10 ring-2 ring-indigo-500' : 'border-zinc-800/50 hover:scale-105 hover:border-zinc-500'
                                            }`}
                                            style={{ backgroundColor: colorVal as string }}
                                         />
                                         <span className={`text-[10px] font-medium transition-colors ${activeClassesSet.has(variant) ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                            {shade}
                                         </span>
                                      </button>
                                   );
                                })}
                                </div>
                                <button 
                                   onClick={() => onCloseVariantsRow ? onCloseVariantsRow() : onPropertyClick(selectedProperty)}
                                   className="ml-auto p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-md transition-colors border border-zinc-800/50"
                                   title="Close"
                                >
                                   <X className="w-4 h-4" />
                                </button>
                             </div>
                          );
                      }
                      
                      return stylingWildcards[selectedProperty]?.map(variant => (
                        <button
                          key={variant}
                          onClick={() => onVariantClick(variant)}
                          className={`shrink-0 px-2.5 py-1 text-xs font-mono rounded-md transition-colors border ${
                            activeClassesSet.has(variant)
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                              : 'bg-zinc-800/80 text-zinc-400 border-zinc-700/80 hover:bg-zinc-700 hover:text-zinc-300'
                          }`}
                        >
                          {variant}
                        </button>
                      ));
                  })()}
               </div>
             )}
             
             
         </div>
      </div>
      
    </div>
  );
}
