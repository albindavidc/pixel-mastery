import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = "className=\"w-full max-w-4xl h-[320px] sm:h-[400px] lg:h-[420px] lg:max-w-3xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-hidden shadow-2xl\""
    replacement = "className=\"w-full max-w-4xl h-[320px] sm:h-[400px] lg:h-[500px] lg:max-w-5xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-hidden shadow-2xl\""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched IframePreview max-w")
    else:
        print("Target not found in IframePreview")

patch_file("src/components/IframePreview.tsx")
