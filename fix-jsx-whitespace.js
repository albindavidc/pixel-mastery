const fs = require('fs');
let code = fs.readFileSync('src/components/HtmlElementsShowcase.tsx', 'utf-8');

// Wait, doing this correctly via script is hard.
// It's much easier to just fix the script `gen.js` to output JSX that preserves the newlines.
// For example, instead of literal newlines between </span> and <span>, insert {"\n  "} etc.
