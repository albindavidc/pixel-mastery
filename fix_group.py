import re

with open('src/data/htmlModules.ts', 'r') as f:
    content = f.read()

content = content.replace("groupId: 'html',", "// groupId: 'html',")
content = content.replace("groupTitle: 'HTML',", "// groupTitle: 'HTML',")

with open('src/data/htmlModules.ts', 'w') as f:
    f.write(content)
