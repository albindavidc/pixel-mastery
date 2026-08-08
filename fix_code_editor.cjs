const fs = require('fs');
let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

// Add themeColor prop
content = content.replace(
  /interface CodeEditorPreviewProps \{/,
  `interface CodeEditorPreviewProps {\n  themeColor?: string;`
);

content = content.replace(
  /export function CodeEditorPreview\(\{ \n  code, \n  onChange, \n  onReset, \n  iframeRef, \n  title = 'index\.html',\n  language = 'html'\n\}: CodeEditorPreviewProps\) \{/,
  `export function CodeEditorPreview({ \n  code, \n  onChange, \n  onReset, \n  iframeRef, \n  title = 'index.html',\n  language = 'html',\n  themeColor = 'indigo'\n}: CodeEditorPreviewProps) {`
);

// We can map themeColor to a CSS color value
const themeCode = `
  const getThemeHex = (color: string) => {
    switch(color) {
      case 'indigo': return '#818cf8';
      case 'emerald': return '#34d399';
      case 'rose': return '#fb7185';
      case 'amber': return '#fbbf24';
      case 'cyan': return '#22d3ee';
      case 'teal': return '#2dd4bf';
      case 'pink': return '#f472b6';
      case 'violet': return '#a78bfa';
      default: return '#818cf8';
    }
  };
  const themeHex = getThemeHex(themeColor);
`;

content = content.replace(
  /const handleFormat = \(\) => \{/,
  `${themeCode}\n  const handleFormat = () => {`
);

// We can use inline style block to override Prism.js token colors.
// .token.tag, .token.keyword { color: var(--theme-hex) !important; }

content = content.replace(
  /<div className="flex-1 overflow-auto relative">/,
  `<div className="flex-1 overflow-auto relative custom-prism-container" style={{ '--theme-hex': themeHex } as React.CSSProperties}>
          <style>{\`
            .custom-prism-container .token.tag,
            .custom-prism-container .token.keyword,
            .custom-prism-container .token.selector,
            .custom-prism-container .token.function {
              color: var(--theme-hex) !important;
            }
          \`}</style>`
);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', content, 'utf8');
