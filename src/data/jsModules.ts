import { Module } from '../types';

export const jsModules: Module[] = [
  {
    id: 'js-dom-bom',
    title: 'DOM & BOM',
    category: 'javascript',
    description: 'Understanding the Document Object Model and Browser Object Model.',
    content: '',
    examples: [
      { label: 'Toggle a class', classes: "document.querySelector('.box').classList.toggle('active')" },
      { label: 'Read the current URL', classes: "console.log(window.location.href)" },
      { label: 'Create and append an element', classes: "const el = document.createElement('p');\nel.textContent = 'Hello!';\ndocument.body.appendChild(el);" }
    ],
    challenge: { description: '', targetClasses: [] }
  }
];
