import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # We want to replace 'inline-block' from the children.
    target1 = '<div className="p-2 bg-indigo-500/40 rounded border border-indigo-400 inline-block">Child A</div>'
    target2 = '<div className="p-2 bg-rose-500/40 rounded border border-rose-400 inline-block">Child B</div>'
    target3 = '<div className="p-2 bg-emerald-500/40 rounded border border-emerald-400 inline-block">Child C</div>'
    
    rep1 = '<div className="p-2 bg-indigo-500/40 rounded border border-indigo-400">Child A</div>'
    rep2 = '<div className="p-2 bg-rose-500/40 rounded border border-rose-400">Child B</div>'
    rep3 = '<div className="p-2 bg-emerald-500/40 rounded border border-emerald-400">Child C</div>'
    
    content = content.replace(target1, rep1).replace(target2, rep2).replace(target3, rep3)
    
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Patched {filepath}")

patch_file("src/components/IframePreview.tsx")
