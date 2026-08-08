const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const replacement = `  // Create a default code block based on active category
  const getDefaultCode = (categoryName: string) => {
     if (!categoryName) return '';
     const cat = categories.find((c: any) => c.name === categoryName);
     if (!cat) return '';

     if (currentModuleId === 'html-semantic-layout') {
       return \`<header style="border: 2px solid #ccc; padding: 1rem; margin-bottom: 1rem;">
  <div>Logo</div>
  <nav>
    <ul style="display: flex; gap: 1rem; list-style: none; padding: 0;">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
<main style="border: 2px solid #000; padding: 1rem; margin-bottom: 1rem;">
  <section style="background: #f0f0f0; padding: 2rem; text-align: center; margin-bottom: 1rem;">
    <h1>Hero / Banner / Introduction</h1>
  </section>
</main>\`;
     }
     
     let code = '';
     if (cat.tags) {
       cat.tags.forEach((tag: string) => {
         let t = tag.replace('<', '').replace('>', '');
         
         if (['!DOCTYPE'].includes(t)) {
           code += \`<!DOCTYPE html>\\n\`;
         } else if (['html'].includes(t)) {
           code += \`<html lang="en">\\n  <!-- HTML Content -->\\n</html>\\n\`;
         } else if (['head', 'body', 'title', 'meta', 'link', 'script', 'style'].includes(t)) {
           if (t === 'title') code += \`<title>My Website</title>\\n\`;
           if (t === 'meta') code += \`<meta charset="UTF-8" />\\n\`;
           if (t === 'link') code += \`<link rel="stylesheet" href="styles.css" />\\n\`;
           if (t === 'script') code += \`<script>\\n  // Write your internal JS here\\n  console.log("Hello from Javascript!");\\n</script>\\n\`;
           if (t === 'style') code += \`<style>\\n  /* Write your internal CSS here */\\n  h1 { color: blue; }\\n</style>\\n\`;
           if (t === 'head') code += \`<head>\\n  <!-- Head Content -->\\n</head>\\n\`;
           if (t === 'body') code += \`<body>\\n  <!-- Body Content -->\\n</body>\\n\`;
         } else if (['img', 'br', 'hr', 'input', 'source', 'wbr', 'col'].includes(t)) {
           if (t === 'input') code += \`<input type="text" placeholder="Enter text..." />\\n\`;
           else if (t === 'img') code += \`<img src="https://images.unsplash.com/photo-1506744626753-eba7bc3622ce?auto=format&fit=crop&w=400&q=80" alt="Beautiful landscape" class="rounded-lg shadow-md max-w-full" />\\n\`;
           else code += \`<\${t} />\\n\`;
         } else if (['form'].includes(t)) {
           code += \`<form>\\n  <!-- Form inputs -->\\n</form>\\n\`;
         } else if (['table'].includes(t)) {
           code += \`<table>\\n  <tr>\\n    <th>Header</th>\\n  </tr>\\n  <tr>\\n    <td>Data</td>\\n  </tr>\\n</table>\\n\`;
         } else if (['ul', 'ol'].includes(t)) {
           code += \`<\${t}>\\n  <li>Item 1</li>\\n  <li>Item 2</li>\\n</\${t}>\\n\`;
         } else if (['a'].includes(t)) {
           code += \`<a href="#">Click me</a>\\n\`;
         } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong', 'em', 'button', 'label'].includes(t)) {
           code += \`<\${t}>Sample \${t} text</\${t}>\\n\`;
         } else {
           code += \`<\${t}>\\n  <!-- \${t} content -->\\n</\${t}>\\n\`;
         }
       });
     }
     return code;
  };`;

content = content.replace(/\/\/ Create a default code block based on active category[\s\S]*?return code;\n  \};/, replacement);
fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
