const fs = require('fs');
let content = fs.readFileSync('src/components/Playground.tsx', 'utf8');

content = content.replace(
  /<Panel defaultSize=\{70\} minSize=\{30\} \n          className="flex-1/g,
  '<div \n          className="flex-1'
);

fs.writeFileSync('src/components/Playground.tsx', content);
