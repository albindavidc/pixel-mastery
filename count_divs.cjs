const fs = require('fs');
let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');
const returnStartIdx = content.indexOf('return (');
const jsxContent = content.substring(returnStartIdx);
let openCount = (jsxContent.match(/<div/g) || []).length;
let closeCount = (jsxContent.match(/<\/div>/g) || []).length;
console.log("Open:", openCount, "Close:", closeCount);
