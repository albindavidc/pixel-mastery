import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = "'tailwind-layout-display': 'block',"
    replacement = "'tailwind-layout-display': 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl',"

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched store.tsx")
    else:
        print("Target not found")

patch_file("src/store.tsx")
