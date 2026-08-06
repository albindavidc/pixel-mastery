import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """    {
      group: 'Flex/Grid Layout',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*']
    },"""

    replacement = """    {
      group: 'Flex Layout',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'order-*'],
    },
    {
      group: 'Grid Layout',
      properties: ['grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'order-*'],
    },"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print("Patched controlBar.ts")
    else:
        print("Target not found")

patch_file("src/data/controlBar.ts")
