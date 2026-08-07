import React from 'react';

interface ComponentCardProps {
  key?: React.Key;
  name: string;
  description: string;
  children: React.ReactNode;
  alsoIn?: string[];
  index?: number;
}

export function ComponentCard({ name, description, children, alsoIn, index }: ComponentCardProps) {
  return (
    <div id={`component-${name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:border-zinc-700 relative group scroll-mt-40">
      {index !== undefined && (
        <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-400 z-10 backdrop-blur-sm group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/50 transition-colors shadow-sm">
          {index}
        </div>
      )}
      <div className="p-4 md:p-6 flex-1 flex flex-col justify-center items-center min-h-[200px] relative bg-zinc-950/50 pt-10">
        <div className="w-full flex items-center justify-center p-4">
          {children}
        </div>
      </div>
      <div className="p-4 md:p-5 border-t border-zinc-800 bg-zinc-900">
        <h3 className="text-lg font-display font-semibold text-zinc-100 mb-1 flex items-center gap-2">
          {name}
        </h3>
        <p className="text-sm font-sans text-zinc-400 leading-relaxed mb-2">{description}</p>
        {alsoIn && alsoIn.length > 0 && (
          <p className="text-[10px] text-zinc-500 font-medium">Also in: {alsoIn.join(', ')}</p>
        )}
      </div>
    </div>
  );
}

export function CategorySection({ id, title, children, count, componentsList }: { id?: string, title: string, children: React.ReactNode, count?: number, componentsList?: {name: string}[] }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            {title}
          </h2>
          {count !== undefined && (
            <div className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold shadow-sm">
              {count} {count === 1 ? 'component' : 'components'}
            </div>
          )}
        </div>
        
        {componentsList && componentsList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {componentsList.map((comp, idx) => (
              <a 
                key={comp.name} 
                href={`#component-${comp.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[11px] px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 rounded-md text-zinc-400 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span className="opacity-50 text-[9px] font-mono">{idx + 1}</span>
                {comp.name}
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}

export function matchSearch(name: string, query: string) {
  if (!query) return true;
  return name.toLowerCase().includes(query.toLowerCase());
}
