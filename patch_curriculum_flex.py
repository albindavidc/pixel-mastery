import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = "{module.id === 'tailwind-flexbox-grid' && ("
    replacement = "{(module.id === 'tailwind-flexbox-grid' || module.id === 'tailwind-layout-display') && ("
    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/Curriculum.tsx")
