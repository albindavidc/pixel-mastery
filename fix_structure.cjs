const fs = require('fs');

// 1. App.tsx: Add DomBomJsCurriculum to the playground area
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  "import { HtmlPlayground } from './components/HtmlPlayground';",
  "import { HtmlPlayground } from './components/HtmlPlayground';\\nimport { DomBomJsCurriculum } from './components/DomBomJsCurriculum';"
);
app = app.replace(
  "{currentModuleId.startsWith('html-') && viewMode !== 'guidelines' && viewMode !== 'components' && (",
  "{currentModuleId === 'js-dom-bom' && viewMode !== 'guidelines' && viewMode !== 'components' && (\\n            <div className=\\\"min-h-[1500px] h-[150vh] border-b border-zinc-800 flex flex-col shrink-0 relative z-10\\\">\\n              <DomBomJsCurriculum key={currentModuleId} />\\n            </div>\\n          )}\\n          {currentModuleId.startsWith('html-') && viewMode !== 'guidelines' && viewMode !== 'components' && ("
);
fs.writeFileSync('src/App.tsx', app);
console.log("Updated App.tsx");

// 2. Curriculum.tsx: Remove DomBomJsCurriculum
let curr = fs.readFileSync('src/components/Curriculum.tsx', 'utf8');
curr = curr.replace("import { DomBomJsCurriculum } from './DomBomJsCurriculum';", "");
curr = curr.replace(
  "{module.id === 'js-dom-bom' && (\\n             <div className=\\\"mt-8 mb-6 not-prose\\\">\\n               <DomBomJsCurriculum />\\n             </div>\\n          )}",
  ""
);
fs.writeFileSync('src/components/Curriculum.tsx', curr);
console.log("Updated Curriculum.tsx");

