import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  const { 
  playgroundClasses, 
  setPlaygroundClasses, 
  moduleClasses, 
  setModuleClasses,
  playgroundState, 
  setPlaygroundState,
  playgroundSize,
  setPlaygroundSize
} = useAppStore();"""

    if target in content:
        replacement = """  const { 
  moduleClasses, 
  setModuleClasses,
  playgroundState, 
  setPlaygroundState,
  playgroundSize,
  setPlaygroundSize
} = useAppStore();"""
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched target 1")
    else:
        print("Target 1 not found. Check exact text.")

patch_file("src/components/TailwindPlayground.tsx")
