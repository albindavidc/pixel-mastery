const fs = require('fs');

const file = 'src/components/IframePreview.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchStr = '                        <div className={`min-w-[3rem] min-h-[3rem] sm:min-w-[5rem] sm:min-h-[5rem] rounded-xl bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-xl sm:text-2xl transition-all duration-300 ${itemClassesStr}`}>1</div>';
const replaceStr = '                        <div className={`min-w-[3rem] min-h-[3rem] sm:min-w-[5rem] sm:min-h-[5rem] rounded-xl bg-fuchsia-500/20 border-2 border-fuchsia-500 flex items-center justify-center text-fuchsia-100 font-bold text-xl sm:text-2xl transition-all duration-300 shadow-[0_0_15px_rgba(217,70,239,0.3)] z-10 ${itemClassesStr}`}>1</div>';

content = content.replace(searchStr, replaceStr);

fs.writeFileSync(file, content);
