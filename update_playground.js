import fs from 'fs';
let content = fs.readFileSync('src/components/Playground.tsx', 'utf8');
content = content.replace(
  "const previewModes = ['layouts', 'typography', 'colors', 'components'];",
  "const previewModes = ['layouts', 'typography', 'colors', 'components', 'tailwind'];"
);
fs.writeFileSync('src/components/Playground.tsx', content);
