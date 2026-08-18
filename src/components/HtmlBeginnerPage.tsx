import React from 'react';
import { htmlModules } from '../data/htmlModules';
import { htmlTagsData } from '../data/htmlTagsData';
import { HtmlElementsShowcase } from "./HtmlElementsShowcase";

export function HtmlBeginnerPage() {
  const moduleId = 'html-beginner';
  const module = htmlModules.find(m => m.id === moduleId);
  if (!module) return <div>Module not found</div>;

  let contentData;
  try {
    contentData = JSON.parse(module.content);
  } catch (e) {
    contentData = { categories: [] };
  }

  const categories = contentData.categories || [];

  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'indigo': return 'text-ds-indigo border-ds-indigo/30';
      case 'emerald': return 'text-ds-emerald border-ds-emerald/30';
      case 'rose': return 'text-ds-rose border-ds-rose/30';
      case 'amber': return 'text-ds-amber border-ds-amber/30';
      case 'cyan': return 'text-ds-cyan border-ds-cyan/30';
      case 'teal': return 'text-ds-teal border-ds-teal/30';
      case 'blue': return 'text-ds-blue border-ds-blue/30';
      case 'pink': return 'text-ds-pink border-ds-pink/30';
      case 'violet': return 'text-ds-violet border-ds-violet/30';
      default: return 'text-zinc-400 border-zinc-500/30';
    }
  };

  const getHeadingColorClass = (colorName: string) => {
    switch (colorName) {
      case 'indigo': return 'text-ds-indigo';
      case 'emerald': return 'text-ds-emerald';
      case 'rose': return 'text-ds-rose';
      case 'amber': return 'text-ds-amber';
      case 'cyan': return 'text-ds-cyan';
      case 'teal': return 'text-ds-teal';
      case 'blue': return 'text-ds-blue';
      case 'pink': return 'text-ds-pink';
      case 'violet': return 'text-ds-violet';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="text-zinc-200 font-sans w-full">
      {/* HTML Elements Showcase */}
      <HtmlElementsShowcase />

      {/* Element Breakdown */}
      <div className="space-y-16">
        {categories.map((cat: any, i: number) => (
          <section key={i}>
            <h3 className={`text-2xl font-display font-bold mb-6 flex items-center gap-3 ${getHeadingColorClass(cat.color)}`}>
              <span className="w-6 h-[2px] bg-current opacity-50"></span>
              {cat.name}
            </h3>
            
            <div className="flex flex-col gap-6">
              {cat.tags.map((tag: string) => {
                const data = htmlTagsData[tag] || {};
                
                return (
                  <div key={tag} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
                    {/* Left Column: Tag Name, Definition & When to use */}
                    <div className="lg:w-1/2 p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-900/50">
                      <div className="mb-4">
                        <span className={`inline-block font-mono text-lg font-bold px-3 py-1 rounded bg-white/5 border ${getColorClasses(cat.color)}`}>
                          {tag}
                        </span>
                      </div>
                      <h4 className="text-white font-display text-xl font-medium leading-snug mb-4">
                        {data.definition || 'Needs definition.'}
                      </h4>
                      <div className="mt-auto">
                        <h5 className="font-display font-bold text-[10px] text-zinc-600 uppercase tracking-widest mb-2">When to use it</h5>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          {data.when || data.what || 'Explanation needed.'}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Syntax & Attributes */}
                    <div className="lg:w-1/2 p-6 flex flex-col gap-5">
                      <div>
                        <h5 className="font-display font-bold text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Syntax</h5>
                        <pre className="bg-[#0f172a] border border-slate-700/50 p-3 rounded-lg overflow-x-auto">
                          <code className="font-mono text-xs text-indigo-300">
                            {data.syntax || data.example || tag}
                          </code>
                        </pre>
                      </div>
                      
                      {(data.required?.length > 0 || data.optional?.length > 0) && (
                        <div className="grid grid-cols-2 gap-4 mt-auto">
                          {data.required?.length > 0 && (
                            <div>
                              <h5 className="font-display font-bold text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Required</h5>
                              <div className="flex flex-wrap gap-1.5">
                                {data.required.map((attr: string) => (
                                  <span key={attr} className="font-mono text-[11px] px-2 py-0.5 rounded bg-ds-orange/10 text-ds-orange border border-ds-orange/20">
                                    {attr}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {data.optional?.length > 0 && (
                            <div>
                              <h5 className="font-display font-bold text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Optional</h5>
                              <div className="flex flex-wrap gap-1.5">
                                {data.optional.map((attr: string) => (
                                  <span key={attr} className="font-mono text-[11px] px-2 py-0.5 rounded bg-ds-lime/10 text-ds-lime border border-ds-lime/20">
                                    {attr}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
