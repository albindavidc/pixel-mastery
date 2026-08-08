const fs = require('fs');

let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

// Inject scrollbar styles into the iframe
const scrollbarStyles = `
            ::-webkit-scrollbar { width: 4px; height: 4px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
            * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }
`;

content = content.replace(
  '               color: black; \n             }',
  '               color: black; \n             }\n' + scrollbarStyles
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content);
