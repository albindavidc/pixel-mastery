const fs = require('fs');

let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');

// Find the last "Async & Fetch" part.
const marker = '<span className="text-sm font-medium">Async & Fetch</span>\\n           </div>\\n        </div>\\n      </div>';

const idx = content.lastIndexOf('<span className="text-sm font-medium">Async & Fetch</span>');
if (idx !== -1) {
    // Cut off everything after this div structure and replace it with proper closing tags
    const beforeCut = content.substring(0, idx);
    const suffix = '<span className="text-sm font-medium">Async & Fetch</span>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  );\n}';
    fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', beforeCut + suffix);
    console.log("Fixed end tags.");
} else {
    console.log("Could not find marker");
}
