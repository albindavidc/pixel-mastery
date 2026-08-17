const fs = require('fs');

// We will replace Curriculum.tsx Tailwind note.
let curr = fs.readFileSync('src/components/Curriculum.tsx', 'utf8');

// Replace the tailwind note block:
//         {!module.id.startsWith('html-') && (
//           <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
//             <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
//             <div>
//               <span className="font-semibold block mb-1">Tailwind v4 Note</span>
//               Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like `-opacity` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
//             </div>
//           </div>
//         )}

curr = curr.replace(
  /\{\!module\.id\.startsWith\('html-'\) && \([\s\S]*?\}\)/,
  `{!module.id.startsWith('html-') && module.id !== 'js-dom-bom' && (
          <div className="my-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-3 text-sm text-indigo-200">
            <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Tailwind v4 Note</span>
              Most utility syntax remains identical to v3.4. v4 drops deprecated utilities (like \`-opacity\` suffix aliases) and changes how configuration is managed via CSS variables instead of tailwind.config.js.
            </div>
          </div>
        )}
        {module.id === 'js-dom-bom' && (
          <div className="my-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 flex gap-3 text-sm text-amber-200">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-1">Browser Compatibility Note</span>
              Most DOM and BOM APIs covered here are broadly supported across modern browsers. However, always check MDN for newer or less-consistently-supported methods before relying on them in production.
            </div>
          </div>
        )}`
);

fs.writeFileSync('src/components/Curriculum.tsx', curr);
console.log('Fixed Curriculum.tsx');

let jsModules = fs.readFileSync('src/data/jsModules.ts', 'utf8');
jsModules = jsModules.replace(
  /examples: \[\],/g,
  `examples: [
      { label: 'Toggle a class', classes: "document.querySelector('.box').classList.toggle('active')" },
      { label: 'Read the current URL', classes: "console.log(window.location.href)" },
      { label: 'Create and append an element', classes: "const el = document.createElement('p');\\nel.textContent = 'Hello!';\\ndocument.body.appendChild(el);" }
    ],`
);
// Make challenge description empty so Curriculum doesn't render it. We'll render it in DomBomJsCurriculum.
jsModules = jsModules.replace(
  /challenge: \{\s*description: 'Review the DOM & BOM concepts.',\s*targetClasses: \[\]\s*\}/g,
  `challenge: { description: '', targetClasses: [] }`
);
fs.writeFileSync('src/data/jsModules.ts', jsModules);
console.log('Fixed jsModules.ts');

