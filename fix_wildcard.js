import fs from 'fs';

let content = fs.readFileSync('src/components/Playground.tsx', 'utf8');

// Replace `const isWildcard = prop.endsWith('-*');` with `const isWildcard = prop.endsWith('-*') || (prop in wildcards && prop !== 'flex' && prop !== 'grid');`
content = content.replace(/const isWildcard = prop\.endsWith\('-\*'\);/g, "const isWildcard = prop.endsWith('-*') || (prop in wildcards && prop !== 'flex' && prop !== 'grid');");

fs.writeFileSync('src/components/Playground.tsx', content);
