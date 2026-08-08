const fs = require('fs');

// Patch CodeEditorPreview.tsx
let codeEditor = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Align colors
codeEditor = codeEditor.replace('bg-[#141414]', 'bg-zinc-950');
codeEditor = codeEditor.replace('bg-zinc-200', 'bg-zinc-900 border-b border-zinc-800');
codeEditor = codeEditor.replace('bg-white shadow-2xl min-h-0', 'bg-white shadow-2xl min-h-0 border border-zinc-800'); // wait, it's already there
codeEditor = codeEditor.replace('className="mx-auto text-zinc-500 text-xs font-sans"', 'className="mx-auto text-zinc-400 text-xs font-sans"');

// scrollbar to editor
codeEditor = codeEditor.replace('className="flex-1 overflow-auto relative custom-prism-container"', 'className="flex-1 overflow-auto relative custom-prism-container scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"');

fs.writeFileSync('src/components/CodeEditorPreview.tsx', codeEditor);
