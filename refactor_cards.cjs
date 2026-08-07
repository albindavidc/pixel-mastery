const fs = require('fs');
const path = require('path');

const dir = 'src/components/showcase/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the render part in each category
  content = content.replace(
    /<CategorySection title="([^"]+)">\s*\{filtered\.map\(c => \(\s*<ComponentCard key=\{c\.name\} name=\{c\.name\} description=\{c\.description\} alsoIn=\{\(c as any\)\.alsoIn\}>\s*\{c\.render\(\)\}\s*<\/ComponentCard>\s*\)\)\}\s*<\/CategorySection>/g,
    `<CategorySection title="$1" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>`
  );
  
  // For specialized components, the title is dynamic
  content = content.replace(
    /<CategorySection title=\{`([^`]+)`\}>\s*\{filtered\.map\(c => \(\s*<ComponentCard key=\{c\.name\} name=\{c\.name\} description=\{c\.description\} alsoIn=\{\(c as any\)\.alsoIn\}>\s*\{c\.render\(\)\}\s*<\/ComponentCard>\s*\)\)\}\s*<\/CategorySection>/g,
    `<CategorySection title={\`$1\`} count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Refactoring cards complete.');
