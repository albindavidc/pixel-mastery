const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const target = `    const doc = iframeRef.current?.contentDocument;
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
      doc.close();`;

const replacement = `    const doc = iframeRef.current?.contentDocument;
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
      doc.close();`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
