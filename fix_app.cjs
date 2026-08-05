const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Use string replace for exact match
const badString = "{(currentModuleId === 'tailwind-flexbox-grid') && viewMode !== 'guidelines' && (/**";
content = content.replace(badString, "/**");

fs.writeFileSync('src/App.tsx', content, 'utf8');
