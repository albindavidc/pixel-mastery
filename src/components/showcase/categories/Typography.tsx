import React from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { Quote } from 'lucide-react';

export function Typography({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {
  const components = [
    {
      name: 'Heading (h1-h6)',
      description: 'Titles and section headers establishing hierarchy.',
      render: () => (
        <div className="flex flex-col gap-1 w-full text-zinc-200">
          <h1 className="text-3xl font-display font-bold">Heading 1</h1>
          <h2 className="text-xl font-display font-semibold">Heading 2</h2>
          <h3 className="text-lg font-display font-medium text-zinc-300">Heading 3</h3>
          <h4 className="text-sm font-bold text-zinc-400">Heading 4</h4>
        </div>
      )
    },
    {
      name: 'Paragraph (p)',
      description: 'Blocks of body text.',
      render: () => (
        <p className="text-sm text-zinc-400 leading-relaxed font-sans">
          This is a block of body text. It is used to display paragraphs of information to the user in a readable format.
        </p>
      )
    },
    {
      name: 'Blockquote',
      description: 'An extended quotation from an external source.',
      render: () => (
        <blockquote className="w-full relative pl-8 py-2 border-l-2 border-indigo-500 text-zinc-300 italic text-sm">
          <Quote className="absolute left-2 top-2 w-4 h-4 text-indigo-500/50" />
          "Design is not just what it looks like and feels like. Design is how it works."
          <div className="text-xs text-zinc-500 not-italic mt-2">— Steve Jobs</div>
        </blockquote>
      )
    },
    {
      name: 'Code Block / Inline Code',
      description: 'Formatted text representing computer code.',
      render: () => (
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm text-zinc-300">
            Use the <code className="bg-zinc-800 text-rose-400 px-1.5 py-0.5 rounded text-xs font-mono">npm install</code> command.
          </div>
          <pre className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md overflow-hidden">
            <code className="text-xs font-mono text-zinc-300">
              <span className="text-indigo-400">function</span> <span className="text-emerald-400">hello</span>() {'{\n'}
              {'  '}<span className="text-indigo-400">return</span> <span className="text-amber-400">'world'</span>;\n
              {'}'}
            </code>
          </pre>
        </div>
      )
    },
    {
      name: 'Keyboard Input (kbd)',
      description: 'Indicates user input from a keyboard.',
      render: () => (
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          Press 
          <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 border-b-2 rounded text-xs font-mono text-zinc-200">Cmd</kbd>
          +
          <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 border-b-2 rounded text-xs font-mono text-zinc-200">K</kbd>
          to search
        </div>
      )
    },
    {
      name: 'Mark / Highlight',
      description: 'Text highlighted for reference or search results.',
      render: () => (
        <div className="text-sm text-zinc-300">
          The search query matched <mark className="bg-amber-500/30 text-amber-200 px-1 rounded">this specific phrase</mark> in the document.
        </div>
      )
    }
  ];

  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="🔤 Typography" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
