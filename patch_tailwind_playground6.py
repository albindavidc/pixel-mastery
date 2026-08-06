import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """      {/* Canvas Area */}
      <div className="flex-1 overflow-auto p-4 md:p-8 flex flex-col relative bg-zinc-950">
        <div 
          className="flex-1 w-full max-w-[50%] mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-[#0B1120]"
"""

    replacement = """      {/* Canvas Area */}
      <div className="flex-1 overflow-auto p-4 md:p-8 flex flex-col relative bg-zinc-950">
        <div 
          className="flex-1 w-full mx-auto min-h-[80vh] rounded-2xl border-2 border-slate-800/60 overflow-hidden relative shadow-2xl shadow-black/80 bg-[#0B1120]"
"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched TailwindPlayground width back")
    else:
        print("Target not found")

patch_file("src/components/TailwindPlayground.tsx")
