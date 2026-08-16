const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf-8');

const oldCode = `<!DOCTYPE html>
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
</html>`;

const newCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>This is a basic HTML document structure.</p>
  <script>
    console.log("Hello, World!");
  </script>
</body>
</html>`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf-8');
