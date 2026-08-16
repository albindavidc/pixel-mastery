const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf-8');

// Find the getDefaultCode function
const searchStr = `const getDefaultCode = (categoryName: string) => {`;
const idx = content.indexOf(searchStr);

if (idx !== -1) {
    const insertStr = `
     if (categoryName === 'Document Structure') {
       return \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
  <script>
    console.log("Hello, World!");
  </script>
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>This is a basic HTML document structure.</p>
</body>
</html>\`;
     }`;
     
     content = content.slice(0, idx + searchStr.length) + insertStr + content.slice(idx + searchStr.length);
     fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf-8');
}
