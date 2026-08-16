const fs = require('fs');
let code = fs.readFileSync('src/data/htmlTagsData.ts', 'utf8');

const newTags = `  "<dl>": {
    "tag": "<dl>",
    "name": "Description List",
    "definition": "The glossary — a container for a list of terms and their descriptions or definitions.",
    "attributes": [],
    "example": "<dl>\\n  <dt>HTML</dt>\\n  <dd>HyperText Markup Language</dd>\\n</dl>",
    "type": "block",
    "selfClosing": false
  },
  "<dt>": {
    "tag": "<dt>",
    "name": "Description Term",
    "definition": "The term being defined or described in a description list.",
    "attributes": [],
    "example": "<dt>CSS</dt>",
    "type": "block",
    "selfClosing": false
  },
  "<dd>": {
    "tag": "<dd>",
    "name": "Description Details",
    "definition": "The description, definition, or value for the preceding term in a description list.",
    "attributes": [],
    "example": "<dd>Cascading Style Sheets</dd>",
    "type": "block",
    "selfClosing": false
  },
`;

code = code.replace('export const htmlTagsData: Record<string, any> = {', 'export const htmlTagsData: Record<string, any> = {\n' + newTags);

fs.writeFileSync('src/data/htmlTagsData.ts', code);
console.log('Patched htmlTagsData.ts');
