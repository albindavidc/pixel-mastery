const fs = require('fs');

const files = [
  'src/components/TailwindPlayground.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/StylingPlayground.tsx',
  'src/components/Playground.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Let's do this cleanly. We will replace the entire render block of the playground area.
  // Actually, wait, let's just use a simple state machine to parse and replace the tags.
  // The structure is ALWAYS:
  // 1. <div className="flex-1 overflow-hidden relative flex flex-col bg-zinc-950 border-t border-zinc-800 p-6 min-h-[600px]">
  // 2.   <div className="flex-1 relative flex items-center justify-center ...
  // 3.     ... IframePreview ...
  // 4.   </div> (or </Panel>)
  // 5.   {/* Breakpoint Indicator */}
  // 6.   ...
  // 7.   </div> (or Code Editor Area)
  
  // Let's just find the main wrapper:
  // <div className="flex-1 overflow-hidden relative flex flex-col bg-zinc-950 border-t border-zinc-800 p-6 min-h-[600px]">
  
  const mainWrapperRegex = /<div className="flex-1 overflow-hidden relative flex flex-col bg-zinc-950 border-t border-zinc-800 p-6 min-h-\[600px\]">/g;
  content = content.replace(mainWrapperRegex, '<div className="flex-1 overflow-hidden relative flex flex-col bg-zinc-950 border-t border-zinc-800 p-6 min-h-[600px]"><PanelGroup direction="vertical" className="flex-1 h-full min-h-0">');

  // We need to replace the opening of the preview area with Panel
  const previewRegex = /<div\s+className="[^"]*flex-1 relative flex items-center justify-center[^"]*"/g;
  let match = content.match(previewRegex);
  if (match) {
     content = content.replace(match[0], match[0].replace('<div', '<Panel defaultSize={70} minSize={30}'));
  } else {
     // styling playground has:
     // <div className="flex-1 w-full max-w-[50%] mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-zinc-900"
     const stylingRegex = /<div\s+className="flex-1 w-full max-w-\[50%\] mx-auto min-h-\[80vh\][^"]*"/g;
     match = content.match(stylingRegex);
     if (match) {
       content = content.replace(match[0], match[0].replace('<div', '<Panel defaultSize={70} minSize={30}'));
     }
  }

  // Then the PanelResizeHandle before {/* Breakpoint Indicator */}
  // Wait, I already replaced the `</div>\n        {/* Breakpoint Indicator */}` with `</Panel>...`
  // So the closing of the Panel is already there! Let's check if there's `</Panel>` in the file.
  if (!content.includes('</Panel>')) {
     console.error("Missing </Panel> in", file);
  }

  // And the final closing tags need </PanelGroup> added before the last </div> of the wrapper
  // I already replaced it with `</Panel>\n      </PanelGroup>\n      </div>` in robust_patch.cjs.
  
  fs.writeFileSync(file, content);
}
