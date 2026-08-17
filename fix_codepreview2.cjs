const fs = require('fs');
let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');
content = content.replace(
  /\/>\s*<\/div>\s*<\/div>\s*\);\s*\}/,
  '/>\n      </Panel>\n    </PanelGroup>\n    </div>\n  );\n}'
);
fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);
