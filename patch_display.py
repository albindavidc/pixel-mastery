import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = "properties: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden']"
    replacement = "properties: ['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden']"
    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/data/controlBar.ts")
