import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """                    <div className={`p-4 rounded-lg bg-indigo-500/20 border-2 border-indigo-500 text-indigo-100 font-bold text-base shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 gap-4 ${containerClassesStr}`}>
                      <div className="bg-indigo-500/80 text-white px-4 py-2 rounded border border-indigo-400/50 flex items-center justify-center">1</div>
                      <div className="bg-rose-500/80 text-white px-4 py-2 rounded border border-rose-400/50 flex items-center justify-center">2</div>
                      <div className="bg-emerald-500/80 text-white px-4 py-2 rounded border border-emerald-400/50 flex items-center justify-center">3</div>
                    </div>"""
                    
    replacement = """                    <div className={`p-4 rounded-lg bg-indigo-500/20 border-2 border-indigo-500 text-indigo-100 font-bold text-base shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 gap-4 ${containerClassesStr}`}>
                      <span className="bg-indigo-500/80 text-white px-4 py-2 rounded border border-indigo-400/50 inline-flex items-center justify-center mx-1">1</span>
                      <span className="bg-rose-500/80 text-white px-4 py-2 rounded border border-rose-400/50 inline-flex items-center justify-center mx-1">2</span>
                      <span className="bg-emerald-500/80 text-white px-4 py-2 rounded border border-emerald-400/50 inline-flex items-center justify-center mx-1">3</span>
                    </div>"""
                    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/IframePreview.tsx")
