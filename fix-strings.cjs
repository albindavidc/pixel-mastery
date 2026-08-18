const fs = require('fs');
let code = fs.readFileSync('src/components/HtmlElementsShowcase.tsx', 'utf-8');

// The multi-line class strings look like:
// <span className="text-sky-400/80">"class-part-1
//        class-part-2"</span>
// We want to replace \n + spaces with a single space, but only inside the "text-sky-400/80" spans.
// It's easier to just match:
// \n\s+ 
// if it's inside the text of the pre blocks. Wait, in JSX the newline and spaces inside a JSX string literal or text node might just be exactly that.
// Let's just match antialiased\n         selection to antialiased selection.
// A regex to find \n + spaces where it is immediately followed by standard tailwind classes
// Since I know exactly which lines were broken, I can just remove all \n + (7 or more spaces) if it's inside the code blocks, maybe?
// Wait, indentation for the tags themselves is 2, 4, 6 spaces.
// The hardcoded class string wraps were indented by 9+ spaces to align with the quote.
// Let's replace `\n {7,}` with a space. Wait, some tags might be deeply nested.
// Let's just use regex to match `\n\s+` inside `text-sky-400/80` span.
// In the source code, it looks like:
// <span className="text-sky-400/80">"min-h-screen...
//          selection:bg-blue-200..."</span>
// Let's just replace all `\n +` with a single space where the previous character is a letter or number or dash, and the next character is a letter or number or dash, AND the match includes at least 8 spaces.

code = code.replace(/([a-zA-Z0-9_-])\n\s{7,}([a-zA-Z0-9_-])/g, '$1 $2');
fs.writeFileSync('src/components/HtmlElementsShowcase.tsx', code);
