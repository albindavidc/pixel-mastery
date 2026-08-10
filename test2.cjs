require('ts-node/register');
const { stylingControlBarData } = require('./src/data/stylingControlBar.ts');
console.log(stylingControlBarData.text.map(g => g.group));
