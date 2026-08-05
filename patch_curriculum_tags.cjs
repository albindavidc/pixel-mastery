const fs = require('fs');

const curriculumFile = 'src/components/Curriculum.tsx';
let content = fs.readFileSync(curriculumFile, 'utf8');

// Replace Common Properties Container part
const searchContainer = `                <div className="flex flex-wrap gap-1.5">
                  {['gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items'].map(prop => {
                    const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceContainer = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['align-items', 'align-content'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['place-content', 'place-items'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['justify-content'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['gap'].map(prop => {
                      const isMostlyUsed = ['gap', 'justify-content', 'align-items'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-sky-500/10 text-sky-300 border-sky-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchContainer, replaceContainer);

const searchItem = `                <div className="flex flex-wrap gap-1.5">
                  {['align-self', 'place-self'].map(prop => {
                    const isMostlyUsed = ['align-self'].includes(prop);
                    return (
                      <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                        {prop}
                      </span>
                    );
                  })}
                </div>`;

const replaceItem = `                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {['align-self'].map(prop => {
                      const isMostlyUsed = ['align-self'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['place-self'].map(prop => {
                      const isMostlyUsed = ['align-self'].includes(prop);
                      return (
                        <span key={prop} className={\`px-2 py-1 rounded text-[10px] font-mono border \${isMostlyUsed ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20'}\`}>
                          {prop}
                        </span>
                      );
                    })}
                  </div>
                </div>`;

content = content.replace(searchItem, replaceItem);
fs.writeFileSync(curriculumFile, content);
