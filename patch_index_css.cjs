const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/width: 4px;/g, 'width: 3px;');
css = css.replace(/height: 4px;/g, 'height: 3px;');

fs.writeFileSync('src/index.css', css);
