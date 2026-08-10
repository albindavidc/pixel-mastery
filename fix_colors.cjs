const fs = require('fs');
let s = fs.readFileSync('src/data/stylingControlBar.ts', 'utf8');

const colors = require('tailwindcss/colors');
const output = {};
for (const [key, value] of Object.entries(colors)) {
  if (typeof value === 'object' && value['50']) {
    output[key] = value;
  }
}

// Add any missing from the original list just in case, though tailwind/colors should have them all.
// The array was:
// export const tailwindColors = [ ... ];
const arrRegex = /export const tailwindColors = \[\s*[\s\S]*?\];/;
s = s.replace(arrRegex, `export const tailwindColors: any = ${JSON.stringify(output, null, 2)};`);

fs.writeFileSync('src/data/stylingControlBar.ts', s, 'utf8');
