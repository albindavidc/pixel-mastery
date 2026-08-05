const fs = require('fs');

let content = fs.readFileSync('src/data/modules.ts', 'utf8');

const startIndex = content.indexOf('examples: [');
const challengeIndex = content.indexOf('challenge: {', startIndex);
const endIndex = content.lastIndexOf('],', challengeIndex) + 2;

const newExamples = `examples: [
      { label: 'Border Box', classes: 'box-border p-8 size-48 bg-indigo-500/20 border-8 border-indigo-500 shadow-2xl rounded-2xl flex items-center justify-center' },
      { label: 'Content Box', classes: 'box-content p-8 size-48 bg-emerald-500/20 border-8 border-emerald-500 shadow-2xl rounded-2xl flex items-center justify-center' },
      { label: 'Block', classes: 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl' },
      { label: 'Inline Block', classes: 'inline-block p-6 w-48 bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl' },
      { label: 'Hidden', classes: 'hidden p-6 w-48 bg-rose-500/20 border-4 border-rose-500 rounded-2xl shadow-xl' }
    ],
    `;

content = content.substring(0, startIndex) + newExamples + content.substring(challengeIndex);
fs.writeFileSync('src/data/modules.ts', content, 'utf8');
console.log('Fixed modules.ts manually by index');
