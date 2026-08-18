import React from 'react';
import { htmlModules } from '../data/htmlModules';

export function HtmlBeginnerRoadmap() {
  const moduleId = 'html-beginner';
  const module = htmlModules.find(m => m.id === moduleId);
  if (!module) return null;

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
    <div className="mb-16 font-sans">
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
  );
}
