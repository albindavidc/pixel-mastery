const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const replacementDocWrite = `  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(\`
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
                margin: 0;
                padding: 1rem;
                min-height: 100vh;
               font-family: system-ui, sans-serif;
               background: white;
               color: black;
             }
          </style>
        </head>
        <body>
          \${code}
        </body>
        </html>
      \`);
      doc.close();
    }
  }, [code]);`;

content = content.replace(/useEffect\(\(\) => \{\n    const doc = iframeRef\.current\?\.contentDocument;[\s\S]*?\}, \[code\]\);/, replacementDocWrite);

// Change the img tag code
content = content.replace(
  /if \(t === 'img'\) code \+= \`<img src="image\.jpg" alt="Description" \/>\\n\`;/,
  `if (t === 'img') code += \\\`<img src="https://images.unsplash.com/photo-1506744626753-eba7bc3622ce?auto=format&fit=crop&w=400&q=80" alt="Beautiful landscape" class="rounded-lg shadow-md max-w-full" />\\\\n\\\`;`
);

// We need to properly replace `if (t === 'img') code += \`<img src="image.jpg" alt="Description" />\n\`;`
// Let's just use string replace.
