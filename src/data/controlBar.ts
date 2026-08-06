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

  'display': [
    {
      group: 'Display',
      properties: ['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden']
    },
    {
      group: 'Flex Layout',
      properties: ['flex-*', 'grow', 'shrink', 'basis-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'order-*'],
    },
    {
      group: 'Grid Layout',
      properties: ['grid-cols-*', 'grid-rows-*', 'auto-cols-*', 'auto-rows-*', 'col-span-*', 'row-span-*', 'col-start-*', 'col-end-*', 'row-start-*', 'row-end-*', 'gap-*', 'gap-x-*', 'gap-y-*', 'justify-*', 'items-*', 'content-*', 'self-*', 'place-items-*', 'place-content-*', 'place-self-*', 'order-*'],
    },
    {
      group: 'Screen Reader',
      properties: ['sr-only', 'not-sr-only']
    }
  ],
  'box-sizing': [
    {
      group: 'Box Sizing',
      properties: ['box-border', 'box-content']
    },
    {
      group: 'Margin',
      properties: ['m-*', 'mx-*', 'my-*', 'mt-*', 'mr-*', 'mb-*', 'ml-*', 'ms-*', 'me-*']
    },
    {
      group: 'Padding',
      properties: ['p-*', 'px-*', 'py-*', 'pt-*', 'pr-*', 'pb-*', 'pl-*', 'ps-*', 'pe-*']
    },
    {
      group: 'Space Between',
      properties: ['space-x-*', 'space-y-*']
    }
  ],
  'position': [
    {
      group: 'Position',
      properties: ['static', 'fixed', 'absolute', 'relative', 'sticky']
    },
    {
      group: 'Top / Right / Bottom / Left',
      properties: ['inset-*', 'inset-x-*', 'inset-y-*', 'top-*', 'right-*', 'bottom-*', 'left-*']
    }
  ],
  'visibility': [
    {
      group: 'Visibility',
      properties: ['visible', 'invisible', 'collapse']
    },
    {
      group: 'Z-Index',
      properties: ['z-*']
    }
  ],
  flex: [
    {
      group: 'Flex Container',
      properties: ['flex-direction', 'flex-wrap', 'flex', 'gap', 'justify-content', 'align-content', 'align-items', 'place-content', 'place-items']
    },
    {
      group: 'Flex Item',
      properties: ['flex-basis', 'flex-grow', 'flex-shrink', 'order', 'align-self']
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
  'm-*': ["m-0","m-px","m-0.5","m-1","m-1.5","m-2","m-2.5","m-3","m-3.5","m-4","m-5","m-6","m-7","m-8","m-9","m-10","m-11","m-12","m-14","m-16","m-20","m-24","m-28","m-32","m-36","m-40","m-44","m-48","m-52","m-56","m-60","m-64","m-72","m-80","m-96","m-auto"],
  'mx-*': ["mx-0","mx-px","mx-0.5","mx-1","mx-1.5","mx-2","mx-2.5","mx-3","mx-3.5","mx-4","mx-5","mx-6","mx-7","mx-8","mx-9","mx-10","mx-11","mx-12","mx-14","mx-16","mx-20","mx-24","mx-28","mx-32","mx-36","mx-40","mx-44","mx-48","mx-52","mx-56","mx-60","mx-64","mx-72","mx-80","mx-96","mx-auto"],
  'my-*': ["my-0","my-px","my-0.5","my-1","my-1.5","my-2","my-2.5","my-3","my-3.5","my-4","my-5","my-6","my-7","my-8","my-9","my-10","my-11","my-12","my-14","my-16","my-20","my-24","my-28","my-32","my-36","my-40","my-44","my-48","my-52","my-56","my-60","my-64","my-72","my-80","my-96","my-auto"],
  'mt-*': ["mt-0","mt-px","mt-0.5","mt-1","mt-1.5","mt-2","mt-2.5","mt-3","mt-3.5","mt-4","mt-5","mt-6","mt-7","mt-8","mt-9","mt-10","mt-11","mt-12","mt-14","mt-16","mt-20","mt-24","mt-28","mt-32","mt-36","mt-40","mt-44","mt-48","mt-52","mt-56","mt-60","mt-64","mt-72","mt-80","mt-96","mt-auto"],
  'mr-*': ["mr-0","mr-px","mr-0.5","mr-1","mr-1.5","mr-2","mr-2.5","mr-3","mr-3.5","mr-4","mr-5","mr-6","mr-7","mr-8","mr-9","mr-10","mr-11","mr-12","mr-14","mr-16","mr-20","mr-24","mr-28","mr-32","mr-36","mr-40","mr-44","mr-48","mr-52","mr-56","mr-60","mr-64","mr-72","mr-80","mr-96","mr-auto"],
  'mb-*': ["mb-0","mb-px","mb-0.5","mb-1","mb-1.5","mb-2","mb-2.5","mb-3","mb-3.5","mb-4","mb-5","mb-6","mb-7","mb-8","mb-9","mb-10","mb-11","mb-12","mb-14","mb-16","mb-20","mb-24","mb-28","mb-32","mb-36","mb-40","mb-44","mb-48","mb-52","mb-56","mb-60","mb-64","mb-72","mb-80","mb-96","mb-auto"],
  'ml-*': ["ml-0","ml-px","ml-0.5","ml-1","ml-1.5","ml-2","ml-2.5","ml-3","ml-3.5","ml-4","ml-5","ml-6","ml-7","ml-8","ml-9","ml-10","ml-11","ml-12","ml-14","ml-16","ml-20","ml-24","ml-28","ml-32","ml-36","ml-40","ml-44","ml-48","ml-52","ml-56","ml-60","ml-64","ml-72","ml-80","ml-96","ml-auto"],
  'ms-*': ["ms-0","ms-px","ms-0.5","ms-1","ms-1.5","ms-2","ms-2.5","ms-3","ms-3.5","ms-4","ms-5","ms-6","ms-7","ms-8","ms-9","ms-10","ms-11","ms-12","ms-14","ms-16","ms-20","ms-24","ms-28","ms-32","ms-36","ms-40","ms-44","ms-48","ms-52","ms-56","ms-60","ms-64","ms-72","ms-80","ms-96","ms-auto"],
  'me-*': ["me-0","me-px","me-0.5","me-1","me-1.5","me-2","me-2.5","me-3","me-3.5","me-4","me-5","me-6","me-7","me-8","me-9","me-10","me-11","me-12","me-14","me-16","me-20","me-24","me-28","me-32","me-36","me-40","me-44","me-48","me-52","me-56","me-60","me-64","me-72","me-80","me-96","me-auto"],
  'p-*': ["p-0","p-px","p-0.5","p-1","p-1.5","p-2","p-2.5","p-3","p-3.5","p-4","p-5","p-6","p-7","p-8","p-9","p-10","p-11","p-12","p-14","p-16","p-20","p-24","p-28","p-32","p-36","p-40","p-44","p-48","p-52","p-56","p-60","p-64","p-72","p-80","p-96"],
  'px-*': ["px-0","px-px","px-0.5","px-1","px-1.5","px-2","px-2.5","px-3","px-3.5","px-4","px-5","px-6","px-7","px-8","px-9","px-10","px-11","px-12","px-14","px-16","px-20","px-24","px-28","px-32","px-36","px-40","px-44","px-48","px-52","px-56","px-60","px-64","px-72","px-80","px-96"],
  'py-*': ["py-0","py-px","py-0.5","py-1","py-1.5","py-2","py-2.5","py-3","py-3.5","py-4","py-5","py-6","py-7","py-8","py-9","py-10","py-11","py-12","py-14","py-16","py-20","py-24","py-28","py-32","py-36","py-40","py-44","py-48","py-52","py-56","py-60","py-64","py-72","py-80","py-96"],
  'pt-*': ["pt-0","pt-px","pt-0.5","pt-1","pt-1.5","pt-2","pt-2.5","pt-3","pt-3.5","pt-4","pt-5","pt-6","pt-7","pt-8","pt-9","pt-10","pt-11","pt-12","pt-14","pt-16","pt-20","pt-24","pt-28","pt-32","pt-36","pt-40","pt-44","pt-48","pt-52","pt-56","pt-60","pt-64","pt-72","pt-80","pt-96"],
  'pr-*': ["pr-0","pr-px","pr-0.5","pr-1","pr-1.5","pr-2","pr-2.5","pr-3","pr-3.5","pr-4","pr-5","pr-6","pr-7","pr-8","pr-9","pr-10","pr-11","pr-12","pr-14","pr-16","pr-20","pr-24","pr-28","pr-32","pr-36","pr-40","pr-44","pr-48","pr-52","pr-56","pr-60","pr-64","pr-72","pr-80","pr-96"],
  'pb-*': ["pb-0","pb-px","pb-0.5","pb-1","pb-1.5","pb-2","pb-2.5","pb-3","pb-3.5","pb-4","pb-5","pb-6","pb-7","pb-8","pb-9","pb-10","pb-11","pb-12","pb-14","pb-16","pb-20","pb-24","pb-28","pb-32","pb-36","pb-40","pb-44","pb-48","pb-52","pb-56","pb-60","pb-64","pb-72","pb-80","pb-96"],
  'pl-*': ["pl-0","pl-px","pl-0.5","pl-1","pl-1.5","pl-2","pl-2.5","pl-3","pl-3.5","pl-4","pl-5","pl-6","pl-7","pl-8","pl-9","pl-10","pl-11","pl-12","pl-14","pl-16","pl-20","pl-24","pl-28","pl-32","pl-36","pl-40","pl-44","pl-48","pl-52","pl-56","pl-60","pl-64","pl-72","pl-80","pl-96"],
  'ps-*': ["ps-0","ps-px","ps-0.5","ps-1","ps-1.5","ps-2","ps-2.5","ps-3","ps-3.5","ps-4","ps-5","ps-6","ps-7","ps-8","ps-9","ps-10","ps-11","ps-12","ps-14","ps-16","ps-20","ps-24","ps-28","ps-32","ps-36","ps-40","ps-44","ps-48","ps-52","ps-56","ps-60","ps-64","ps-72","ps-80","ps-96"],
  'pe-*': ["pe-0","pe-px","pe-0.5","pe-1","pe-1.5","pe-2","pe-2.5","pe-3","pe-3.5","pe-4","pe-5","pe-6","pe-7","pe-8","pe-9","pe-10","pe-11","pe-12","pe-14","pe-16","pe-20","pe-24","pe-28","pe-32","pe-36","pe-40","pe-44","pe-48","pe-52","pe-56","pe-60","pe-64","pe-72","pe-80","pe-96"],
  'space-x-*': ["space-x-0","space-x-px","space-x-0.5","space-x-1","space-x-1.5","space-x-2","space-x-2.5","space-x-3","space-x-3.5","space-x-4","space-x-5","space-x-6","space-x-7","space-x-8","space-x-9","space-x-10","space-x-11","space-x-12","space-x-14","space-x-16","space-x-20","space-x-24","space-x-28","space-x-32","space-x-36","space-x-40","space-x-44","space-x-48","space-x-52","space-x-56","space-x-60","space-x-64","space-x-72","space-x-80","space-x-96"],
  'space-y-*': ["space-y-0","space-y-px","space-y-0.5","space-y-1","space-y-1.5","space-y-2","space-y-2.5","space-y-3","space-y-3.5","space-y-4","space-y-5","space-y-6","space-y-7","space-y-8","space-y-9","space-y-10","space-y-11","space-y-12","space-y-14","space-y-16","space-y-20","space-y-24","space-y-28","space-y-32","space-y-36","space-y-40","space-y-44","space-y-48","space-y-52","space-y-56","space-y-60","space-y-64","space-y-72","space-y-80","space-y-96"],
  'inset-*': ["inset-0","inset-px","inset-0.5","inset-1","inset-1.5","inset-2","inset-2.5","inset-3","inset-3.5","inset-4","inset-5","inset-6","inset-7","inset-8","inset-9","inset-10","inset-11","inset-12","inset-14","inset-16","inset-20","inset-24","inset-28","inset-32","inset-36","inset-40","inset-44","inset-48","inset-52","inset-56","inset-60","inset-64","inset-72","inset-80","inset-96","inset-auto","inset-1/2","inset-1/3","inset-2/3","inset-full"],
  'inset-x-*': ["inset-x-0","inset-x-px","inset-x-0.5","inset-x-1","inset-x-1.5","inset-x-2","inset-x-2.5","inset-x-3","inset-x-3.5","inset-x-4","inset-x-5","inset-x-6","inset-x-7","inset-x-8","inset-x-9","inset-x-10","inset-x-11","inset-x-12","inset-x-14","inset-x-16","inset-x-20","inset-x-24","inset-x-28","inset-x-32","inset-x-36","inset-x-40","inset-x-44","inset-x-48","inset-x-52","inset-x-56","inset-x-60","inset-x-64","inset-x-72","inset-x-80","inset-x-96","inset-x-auto","inset-x-1/2","inset-x-1/3","inset-x-2/3","inset-x-full"],
  'inset-y-*': ["inset-y-0","inset-y-px","inset-y-0.5","inset-y-1","inset-y-1.5","inset-y-2","inset-y-2.5","inset-y-3","inset-y-3.5","inset-y-4","inset-y-5","inset-y-6","inset-y-7","inset-y-8","inset-y-9","inset-y-10","inset-y-11","inset-y-12","inset-y-14","inset-y-16","inset-y-20","inset-y-24","inset-y-28","inset-y-32","inset-y-36","inset-y-40","inset-y-44","inset-y-48","inset-y-52","inset-y-56","inset-y-60","inset-y-64","inset-y-72","inset-y-80","inset-y-96","inset-y-auto","inset-y-1/2","inset-y-1/3","inset-y-2/3","inset-y-full"],
  'top-*': ["top-0","top-px","top-0.5","top-1","top-1.5","top-2","top-2.5","top-3","top-3.5","top-4","top-5","top-6","top-7","top-8","top-9","top-10","top-11","top-12","top-14","top-16","top-20","top-24","top-28","top-32","top-36","top-40","top-44","top-48","top-52","top-56","top-60","top-64","top-72","top-80","top-96","top-auto","top-1/2","top-1/3","top-2/3","top-full"],
  'right-*': ["right-0","right-px","right-0.5","right-1","right-1.5","right-2","right-2.5","right-3","right-3.5","right-4","right-5","right-6","right-7","right-8","right-9","right-10","right-11","right-12","right-14","right-16","right-20","right-24","right-28","right-32","right-36","right-40","right-44","right-48","right-52","right-56","right-60","right-64","right-72","right-80","right-96","right-auto","right-1/2","right-1/3","right-2/3","right-full"],
  'bottom-*': ["bottom-0","bottom-px","bottom-0.5","bottom-1","bottom-1.5","bottom-2","bottom-2.5","bottom-3","bottom-3.5","bottom-4","bottom-5","bottom-6","bottom-7","bottom-8","bottom-9","bottom-10","bottom-11","bottom-12","bottom-14","bottom-16","bottom-20","bottom-24","bottom-28","bottom-32","bottom-36","bottom-40","bottom-44","bottom-48","bottom-52","bottom-56","bottom-60","bottom-64","bottom-72","bottom-80","bottom-96","bottom-auto","bottom-1/2","bottom-1/3","bottom-2/3","bottom-full"],
  'left-*': ["left-0","left-px","left-0.5","left-1","left-1.5","left-2","left-2.5","left-3","left-3.5","left-4","left-5","left-6","left-7","left-8","left-9","left-10","left-11","left-12","left-14","left-16","left-20","left-24","left-28","left-32","left-36","left-40","left-44","left-48","left-52","left-56","left-60","left-64","left-72","left-80","left-96","left-auto","left-1/2","left-1/3","left-2/3","left-full"],
  'z-*': ["z-0","z-10","z-20","z-30","z-40","z-50","z-auto"],

  'box-border': ['box-border'],
  'box-content': ['box-content'],
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