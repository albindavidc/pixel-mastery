const fs = require('fs');

const content = fs.readFileSync('src/data/stylingModules.ts', 'utf8');

const newContent = content.replace(
`      targetClasses: ['shadow-lg', 'shadow-indigo-500/40', 'backdrop-blur-md']
    },
  {
    id: 'tailwind-styling-svg',`,
`      targetClasses: ['shadow-lg', 'shadow-indigo-500/40', 'backdrop-blur-md']
    },
    groupId: 'styling-group',
    groupTitle: 'Appearance'
  },
  {
    id: 'tailwind-styling-svg',`);

fs.writeFileSync('src/data/stylingModules.ts', newContent);
console.log('Fixed syntax!');
