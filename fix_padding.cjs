const fs = require('fs');
let content = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf-8');
const lines = content.split('\n');

for(let i=0; i<lines.length; i++) {
    if (lines[i].includes('LEVEL 3: ADVANCED')) {
        console.log("Found Level 3 at line " + (i+1));
        for(let j=i-5; j<=i+5; j++) {
            console.log(j+1 + ": " + lines[j]);
        }
    }
}

for(let i=0; i<lines.length; i++) {
    if (lines[i].includes('Tailwind CSS Anatomy: Advanced (4-6)')) {
        console.log("Found Container 2 at line " + (i+1));
        for(let j=i-10; j<=i+5; j++) {
            console.log(j+1 + ": " + lines[j]);
        }
    }
}
