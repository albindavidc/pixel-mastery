const fs = require('fs');
let code = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

const oldLists = `      case "Lists":
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
</ol>\`;`;

const newLists = `      case "Lists":
         return \`<h3 class="font-bold mb-2">Unordered List</h3>
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
</dl>\`;`;

code = code.replace(oldLists, newLists);
fs.writeFileSync('src/components/HtmlPlayground.tsx', code);
console.log('Patched HtmlPlayground.tsx');
