const fs = require('fs');

let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Replace oneDark import
content = content.replace("import { oneDark } from '@codemirror/theme-one-dark';", 
`import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { useMemo } from 'react';`);

// We might need to handle React.useMemo if 'useMemo' is already imported from React, but we imported it directly or we can just use React.useMemo.
// Currently it imports `import React from 'react';`. Let's just use React.useMemo.
content = content.replace("import { useMemo } from 'react';", "");

// The getThemeHex function is inside CodeEditorPreview.
const getThemeHexPos = content.indexOf('const themeHex = getThemeHex(themeColor);');
if (getThemeHexPos === -1) {
    console.error("themeHex not found");
    process.exit(1);
}

const themeInjection = `
  const customTheme = React.useMemo(() => {
    const baseTheme = EditorView.theme({
      "&": {
        color: "#e4e4e7",
        backgroundColor: "#09090b"
      },
      ".cm-content": {
        caretColor: themeHex
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: themeHex
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: \`\${themeHex}33\`
      },
      ".cm-gutters": {
        backgroundColor: "#09090b",
        color: "#52525b",
        borderRight: "1px solid #27272a"
      },
      ".cm-activeLine": {
        backgroundColor: "rgba(255, 255, 255, 0.04) !important"
      },
      ".cm-activeLineGutter": {
        backgroundColor: "rgba(255, 255, 255, 0.04) !important",
        color: themeHex
      }
    }, { dark: true });

    const highlightStyle = HighlightStyle.define([
      { tag: [t.tagName, t.keyword, t.operator, t.className, t.typeName, t.function(t.variableName)], color: themeHex },
      { tag: [t.attributeName, t.propertyName], color: "#a1a1aa" },
      { tag: [t.string, t.special(t.string)], color: "#e4e4e7" },
      { tag: [t.number, t.bool, t.null], color: themeHex },
      { tag: [t.comment, t.meta], color: "#52525b", fontStyle: "italic" },
      { tag: t.angleBracket, color: "#52525b" }
    ]);

    return [baseTheme, syntaxHighlighting(highlightStyle)];
  }, [themeHex]);
`;

content = content.replace('const themeHex = getThemeHex(themeColor);', 'const themeHex = getThemeHex(themeColor);\n' + themeInjection);

// Find <CodeMirror ... theme={oneDark} ... />
content = content.replace('theme={oneDark}', 'theme={customTheme}');

// Remove the inline style injection we added previously for standard cm classes 
const oldStyles = `          <style>{\`
            .cm-theme { height: 100%; display: flex; flex-direction: column; flex: 1; min-height: 0; }
            .cm-scroller { overflow: auto !important; height: 100% !important; flex: 1; }
            .cm-activeLine { background-color: rgba(255, 255, 255, 0.05) !important; }
            .cm-activeLineGutter { background-color: rgba(255, 255, 255, 0.1) !important; }
            .cm-gutters { background-color: #1e1e2e; color: #6c7086; border-right: 1px solid #313244; }
          \`}</style>`;

const newStyles = `          <style>{\`
            .cm-theme { height: 100%; display: flex; flex-direction: column; flex: 1; min-height: 0; }
            .cm-scroller { overflow: auto !important; height: 100% !important; flex: 1; }
          \`}</style>`;

content = content.replace(oldStyles, newStyles);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', content);
console.log('patched successfully');
