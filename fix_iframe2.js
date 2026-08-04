import fs from 'fs';
let content = fs.readFileSync('src/components/IframePreview.tsx', 'utf8');

content = content.replace('h-[600px]', 'h-[400px]');
content = content.replace('[...Array(5)]', '[...Array(9)]');
content = content.replace(/<div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-cyan-500\/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-100 font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0">5<\/div>\s*/g, '');

fs.writeFileSync('src/components/IframePreview.tsx', content);
