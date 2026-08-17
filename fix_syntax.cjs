const fs = require('fs');

const playgrounds = [
  'src/components/TailwindPlayground.tsx',
  'src/components/LayoutPlayground.tsx',
  'src/components/StylingPlayground.tsx',
  'src/components/Playground.tsx'
];

for (const file of playgrounds) {
  let content = fs.readFileSync(file, 'utf8');

  // Fix the invalid closing tag order
  // It currently has:
  //           </div>
  //           </Panel>
  // Which should be:
  //           </Panel>
  // Because the Panel replaced the div.
  
  content = content.replace(
    '          </div>\n          </Panel>',
    '          </Panel>'
  );
  
  // Wait, what about the closing of Code Editor Area?
  // Original:
  //               spellCheck="false"
  //             />
  //           </div>
  //         </div>
  //       </div>
  // 
  // I replaced:
  //               spellCheck="false"
  //             />
  //           </div>
  //         </div>
  //       </div>
  // With:
  //               spellCheck="false"
  //             />
  //           </div>
  //         </div>
  //         </Panel>
  //         </PanelGroup>
  //       </div>
  //
  // That part is probably correct, but let's see. In Playground.tsx, it complained:
  // Unexpected closing "div" tag does not match opening "Panel" tag
  // Wait.
  
  fs.writeFileSync(file, content);
  console.log('Fixed syntax in ' + file);
}
