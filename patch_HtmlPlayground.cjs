const fs = require('fs');
let code = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

// In getExampleCode we need to inject the case for "Lists" or modify it if it exists.
// Let's check getExampleCode.
