import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target_pos = "'tailwind-layout-position': 'static p-4 w-64 h-64 bg-emerald-500/20 border-4 border-emerald-500 mx-auto mt-10',"
    rep_pos = "'tailwind-layout-position': 'relative',"
    
    target_vis = "'tailwind-layout-visibility': 'visible p-4 w-64 h-64 bg-rose-500/20 border-8 border-rose-500 mx-auto mt-10'"
    rep_vis = "'tailwind-layout-visibility': 'visible'"
    
    if target_pos in content:
        content = content.replace(target_pos, rep_pos)
    if target_vis in content:
        content = content.replace(target_vis, rep_vis)
        
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Patched {filepath}")

patch_file("src/store.tsx")
