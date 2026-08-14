const fs = require('fs');
let content = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf-8');

// The original content in Level 4, 5, 6 is:
// text-sm sm:text-base lg:text-lg
// We should replace those to text-xs sm:text-sm lg:text-base first
content = content.replaceAll(
  'text-sm sm:text-base lg:text-lg font-mono', 
  'text-xs sm:text-sm lg:text-base font-mono'
);

// The original content in Level 1, 2 is:
// text-base sm:text-lg lg:text-xl
// We should replace those to text-sm sm:text-base lg:text-lg
content = content.replaceAll(
  'text-base sm:text-lg lg:text-xl font-mono', 
  'text-sm sm:text-base lg:text-lg font-mono'
);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', content, 'utf-8');
