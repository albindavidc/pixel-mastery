const fs = require('fs');

const content = fs.readFileSync('src/data/stylingModules.ts', 'utf8');

// The objects are inside the `export const stylingModules: Module[] = [` array.
// Find the start and end of the SVG module and the Effects module.
// They are separated by commas.

// Because the file is large, let's just parse the text.
// Split the file on `  },` which separates the modules.
// Or we can just use a regex/indexOf.

const svgIndex = content.indexOf(`  {\n    id: 'tailwind-styling-svg',`);
const effectsIndex = content.indexOf(`  {\n    id: 'tailwind-styling-effects',`);

if (svgIndex !== -1 && effectsIndex !== -1) {
    const endOfSvg = content.indexOf(`  }`, svgIndex) + 3;
    const endOfEffects = content.indexOf(`  }`, effectsIndex) + 3;
    
    // It looks like there's a comma between them:
    // `  },\n  {\n    id: 'tailwind-styling-effects',`
    
    // We can extract them exactly.
    let svgBlock = content.substring(svgIndex, endOfSvg);
    let effectsBlock = content.substring(effectsIndex, endOfEffects);

    // Swap them in the content string
    let newContent = content.substring(0, svgIndex) + 
                     effectsBlock + 
                     ",\n" + 
                     svgBlock + 
                     content.substring(endOfEffects);
                     
    // Wait, let's fix any comma issues at the end.
    // Replace the two blocks entirely using a simpler logic.
    // The structure is:
    // svgBlock
    // ,
    // effectsBlock
    
    const block1ToBlock2 = content.substring(svgIndex, endOfEffects);
    
    // Replace that segment with effectsBlock + "," + svgBlock
    const swapped = effectsBlock + ",\n" + svgBlock;
    const finalContent = content.replace(block1ToBlock2, swapped);
    
    fs.writeFileSync('src/data/stylingModules.ts', finalContent);
    console.log('Swapped successfully!');
} else {
    console.log('Could not find modules.');
}
