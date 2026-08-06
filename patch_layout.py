import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # 1. handleModeChange
    target1 = """const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
    setPlaygroundClasses(savedClasses[mode as keyof typeof savedClasses] || '');
  };"""
    replacement1 = """const handleModeChange = (mode: string) => {
    if (mode === previewMode) return;
    setPreviewMode(mode);
  };"""
    
    if target1 in content:
        content = content.replace(target1, replacement1)

    # 2. defaultClass
    target2 = """const defaultClass = savedClasses[previewMode] || 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10';"""
    replacement2 = """const defaultClass = 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10';"""
    if target2 in content:
        content = content.replace(target2, replacement2)
        
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Patched {filepath}")

patch_file("src/components/LayoutPlayground.tsx")

