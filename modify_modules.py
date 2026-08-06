with open('src/data/modules.ts', 'r') as f:
    content = f.read()

if 'htmlModules' not in content:
    content = "import { htmlModules } from './htmlModules';\n" + content
    content = content.replace("export const modules: Module[] = [", "export const modules: Module[] = [\n  ...htmlModules,")
    
    with open('src/data/modules.ts', 'w') as f:
        f.write(content)
