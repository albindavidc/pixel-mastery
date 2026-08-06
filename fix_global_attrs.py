import re

with open('src/components/HtmlModuleDetails.tsx', 'r') as f:
    content = f.read()

# Replace the text-zinc-300 in the global attributes code tags
# They currently look like: <code className="font-mono text-xs text-zinc-300">id</code>
content = content.replace(
    '<code className="font-mono text-xs text-zinc-300">',
    '<code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">'
)

with open('src/components/HtmlModuleDetails.tsx', 'w') as f:
    f.write(content)
