const colors = require('tailwindcss/colors');
const output = {};
for (const [key, value] of Object.entries(colors)) {
  if (typeof value === 'object' && value['50']) {
    output[key] = value;
  }
}
require('fs').writeFileSync('colors_output.json', JSON.stringify(output, null, 2));
