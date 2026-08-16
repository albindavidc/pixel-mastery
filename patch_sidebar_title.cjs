const fs = require('fs');
let code = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

code = code.replace('title={module.title}', 'title={displayTitle}');

fs.writeFileSync('src/components/Sidebar.tsx', code);
console.log('Patched Sidebar.tsx title attr');
