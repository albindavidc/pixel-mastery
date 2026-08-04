import fs from 'fs';
let content = fs.readFileSync('src/store.tsx', 'utf8');

content = content.replace("useState<string>(modules[0].id)", "useState<string>('tailwind-flexbox-grid')");
content = content.replace("'flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full h-full'", "'flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full h-full'");

fs.writeFileSync('src/store.tsx', content);
