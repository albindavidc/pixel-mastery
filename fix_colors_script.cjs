const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

// Level 1
code = code.replace(/<span className="text-cyan-400">p-4<\/span>\s*<SvgBrace label="SPACE" colorClass="text-cyan-400"/, 
  '<span className="text-blue-400">p-4</span>\n                   <SvgBrace label="SPACE" colorClass="text-blue-400"');

code = code.replace(/<span className="text-fuchsia-400">text-white<\/span>\s*<SvgBrace label="TEXT" colorClass="text-fuchsia-400"/, 
  '<span className="text-amber-400">text-white</span>\n                   <SvgBrace label="TEXT" colorClass="text-amber-400"');

// Level 2
code = code.replace(/<span className="text-cyan-400">gap-2 px-4 py-2<\/span>\s*<SvgBrace label="SPACE" colorClass="text-cyan-400"/, 
  '<span className="text-blue-400">gap-2 px-4 py-2</span>\n                   <SvgBrace label="SPACE" colorClass="text-blue-400"');

code = code.replace(/<span className="text-fuchsia-400">text-white font-medium<\/span>\s*<SvgBrace label="TYPOGRAPHY" colorClass="text-fuchsia-400"/, 
  '<span className="text-amber-400">text-white font-medium</span>\n                   <SvgBrace label="TYPOGRAPHY" colorClass="text-amber-400"');

// Level 3
code = code.replace(/<span className="text-cyan-400">flex-1 min-w-\[200px\] p-6<\/span>\s*<SvgBrace label="FLEX · SIZE · SPACE" colorClass="text-cyan-400"/,
  '<span className="text-blue-400">flex-1 min-w-[200px] p-6</span>\n                     <SvgBrace label="FLEX · SIZE · SPACE" colorClass="text-blue-400"');

code = code.replace(/<SvgBrace label="LAYOUT" colorClass="text-blue-400" position="top" className="bottom-full mb-2" \/>/, 
  '<SvgBrace label="LAYOUT" colorClass="text-blue-400" position="top" className="bottom-full mb-2" />');

code = code.replace(/<span className="text-cyan-400">backdrop-blur-md shadow-xl<\/span>\s*<SvgBrace label="BEHAVIOUR" colorClass="text-cyan-400"/, 
  '<span className="text-amber-400">backdrop-blur-md shadow-xl</span>\n                     <SvgBrace label="EFFECTS & FILTERS" colorClass="text-amber-400"');

code = code.replace(/<span className="text-pink-400">hover:bg-black\/30<\/span>\s*<SvgBrace label="STATE" colorClass="text-pink-400"/, 
  '<span className="text-fuchsia-400">hover:bg-black/30</span>\n                     <SvgBrace label="STATE" colorClass="text-fuchsia-400"');

code = code.replace(/<SvgBrace label="VARIANTS" colorClass="text-fuchsia-400" position="top" className="bottom-full mb-2" \/>/, 
  '<SvgBrace label="VARIANTS" colorClass="text-fuchsia-400" position="top" className="bottom-full mb-2" />');

// Level 4
code = code.replace(/<span className="text-pink-400">hover:scale-105 hover:-translate-y-1 hover:shadow-xl<\/span>\s*<SvgBrace label="HOVER STATES" colorClass="text-pink-400"/, 
  '<span className="text-fuchsia-400">hover:scale-105 hover:-translate-y-1 hover:shadow-xl</span>\n                     <SvgBrace label="HOVER STATES" colorClass="text-fuchsia-400"');

code = code.replace(/<SvgBrace label="INTERACTIONS" colorClass="text-pink-400" position="top"/, 
  '<SvgBrace label="INTERACTIONS" colorClass="text-fuchsia-400" position="top"');

// Level 5
code = code.replace(/<span className="text-cyan-400">grid-cols-1<\/span>\s*<SvgBrace label="MOBILE" colorClass="text-cyan-400"/, 
  '<span className="text-blue-400">grid-cols-1</span>\n                     <SvgBrace label="MOBILE" colorClass="text-blue-400"');
code = code.replace(/<SvgBrace label="COLUMNS" colorClass="text-cyan-400" position="top"/, 
  '<SvgBrace label="COLUMNS" colorClass="text-blue-400" position="top"');

code = code.replace(/<span className="text-amber-400">w-full max-w-7xl mx-auto<\/span>\s*<SvgBrace label="CONTAINER" colorClass="text-amber-400"/, 
  '<span className="text-blue-400">w-full max-w-7xl mx-auto</span>\n                     <SvgBrace label="CONTAINER" colorClass="text-blue-400"');
code = code.replace(/<SvgBrace label="SIZING" colorClass="text-amber-400" position="top"/, 
  '<SvgBrace label="SIZING" colorClass="text-blue-400" position="top"');

// Level 6
code = code.replace(/<span className="text-fuchsia-400">font-sans text-4xl md:text-6xl font-extrabold<\/span>\s*<SvgBrace label="FONT & WEIGHT" colorClass="text-fuchsia-400"/, 
  '<span className="text-amber-400">font-sans text-4xl md:text-6xl font-extrabold</span>\n                     <SvgBrace label="FONT & WEIGHT" colorClass="text-amber-400"');
code = code.replace(/<SvgBrace label="TYPOGRAPHY" colorClass="text-fuchsia-400" position="top"/, 
  '<SvgBrace label="TYPOGRAPHY" colorClass="text-amber-400" position="top"');

code = code.replace(/<span className="text-cyan-400">tracking-tight leading-none text-balance<\/span>\s*<SvgBrace label="METRICS & WRAPPING" colorClass="text-cyan-400"/, 
  '<span className="text-amber-400">tracking-tight leading-none text-balance</span>\n                     <SvgBrace label="METRICS & WRAPPING" colorClass="text-amber-400"');
code = code.replace(/<SvgBrace label="READABILITY" colorClass="text-cyan-400" position="top"/, 
  '<SvgBrace label="READABILITY" colorClass="text-amber-400" position="top"');

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
