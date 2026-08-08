const fs = require('fs');
const filepath = 'src/components/showcase/categories/Navigation.tsx';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace(
  /name: 'Dropdown Menu',[\s\S]*?render: \(\) => \([\s\S]*?<div className="flex flex-col gap-1 items-start">[\s\S]*?<button className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-md text-sm text-white">[\s\S]*?Options <ChevronDown className="w-3 h-3 text-zinc-400" \/>[\s\S]*?<\/button>[\s\S]*?<div className="w-32 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg p-1 mt-1 ml-2">[\s\S]*?<div className="h-6 bg-zinc-800 rounded mb-1"><\/div>[\s\S]*?<div className="h-6 hover:bg-zinc-800 rounded"><\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?\)/,
  `name: 'Dropdown Menu',
      description: 'A contextual menu attached to a specific trigger element.',
      render: () => (
        <div className="relative group inline-block">
          <button className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-md text-sm text-white">
            Options <ChevronDown className="w-3 h-3 text-zinc-400" />
          </button>
          <div className="absolute top-full left-0 mt-1 w-32 bg-zinc-900 border border-zinc-700 rounded-md shadow-xl p-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto">
             <div className="px-2 py-1 text-xs text-white hover:bg-zinc-800 rounded cursor-pointer mb-1">Settings</div>
             <div className="px-2 py-1 text-xs text-white hover:bg-zinc-800 rounded cursor-pointer">Profile</div>
          </div>
        </div>
      )`
);

fs.writeFileSync(filepath, content, 'utf8');
