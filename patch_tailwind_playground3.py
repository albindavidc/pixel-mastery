import re

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Remove playgroundClasses and setPlaygroundClasses from useAppStore destructuring
    content = re.sub(r'\s*playgroundClasses,\s*setPlaygroundClasses,', '', content)
    
    with open(filepath, "w") as f:
        f.write(content)
    print("Patched target 1")

patch_file("src/components/TailwindPlayground.tsx")
