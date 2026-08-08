const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

content = content.replace(
  /<CodeEditorPreview[\s\S]*?language="html"\n      \/>/,
  `<CodeEditorPreview
        code={code}
        onChange={setCode}
        onReset={() => setCode(getDefaultCode(activeCategory))}
        iframeRef={iframeRef}
        title={activeCatObj ? \`\${activeCatObj.name}.html\` : "index.html"}
        language="html"
        themeColor={activeCatObj ? activeCatObj.color : "indigo"}
      />`
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
