import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target_box = "'tailwind-layout-box-sizing': 'box-border p-4 w-64 border-4 border-indigo-500 bg-indigo-500/20',"
    rep_box = "'tailwind-layout-box-sizing': 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10',"
    
    if target_box in content:
        content = content.replace(target_box, rep_box)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")

patch_file("src/store.tsx")
