const fs = require('fs');

const files = ['src/components/TailwindPlayground.tsx', 'src/components/LayoutPlayground.tsx', 'src/components/Playground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Align colors
  content = content.replace(/bg-\[#0B1120\]/g, 'bg-zinc-900');
  content = content.replace(/bg-\[#0f172a\]\/80/g, 'bg-zinc-800/80');
  
  // Update textarea
  content = content.replace(/resize-none min-h-\[100px\]/g, 'resize-none min-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent');
  
  fs.writeFileSync(file, content, 'utf8');
});
