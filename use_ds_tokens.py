import re

with open('src/components/HtmlModuleDetails.tsx', 'r') as f:
    content = f.read()

content = content.replace("case 'indigo': return 'text-indigo-400 border-indigo-500/30';", "case 'indigo': return 'text-ds-indigo border-ds-indigo/30';")
content = content.replace("case 'emerald': return 'text-emerald-400 border-emerald-500/30';", "case 'emerald': return 'text-ds-emerald border-ds-emerald/30';")
content = content.replace("case 'rose': return 'text-rose-400 border-rose-500/30';", "case 'rose': return 'text-ds-rose border-ds-rose/30';")
content = content.replace("case 'amber': return 'text-amber-400 border-amber-500/30';", "case 'amber': return 'text-ds-amber border-ds-amber/30';")
content = content.replace("case 'cyan': return 'text-cyan-400 border-cyan-500/30';", "case 'cyan': return 'text-ds-cyan border-ds-cyan/30';")
content = content.replace("case 'teal': return 'text-teal-400 border-teal-500/30';", "case 'teal': return 'text-ds-teal border-ds-teal/30';")
content = content.replace("case 'blue': return 'text-blue-400 border-blue-500/30';", "case 'blue': return 'text-ds-blue border-ds-blue/30';")
content = content.replace("case 'pink': return 'text-pink-400 border-pink-500/30';", "case 'pink': return 'text-ds-pink border-ds-pink/30';")
content = content.replace("case 'violet': return 'text-violet-400 border-violet-500/30';", "case 'violet': return 'text-ds-violet border-ds-violet/30';")

content = content.replace("case 'indigo': return 'text-indigo-400';", "case 'indigo': return 'text-ds-indigo';")
content = content.replace("case 'emerald': return 'text-emerald-400';", "case 'emerald': return 'text-ds-emerald';")
content = content.replace("case 'rose': return 'text-rose-400';", "case 'rose': return 'text-ds-rose';")
content = content.replace("case 'amber': return 'text-amber-400';", "case 'amber': return 'text-ds-amber';")
content = content.replace("case 'cyan': return 'text-cyan-400';", "case 'cyan': return 'text-ds-cyan';")
content = content.replace("case 'teal': return 'text-teal-400';", "case 'teal': return 'text-ds-teal';")
content = content.replace("case 'blue': return 'text-blue-400';", "case 'blue': return 'text-ds-blue';")
content = content.replace("case 'pink': return 'text-pink-400';", "case 'pink': return 'text-ds-pink';")
content = content.replace("case 'violet': return 'text-violet-400';", "case 'violet': return 'text-ds-violet';")


with open('src/components/HtmlModuleDetails.tsx', 'w') as f:
    f.write(content)
