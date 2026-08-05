const fs = require('fs');
const file = 'src/components/BasisHelpModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const search = `<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">`;
const replace = `<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
