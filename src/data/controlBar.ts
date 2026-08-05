export const controlBarData = {
  layouts: [
    {
      group: 'Layout',
      properties: ['container', 'block', 'flex', 'grid', 'inline', 'inline-block', 'inline-flex', 'inline-grid']
    },
    {
      group: 'Inline & Other',
      properties: ['flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden', 'box-border', 'box-content', 'overflow-*', 'overflow-x-*', 'overflow-y-*', 'overscroll-*', 'isolate', 'isolation-auto']
    },
    {
      group: 'Flex/Grid',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'order-*']
    }
  ],

  flex: [
    {
      group: 'Flex Container',
      properties: ['flex-direction', 'flex-wrap', 'flex', 'gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items']
    },
    {
      group: 'Flex Item',
      properties: ['flex-basis', 'flex-grow', 'flex-shrink', 'order', 'align-self', 'place-self']
    }
  ],
  grid: [
    {
      group: 'Grid Container',
      properties: ['grid-template-columns', 'grid-template-rows', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'gap', 'justify-content', 'justify-items', 'align-content', 'align-items', 'place-content', 'place-items']
    },
    {
      group: 'Grid Item',
      properties: ['grid-column', 'grid-row', 'justify-self', 'align-self', 'place-self']
    }
  ],
  typography: [
    {
      group: 'Typography',
      properties: ['font-sans', 'font-serif', 'font-mono', 'text-size-*', 'font-weight-*', 'text-align-*', 'text-color-*', 'leading-*', 'tracking-*', 'text-transform-*', 'font-style-*', 'text-decoration-*', 'text-overflow-*', 'whitespace-*', 'break-*']
    }
  ],
  colors: [
    {
      group: 'Backgrounds & Effects',
      properties: ['bg-color-*', 'opacity-*', 'shadow-*', 'mix-blend-*', 'bg-blend-*']
    }
  ],
  components: [
    {
      group: 'Borders & Sizing',
      properties: ['border', 'border-x', 'border-y', 'border-t', 'border-r', 'border-b', 'border-l', 'border-style-*', 'border-radius-*', 'border-width-*', 'border-color-*', 'outline-*', 'divide-x-*', 'divide-y-*', 'w-*', 'h-*']
    }
  ]
};

export const wildcards: Record<string, string[]> = {
  'flex': ['flex-1', 'flex-auto', 'flex-initial', 'flex-none'],
  'grid': ['grid-flow-row', 'grid-flow-col', 'grid-flow-row-dense', 'grid-flow-col-dense'],
  'justify-*': ['justify-normal', 'justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly', 'justify-stretch'],
  'items-*': ['items-start', 'items-center', 'items-end', 'items-baseline', 'items-stretch'],
  'content-*': ['content-normal', 'content-start', 'content-center', 'content-end', 'content-between', 'content-around', 'content-evenly', 'content-stretch', 'content-baseline'],
  'self-*': ['self-auto', 'self-start', 'self-center', 'self-end', 'self-stretch', 'self-baseline'],
  'place-items-*': ['place-items-start', 'place-items-center', 'place-items-end', 'place-items-stretch', 'place-items-baseline'],
  'place-content-*': ['place-content-start', 'place-content-center', 'place-content-end', 'place-content-between', 'place-content-around', 'place-content-evenly', 'place-content-stretch'],
  'place-self-*': ['place-self-auto', 'place-self-start', 'place-self-center', 'place-self-end', 'place-self-stretch', 'place-self-baseline'],
  'gap-*': ['gap-0', 'gap-px', 'gap-0.5', 'gap-1', 'gap-1.5', 'gap-2', 'gap-2.5', 'gap-3', 'gap-3.5', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9', 'gap-10', 'gap-11', 'gap-12', 'gap-14', 'gap-16', 'gap-20', 'gap-24', 'gap-28', 'gap-32', 'gap-36', 'gap-40', 'gap-44', 'gap-48', 'gap-52', 'gap-56', 'gap-60', 'gap-64', 'gap-72', 'gap-80', 'gap-96'],
  'gap-x-*': ['gap-x-0', 'gap-x-px', 'gap-x-0.5', 'gap-x-1', 'gap-x-1.5', 'gap-x-2', 'gap-x-2.5', 'gap-x-3', 'gap-x-3.5', 'gap-x-4', 'gap-x-5', 'gap-x-6', 'gap-x-7', 'gap-x-8', 'gap-x-9', 'gap-x-10', 'gap-x-11', 'gap-x-12', 'gap-x-14', 'gap-x-16', 'gap-x-20', 'gap-x-24', 'gap-x-28', 'gap-x-32', 'gap-x-36', 'gap-x-40', 'gap-x-44', 'gap-x-48', 'gap-x-52', 'gap-x-56', 'gap-x-60', 'gap-x-64', 'gap-x-72', 'gap-x-80', 'gap-x-96'],
  'gap-y-*': ['gap-y-0', 'gap-y-px', 'gap-y-0.5', 'gap-y-1', 'gap-y-1.5', 'gap-y-2', 'gap-y-2.5', 'gap-y-3', 'gap-y-3.5', 'gap-y-4', 'gap-y-5', 'gap-y-6', 'gap-y-7', 'gap-y-8', 'gap-y-9', 'gap-y-10', 'gap-y-11', 'gap-y-12', 'gap-y-14', 'gap-y-16', 'gap-y-20', 'gap-y-24', 'gap-y-28', 'gap-y-32', 'gap-y-36', 'gap-y-40', 'gap-y-44', 'gap-y-48', 'gap-y-52', 'gap-y-56', 'gap-y-60', 'gap-y-64', 'gap-y-72', 'gap-y-80', 'gap-y-96'],
  'basis-*': ['basis-0', 'basis-px', 'basis-auto', 'basis-full', 'basis-1/2', 'basis-1/3', 'basis-2/3', 'basis-1/4', 'basis-2/4', 'basis-3/4', 'basis-1/5', 'basis-2/5', 'basis-3/5', 'basis-4/5', 'basis-1/6', 'basis-2/6', 'basis-3/6', 'basis-4/6', 'basis-5/6'],
  'flex-*': ['flex-1', 'flex-auto', 'flex-initial', 'flex-none'],
  'grid-cols-*': ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12', 'grid-cols-none'],
  'grid-rows-*': ['grid-rows-1', 'grid-rows-2', 'grid-rows-3', 'grid-rows-4', 'grid-rows-5', 'grid-rows-6', 'grid-rows-none'],
  'auto-cols-*': ['auto-cols-auto', 'auto-cols-min', 'auto-cols-max', 'auto-cols-fr'],
  'auto-rows-*': ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],
  'col-span-*': ['col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6', 'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12', 'col-span-full'],
  'row-span-*': ['row-span-1', 'row-span-2', 'row-span-3', 'row-span-4', 'row-span-5', 'row-span-6', 'row-span-full'],
  'col-start-*': ['col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7', 'col-start-8', 'col-start-9', 'col-start-10', 'col-start-11', 'col-start-12', 'col-start-13', 'col-start-auto'],
  'col-end-*': ['col-end-1', 'col-end-2', 'col-end-3', 'col-end-4', 'col-end-5', 'col-end-6', 'col-end-7', 'col-end-8', 'col-end-9', 'col-end-10', 'col-end-11', 'col-end-12', 'col-end-13', 'col-end-auto'],
  'row-start-*': ['row-start-1', 'row-start-2', 'row-start-3', 'row-start-4', 'row-start-5', 'row-start-6', 'row-start-7', 'row-start-auto'],
  'row-end-*': ['row-end-1', 'row-end-2', 'row-end-3', 'row-end-4', 'row-end-5', 'row-end-6', 'row-end-7', 'row-end-auto'],
  'order-*': ['order-first', 'order-last', 'order-none', 'order-1', 'order-2', 'order-3', 'order-4', 'order-5', 'order-6', 'order-7', 'order-8', 'order-9', 'order-10', 'order-11', 'order-12'],
  'overflow-*': ['overflow-hidden', 'overflow-auto', 'overflow-scroll', 'overflow-visible', 'overflow-clip'],
  'overflow-x-*': ['overflow-x-hidden', 'overflow-x-auto', 'overflow-x-scroll', 'overflow-x-visible', 'overflow-x-clip'],
  'overflow-y-*': ['overflow-y-hidden', 'overflow-y-auto', 'overflow-y-scroll', 'overflow-y-visible', 'overflow-y-clip'],
  'overscroll-*': ['overscroll-auto', 'overscroll-contain', 'overscroll-none'],
  
  // Additional wildcards for other tabs
  'text-size-*': ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'],
  'font-weight-*': ['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'],
  'text-align-*': ['text-left', 'text-center', 'text-right', 'text-justify', 'text-start', 'text-end'],
  'text-color-*': ['text-transparent', 'text-current', 'text-white', 'text-black', 'text-slate-500', 'text-indigo-500', 'text-emerald-500', 'text-rose-500'],
  'leading-*': ['leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose'],
  'tracking-*': ['tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest'],
  'text-transform-*': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
  'font-style-*': ['italic', 'not-italic'],
  'text-decoration-*': ['underline', 'overline', 'line-through', 'no-underline'],
  'text-overflow-*': ['truncate', 'text-ellipsis', 'text-clip'],
  'whitespace-*': ['whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap'],
  'break-*': ['break-normal', 'break-words', 'break-all'],
  
  'bg-color-*': ['bg-transparent', 'bg-white', 'bg-black', 'bg-slate-900', 'bg-slate-800', 'bg-indigo-500', 'bg-indigo-600', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500'],
  'opacity-*': ['opacity-0', 'opacity-5', 'opacity-10', 'opacity-20', 'opacity-25', 'opacity-30', 'opacity-40', 'opacity-50', 'opacity-60', 'opacity-70', 'opacity-75', 'opacity-80', 'opacity-90', 'opacity-95', 'opacity-100'],
  'shadow-*': ['shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner', 'shadow-none'],
  'mix-blend-*': ['mix-blend-normal', 'mix-blend-multiply', 'mix-blend-screen', 'mix-blend-overlay', 'mix-blend-darken', 'mix-blend-lighten'],
  'bg-blend-*': ['bg-blend-normal', 'bg-blend-multiply', 'bg-blend-screen', 'bg-blend-overlay', 'bg-blend-darken', 'bg-blend-lighten'],
  
  'border-style-*': ['border-solid', 'border-dashed', 'border-dotted', 'border-double', 'border-none'],
  'border-radius-*': ['rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'],
  'border-width-*': ['border-0', 'border-2', 'border-4', 'border-8'],
  'border-color-*': ['border-transparent', 'border-white', 'border-slate-800', 'border-slate-700', 'border-indigo-500', 'border-emerald-500'],
  'outline-*': ['outline-none', 'outline', 'outline-dashed', 'outline-dotted', 'outline-double'],
  'divide-x-*': ['divide-x-0', 'divide-x-2', 'divide-x-4', 'divide-x-8', 'divide-x'],
  'divide-y-*': ['divide-y-0', 'divide-y-2', 'divide-y-4', 'divide-y-8', 'divide-y'],
  'w-*': ['w-0', 'w-px', 'w-1', 'w-4', 'w-8', 'w-16', 'w-32', 'w-64', 'w-full', 'w-screen', 'w-auto', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4'],
  'h-*': ['h-0', 'h-px', 'h-1', 'h-4', 'h-8', 'h-16', 'h-32', 'h-64', 'h-full', 'h-screen', 'h-auto', 'h-1/2', 'h-1/3', 'h-2/3', 'h-1/4', 'h-3/4'],

  'flex-basis': [
    'basis-0', 'basis-px', 'basis-auto', 'basis-full', 
    'basis-3xs', 'basis-2xs', 'basis-xs', 'basis-sm', 'basis-md', 'basis-lg', 'basis-xl', 'basis-2xl', 'basis-3xl', 'basis-4xl', 'basis-5xl', 'basis-6xl', 'basis-7xl'
  ],
  'flex-direction': ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
  'flex-wrap': ['flex-wrap', 'flex-wrap-reverse', 'flex-nowrap'],
  'flex-grow': ['grow', 'grow-0'],
  'flex-shrink': ['shrink', 'shrink-0'],
  'order': ['order-first', 'order-last', 'order-none', 'order-1', 'order-2', 'order-3', 'order-4', 'order-5', 'order-6', 'order-7', 'order-8', 'order-9', 'order-10', 'order-11', 'order-12'],
  'grid-template-columns': ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12', 'grid-cols-none'],
  'grid-column': ['col-auto', 'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-full', 'col-start-1', 'col-start-2', 'col-end-1', 'col-end-2'],
  'grid-template-rows': ['grid-rows-1', 'grid-rows-2', 'grid-rows-3', 'grid-rows-4', 'grid-rows-5', 'grid-rows-6', 'grid-rows-none'],
  'grid-row': ['row-auto', 'row-span-1', 'row-span-2', 'row-span-3', 'row-span-4', 'row-span-full', 'row-start-1', 'row-start-2', 'row-end-1', 'row-end-2'],
  'grid-auto-flow': ['grid-flow-row', 'grid-flow-col', 'grid-flow-row-dense', 'grid-flow-col-dense'],
  'grid-auto-columns': ['auto-cols-auto', 'auto-cols-min', 'auto-cols-max', 'auto-cols-fr'],
  'grid-auto-rows': ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],
  'gap': ['gap-0', 'gap-px', 'gap-0.5', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8', 'gap-10', 'gap-12', 'gap-16', 'gap-x-0', 'gap-x-4', 'gap-x-8', 'gap-y-0', 'gap-y-4', 'gap-y-8'],
  'justify-content': ['justify-normal', 'justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly', 'justify-stretch'],
  'justify-items': ['justify-items-start', 'justify-items-end', 'justify-items-center', 'justify-items-stretch'],
  'justify-self': ['justify-self-auto', 'justify-self-start', 'justify-self-center', 'justify-self-end', 'justify-self-stretch'],
  'align-content': ['content-normal', 'content-start', 'content-center', 'content-end', 'content-between', 'content-around', 'content-evenly', 'content-stretch', 'content-baseline'],
  'align-items': ['items-start', 'items-center', 'items-end', 'items-baseline', 'items-stretch'],
  'align-self': ['self-auto', 'self-start', 'self-center', 'self-end', 'self-stretch', 'self-baseline'],
  'place-content': ['place-content-start', 'place-content-center', 'place-content-end', 'place-content-between', 'place-content-around', 'place-content-evenly', 'place-content-stretch'],
  'place-items': ['place-items-start', 'place-items-center', 'place-items-end', 'place-items-stretch', 'place-items-baseline'],
  'place-self': ['place-self-auto', 'place-self-start', 'place-self-center', 'place-self-end', 'place-self-stretch', 'place-self-baseline']

};