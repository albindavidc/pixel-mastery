import re

with open('src/types.ts', 'r') as f:
    content = f.read()
content = content.replace("category?: 'css' | 'tailwind';", "category?: 'css' | 'tailwind' | 'html';")
with open('src/types.ts', 'w') as f:
    f.write(content)

with open('src/components/HtmlModuleDetails.tsx', 'r') as f:
    content = f.read()
content = content.replace("ResetIcon, ", "")
with open('src/components/HtmlModuleDetails.tsx', 'w') as f:
    f.write(content)

with open('src/components/HtmlPlayground.tsx', 'r') as f:
    content = f.read()
content = content.replace("import { ResetIcon } from '@radix-ui/react-icons';", "import { RotateCcw as ResetIcon } from 'lucide-react';")
with open('src/components/HtmlPlayground.tsx', 'w') as f:
    f.write(content)
