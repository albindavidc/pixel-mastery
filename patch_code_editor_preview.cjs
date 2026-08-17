const fs = require('fs');

let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Add imports
if (!content.includes('react-resizable-panels')) {
  content = content.replace("import { RotateCcw, Wand2 } from 'lucide-react';", "import { RotateCcw, Wand2, GripVertical, GripHorizontal } from 'lucide-react';\nimport { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';");
}

// Add isMobile state
if (!content.includes('isMobile')) {
  content = content.replace(
    'const editorExtensions = React.useMemo(',
    `const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const editorExtensions = React.useMemo(`
  );
}

// Replace layout
content = content.replace(
  '<div className="flex-1 p-6 flex flex-col lg:flex-row gap-6 min-h-0">',
  '<div className="flex-1 p-6 min-h-0 flex">'
);

content = content.replace(
  '{/* Editor Pane */}\n      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl min-h-0">',
  `<PanelGroup direction={isMobile ? "vertical" : "horizontal"} className="flex-1 rounded-xl overflow-hidden shadow-2xl min-h-0 border border-zinc-800">
      {/* Editor Pane */}
      <Panel defaultSize={50} minSize={20} className="flex flex-col bg-zinc-950 min-h-0">`
);

content = content.replace(
  '        </div>\n      </div>\n      {/* Preview Pane */}\n      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl min-h-0">',
  `        </div>
      </Panel>
      <PanelResizeHandle className="flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 transition-colors data-[resize-direction=horizontal]:w-3 data-[resize-direction=vertical]:h-3 data-[resize-direction=horizontal]:cursor-col-resize data-[resize-direction=vertical]:cursor-row-resize group border-zinc-800 data-[resize-direction=horizontal]:border-l data-[resize-direction=horizontal]:border-r data-[resize-direction=vertical]:border-t data-[resize-direction=vertical]:border-b z-10">
        <div className="flex items-center justify-center rounded-sm bg-zinc-700 group-hover:bg-indigo-500 transition-colors data-[resize-direction=horizontal]:w-1 data-[resize-direction=horizontal]:h-8 data-[resize-direction=vertical]:h-1 data-[resize-direction=vertical]:w-8">
           {isMobile ? <GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /> : <GripVertical className="w-3 h-3 text-zinc-500 group-hover:text-white" />}
        </div>
      </PanelResizeHandle>
      {/* Preview Pane */}
      <Panel defaultSize={50} minSize={20} className="flex flex-col bg-white min-h-0">`
);

content = content.replace(
  '        </iframe>\n      </div>\n    </div>\n  );\n}',
  '        </iframe>\n      </Panel>\n    </PanelGroup>\n    </div>\n  );\n}'
);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);
console.log('Patched CodeEditorPreview');
