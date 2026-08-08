const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const replacement = `
  const contentData = module && module.content ? JSON.parse(module.content) : { tags: [], categories: [] };
  const categories = contentData.categories || [];
  const tags = contentData.tags || [];
  
  // Use category name instead of tag if categories exist
  const [activeCategory, setActiveCategory] = useState(categories.length > 0 ? categories[0].name : '');
  
  const activeCatObj = categories.find((c: any) => c.name === activeCategory) || categories[0];

  // Create a default code block based on active category
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
         } else if (['head', 'body', 'title', 'meta', 'link', 'script'].includes(t)) {
           if (t === 'title') code += \`<title>My Website</title>\\n\`;
           if (t === 'meta') code += \`<meta charset="UTF-8" />\\n\`;
           if (t === 'link') code += \`<link rel="stylesheet" href="styles.css" />\\n\`;
           if (t === 'script') code += \`<script src="app.js"></script>\\n\`;
           if (t === 'head') code += \`<head>\\n  <!-- Head Content -->\\n</head>\\n\`;
           if (t === 'body') code += \`<body>\\n  <!-- Body Content -->\\n</body>\\n\`;
         } else if (['img', 'br', 'hr', 'input', 'source', 'wbr', 'col'].includes(t)) {
           if (t === 'input') code += \`<input type="text" placeholder="Enter text..." />\\n\`;
           else if (t === 'img') code += \`<img src="image.jpg" alt="Description" />\\n\`;
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
  };

  const [code, setCode] = useState(getDefaultCode(activeCategory));

  useEffect(() => {
    setActiveCategory(categories.length > 0 ? categories[0].name : '');
  }, [currentModuleId]);

  useEffect(() => {
    setCode(getDefaultCode(activeCategory));
  }, [activeCategory]);
`;

// Replace the top part
content = content.replace(
  /const contentData = module && module\.content \? JSON\.parse\(module\.content\) : \{ tags: \[\] \};\n  const tags = contentData\.tags \|\| \[\];\n  const \[activeTag, setActiveTag\] = useState\(tags\[0\] \|\| ''\);\n\n  \/\/ Create a default code block based on active tag\n  const getDefaultCode = \(tag: string\) => \{[\s\S]*?\};\n\n  const \[code, setCode\] = useState\(getDefaultCode\(activeTag\)\);\n\n  useEffect\(\(\) => \{\n    setActiveTag\(tags\[0\] \|\| ''\);\n  \}, \[currentModuleId, tags\]\);\n\n  useEffect\(\(\) => \{\n    setCode\(getDefaultCode\(activeTag\)\);\n  \}, \[activeTag\]\);/,
  replacement
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
