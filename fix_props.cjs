const fs = require('fs');
const files = [
  'src/components/TailwindPlayground.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/StylingPlayground.tsx',
  'src/components/Playground.tsx',
  'src/components/CodeEditorPreview.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/direction="vertical"/g, 'orientation="vertical"');
  content = content.replace(/direction="horizontal"/g, 'orientation="horizontal"');
  content = content.replace(/direction=\{isMobile \? "vertical" : "horizontal"\}/g, 'orientation={isMobile ? "vertical" : "horizontal"}');
  fs.writeFileSync(file, content);
}
console.log('Fixed props');
