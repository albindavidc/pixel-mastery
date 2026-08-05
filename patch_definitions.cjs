const fs = require('fs');
const path = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = '<p>{module.content}</p>';

const definitionsCode = `
          {/* Definitions */}
          <div className="mt-8 mb-6 space-y-6 not-prose">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Core Layout Properties */}
              <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
                <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                  <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    Layout Properties
                  </h4>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { prop: 'flex-basis', desc: 'Sets the initial size of a flex item before extra space is distributed.' },
                    { prop: 'flex-direction', desc: 'Defines the main axis direction (row, column, etc.) of flex items.' },
                    { prop: 'flex-wrap', desc: 'Controls whether flex items stay on one line or wrap.' },
                    { prop: 'flex', desc: 'Shorthand for flex-grow, flex-shrink, and flex-basis.' },
                    { prop: 'flex-grow', desc: 'Determines how much a flex item expands to fill available space.' },
                    { prop: 'flex-shrink', desc: 'Determines how much a flex item shrinks when space is limited.' },
                    { prop: 'order', desc: 'Changes the visual order of flex or grid items without changing the HTML.' },
                    { prop: 'grid-template-columns', desc: 'Defines the number and size of explicit grid columns.' },
                    { prop: 'grid-column', desc: 'Specifies which column(s) a grid item occupies.' },
                    { prop: 'grid-template-rows', desc: 'Defines the number and size of explicit grid rows.' },
                    { prop: 'grid-row', desc: 'Specifies which row(s) a grid item occupies.' },
                    { prop: 'grid-auto-flow', desc: 'Controls how automatically placed grid items are inserted.' },
                    { prop: 'grid-auto-columns', desc: 'Sets the size of implicitly created grid columns.' },
                    { prop: 'grid-auto-rows', desc: 'Sets the size of implicitly created grid rows.' },
                    { prop: 'gap', desc: 'Sets the spacing between rows and columns.' },
                  ].map(item => (
                    <div key={item.prop} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-zinc-300 min-w-[170px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                      <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alignment Properties */}
              <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
                <div className="bg-zinc-800/40 px-4 py-2 border-b border-zinc-800/60">
                  <h4 className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                    Alignment Properties
                  </h4>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { prop: 'justify-content', desc: 'Aligns all items as a group along the main (or inline) axis.' },
                    { prop: 'justify-items', desc: 'Sets the default inline-axis alignment for all grid items inside their cells.' },
                    { prop: 'justify-self', desc: 'Aligns a single grid item along the inline axis within its own cell.' },
                    { prop: 'align-content', desc: 'Aligns multiple rows or columns as a group along the cross (or block) axis.' },
                    { prop: 'align-items', desc: 'Sets the default cross-axis alignment for all flex or grid items.' },
                    { prop: 'align-self', desc: 'Overrides align-items for one flex or grid item.' },
                    { prop: 'place-content', desc: 'Shorthand for align-content and justify-content.' },
                    { prop: 'place-items', desc: 'Shorthand for align-items and justify-items.' },
                    { prop: 'place-self', desc: 'Shorthand for align-self and justify-self.' },
                  ].map(item => (
                    <div key={item.prop} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-zinc-300 min-w-[140px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                      <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
`;

if (content.includes(target)) {
  content = content.replace(target, target + '\n' + definitionsCode);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Successfully patched definitions");
} else {
  console.log("Target not found");
}
