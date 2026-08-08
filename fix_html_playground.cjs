const fs = require('fs');

let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

// The injected code is currently inside `body { ... }`.
// It looks like:
// color: black;
// /* Scrollbar */
// ::-webkit-scrollbar { width: 3px; height: 3px; }
// ...
// * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }
// }

content = content.replace(
  /\/\* Scrollbar \*\/[\s\S]*?scrollbar-color:[^\}]+\}/g,
  `}\n            /* Scrollbar */
            ::-webkit-scrollbar { width: 3px; height: 3px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
            * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }`
);

// We need to also clean up the extra `}` that was left behind since we matched until the end,
// but wait, my regex replaced the `}` from the `body` tag block.
// Let's just do a string replace of the exact lines.
