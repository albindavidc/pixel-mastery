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
  content = content.replace(
    /import \{ Panel, PanelGroup, PanelResizeHandle \} from 'react-resizable-panels';/g,
    "import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';"
  );
  fs.writeFileSync(file, content);
}
console.log('Fixed imports');
