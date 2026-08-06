import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  const { currentModuleId, setPlaygroundClasses, completedModules, toggleModuleComplete } = useAppStore();
  const module = modules.find(m => m.id === currentModuleId);
  const isCompleted = module ? completedModules.includes(module.id) : false;

  // Simple challenge validation
  const { playgroundClasses } = useAppStore();"""

    replacement = """  const { currentModuleId, setPlaygroundClasses, completedModules, toggleModuleComplete, moduleClasses } = useAppStore();
  const module = modules.find(m => m.id === currentModuleId);
  const isCompleted = module ? completedModules.includes(module.id) : false;

  // Simple challenge validation
  const { playgroundClasses } = useAppStore();"""

    if target in content:
        content = content.replace(target, replacement)
        
        target2 = """  useEffect(() => {
    if (!module) return;
    const currentClasses = playgroundClasses.split(' ').map(c => c.trim()).filter(Boolean);
    const passed = module.challenge.targetClasses.every(target => currentClasses.includes(target));"""
        
        replacement2 = """  useEffect(() => {
    if (!module) return;
    
    let classesToCheck = playgroundClasses;
    if (module.id === 'tailwind-layout-display') {
      const classes1 = moduleClasses['tailwind-layout-display'] || '';
      const classes2 = moduleClasses['tailwind-layout-display-flex'] || '';
      const classes3 = moduleClasses['tailwind-layout-display-grid'] || '';
      classesToCheck = `${classes1} ${classes2} ${classes3}`;
    }
    
    const currentClasses = classesToCheck.split(' ').map(c => c.trim()).filter(Boolean);
    const passed = module.challenge.targetClasses.every(target => currentClasses.includes(target));"""

        if target2 in content:
            content = content.replace(target2, replacement2)
            with open(filepath, "w") as f:
                f.write(content)
            print("Patched Curriculum.tsx challenge logic")
        else:
            print("Target 2 not found")
    else:
        print("Target 1 not found")

patch_file("src/components/Curriculum.tsx")
