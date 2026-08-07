const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');
content = content.replace(/\/\* Custom Scrollbar \*\/[\s\S]*?(?=\.scrollbar-thin {)/, `/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #52525b;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #52525b;
}

`);
fs.writeFileSync('src/index.css', content, 'utf8');
