const fs = require('fs');

let content = fs.readFileSync('src/components/DomBomJsCurriculum.tsx', 'utf8');

// 1. Extract the challenge block
const challengeStart = "          {challenge && (\\n            <div className=\\\"bg-[#141414] border border-zinc-800/50 rounded-2xl p-6 shadow-xl mt-4\\\">";
const challengeRegex = /\{\s*challenge && \(\s*<div className="bg-\[#141414\].*?\{challengeStatus === "error" && \(\s*<div className="text-rose-500 text-sm font-semibold">\s*Not quite right\. Keep trying!\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\}/s;

let match = content.match(challengeRegex);
if (!match) {
    console.log("Could not match challenge block.");
    process.exit(1);
}

let challengeBlock = match[0];

// Remove it from its current position
content = content.replace(challengeBlock, '');

// 2. We want to place it right after `<CodeEditorPreview ... /> </div>`
const insertPoint = `        />\n      </div>\n`;
if (content.includes(insertPoint)) {
    // We'll wrap the challenge in a container so it stretches full width but its content is centered
    // Or we just use the block as is, but maybe change the outer styles to fit full width.
    let fullWidthChallenge = challengeBlock.replace(
      'className="bg-[#141414] border border-zinc-800/50 rounded-2xl p-6 shadow-xl mt-4"',
      'className="bg-[#141414] border-t border-zinc-800 p-6 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)] flex-none z-20 relative"'
    );
    content = content.replace(insertPoint, insertPoint + fullWidthChallenge + '\\n');
    console.log("Challenge block moved.");
} else {
    console.log("Could not find insert point.");
}

// 3. Increase CodeEditorPreview height
content = content.replace(
    'className="flex-1 min-h-[500px] flex flex-col shrink-0"',
    'className="flex-1 min-h-[700px] flex flex-col shrink-0"'
);

fs.writeFileSync('src/components/DomBomJsCurriculum.tsx', content);
console.log("Done.");
