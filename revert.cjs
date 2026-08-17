const fs = require('fs');

const files = [
  'src/components/TailwindPlayground.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/StylingPlayground.tsx',
  'src/components/Playground.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Revert imports
  content = content.replace("import { Info, GripHorizontal } from 'lucide-react';\nimport { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';", "import { Info } from 'lucide-react';");

  // Revert Panel wrapper opening
  content = content.replace(
    /<PanelGroup direction="vertical" className="flex-1 h-full min-h-0">\s*<Panel defaultSize=\{70\} minSize=\{30\} className="relative flex items-center justify-center rounded-xl bg-\[#0f172a\] shadow-inner overflow-hidden border border-zinc-800\/80 transition-all duration-300">/g,
    '{/* Preview Area */}\n        <div className="flex-1 relative flex items-center justify-center rounded-xl bg-[#0f172a] shadow-inner overflow-hidden border border-zinc-800/80 transition-all duration-300">'
  );

  // Revert Panel split
  content = content.replace(
    /<\/Panel>\s*<PanelResizeHandle[\s\S]*?<\/PanelResizeHandle>\s*<Panel defaultSize=\{30\} minSize=\{20\} className="flex flex-col min-h-0">/g,
    ''
  );
  
  content = content.replace(
    /<\/div>\s*<\/Panel>\s*<PanelResizeHandle[\s\S]*?<\/PanelResizeHandle>\s*<Panel defaultSize=\{30\} minSize=\{20\} className="flex flex-col min-h-0">/g,
    '</div>'
  );

  // Revert code editor opening
  content = content.replace(
    /\{\/\* Code Editor Area \*\/\}\n\s*<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black\/50 flex-1 min-h-0 z-10">/g,
    '{/* Code Editor Area */}\n        <div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 shrink-0 z-10">'
  );

  // Revert closing tags
  content = content.replace(
    /<\/div>\n\s*<\/div>\n\s*<\/Panel>\n\s*<\/PanelGroup>\n\s*<\/div>/g,
    '</div>\n        </div>\n      </div>'
  );

  fs.writeFileSync(file, content);
}
console.log('Reverted');
