const fs = require('fs');

const logic = `    let formattedValue = value.trim();
    if (!formattedValue.startsWith('basis-')) {
      if (formattedValue.startsWith('[') || formattedValue.startsWith('(')) {
        formattedValue = \`basis-\${formattedValue}\`;
      } else if (/^\\d+\\/\\d+$/.test(formattedValue) || /^\\d+(\\.\\d+)?$/.test(formattedValue) || ['auto', 'full', 'px', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'].includes(formattedValue)) {
        formattedValue = \`basis-\${formattedValue}\`;
      } else {
        formattedValue = \`basis-[\${formattedValue.replace(/\\s+/g, '_')}]\`;
      }
    }`;

function patchFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const search = `    const formattedValue = value.includes('var(') || value.includes('calc(') || value.includes('[') ? \`basis-[\${value.replace(/\\[|\\]/g, '')}]\` : \`basis-\${value}\`;`;
  content = content.replace(search, logic);
  fs.writeFileSync(file, content);
}

patchFile('src/components/Playground.tsx');
patchFile('src/components/TailwindPlayground.tsx');
