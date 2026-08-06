import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    content = content.replace("max-w-md ", "")
    content = content.replace("max-w-xs ", "")

    with open(filepath, "w") as f:
        f.write(content)
    print("Patched TailwindPlayground fallback widths")

patch_file("src/components/TailwindPlayground.tsx")
