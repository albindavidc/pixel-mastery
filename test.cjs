const fs = require('fs');
const s = fs.readFileSync('src/data/stylingControlBar.ts', 'utf8');
const textRegex = /text:\s*\[([\s\S]*?)\]\s*,?\s*$/m;
const match = textRegex.exec(s);
if(match) {
  const textArray = match[1];
  const groupMatches = textArray.match(/group:\s*'([^']+)'/g);
  console.log(groupMatches);
}
