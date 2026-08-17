const fs = require('fs');

let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// remove react-simple-code-editor and prism imports
content = content.replace(/import Editor from 'react-simple-code-editor';\n/g, '');
content = content.replace(/import Prism from 'prismjs';\n/g, '');
content = content.replace(/import 'prismjs\/components\/prism-markup';\n/g, '');
content = content.replace(/import 'prismjs\/components\/prism-css';\n/g, '');
content = content.replace(/import 'prismjs\/components\/prism-javascript';\n/g, '');
content = content.replace(/import 'prismjs\/themes\/prism-twilight\.css';[^\n]*\n/g, '');

// add codemirror imports
const codemirrorImports = `import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';\n`;

content = content.replace("import beautify from 'js-beautify';", "import beautify from 'js-beautify';\n" + codemirrorImports);

// remove highlightCode function
content = content.replace(/const highlightCode = \(c: string\) => \{[\s\S]*?\};\n/g, '');

// replace editor JSX
const oldEditorDiv = `<div className="flex-1 overflow-y-scroll relative custom-prism-container editor-scrollbar" style={{ '--theme-hex': themeHex } as React.CSSProperties}>
          <style>{\`
            .custom-prism-container .token.tag,
            .custom-prism-container .token.keyword,
            .custom-prism-container .token.selector,
            .custom-prism-container .token.function {
              color: var(--theme-hex) !important;
            }
          \`}</style>
          <Editor
            value={code}
            onValueChange={onChange}
            highlight={highlightCode}
            padding={16}
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", monospace',
              fontSize: 14,
              backgroundColor: 'transparent',
              minHeight: '100%',
            }}
            textareaClassName="focus:outline-none editor-scrollbar"
            className="w-full min-h-full text-zinc-300 editor-container"
          />
        </div>`;

const newEditorDiv = `<div className="flex-1 relative overflow-hidden flex flex-col min-h-0" style={{ '--theme-hex': themeHex } as React.CSSProperties}>
          <style>{\`
            .cm-theme { height: 100%; display: flex; flex-direction: column; flex: 1; min-height: 0; }
            .cm-scroller { overflow: auto !important; height: 100% !important; flex: 1; }
            .cm-activeLine { background-color: rgba(255, 255, 255, 0.05) !important; }
            .cm-activeLineGutter { background-color: rgba(255, 255, 255, 0.1) !important; }
            .cm-gutters { background-color: #1e1e2e; color: #6c7086; border-right: 1px solid #313244; }
          \`}</style>
          <CodeMirror
            value={code}
            height="100%"
            theme={oneDark}
            extensions={[
              language === 'html' ? html() : language === 'css' ? css() : javascript({ jsx: true })
            ]}
            onChange={(val) => onChange(val)}
            className="w-full h-full text-sm flex-1 overflow-hidden"
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightActiveLine: true,
              foldGutter: true,
            }}
          />
        </div>`;

content = content.replace(oldEditorDiv, newEditorDiv);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);

console.log('patched');
