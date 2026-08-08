const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

content = content.replace(
  /if \(t === 'script'\) code \+= \`<script src="app\.js"><\/script>\\n\`;/,
  `if (t === 'script') code += \\\`<script>
  // Write your internal JS here
  console.log("Hello from Javascript!");
</script>\\\\n\\\`;
           if (t === 'style') code += \\\`<style>
  /* Write your internal CSS here */
  h1 { color: blue; }
</style>\\\\n\\\`;`
);

// We should also make sure 'style' is in the array: 
// ['head', 'body', 'title', 'meta', 'link', 'script'] -> ['head', 'body', 'title', 'meta', 'link', 'script', 'style']
content = content.replace(
  /\['head', 'body', 'title', 'meta', 'link', 'script'\]\.includes\(t\)/,
  "['head', 'body', 'title', 'meta', 'link', 'script', 'style'].includes(t)"
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
