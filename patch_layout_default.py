import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = "const defaultClass = 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10';"
    replacement = """const defaultClass = previewMode === 'display' ? 'block' 
                                       : previewMode === 'visibility' ? 'visible'
                                       : previewMode === 'position' ? 'relative'
                                       : 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10';"""
    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/LayoutPlayground.tsx")
