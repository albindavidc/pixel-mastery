const fs = require('fs');

const file = 'src/components/IframePreview.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchStr = `          <div className="flex items-center gap-2 text-fuchsia-400">
            <span className="w-3 h-3 rounded bg-fuchsia-500/20 border-2 border-fuchsia-500"></span>
            <span>Items</span>
          </div>`;

const replaceStr = `          <div className="flex items-center gap-2 text-fuchsia-400">
            <span className="w-3 h-3 flex items-center justify-center rounded bg-fuchsia-500/20 border border-fuchsia-500 text-[8px] font-mono leading-none">1</span>
            <span>Item (1-9)</span>
          </div>`;

content = content.replace(searchStr, replaceStr);

fs.writeFileSync(file, content);
