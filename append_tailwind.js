import fs from 'fs';

let content = fs.readFileSync('src/data/modules.ts', 'utf8');

const tailwindModule = `,
  {
    id: 'tailwind-flexbox-grid',
    category: 'tailwind',
    title: 'Flexbox & Grid',
    description: 'One and two-dimensional layout methods for arranging items.',
    content: 'Flexbox is essential for one-dimensional layouts (rows or columns), while Grid allows you to define both rows and columns. Use \`flex\` or \`grid\` to enable them.',
    examples: [
      { label: 'Flex Row', classes: 'flex flex-row gap-4 bg-slate-100 p-4' },
      { label: '3 Columns Grid', classes: 'grid grid-cols-3 gap-4 bg-slate-100 p-4' },
      { label: 'Center Content (Flex)', classes: 'flex justify-center items-center h-32 bg-slate-100' },
    ],
    challenge: {
      description: 'Create a flex container, stacked in a column, with items centered vertically and horizontally.',
      targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center'],
    }
  }
];`;

content = content.replace(/\];[\s]*$/, tailwindModule);

fs.writeFileSync('src/data/modules.ts', content);
