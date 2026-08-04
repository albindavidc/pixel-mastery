import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Import TailwindPlayground
content = content.replace("import { Playground } from './components/Playground';", "import { Playground } from './components/Playground';\nimport { TailwindPlayground } from './components/TailwindPlayground';");

// Update the rendering logic
content = content.replace(
  "{(currentModuleId === 'flexbox-grid' || currentModuleId === 'tailwind-flexbox-grid') && (\n            <div className=\"h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10\">\n              <Playground />\n            </div>\n          )}",
  `{(currentModuleId === 'flexbox-grid') && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <Playground />
            </div>
          )}
          {(currentModuleId === 'tailwind-flexbox-grid') && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <TailwindPlayground />
            </div>
          )}`
);

fs.writeFileSync('src/App.tsx', content);
