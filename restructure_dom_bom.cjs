const fs = require('fs');

let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');

const codeEditorPart = `      <div className="mb-6 h-[500px] flex flex-col">
        <CodeEditorPreview
          code={code}
          onChange={setCode}
          onReset={() => { setCode(defaultCode); setActiveMode(null); }}
          onTry={() => { setCode(''); setActiveMode('try'); }}
          activeMode={activeMode}
          iframeRef={iframeRef}
          title="DOM & BOM.js"
          language="html"
          themeColor="blue"
        />
      </div>`;

// 1. Remove the old code editor part
content = content.replace(codeEditorPart, '');

// 2. Change the return root
const oldReturnStart = `  return (
    <div className="flex flex-col gap-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl mb-6">`;

const newReturnStart = `  return (
    <div className="flex flex-col h-full bg-zinc-950 overflow-y-auto">
      <div className="flex-1 min-h-[500px] flex flex-col shrink-0">
        <CodeEditorPreview
          code={code}
          onChange={setCode}
          onReset={() => { setCode(defaultCode); setActiveMode(null); }}
          onTry={() => { setCode(''); setActiveMode('try'); }}
          activeMode={activeMode}
          iframeRef={iframeRef}
          title="DOM & BOM.js"
          language="html"
          themeColor="blue"
        />
      </div>
      <div className="bg-[#141414] border-t border-zinc-800 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)] flex-none">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 w-full py-12 px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">`;

content = content.replace(oldReturnStart, newReturnStart);

// 3. Fix the closing tags at the bottom.
// Currently it ends with:
/*
      </div>
    </div>
  );
}
*/
const oldEnd = `      </div>
    </div>
  );
}`;
const newEnd = `        </div>
      </div>
    </div>
  );
}`;

content = content.replace(oldEnd, newEnd);
fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', content);
console.log("Restructured DomBomJsCurriculum.tsx successfully!");
