const fs = require('fs');
let code = fs.readFileSync('src/data/htmlModules.ts', 'utf8');

// Parse the content of html-beginner
let beginner = code.match(/content: \`({.*?})\`/s)[1];
let bData = JSON.parse(beginner);

// Add to root tags
if (!bData.tags.includes('<dl>')) {
  bData.tags.push('<dl>', '<dt>', '<dd>');
}

// Add to Lists category
let listsCat = bData.categories.find(c => c.name === 'Lists');
if (listsCat && !listsCat.tags.includes('<dl>')) {
  listsCat.tags.push('<dl>', '<dt>', '<dd>');
}

let newBeginner = JSON.stringify(bData);
code = code.replace(/content: \`{.*}\`/, 'content: `' + newBeginner + '`');

fs.writeFileSync('src/data/htmlModules.ts', code);
console.log('Patched htmlModules.ts');
