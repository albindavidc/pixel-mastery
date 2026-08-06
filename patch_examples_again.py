import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """    examples: [
      { label: 'Inline', classes: 'inline' },
      { label: 'Block', classes: 'block' },
      { label: 'Inline-Block', classes: 'inline-block' },
      { label: 'Flex Container', classes: 'flex' },
      { label: 'Grid Container', classes: 'grid grid-cols-2' },
    ],"""

    replacement = """    examples: [
      { label: 'Inline', classes: 'inline' },
      { label: 'Block', classes: 'block' },
      { label: 'Inline-Block', classes: 'inline-block' },
      { label: 'Flex Row', classes: 'flex flex-row gap-4' },
      { label: 'Flex Center', classes: 'flex justify-center items-center h-full' },
      { label: 'Grid 3 Cols', classes: 'grid grid-cols-3 gap-4 place-content-center h-full' },
    ],"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/data/modules.ts")
