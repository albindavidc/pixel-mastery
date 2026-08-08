const fs = require('fs');
const filepath = 'src/components/showcase/ComponentCard.tsx';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace(
  /className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:border-zinc-700 relative group scroll-mt-40"/,
  'className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:border-zinc-700 relative group scroll-mt-40"'
);

content = content.replace(
  /className="p-4 md:p-6 flex-1 flex flex-col justify-center items-center min-h-\[200px\] relative bg-zinc-950\/50 pt-10"/,
  'className="p-4 md:p-6 flex-1 flex flex-col justify-center items-center min-h-[200px] relative bg-zinc-950/50 pt-10 rounded-t-2xl"'
);

content = content.replace(
  /className="p-4 md:p-5 border-t border-zinc-800 bg-zinc-900"/,
  'className="p-4 md:p-5 border-t border-zinc-800 bg-zinc-900 rounded-b-2xl"'
);

fs.writeFileSync(filepath, content, 'utf8');
