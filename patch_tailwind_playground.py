import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  const { 
  playgroundClasses, 
  setPlaygroundClasses, 
  moduleClasses, 
  setModuleClasses,
  playgroundState, 
  setPlaygroundState,
  playgroundSize,
  setPlaygroundSize
} = useAppStore();"""

    replacement = """  const { 
  moduleClasses, 
  setModuleClasses,
  playgroundState, 
  setPlaygroundState,
  playgroundSize,
  setPlaygroundSize
} = useAppStore();"""

    if target in content:
        content = content.replace(target, replacement)
    else:
        print("Target 1 not found")

    target2 = """  const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
    
    // Fallbacks just in case store doesn't merge new keys immediately
    const fallback = mode === 'grid' 
      ? 'grid p-6 w-full max-w-md bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl grid-cols-3 gap-4 place-content-center' 
      : mode === 'flex'
      ? 'flex p-6 w-full max-w-md bg-indigo-500/20 border-4 border-indigo-500 rounded-2xl shadow-xl flex-row flex-wrap gap-4 items-center justify-center'
      : 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl';
      
    setPlaygroundClasses(moduleClasses[getStoreKey(mode)] || fallback);
  };
  
  // Track the current classes for the active mode
  useEffect(() => {
    setModuleClasses(getStoreKey(previewMode), playgroundClasses);
  }, [playgroundClasses, previewMode, setModuleClasses]);"""

    replacement2 = """  // Fallbacks just in case store doesn't merge new keys immediately
  const getFallback = (mode: string) => mode === 'grid' 
    ? 'grid p-6 w-full max-w-md bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl grid-cols-3 gap-4 place-content-center' 
    : mode === 'flex'
    ? 'flex p-6 w-full max-w-md bg-indigo-500/20 border-4 border-indigo-500 rounded-2xl shadow-xl flex-row flex-wrap gap-4 items-center justify-center'
    : 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl';

  const playgroundClasses = moduleClasses[getStoreKey(previewMode)] || getFallback(previewMode);
  
  const setPlaygroundClasses = (newClasses: string) => {
    setModuleClasses(getStoreKey(previewMode), newClasses);
  };

  const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
  };"""

    if target2 in content:
        content = content.replace(target2, replacement2)
    else:
        print("Target 2 not found")
        
    with open(filepath, "w") as f:
        f.write(content)
    print("Patched TailwindPlayground")

patch_file("src/components/TailwindPlayground.tsx")
