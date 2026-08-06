with open('src/components/ModuleDetails.tsx', 'r') as f:
    content = f.read()

content = "import { HtmlModuleDetails } from './HtmlModuleDetails';\n" + content
content = content.replace(
    "export function ModuleDetails({ moduleId }: ModuleDetailsProps) {",
    "export function ModuleDetails({ moduleId }: ModuleDetailsProps) {\n  if (moduleId.startsWith('html-')) return <HtmlModuleDetails moduleId={moduleId} />;"
)

with open('src/components/ModuleDetails.tsx', 'w') as f:
    f.write(content)
