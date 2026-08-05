const fs = require('fs');

const files = ['src/components/Playground.tsx', 'src/components/TailwindPlayground.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (!content.includes('handleCustomArbitraryValue')) {
    const handleVariantClickCode = `
  const handleVariantClick = (variant: string) => {
    if (!selectedProperty) return;
    
    // Replace any existing variant from the same property
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    const variantsForProp = wildcards[selectedProperty] || [];
    
    // Custom filter for basis arbitrary values
    if (selectedProperty === 'flex-basis') {
      newClasses = newClasses.filter(c => !c.startsWith('basis-'));
    } else {
      newClasses = newClasses.filter(c => !variantsForProp.includes(c));
    }
    
    // If not already active (toggle behavior on variants too if they match)
    const wasActive = playgroundClasses.split(' ').includes(variant);
    if (!wasActive) {
      newClasses.push(variant);
    }
    
    setPlaygroundClasses(newClasses.join(' '));
  };
  
  const handleCustomArbitraryValue = (value: string) => {
    if (!selectedProperty || selectedProperty !== 'flex-basis') return;
    if (!value) return;
    
    const formattedValue = value.includes('var(') || value.includes('calc(') || value.includes('[') ? \`basis-[\${value.replace(/\\[|\\]/g, '')}]\` : \`basis-\${value}\`;
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    newClasses = newClasses.filter(c => !c.startsWith('basis-'));
    newClasses.push(formattedValue);
    setPlaygroundClasses(newClasses.join(' '));
  };`;

    const searchHandle = `  const handleVariantClick = (variant: string) => {
    if (!selectedProperty) return;
    
    // Replace any existing variant from the same property
    let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
    const variantsForProp = wildcards[selectedProperty] || [];
    
    newClasses = newClasses.filter(c => !variantsForProp.includes(c));
    
    // If not already active (toggle behavior on variants too if they match)
    const wasActive = playgroundClasses.split(' ').includes(variant);
    if (!wasActive) {
      newClasses.push(variant);
    }
    
    setPlaygroundClasses(newClasses.join(' '));
  };`;

    content = content.replace(searchHandle, handleVariantClickCode);

    const inputUi = `              {selectedProperty === 'flex-basis' && (
                <div className="flex items-center gap-1.5 ml-2 border-l border-zinc-800/50 pl-2">
                  <input
                    type="text"
                    placeholder="e.g. 10px, [10px]"
                    className="w-32 px-2 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded-md text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleCustomArbitraryValue(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => setShowBasisModal(true)}
                    className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors border bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20 flex items-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Custom Values
                  </button>
                </div>
              )}`;
    
    const searchButton = `              {selectedProperty === 'flex-basis' && (
                <button
                  onClick={() => setShowBasisModal(true)}
                  className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors border bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20 flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  Custom Values
                </button>
              )}`;

    content = content.replace(searchButton, inputUi);
    fs.writeFileSync(file, content);
  }
});
