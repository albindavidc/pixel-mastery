const fs = require('fs');
const content = fs.readFileSync('src/data/stylingModules.ts', 'utf8');

const replacement = `    content: \`Visual Effects & Filter
Utilities for applying visual effects like shadows, opacity, filters, and masks.

### Quick Reference

<table class="w-full text-sm text-left mb-6">
  <thead class="text-xs text-zinc-400 uppercase bg-zinc-900/50">
    <tr>
      <th class="px-4 py-3 rounded-tl-lg">Property</th>
      <th class="px-4 py-3 rounded-tr-lg">Description</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-zinc-800/50 text-zinc-300">
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Opacity</td><td class="px-4 py-3">Controls the transparency of an element.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Shadow</td><td class="px-4 py-3">Adds a drop shadow behind an element's box.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Ring</td><td class="px-4 py-3">Adds a solid outline-style border using box-shadow, doesn't affect layout.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Text Shadow</td><td class="px-4 py-3">Adds a drop shadow to the text of an element.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Filter</td><td class="px-4 py-3">Applies visual effects (blur, brightness, etc.) directly to the element itself.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Backdrop Filter</td><td class="px-4 py-3">Applies effects to whatever is *behind* an element, not the element itself — needs a translucent element to be visible.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Mask</td><td class="px-4 py-3">Uses an image or gradient to hide portions of an element.</td></tr>
  </tbody>
</table>

### Filters vs Backdrop Filters vs Masks vs Shadows

- **Shadows**: Adds a drop shadow behind an element's box (or text).
- **Filters**: Applies visual effects directly to the element itself.
- **Backdrop Filters**: Applies effects to the content *behind* an element. The element needs a transparent background to see the effect.
- **Masks**: Uses an image or gradient to hide portions of an element.

<div class="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg mt-4">
  <strong class="text-amber-400 block mb-2">Tailwind v4 Note</strong>
  <p class="text-amber-200/80 text-sm">Tailwind v4 consolidates complex arbitrary values and color families. Use the interactive tools above to generate the exact effect classes.</p>
</div>\`,
    examples:`;

const newContent = content.replace(/    content: `Visual Effects & Filter.*?    examples:/s, replacement);
fs.writeFileSync('src/data/stylingModules.ts', newContent);
