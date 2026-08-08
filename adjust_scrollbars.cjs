const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Global
css = css.replace(/::-webkit-scrollbar \{\n  width: 3px;\n  height: 3px;\n\}/g, '::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}');

// Editor
css = css.replace(/\.editor-scrollbar::-webkit-scrollbar \{\n  width: 6px;\n  height: 6px;\n\}/g, '.editor-scrollbar::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}');

fs.writeFileSync('src/index.css', css);

// iframe
let html = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');
html = html.replace(/width: 6px; height: 6px;/g, 'width: 4px; height: 4px;');
fs.writeFileSync('src/components/HtmlPlayground.tsx', html);

