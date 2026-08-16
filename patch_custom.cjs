const fs = require('fs');
let code = fs.readFileSync('src/components/effects/VisualEffectsPlayground.tsx', 'utf8');

const oldCustom = `  const handleCustomApply = (variant: string) => {
    const classes = playgroundClasses.split(' ').filter(c => c.trim());
    setPlaygroundClasses([...classes, variant].join(' '));
  };`;

const newCustom = `  const handleCustomApply = (variant: string) => {
    let classes = playgroundClasses.split(' ').filter(c => c.trim());
    
    let isMaskStop = false;
    let prefix = '';
    if (variant.includes('-from-') || variant.includes('-to-')) {
       isMaskStop = true;
       // Handle cases where the variant is like mask-linear-from-[20%]
       // the prefix should still be mask-linear-from
       const prefixMatch = variant.match(/^(mask-.*-(?:from|to))-/);
       if (prefixMatch) {
         prefix = prefixMatch[1];
       } else if (variant.includes('[')) {
         prefix = variant.substring(0, variant.indexOf('[') - 1);
       } else if (variant.includes('(')) {
         prefix = variant.substring(0, variant.indexOf('(') - 1);
       }
    }

    if (isMaskStop && prefix) {
       classes = classes.filter(c => !c.startsWith(prefix + '-'));
    }
    
    setPlaygroundClasses([...classes, variant].join(' '));
  };`;

code = code.replace(oldCustom, newCustom);
fs.writeFileSync('src/components/effects/VisualEffectsPlayground.tsx', code);
console.log('Patched CustomApply');
