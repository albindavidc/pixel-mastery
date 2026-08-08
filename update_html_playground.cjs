const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const exampleCodeFunction = `  const getExampleCode = (categoryName: string) => {
     switch (categoryName) {
       case "Document Structure":
         return \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Example Page</title>
  <style>
    body { font-family: sans-serif; background: #f9fafb; color: #111827; }
    h1 { color: #2563eb; }
  </style>
</head>
<body>
  <h1>Welcome to Document Structure</h1>
  <p>This is a complete HTML document.</p>
  <script>
    console.log("Document loaded!");
  </script>
</body>
</html>\`;
       case "Layout & Containers":
         return \`<div class="bg-indigo-100 p-6 rounded-xl border border-indigo-200">
  <div class="text-indigo-900 font-bold mb-2">Block Level Container (div)</div>
  <p class="text-indigo-700">This container takes up the full width available.</p>
</div>
<div class="mt-4">
  <span class="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Inline Container (span)</span>
  <span class="text-slate-600 ml-2">This container only takes up as much width as necessary.</span>
</div>\`;
       case "Headings & Text":
         return \`<h1>Heading 1 (Main Title)</h1>
<h2>Heading 2 (Section Title)</h2>
<h3>Heading 3 (Subsection Title)</h3>
<hr class="my-4 border-slate-300" />
<p>This is a paragraph. It contains multiple sentences and forms a block of text.</p>
<p>Here is another paragraph with a <br> line break inside it.</p>\`;
       case "Links & Media":
         return \`<a href="https://example.com" class="text-blue-600 hover:underline font-bold" target="_blank">Visit Example.com</a>
<div class="mt-4">
  <img src="https://shorturl.at/PtCQB" alt="Beautiful landscape" class="rounded-xl shadow-lg max-w-full h-auto w-64 object-cover" />
</div>\`;
       case "Lists":
         return \`<h3 class="font-bold mb-2">Unordered List</h3>
<ul class="list-disc pl-5 mb-4 text-slate-700">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
<h3 class="font-bold mb-2">Ordered List</h3>
<ol class="list-decimal pl-5 text-slate-700">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>\`;
       case "Forms":
         return \`<form class="max-w-sm bg-white p-6 rounded-xl shadow-md border border-slate-200">
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
</form>\`;
       case "Semantic Layout":
         return \`<header class="bg-slate-900 text-white p-4 rounded-t-xl">
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
</footer>\`;
       case "Text Semantics":
         return \`<p class="mb-4">Here is a paragraph with <strong>strong importance</strong> and <em>emphasized text</em>.</p>
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
</pre>\`;
       case "Media":
         return \`<figure class="bg-white p-4 rounded-xl shadow-md border border-slate-200 inline-block mb-6">
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
</div>\`;
       case "Interactive Elements":
         return \`<details class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-4 group">
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
</details>\`;
       case "Advanced Forms":
         return \`<fieldset class="border-2 border-indigo-200 p-6 rounded-xl mb-6">
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
</div>\`;
       case "Tables":
         return \`<div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
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
</div>\`;
       case "Graphics & Rendering":
         return \`<div class="space-y-6">
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
</div>\`;
       case "Templates & Progressive Enhancement":
         return \`<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
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
</div>\`;
       case "Accessibility & Internationalization":
         return \`<div class="space-y-6">
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
</div>\`;
       case "Document Metadata & Contact":
         return \`<div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
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
</div>\`;
       case "Developer & Technical Text":
         return \`<div class="space-y-6">
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
</div>\`;
       case "Document Editing & Revisions":
         return \`<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
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
</div>\`;
       case "Definitions & Terminology":
         return \`<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
  <h3 class="font-bold mb-4 text-slate-700">Definitions (dfn)</h3>
  
  <p class="text-slate-700 leading-relaxed">
    A <dfn class="font-bold text-indigo-600 italic" title="HyperText Markup Language">HTML</dfn> document is the basic building block of the Web.
  </p>
  
  <p class="text-slate-700 leading-relaxed mt-4">
    The <dfn class="font-bold text-indigo-600 italic">Internet</dfn> is a global system of interconnected computer networks.
  </p>
  
  <p class="text-sm text-slate-500 mt-6 italic">The dfn element represents the defining instance of a term.</p>
</div>\`;
       case "Typography":
         return \`<div class="space-y-6">
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
</div>\`;
       default:
         return getDefaultCode(categoryName);
     }
  };\n`;

content = content.replace(
  /const \[code, setCode\] = useState\(getDefaultCode\(activeCategory\)\);/,
  exampleCodeFunction + '  const [code, setCode] = useState(getDefaultCode(activeCategory));'
);

content = content.replace(
  /<CodeEditorPreview\n        code={code}\n        onChange={setCode}\n        onReset=\{\(\) => setCode\(getDefaultCode\(activeCategory\)\)\}\n        iframeRef=\{iframeRef\}/,
  `<CodeEditorPreview
        code={code}
        onChange={setCode}
        onReset={() => setCode(getDefaultCode(activeCategory))}
        onTry={() => setCode('')}
        onExample={() => setCode(getExampleCode(activeCategory))}
        iframeRef={iframeRef}`
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
