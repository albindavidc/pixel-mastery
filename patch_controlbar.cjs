const fs = require('fs');

const file = 'src/data/controlBar.ts';
let content = fs.readFileSync(file, 'utf8');

const search = `'flex-basis': [
    'basis-0', 'basis-px', 'basis-auto', 'basis-full', 
    'basis-1/2', 'basis-1/3', 'basis-2/3', 'basis-1/4', 'basis-3/4', 'basis-1/5', 'basis-2/5', 'basis-3/5', 'basis-4/5',
    'basis-1/6', 'basis-5/6', 'basis-1/12', 'basis-5/12', 'basis-7/12', 'basis-11/12',
    'basis-3xs', 'basis-2xs', 'basis-xs', 'basis-sm', 'basis-md', 'basis-lg', 'basis-xl', 'basis-2xl', 'basis-3xl', 'basis-4xl', 'basis-5xl', 'basis-6xl', 'basis-7xl'
  ],`;
const replace = `'flex-basis': [
    'basis-0', 'basis-px', 'basis-auto', 'basis-full', 
    'basis-3xs', 'basis-2xs', 'basis-xs', 'basis-sm', 'basis-md', 'basis-lg', 'basis-xl', 'basis-2xl', 'basis-3xl', 'basis-4xl', 'basis-5xl', 'basis-6xl', 'basis-7xl'
  ],`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
