import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'tailwind-layout-display',
    category: 'tailwind',
    title: 'Display',
    description: 'Utilities for controlling the display box type of an element.',
    content: `display
Utilities for controlling the display box type of an element.

Class
Styles
inline
display: inline;
block
display: block;
inline-block
display: inline-block;
flow-root
display: flow-root;
flex
display: flex;
inline-flex
display: inline-flex;
grid
display: grid;
inline-grid
display: inline-grid;
contents
display: contents;
table
display: table;
inline-table
display: inline-table;
table-caption
display: table-caption;
table-cell
display: table-cell;
table-column
display: table-column;
table-column-group
display: table-column-group;
table-footer-group
display: table-footer-group;
table-header-group
display: table-header-group;
table-row-group
display: table-row-group;
table-row
display: table-row;
list-item
display: list-item;
hidden
display: none;
sr-only
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip-path: inset(50%);
white-space: nowrap;
border-width: 0;
not-sr-only
position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip-path: none;
white-space: normal;

Flexbox is essential for one-dimensional layouts (rows or columns), while Grid allows you to define both rows and columns. Use flex or grid to enable them.`,
    examples: [
      { label: 'Block', classes: 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl' },
      { label: 'Inline Block', classes: 'inline-block p-6 w-48 bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl' },
      { label: 'Hidden', classes: 'hidden p-6 w-48 bg-rose-500/20 border-4 border-rose-500 rounded-2xl shadow-xl' },
      { label: 'Flex Row', classes: 'flex flex-row gap-4 bg-slate-100 p-4' },
      { label: '3 Columns Grid', classes: 'grid grid-cols-3 gap-4 bg-slate-100 p-4' },
      { label: 'Center Content (Flex)', classes: 'flex justify-center items-center h-32 bg-slate-100' }
    ],
    challenge: {
      description: 'Create a flex container, stacked in a column, with items centered vertically and horizontally.',
      targetClasses: ['flex', 'flex-col', 'justify-center', 'items-center']
    },
    groupId: 'layout-group',
    groupTitle: 'Layout'
  },
  {
    id: 'tailwind-layout-box-sizing',
    title: 'Box-sizing & Spacing',
    category: 'tailwind',
    description: 'Utilities for controlling how the browser should calculate an element\'s total size.',
    content: `box-sizing
Utilities for controlling how the browser should calculate an element's total size.

Class
Styles
box-border
box-sizing: border-box;
box-content
box-sizing: content-box;`,
    examples: [
      { label: 'Border Box', classes: 'box-border p-8 size-48 bg-indigo-500/20 border-8 border-indigo-500 shadow-2xl rounded-2xl flex items-center justify-center' },
      { label: 'Content Box', classes: 'box-content p-8 size-48 bg-emerald-500/20 border-8 border-emerald-500 shadow-2xl rounded-2xl flex items-center justify-center' }
    ],
    challenge: { 
      description: 'Apply the border-box sizing to the container so that padding and borders are included in its total width and height.', 
      targetClasses: ['box-border'] 
    },
    groupId: 'layout-group',
    groupTitle: 'Layout'
  },
  {
    id: 'tailwind-layout-position',
    title: 'Position & Placement',
    category: 'tailwind',
    description: 'Utilities for controlling how an element is positioned in the DOM.',
    content: `position
Utilities for controlling how an element is positioned in the DOM.

Class
Styles
static
position: static;
fixed
position: fixed;
absolute
position: absolute;
relative
position: relative;
sticky
position: sticky;`,
    examples: [
      { label: 'Static', classes: 'static p-4 w-64 bg-indigo-500/20 border-4 border-indigo-500 mx-auto mt-10' },
      { label: 'Relative', classes: 'relative p-4 w-64 bg-emerald-500/20 border-4 border-emerald-500 mx-auto mt-10' },
      { label: 'Absolute', classes: 'absolute top-10 left-10 p-4 w-64 bg-fuchsia-500/20 border-4 border-fuchsia-500' }
    ],
    challenge: { 
      description: 'Apply the border-box sizing to the container so that padding and borders are included in its total width and height.', 
      targetClasses: ['box-border'] 
    },
    groupId: 'layout-group',
    groupTitle: 'Layout'
  },
  {
    id: 'tailwind-layout-visibility',
    title: 'Visibility & Z-Index',
    category: 'tailwind',
    description: 'Utilities for controlling the visibility of an element and stacking order.',
    content: `visibility & z-index
Utilities for controlling the visibility of an element.

Class
Styles
visible
visibility: visible;
invisible
visibility: hidden;
collapse
visibility: collapse;

z-index
Utilities for controlling the stack order of an element.
z-0	z-index: 0;
z-10	z-index: 10;
z-20	z-index: 20;
z-30	z-index: 30;
z-40	z-index: 40;
z-50	z-index: 50;
z-auto	z-index: auto;`,
    examples: [
      { label: 'Visible', classes: 'visible p-4 w-64 bg-indigo-500/20 border-4 border-indigo-500 mx-auto mt-10' },
      { label: 'Invisible', classes: 'invisible p-4 w-64 bg-emerald-500/20 border-4 border-emerald-500 mx-auto mt-10' },
      { label: 'Z-10', classes: 'relative z-10 p-4 w-64 bg-fuchsia-500/20 border-4 border-fuchsia-500 mx-auto mt-10 shadow-xl' }
    ],
    challenge: { 
      description: 'Apply the border-box sizing to the container so that padding and borders are included in its total width and height.', 
      targetClasses: ['box-border'] 
    },
    groupId: 'layout-group',
    groupTitle: 'Layout'
  },
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
