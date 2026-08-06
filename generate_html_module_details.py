import re

content = """import React from 'react';
import { htmlModules } from '../data/htmlModules';
import { htmlTagsData } from '../data/htmlTagsData';

interface HtmlModuleDetailsProps {
  moduleId: string;
}

export function HtmlModuleDetails({ moduleId }: HtmlModuleDetailsProps) {
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
      case 'indigo': return 'text-indigo-400 border-indigo-500/30';
      case 'emerald': return 'text-emerald-400 border-emerald-500/30';
      case 'rose': return 'text-rose-400 border-rose-500/30';
      case 'amber': return 'text-amber-400 border-amber-500/30';
      case 'cyan': return 'text-cyan-400 border-cyan-500/30';
      case 'teal': return 'text-teal-400 border-teal-500/30';
      case 'blue': return 'text-blue-400 border-blue-500/30';
      case 'pink': return 'text-pink-400 border-pink-500/30';
      case 'violet': return 'text-violet-400 border-violet-500/30';
      default: return 'text-zinc-400 border-zinc-500/30';
    }
  };

  const getHeadingColorClass = (colorName: string) => {
    switch (colorName) {
      case 'indigo': return 'text-indigo-400';
      case 'emerald': return 'text-emerald-400';
      case 'rose': return 'text-rose-400';
      case 'amber': return 'text-amber-400';
      case 'cyan': return 'text-cyan-400';
      case 'teal': return 'text-teal-400';
      case 'blue': return 'text-blue-400';
      case 'pink': return 'text-pink-400';
      case 'violet': return 'text-violet-400';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="text-zinc-200 p-8 max-w-5xl mx-auto font-sans">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold text-white mb-4">{module.title}</h2>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">{module.description}</p>
      </div>

      {/* Roadmap Table Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-display font-bold text-white mb-6">Module Roadmap</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat: any, i: number) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
              <h4 className={`font-display font-bold text-sm tracking-wide uppercase mb-4 ${getHeadingColorClass(cat.color)}`}>
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className={`font-mono text-xs px-2.5 py-1 rounded bg-white/5 border ${getColorClasses(cat.color)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Element Breakdown */}
      <div className="space-y-16">
        {categories.map((cat: any, i: number) => (
          <section key={i}>
            <h3 className={`text-2xl font-display font-bold mb-6 flex items-center gap-3 ${getHeadingColorClass(cat.color)}`}>
              <span className="w-6 h-[2px] bg-current opacity-50"></span>
              {cat.name}
            </h3>
            
            <div className="flex flex-col gap-4">
              {cat.tags.map((tag: string) => {
                const data = htmlTagsData[tag] || {};
                
                return (
                  <div key={tag} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col lg:flex-row gap-6 lg:items-start shadow-sm">
                    {/* Tag Name & Definition */}
                    <div className="lg:w-1/3 shrink-0">
                      <div className="mb-3">
                        <span className={`inline-block font-mono text-lg font-bold px-3 py-1 rounded bg-white/5 border ${getColorClasses(cat.color)}`}>
                          {tag}
                        </span>
                      </div>
                      <p className="text-white font-medium text-lg leading-snug">
                        {data.definition || 'Needs definition.'}
                      </p>
                    </div>

                    {/* When to use & Syntax */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                      <div>
                        <h5 className="font-display font-bold text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">When to use it</h5>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          {data.when || data.what || 'Explanation needed.'}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-display font-bold text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Syntax</h5>
                        <pre className="bg-[#0f172a] border border-slate-700/50 p-3 rounded-lg overflow-x-auto">
                          <code className="font-mono text-xs text-indigo-300">
                            {data.syntax || data.example || tag}
                          </code>
                        </pre>
                      </div>
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
"""

with open('src/components/HtmlModuleDetails.tsx', 'w') as f:
    f.write(content)
