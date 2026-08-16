const fs = require('fs');
let code = fs.readFileSync('src/components/effects/VisualEffectsPlayground.tsx', 'utf8');

const oldHandle = `  const handleVariantClick = (variant: string) => {
    const classes = playgroundClasses.split(' ').filter(c => c.trim());
    const baseVariant = variant.split('-')[0]; // Simple toggle logic
    
    if (activeClassesSet.has(variant)) {
      setPlaygroundClasses(classes.filter(c => c !== variant).join(' '));
    } else {
      // Very naive logic to add the class. Real logic in StylingPlayground is complex.
      // We will just append it.
      setPlaygroundClasses([...classes.filter(c => !c.startsWith(baseVariant) || variant.startsWith('mask')), variant].join(' '));
    }
  };`;

const newHandle = `  const handleVariantClick = (variant: string) => {
    let classes = playgroundClasses.split(' ').filter(c => c.trim());
    
    if (activeClassesSet.has(variant)) {
      setPlaygroundClasses(classes.filter(c => c !== variant).join(' '));
      return;
    }

    let isMaskStop = false;
    let prefix = '';
    if (variant.includes('-from-') || variant.includes('-to-')) {
       isMaskStop = true;
       prefix = variant.substring(0, variant.lastIndexOf('-'));
    }

    if (isMaskStop) {
       classes = classes.filter(c => !c.startsWith(prefix + '-'));
       classes.push(variant);
    } else {
       const baseVariant = variant.split('-')[0];
       classes = classes.filter(c => !c.startsWith(baseVariant) || variant.startsWith('mask'));
       classes.push(variant);
    }
    setPlaygroundClasses(classes.join(' '));
  };`;

code = code.replace(oldHandle, newHandle);
fs.writeFileSync('src/components/effects/VisualEffectsPlayground.tsx', code);
console.log('Patched VisualEffectsPlayground');
