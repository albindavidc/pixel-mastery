import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SvgBrace from './SvgBrace';
import CssAnatomyGuidelines from './CssAnatomyGuidelines';
import TailwindAnatomyGuidelines from './TailwindAnatomyGuidelines';
import HtmlTerminology from './HtmlTerminology';
import SemanticLayoutWidget from './SemanticLayoutWidget';

const coreHtml = [
  { category: 'Document Structure', elements: ['<!DOCTYPE>', '<html>', '<head>', '<body>', '<title>', '<meta>', '<link>', '<script>'] },
  { category: 'Containers', elements: ['<div>', '<span>'] },
  { category: 'Semantic Layout', elements: ['<header>', '<main>', '<section>', '<article>', '<aside>', '<footer>', '<nav>'] },
  { category: 'Text', elements: ['<h1>–<h6>', '<p>', '<strong>', '<em>'] },
  { category: 'Media', elements: ['<img>', '<picture>'] },
  { category: 'Navigation', elements: ['<a>'] },
  { category: 'Lists', elements: ['<ul>', '<ol>', '<li>'] },
  { category: 'Forms', elements: ['<form>', '<label>', '<input>', '<textarea>', '<select>', '<option>', '<button>'] },
  { category: 'Tables', elements: ['<table>', '<thead>', '<tbody>', '<tr>', '<th>', '<td>'] },
  { category: 'Graphics', elements: ['<svg>'] },
  { category: 'Embedding', elements: ['<iframe>'] },
];

const situationalHtml = [
  { category: 'Text Semantics', elements: ['<small>', '<mark>', '<code>', '<pre>'] },
  { category: 'Quotes', elements: ['<blockquote>', '<q>', '<cite>'] },
  { category: 'Time', elements: ['<time>'] },
  { category: 'Media', elements: ['<video>', '<audio>', '<source>'] },
  { category: 'Figures', elements: ['<figure>', '<figcaption>'] },
  { category: 'Interactive', elements: ['<details>', '<summary>'] },
  { category: 'Forms', elements: ['<fieldset>', '<legend>', '<datalist>', '<optgroup>', '<output>', '<progress>', '<meter>'] },
  { category: 'Tables', elements: ['<caption>', '<tfoot>'] },
];

const rareHtml = [
  { category: 'Graphics', elements: ['<canvas>'], why: 'Mostly for games, charts, drawing tools' },
  { category: 'Templates', elements: ['<template>'], why: 'Framework internals, Web Components' },
  { category: 'Progressive Enhancement', elements: ['<noscript>'], why: 'SEO or static sites' },
  { category: 'Accessibility', elements: ['<abbr>'], why: 'Occasionally' },
  { category: 'Internationalization', elements: ['<bdi>', '<bdo>', '<ruby>', '<rt>', '<rp>'], why: 'Mostly multilingual applications' },
  { category: 'Contact', elements: ['<address>'], why: 'Rare' },
  { category: 'Technical Text', elements: ['<kbd>', '<samp>', '<var>'], why: 'Documentation websites' },
  { category: 'Editing', elements: ['<del>', '<ins>'], why: 'Diff viewers, editors' },
  { category: 'Definitions', elements: ['<dfn>'], why: 'Documentation' },
  { category: 'Typography', elements: ['<sub>', '<sup>', '<wbr>'], why: 'Scientific or technical content' },
  { category: 'Tables', elements: ['<colgroup>', '<col>'], why: 'Advanced table styling' },
];

const frameworksReducedHtml = [
  { element: '<template>', why: 'Angular, Vue, and Web Components have their own template systems.' },
  { element: '<script>', why: 'Your bundler (Vite, Angular CLI, Next.js, etc.) injects most scripts automatically.' },
  { element: '<link>', why: 'CSS imports and build tools often manage stylesheets.' },
  { element: '<noscript>', why: 'Mainly used in SSR or SEO-focused applications.' },
  { element: '<output>', why: 'Framework state and data binding usually display computed values instead.' },
  { element: '<progress>', why: 'Often replaced by custom progress components for styling.' },
  { element: '<meter>', why: 'Custom UI components are more common.' },
  { element: '<datalist>', why: 'Many apps use richer autocomplete components from UI libraries.' },
  { element: '<details>, <summary>', why: 'Frequently replaced with accordion/disclosure components for consistent styling and behavior.' },
  { element: '<canvas>', why: 'Libraries like Chart.js, Fabric.js, or Three.js handle most interactions.' },
];

const mostlyUsedGlobalAttributes = [
  { 
    grouped: [
      { attr: 'id', desc: 'Unique identifier' },
      { attr: 'class', desc: 'CSS classes' }
    ]
  },
  { 
    grouped: [
      { attr: 'style', desc: 'Inline styles (occasionally)' },
      { attr: 'hidden', desc: 'Hide an element' },
      { attr: 'title', desc: 'Tooltip / additional information' }
    ]
  },
  { 
    grouped: [
      { attr: 'role', desc: 'Accessibility (ARIA role)' },
      { attr: 'tabindex', desc: 'Keyboard navigation' }
    ]
  },
  { 
    grouped: [
      { attr: 'lang', desc: 'Language of content' },
      { attr: 'dir', desc: 'Text direction (ltr, rtl)' },
      { attr: 'translate', desc: 'Translation hint' }
    ]
  },
  { 
    grouped: [
      { attr: 'contenteditable', desc: 'Editable content' },
      { attr: 'spellcheck', desc: 'Enable/disable spell checking' },
      { attr: 'draggable', desc: 'Enable drag-and-drop' }
    ]
  },
  { 
    grouped: [
      { attr: 'autofocus', desc: 'Automatically focus an element' },
      { attr: 'inputmode', desc: 'Virtual keyboard type on mobile' },
      { attr: 'enterkeyhint', desc: 'Customize mobile Enter key label' }
    ]
  },
  { 
    grouped: [
      { attr: 'data-*', desc: 'Custom data attributes' }
    ]
  },
  { 
    grouped: [
      { attr: 'popover', desc: 'Native popover API (modern browsers)' }
    ]
  }
];

const occasionallyUsedGlobalAttributes = [
  { attr: 'accesskey', desc: 'Keyboard shortcut' },
  { attr: 'autocapitalize', desc: 'Automatic capitalization' },
  { attr: 'inert', desc: 'Disable interaction for an entire subtree' },
  { attr: 'slot', desc: 'Web Components' },
  { attr: 'part', desc: 'Styling Shadow DOM' },
  { attr: 'is', desc: 'Customized built-in elements' },
  { attr: 'nonce', desc: 'Content Security Policy (CSP)' },
  { attr: 'virtualkeyboardpolicy', desc: 'Virtual keyboard behavior' },
];

const rarelyUsedGlobalAttributes = [
  { attr: 'exportparts', desc: 'Export Shadow DOM parts' },
  { attr: 'itemid', desc: 'Microdata' },
  { attr: 'itemprop', desc: 'Microdata' },
  { attr: 'itemref', desc: 'Microdata' },
  { attr: 'itemscope', desc: 'Microdata' },
  { attr: 'itemtype', desc: 'Microdata' },
];

const mostlyUsedEventAttributes = [
  {
    grouped: [
      { attr: 'onclick', desc: 'Mouse click' },
      { attr: 'ondblclick', desc: 'Mouse double-click' },
      { attr: 'oncontextmenu', desc: 'Right-click (context menu)' }
    ]
  },
  {
    grouped: [
      { attr: 'onmousedown', desc: 'Mouse button pressed' },
      { attr: 'onmouseup', desc: 'Mouse button released' },
      { attr: 'onmousemove', desc: 'Mouse pointer moved' },
      { attr: 'onmouseenter', desc: 'Mouse pointer enters element' },
      { attr: 'onmouseleave', desc: 'Mouse pointer leaves element' }
    ]
  },
  {
    grouped: [
      { attr: 'ondragstart', desc: 'Drag started' },
      { attr: 'ondrag', desc: 'Element is being dragged' },
      { attr: 'ondragend', desc: 'Drag ended' },
      { attr: 'ondragenter', desc: 'Dragged element enters drop target' },
      { attr: 'ondragleave', desc: 'Dragged element leaves drop target' },
      { attr: 'ondragover', desc: 'Dragged element is over drop target' },
      { attr: 'ondrop', desc: 'Dragged element is dropped' }
    ]
  },
  {
    grouped: [
      { attr: 'ontouchstart', desc: 'Touch started' },
      { attr: 'ontouchmove', desc: 'Touch moved' },
      { attr: 'ontouchend', desc: 'Touch ended' }
    ]
  },
  {
    grouped: [
      { attr: 'onkeydown', desc: 'Key pressed down' },
      { attr: 'onkeyup', desc: 'Key released' }
    ]
  },
  {
    grouped: [
      { attr: 'oninput', desc: 'User input detected' },
      { attr: 'onchange', desc: 'Value changed and focus lost' },
      { attr: 'onsubmit', desc: 'Form submitted' },
      { attr: 'onreset', desc: 'Form reset' },
      { attr: 'oninvalid', desc: 'Form input invalid' }
    ]
  },
  {
    grouped: [
      { attr: 'onfocus', desc: 'Element received focus' },
      { attr: 'onblur', desc: 'Element lost focus' }
    ]
  },
  {
    grouped: [
      { attr: 'oncopy', desc: 'Content copied' },
      { attr: 'oncut', desc: 'Content cut' },
      { attr: 'onpaste', desc: 'Content pasted' }
    ]
  },
  {
    grouped: [
      { attr: 'onload', desc: 'Resource loaded' },
      { attr: 'onerror', desc: 'Error loading resource' },
      { attr: 'onresize', desc: 'Window resized' },
      { attr: 'onscroll', desc: 'Element scrolled' }
    ]
  }
];

const occasionallyUsedEventAttributes = [
  { attr: 'onwheel', desc: '' },
  { attr: 'onbeforeinput', desc: '' },
  { attr: 'onselect', desc: '' },
  { attr: 'onanimationstart, onanimationend, onanimationiteration', desc: '' },
  { attr: 'ontransitionstart, ontransitionend, ontransitioncancel, ontransitionrun', desc: '' },
];

const rarelyUsedEventAttributes = [
  { attr: 'onabort, onauxclick, oncancel, oncanplay, oncanplaythrough, ondurationchange, onemptied, onended, onformdata, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting, ontoggle, oncuechange, onsecuritypolicyviolation', desc: 'Media playback, browser internals, specialized features' },
];

const commonElementAttributes = [
  { el: '<html>', attrs: ['xmlns?'] },
  { el: '<meta>', attrs: ['charset', 'name', 'content', 'http-equiv?', 'media?'] },
  { el: '<link>', attrs: ['href', 'rel', 'media?', 'hreflang?', 'type?', 'sizes?', 'crossorigin?', 'integrity?', 'referrerpolicy?', 'disabled?', 'fetchpriority?'] },
  { el: '<script>', attrs: ['src', 'type?', 'async?', 'defer?', 'crossorigin?', 'integrity?', 'nomodule?', 'referrerpolicy?', 'fetchpriority?'] },
  { el: '<a>', attrs: ['href', 'target?', 'download?', 'rel?', 'hreflang?', 'type?', 'referrerpolicy?', 'ping?'] },
  { el: '<img>', attrs: ['src', 'alt', 'width?', 'height?', 'srcset?', 'sizes?', 'loading?', 'decoding?', 'crossorigin?', 'referrerpolicy?', 'usemap?', 'ismap?', 'fetchpriority?'] },
  { el: '<ol>', attrs: ['reversed?', 'start?', 'type?'] },
  { el: '<li>', attrs: ['value?'] },
  { el: '<form>', attrs: ['action', 'method', 'enctype?', 'target?', 'autocomplete?', 'name?', 'novalidate?', 'accept-charset?'] },
  { el: '<label>', attrs: ['for'] },
  { el: '<input>', attrs: ['type', 'name', 'value?', 'placeholder?', 'required?', 'disabled?', 'readonly?', 'accept?', 'alt?', 'autocomplete?', 'capture?', 'checked?', 'dirname?', 'form?', 'formaction?', 'formenctype?', 'formmethod?', 'formnovalidate?', 'formtarget?', 'height?', 'list?', 'max?', 'maxlength?', 'min?', 'minlength?', 'multiple?', 'pattern?', 'size?', 'src?', 'step?', 'width?'] },
  { el: '<textarea>', attrs: ['name', 'rows?', 'cols?', 'placeholder?', 'required?', 'disabled?', 'readonly?', 'autocomplete?', 'dirname?', 'form?', 'maxlength?', 'minlength?', 'wrap?'] },
  { el: '<select>', attrs: ['name', 'required?', 'disabled?', 'multiple?', 'size?', 'autocomplete?', 'form?'] },
  { el: '<option>', attrs: ['value', 'label?', 'selected?', 'disabled?'] },
  { el: '<button>', attrs: ['type', 'disabled?', 'name?', 'value?', 'autofocus?', 'form?', 'formaction?', 'formenctype?', 'formmethod?', 'formnovalidate?', 'formtarget?'] },
  { el: '<blockquote>', attrs: ['cite?'] },
  { el: '<q>', attrs: ['cite?'] },
  { el: '<time>', attrs: ['datetime?'] },
  { el: '<source>', attrs: ['src', 'srcset?', 'sizes?', 'type?', 'media?', 'width?', 'height?'] },
  { el: '<video>', attrs: ['src', 'controls?', 'autoplay?', 'loop?', 'muted?', 'playsinline?', 'poster?', 'preload?', 'width?', 'height?', 'crossorigin?'] },
  { el: '<audio>', attrs: ['src', 'controls?', 'autoplay?', 'loop?', 'muted?', 'preload?', 'crossorigin?'] },
  { el: '<iframe>', attrs: ['src', 'srcdoc?', 'name?', 'width?', 'height?', 'allow?', 'allowfullscreen?', 'loading?', 'referrerpolicy?', 'sandbox?'] },
  { el: '<details>', attrs: ['open?', 'name?'] },
];

const rareElementAttributes = [
  { el: '<fieldset>', attrs: ['disabled?', 'form?', 'name?'] },
  { el: '<optgroup>', attrs: ['label', 'disabled?'] },
  { el: '<output>', attrs: ['for?', 'form?', 'name?'] },
  { el: '<progress>', attrs: ['value', 'max?'] },
  { el: '<meter>', attrs: ['value', 'min?', 'max?', 'low?', 'high?', 'optimum?'] },
  { el: '<th>', attrs: ['scope', 'colspan?', 'rowspan?', 'abbr?', 'headers?'] },
  { el: '<td>', attrs: ['colspan?', 'rowspan?', 'headers?'] },
  { el: '<colgroup>', attrs: ['span?'] },
  { el: '<col>', attrs: ['span?'] },
  { el: '<canvas>', attrs: ['width?', 'height?'] },
  { el: '<svg>', attrs: ['viewBox?', 'width?', 'height?', 'xmlns?', 'fill?', 'stroke?'] },
  { el: '<template>', attrs: ['shadowrootmode?', 'shadowrootdelegatesfocus?', 'shadowrootclonable?', 'shadowrootserializable?'] },
  { el: '<bdo>', attrs: ['dir'] },
  { el: '<del>', attrs: ['cite?', 'datetime?'] },
  { el: '<ins>', attrs: ['cite?', 'datetime?'] },
];

const enumeratedValues = [
  { el: '<input>', attr: 'type', values: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'checkbox', 'radio', 'file', 'submit', 'button', 'hidden', 'date', 'time', 'color', 'range', 'reset?', 'image?', 'month?', 'week?', 'datetime-local?'] },
  { el: '<button>', attr: 'type', values: ['submit', 'button', 'reset?'] },
  { el: '<form>', attr: 'method', values: ['get', 'post', 'dialog?'] },
  { el: '<form>', attr: 'enctype', values: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain?'] },
  { el: '<form>, <a>', attr: 'target', values: ['_self', '_blank', '_parent?', '_top?'] },
  { el: '<a>, <iframe>, <img>', attr: 'referrerpolicy', values: ['no-referrer?', 'origin?', 'same-origin?', 'strict-origin?', 'unsafe-url?', 'no-referrer-when-downgrade?', 'origin-when-cross-origin?', 'strict-origin-when-cross-origin?'] },
  { el: '<img>, <iframe>', attr: 'loading', values: ['lazy', 'eager'] },
  { el: '<img>', attr: 'decoding', values: ['async', 'sync', 'auto?'] },
  { el: '<img>, <link>, <script>', attr: 'fetchpriority', values: ['high', 'low', 'auto?'] },
  { el: '<img>, <script>, <video>, <audio>', attr: 'crossorigin', values: ['anonymous', 'use-credentials'] },
  { el: '<script>', attr: 'type', values: ['module', 'text/javascript?', 'importmap?', 'speculationrules?', 'application/json?'] },
  { el: '<script>', attr: 'blocking', values: ['render?'] },
  { el: '<link>', attr: 'rel', values: ['stylesheet', 'icon', 'manifest', 'preload', 'preconnect', 'prefetch?', 'modulepreload?', 'canonical?', 'alternate?', 'license?', 'author?', 'help?', 'search?', 'dns-prefetch?'] },
  { el: '<link>', attr: 'as', values: ['style', 'script', 'font', 'image', 'video?', 'audio?', 'fetch?', 'document?', 'worker?'] },
  { el: '<ol>', attr: 'type', values: ['1', 'A', 'a', 'I', 'i'] },
  { el: '<textarea>', attr: 'wrap', values: ['soft?', 'hard?'] },
  { el: '<meta>', attr: 'name', values: ['viewport', 'description', 'theme-color', 'keywords?', 'author?', 'robots?', 'generator?', 'application-name?', 'color-scheme?', 'referrer?'] },
  { el: '<meta>', attr: 'http-equiv', values: ['x-ua-compatible', 'content-security-policy?', 'content-type?', 'default-style?', 'refresh?'] },
  { el: '<video>, <audio>', attr: 'preload', values: ['none', 'metadata', 'auto'] },
  { el: '<th>', attr: 'scope', values: ['col', 'row', 'colgroup?', 'rowgroup?', 'auto?'] },
  { el: '<bdo>', attr: 'dir', values: ['ltr', 'rtl', 'auto'] }
];

const globalEnumeratedValues = [
  { el: '', attr: 'contenteditable', values: ['true', 'false', 'plaintext-only?'] },
  { el: '', attr: 'dir', values: ['ltr', 'rtl', 'auto'] },
  { el: '', attr: 'draggable', values: ['true', 'false', 'auto?'] },
  { el: '', attr: 'hidden', values: ['hidden', 'until-found?'] },
  { el: '', attr: 'spellcheck', values: ['true', 'false'] },
  { el: '', attr: 'translate', values: ['yes', 'no'] },
  { el: '', attr: 'autocapitalize', values: ['none', 'sentences', 'words', 'characters', 'on', 'off'] },
  { el: '', attr: 'inputmode', values: ['text', 'numeric', 'tel', 'email', 'url', 'search', 'decimal?', 'none?'] },
  { el: '', attr: 'enterkeyhint', values: ['enter', 'done', 'go', 'next', 'search', 'send', 'previous?'] },
  { el: '', attr: 'popover', values: ['auto', 'manual'] },
];

const attributeCategories = [
  { name: 'Enumerated', example: 'type, method, loading, target, rel', type: 'Chosen from a predefined list' },
  { name: 'Boolean', example: 'disabled, checked, required, readonly, multiple', type: 'Present or absent (or reflected as true/false in the DOM)' },
  { name: 'Free-form', example: 'name, id, class, placeholder, value', type: 'Any valid string' },
  { name: 'Resource/Numeric', example: 'src, href, width, height, max, min', type: 'URL, path, or number' },
];

function CodeBadge({ children, color = 'sky' }: { children: React.ReactNode, color?: 'sky' | 'emerald' | 'fuchsia' | 'indigo' | 'orange' | 'zinc', key?: string | number }) {
  const colorMap = {
    sky: 'text-sky-400 border-zinc-700 bg-zinc-800',
    emerald: 'text-emerald-400 border-zinc-700 bg-zinc-800',
    fuchsia: 'text-fuchsia-400 border-zinc-700 bg-zinc-800',
    indigo: 'text-indigo-300 border-indigo-500/20 bg-indigo-500/10',
    orange: 'text-orange-400 border-zinc-700 bg-zinc-800',
    zinc: 'text-zinc-500 border-zinc-800 bg-zinc-900/50',
  };
  return (
    <code className={`text-[11px] border px-1.5 py-0.5 rounded font-mono shadow-sm ${colorMap[color]}`}>
      {children}
    </code>
  );
}

function GuidelineCard({ title, description, items, footer, columns, collapsible = false }: any) {
  const [isOpen, setIsOpen] = useState(!collapsible);

  const headerContent = (
    <div>
      <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
        {title}
      </h2>
      {description && <p className="text-zinc-400 mt-2 text-sm">{description}</p>}
    </div>
  );

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col break-inside-avoid mb-6">
      {collapsible ? (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-5 w-full text-left flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
        >
          {headerContent}
          <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
          {headerContent}
        </div>
      )}
      
      {isOpen && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-400">
              <thead className="text-xs text-zinc-300 uppercase bg-zinc-800/50">
                <tr>
                  {columns.map((col: any) => (
                    <th key={col.key} scope="col" className="px-6 py-4 font-semibold tracking-wider">{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {items.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-zinc-800/20 transition-colors group">
                    {columns.map((col: any) => (
                      <td key={col.key} className="px-6 py-4 align-top">
                        {col.render ? col.render(item[col.key], item) : item[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {footer && (
            <div className="p-5 bg-zinc-800/20 border-t border-zinc-800 text-sm text-zinc-400 leading-relaxed">
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function HtmlGuidelines() {
  const defaultColumns = [
    { key: 'category', label: 'Category', render: (val: string) => <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{val}</span> },
    { key: 'elements', label: 'Elements', render: (val: string[]) => <div className="flex flex-wrap gap-2">{val.map(tag => <CodeBadge color="orange" key={tag}>{tag}</CodeBadge>)}</div> }
  ];
  
  const rareColumns = [
    ...defaultColumns,
    { key: 'why', label: 'Why', render: (val: string) => <span className="text-zinc-400 text-xs">{val}</span> }
  ];

  const frameworkColumns = [
    { key: 'element', label: 'HTML Element', render: (val: string) => <div className="flex flex-wrap gap-2">{val.split(', ').map(tag => <CodeBadge color="orange" key={tag}>{tag}</CodeBadge>)}</div> },
    { key: 'why', label: 'Why it\'s used less directly', render: (val: string) => <span className="text-zinc-400 text-sm leading-relaxed">{val}</span> }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
      <GuidelineCard 
        title="🟢 Core HTML (80–90% of Real Projects)" 
        description="These are the elements every frontend developer should master." 
        items={coreHtml} 
        columns={defaultColumns}
        footer={<span>These account for around <strong>90% of modern frontend work</strong>.</span>}
      />
      
      <GuidelineCard 
        title="🟡 Situational Elements" 
        description="These are useful, but only when your application needs them." 
        items={situationalHtml} 
        columns={defaultColumns}
        footer="You'll encounter these occasionally in dashboards, CMSs, documentation sites, or specialized UIs."
      />

      <GuidelineCard 
        title="🔴 Rare / Specialized" 
        description="These are valid HTML elements, but most frontend developers use them infrequently." 
        items={rareHtml} 
        columns={rareColumns}
        collapsible={true}
        footer="Most developers know these exist but rarely type them."
      />

      <GuidelineCard 
        title="Elements that Frameworks Reduce the Need For" 
        description="These elements are still part of HTML and are worth understanding, but frameworks often provide abstractions or components that make direct use less common." 
        items={frameworksReducedHtml} 
        columns={frameworkColumns}
        collapsible={true}
        footer={<span><strong>Note:</strong> These elements are <strong>not obsolete</strong>. Frameworks simply provide higher-level abstractions or components that often make direct use less common.</span>}
      />
    </div>
  );
}

function HtmlAttributesGuidelines() {
  const attrColumns = [
    { 
      key: 'attr', 
      label: 'Attribute', 
      render: (val: any, item: any) => {
        if (item.grouped) {
          return (
            <div className="flex flex-col gap-2">
              {item.grouped.map((g: any, i: number) => (
                <div key={i} className="flex h-6 items-center">
                  <CodeBadge color="sky">{g.attr}</CodeBadge>
                </div>
              ))}
            </div>
          );
        }
        return <CodeBadge color="sky">{val}</CodeBadge>;
      }
    },
    { 
      key: 'desc', 
      label: 'Description', 
      render: (val: any, item: any) => {
        if (item.grouped) {
          return (
            <div className="flex flex-col gap-2">
              {item.grouped.map((g: any, i: number) => (
                <div key={i} className="flex h-6 items-center">
                  <span className="text-zinc-400 text-sm leading-relaxed">{g.desc}</span>
                </div>
              ))}
            </div>
          );
        }
        return <span className="text-zinc-400 text-sm leading-relaxed">{val}</span>;
      }
    }
  ];

  const elementAttrColumns = [
    { key: 'el', label: 'Element', render: (val: string) => <CodeBadge color="orange">{val}</CodeBadge> },
    { 
      key: 'attrs', 
      label: 'Attributes', 
      render: (val: string[]) => (
        <div className="flex flex-wrap gap-2">
          {val.map(tag => {
            const isOptional = tag.endsWith('?');
            const cleanTag = isOptional ? tag.slice(0, -1) : tag;
            return (
              <CodeBadge color={isOptional ? "zinc" : "sky"} key={cleanTag}>
                {cleanTag}
              </CodeBadge>
            );
          })}
        </div>
      ) 
    }
  ];

  const enumeratedAttrColumns = [
    { key: 'el', label: 'Element', render: (val: string) => val ? <CodeBadge color="orange">{val}</CodeBadge> : <span className="text-zinc-500 text-[11px] font-semibold uppercase tracking-wider">Global</span> },
    { key: 'attr', label: 'Attribute', render: (val: string) => <CodeBadge color="sky">{val}</CodeBadge> },
    { 
      key: 'values', 
      label: 'Values', 
      render: (val: string[]) => (
        <div className="flex flex-wrap gap-2">
          {val.map(tag => {
            const isOptional = tag.endsWith('?');
            const cleanTag = isOptional ? tag.slice(0, -1) : tag;
            return (
              <CodeBadge color={isOptional ? "zinc" : "emerald"} key={cleanTag}>
                {cleanTag}
              </CodeBadge>
            );
          })}
        </div>
      ) 
    }
  ];

  const categoryColumns = [
    { key: 'name', label: 'Category', render: (val: string) => <span className="font-medium text-zinc-200">{val}</span> },
    { key: 'example', label: 'Example', render: (val: string) => <CodeBadge color="sky">{val}</CodeBadge> },
    { key: 'type', label: 'Value Type', render: (val: string) => <span className="text-zinc-400 text-sm">{val}</span> },
  ];

  return (
    <div className="flex flex-col gap-6">
      
      <GuidelineCard 
        title="🧠 Attribute Mental Model" 
        description="Understanding these four categories makes it much easier to remember how different HTML attributes behave." 
        items={attributeCategories} 
        columns={categoryColumns}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-zinc-200 mb-4 uppercase tracking-wider">Common Boolean Attributes</h3>
          <div className="flex flex-wrap gap-2">
            {["disabled", "checked", "selected", "readonly", "required", "multiple", "autofocus", "hidden", "controls", "autoplay", "loop", "muted", "open", "novalidate", "download", "reversed", "async", "defer", "ismap", "default", "allowfullscreen"].map((attr, i) => (
              <span key={i} className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-blue-400 font-mono text-xs shadow-sm hover:bg-zinc-700/50 transition-colors">
                {attr}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-zinc-200 mb-4 uppercase tracking-wider">Common Global Attributes</h3>
          <div className="flex flex-wrap gap-2">
            {["id", "class", "style", "hidden", "title", "role", "tabindex", "data-*"].map((attr, i) => (
              <span key={i} className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-blue-400 font-mono text-xs shadow-sm hover:bg-zinc-700/50 transition-colors">
                {attr}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-6">
          <GuidelineCard 
            title="🟢 Mostly Used Global Attributes" 
            description="These are the attributes you'll use regularly in modern frontend development." 
            items={mostlyUsedGlobalAttributes} 
            columns={attrColumns}
            collapsible={true}
          />
          
          <GuidelineCard 
            title="🟡 Occasionally Used Global Attributes" 
            description="Useful in specific situations." 
            items={occasionallyUsedGlobalAttributes} 
            columns={attrColumns}
            collapsible={true}
          />

          <GuidelineCard 
            title="🔴 Rarely Used Global Attributes" 
            description="Mostly found in Web Components, structured data, or enterprise applications." 
            items={rarelyUsedGlobalAttributes} 
            columns={attrColumns}
            collapsible={true}
          />
          
          <GuidelineCard 
            title="📋 Enumerated Values (Predefined)" 
            description="Important built-in attribute values that have a predefined (enumerated) set." 
            items={enumeratedValues} 
            columns={enumeratedAttrColumns}
          />

          <GuidelineCard 
            title="🌍 Global Enumerated Values" 
            description="Global attributes with predefined values that apply to many elements." 
            items={globalEnumeratedValues} 
            columns={enumeratedAttrColumns}
            collapsible={true}
          />
        </div>

        <div className="flex flex-col gap-6">




        <GuidelineCard 
          title="🎯 Common Element-Specific Attributes" 
          description="Specific attributes available to common HTML elements." 
          items={commonElementAttributes} 
          columns={elementAttrColumns}
        />
        
        <GuidelineCard 
          title="🔬 Rarely Used Attributes" 
          description="Attributes for elements that are specialized or used infrequently." 
          items={rareElementAttributes} 
          columns={elementAttrColumns}
          collapsible={true}
        />
      </div>
    </div>
    </div>
  );
}



function HtmlAnatomyGuidelines() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col min-h-[500px] mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          HTML Element Anatomy
        </h2>
      </div>
      <div className="flex-1 p-8 md:p-12 xl:p-20 flex flex-col items-center justify-center overflow-x-auto">
        <div className="relative flex flex-col items-center w-max mx-auto mt-32 mb-16">
        
        {/* Top Global Brace - Element */}
        <SvgBrace label="Element" colorClass="text-emerald-400" position="top" className="bottom-full mb-[7.5rem]" />

        {/* The Code Snippet */}
        <div className="flex text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-mono font-semibold tracking-tight">
          
          {/* Opening Tag Group */}
          <div className="relative flex">
            {/* Brace for Opening Tag */}
            <SvgBrace label="Opening Tag" colorClass="text-blue-400" position="top" className="bottom-full mb-16" />

            <span className="text-blue-400">&lt;a</span>
            <span>&nbsp;</span>

            {/* Attribute Group */}
            <div className="relative flex">
              {/* Brace for Attribute */}
              <SvgBrace label="Attribute" colorClass="text-orange-400" position="top" className="bottom-full mb-2" />
              
              {/* href */}
              <div className="relative flex">
                 <span className="text-rose-400">href</span>
                 <SvgBrace label="Attribute Name" colorClass="text-rose-400" position="bottom" className="top-full mt-2" />
              </div>
              
              <span className="text-zinc-500">=</span>
              
              {/* "contact.html" */}
              <div className="relative flex">
                 <span className="text-violet-400">"contact.html"</span>
                 <SvgBrace label="Attribute Value" colorClass="text-violet-400" position="bottom" className="top-full mt-2" />
              </div>
            </div>

            <span className="text-blue-400">&gt;</span>
          </div>

          {/* Content Group */}
          <div className="relative flex">
             <span className="text-zinc-200">Contact&nbsp;us</span>
             <SvgBrace label="Content" colorClass="text-zinc-200" position="bottom" className="top-full mt-2" />
          </div>

          {/* Closing Tag Group */}
          <div className="relative flex">
             <span className="text-blue-400">&lt;/a&gt;</span>
             <SvgBrace label="Closing Tag" colorClass="text-blue-400" position="bottom" className="top-full mt-2" />
          </div>

        </div>
      </div>
      </div>

    </div>
  );
}

function TailwindGuidelines() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          Easy rule to remember
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-400">
          <thead className="text-xs text-zinc-300 uppercase bg-zinc-800/50">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Thing</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            <tr className="hover:bg-zinc-800/20 transition-colors group">
              <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Property</td>
              <td className="px-6 py-4 flex flex-wrap gap-2">
                <CodeBadge color="sky">background-color</CodeBadge>
                <CodeBadge color="sky">display</CodeBadge>
                <CodeBadge color="sky">justify-content</CodeBadge>
                <CodeBadge color="sky">gap</CodeBadge>
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/20 transition-colors group">
              <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Value</td>
              <td className="px-6 py-4 flex flex-wrap gap-2">
                <CodeBadge color="emerald">red</CodeBadge>
                <CodeBadge color="emerald">flex</CodeBadge>
                <CodeBadge color="emerald">center</CodeBadge>
                <CodeBadge color="emerald">16px</CodeBadge>
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/20 transition-colors group">
              <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">CSS Class</td>
              <td className="px-6 py-4 flex flex-wrap gap-2">
                <CodeBadge color="fuchsia">.bg-red-500</CodeBadge>
                <CodeBadge color="fuchsia">.flex</CodeBadge>
                <CodeBadge color="fuchsia">.justify-center</CodeBadge>
                <CodeBadge color="fuchsia">.gap-4</CodeBadge>
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/20 transition-colors group">
              <td className="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition-colors">Tailwind Utility Class</td>
              <td className="px-6 py-4 flex flex-wrap gap-2">
                <CodeBadge color="indigo">bg-red-500</CodeBadge>
                <CodeBadge color="indigo">flex</CodeBadge>
                <CodeBadge color="indigo">justify-center</CodeBadge>
                <CodeBadge color="indigo">gap-4</CodeBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


function DomEventsGuidelines() {
  const attrColumns = [
    { 
      key: 'attr', 
      label: 'Attribute', 
      render: (val: any, item: any) => {
        if (item.grouped) {
          return (
            <div className="flex flex-col gap-2">
              {item.grouped.map((g: any, i: number) => (
                <div key={i} className="flex h-6 items-center">
                  <CodeBadge color="sky">{g.attr}</CodeBadge>
                </div>
              ))}
            </div>
          );
        }
        return <CodeBadge color="sky">{val}</CodeBadge>;
      }
    },
    { 
      key: 'desc', 
      label: 'Description', 
      render: (val: any, item: any) => {
        if (item.grouped) {
          return (
            <div className="flex flex-col gap-2">
              {item.grouped.map((g: any, i: number) => (
                <div key={i} className="flex h-6 items-center">
                  <span className="text-zinc-400 text-sm leading-relaxed">{g.desc}</span>
                </div>
              ))}
            </div>
          );
        }
        return <span className="text-zinc-400 text-sm leading-relaxed">{val}</span>;
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-6">
        <GuidelineCard 
          title="🟢 Mostly Used Global Event Attributes" 
          description="Although frameworks usually prefer JavaScript event listeners (or Angular/React bindings) over inline HTML event attributes, these represent the events you'll work with most." 
          items={mostlyUsedEventAttributes} 
          columns={attrColumns}
        />
      </div>
      <div className="flex flex-col gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl break-inside-avoid">
          <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
            <h2 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              For Angular / React Developers
            </h2>
            <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
              In modern frameworks, avoid writing inline HTML event attributes like:
              <br />
              <code className="text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded font-mono text-xs mt-1.5 inline-block">{'<button onclick="save()">'}</code>
            </p>
          </div>
          <div className="p-5 bg-zinc-800/20">
            <p className="text-zinc-300 text-sm mb-4">Instead, use the framework's event binding:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-sm">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Angular</div>
                <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono text-xs block truncate" title={'<button (click)="save()">'}>{'<button (click)="save()">'}</code>
              </div>
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-sm">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">React</div>
                <code className="text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded font-mono text-xs block truncate" title={'<button onClick={save}>'}>{'<button onClick={save}>'}</code>
              </div>
            </div>
          </div>
        </div>
        
        <GuidelineCard 
          title="🟡 Occasionally Used Event Attributes" 
          description="Useful in specific situations like transitions and animations." 
          items={occasionallyUsedEventAttributes} 
          columns={attrColumns}
          collapsible={true}
        />

        <GuidelineCard 
          title="🔴 Rarely Used Event Attributes" 
          description="These are mostly related to media playback, browser internals, or specialized features." 
          items={rarelyUsedEventAttributes} 
          columns={attrColumns}
          collapsible={true}
        />
      </div>
    </div>
  );
}




export function Guidelines() {
  const [activeTab, setActiveTab] = useState<'anatomy' | 'html' | 'attributes' | 'event-attributes' | 'tailwind' | 'layout'>('anatomy');

  return (
    <div className="p-8 max-w-[90rem] mx-auto w-full">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Guidelines</h1>
            <p className="text-zinc-400">Essential rules and reference for modern web development.</p>
          </div>
          <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveTab('anatomy')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'anatomy' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Anatomy
            </button>
            <button
              onClick={() => setActiveTab('layout')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'layout' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Semantic Layout
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'html' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              HTML Elements
            </button>
            <button
              onClick={() => setActiveTab('attributes')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'attributes' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              HTML Attributes
            </button>
            <button
              onClick={() => setActiveTab('event-attributes')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'event-attributes' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Event Attributes
            </button>

            <button
              onClick={() => setActiveTab('tailwind')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'tailwind' ? 'bg-indigo-500/20 text-indigo-300' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              CSS & Tailwind
            </button>
          </div>
        </div>
      </div>
      
      <div className="transition-opacity duration-300">
        {activeTab === 'anatomy' && (
          <div className="flex flex-col gap-6">
            <HtmlAnatomyGuidelines />
            <CssAnatomyGuidelines />
            <TailwindAnatomyGuidelines />
            <HtmlTerminology />
          </div>
        )}
        {activeTab === 'layout' && <SemanticLayoutWidget />}
        {activeTab === 'html' && <HtmlGuidelines />}
        {activeTab === 'attributes' && <HtmlAttributesGuidelines />}
        {activeTab === 'event-attributes' && <DomEventsGuidelines />}
        {activeTab === 'tailwind' && <TailwindGuidelines />}
      </div>
    </div>
  );
}
