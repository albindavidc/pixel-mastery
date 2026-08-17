const fs = require('fs');

function patchPlayground(file) {
  let content = fs.readFileSync(file, 'utf8');

  // Add imports
  if (!content.includes('react-resizable-panels')) {
    content = content.replace(
      "import { Info } from 'lucide-react';", 
      "import { Info, GripHorizontal } from 'lucide-react';\nimport { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';"
    );
  }

  // Preview wrapper
  content = content.replace(
    /\{\/\* Preview Area \*\/\}\s*<div className="flex-1 relative flex items-center justify-center rounded-xl bg-\[#0f172a\] shadow-inner overflow-hidden border border-zinc-800\/80 transition-all duration-300">/,
    `<PanelGroup direction="vertical" className="flex-1 h-full min-h-0">\n        <Panel defaultSize={70} minSize={30} className="relative flex items-center justify-center rounded-xl bg-[#0f172a] shadow-inner overflow-hidden border border-zinc-800/80 transition-all duration-300">`
  );

  // Breakpoint Indicator & Editor
  // It looks like:
  //         </div>
  //         {/* Breakpoint Indicator */}
  // We need to replace the `</div>` that closes the Preview Area.
  content = content.replace(
    /<\/div>\s*\{\/\* Breakpoint Indicator \*\/\}/,
    `</Panel>\n        <PanelResizeHandle className="h-6 flex items-center justify-center bg-transparent hover:bg-zinc-800/50 transition-colors cursor-row-resize group z-10 my-1"><div className="h-1 w-12 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors flex items-center justify-center"><GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /></div></PanelResizeHandle>\n        <Panel defaultSize={30} minSize={20} className="flex flex-col min-h-0">\n        {/* Breakpoint Indicator */}`
  );

  // Editor Area wrapper
  content = content.replace(
    /\{\/\* Code Editor Area \*\/\}\s*<div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black\/50 shrink-0 z-10">/,
    `{/* Code Editor Area */}\n        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex flex-col shadow-xl shadow-black/50 flex-1 min-h-0 z-10">`
  );

  // Final closing tags
  content = content.replace(
    /spellCheck="false"\n\s*\/>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>/,
    `spellCheck="false"\n            />\n          </div>\n        </div>\n        </Panel>\n      </PanelGroup>\n      </div>`
  );

  fs.writeFileSync(file, content);
  console.log('Patched ' + file);
}

function patchCodeEditorPreview() {
  let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

  // Fix what went wrong. I had already inserted the PanelGroup and Panel on the top, but the bottom was missed.
  // We need to replace:
  //       </div>
  //     </div>
  //     {/* Preview Pane */}
  //     <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl min-h-0">
  
  content = content.replace(
    /<\/div>\s*<\/div>\s*\{\/\* Preview Pane \*\/\}\s*<div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl min-h-0">/,
    `        </div>\n      </Panel>\n      <PanelResizeHandle className="flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 transition-colors data-[resize-direction=horizontal]:w-4 data-[resize-direction=vertical]:h-4 data-[resize-direction=horizontal]:cursor-col-resize data-[resize-direction=vertical]:cursor-row-resize group border-zinc-800 data-[resize-direction=horizontal]:border-l data-[resize-direction=horizontal]:border-r data-[resize-direction=vertical]:border-t data-[resize-direction=vertical]:border-b z-10">\n        <div className="flex items-center justify-center rounded-sm bg-zinc-700 group-hover:bg-indigo-500 transition-colors data-[resize-direction=horizontal]:w-1 data-[resize-direction=horizontal]:h-8 data-[resize-direction=vertical]:h-1 data-[resize-direction=vertical]:w-8">\n           {isMobile ? <GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /> : <GripVertical className="w-3 h-3 text-zinc-500 group-hover:text-white" />}\n        </div>\n      </PanelResizeHandle>\n      {/* Preview Pane */}\n      <Panel defaultSize={50} minSize={20} className="flex flex-col bg-white min-h-0 rounded-xl shadow-2xl">`
  );

  // Bottom wrapper
  // We need to replace:
  //       </iframe>
  //     </div>
  //   </div>
  // );
  // with:
  //       </iframe>
  //     </Panel>
  //   </PanelGroup>
  //   </div>
  // );
  content = content.replace(
    /<\/iframe>\s*<\/div>\s*<\/div>\s*\);\s*\}/,
    `        </iframe>\n      </Panel>\n    </PanelGroup>\n    </div>\n  );\n}`
  );

  fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);
  console.log('Patched CodeEditorPreview');
}

['src/components/TailwindPlayground.tsx', 'src/components/LayoutPlayground.tsx', 'src/components/StylingPlayground.tsx', 'src/components/Playground.tsx'].forEach(patchPlayground);
patchCodeEditorPreview();
