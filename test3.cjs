const fs = require('fs');
const content = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf-8');
const lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
   if(lines[i].includes('LEVEL 2') || lines[i].includes('LEVEL 3') || lines[i].includes('LEVEL 4')) {
      console.log("Found at " + (i+1) + ": " + lines[i]);
      // print previous and next few lines
      for(let j = i-3; j <= i+3; j++) {
         if (j !== i) console.log(j+1 + ": " + lines[j]);
      }
   }
}
