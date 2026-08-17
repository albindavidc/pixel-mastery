const fs = require('fs');
let htmlPlayground = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');
htmlPlayground = htmlPlayground.replace('}, [code]);', '}, [debouncedCode]);');
fs.writeFileSync('src/components/HtmlPlayground.tsx', htmlPlayground);
console.log('Fixed HtmlPlayground');
