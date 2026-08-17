const fs = require('fs');
let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Replace the buggy PanelResizeHandle:
const oldHandle = `<PanelResizeHandle className="flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 transition-colors data-[resize-direction=horizontal]:w-4 data-[resize-direction=vertical]:h-4 data-[resize-direction=horizontal]:cursor-col-resize data-[resize-direction=vertical]:cursor-row-resize group border-zinc-800 data-[resize-direction=horizontal]:border-l data-[resize-direction=horizontal]:border-r data-[resize-direction=vertical]:border-t data-[resize-direction=vertical]:border-b z-10">
        <div className="flex items-center justify-center rounded-sm bg-zinc-700 group-hover:bg-indigo-500 transition-colors data-[resize-direction=horizontal]:w-1 data-[resize-direction=horizontal]:h-8 data-[resize-direction=vertical]:h-1 data-[resize-direction=vertical]:w-8">
           {isMobile ? <GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /> : <GripVertical className="w-3 h-3 text-zinc-500 group-hover:text-white" />}
        </div>
      </PanelResizeHandle>`;

const newHandle = `<PanelResizeHandle className={\`flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 transition-colors group border-zinc-800 z-10 \${isMobile ? "h-4 cursor-row-resize border-t border-b" : "w-4 cursor-col-resize border-l border-r"}\`}>
        <div className={\`flex items-center justify-center rounded-sm bg-zinc-700 group-hover:bg-indigo-500 transition-colors \${isMobile ? "h-1 w-8" : "w-1 h-8"}\`}>
           {isMobile ? <GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /> : <GripVertical className="w-3 h-3 text-zinc-500 group-hover:text-white" />}
        </div>
      </PanelResizeHandle>`;

content = content.replace(oldHandle, newHandle);
fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);

// Also for the other Playgrounds, they are always vertical, so they are fine with their current hardcoded styling:
// <PanelResizeHandle className="h-6 flex items-center justify-center bg-transparent hover:bg-zinc-800/50 transition-colors cursor-row-resize group z-10 my-1"><div className="h-1 w-12 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors flex items-center justify-center"><GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /></div></PanelResizeHandle>
// Actually wait! bg-transparent hover:bg-zinc-800/50 might cause visual issues with transparency over the absolute breakpoint indicator? Wait, the breakpoint indicator is absolute so it's probably below or above it. It's fine.
