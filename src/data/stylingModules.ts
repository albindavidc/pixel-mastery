import { Module } from '../types';

export const stylingModules: Module[] = [
  {
    id: 'tailwind-styling-background',
    title: 'Background',
    category: 'tailwind',
    description: 'Utilities for controlling the background of an element.',
    content: `Background
Utilities for controlling the background of an element.

<table class="w-full text-sm text-left mb-6">
  <thead class="text-xs text-zinc-400 uppercase bg-zinc-900/50">
    <tr>
      <th class="px-4 py-3 rounded-tl-lg">Property</th>
      <th class="px-4 py-3 rounded-tr-lg">Description</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-zinc-800/50 text-zinc-300">
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Attachment</td><td class="px-4 py-3">Controls how a background image behaves when scrolling.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Clip</td><td class="px-4 py-3">Controls how far a background bleeds into the bounding box.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Image</td><td class="px-4 py-3">Controls the background image, including linear, radial, and conic gradients.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Origin</td><td class="px-4 py-3">Controls where the background is positioned relative to the border, padding, and content.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Position</td><td class="px-4 py-3">Controls the starting position of a background image.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Repeat</td><td class="px-4 py-3">Controls how a background image repeats if it is smaller than the container.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Size</td><td class="px-4 py-3">Controls the background size (auto, cover, contain).</td></tr>
  </tbody>
</table>

### Color Family System
Tailwind provides a comprehensive palette of 26 color families. Each family typically includes 11 shades ranging from **50 (lightest)** to **950 (darkest)**. Use the interactive picker above to explore and select the perfect color step.

### Gradients
Use bg-linear-to-*, bg-radial, or bg-conic-* to define a gradient type. Then use from-*, via-*, and to-* utilities to specify the color stops.
`,
    examples: [
      { label: 'Gradient to right', classes: 'bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500' },
      { label: 'Background cover center', classes: 'bg-cover bg-center bg-no-repeat' },
      { label: 'Fixed background', classes: 'bg-fixed bg-cyan-600' }
    ],
    challenge: {
      description: 'Build a diagonal gradient from emerald to cyan, covering the full element without repeating.',
      targetClasses: ['bg-linear-to-br', 'from-emerald-500', 'to-cyan-500', 'bg-cover', 'bg-no-repeat']
    },
    groupId: 'styling-group',
    groupTitle: 'Styling'
  },
    {
    id: 'tailwind-styling-text',
    title: 'Text',
    category: 'tailwind',
    description: 'Utilities for controlling text styling.',
    content: `Text
Utilities for controlling typography, spacing, colors, and layout of text elements.

### Quick Reference

<table class="w-full text-sm text-left mb-6">
  <thead class="text-xs text-zinc-400 uppercase bg-zinc-900/50">
    <tr>
      <th class="px-4 py-3 rounded-tl-lg">Group</th>
      <th class="px-4 py-3 rounded-tr-lg">Description</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-zinc-800/50 text-zinc-300">
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Font</td><td class="px-4 py-3">Family, size, weight, and style variations.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Color</td><td class="px-4 py-3">Text fill colors and opacities.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Spacing</td><td class="px-4 py-3">Tracking (letter-spacing) and leading (line-height).</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Layout & Text</td><td class="px-4 py-3">Alignment, wrapping, overflowing, and hyphenation.</td></tr>
    <tr><td class="px-4 py-3 font-mono text-indigo-400">Decoration</td><td class="px-4 py-3">Underlines, styles, thicknesses, and offsets.</td></tr>
  </tbody>
</table>

### Color Family System
Tailwind provides a comprehensive palette of 26 color families. Each family typically includes 11 shades ranging from **50 (lightest)** to **950 (darkest)**. Use the interactive picker above to explore and select the perfect text or decoration color step.

### Tailwind v4 Update
> **Note:** In Tailwind CSS v4, \`text-opacity-*\` utilities are deprecated. Use the modern opacity modifier syntax instead: \`text-blue-500/50\`.`,
    examples: [
      { label: 'Hero Text', classes: 'text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500' },
      { label: 'Subtle Metadata', classes: 'text-sm font-medium tracking-wide text-zinc-500 uppercase' },
      { label: 'Fancy Underline', classes: 'underline decoration-wavy decoration-pink-500 decoration-2 underline-offset-4' }
    ],
    challenge: {
      description: 'Style a modern quote block using italic serif text, with a large size, indigo color, and relaxed line height.',
      targetClasses: ['font-serif', 'italic', 'text-2xl', 'text-indigo-600', 'leading-relaxed']
    },
    groupId: 'styling-group',
    groupTitle: 'Styling'
  }
,
  {
    id: 'tailwind-styling-svg',
    title: 'SVG',
    category: 'tailwind',
    description: 'Utilities for styling SVG elements.',
    content: `fill
Utilities for styling the fill of SVG elements.

Class
Styles
fill-none
fill: none;
fill-inherit
fill: inherit;
fill-current
fill: currentColor;
fill-transparent
fill: transparent;
fill-black
fill: var(--color-black); /* #000 */
fill-white
fill: var(--color-white); /* #fff */
fill-red-50
fill: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
fill-red-100
fill: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
fill-red-200
fill: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
fill-red-300
fill: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
fill-red-400
fill: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
fill-red-500
fill: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */
fill-red-600
fill: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */
fill-red-700
fill: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */
fill-red-800
fill: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */
fill-red-900
fill: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */
fill-red-950
fill: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */
fill-(<custom-property>)
fill: var(<custom-property>);
fill-[<color>]
fill: <color>;

stroke
Utilities for styling the stroke of SVG elements.

Class
Styles
stroke-none
stroke: none;
stroke-inherit
stroke: inherit;
stroke-current
stroke: currentColor;
stroke-transparent
stroke: transparent;
stroke-black
stroke: var(--color-black); /* #000 */
stroke-white
stroke: var(--color-white); /* #fff */
stroke-red-50
stroke: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
stroke-red-100
stroke: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
stroke-red-200
stroke: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
stroke-red-300
stroke: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
stroke-red-400
stroke: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
stroke-red-500
stroke: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */
stroke-red-600
stroke: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */
stroke-red-700
stroke: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */
stroke-red-800
stroke: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */
stroke-red-900
stroke: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */
stroke-red-950
stroke: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */
stroke-(<custom-property>)
stroke: var(<custom-property>);
stroke-[<color>]
stroke: <color>;

stroke-width
Utilities for styling the stroke width of SVG elements.

Class
Styles
stroke-<number>
stroke-width: <number>;
stroke-(length:<custom-property>)
stroke-width: var(<custom-property>);
stroke-[<value>]
stroke-width: <value>;`,
    examples: [],
    challenge: {
      description: '',
      targetClasses: []
    },
    groupId: 'styling-group',
    groupTitle: 'Styling'
  }
];