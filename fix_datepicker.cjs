const fs = require('fs');

const filepath = 'src/components/showcase/categories/FormAndDataEntry.tsx';
let content = fs.readFileSync(filepath, 'utf8');

const demoComponent = `
function DatePickerDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full max-w-[240px]">
      <div 
        className="w-full bg-zinc-950 border border-indigo-500 rounded-md py-2 pl-10 pr-3 text-sm text-zinc-100 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>2024-05-15</span>
      </div>
      <CalendarIcon className="absolute left-3 top-2.5 w-4 h-4 text-indigo-400 pointer-events-none" />
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 z-10">
          <div className="flex justify-between items-center mb-3">
            <button className="text-zinc-400 hover:text-white">&lt;</button>
            <div className="text-sm font-medium text-white">May 2024</div>
            <button className="text-zinc-400 hover:text-white">&gt;</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} className="text-[10px] text-zinc-500">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 31}, (_, i) => i + 1).map(d => (
              <button 
                key={d} 
                className={\`w-6 h-6 rounded-full text-xs flex items-center justify-center \${
                  d === 15 ? 'bg-indigo-500 text-white' : 'text-zinc-300 hover:bg-zinc-800'
                }\`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`;

if (!content.includes('function DatePickerDemo')) {
  content = content.replace(
    /export function useFormAndDataEntryComponents/,
    demoComponent + '\nexport function useFormAndDataEntryComponents'
  );
}

content = content.replace(
  /name: 'Date Picker',[\s\S]*?render: \(\) => \([\s\S]*?<div className="relative w-full max-w-\[240px\]">[\s\S]*?<\/div>\s*\)\s*\},/m,
  `name: 'Date Picker',\n      description: 'A field for selecting a specific date with a calendar.',\n      render: () => <DatePickerDemo />\n    },`
);

fs.writeFileSync(filepath, content, 'utf8');
