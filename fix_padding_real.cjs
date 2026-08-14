const fs = require('fs');
let content = fs.readFileSync('src/components/TailwindAnatomyGuidelines.tsx', 'utf-8');
const lines = content.split('\n');

// we want to delete line 138 (index 137)
if (lines[137].trim() === '</div>') {
    lines.splice(137, 1);
}

// now we want to insert '        </div>' before line 222 (which is old 223, index 222)
// but wait, since we deleted one line, old line 223 is now line 222 (index 221).
// let's just find the line that has Container 2 and go up
let c2Idx = lines.findIndex(l => l.includes('Tailwind CSS Anatomy: Advanced (4-6)'));
// Container 2 is at index c2Idx (e.g. 227).
// The '<div className="bg-zinc-900 border border-zinc-800' for Container 2 is at c2Idx - 4.
// The '      </div>' closing Container 1 is at c2Idx - 6.
// We want to insert '        </div>' at c2Idx - 6, pushing the closing of Container 1 down.

let insertIdx = c2Idx - 6;
lines.splice(insertIdx, 0, '        </div>');

fs.writeFileSync('src/components/TailwindAnatomyGuidelines.tsx', lines.join('\n'), 'utf-8');
