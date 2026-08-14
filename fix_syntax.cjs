const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

// Add wrapper to return statement
code = code.replace(/return \(\n    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col mb-6">/, 
`return (
    <div className="flex flex-col gap-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">`);

// Fix the extra `}` and extra closing div
code = code.replace(/\{\/\* LEVEL 4: INTERACTIVE & ANIMATED \*\/\}/, '{/* LEVEL 4: INTERACTIVE & ANIMATED */}');

// The second container was created with mb-6. Let's remove mb-6 from it.
code = code.replace(/<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col mb-6">/,
`<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">`);

// At the end of the file, we need an extra `</div>` for the new wrapper
code = code.replace(/    <\/div>\n  \);\n\}/, `    </div>\n    </div>\n  );\n}`);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
