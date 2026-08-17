const fs = require('fs');
let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');
const idx = content.lastIndexOf('<span className="text-sm font-medium">Async & Fetch</span>');
if (idx !== -1) {
    const beforeCut = content.substring(0, idx);
    const suffix = '<span className="text-sm font-medium">Async & Fetch</span>\n           </div>\n        </div>\n      </div>\n    </div>\n  );\n}';
    fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', beforeCut + suffix);
}
