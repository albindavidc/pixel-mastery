const fs = require('fs');
let content = fs.readFileSync('src/components/CodeEditorPreview.tsx', 'utf8');

content = content.replace(
  '        </iframe>\n      </Panel>\n    </PanelGroup>\n    </div>\n  );\n}',
  '        </iframe>\n      </Panel>\n    </PanelGroup>\n    </div>\n  );\n}'
);
// Wait, the regex in robust_patch replaced:
//       </iframe>
//     </div>
//   </div>
// );
// with:
//       </iframe>
//     </Panel>
//   </PanelGroup>
//   </div>
// );

// But the bottom was:
//       </div>
//     </div>
//   );
// }

// Let's just restore CodeEditorPreview entirely and rewrite it.
