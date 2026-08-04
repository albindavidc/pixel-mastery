import fs from 'fs';

let content = fs.readFileSync('src/data/modules.ts', 'utf8');

content = content.replace(/id: '([^']+)',/g, "id: '$1',\n    category: 'css',");

fs.writeFileSync('src/data/modules.ts', content);
