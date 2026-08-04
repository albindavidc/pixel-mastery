import fs from 'fs';

let content = fs.readFileSync('src/data/controlBar.ts', 'utf8');

// Replace the tailwind array with flex and grid arrays
const tailwindRegex = /tailwind:\s*\[[\s\S]*?\]\s*,\s*typography:/;

const newSection = `flex: [
    {
      group: 'Flex Container',
      properties: ['flex-direction', 'flex-wrap', 'flex', 'gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items']
    },
    {
      group: 'Flex Item',
      properties: ['flex-basis', 'flex-grow', 'flex-shrink', 'order', 'align-self', 'place-self']
    }
  ],
  grid: [
    {
      group: 'Grid Container',
      properties: ['grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'gap', 'justify-content', 'justify-items', 'align-content', 'align-items', 'place-content', 'place-items']
    },
    {
      group: 'Grid Item',
      properties: ['grid-column', 'grid-row', 'justify-self', 'align-self', 'place-self']
    }
  ],
  typography:`;

content = content.replace(tailwindRegex, newSection);

fs.writeFileSync('src/data/controlBar.ts', content);

