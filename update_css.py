import re

with open('src/index.css', 'r') as f:
    content = f.read()

colors_to_add = """  --color-ds-orange: var(--color-orange-500);
  --color-ds-lime: var(--color-lime-500);
  --color-ds-fuchsia: var(--color-fuchsia-500);"""

content = content.replace(
    "--color-ds-violet: var(--color-violet-500);",
    f"--color-ds-violet: var(--color-violet-500);\n{colors_to_add}"
)

with open('src/index.css', 'w') as f:
    f.write(content)
