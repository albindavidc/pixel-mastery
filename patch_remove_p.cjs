const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlModuleDetails.tsx', 'utf-8');

const blockToRemove = `
        {moduleId === 'html-beginner' && (
          <div className="bg-zinc-900 border-l-4 border-ds-indigo p-5 rounded-r-xl shadow-sm text-sm">
            <h4 className="font-bold text-white mb-2 font-display">Global Attributes</h4>
            <p className="text-zinc-400 leading-relaxed">
              The lists below include <strong>element-specific attributes only</strong>. We intentionally exclude global attributes 
              (<code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">id</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">class</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">style</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">title</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">hidden</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">tabindex</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">lang</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">dir</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">data-*</code>, <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-ds-fuchsia/10 text-ds-fuchsia border border-ds-fuchsia/20">aria-*</code>, etc.) 
              because they apply to almost every HTML element.
            </p>
          </div>
        )}`;

if (content.includes(blockToRemove)) {
    content = content.replace(blockToRemove, '');
    fs.writeFileSync('src/components/HtmlModuleDetails.tsx', content, 'utf-8');
    console.log("Removed the block successfully.");
} else {
    console.log("Block not found. Trying regex or exact lines...");
}
