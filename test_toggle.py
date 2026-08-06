import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """        if (isSpecialWildcard) {
          // It's 'flex' or 'grid'. Add it, and remove the other mutually exclusive display classes
          let newClasses = playgroundClasses.split(' ').filter(c => c.trim() !== '');
          const displayClasses = ['block', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'flex', 'grid', 'hidden'];
          
          if (prop === 'flex') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'flex');
          } else if (prop === 'grid') {
            newClasses = newClasses.filter(c => !displayClasses.includes(c) || c === 'grid');
          }
          if (!newClasses.includes(prop)) {
            newClasses.push(prop);
          }
          setPlaygroundClasses(newClasses.join(' '));
        }"""
        
    if target in content:
        print("Found target")
    else:
        print("Not found")

patch_file("src/components/TailwindPlayground.tsx")
