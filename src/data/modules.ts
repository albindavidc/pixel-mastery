import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'layout',
    category: 'css',
    title: '1. Layout',
    description: 'Control the document flow and element visibility.',
    content: 'The `display` property sets whether an element is treated as a block or inline element and the layout used for its children, like flow layout, grid or flex. In Tailwind v4, standard display utilities remain unchanged.',
    examples: [
      { label: 'Block', classes: 'block bg-indigo-100 p-4' },
      { label: 'Inline Block', classes: 'inline-block bg-indigo-100 p-4' },
      { label: 'Hidden', classes: 'hidden' },
    ],
    challenge: {
      description: 'Make the element an inline-block with a hidden overflow.',
      targetClasses: ['inline-block', 'overflow-hidden'],
    }
  },
  {
    id: 'flexbox-grid',
    category: 'css',
    title: '2. Flexbox & Grid',
    description: 'One and two-dimensional layout methods for arranging items.',
    content: 'Flexbox is essential for one-dimensional layouts (rows or columns), while Grid allows you to define both rows and columns. Use `flex` or `grid` to enable them.',
    examples: [
      { label: 'Flex Row', classes: 'flex flex-row gap-4 bg-slate-100 p-4' },
      { label: '3 Columns Grid', classes: 'grid grid-cols-3 gap-4 bg-slate-100 p-4' },
      { label: 'Center Content (Flex)', classes: 'flex justify-center items-center h-32 bg-slate-100' },
    ],
    challenge: {
      description: 'Create a flex container, stacked in a column, with items centered vertically and horizontally.',
      targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center'],
    }
  },
  {
    id: 'spacing',
    category: 'css',
    title: '4. Spacing',
    description: 'Control margin, padding, and space between elements.',
    content: 'Tailwind uses a proportional spacing scale. `p-4` is padding all around, `mt-2` is margin top. `space-x-4` adds horizontal space between children.',
    examples: [
      { label: 'Padding All', classes: 'p-8 bg-indigo-100' },
      { label: 'Margin X & Y', classes: 'mx-4 my-8 bg-indigo-100 p-4' },
    ],
    challenge: {
      description: 'Add 24px of padding (p-6) and a horizontal margin of auto (mx-auto).',
      targetClasses: ['p-6', 'mx-auto'],
    }
  },
  {
    id: 'sizing',
    category: 'css',
    title: '5. Sizing',
    description: 'Set width and height of elements.',
    content: 'Use `w-*` and `h-*` for width and height. `w-full` means 100%. `size-16` is a shorthand for both `w-16` and `h-16`.',
    examples: [
      { label: 'Fixed Size', classes: 'w-32 h-32 bg-indigo-500' },
      { label: 'Size Shorthand', classes: 'size-24 bg-indigo-500' },
      { label: 'Full Width', classes: 'w-full h-16 bg-indigo-500' },
    ],
    challenge: {
      description: 'Create a square using the size shorthand for 64px (16).',
      targetClasses: ['size-16'],
    }
  },
  {
    id: 'position',
    category: 'css',
    title: '6. Position',
    description: 'Control how elements are positioned in the DOM.',
    content: 'Choose between `static`, `relative`, `absolute`, `fixed`, and `sticky`. Use `inset-0` as a shorthand for top/right/bottom/left 0.',
    examples: [
      { label: 'Relative', classes: 'relative top-4 left-4 p-4 bg-slate-200' },
      { label: 'Absolute Full', classes: 'absolute inset-0 bg-slate-900/50' },
    ],
    challenge: {
      description: 'Make the element relatively positioned and shift it down by 16px (top-4).',
      targetClasses: ['relative', 'top-4'],
    }
  },
  {
    id: 'borders',
    category: 'css',
    title: '7. Borders',
    description: 'Style the borders of your elements.',
    content: 'Use `border` to add a border, `border-{color}` to color it, and `rounded-*` for border radius.',
    examples: [
      { label: 'Basic Border', classes: 'border-2 border-indigo-500 p-4' },
      { label: 'Rounded Pill', classes: 'border border-slate-300 rounded-full px-4 py-2' },
    ],
    challenge: {
      description: 'Make a card with a 2px border, colored indigo-500, and large rounded corners.',
      targetClasses: ['border-2', 'border-indigo-500', 'rounded-lg'],
    }
  },
  {
    id: 'backgrounds',
    category: 'css',
    title: '8. Backgrounds',
    description: 'Set background colors, gradients, and images.',
    content: '`bg-{color}` sets solid backgrounds. Use `bg-gradient-to-{dir} from-{c} to-{c}` for gradients.',
    examples: [
      { label: 'Solid Color', classes: 'bg-emerald-500 size-24' },
      { label: 'Gradient', classes: 'bg-gradient-to-r from-indigo-500 to-purple-500 size-24' },
    ],
    challenge: {
      description: 'Create a linear gradient from top-left (tl) starting with red-500 and ending with yellow-500.',
      targetClasses: ['bg-gradient-to-tl', 'from-red-500', 'to-yellow-500'],
    }
  },
  {
    id: 'effects',
    category: 'css',
    title: '9. Effects',
    description: 'Add box shadows, opacity, and mix blend modes.',
    content: '`shadow-*` applies drop shadows. `opacity-*` sets transparency. `ring-*` creates focus rings.',
    examples: [
      { label: 'Medium Shadow', classes: 'shadow-md p-6 bg-white rounded-lg' },
      { label: 'Focus Ring', classes: 'ring-4 ring-indigo-500/50 p-4 bg-white rounded' },
    ],
    challenge: {
      description: 'Apply a large shadow (shadow-lg) and reduce opacity to 75%.',
      targetClasses: ['shadow-lg', 'opacity-75'],
    }
  },
  {
    id: 'typography',
    category: 'css',
    title: '10. Typography',
    description: 'Style your text.',
    content: 'Control font size (`text-xl`), weight (`font-bold`), color (`text-slate-900`), and more.',
    examples: [
      { label: 'Headline', classes: 'text-3xl font-bold tracking-tight text-slate-900' },
      { label: 'Muted Text', classes: 'text-sm text-slate-500' },
    ],
    challenge: {
      description: 'Make text extra-large (text-xl), semi-bold, and centered.',
      targetClasses: ['text-xl', 'font-semibold', 'text-center'],
    }
  },
  {
    id: 'transforms',
    category: 'css',
    title: '11. Transforms',
    description: 'Scale, rotate, and translate elements.',
    content: 'Tailwind v4 applies transforms automatically. Just use `scale-110`, `rotate-45`, `translate-x-4`.',
    examples: [
      { label: 'Rotate & Scale', classes: 'rotate-12 scale-110 bg-indigo-500 size-16' },
      { label: 'Translate', classes: 'translate-y-4 bg-indigo-500 size-16' },
    ],
    challenge: {
      description: 'Rotate the element 45 degrees and scale it up to 150%.',
      targetClasses: ['rotate-45', 'scale-150'],
    }
  },
  {
    id: 'transitions',
    category: 'css',
    title: '12. Transitions & Animation',
    description: 'Animate property changes.',
    content: 'Add `transition` to smooth changes, then specify `duration-*` and `ease-*`. Use `animate-*` for keyframe animations like pulse or spin.',
    examples: [
      { label: 'Hover Transition', classes: 'transition-all duration-300 hover:scale-110 bg-indigo-500 size-16' },
      { label: 'Spin Animation', classes: 'animate-spin bg-indigo-500 size-16' },
    ],
    challenge: {
      description: 'Add a standard transition, with a 500ms duration, using an ease-in-out timing function.',
      targetClasses: ['transition', 'duration-500', 'ease-in-out'],
    }
  },
  {
    id: 'interaction',
    category: 'css',
    title: '13. Interaction & Filters',
    description: 'Control cursors, selection, and visual filters.',
    content: 'Change the cursor with `cursor-pointer`. Add visual filters like `blur-md` or `grayscale`.',
    examples: [
      { label: 'Not Allowed Cursor', classes: 'cursor-not-allowed opacity-50 p-4 bg-slate-200' },
      { label: 'Blur Filter', classes: 'blur-sm bg-indigo-500 size-24' },
    ],
    challenge: {
      description: 'Change the cursor to a pointer and add a medium blur filter.',
      targetClasses: ['cursor-pointer', 'blur-md'],
    }
  },
  {
    id: 'states',
    category: 'css',
    title: '14. States',
    description: 'Style pseudo-classes like hover, focus, and dark mode.',
    content: 'Prefix utilities to apply them conditionally: `hover:bg-indigo-600`, `focus:ring-2`, `dark:bg-slate-800`.',
    examples: [
      { label: 'Hover State', classes: 'bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded' },
      { label: 'Dark Mode Support', classes: 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-4' },
    ],
    challenge: {
      description: 'Make the element red on hover, and blue when focused.',
      targetClasses: ['hover:bg-red-500', 'focus:bg-blue-500'],
    }
  },
  {
    id: 'responsive',
    category: 'css',
    title: '15. Responsive Design',
    description: 'Build mobile-first layouts.',
    content: 'Use breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to apply styles at specific screen widths. e.g., `flex-col md:flex-row`.',
    examples: [
      { label: 'Responsive Flex', classes: 'flex flex-col md:flex-row gap-4' },
      { label: 'Responsive Color', classes: 'bg-red-500 md:bg-green-500 lg:bg-blue-500 p-4 text-white' },
    ],
    challenge: {
      description: 'Set background to slate-200 by default, and change it to indigo-200 on medium (md) screens and above.',
      targetClasses: ['bg-slate-200', 'md:bg-indigo-200'],
    }
  }
,
  {
    id: 'tailwind-flexbox-grid',
    category: 'tailwind',
    title: 'Flexbox & Grid',
    description: 'One and two-dimensional layout methods for arranging items.',
    content: 'Flexbox is essential for one-dimensional layouts (rows or columns), while Grid allows you to define both rows and columns. Use `flex` or `grid` to enable them.',
    examples: [
      { label: 'Flex Row', classes: 'flex flex-row gap-4 bg-slate-100 p-4' },
      { label: '3 Columns Grid', classes: 'grid grid-cols-3 gap-4 bg-slate-100 p-4' },
      { label: 'Center Content (Flex)', classes: 'flex justify-center items-center h-32 bg-slate-100' },
    ],
    challenge: {
      description: 'Create a flex container, stacked in a column, with items centered vertically and horizontally.',
      targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center'],
    }
  }
];