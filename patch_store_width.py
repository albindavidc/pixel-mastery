import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Remove max-w-xs and max-w-md
    content = content.replace("max-w-xs ", "")
    content = content.replace("max-w-md ", "")

    with open(filepath, "w") as f:
        f.write(content)
    print("Patched store.tsx widths")

patch_file("src/store.tsx")
