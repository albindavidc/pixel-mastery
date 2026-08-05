const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /\{\(currentModuleId\.startsWith\('tailwind-layout'\)\) && viewMode !== 'guidelines' && \(/,
  "{(currentModuleId.startsWith('tailwind-layout') && currentModuleId !== 'tailwind-layout-display') && viewMode !== 'guidelines' && ("
);

content = content.replace(
  /\{\(currentModuleId === 'tailwind-flexbox-grid'\) && viewMode !== 'guidelines' && \(/,
  "{(currentModuleId === 'tailwind-flexbox-grid' || currentModuleId === 'tailwind-layout-display') && viewMode !== 'guidelines' && ("
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('reverted App.tsx');
