import { TaxonomyCategory } from '../types';

export const taxonomy: TaxonomyCategory[] = [
  {
    name: 'Layout',
    classes: [
      'container', 'block', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'flex', 'grid', 'flow-root', 'contents', 'table', 'table-row', 'table-cell', 'hidden', 'box-border', 'box-content', 'overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overscroll-auto', 'isolate', 'isolation-auto'
    ]
  },
  {
    name: 'Flex / Grid',
    classes: [
      'flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse', 'flex-wrap', 'flex-nowrap', 'flex-wrap-reverse', 'flex-1', 'flex-auto', 'flex-initial', 'flex-none', 'grow', 'shrink', 'basis-auto', 'justify-normal', 'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly', 'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch', 'content-normal', 'content-start', 'content-end', 'content-center', 'content-between', 'content-around', 'content-evenly', 'self-auto', 'self-start', 'self-end', 'self-center', 'self-stretch', 'self-baseline', 'place-items-start', 'place-content-start', 'place-self-auto', 'gap-0', 'gap-1', 'gap-2', 'gap-4', 'gap-8', 'gap-x-2', 'gap-y-2', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-none', 'grid-rows-1', 'grid-rows-2', 'grid-rows-3', 'grid-rows-none', 'auto-cols-auto', 'auto-rows-auto', 'col-span-1', 'col-span-2', 'row-span-1', 'row-span-2', 'col-start-1', 'col-end-1', 'row-start-1', 'row-end-1', 'order-1', 'order-2', 'order-first', 'order-last', 'order-none'
    ]
  },
  {
    name: 'Spacing',
    classes: [
      'm-0', 'm-4', 'mx-0', 'mx-4', 'mx-auto', 'my-0', 'my-4', 'mt-0', 'mt-4', 'mr-0', 'mr-4', 'mb-0', 'mb-4', 'ml-0', 'ml-4', 'ms-0', 'ms-4', 'me-0', 'me-4', 'p-0', 'p-4', 'px-0', 'px-4', 'py-0', 'py-4', 'pt-0', 'pt-4', 'pr-0', 'pr-4', 'pb-0', 'pb-4', 'pl-0', 'pl-4', 'ps-0', 'ps-4', 'pe-0', 'pe-4', 'space-x-0', 'space-x-4', 'space-y-0', 'space-y-4'
    ]
  },
  {
    name: 'Sizing',
    classes: [
      'w-0', 'w-full', 'w-screen', 'w-auto', 'w-1/2', 'h-0', 'h-full', 'h-screen', 'h-auto', 'h-1/2', 'size-4', 'size-8', 'size-full', 'min-w-0', 'min-w-full', 'min-h-0', 'min-h-full', 'min-h-screen', 'max-w-0', 'max-w-none', 'max-w-full', 'max-h-0', 'max-h-full', 'max-h-screen', 'aspect-auto', 'aspect-square', 'aspect-video'
    ]
  },
  {
    name: 'Position',
    classes: [
      'static', 'relative', 'absolute', 'fixed', 'sticky', 'inset-0', 'inset-x-0', 'inset-y-0', 'top-0', 'right-0', 'bottom-0', 'left-0', 'z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'
    ]
  },
  {
    name: 'Border',
    classes: [
      'border', 'border-0', 'border-2', 'border-4', 'border-x', 'border-y', 'border-t', 'border-r', 'border-b', 'border-l', 'border-solid', 'border-dashed', 'border-dotted', 'border-double', 'border-none', 'rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full', 'outline-none', 'outline', 'outline-2', 'outline-offset-2', 'divide-x', 'divide-y'
    ]
  },
  {
    name: 'Background',
    classes: [
      'bg-transparent', 'bg-slate-50', 'bg-indigo-500', 'bg-none', 'bg-cover', 'bg-contain', 'bg-auto', 'bg-center', 'bg-top', 'bg-bottom', 'bg-left', 'bg-right', 'bg-no-repeat', 'bg-repeat', 'bg-fixed', 'bg-local', 'bg-scroll', 'bg-gradient-to-t', 'bg-gradient-to-r', 'from-indigo-500', 'via-purple-500', 'to-pink-500'
    ]
  },
  {
    name: 'Effects',
    classes: [
      'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner', 'shadow-none', 'ring-1', 'ring-2', 'ring-offset-2', 'opacity-0', 'opacity-50', 'opacity-100', 'mix-blend-normal', 'mix-blend-multiply', 'bg-blend-normal', 'bg-blend-multiply'
    ]
  },
  {
    name: 'Typography',
    classes: [
      'font-sans', 'font-serif', 'font-mono', 'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl', 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black', 'text-left', 'text-center', 'text-right', 'text-justify', 'text-start', 'text-end', 'text-transparent', 'text-current', 'text-slate-900', 'text-indigo-500', 'leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose', 'tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest', 'uppercase', 'lowercase', 'capitalize', 'normal-case', 'italic', 'not-italic', 'underline', 'overline', 'line-through', 'no-underline', 'truncate', 'text-ellipsis', 'text-clip', 'line-clamp-1', 'line-clamp-2', 'line-clamp-3', 'line-clamp-none', 'whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap', 'break-normal', 'break-words', 'break-all', 'hyphens-none', 'hyphens-manual', 'hyphens-auto', 'list-none', 'list-disc', 'list-decimal'
    ]
  },
  {
    name: 'SVG',
    classes: [
      'fill-current', 'fill-transparent', 'fill-none', 'stroke-current', 'stroke-transparent', 'stroke-none'
    ]
  },
  {
    name: 'Transform',
    classes: [
      'transform', 'transform-none', 'scale-50', 'scale-75', 'scale-90', 'scale-100', 'scale-110', 'scale-150', 'rotate-0', 'rotate-45', 'rotate-90', 'rotate-180', 'translate-x-0', 'translate-x-1', 'translate-x-1/2', 'translate-x-full', 'translate-y-0', 'translate-y-1', 'translate-y-1/2', 'translate-y-full', 'skew-x-0', 'skew-x-1', 'skew-y-0', 'skew-y-1', 'origin-center', 'origin-top', 'origin-top-right', 'origin-right', 'origin-bottom-right', 'origin-bottom', 'origin-bottom-left', 'origin-left', 'origin-top-left', 'transform-gpu'
    ]
  },
  {
    name: 'Transition / Animation',
    classes: [
      'transition', 'transition-all', 'transition-none', 'transition-colors', 'transition-opacity', 'transition-shadow', 'transition-transform', 'duration-75', 'duration-150', 'duration-300', 'duration-500', 'duration-700', 'duration-1000', 'delay-75', 'delay-150', 'delay-300', 'delay-500', 'delay-700', 'delay-1000', 'ease-linear', 'ease-in', 'ease-out', 'ease-in-out', 'animate-none', 'animate-spin', 'animate-ping', 'animate-pulse', 'animate-bounce'
    ]
  },
  {
    name: 'Filters',
    classes: [
      'filter', 'filter-none', 'blur-none', 'blur-sm', 'blur', 'blur-md', 'blur-lg', 'brightness-50', 'brightness-100', 'brightness-150', 'contrast-50', 'contrast-100', 'contrast-150', 'drop-shadow-sm', 'drop-shadow', 'drop-shadow-md', 'drop-shadow-lg', 'drop-shadow-xl', 'drop-shadow-2xl', 'drop-shadow-none', 'grayscale-0', 'grayscale', 'hue-rotate-0', 'hue-rotate-90', 'hue-rotate-180', 'invert-0', 'invert', 'saturate-0', 'saturate-100', 'saturate-200', 'sepia-0', 'sepia'
    ]
  },
  {
    name: 'Backdrop Filters',
    classes: [
      'backdrop-filter', 'backdrop-filter-none', 'backdrop-blur-none', 'backdrop-blur-sm', 'backdrop-blur', 'backdrop-blur-md', 'backdrop-blur-lg', 'backdrop-brightness-50', 'backdrop-brightness-100', 'backdrop-contrast-50', 'backdrop-contrast-100', 'backdrop-grayscale-0', 'backdrop-grayscale', 'backdrop-hue-rotate-0', 'backdrop-hue-rotate-90', 'backdrop-invert-0', 'backdrop-invert', 'backdrop-opacity-0', 'backdrop-opacity-50', 'backdrop-opacity-100', 'backdrop-saturate-0', 'backdrop-saturate-100', 'backdrop-sepia-0', 'backdrop-sepia'
    ]
  },
  {
    name: 'Tables',
    classes: [
      'table-auto', 'table-fixed', 'border-collapse', 'border-separate', 'border-spacing-0', 'border-spacing-1', 'caption-top', 'caption-bottom'
    ]
  },
  {
    name: 'Lists',
    classes: [
      'list-none', 'list-disc', 'list-decimal', 'list-inside', 'list-outside'
    ]
  },
  {
    name: 'Accessibility',
    classes: [
      'sr-only', 'not-sr-only'
    ]
  },
  {
    name: 'Cursor',
    classes: [
      'cursor-auto', 'cursor-default', 'cursor-pointer', 'cursor-wait', 'cursor-text', 'cursor-move', 'cursor-help', 'cursor-not-allowed', 'cursor-grab', 'cursor-grabbing'
    ]
  },
  {
    name: 'User Interaction',
    classes: [
      'appearance-none', 'appearance-auto', 'accent-auto', 'accent-indigo-500', 'caret-indigo-500', 'resize-none', 'resize-y', 'resize-x', 'resize', 'select-none', 'select-text', 'select-all', 'select-auto', 'pointer-events-none', 'pointer-events-auto', 'touch-auto', 'touch-none', 'touch-pan-x', 'touch-pan-y', 'scroll-auto', 'scroll-smooth', 'will-change-auto', 'will-change-scroll', 'will-change-contents', 'will-change-transform'
    ]
  },
  {
    name: 'Scroll',
    classes: [
      'scroll-m-0', 'scroll-mx-0', 'scroll-my-0', 'scroll-p-0', 'scroll-px-0', 'scroll-py-0', 'snap-none', 'snap-x', 'snap-y', 'snap-both', 'snap-mandatory', 'snap-proximity', 'snap-start', 'snap-center', 'snap-end'
    ]
  },
  {
    name: 'Responsive Variants',
    classes: [
      'sm:flex', 'md:flex', 'lg:flex', 'xl:flex', '2xl:flex'
    ]
  },
  {
    name: 'State Variants',
    classes: [
      'hover:bg-slate-100', 'focus:ring', 'focus-visible:ring', 'focus-within:ring', 'active:scale-95', 'visited:text-purple-500', 'disabled:opacity-50', 'checked:bg-blue-500', 'required:border-red-500', 'invalid:border-red-500', 'read-only:bg-gray-100', 'first:pt-0', 'last:pb-0', 'odd:bg-gray-50', 'even:bg-white', 'empty:hidden', 'group-hover:opacity-100', 'group-focus:opacity-100', 'peer-hover:opacity-100', 'peer-focus:opacity-100', 'peer-checked:opacity-100', 'dark:bg-slate-900', 'rtl:mr-4', 'ltr:ml-4', 'print:hidden', 'motion-safe:animate-spin', 'motion-reduce:animate-none', 'portrait:hidden', 'landscape:hidden'
    ]
  }
];
