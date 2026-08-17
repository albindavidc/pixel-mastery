const fs = require('fs');

let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');

const returnStartIdx = content.indexOf('return (');
const jsxContent = content.substring(returnStartIdx);

let openCount = (jsxContent.match(/<div/g) || []).length;
let closeCount = (jsxContent.match(/<\/div>/g) || []).length;

console.log("Open:", openCount, "Close:", closeCount);

const diff = openCount - closeCount;

if (diff > 0) {
  let newEnd = "\n";
  for (let i = 0; i < diff; i++) {
    newEnd += "      </div>\n";
  }
  newEnd += "    );\n  }";

  // Replace the old end. Let's find the last ')' and '}'
  const lastParen = content.lastIndexOf(');');
  const lastBrace = content.lastIndexOf('}');
  
  // We'll just replace everything from the last </div> before `);` to the end.
  content = content.replace(/<\/div>\s*\]?\s*\)?\s*;\s*}\s*$/, newEnd);
  
  // Actually regex replacement might be fragile. 
  // Let's just append the missing </div> tags before `);`
  let fixedContent = content.substring(0, lastParen);
  let toAdd = "";
  for(let i=0; i<diff; i++) {
      toAdd += "</div>\n";
  }
  fixedContent += toAdd + ");\n}\n";
  fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', fixedContent);
  console.log("Added " + diff + " closing divs");
} else {
  console.log("No missing divs");
}
