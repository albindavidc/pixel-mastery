import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """      const displayClasses = ['block', 'inline', 'inline-block', 'hidden', 'inline-flex', 'inline-grid'];
      if (displayClasses.includes(prop)) {
         newClasses = newClasses.filter(c => !displayClasses.includes(c) && c !== 'flex' && c !== 'grid');
         newClasses.push(prop);
         // if changing display mode, maybe close any selected 'flex' or 'grid' row 2?
         if (selectedProperty === 'flex' || selectedProperty === 'grid') {
            setSelectedProperty(null);
         }
      }"""

    replacement = """      const displayClasses = ['block', 'inline', 'inline-block', 'hidden', 'inline-flex', 'inline-grid'];
      if (displayClasses.includes(prop)) {
         newClasses = newClasses.filter(c => !displayClasses.includes(c) && c !== 'flex' && c !== 'grid');
         
         // If switching to a non-flex/grid display class, remove flex/grid specific variants to avoid leftover styles
         if (prop === 'block' || prop === 'inline' || prop === 'inline-block' || prop === 'hidden') {
            const flexGridWildcards = ['justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*', 'grow', 'shrink', 'basis-*'];
            flexGridWildcards.forEach(wc => {
              if (wc.endsWith('-*')) {
                const prefix = wc.replace('*', '');
                newClasses = newClasses.filter(c => !c.startsWith(prefix));
              } else {
                newClasses = newClasses.filter(c => c !== wc);
              }
            });
         }
         
         newClasses.push(prop);
         
         // if changing display mode, maybe close any selected 'flex' or 'grid' row 2?
         if (selectedProperty === 'flex' || selectedProperty === 'grid') {
            setSelectedProperty(null);
         }
      }"""

    if target in content:
        content = content.replace(target, replacement)
        
        # Also fix toggling off flex/grid leaving it naked
        target2 = """          // For 'flex' and 'grid', clicking again removes it and its variants
          let newClasses = playgroundClasses.split(' ');
          const variants = wildcards[prop] || [];
          newClasses = newClasses.filter(c => c !== prop && !variants.includes(c));
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());"""
          
        replacement2 = """          // For 'flex' and 'grid', clicking again removes it and its variants
          let newClasses = playgroundClasses.split(' ');
          const variants = wildcards[prop] || [];
          newClasses = newClasses.filter(c => c !== prop && !variants.includes(c));
          newClasses.push('block'); // Default back to block
          setPlaygroundClasses(newClasses.join(' ').replace(/\s+/g, ' ').trim());"""
          
        if target2 in content:
            content = content.replace(target2, replacement2)
            with open(filepath, "w") as f:
                f.write(content)
            print("Patched TailwindPlayground property click")
        else:
            print("Target 2 not found")
    else:
        print("Target 1 not found")

patch_file("src/components/TailwindPlayground.tsx")
