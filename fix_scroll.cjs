const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

code = code.replace(/hide-scrollbar flex justify-start lg:justify-center/g, 'hide-scrollbar text-center whitespace-nowrap');
code = code.replace(/<div className="relative flex text-/g, '<div className="relative inline-flex text-left text-');

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
