const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const replacement = `  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(\`
        <!DOCTYPE html>
        <html>
        <head>
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

content = content.replace(/useEffect\(\(\) => \{\n    const doc = iframeRef\.current\?\.contentDocument;[\s\S]*?\}, \[code\]\);/, replacement);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
