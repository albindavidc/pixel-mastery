const fs = require('fs');
let code = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf8');

// For pt-16 (Levels 1, 2)
code = code.replace(/<div className="w-full overflow-x-auto pb-32 pt-16 hide-scrollbar flex justify-start lg:justify-center">\s*<div className="relative flex text-base sm:text-lg lg:text-xl font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">/g, 
`<div className="w-full overflow-x-auto pb-32 pt-16 hide-scrollbar px-4 sm:px-8">
            <div className="w-max min-w-full flex justify-center">
              <div className="relative flex text-base sm:text-lg lg:text-xl font-mono font-medium tracking-tight w-max px-4 sm:px-10 shrink-0">`);

// For pt-24 (Levels 3, 4, 5, 6)
code = code.replace(/<div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar flex justify-start lg:justify-center">\s*<div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max mx-auto px-10 shrink-0">/g, 
`<div className="w-full overflow-x-auto pb-32 pt-24 hide-scrollbar px-4 sm:px-8">
            <div className="w-max min-w-full flex justify-center">
              <div className="relative flex text-sm sm:text-base lg:text-lg font-mono font-medium tracking-tight w-max px-4 sm:px-10 shrink-0">`);

// Now add the missing closing div for all of them
code = code.replace(/&gt;<\/div&gt;<\/span>\s*<\/div>\s*<\/div>/g, 
`&gt;</div></span>
              </div>
            </div>
          </div>`);

code = code.replace(/&gt;Hello &lt;\/div&gt;<\/span>\s*<\/div>\s*<\/div>/g, 
`&gt;Hello &lt;/div&gt;</span>
              </div>
            </div>
          </div>`);

code = code.replace(/&gt;Save &lt;\/button&gt;<\/span>\s*<\/div>\s*<\/div>/g, 
`&gt;Save &lt;/button&gt;</span>
              </div>
            </div>
          </div>`);

code = code.replace(/&gt;Hero&lt;\/h1&gt;<\/span>\s*<\/div>\s*<\/div>/g, 
`&gt;Hero&lt;/h1&gt;</span>
              </div>
            </div>
          </div>`);

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', code, 'utf8');
