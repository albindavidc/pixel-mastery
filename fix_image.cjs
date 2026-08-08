const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

content = content.replace(
  /\\\`<img src="https:\/\/images\.unsplash\.com\/photo-1506744626753-eba7bc3622ce\?auto=format&fit=crop&w=400&q=80" alt="Beautiful landscape" class="rounded-lg shadow-md max-w-full" \/>\\\\n\\\`;/g,
  '`<img src="https://images.unsplash.com/photo-1506744626753-eba7bc3622ce?auto=format&fit=crop&w=400&q=80" alt="Beautiful landscape" class="rounded-lg shadow-md max-w-full" />\\n`;'
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
