const fs = require('fs');

const curriculumFile = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(curriculumFile, 'utf8');

const searchFlexContainer = `                <div className="flex flex-wrap gap-1.5">
                  {['flex-direction', 'flex-wrap', 'flex'].map(prop => {
                    const isMostlyUsed = ['flex-direction', 'flex-wrap', 'flex'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceFlexContainer = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-direction'].map(prop => {
                      const isMostlyUsed = ['flex-direction', 'flex-wrap', 'flex'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-wrap'].map(prop => {
                      const isMostlyUsed = ['flex-direction', 'flex-wrap', 'flex'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['flex'].map(prop => {
                      const isMostlyUsed = ['flex-direction', 'flex-wrap', 'flex'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchFlexContainer, replaceFlexContainer);

const searchFlexItem = `                <div className="flex flex-wrap gap-1.5">
                  {['flex-basis', 'flex-grow', 'flex-shrink', 'order'].map(prop => {
                    const isMostlyUsed = ['flex-grow', 'flex-shrink'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceFlexItem = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-grow', 'flex-shrink'].map(prop => {
                      const isMostlyUsed = ['flex-grow', 'flex-shrink'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['flex-basis'].map(prop => {
                      const isMostlyUsed = ['flex-grow', 'flex-shrink'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['order'].map(prop => {
                      const isMostlyUsed = ['flex-grow', 'flex-shrink'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchFlexItem, replaceFlexItem);

const searchGridContainer = `                <div className="flex flex-wrap gap-1.5">
                  {['grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'justify-items'].map(prop => {
                    const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceGridContainer = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-template-columns', 'grid-template-rows'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-auto-columns', 'grid-auto-rows'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-auto-flow'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-items'].map(prop => {
                      const isMostlyUsed = ['grid-template-columns', 'grid-template-rows'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchGridContainer, replaceGridContainer);

const searchGridItem = `                <div className="flex flex-wrap gap-1.5">
                  {['grid-column', 'grid-row', 'justify-self'].map(prop => {
                    const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceGridItem = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['grid-column', 'grid-row'].map(prop => {
                      const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-self'].map(prop => {
                      const isMostlyUsed = ['grid-column', 'grid-row'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchGridItem, replaceGridItem);

fs.writeFileSync(curriculumFile, content);
