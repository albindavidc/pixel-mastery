const fs = require('fs');
const path = require('path');

const dir = 'src/components/showcase/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (file === 'SpecializedComponents.tsx') {
    content = content.replace(
      /export function SpecializedComponents\(\{ searchQuery, activeDomain \}: \{ searchQuery: string, activeDomain: string \}\) \{/,
      'export function SpecializedComponents({ searchQuery, activeDomain, filterList }: { searchQuery: string, activeDomain: string, filterList?: string[] }) {'
    );
    content = content.replace(
      /const filtered = domainComponents\.filter\(c => matchSearch\(c\.name, searchQuery\)\);/,
      'const filtered = domainComponents.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));'
    );
  } else {
    content = content.replace(
      /export function ([A-Za-z0-9_]+)\(\{ searchQuery \}: \{ searchQuery: string \}\) \{/,
      'export function $1({ searchQuery, filterList }: { searchQuery: string, filterList?: string[] }) {'
    );
    content = content.replace(
      /const filtered = components\.filter\(c => matchSearch\(c\.name, searchQuery\)\);/,
      'const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase().includes(f.toLowerCase()))));'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Refactoring complete.');
