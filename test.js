const fs = require('fs');
const content = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf-8');
const lines = content.split('\n');
let divCount = 0;
for(let i=0; i<lines.length; i++) {
   if(lines[i].includes('<div')) {
      console.log((i+1) + ": " + lines[i].trim());
   }
}
