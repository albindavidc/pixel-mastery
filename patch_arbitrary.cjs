const fs = require('fs');

const logic = `    let formattedValue = value.trim();
    const prefix = selectedProperty === 'flex-basis' ? 'basis-' : 'flex-';
    
    if (!formattedValue.startsWith(prefix)) {
      if (formattedValue.startsWith('[') || formattedValue.startsWith('(')) {
        formattedValue = \`\${prefix}\${formattedValue}\`;
      } else if (
        /^\\d+\\/\\d+$/.test(formattedValue) || 
        /^\\d+(\\.\\d+)?$/.test(formattedValue) || 
        ['auto', 'full', 'px', 'none', 'initial', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'].includes(formattedValue)
      ) {
        formattedValue = \`\${prefix}\${formattedValue}\`;
      } else {
        formattedValue = \`\${prefix}[\${formattedValue.replace(/\\s+/g, '_')}]\`;
      }
    }
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    newClasses = newClasses.filter(c => !c.startsWith(prefix));
    newClasses.push(formattedValue);
    setPlaygroundClasses(newClasses.join(' '));`;

function patchFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // replace handleCustomArbitraryValue content
  const oldFuncRegex = /const handleCustomArbitraryValue = \([^)]+\) => \{\s*if \(\!selectedProperty \|\| selectedProperty !== 'flex-basis'\) return;[\s\S]*?setPlaygroundClasses\(newClasses\.join\(' '\)\);\s*\};/;
  const newFunc = `const handleCustomArbitraryValue = (value: string) => {
    if (!selectedProperty || !['flex-basis', 'flex'].includes(selectedProperty)) return;
    if (!value) return;
${logic}
  };`;
  content = content.replace(oldFuncRegex, newFunc);
  
  // replace `{selectedProperty === 'flex-basis' && (`
  const buttonRegex = /\{selectedProperty === 'flex-basis' && \(/g;
  content = content.replace(buttonRegex, `{['flex-basis', 'flex'].includes(selectedProperty) && (`);
  
  // replace `!wildcards['flex-basis']?.includes(c)`
  content = content.replace(/\{selectedProperty === 'flex-basis' && Array\.from\(activeClassesSet\)\.filter\(c => c\.startsWith\('basis-'\) && !wildcards\['flex-basis'\]\?\.includes\(c\)\)\.map\(variant => \(/g, 
    `{['flex-basis', 'flex'].includes(selectedProperty) && Array.from(activeClassesSet).filter(c => c.startsWith(selectedProperty === 'flex-basis' ? 'basis-' : 'flex-') && !wildcards[selectedProperty]?.includes(c)).map(variant => (`);

  fs.writeFileSync(file, content);
}

patchFile('src/components/Playground.tsx');
patchFile('src/components/TailwindPlayground.tsx');
