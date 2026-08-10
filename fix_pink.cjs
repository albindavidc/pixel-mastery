const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

code = code.replace(/<span className="text-pink-400">shadow-md<\/span>\s*<SvgBrace label="EFFECT" colorClass="text-pink-400"/, 
  '<span className="text-amber-400">shadow-md</span>\n                   <SvgBrace label="EFFECT" colorClass="text-amber-400"');

code = code.replace(/<span className="text-pink-400">hover:bg-indigo-600 focus:outline-none disabled:cursor-not-allowed<\/span>\s*<SvgBrace label="STATE" colorClass="text-pink-400"/, 
  '<span className="text-fuchsia-400">hover:bg-indigo-600 focus:outline-none disabled:cursor-not-allowed</span>\n                     <SvgBrace label="STATE" colorClass="text-fuchsia-400"');

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
