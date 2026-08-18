import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store';
import { htmlModules } from '../data/htmlModules';
import { CodeEditorPreview } from './CodeEditorPreview';
import { Trophy, CheckCircle2 } from 'lucide-react';

export function HtmlPlayground() {
  const { currentModuleId } = useAppStore();
  const module = htmlModules.find(m => m.id === currentModuleId);
  const contentData = module && module.content ? JSON.parse(module.content) : { tags: [], categories: [] };
  const categories = contentData.categories || [];
  
  // Use category name instead of tag if categories exist
  const [activeCategory, setActiveCategory] = useState(categories.length > 0 ? categories[0].name : '');
  
  const activeCatObj = categories.find((c: any) => c.name === activeCategory) || categories[0];

    // Create a default code block based on active category
  const getDefaultCode = (categoryName: string) => {
     if (categoryName === 'Document Structure') {
       return `<!DOCTYPE html>
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
     }
     if (categoryName === 'Document Structure') {
       return `<!DOCTYPE html>
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
     }
     if (!categoryName) return '';
     const cat = categories.find((c: any) => c.name === categoryName);
     if (!cat) return '';

     if (currentModuleId === 'html-semantic-layout') {
       return `<header style="border: 2px solid #ccc; padding: 1rem; margin-bottom: 1rem;">
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
</main>`;
     }
     
     let code = '';
     if (cat.tags) {
       cat.tags.forEach((tag: string) => {
         let t = tag.replace('<', '').replace('>', '');
         
         if (['!DOCTYPE'].includes(t)) {
           code += `<!DOCTYPE html>\n`;
         } else if (['html'].includes(t)) {
           code += `<html lang="en">\n  <!-- HTML Content -->\n</html>\n`;
         } else if (['head', 'body', 'title', 'meta', 'link', 'script', 'style'].includes(t)) {
           if (t === 'title') code += `<title>My Website</title>\n`;
           if (t === 'meta') code += `<meta charset="UTF-8" />\n`;
           if (t === 'link') code += `<link rel="stylesheet" href="styles.css" />\n`;
           if (t === 'script') code += `<script>\n  // Write your internal JS here\n  console.log("Hello from Javascript!");\n</script>\n`;
           if (t === 'style') code += `<style>\n  /* Write your internal CSS here */\n  h1 { color: blue; }\n</style>\n`;
           if (t === 'head') code += `<head>\n  <!-- Head Content -->\n</head>\n`;
           if (t === 'body') code += `<body class="prose max-w-none">\n  <!-- Body Content -->\n</body>\n`;
         } else if (['img', 'br', 'hr', 'input', 'source', 'wbr', 'col'].includes(t)) {
           if (t === 'input') code += `<input type="text" placeholder="Enter text..." />\n`;
           else if (t === 'img') code += `<img src="https://shorturl.at/PtCQB" alt="Beautiful landscape" class="rounded-lg shadow-md max-w-full" />\n`;
           else code += `<${t} />\n`;
         } else if (['form'].includes(t)) {
           code += `<form>\n  <!-- Form inputs -->\n</form>\n`;
         } else if (['table'].includes(t)) {
           code += `<table>\n  <tr>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n  </tr>\n</table>\n`;
         } else if (['ul', 'ol'].includes(t)) {
           code += `<${t}>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</${t}>\n`;
         } else if (t === 'dl') {
           code += `<dl>\n  <dt>Term 1</dt>\n  <dd>Description 1</dd>\n  <dt>Term 2</dt>\n  <dd>Description 2</dd>\n</dl>\n`;
         } else if (['li', 'dt', 'dd'].includes(t)) {
           // Skip these as they are included in their parent lists
         } else if (['a'].includes(t)) {
           code += `<a href="#">Click me</a>\n`;
         } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong', 'em', 'button', 'label'].includes(t)) {
           code += `<${t}>Sample ${t} text</${t}>\n`;
         } else {
           code += `<${t}>\n  <!-- ${t} content -->\n</${t}>\n`;
         }
       });
     }
     return code;
  };

    const getExampleCode = (categoryName: string) => {
     switch (categoryName) {
       case "Document Structure":
         return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Example Page</title>
  <style>
    body { font-family: sans-serif; background: #f9fafb; color: #111827; }
    h1 { color: #2563eb; }
  </style>
</head>
<body class="prose prose-slate max-w-none">
  <h1>Welcome to Document Structure</h1>
  <p>This is a complete HTML document.</p>
  <script>
    console.log("Document loaded!");
  </script>
</body>
</html>`;
       case "Layout & Containers":
         return `<div class="bg-indigo-100 p-6 rounded-xl border border-indigo-200">
  <div class="text-indigo-900 font-bold mb-2">Block Level Container (div)</div>
  <p class="text-indigo-700">This container takes up the full width available.</p>
</div>
<div class="mt-4">
  <span class="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Inline Container (span)</span>
  <span class="text-slate-600 ml-2">This container only takes up as much width as necessary.</span>
</div>`;
       case "Headings & Text":
         return `<h1>Heading 1 (Main Title)</h1>
<h2>Heading 2 (Section Title)</h2>
<h3>Heading 3 (Subsection Title)</h3>
<hr class="my-4 border-slate-300" />
<p>This is a paragraph. It contains multiple sentences and forms a block of text.</p>
<p>Here is another paragraph with a <br> line break inside it.</p>`;
       case "Links & Media":
         return `<a href="https://example.com" class="text-blue-600 hover:underline font-bold" target="_blank">Visit Example.com</a>
<div class="mt-4">
  <img src="https://shorturl.at/PtCQB" alt="Beautiful landscape" class="rounded-xl shadow-lg max-w-full h-auto w-64 object-cover" />
</div>`;
       case "Lists":
         return `<h3 class="font-bold mb-2">Unordered List</h3>
<ul class="list-disc pl-5 mb-4 text-slate-700">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
<h3 class="font-bold mb-2">Ordered List</h3>
<ol class="list-decimal pl-5 mb-4 text-slate-700">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
<h3 class="font-bold mb-2">Description List</h3>
<dl class="text-slate-700 border-l-4 border-indigo-200 pl-4">
  <dt class="font-bold text-slate-900 mt-2">HTML</dt>
  <dd class="ml-4 mb-2">HyperText Markup Language</dd>
  <dt class="font-bold text-slate-900">CSS</dt>
  <dd class="ml-4">Cascading Style Sheets</dd>
</dl>`;
       case "Forms":
         return `<form class="max-w-sm bg-white p-6 rounded-xl shadow-md border border-slate-200">
  <div class="mb-4">
    <label class="block text-sm font-bold text-slate-700 mb-2">Username</label>
    <input type="text" placeholder="Enter username" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold text-slate-700 mb-2">Bio</label>
    <textarea placeholder="Tell us about yourself" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold text-slate-700 mb-2">Role</label>
    <select class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>Admin</option>
      <option>User</option>
      <option>Guest</option>
    </select>
  </div>
  <button type="button" class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Submit</button>
</form>`;
       case "Semantic Layout":
         return `<header class="bg-slate-900 text-white p-4 rounded-t-xl">
  <h1 class="text-xl font-bold">My Awesome Site</h1>
  <nav class="mt-2">
    <a href="#" class="text-slate-300 hover:text-white mr-4">Home</a>
    <a href="#" class="text-slate-300 hover:text-white">About</a>
  </nav>
</header>
<div class="flex flex-col md:flex-row gap-4 my-4">
  <main class="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <article>
      <h2 class="text-2xl font-bold mb-2">Main Article</h2>
      <section class="mb-4">
        <h3 class="text-lg font-semibold">Section 1</h3>
        <p class="text-slate-600">Article content goes here.</p>
      </section>
    </article>
  </main>
  <aside class="w-full md:w-64 bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2">Sidebar</h3>
    <p class="text-sm text-slate-600">Useful links and info.</p>
  </aside>
</div>
<footer class="bg-slate-900 text-slate-400 p-4 rounded-b-xl text-center text-sm">
  &copy; 2026 My Awesome Site
</footer>`;
       case "Text Semantics":
         return `<p class="mb-4">Here is a paragraph with <strong>strong importance</strong> and <em>emphasized text</em>.</p>
<p class="mb-4">You can <mark class="bg-yellow-200 px-1 rounded">highlight</mark> text, or show <small class="text-xs text-slate-500">fine print</small>.</p>
<blockquote class="border-l-4 border-indigo-500 pl-4 py-2 italic text-slate-700 bg-slate-50 rounded-r-lg mb-4">
  "This is a blockquote. It represents a section that is quoted from another source."
</blockquote>
<p>In computer science, <q>recursion</q> is a common topic. See <cite>Introduction to Algorithms</cite>.</p>
<p class="mt-4">The event is on <time datetime="2026-08-08">August 8th, 2026</time>.</p>
<pre class="bg-slate-900 text-green-400 p-4 rounded-xl mt-4 overflow-x-auto">
<code>function hello() {
  console.log("Hello World");
}</code>
</pre>`;
       case "Media":
         return `<figure class="bg-white p-4 rounded-xl shadow-md border border-slate-200 inline-block mb-6">
  <picture>
    <source media="(min-width: 800px)" srcset="https://shorturl.at/PtCQB" />
    <img src="https://shorturl.at/PtCQB" alt="Beautiful landscape" class="rounded-lg w-64 h-48 object-cover mb-2" />
  </picture>
  <figcaption class="text-sm text-slate-500 text-center italic">Fig 1. A beautiful landscape.</figcaption>
</figure>

<div class="space-y-4">
  <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
    <h3 class="font-bold mb-2 text-sm text-slate-700">Audio Element</h3>
    <audio controls class="w-full">
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
  
  <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
    <h3 class="font-bold mb-2 text-sm text-slate-700">Video Element</h3>
    <video width="320" height="240" controls class="rounded-lg bg-black">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>`;
       case "Interactive Elements":
         return `<details class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-4 group">
  <summary class="font-bold cursor-pointer text-indigo-700 list-none flex justify-between items-center">
    Click to reveal more information
    <span class="transition group-open:rotate-180">▼</span>
  </summary>
  <div class="mt-4 text-slate-600 border-t pt-4">
    <p>This content is hidden by default. The details element is great for accordions and FAQs without needing JavaScript!</p>
  </div>
</details>

<details class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 group" open>
  <summary class="font-bold cursor-pointer text-indigo-700 list-none flex justify-between items-center">
    Currently open details
    <span class="transition group-open:rotate-180">▼</span>
  </summary>
  <div class="mt-4 text-slate-600 border-t pt-4">
    <p>You can use the 'open' attribute to have it expanded by default.</p>
  </div>
</details>`;
       case "Advanced Forms":
         return `<fieldset class="border-2 border-indigo-200 p-6 rounded-xl mb-6">
  <legend class="px-2 font-bold text-indigo-700 bg-white rounded">Personal Details (Fieldset)</legend>
  
  <div class="mb-4">
    <label class="block text-sm font-bold text-slate-700 mb-2">Browser (Datalist)</label>
    <input list="browsers" name="browser" class="w-full px-3 py-2 border rounded-lg" placeholder="Choose or type..." />
    <datalist id="browsers">
      <option value="Chrome">
      <option value="Firefox">
      <option value="Safari">
      <option value="Edge">
    </datalist>
  </div>

  <div class="mb-4">
    <label class="block text-sm font-bold text-slate-700 mb-2">Car (Optgroup)</label>
    <select class="w-full px-3 py-2 border rounded-lg">
      <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </optgroup>
      <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </optgroup>
    </select>
  </div>
</fieldset>

<div class="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
  <div>
    <label class="block text-sm font-bold text-slate-700 mb-2">Task Progress</label>
    <progress value="72" max="100" class="w-full h-4 rounded overflow-hidden"></progress>
    <div class="text-xs text-slate-500 mt-1">72% complete</div>
  </div>
  
  <div>
    <label class="block text-sm font-bold text-slate-700 mb-2">Disk Usage (Meter)</label>
    <meter value="0.8" min="0" max="1" low="0.2" high="0.8" optimum="0.5" class="w-full h-6"></meter>
    <div class="text-xs text-slate-500 mt-1">80% full</div>
  </div>
  
  <form oninput="x.value=parseInt(a.value)+parseInt(b.value)" class="bg-white p-4 rounded-lg shadow-sm">
    <label class="block text-sm font-bold text-slate-700 mb-2">Calculation (Output)</label>
    <input type="range" id="a" value="50" class="w-full mb-2" />
    <div class="flex items-center gap-2">
      50 + <input type="number" id="b" value="50" class="w-20 px-2 py-1 border rounded" />
      = <output name="x" for="a b" class="font-bold text-lg text-indigo-600">100</output>
    </div>
  </form>
</div>`;
       case "Tables":
         return `<div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
  <table class="w-full text-left border-collapse">
    <caption class="p-4 text-lg font-bold text-slate-700 bg-slate-50 border-b">Employee Roster (Caption)</caption>
    <colgroup>
      <col class="bg-slate-50 w-1/3" />
      <col class="bg-white w-1/3" />
      <col class="bg-white w-1/3" />
    </colgroup>
    <thead class="bg-indigo-50 text-indigo-900 border-b-2 border-indigo-200">
      <tr>
        <th class="p-4 font-semibold">Name (th)</th>
        <th class="p-4 font-semibold">Role (th)</th>
        <th class="p-4 font-semibold">Department (th)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100">
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 text-slate-800">Alice Smith (td)</td>
        <td class="p-4 text-slate-600">Designer</td>
        <td class="p-4 text-slate-600">Creative</td>
      </tr>
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 text-slate-800">Bob Jones</td>
        <td class="p-4 text-slate-600">Developer</td>
        <td class="p-4 text-slate-600">Engineering</td>
      </tr>
    </tbody>
    <tfoot class="bg-slate-50 border-t-2 border-slate-200 font-semibold text-slate-700">
      <tr>
        <td class="p-4" colspan="3">Total Employees: 2 (tfoot)</td>
      </tr>
    </tfoot>
  </table>
</div>`;
       case "Graphics & Rendering":
         return `<div class="space-y-6">
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-4 text-slate-700">SVG Element</h3>
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="#4f46e5" stroke-width="4" fill="#818cf8" />
    </svg>
    <p class="text-sm text-slate-500 mt-2">Vector graphics defined directly in HTML.</p>
  </div>
  
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-4 text-slate-700">Canvas Element</h3>
    <canvas id="myCanvas" width="200" height="100" class="border border-slate-300 rounded"></canvas>
    <p class="text-sm text-slate-500 mt-2">Used for drawing graphics via JavaScript.</p>
    <script>
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.fillStyle = "#10b981";
      ctx.fillRect(20, 20, 150, 60);
    </script>
  </div>
</div>`;
       case "Templates & Progressive Enhancement":
         return `<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
  <h3 class="font-bold mb-2 text-slate-700">Noscript Element</h3>
  <noscript>
    <div class="bg-red-100 text-red-800 p-4 rounded-lg font-bold border border-red-200">
      Your browser does not support JavaScript! This message is shown using the noscript tag.
    </div>
  </noscript>
  <p class="text-sm text-slate-600 mt-2">The noscript content only appears if JS is disabled. Since JS is enabled here, you won't see it!</p>
</div>

<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
  <h3 class="font-bold mb-2 text-slate-700">Template Element</h3>
  <p class="text-sm text-slate-600 mb-4">Content inside a template tag is not rendered until activated by JavaScript.</p>
  
  <button onclick="activateTemplate()" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mb-4">Click to Append Template Content</button>
  
  <div id="target" class="space-y-2"></div>
  
  <template id="myTemplate">
    <div class="bg-indigo-50 text-indigo-800 p-3 rounded-lg border border-indigo-200 shadow-sm">
      ✨ I am content from the template!
    </div>
  </template>
  
  <script>
    function activateTemplate() {
      var temp = document.getElementById("myTemplate");
      var clon = temp.content.cloneNode(true);
      document.getElementById("target").appendChild(clon);
    }
  </script>
</div>`;
       case "Accessibility & Internationalization":
         return `<div class="space-y-6">
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Abbreviations</h3>
    <p>The <abbr title="World Health Organization" class="underline decoration-dotted cursor-help text-indigo-700 font-semibold">WHO</abbr> was founded in 1948.</p>
    <p class="text-xs text-slate-500 mt-1">Hover over WHO to see the full title.</p>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Bi-directional Isolation & Override</h3>
    <p class="mb-2">Normal text: User <bdi class="font-mono bg-slate-100 px-1 rounded">إيان</bdi> posted a comment.</p>
    <p>Override direction: <bdo dir="rtl" class="text-rose-600 font-bold">This text will go right-to-left.</bdo></p>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Ruby Annotations (Pronunciation)</h3>
    <ruby class="text-2xl font-bold text-slate-800">
      漢 <rt class="text-sm text-indigo-600">かん</rt>
      字 <rt class="text-sm text-indigo-600">じ</rt>
    </ruby>
    <p class="text-sm text-slate-500 mt-2">Used primarily in East Asian typography to show pronunciation.</p>
  </div>
</div>`;
       case "Document Metadata & Contact":
         return `<div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
  <h3 class="font-bold mb-4 text-slate-700 text-lg border-b pb-2">Contact Us</h3>
  <address class="not-italic text-slate-600 leading-relaxed">
    <strong>Example Corp.</strong><br>
    Written by <a href="mailto:webmaster@example.com" class="text-indigo-600 hover:underline">Jon Doe</a>.<br>
    Visit us at:<br>
    123 Example Street<br>
    Box 564, Disneyland<br>
    USA
  </address>
  <p class="text-sm text-slate-500 mt-4 italic">The address tag provides contact information for a document or article.</p>
</div>`;
       case "Developer & Technical Text":
         return `<div class="space-y-6">
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Keyboard Input (kbd)</h3>
    <p class="text-slate-600">Please press <kbd class="bg-slate-100 border border-slate-300 border-b-2 rounded-md px-2 py-1 font-mono text-sm text-slate-800 mx-1">Ctrl</kbd> + <kbd class="bg-slate-100 border border-slate-300 border-b-2 rounded-md px-2 py-1 font-mono text-sm text-slate-800 mx-1">C</kbd> to copy.</p>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Sample Output (samp)</h3>
    <p class="text-slate-600">The program outputs: <samp class="bg-slate-900 text-green-400 px-2 py-1 rounded font-mono text-sm ml-1">File not found.</samp></p>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-2 text-slate-700">Variables (var)</h3>
    <p class="text-slate-600">The formula for area is <var class="italic font-serif text-indigo-600 text-lg">A</var> = <var class="italic font-serif text-indigo-600 text-lg">πr²</var>.</p>
  </div>
</div>`;
       case "Document Editing & Revisions":
         return `<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
  <h3 class="font-bold mb-4 text-slate-700">Document Edits</h3>
  
  <p class="text-lg text-slate-800">
    My favorite color is 
    <del class="text-red-500 bg-red-50 line-through px-1 rounded mx-1" datetime="2026-08-08">blue</del> 
    <ins class="text-green-600 bg-green-50 underline px-1 rounded mx-1" datetime="2026-08-08">red</ins>!
  </p>
  
  <div class="mt-6 text-sm text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-100">
    <p><strong>&lt;del&gt;</strong> indicates deleted text.</p>
    <p><strong>&lt;ins&gt;</strong> indicates inserted text.</p>
  </div>
</div>`;
       case "Definitions & Terminology":
         return `<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
  <h3 class="font-bold mb-4 text-slate-700">Definitions (dfn)</h3>
  
  <p class="text-slate-700 leading-relaxed">
    A <dfn class="font-bold text-indigo-600 italic" title="HyperText Markup Language">HTML</dfn> document is the basic building block of the Web.
  </p>
  
  <p class="text-slate-700 leading-relaxed mt-4">
    The <dfn class="font-bold text-indigo-600 italic">Internet</dfn> is a global system of interconnected computer networks.
  </p>
  
  <p class="text-sm text-slate-500 mt-6 italic">The dfn element represents the defining instance of a term.</p>
</div>`;
       case "Typography":
         return `<div class="space-y-6">
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-4 text-slate-700">Subscript & Superscript</h3>
    <p class="text-lg text-slate-700 mb-2">
      Water is H<sub>2</sub>O.
    </p>
    <p class="text-lg text-slate-700">
      Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
    </p>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="font-bold mb-4 text-slate-700">Word Break Opportunity (wbr)</h3>
    <p class="text-slate-700 bg-slate-50 p-4 rounded border border-slate-100 max-w-[200px] break-words">
      ThisIsAVeryLongWordWith<wbr>WordBreak<wbr>Opportunities<wbr>InsideItSoItCanWrap.
    </p>
    <p class="text-sm text-slate-500 mt-2">Resize the container to see the word break at the specified points.</p>
  </div>
</div>`;
       default:
         return getDefaultCode(categoryName);
     }
  };

    const getCategoryChallenge = (categoryName: string) => {
    switch (categoryName) {
      case "Document Structure":
        return [
          {
            title: "Basic Web Page",
            description: "Build a complete web page skeleton containing a doctype, html, head, and body. Inside the head, add a title, a meta charset, a link to a stylesheet, and a script tag.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<!doctype') && lower.includes('<html') && lower.includes('<head') && lower.includes('<body') && lower.includes('<title') && lower.includes('<meta') && lower.includes('<link') && lower.includes('<script'); }
          },
          {
            title: "SEO Optimized Page",
            description: "Create an SEO optimized structure. Use doctype, html, head, body, title, meta for description, link for a canonical URL, and a script for analytics.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<!doctype') && lower.includes('<html') && lower.includes('<head') && lower.includes('<body') && lower.includes('<title') && lower.includes('<meta') && lower.includes('<link') && lower.includes('<script'); }
          }
        ];
      case "Layout & Containers":
        return [
          {
            title: "Profile Card",
            description: "Build a user profile card. Use a div for the card container and a span to highlight the user's online status.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<div') && lower.includes('<span'); }
          },
          {
            title: "Alert Banner",
            description: "Create an alert message banner. Use a div as the main banner wrapper and a span for the close icon or highlighted text.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<div') && lower.includes('<span'); }
          }
        ];
      case "Headings & Text":
        return [
          {
            title: "Blog Post Layout",
            description: "Write a blog post containing a main title (h1), subheadings (h2, h3, h4, h5, h6), a paragraph (p) of content, a line break (br) inside the text, and a horizontal rule (hr) separating the author bio.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<h1') && lower.includes('<h2') && lower.includes('<h3') && lower.includes('<h4') && lower.includes('<h5') && lower.includes('<h6') && lower.includes('<p') && lower.includes('<br') && lower.includes('<hr'); }
          },
          {
            title: "News Article",
            description: "Structure a news article with all heading levels (h1-h6) representing the newspaper name, headline, author, date, and sections. Add paragraphs (p), line breaks (br) for addresses, and an hr for footnotes.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<h1') && lower.includes('<h2') && lower.includes('<h3') && lower.includes('<h4') && lower.includes('<h5') && lower.includes('<h6') && lower.includes('<p') && lower.includes('<br') && lower.includes('<hr'); }
          }
        ];
      case "Links & Media":
        return [
          {
            title: "Image Gallery Link",
            description: "Create a thumbnail that links to a full-size image. Wrap an img tag inside an a tag.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<a') && lower.includes('<img'); }
          },
          {
            title: "Sponsor Logo",
            description: "Add a sponsor logo to your footer. Use an a tag that points to the sponsor's website, containing an img tag of their logo.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<a') && lower.includes('<img'); }
          }
        ];
      case "Lists":
        return [
          {
            title: "Recipe Instructions",
            description: "Create a recipe containing an unordered list (ul) for ingredients and an ordered list (ol) for step-by-step instructions. Use li elements for both.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<ul') && lower.includes('<ol') && lower.includes('<li'); }
          },
          {
            title: "Table of Contents",
            description: "Build a table of contents for a book. Use an ordered list (ol) for chapters and an unordered list (ul) nested inside for sub-sections. Use li for all items.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<ul') && lower.includes('<ol') && lower.includes('<li'); }
          }
        ];
      case "Forms":
        return [
          {
            title: "Contact Form",
            description: "Build a contact form containing a form tag, a label, an input for email, a textarea for the message, a select dropdown with options for the subject, and a submit button.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<form') && lower.includes('<label') && lower.includes('<input') && lower.includes('<textarea') && lower.includes('<select') && lower.includes('<option') && lower.includes('<button'); }
          },
          {
            title: "Support Ticket",
            description: "Create a support ticket form. Include a form, label for username, input for username, select/option for category, textarea for issue description, and a button to submit.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<form') && lower.includes('<label') && lower.includes('<input') && lower.includes('<textarea') && lower.includes('<select') && lower.includes('<option') && lower.includes('<button'); }
          }
        ];
      case "Semantic Layout":
        return [
          {
            title: "Modern Website Structure",
            description: "Build a full page layout with a header, nav menu, main content area, an article, a section within the article, an aside for related links, and a footer.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<header') && lower.includes('<main') && lower.includes('<section') && lower.includes('<article') && lower.includes('<aside') && lower.includes('<footer') && lower.includes('<nav'); }
          },
          {
            title: "News Layout",
            description: "Structure a news site with a header for the logo, nav for categories, main for top stories, article for the main story, section for comments, aside for ads, and footer for copyright.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<header') && lower.includes('<main') && lower.includes('<section') && lower.includes('<article') && lower.includes('<aside') && lower.includes('<footer') && lower.includes('<nav'); }
          }
        ];
      case "Text Semantics":
        return [
          {
            title: "Technical Documentation",
            description: "Write a tech doc using strong for warnings, em for emphasis, small for copyright, mark to highlight, code and pre for code snippets, blockquote and q for quotes, cite for references, and time for publish date.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<strong') && lower.includes('<em') && lower.includes('<small') && lower.includes('<mark') && lower.includes('<code') && lower.includes('<pre') && lower.includes('<blockquote') && lower.includes('<q') && lower.includes('<cite') && lower.includes('<time'); }
          },
          {
            title: "Academic Paper Review",
            description: "Structure a paper review using strong for key findings, em for species names, small for disclaimers, mark for important terms, pre/code for algorithms, blockquote/q for excerpts, cite for sources, and time for dates.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<strong') && lower.includes('<em') && lower.includes('<small') && lower.includes('<mark') && lower.includes('<code') && lower.includes('<pre') && lower.includes('<blockquote') && lower.includes('<q') && lower.includes('<cite') && lower.includes('<time'); }
          }
        ];
      case "Media":
        return [
          {
            title: "Multimedia Portfolio",
            description: "Create a portfolio item featuring responsive images (picture, source), a video presentation, an audio track, a figure with a figcaption, and an iframe for an embedded map.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<picture') && lower.includes('<source') && lower.includes('<video') && lower.includes('<audio') && lower.includes('<figure') && lower.includes('<figcaption') && lower.includes('<iframe'); }
          },
          {
            title: "Interactive Lesson",
            description: "Build a lesson page with a picture/source for diagrams, video for lectures, audio for pronunciation, figure/figcaption for charts, and an iframe embedding a quiz.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<picture') && lower.includes('<source') && lower.includes('<video') && lower.includes('<audio') && lower.includes('<figure') && lower.includes('<figcaption') && lower.includes('<iframe'); }
          }
        ];
      case "Interactive Elements":
        return [
          {
            title: "FAQ Accordion",
            description: "Create an FAQ section using details and summary elements to toggle the answers visibility.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<details') && lower.includes('<summary'); }
          },
          {
            title: "Spoiler Warning",
            description: "Implement a spoiler warning for a movie review using details to hide the spoiler text and summary for the click-to-reveal label.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<details') && lower.includes('<summary'); }
          }
        ];
      case "Advanced Forms":
        return [
          {
            title: "Complex Survey",
            description: "Build a survey grouping questions with fieldset/legend, using a datalist for a search input, optgroup in a select, an output for calculation results, and progress and meter for completion status.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<fieldset') && lower.includes('<legend') && lower.includes('<datalist') && lower.includes('<optgroup') && lower.includes('<output') && lower.includes('<progress') && lower.includes('<meter'); }
          },
          {
            title: "Financial Calculator",
            description: "Create a calculator form with fieldset/legend for inputs, datalist for currency selection, optgroup for expense categories, output for total, progress for savings goal, and meter for risk level.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<fieldset') && lower.includes('<legend') && lower.includes('<datalist') && lower.includes('<optgroup') && lower.includes('<output') && lower.includes('<progress') && lower.includes('<meter'); }
          }
        ];
      case "Tables":
        return [
          {
            title: "Financial Report",
            description: "Create a financial table with a caption, colgroup/col for column styling, thead with th, tbody with tr and td, and tfoot for totals.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<table') && lower.includes('<thead') && lower.includes('<tbody') && lower.includes('<tfoot') && lower.includes('<tr') && lower.includes('<th') && lower.includes('<td') && lower.includes('<caption') && lower.includes('<colgroup') && lower.includes('<col'); }
          },
          {
            title: "Pricing Matrix",
            description: "Build a pricing plan table. Use caption, colgroup/col for highlights, thead/th for plan names, tbody/tr/td for features, and tfoot for the buy buttons.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<table') && lower.includes('<thead') && lower.includes('<tbody') && lower.includes('<tfoot') && lower.includes('<tr') && lower.includes('<th') && lower.includes('<td') && lower.includes('<caption') && lower.includes('<colgroup') && lower.includes('<col'); }
          }
        ];
      case "Graphics & Rendering":
        return [
          {
            title: "Dashboard Widget",
            description: "Create a dashboard widget that includes a canvas element for rendering a dynamic chart and an svg element for a scalable icon.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<canvas') && lower.includes('<svg'); }
          },
          {
            title: "Browser Game Interface",
            description: "Build a game interface layout utilizing a canvas for the main game rendering and an svg for the user interface controls overlay.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<canvas') && lower.includes('<svg'); }
          }
        ];
      case "Templates & Progressive Enhancement":
        return [
          {
            title: "Dynamic List Component",
            description: "Create a dynamic list structure by providing a template tag for row items, and include a noscript fallback for users without JavaScript.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<template') && lower.includes('<noscript'); }
          },
          {
            title: "Client-Side Rendering Setup",
            description: "Prepare a container for a client-side app. Use a template tag to hold the skeleton loader and a noscript tag to display a warning to enable JS.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<template') && lower.includes('<noscript'); }
          }
        ];
      case "Accessibility & Internationalization":
        return [
          {
            title: "Language Guide",
            description: "Create a language guide using abbr for acronyms, bdi/bdo for bidirectional text control, and ruby/rt/rp for phonetic annotations in East Asian languages.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<abbr') && lower.includes('<bdi') && lower.includes('<bdo') && lower.includes('<ruby') && lower.includes('<rt') && lower.includes('<rp'); }
          },
          {
            title: "Translation Dictionary",
            description: "Build a dictionary entry using abbr for parts of speech, bdi/bdo for displaying mixed direction phrases, and ruby/rt/rp to show pronunciation guides.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<abbr') && lower.includes('<bdi') && lower.includes('<bdo') && lower.includes('<ruby') && lower.includes('<rt') && lower.includes('<rp'); }
          }
        ];
      case "Document Metadata & Contact":
        return [
          {
            title: "Author Card",
            description: "Create an author profile section and use the address element to wrap their contact information and physical location.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<address'); }
          },
          {
            title: "Store Locator",
            description: "Build a store location detail page, wrapping the physical address, email, and phone number within an address element.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<address'); }
          }
        ];
      case "Developer & Technical Text":
        return [
          {
            title: "CLI Tutorial",
            description: "Write a command-line tutorial utilizing kbd for keyboard shortcuts, samp for terminal output, and var for variables or arguments.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<kbd') && lower.includes('<samp') && lower.includes('<var'); }
          },
          {
            title: "Programming Guide",
            description: "Create a software documentation snippet using kbd to show hotkeys, samp for expected script output, and var for mathematical variables.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<kbd') && lower.includes('<samp') && lower.includes('<var'); }
          }
        ];
      case "Document Editing & Revisions":
        return [
          {
            title: "Changelog Entry",
            description: "Write a software changelog entry using del to show removed features and ins to show newly added features.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<del') && lower.includes('<ins'); }
          },
          {
            title: "Text Document Review",
            description: "Create a document review interface using del to cross out rejected text and ins to highlight proposed additions.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<del') && lower.includes('<ins'); }
          }
        ];
      case "Definitions & Terminology":
        return [
          {
            title: "Glossary Term",
            description: "Create a glossary page and use the dfn tag to mark the defining instance of a technical term.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<dfn'); }
          },
          {
            title: "Medical Dictionary",
            description: "Build a medical dictionary entry, utilizing the dfn element to pinpoint the exact term being defined in the paragraph.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<dfn'); }
          }
        ];
      case "Typography":
        return [
          {
            title: "Chemistry & Math",
            description: "Format a scientific formula using sub for chemical formulas (e.g., H2O), sup for exponents, and wbr to allow long equations to break gracefully.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<sub') && lower.includes('<sup') && lower.includes('<wbr'); }
          },
          {
            title: "Footnotes and URLs",
            description: "Create a legal document using sup for footnote references, sub for specific variable indices, and wbr to allow long URLs to break onto the next line.",
            verify: (c: string) => { const lower = c.toLowerCase(); return lower.includes('<sub') && lower.includes('<sup') && lower.includes('<wbr'); }
          }
        ];
      default:
        return null;
    }
  };

    const getCategoryUseCases = (categoryName: string) => {
    switch (categoryName) {
      case "Document Structure":
        return [{"title":"Single Page Application (SPA)","desc":"The foundational wrapper (html, head, body) into which React, Vue, or Angular mounts."},{"title":"SEO Landing Page","desc":"Setting the title and meta tags correctly for search engines and social media previews."},{"title":"Email Templates","desc":"Using a strict basic document structure for HTML email clients."}];
      case "Layout & Containers":
        return [{"title":"Grid Systems","desc":"Using div elements as rows and columns to build responsive grids."},{"title":"Component Wrappers","desc":"Wrapping interactive components like dropdowns or modals in a styled div."},{"title":"Inline Highlighting","desc":"Using span elements to colorize or format specific words within a sentence."}];
      case "Headings & Text":
        return [{"title":"Blog Post Formatting","desc":"Structuring an article with an h1 for the title, h2 for sections, and p for paragraphs."},{"title":"News Article Layout","desc":"Using headings for headlines and sub-headlines, and hr for section dividers."},{"title":"Poetry and Lyrics","desc":"Using br to enforce specific line breaks in poems or song lyrics."}];
      case "Links & Media":
        return [{"title":"Navigation Menus","desc":"Building the links that let users navigate between pages of a website."},{"title":"Product Galleries","desc":"Displaying product images (img) that link (a) to detailed view pages."},{"title":"Call to Action (CTA)","desc":"Creating large, clickable buttons that are actually styled a tags."}];
      case "Lists":
        return [{"title":"Navigation Bars","desc":"Using an unordered list (ul) styled horizontally for main site navigation."},{"title":"Recipe Instructions","desc":"Using an ordered list (ol) to clearly define sequential steps."},{"title":"Feature Checklists","desc":"Displaying product features or pricing tier benefits as a bulleted list."}];
      case "Forms":
        return [{"title":"User Login/Signup","desc":"Collecting credentials securely using input and form elements."},{"title":"E-commerce Checkout","desc":"Gathering shipping information, billing addresses, and payment details."},{"title":"Contact Us Page","desc":"Allowing users to send messages via a textarea and input fields."}];
      case "Semantic Layout":
        return [{"title":"Accessible Dashboard","desc":"Using main for the dashboard, aside for the sidebar, and nav for menus."},{"title":"News Aggregator","desc":"Wrapping independent news stories in article elements, and sections for categories."},{"title":"Sticky Footer","desc":"Ensuring the footer element stays at the bottom of the viewport with semantic structure."}];
      case "Text Semantics":
        return [{"title":"Code Documentation","desc":"Using code and pre to display syntax-highlighted code blocks."},{"title":"Academic Papers","desc":"Using blockquote and cite for referencing other works."},{"title":"Time-Sensitive Events","desc":"Using the time element for publish dates so machines can parse them."}];
      case "Media":
        return [{"title":"Responsive Hero Images","desc":"Using the picture element to serve different image resolutions based on screen size."},{"title":"Video Backgrounds","desc":"Autoplaying a looping video element behind the main content."},{"title":"Podcasts & Music","desc":"Embedding an audio player directly into the webpage for streaming."}];
      case "Interactive Elements":
        return [{"title":"FAQ Sections","desc":"Creating collapsible question-and-answer accordions without JavaScript."},{"title":"Spoiler Tags","desc":"Hiding sensitive or spoiler information until the user explicitly clicks to reveal it."},{"title":"Hidden Settings","desc":"Toggling advanced configuration options in a form."}];
      case "Advanced Forms":
        return [{"title":"Multi-Step Wizards","desc":"Grouping logical sections of a long form using fieldset and legend."},{"title":"Autocomplete Search","desc":"Providing search suggestions using an input linked to a datalist."},{"title":"Dashboard Metrics","desc":"Displaying disk usage or task completion using meter and progress elements."}];
      case "Tables":
        return [{"title":"Financial Reports","desc":"Structuring complex financial data with clear column and row headers."},{"title":"Pricing Plans","desc":"Comparing features across multiple subscription tiers."},{"title":"Sports Standings","desc":"Displaying team rankings, wins, losses, and points in a tabular format."}];
      case "Graphics & Rendering":
        return [{"title":"Browser Games","desc":"Rendering complex 2D or 3D game logic directly onto a canvas element."},{"title":"Data Visualization","desc":"Drawing interactive charts and graphs using svg or canvas."},{"title":"Scalable Icons","desc":"Using inline svg for UI icons that remain crisp at any resolution."}];
      case "Templates & Progressive Enhancement":
        return [{"title":"Client-Side Rendering","desc":"Using template elements to hold reusable HTML structures instantiated by JavaScript."},{"title":"Fallback UI","desc":"Displaying a noscript warning for users who have disabled JavaScript."},{"title":"Web Components","desc":"Defining the internal shadow DOM structure for custom elements."}];
      case "Accessibility & Internationalization":
        return [{"title":"Multilingual Sites","desc":"Using ruby annotations to provide pronunciation guides for East Asian languages."},{"title":"Technical Glossaries","desc":"Expanding acronyms with the abbr element for screen readers."},{"title":"Bidirectional Text","desc":"Mixing left-to-right and right-to-left languages safely using bdi and bdo."}];
      case "Document Metadata & Contact":
        return [{"title":"Author Profiles","desc":"Wrapping the contact information of the article's author in an address element."},{"title":"Physical Store Locator","desc":"Structuring the physical mailing address of a business for local SEO."},{"title":"Corporate Footer","desc":"Placing the company's official contact details in the site footer."}];
      case "Developer & Technical Text":
        return [{"title":"Keyboard Shortcuts Guide","desc":"Styling kbd elements to show users which keys to press (e.g., Ctrl + C)."},{"title":"Terminal Emulators","desc":"Using samp to represent the output of a computer program in a tutorial."},{"title":"Math & Physics Tutorials","desc":"Using var to denote variables in mathematical equations."}];
      case "Document Editing & Revisions":
        return [{"title":"Changelogs","desc":"Showing added features with ins and removed features with del."},{"title":"Collaborative Editing","desc":"Visually tracking changes in a document similar to 'Track Changes' in Word."},{"title":"E-commerce Sales","desc":"Striking out the old price with del and highlighting the new price with ins."}];
      case "Definitions & Terminology":
        return [{"title":"Medical Dictionaries","desc":"Marking the defining instance of a medical term using dfn."},{"title":"Legal Contracts","desc":"Highlighting defined terms in a legal document."},{"title":"Tooltips","desc":"Combining dfn with the title attribute to show definitions on hover."}];
      case "Typography":
        return [{"title":"Scientific Formulas","desc":"Writing H2O using sub or E=mc2 using sup."},{"title":"Footnotes","desc":"Creating numerical footnote references using the sup element."},{"title":"Responsive Long URLs","desc":"Preventing long links from breaking the layout by adding wbr at break opportunities."}];
      default:
        return [];
    }
  };

  const challenges = getCategoryChallenge(activeCategory);
  const useCases = getCategoryUseCases(activeCategory);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const challenge = challenges ? challenges[currentChallengeIndex] : null;

  useEffect(() => {
    setCurrentChallengeIndex(0);
  }, [activeCategory]);
  const [challengeStatus, setChallengeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setChallengeStatus('idle');
  }, [activeCategory]);

  const handleVerifyChallenge = () => {
    if (challenge && challenge.verify(code)) {
      setChallengeStatus('success');
    } else {
      setChallengeStatus('error');
    }
  };

  const [code, setCode] = useState(getDefaultCode(activeCategory));
  const [activeMode, setActiveMode] = useState<'eg' | 'try' | null>(null);

  useEffect(() => {
    setActiveCategory(categories.length > 0 ? categories[0].name : '');
  }, [currentModuleId, categories.length]);

  useEffect(() => {
    setCode(getDefaultCode(activeCategory));
    setActiveMode(null);
  }, [activeCategory]);

  const [debouncedCode, setDebouncedCode] = useState(code);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [code]);
  const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
          <style>
            body {
                margin: 0;
                padding: 1rem;
                min-height: 100vh;
               font-family: system-ui, sans-serif;
               background: white;
               color: black;
             }
             /* Scrollbar */
             ::-webkit-scrollbar { width: 4px; height: 4px; }
             ::-webkit-scrollbar-track { background: transparent; }
             ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
             ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
             * { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }
          </style>
        </head>
        <body class="prose prose-slate max-w-none">
          ${debouncedCode}
        </body>
        </html>
      `);
      doc.close();
    }
  }, [debouncedCode]);

  if (!module) return null;

  return (
    <div className="flex-1 flex flex-col bg-zinc-950 min-h-0">
      {/* Category filter bar (sticky) */}
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
          {categories.map((cat: any) => {
            const isActive = activeCategory === cat.name;
            let activeColorClass = 'bg-indigo-500 text-white';
            if (cat.color === 'indigo') activeColorClass = 'bg-indigo-500 text-white';
            else if (cat.color === 'emerald') activeColorClass = 'bg-emerald-500 text-white';
            else if (cat.color === 'rose') activeColorClass = 'bg-rose-500 text-white';
            else if (cat.color === 'amber') activeColorClass = 'bg-amber-500 text-white';
            else if (cat.color === 'cyan') activeColorClass = 'bg-cyan-500 text-white';
            else if (cat.color === 'teal') activeColorClass = 'bg-teal-500 text-white';
            else if (cat.color === 'pink') activeColorClass = 'bg-pink-500 text-white';
            else if (cat.color === 'violet') activeColorClass = 'bg-violet-500 text-white';
            
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-1.5 rounded-full font-sans font-medium text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? activeColorClass
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <CodeEditorPreview
        code={code}
        onChange={setCode}
        onReset={() => { setCode(getDefaultCode(activeCategory)); setActiveMode(null); }}
        onTry={() => { setCode(''); setActiveMode('try'); }}
        onExample={() => { setCode(getExampleCode(activeCategory)); setActiveMode('eg'); }}
        activeMode={activeMode}
        iframeRef={iframeRef}
        title={activeCatObj ? `${activeCatObj.name}.html` : "index.html"}
        language="html"
        themeColor={activeCatObj ? activeCatObj.color : "indigo"}
      />
      {challenges && challenges.length > 0 && challenge && (
        <div className="bg-[#141414] border-t border-zinc-800 p-6 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  Challenge: {challenge.title}
                </h3>
                <div className="flex gap-2">
                  {challenges.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentChallengeIndex(idx); setChallengeStatus('idle'); }}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                        idx === currentChallengeIndex
                          ? 'bg-indigo-500 text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                      }`}
                    >
                      Task {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                {challenge.description}
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] w-full md:w-auto mt-4 md:mt-0">
              <button
                onClick={handleVerifyChallenge}
                className="px-6 py-2.5 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Code
              </button>
              <div className="h-6 mt-3 flex items-center justify-center">
                {challengeStatus === 'success' && (
                  <div className="text-emerald-500 text-sm font-semibold animate-pulse flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Challenge Passed!
                  </div>
                )}
                {challengeStatus === 'error' && (
                  <div className="text-rose-500 text-sm font-semibold">
                    Not quite right. Keep trying!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {useCases && useCases.length > 0 && (
        <div className="bg-[#0f0f0f] border-t border-zinc-800 p-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Real-World Use Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc: any, idx: number) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-5 hover:border-zinc-700/80 hover:bg-zinc-800/80 transition-all shadow-sm">
                  <h4 className="text-zinc-100 font-bold text-sm mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 font-mono border border-zinc-700">
                      {idx + 1}
                    </span>
                    {uc.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
