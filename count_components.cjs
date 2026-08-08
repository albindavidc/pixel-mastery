const fs = require('fs');
const path = require('path');

const dir = 'src/components/showcase/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const componentMap = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const matches = [...content.matchAll(/name:\s*'([^']+)'/g)];
  
  // filename to id mapping
  let id = file.replace('.tsx', '').toLowerCase();
  if (id === 'layoutandstructure') id = 'layout';
  if (id === 'actionsandcontrols') id = 'actions';
  if (id === 'formanddataentry') id = 'form';
  if (id === 'datadisplay') id = 'data';
  if (id === 'feedbackandstatus') id = 'feedback';
  if (id === 'overlayandpopups') id = 'overlay';
  if (id === 'visualeffects') id = 'visual';
  if (id === 'utilitycomponents') id = 'utility';
  if (id === 'specializedcomponents') id = 'specialized';
  
  if (!componentMap[id]) componentMap[id] = [];
  componentMap[id] = matches.map(m => m[1]);
}

console.log(JSON.stringify(componentMap, null, 2));
