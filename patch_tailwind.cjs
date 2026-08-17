const fs = require('fs');
let content = fs.readFileSync('src/components/TailwindPlayground.tsx', 'utf8');

if (!content.includes('react-resizable-panels')) {
  content = content.replace("import { Info } from 'lucide-react';", "import { Info, GripHorizontal } from 'lucide-react';\nimport { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';");
}

content = content.replace(
  '{/* Preview Area */}\n        <div className="flex-1 relative flex items-center justify-center rounded-xl bg-[#0f172a] shadow-inner overflow-hidden border border-zinc-800/80 transition-all duration-300">',
  `<PanelGroup direction="vertical" className="flex-1 h-full min-h-0">
          <Panel defaultSize={70} minSize={30} className="relative flex items-center justify-center rounded-xl bg-[#0f172a] shadow-inner overflow-hidden border border-zinc-800/80 transition-all duration-300">`
);

content = content.replace(
  '          {/* Breakpoint Indicator */}',
  '          </Panel>\n          <PanelResizeHandle className="h-6 flex items-center justify-center bg-transparent hover:bg-zinc-800/50 transition-colors cursor-row-resize group z-10 my-1"><div className="h-1 w-12 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors flex items-center justify-center"><GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /></div></PanelResizeHandle>\n          <Panel defaultSize={30} minSize={20} className="flex flex-col min-h-0">\n          {/* Breakpoint Indicator */}'
);

content = content.replace(
  '{/* Code Editor Area */}\n        <div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 shrink-0 z-10">',
  '{/* Code Editor Area */}\n        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 flex-1 min-h-0 z-10">'
);

content = content.replace(
  '              spellCheck="false"\n            />\n          </div>\n        </div>\n      </div>',
  '              spellCheck="false"\n            />\n          </div>\n        </div>\n        </Panel>\n        </PanelGroup>\n      </div>'
);

fs.writeFileSync('src/components/TailwindPlayground.tsx', content);
console.log('Patched TailwindPlayground');
