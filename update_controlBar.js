import fs from 'fs';

let content = fs.readFileSync('src/data/controlBar.ts', 'utf8');

// Replace the Flex/Grid group
const oldFlexGrid = `{
      group: 'Flex/Grid',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*']
    }`;

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

content = content.replace(oldFlexGrid, newFlexboxGrid);

// Append new wildcards to the wildcards object
// First, we need to remove some old wildcards that overlap, or we can just append them (the new ones don't have -* mostly)
// We will replace the wildcards for flex, grid, gap, etc.
content = content.replace(/'flex': \[\'flex-row\'.*?\],/g, "'flex': ['flex-1', 'flex-auto', 'flex-initial', 'flex-none'],");
content = content.replace(/'grid': \[\'grid-flow-row\'.*?\],/g, "'grid': ['grid-flow-row', 'grid-flow-col', 'grid-flow-row-dense', 'grid-flow-col-dense'],"); // Not strictly needed but keep it

// Add the new ones before the closing brace of wildcards
const newWildcards = `
  'flex-basis': ['basis-0', 'basis-px', 'basis-auto', 'basis-full', 'basis-1/2', 'basis-1/3', 'basis-2/3', 'basis-1/4', 'basis-3/4', 'basis-1/5', 'basis-2/5', 'basis-3/5', 'basis-4/5', 'basis-full'],
  'flex-direction': ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
  'flex-wrap': ['flex-wrap', 'flex-wrap-reverse', 'flex-nowrap'],
  'flex-grow': ['grow', 'grow-0'],
  'flex-shrink': ['shrink', 'shrink-0'],
  'order': ['order-first', 'order-last', 'order-none', 'order-1', 'order-2', 'order-3', 'order-4', 'order-5', 'order-6', 'order-7', 'order-8', 'order-9', 'order-10', 'order-11', 'order-12'],
  'grid-template-columns': ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12', 'grid-cols-none'],
  'grid-column': ['col-auto', 'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-full', 'col-start-1', 'col-start-2', 'col-end-1', 'col-end-2'],
  'grid-template-rows': ['grid-rows-1', 'grid-rows-2', 'grid-rows-3', 'grid-rows-4', 'grid-rows-5', 'grid-rows-6', 'grid-rows-none'],
  'grid-row': ['row-auto', 'row-span-1', 'row-span-2', 'row-span-3', 'row-span-4', 'row-span-full', 'row-start-1', 'row-start-2', 'row-end-1', 'row-end-2'],
  'grid-auto-flow': ['grid-flow-row', 'grid-flow-col', 'grid-flow-row-dense', 'grid-flow-col-dense'],
  'grid-auto-columns': ['auto-cols-auto', 'auto-cols-min', 'auto-cols-max', 'auto-cols-fr'],
  'grid-auto-rows': ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],
  'gap': ['gap-0', 'gap-px', 'gap-0.5', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8', 'gap-10', 'gap-12', 'gap-16', 'gap-x-0', 'gap-x-4', 'gap-x-8', 'gap-y-0', 'gap-y-4', 'gap-y-8'],
  'justify-content': ['justify-normal', 'justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly', 'justify-stretch'],
  'justify-items': ['justify-items-start', 'justify-items-end', 'justify-items-center', 'justify-items-stretch'],
  'justify-self': ['justify-self-auto', 'justify-self-start', 'justify-self-center', 'justify-self-end', 'justify-self-stretch'],
  'align-content': ['content-normal', 'content-start', 'content-center', 'content-end', 'content-between', 'content-around', 'content-evenly', 'content-stretch', 'content-baseline'],
  'align-items': ['items-start', 'items-center', 'items-end', 'items-baseline', 'items-stretch'],
  'align-self': ['self-auto', 'self-start', 'self-center', 'self-end', 'self-stretch', 'self-baseline'],
  'place-content': ['place-content-start', 'place-content-center', 'place-content-end', 'place-content-between', 'place-content-around', 'place-content-evenly', 'place-content-stretch'],
  'place-items': ['place-items-start', 'place-items-center', 'place-items-end', 'place-items-stretch', 'place-items-baseline'],
  'place-self': ['place-self-auto', 'place-self-start', 'place-self-center', 'place-self-end', 'place-self-stretch', 'place-self-baseline']
`;

content = content.replace(/};\s*$/, newWildcards + '\n};');

fs.writeFileSync('src/data/controlBar.ts', content);
