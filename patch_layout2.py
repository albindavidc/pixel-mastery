import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  const moduleMode = currentModuleId === 'tailwind-layout-position' ? 'position' 
                   : currentModuleId === 'tailwind-layout-visibility' ? 'visibility' 
                   : 'box-sizing';"""
    replacement = """  const moduleMode = currentModuleId === 'tailwind-layout-position' ? 'position' 
                   : currentModuleId === 'tailwind-layout-visibility' ? 'visibility' 
                   : currentModuleId === 'tailwind-layout-display' ? 'display'
                   : 'box-sizing';"""
    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/LayoutPlayground.tsx")
