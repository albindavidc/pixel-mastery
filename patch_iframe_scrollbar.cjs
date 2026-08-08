const fs = require('fs');

let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

// Replace the iframe scrollbar width from 3px to 6px
content = content.replace(/width: 3px; height: 3px;/g, 'width: 6px; height: 6px;');

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
