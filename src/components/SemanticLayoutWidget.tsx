import React, { useState } from 'react';

interface BlockDef {
  id: string;
  tag: string;
  isSemantic: boolean;
  color: string;
  tooltip: string;
  roleInfo: string;
  children?: BlockDef[];
  layout?: 'row' | 'col';
  flex?: string;
  height?: string;
}

const nonSemanticData: BlockDef[] = [
  { id: 'ns-1', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic container. Could be a header, but screen readers just see a block.', roleInfo: 'Screen reader announcement: "group" — no indication of purpose.' },
  { id: 'ns-2', tag: 'span', isSemantic: false, color: 'yellow', tooltip: 'An inline container. Offers no semantic meaning.', roleInfo: 'Screen reader announcement: just text, no structural meaning.' },
  {
    id: 'ns-3', tag: 'row-wrapper', isSemantic: false, color: 'transparent', tooltip: '', roleInfo: '', layout: 'row',
    children: [
      { id: 'ns-4', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic sidebar column.', roleInfo: 'Screen reader announcement: "group"', flex: 'flex-1' },
      {
        id: 'ns-5', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic main content wrapper.', roleInfo: 'Screen reader announcement: "group"', flex: 'flex-[2] md:flex-[3]', layout: 'col',
        children: [
          {
            id: 'ns-6', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic wrapper for an article.', roleInfo: 'Screen reader announcement: "group"', layout: 'col',
            children: [
              { id: 'ns-7', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic image wrapper.', roleInfo: 'Screen reader announcement: "group"' },
              { id: 'ns-8', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic text wrapper.', roleInfo: 'Screen reader announcement: "group"' }
            ]
          },
          { id: 'ns-9', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'Another generic section wrapper.', roleInfo: 'Screen reader announcement: "group"' }
        ]
      }
    ]
  },
  { id: 'ns-10', tag: 'div', isSemantic: false, color: 'purple', tooltip: 'A generic footer wrapper.', roleInfo: 'Screen reader announcement: "group"' },
];

const semanticData: BlockDef[] = [
  { id: 's-1', tag: 'header', isSemantic: true, color: 'rose', tooltip: 'Introductory content or navigational links for the page.', roleInfo: 'Role: "banner"' },
  { id: 's-2', tag: 'nav', isSemantic: true, color: 'emerald', tooltip: 'Tells browsers and screen readers "this is the site\'s navigation links" — screen readers can jump straight to it.', roleInfo: 'Role: "navigation"' },
  {
    id: 's-3', tag: 'row-wrapper', isSemantic: true, color: 'transparent', tooltip: '', roleInfo: '', layout: 'row',
    children: [
      { id: 's-4', tag: 'aside', isSemantic: true, color: 'fuchsia', tooltip: 'Content tangentially related to the main content (e.g., a sidebar).', roleInfo: 'Role: "complementary"', flex: 'flex-1' },
      {
        id: 's-5', tag: 'main', isSemantic: true, color: 'cyan', tooltip: 'The dominant content of the document.', roleInfo: 'Role: "main"', flex: 'flex-[2] md:flex-[3]', layout: 'col',
        children: [
          {
            id: 's-6', tag: 'article', isSemantic: true, color: 'blue', tooltip: 'A self-contained composition intended to be independently distributable.', roleInfo: 'Role: "article"', layout: 'col',
            children: [
              { id: 's-7', tag: 'figure', isSemantic: true, color: 'amber', tooltip: 'Self-contained content, usually an image or diagram.', roleInfo: 'Role: "figure"' },
              { id: 's-8', tag: 'p', isSemantic: true, color: 'lime', tooltip: 'A paragraph of text.', roleInfo: 'Role: "paragraph"' }
            ]
          },
          { id: 's-9', tag: 'section', isSemantic: true, color: 'indigo', tooltip: 'A standalone section of content, typically with a heading.', roleInfo: 'Role: "region"' }
        ]
      }
    ]
  },
  { id: 's-10', tag: 'footer', isSemantic: true, color: 'violet', tooltip: 'Footer for its nearest sectioning content (e.g., copyright info).', roleInfo: 'Role: "contentinfo"' },
];

const colorMap: Record<string, string> = {
  rose: 'bg-rose-500/20 border-rose-400 text-rose-300 hover:bg-rose-500/30',
  emerald: 'bg-emerald-500/20 border-emerald-400 text-emerald-300 hover:bg-emerald-500/30',
  fuchsia: 'bg-fuchsia-500/20 border-fuchsia-400 text-fuchsia-300 hover:bg-fuchsia-500/30',
  cyan: 'bg-cyan-500/20 border-cyan-400 text-cyan-300 hover:bg-cyan-500/30',
  blue: 'bg-blue-500/20 border-blue-400 text-blue-300 hover:bg-blue-500/30',
  amber: 'bg-amber-500/20 border-amber-400 text-amber-300 hover:bg-amber-500/30',
  lime: 'bg-lime-500/20 border-lime-400 text-lime-300 hover:bg-lime-500/30',
  indigo: 'bg-indigo-500/20 border-indigo-400 text-indigo-300 hover:bg-indigo-500/30',
  violet: 'bg-violet-500/20 border-violet-400 text-violet-300 hover:bg-violet-500/30',
  purple: 'bg-purple-500/20 border-purple-400 text-purple-300 hover:bg-purple-500/30',
  yellow: 'bg-yellow-500/20 border-yellow-400 text-yellow-300 hover:bg-yellow-500/30',
  zinc: 'bg-zinc-800/40 border-zinc-500 text-zinc-300 hover:bg-zinc-800/60',
  transparent: 'bg-transparent border-transparent'
};

export default function SemanticLayoutWidget() {
  const [showWhy, setShowWhy] = useState(false);
  const [activePanelId, setActivePanelId] = useState<string | null>(null);

  const togglePanel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePanelId(prev => prev === id ? null : id);
  };

  const renderBlock = (block: BlockDef) => {
    if (block.tag === 'row-wrapper') {
      return (
        <div key={block.id} className="flex flex-row gap-3 w-full">
          {block.children?.map(renderBlock)}
        </div>
      );
    }

    const classes = colorMap[block.color] || colorMap['zinc'];
    const isActive = activePanelId === block.id;

    return (
      <div 
        key={block.id}
        onClick={(e) => togglePanel(block.id, e)}
        className={`relative group cursor-pointer border-2 rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 ${classes} ${block.flex || 'w-full'} ${block.height || ''} ${block.layout === 'row' ? 'flex flex-row gap-3' : 'flex flex-col gap-3'} ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-zinc-900' : ''}`}
      >
        <div className="font-mono text-sm md:text-base font-medium opacity-90 text-center tracking-wide">&lt;{block.tag}&gt;</div>
        
        {/* Children if any */}
        {block.children && (
          <div className={`w-full ${block.layout === 'row' ? 'flex flex-row gap-3' : 'flex flex-col gap-3'}`}>
            {block.children.map(renderBlock)}
          </div>
        )}

        {/* Hover Tooltip (hidden if showWhy is true) */}
        {!showWhy && !isActive && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-xs text-zinc-300 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20 shadow-xl shadow-black/50 text-center leading-relaxed">
            {block.tooltip}
          </div>
        )}

        {/* Inline caption (visible if showWhy is true) */}
        {showWhy && (
          <div className="mt-2 text-[10px] sm:text-xs text-zinc-200 leading-relaxed font-sans bg-black/30 p-2.5 rounded-md text-center backdrop-blur-sm border border-white/5">
            {block.tooltip}
          </div>
        )}

        {/* Active Panel Expansion */}
        {isActive && (
          <div className="mt-4 p-4 bg-zinc-900/95 rounded-xl border border-white/10 text-sm font-sans z-10 shadow-2xl backdrop-blur-md">
            <div className="font-bold text-white mb-2 text-base">&lt;{block.tag}&gt;</div>
            <div className="text-zinc-300 mb-3 leading-relaxed">{block.tooltip}</div>
            <div className="text-indigo-300 text-xs font-mono bg-indigo-500/10 p-2 rounded-md border border-indigo-500/20">{block.roleInfo}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center my-12 w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          What is an HTML <br /> Semantic Tag?
        </h2>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className={`text-sm font-medium transition-colors ${!showWhy ? 'text-white' : 'text-zinc-500'}`}>Hide explanations</span>
          <button 
            onClick={() => setShowWhy(!showWhy)}
            className={`w-14 h-7 rounded-full transition-colors relative shadow-inner ${showWhy ? 'bg-indigo-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white absolute top-1 shadow-sm transition-transform duration-300 ${showWhy ? 'translate-x-8' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${showWhy ? 'text-white' : 'text-zinc-500'}`}>Show me why</span>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-6 md:p-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8">
          
          {/* Non-Semantic Column */}
          <div className="flex flex-col gap-6 bg-zinc-950/50 p-6 md:p-8 rounded-2xl border border-zinc-800/50">
            <h3 className="text-2xl font-display font-semibold text-zinc-300 text-center mb-2">Non-Semantic HTML</h3>
            <div className="flex flex-col gap-3">
              {nonSemanticData.map(renderBlock)}
            </div>
          </div>

          {/* Semantic Column */}
          <div className="flex flex-col gap-6 bg-zinc-950/50 p-6 md:p-8 rounded-2xl border border-zinc-800/50">
            <h3 className="text-2xl font-display font-semibold text-white text-center mb-2">Semantic HTML</h3>
            <div className="flex flex-col gap-3">
              {semanticData.map(renderBlock)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
