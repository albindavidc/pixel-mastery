const fs = require('fs');

const files = ['src/components/Playground.tsx', 'src/components/TailwindPlayground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Import BasisHelpModal and Info
  if (!content.includes('BasisHelpModal')) {
    content = content.replace("import { IframePreview } from './IframePreview';", "import { IframePreview } from './IframePreview';\nimport { BasisHelpModal } from './BasisHelpModal';\nimport { Info } from 'lucide-react';");
  }

  // Add state
  if (!content.includes('showBasisModal')) {
    content = content.replace("const [selectedProperty, setSelectedProperty] = useState<string | null>(null);", "const [selectedProperty, setSelectedProperty] = useState<string | null>(null);\n  const [showBasisModal, setShowBasisModal] = useState(false);");
  }

  // Add info button
  const searchButton = `                </button>
              ))}
            </div>`;
  
  const replaceButton = `                </button>
              ))}
              {selectedProperty === 'flex-basis' && (
                <button
                  onClick={() => setShowBasisModal(true)}
                  className="shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors border bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400/50 flex items-center gap-1.5 shadow-sm"
                >
                  <Info className="w-4 h-4" />
                  Custom Values Reference
                </button>
              )}
            </div>`;

  if (!content.includes('Custom Values Reference')) {
    content = content.replace(searchButton, replaceButton);
  }

  // Add Modal to render
  const searchRender = `  return (
    <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden relative transition-colors">`;

  const replaceRender = `  return (
    <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden relative transition-colors">
      <BasisHelpModal isOpen={showBasisModal} onClose={() => setShowBasisModal(false)} />`;

  if (!content.includes('BasisHelpModal isOpen')) {
    content = content.replace(searchRender, replaceRender);
  }

  fs.writeFileSync(file, content);
});
