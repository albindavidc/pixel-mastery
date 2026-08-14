const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

// Fix the extra closing braces
code = code.replace(/\{\/\* LEVEL 4: INTERACTIVE & ANIMATED \*\/\}\}/g, '{/* LEVEL 4: INTERACTIVE & ANIMATED */}');

// The first container closes around line 139. Let's fix the extra div there.
// We have:
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//
//     <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">

code = code.replace(/              <\/div>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/div>\n    <\/div>\n\n    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">/,
`              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">`);

// Also fix the end of file
code = code.replace(/    <\/div>\n    <\/div>\n  \);\n\}/, `    </div>\n    </div>\n  );\n}`);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
