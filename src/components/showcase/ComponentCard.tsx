import React from 'react';

interface ComponentCardProps {
  key?: React.Key;
  name: string;
  description: string;
  children: React.ReactNode;
  alsoIn?: string[];
}

export function ComponentCard({ name, description, children, alsoIn }: ComponentCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:border-zinc-700">
      <div className="p-4 md:p-6 flex-1 flex flex-col justify-center items-center min-h-[200px] relative bg-zinc-950/50">
        <div className="w-full flex items-center justify-center p-4">
          {children}
        </div>
      </div>
      <div className="p-4 md:p-5 border-t border-zinc-800 bg-zinc-900">
        <h3 className="text-lg font-display font-semibold text-zinc-100 mb-1">{name}</h3>
        <p className="text-sm font-sans text-zinc-400 leading-relaxed mb-2">{description}</p>
        {alsoIn && alsoIn.length > 0 && (
          <p className="text-[10px] text-zinc-500 font-medium">Also in: {alsoIn.join(', ')}</p>
        )}
      </div>
    </div>
  );
}

export function CategorySection({ id, title, children }: { id?: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className="flex flex-col gap-6">
      <h2 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-3">
        {title}
      </h2>
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
