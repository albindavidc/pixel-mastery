const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('.editor-scrollbar')) {
  css += `
.editor-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.editor-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.editor-scrollbar::-webkit-scrollbar-thumb {
  background: #52525b; /* zinc-600 */
  border-radius: 4px;
}
.editor-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #71717a; /* zinc-500 */
}
.editor-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #52525b transparent;
}
`;
  fs.writeFileSync('src/index.css', css);
}

const files = [
  'src/components/CodeEditorPreview.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/Playground.tsx',
  'src/components/TailwindPlayground.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent/g, 'editor-scrollbar');
  fs.writeFileSync(file, content);
});

