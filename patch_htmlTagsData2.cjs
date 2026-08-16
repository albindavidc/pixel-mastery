const fs = require('fs');
let code = fs.readFileSync('src/data/htmlTagsData.ts', 'utf8');

const oldDl = `  "<dl>": {
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
  },`;

const newDl = `  "<dl>": {
    "what": "The <dl> element is used to represent a description list.",
    "when": "Use when you need a glossary, a list of definitions, or metadata pairs.",
    "type": "Block-level",
    "attributes": [],
    "example": "<dl>\\n  <dt>HTML</dt>\\n  <dd>HyperText Markup Language</dd>\\n</dl>",
    "accessibility": "Exposes description lists semantically for screen readers.",
    "syntax": "<dl>...</dl>",
    "definition": "The glossary \u2014 a container for a list of terms and their descriptions or definitions.",
    "required": [],
    "optional": []
  },
  "<dt>": {
    "what": "The <dt> element is used to represent a term in a description list.",
    "when": "Use inside a <dl> element to define the term being described.",
    "type": "Block-level",
    "attributes": [],
    "example": "<dt>CSS</dt>",
    "accessibility": "Indicates the term being described.",
    "syntax": "<dt>...</dt>",
    "definition": "The term being defined or described in a description list.",
    "required": [],
    "optional": []
  },
  "<dd>": {
    "what": "The <dd> element provides the details about or the definition of the preceding term (<dt>).",
    "when": "Use inside a <dl> element immediately following a <dt>.",
    "type": "Block-level",
    "attributes": [],
    "example": "<dd>Cascading Style Sheets</dd>",
    "accessibility": "Provides the description associated with a term.",
    "syntax": "<dd>...</dd>",
    "definition": "The description, definition, or value for the preceding term in a description list.",
    "required": [],
    "optional": []
  },`;

code = code.replace(oldDl, newDl);
fs.writeFileSync('src/data/htmlTagsData.ts', code);
console.log('Patched htmlTagsData.ts again');
