const fs = require('fs');
const filepath = 'src/components/showcase/categories/OverlayAndPopups.tsx';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace(
  /name: 'Tooltip',[\s\S]*?render: \(\) => \([\s\S]*?<div className="flex flex-col items-center gap-2">[\s\S]*?<div className="bg-zinc-800 text-white text-\[10px\] px-2 py-1 rounded shadow-lg relative">[\s\S]*?Save changes[\s\S]*?<div className="absolute -bottom-1 left-1\/2 -translate-x-1\/2 w-2 h-2 bg-zinc-800 rotate-45"><\/div>[\s\S]*?<\/div>[\s\S]*?<button className="px-4 py-1.5 bg-indigo-500 text-sm text-white rounded font-medium">Save<\/button>[\s\S]*?<\/div>[\s\S]*?\)/,
  `name: 'Tooltip',
      description: 'A small text box that appears on hover to explain an element.',
      render: () => (
        <div className="flex flex-col items-center justify-center pt-8">
          <div className="relative group flex flex-col items-center">
            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
              Save changes
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></div>
            </div>
            <button className="px-4 py-1.5 bg-indigo-500 text-sm text-white rounded font-medium">Hover me</button>
          </div>
        </div>
      )`
);

content = content.replace(
  /name: 'Popover',[\s\S]*?render: \(\) => \([\s\S]*?<div className="flex flex-col items-center gap-2">[\s\S]*?<div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 w-40 relative">[\s\S]*?<div className="text-xs font-semibold text-white mb-1">Dimensions<\/div>[\s\S]*?<div className="text-\[10px\] text-zinc-400">Set the width and height of the element\.<\/div>[\s\S]*?<div className="absolute -bottom-1.5 left-1\/2 -translate-x-1\/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700 rotate-45"><\/div>[\s\S]*?<\/div>[\s\S]*?<HelpCircle className="w-5 h-5 text-zinc-500 cursor-pointer" \/>[\s\S]*?<\/div>[\s\S]*?\)/,
  `name: 'Popover',
      description: 'A transient view that appears above other content on click.',
      render: () => (
        <div className="flex flex-col items-center justify-center pt-16">
          <div className="relative group flex flex-col items-center">
            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 w-40 z-50">
              <div className="text-xs font-semibold text-white mb-1">Dimensions</div>
              <div className="text-[10px] text-zinc-400">Set the width and height of the element.</div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700 rotate-45"></div>
            </div>
            <HelpCircle className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-zinc-300" />
          </div>
        </div>
      )`
);

content = content.replace(
  /name: 'Confirm Popup',[\s\S]*?render: \(\) => \([\s\S]*?<div className="relative inline-block"><button className="px-4 py-2 bg-indigo-500 text-white rounded text-sm">Save<\/button><div className="absolute top-full mt-2 left-0 w-48 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3"><p className="text-xs text-zinc-300 mb-3">Save changes to document\?<\/p><div className="flex justify-end gap-2"><button className="px-2 py-1 bg-zinc-800 rounded text-xs">No<\/button><button className="px-2 py-1 bg-indigo-500 text-white rounded text-xs">Yes<\/button><\/div><\/div><\/div>[\s\S]*?\)/,
  `name: 'Confirm Popup',
      description: 'Component for Confirm Popup',
      render: () => (
        <div className="relative inline-block group">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded text-sm">Save</button>
          <div className="absolute top-full mt-2 left-0 w-48 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto">
            <p className="text-xs text-zinc-300 mb-3">Save changes to document?</p>
            <div className="flex justify-end gap-2">
              <button className="px-2 py-1 bg-zinc-800 rounded text-xs">No</button>
              <button className="px-2 py-1 bg-indigo-500 text-white rounded text-xs">Yes</button>
            </div>
          </div>
        </div>
      )`
);

fs.writeFileSync(filepath, content, 'utf8');
