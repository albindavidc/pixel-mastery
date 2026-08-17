const fs = require('fs');

const files = [
  'src/components/TailwindPlayground.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/StylingPlayground.tsx',
  'src/components/Playground.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Strip imports
  content = content.replace("import { Info, GripHorizontal } from 'lucide-react';\nimport { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';", "import { Info } from 'lucide-react';");

  // Revert PanelGroup and Panel wrappers at the top of preview
  content = content.replace(
    /<PanelGroup direction="vertical" className="flex-1 h-full min-h-0">\s*<Panel defaultSize=\{70\} minSize=\{30\} className="relative flex items-center justify-center rounded-xl bg-\[#0f172a\] shadow-inner overflow-hidden border border-zinc-800\/80 transition-all duration-300">/g,
    '{/* Preview Area */}\n        <div className="flex-1 relative flex items-center justify-center rounded-xl bg-[#0f172a] shadow-inner overflow-hidden border border-zinc-800/80 transition-all duration-300">'
  );

  // StylingPlayground version
  content = content.replace(
    /<PanelGroup direction="vertical" className="flex-1 h-full min-h-0">\s*<Panel defaultSize=\{70\} minSize=\{30\} className="flex-1 w-full max-w-\[50%\] mx-auto min-h-\[80vh\] rounded-2xl border-2 border-slate-800\/60 overflow-hidden relative shadow-2xl shadow-black\/80 bg-zinc-900"/g,
    '{/* Preview Area */}\n        <div className="flex-1 w-full max-w-[50%] mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-zinc-900"'
  );

  // Look for the broken IframePreview closing area:
  //           />
  //         </Panel>
  //       <PanelResizeHandle...
  //       <Panel...
  
  content = content.replace(
    /<\/Panel>\s*<PanelResizeHandle[^>]*>[\s\S]*?<\/PanelResizeHandle>\s*<Panel[^>]*>/g,
    '</div>'
  );

  // We might have removed too many </div> previously, so it should be:
  //           />
  //         </div>
  //       </div>
  // Wait, let's see. If the original had two </div>s, we should put them back.
  content = content.replace(
    /\s*\/>\s*<\/Panel>/g,
    '\n            />\n          </div>\n        </div>'
  );
  
  // Actually, wait, let's just use string replace on the EXACT broken blocks I see.
  // In Playground.tsx:
  /*
            <IframePreview 
              key={previewMode}
              classes={playgroundClasses} 
              dark={playgroundState.dark} 
              width={getWidthValue()}
              hover={playgroundState.hover}
              focus={playgroundState.focus}
              active={playgroundState.active}
              previewMode={previewMode}
            />
          </Panel>
        <PanelResizeHandle ...>...</PanelResizeHandle>
        <Panel ...>
  */
  content = content.replace(
    /previewMode=\{previewMode\}\s*\/>\s*<\/Panel>\s*<PanelResizeHandle[^>]*>[\s\S]*?<\/PanelResizeHandle>\s*<Panel[^>]*>/g,
    'previewMode={previewMode}\n            />\n          </div>\n        </div>'
  );
  
  content = content.replace(
    /previewMode=\{activePreviewMode\}\s*\/>\s*\);\s*\}\)\(\)\}\s*<\/Panel>\s*<PanelResizeHandle[^>]*>[\s\S]*?<\/PanelResizeHandle>\s*<Panel[^>]*>/g,
    'previewMode={activePreviewMode}\n                />\n              );\n            })()}\n          </div>\n        </div>'
  );

  content = content.replace(
    /\{\/\* Code Editor Area \*\/\}\s*<div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black\/50 flex-1 min-h-0 z-10">/g,
    '{/* Code Editor Area */}\n        <div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 shrink-0 z-10">'
  );

  // Final tags
  content = content.replace(
    /<\/div>\s*<\/div>\s*<\/Panel>\s*<\/PanelGroup>\s*<\/div>/g,
    '</div>\n        </div>\n      </div>'
  );

  fs.writeFileSync(file, content);
}
console.log('Reverted 2');
