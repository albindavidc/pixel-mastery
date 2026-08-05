const fs = require('fs');
const path = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetArray = `                  {[
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
                  ]`;

const replacementArray = `                  {[
                    { prop: 'flex-basis', desc: 'Sets the initial size of a flex item before extra space is distributed.' },
                    { prop: 'flex-direction', desc: 'Defines the main axis direction (row, column, etc.) of flex items.' },
                    { prop: 'flex-wrap', desc: 'Controls whether flex items stay on one line or wrap.' },
                    { prop: 'flex', desc: 'Shorthand for flex-grow, flex-shrink, and flex-basis.' },
                    { 
                      prop: 'flex-grow', 
                      desc: 'Determines how much a flex item expands to fill available space.',
                      subprops: [
                        { class: 'grow', style: 'flex-grow: 1;' },
                        { class: 'grow-<number>', style: 'flex-grow: <number>;' },
                        { class: 'grow-[<value>]', style: 'flex-grow: <value>;' },
                        { class: 'grow-(<custom-property>)', style: 'flex-grow: var(<custom-property>);' }
                      ]
                    },
                    { 
                      prop: 'flex-shrink', 
                      desc: 'Determines how much a flex item shrinks when space is limited.',
                      subprops: [
                        { class: 'shrink', style: 'flex-shrink: 1;' },
                        { class: 'shrink-<number>', style: 'flex-shrink: <number>;' },
                        { class: 'shrink-[<value>]', style: 'flex-shrink: <value>;' },
                        { class: 'shrink-(<custom-property>)', style: 'flex-shrink: var(<custom-property>);' }
                      ]
                    },
                    { 
                      prop: 'order', 
                      desc: 'Changes the visual order of flex or grid items without changing the HTML.',
                      subprops: [
                        { class: 'order-<number>', style: 'order: <number>;' },
                        { class: '-order-<number>', style: 'order: calc(<number> * -1);' },
                        { class: 'order-first', style: 'order: -9999;' },
                        { class: 'order-last', style: 'order: 9999;' },
                        { class: 'order-[<value>]', style: 'order: <value>;' },
                        { class: 'order-(<custom-property>)', style: 'order: var(<custom-property>);' }
                      ]
                    },
                    { prop: 'grid-template-columns', desc: 'Defines the number and size of explicit grid columns.' },
                    { prop: 'grid-column', desc: 'Specifies which column(s) a grid item occupies.' },
                    { prop: 'grid-template-rows', desc: 'Defines the number and size of explicit grid rows.' },
                    { prop: 'grid-row', desc: 'Specifies which row(s) a grid item occupies.' },
                    { prop: 'grid-auto-flow', desc: 'Controls how automatically placed grid items are inserted.' },
                    { prop: 'grid-auto-columns', desc: 'Sets the size of implicitly created grid columns.' },
                    { prop: 'grid-auto-rows', desc: 'Sets the size of implicitly created grid rows.' },
                    { prop: 'gap', desc: 'Sets the spacing between rows and columns.' },
                  ]`;

const targetMap = `                  ].map(item => (
                    <div key={item.prop} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-zinc-300 min-w-[170px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                      <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}`;

const replacementMap = `                  ].map(item => (
                    <div key={item.prop} className="flex flex-col gap-2 py-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-xs font-mono text-zinc-300 min-w-[170px] shrink-0 bg-zinc-800/40 px-1.5 py-0.5 rounded w-fit border border-zinc-700/50">{item.prop}</span>
                        <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
                      </div>
                      {item.subprops && (
                        <div className="mt-1 ml-2 sm:ml-[182px] border-l border-zinc-700/50 pl-4 space-y-1.5">
                          {item.subprops.map(sp => (
                            <div key={sp.class} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                              <span className="text-[10px] font-mono text-indigo-300 min-w-[140px] shrink-0 bg-indigo-950/30 px-1.5 py-0.5 rounded w-fit">{sp.class}</span>
                              <span className="text-[10px] font-mono text-zinc-500">{sp.style}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}`;

let newContent = content.replace(targetArray, replacementArray);
newContent = newContent.replace(targetMap, replacementMap);

if (content !== newContent) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Successfully patched subprops.");
} else {
  console.log("Failed to patch subprops.");
}
