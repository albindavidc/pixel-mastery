import { HtmlModuleDetails } from './HtmlModuleDetails';
import React from 'react';
import { Info } from 'lucide-react';

interface ModuleDetailsProps {
  moduleId: string;
}

export function ModuleDetails({ moduleId }: ModuleDetailsProps) {
  if (moduleId.startsWith('html-')) return <HtmlModuleDetails moduleId={moduleId} />;
  if (moduleId === 'tailwind-layout-box-sizing') {
    return (
      <>
        {/* Quick Reference Guide */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-300">
              <Info className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm tracking-wide uppercase">Quick Reference Guide</h3>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Box Model</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">box-border</span>
              <span className="text-sm font-semibold text-zinc-200">Includes padding/border</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">box-content</span>
              <span className="text-sm font-semibold text-zinc-200">Excludes padding/border</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">p-* / m-*</span>
              <span className="text-sm font-semibold text-zinc-200">Padding & Margin</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">space-x-* / space-y-*</span>
              <span className="text-sm font-semibold text-zinc-200">Between children</span>
            </div>
          </div>
        </div>

        {/* Alignment Cheat Sheet / Matrix */}
        <div className="pt-6 border-t border-zinc-800 mt-6 not-prose mb-10">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Spacing Directional Matrix</h4>
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
              <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Spacing Properties
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">All Sides</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">p-* / m-*</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Axis (X/Y)</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">px-* / py-*</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Specific Sides</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">pt-* / pr-* / pb-* / pl-*</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Details */}
        <div className="mt-8 mb-6 space-y-6 not-prose">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Box Sizing Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'box-border', desc: 'Sets box-sizing to border-box.' },
                  { prop: 'box-content', desc: 'Sets box-sizing to content-box.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Spacing Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'p-*', desc: 'Sets padding on all sides.' },
                  { prop: 'm-*', desc: 'Sets margin on all sides.' },
                  { prop: 'space-x-*', desc: 'Adds horizontal space between child elements.' },
                  { prop: 'space-y-*', desc: 'Adds vertical space between child elements.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (moduleId === 'tailwind-layout-position') {
    return (
      <>
        {/* Quick Reference Guide */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-300">
              <Info className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm tracking-wide uppercase">Quick Reference Guide</h3>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Position</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">static</span>
              <span className="text-sm font-semibold text-zinc-200">Default flow</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">relative</span>
              <span className="text-sm font-semibold text-zinc-200">Relative to itself</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">absolute</span>
              <span className="text-sm font-semibold text-zinc-200">Relative to parent</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">fixed</span>
              <span className="text-sm font-semibold text-zinc-200">Relative to viewport</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">sticky</span>
              <span className="text-sm font-semibold text-zinc-200">Toggles fixed on scroll</span>
            </div>
          </div>
        </div>

        {/* Alignment Cheat Sheet / Matrix */}
        <div className="pt-6 border-t border-zinc-800 mt-6 not-prose mb-10">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Placement Matrix</h4>
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
              <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Offset Properties
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">All Sides</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">inset-*</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Axis (X/Y)</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">inset-x-* / inset-y-*</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Specific Sides</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">top-* / right-* / bottom-* / left-*</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Details */}
        <div className="mt-8 mb-6 space-y-6 not-prose">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Position Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'static', desc: 'Elements flow normally. Top/right/bottom/left have no effect.' },
                  { prop: 'relative', desc: 'Positioned relative to its normal flow. Acts as a reference for absolute children.' },
                  { prop: 'absolute', desc: 'Removed from normal flow. Positioned relative to nearest positioned ancestor.' },
                  { prop: 'fixed', desc: 'Removed from flow. Positioned relative to viewport.' },
                  { prop: 'sticky', desc: 'Toggles between relative and fixed depending on scroll position.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Placement Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'inset-*', desc: 'Sets top, right, bottom, and left simultaneously.' },
                  { prop: 'inset-x-*', desc: 'Sets left and right simultaneously.' },
                  { prop: 'inset-y-*', desc: 'Sets top and bottom simultaneously.' },
                  { prop: 'top-* / right-*', desc: 'Sets specific edge distance.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (moduleId === 'tailwind-layout-visibility') {
    return (
      <>
        {/* Quick Reference Guide */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-300">
              <Info className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm tracking-wide uppercase">Quick Reference Guide</h3>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-widest uppercase bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Visibility & Order</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">visible</span>
              <span className="text-sm font-semibold text-zinc-200">Element is shown</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">invisible</span>
              <span className="text-sm font-semibold text-zinc-200">Hidden but takes space</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">collapse</span>
              <span className="text-sm font-semibold text-zinc-200">Hidden table row/col</span>
            </div>
            <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 flex flex-col justify-center">
              <span className="text-xs text-zinc-500 font-mono mb-1">z-*</span>
              <span className="text-sm font-semibold text-zinc-200">Z-axis stacking order</span>
            </div>
          </div>
        </div>

        {/* Alignment Cheat Sheet / Matrix */}
        <div className="pt-6 border-t border-zinc-800 mt-6 not-prose mb-10">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Z-Index Matrix</h4>
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
              <h5 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Stacking Levels
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Base</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">z-0 / z-auto</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Mid</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">z-10 / z-20</span>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-zinc-300">Top</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">z-50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Details */}
        <div className="mt-8 mb-6 space-y-6 not-prose">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Visibility Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'visible', desc: 'Shows the element. Default behavior.' },
                  { prop: 'invisible', desc: 'Hides the element visually, but it still takes up space in the layout.' },
                  { prop: 'collapse', desc: 'Hides table rows/cols/groups like display:none.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Z-Index Properties
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  { prop: 'z-0 to z-50', desc: 'Controls stacking order. Higher numbers appear on top.' },
                  { prop: 'z-auto', desc: 'Default stacking order.' }
                ].map((item) => (
                  <div key={item.prop} className="flex gap-4 items-start bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50">
                    <code className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">{item.prop}</code>
                    <p className="text-sm text-zinc-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
