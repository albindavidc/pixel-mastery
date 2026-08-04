import fs from 'fs';
let content = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

const tailwindSection = `            <div>
              {!isCollapsed ? (
                <button 
                  onClick={() => setTailwindExpanded(!tailwindExpanded)} 
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">Tailwind</h3>
                  {tailwindExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 mt-6 text-center">Tailwind</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || tailwindExpanded) && tailwindModules.map(renderModuleButton)}
              </div>
            </div>`;

const cssSection = `            <div>
              {!isCollapsed ? (
                <button 
                  onClick={() => setCssExpanded(!cssExpanded)} 
                  className="w-full flex items-center justify-between px-3 py-1 mb-2 group text-left"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">CSS</h3>
                  {cssExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
              ) : (
                <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">CSS</h3>
              )}
              
              <div className="space-y-1">
                {(isCollapsed || cssExpanded) && cssModules.map(renderModuleButton)}
              </div>
            </div>`;


// Using regular expressions for replacement
const navMatch = content.match(/<nav className="space-y-4">[\s\S]*?<\/nav>/);
if (navMatch) {
    let navContent = navMatch[0];
    navContent = navContent.replace(cssSection, '%%CSS_SECTION%%');
    navContent = navContent.replace(tailwindSection, '%%TAILWIND_SECTION%%');
    navContent = navContent.replace('%%CSS_SECTION%%', tailwindSection);
    navContent = navContent.replace('%%TAILWIND_SECTION%%', cssSection);
    
    // Check if the mt-6 is on tailwind or css. Wait, if we swap, tailwind will have mb-4 text-center and css will have mb-4 mt-6 text-center
    navContent = navContent.replace(/mb-4 mt-6 text-center">Tailwind/g, 'mb-4 text-center">Tailwind');
    navContent = navContent.replace(/mb-4 text-center">CSS/g, 'mb-4 mt-6 text-center">CSS');

    content = content.replace(navMatch[0], navContent);
    fs.writeFileSync('src/components/Sidebar.tsx', content);
    console.log("Success");
} else {
    console.log("No match");
}

