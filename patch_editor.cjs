const fs = require('fs');

// Patch CodeEditorPreview.tsx
let codeEditor = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Align colors
codeEditor = codeEditor.replace('bg-[#141414]', 'bg-zinc-950');
codeEditor = codeEditor.replace('bg-zinc-200 border-b border-zinc-300', 'bg-zinc-900 border-b border-zinc-800');
codeEditor = codeEditor.replace('className="mx-auto text-zinc-500 text-xs font-sans"', 'className="mx-auto text-zinc-400 text-xs font-sans font-semibold tracking-wider"');

// Replace standard dots color if they were different for preview header?
// Preview Header dots: 'bg-zinc-400'
codeEditor = codeEditor.replace(/bg-zinc-400/g, 'bg-zinc-600');

// scrollbar to editor
codeEditor = codeEditor.replace('className="flex-1 overflow-auto relative custom-prism-container"', 'className="flex-1 overflow-auto relative custom-prism-container scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"');

fs.writeFileSync('src/components/CodeEditorPreview.tsx', codeEditor);
