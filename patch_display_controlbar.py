import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """  'display': [
    {
      group: 'Display',
      properties: ['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden']
    },
    {
      group: 'Screen Reader',
      properties: ['sr-only', 'not-sr-only']
    }
  ],"""

    replacement = """  'display': [
    {
      group: 'Display',
      properties: ['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden']
    },
    {
      group: 'Flex/Grid Layout',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*']
    },
    {
      group: 'Screen Reader',
      properties: ['sr-only', 'not-sr-only']
    }
  ],"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/data/controlBar.ts")
