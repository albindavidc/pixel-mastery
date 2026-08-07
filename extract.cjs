const fs = require('fs');
const path = require('path');

const dir = 'src/components/showcase/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
const categories = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract category title
  const titleMatch = content.match(/title=\{?`?([^`"}]+)`?\}?/);
  const catTitle = titleMatch ? titleMatch[1] : file.replace('.tsx', '');
  
  // Extract component names
  const names = [];
  const nameRegex = /name:\s*'([^']+)'/g;
  let match;
  while ((match = nameRegex.exec(content)) !== null) {
    names.push(match[1]);
  }
  
  categories.push({ id: file.replace('.tsx', '').toLowerCase(), title: catTitle, components: names });
}

fs.writeFileSync('categories_data.json', JSON.stringify(categories, null, 2));
console.log('Done extraction');
