with open('src/App.tsx', 'r') as f:
    content = f.read()

content = "import { HtmlPlayground } from './components/HtmlPlayground';\n" + content

html_render = """          {currentModuleId.startsWith('html-') && viewMode !== 'guidelines' && (
            <div className="h-[50vh] min-h-[400px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <HtmlPlayground />
            </div>
          )}
"""

content = content.replace(
    "{(currentModuleId.startsWith('tailwind-layout')",
    html_render + "          {(currentModuleId.startsWith('tailwind-layout')"
)

with open('src/App.tsx', 'w') as f:
    f.write(content)
