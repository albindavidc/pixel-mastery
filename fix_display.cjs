const fs = require('fs');

let content = fs.readFileSync('src/data/modules.ts', 'utf8');
content = content.replace(
  "targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center'],\n    groupId: 'layout-group',",
  "targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center']\n    },\n    groupId: 'layout-group',"
);

fs.writeFileSync('src/data/modules.ts', content, 'utf8');
console.log('Fixed challenge closing brace');
