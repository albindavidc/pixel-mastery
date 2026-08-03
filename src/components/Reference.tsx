import { useState } from 'react';
import { useAppStore } from '../store';
import { taxonomy } from '../data/taxonomy';
import { Search, Play } from 'lucide-react';

export function Reference() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setPlaygroundClasses, playgroundClasses } = useAppStore();

  const handleTryClass = (cls: string) => {
    // Append class if not present, otherwise no-op or just replace?
    // Let's replace for simplicity, or append if they hold shift? Just append.
    const current = playgroundClasses.split(' ').filter(Boolean);
    if (!current.includes(cls)) {
      setPlaygroundClasses([...current, cls].join(' '));
    }
  };

  const filteredTaxonomy = taxonomy.map(category => {
    const filteredClasses = category.classes.filter(cls => 
      cls.toLowerCase().includes(searchQuery.toLowerCase()) || 
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, classes: filteredClasses };
  }).filter(category => category.classes.length > 0);

  return (
    <div className="bg-zinc-950 transition-colors">
      <div className="p-6 border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-md z-10 transition-colors">
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Class Reference</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search classes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      
      <div className="p-6">
        {filteredTaxonomy.length === 0 ? (
          <div className="text-center text-zinc-500 py-12">No classes found matching "{searchQuery}"</div>
        ) : (
          <div className="space-y-10">
            {filteredTaxonomy.map((category) => (
              <section key={category.name}>
                <h3 className="text-lg font-bold text-zinc-300 mb-4 pb-2 border-b border-zinc-800 transition-colors">{category.name}</h3>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {category.classes.map(cls => (
                    <button
                      key={cls}
                      onClick={() => handleTryClass(cls)}
                      className="shrink-0 group relative inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                      title="Add to playground"
                    >
                      {cls}
                      <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
