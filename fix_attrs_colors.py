import re

with open('src/components/HtmlModuleDetails.tsx', 'r') as f:
    content = f.read()

# Replace required (rose to ds-orange)
content = content.replace(
    'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    'bg-ds-orange/10 text-ds-orange border border-ds-orange/20'
)

# Replace optional (zinc to ds-lime)
content = content.replace(
    'bg-zinc-800 text-zinc-400 border border-zinc-700',
    'bg-ds-lime/10 text-ds-lime border border-ds-lime/20'
)

with open('src/components/HtmlModuleDetails.tsx', 'w') as f:
    f.write(content)
