const fs = require('fs');

function patchControlBarAccordion() {
  const path = 'src/components/ControlBarAccordion.tsx';
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/activeGradientTab\?\: \'FROM\' \| \'VIA\' \| \'TO\'/g, "activeSubTab?: string");
  content = content.replace(/setActiveGradientTab\?\: \(tab\: \'FROM\' \| \'VIA\' \| \'TO\'\) \=\> void/g, "setActiveSubTab?: (tab: string) => void");
  content = content.replace(/activeGradientTab \=\=\= tab/g, "activeSubTab === tab");
  content = content.replace(/setActiveGradientTab\?\.\(tab\)/g, "setActiveSubTab?.(tab)");
  
  // also change `group.isGradientStop ? ... : ...`
  // Actually, we can just replace `isGradientStop` with `isSubGroup` and `group.isGradientStop` with `group.isSubGroup`. 
  // Wait, I should support both `isGradientStop` (for backwards compatibility) and `isSubGroup`.
  content = content.replace(/group\.isGradientStop \?/g, "(group.isGradientStop || group.isSubGroup) ?");

  fs.writeFileSync(path, content);
}

function patchStylingPlayground() {
  const path = 'src/components/StylingPlayground.tsx';
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/const \[activeGradientTab\, setActiveGradientTab\] \= useState\<\'FROM\' \| \'VIA\' \| \'TO\'\>\(\'FROM\'\)\;/g, 
    "const [activeSubTab, setActiveSubTab] = useState<string>('FROM');\n  const [activeFontTab, setActiveFontTab] = useState<string>('FAMILY');\n  const [activeSpacingTab, setActiveSpacingTab] = useState<string>('LETTER SPACING');\n  const [activeTextTab, setActiveTextTab] = useState<string>('ALIGN');\n  const [activeDecorationTab, setActiveDecorationTab] = useState<string>('LINE');\n  const [activeListTab, setActiveListTab] = useState<string>('TYPE');");
    
  // replace activeControlData filtering
  const oldFilter = `const activeControlData = (stylingControlBarData[previewMode as keyof typeof stylingControlBarData] || []).filter((g: any) => {
    if (g.isGradientStop) {
      return hasGradient && g.group.startsWith(activeGradientTab);
    }
    return true;
  });`;
  const newFilter = `const activeControlData = (stylingControlBarData[previewMode as keyof typeof stylingControlBarData] || []).filter((g: any) => {
    if (g.isGradientStop) {
      return hasGradient && g.group.startsWith(activeSubTab);
    }
    if (g.isSubGroup) {
      if (g.parentGroup === 'FONT') return g.group.startsWith(activeFontTab);
      if (g.parentGroup === 'SPACING & LAYOUT') return g.group.startsWith(activeSpacingTab);
      if (g.parentGroup === 'TEXT') return g.group.startsWith(activeTextTab);
      if (g.parentGroup === 'DECORATION') return g.group.startsWith(activeDecorationTab);
      if (g.parentGroup === 'LIST') return g.group.startsWith(activeListTab);
    }
    return true;
  });`;
  content = content.replace(oldFilter, newFilter);

  // In the activeTabs rendering
  // !group.isGradientStop || self.findIndex...
  content = content.replace(/!group\.isGradientStop/g, "(!group.isGradientStop && !group.isSubGroup)");
  content = content.replace(/group\.isGradientStop \?/g, "(group.isGradientStop || group.isSubGroup) ?");
  content = content.replace(/g\.isGradientStop/g, "(g.isGradientStop || g.isSubGroup)");
  
  // label = 'GRADIENT';
  content = content.replace(/if \(group\.isGradientStop \|\| group\.isSubGroup\) \{\n\s+label = \'GRADIENT\'\;\n\s+\}/g, "if (group.isGradientStop) label = 'GRADIENT'; else if (group.isSubGroup) label = group.parentGroup;");
  // wait, the regex above might not match exactly.
  // let's just do a string replace
  content = content.replace("if ((group.isGradientStop || group.isSubGroup)) {\n                 label = 'GRADIENT';\n              }", "if (group.isGradientStop) {\n                 label = 'GRADIENT';\n              } else if (group.isSubGroup) {\n                 label = group.parentGroup;\n              }");

  // Also pass activeSubTab and setActiveSubTab
  // <ControlBarAccordion ... activeGradientTab={activeGradientTab} ... />
  // We need to pass the right activeSubTab based on the group.
  const oldProps = `activeGradientTab={activeGradientTab}
                setActiveGradientTab={setActiveGradientTab}`;
  const newProps = `activeSubTab={group.parentGroup === 'FONT' ? activeFontTab : group.parentGroup === 'SPACING & LAYOUT' ? activeSpacingTab : group.parentGroup === 'TEXT' ? activeTextTab : group.parentGroup === 'DECORATION' ? activeDecorationTab : group.parentGroup === 'LIST' ? activeListTab : activeSubTab}
                setActiveSubTab={group.parentGroup === 'FONT' ? setActiveFontTab : group.parentGroup === 'SPACING & LAYOUT' ? setActiveSpacingTab : group.parentGroup === 'TEXT' ? setActiveTextTab : group.parentGroup === 'DECORATION' ? setActiveDecorationTab : group.parentGroup === 'LIST' ? setActiveListTab : setActiveSubTab}`;
  content = content.replace(oldProps, newProps);

  fs.writeFileSync(path, content);
}

patchControlBarAccordion();
patchStylingPlayground();
