const fs = require('fs');
let code = fs.readFileSync('src/components/effects/MaskPanel.tsx', 'utf8');

// Replace w-full with flex-1 in renderStopSubRow
code = code.replace(
  '<div className="w-full flex flex-col gap-2 mt-2 pl-2 border-l border-zinc-800/50">',
  '<div className="flex-1 flex flex-col gap-2 mt-2 pl-2 border-l border-zinc-800/50">'
);

// We need to replace pairs of renderStopSubRow
const regex = /\{renderStopSubRow\('([^']+)'\)\}\s*\{renderStopSubRow\('([^']+)'\)\}/g;

code = code.replace(regex, (match, fromStr, toStr) => {
  return `<div className="flex flex-row items-stretch gap-4 w-full">
                   {renderStopSubRow('${fromStr}')}
                   <div className="w-px bg-zinc-700/50 self-stretch my-2 mt-4"></div>
                   {renderStopSubRow('${toStr}')}
                 </div>`;
});

fs.writeFileSync('src/components/effects/MaskPanel.tsx', code);
console.log('Patched MaskPanel');
