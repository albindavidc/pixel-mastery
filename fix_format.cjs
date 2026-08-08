const fs = require('fs');
let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

content = content.replace(
  /const handleFormat = \(\) => \{\n    if \(language === 'html'\) \{\n      const formatted = beautify\.html\(code, \{ indent_size: 2 \}\);\n      onChange\(formatted\);\n    \} else if \(language === 'css'\) \{\n      const formatted = beautify\.css\(code, \{ indent_size: 2 \}\);\n      onChange\(formatted\);\n    \}\n  \};/,
  `const handleFormat = () => {
    if (language === 'html') {
      const formatted = beautify.html(code, { indent_size: 2 });
      onChange(formatted);
    } else if (language === 'css') {
      const formatted = beautify.css(code, { indent_size: 2 });
      onChange(formatted);
    } else if (language === 'javascript' || language === 'js') {
      const formatted = beautify.js(code, { indent_size: 2 });
      onChange(formatted);
    }
  };`
);

content = content.replace(
  /const highlightCode = \(c: string\) => \{\n    if \(language === 'html'\) return Prism\.highlight\(c, Prism\.languages\.markup, 'markup'\);\n    if \(language === 'css'\) return Prism\.highlight\(c, Prism\.languages\.css, 'css'\);\n    return c;\n  \};/,
  `const highlightCode = (c: string) => {
    if (language === 'html') return Prism.highlight(c, Prism.languages.markup, 'markup');
    if (language === 'css') return Prism.highlight(c, Prism.languages.css, 'css');
    if (language === 'javascript' || language === 'js') return Prism.highlight(c, Prism.languages.javascript, 'javascript');
    return c;
  };`
);

fs.writeFileSync('src/components/CodeEditorPreview.tsx', content, 'utf8');
