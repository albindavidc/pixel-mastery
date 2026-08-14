const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

const replacement = `               <span className="text-blue-400">&gt;Save &lt;/button&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Tailwind CSS Anatomy: Advanced (4-6)
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800 w-full sm:w-auto overflow-x-auto hide-scrollbar shrink-0">
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span><span className="font-semibold text-zinc-300">Layout</span> <span className="text-zinc-500 hidden md:inline">(display, size, space, border, ...)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span><span className="font-semibold text-zinc-300">Appearance</span> <span className="text-zinc-500 hidden lg:inline">(background, text, svg, effect, filter)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span><span className="font-semibold text-zinc-300">Behaviour</span> <span className="text-zinc-500 hidden xl:inline">(transform, transition, animation, interactivity)</span></div>
           <div className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-fuchsia-400 shrink-0"></span><span className="font-semibold text-zinc-300">Variants</span> <span className="text-zinc-500 hidden xl:inline">(state, responsive, dark mode)</span></div>
        </div>
      </div>
      <div className="flex flex-col gap-12 p-8 md:p-12 xl:p-16 overflow-hidden">

        {/* LEVEL 4: INTERACTIVE & ANIMATED */}`;

// In Level 3 there's ">Save </button></span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        {/* Divider */}\n        <div className=\"w-full h-px bg-zinc-800\"></div>\n\n        {/* LEVEL 4"
const regex = /<span className="text-blue-400">&gt;Save &lt;\/button&gt;<\/span>[\s\S]*?\{\/\* LEVEL 4: INTERACTIVE & ANIMATED \*\//;

if(regex.test(code)) {
    code = code.replace(regex, replacement);
} else {
    console.log("Could not find regex to replace!");
}

code = code.replace(
  '<h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 shrink-0">\n          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>\n          Tailwind CSS Element Anatomy\n        </h2>',
  '<h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 shrink-0">\n          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>\n          Tailwind CSS Anatomy: Core (1-3)\n        </h2>'
);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
