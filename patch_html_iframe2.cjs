const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf-8');

content = content.replace(
  /<body>/,
  '<body class="prose prose-slate max-w-none">'
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf-8');
