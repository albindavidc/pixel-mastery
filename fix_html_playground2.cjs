const fs = require('fs');

let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const badCSS = `               color: black;
               /* Scrollbar */
               ::-webkit-scrollbar { width: 3px; height: 3px; }
               ::-webkit-scrollbar-track { background: transparent; }
               ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
               ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
               * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }
             }`;

const goodCSS = `               color: black;
             }
             /* Scrollbar */
             ::-webkit-scrollbar { width: 3px; height: 3px; }
             ::-webkit-scrollbar-track { background: transparent; }
             ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
             ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
             * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }`;

content = content.replace(badCSS, goodCSS);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
