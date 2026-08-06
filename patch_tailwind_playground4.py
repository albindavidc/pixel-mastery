import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  const activeClassesSet = new Set(playgroundClasses.split(' '));
  const activeControlData = controlBarData[previewMode as keyof typeof controlBarData] || controlBarData.layouts || [];"""

    replacement = """  const activeClassesSet = new Set(playgroundClasses.split(' '));
  let activeControlData = controlBarData[previewMode as keyof typeof controlBarData] || controlBarData.layouts || [];
  
  if (previewMode === 'display') {
      const hasFlex = activeClassesSet.has('flex') || activeClassesSet.has('inline-flex');
      const hasGrid = activeClassesSet.has('grid') || activeClassesSet.has('inline-grid');
      activeControlData = activeControlData.filter(group => {
         if (group.group === 'Flex Layout') return hasFlex;
         if (group.group === 'Grid Layout') return hasGrid;
         return true;
      });
  }"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched TailwindPlayground activeControlData")
    else:
        print("Target not found")

patch_file("src/components/TailwindPlayground.tsx")
