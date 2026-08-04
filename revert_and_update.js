import fs from 'fs';

let content = fs.readFileSync('src/data/controlBar.ts', 'utf8');

const newFlexboxGrid = `{
      group: 'Flexbox & Grid',
      properties: [
        'flex-basis',
        'flex-direction',
        'flex-wrap',
        'flex',
        'flex-grow',
        'flex-shrink',
        'order',
        'grid-template-columns',
        'grid-column',
        'grid-template-rows',
        'grid-row',
        'grid-auto-flow',
        'grid-auto-columns',
        'grid-auto-rows',
        'gap',
        'justify-content',
        'justify-items',
        'justify-self',
        'align-content',
        'align-items',
        'align-self',
        'place-content',
        'place-items',
        'place-self'
      ]
    }`;

const oldFlexGrid = `{
      group: 'Flex/Grid',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*']
    }`;

// Replace newFlexboxGrid inside layouts back to oldFlexGrid
content = content.replace(newFlexboxGrid, oldFlexGrid);

// Add tailwind section
const tailwindSection = `
  tailwind: [
    ${newFlexboxGrid}
  ],
`;

content = content.replace('  typography: [', tailwindSection + '  typography: [');

fs.writeFileSync('src/data/controlBar.ts', content);
