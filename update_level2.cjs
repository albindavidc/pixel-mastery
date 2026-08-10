const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

// Replace "layout + styling" with "layout + appearance"
code = code.replace(/layout \+ styling/g, 'layout + appearance');

// In Level 2
const level2Old = `<div className="relative flex">
                   <span className="text-blue-400">flex</span>
                   <SvgBrace label="LAYOUT" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-cyan-400">items-center gap-2 px-4 py-2</span>
                   <SvgBrace label="ALIGNMENT + SPACE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                 </div>`;

const level2New = `<div className="relative flex">
                   <span className="text-blue-400">flex items-center</span>
                   <SvgBrace label="DISPLAY + ALIGNMENT" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
                 </div>
                 <span>&nbsp;</span>
                 
                 <div className="relative flex">
                   <span className="text-cyan-400">gap-2 px-4 py-2</span>
                   <SvgBrace label="SPACE" colorClass="text-cyan-400" position="bottom" className="top-full mt-2" />
                 </div>`;

code = code.replace(level2Old, level2New);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
