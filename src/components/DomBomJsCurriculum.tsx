import React from 'react';
export function DomBomJsCurriculum() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl mb-6">
        <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
          <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            DOM vs BOM vs JS
          </h2>
          <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
            The DOM (Document Object Model) and BOM (Browser Object Model) are two distinct APIs that JavaScript uses to interact with the browser environment. The DOM represents the actual webpage content, while the BOM represents the browser container hosting that webpage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-semibold text-zinc-100">🗺️ The Core Architecture</h3>
            </div>
            <div className="p-5 bg-zinc-900/50">
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                At a high level, the BOM actually wraps around the DOM. The <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono text-xs">window</code> object represents the browser window, and the <code className="text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded font-mono text-xs">document</code> object represents the page inside it.
              </p>
              <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800 overflow-x-auto text-zinc-300">
                <pre>
{`[ BOM: window ] 
   ├── screen (Display details)
   ├── location (URL details)
   ├── history (Visited pages)
   ├── navigator (Browser info)
   └── [ DOM: document ]  <-- The webpage itself
          └── html 
               ├── head
               └── body`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                <span className="text-emerald-400">⚡</span> Key Summary
              </h3>
            </div>
            <div className="p-5 bg-zinc-900/50">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                  <span className="text-zinc-300 text-sm leading-relaxed">
                    Use the <strong>DOM</strong> when you want to change text, styles, tags, or forms on the page.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                  <span className="text-zinc-300 text-sm leading-relaxed">
                    Use the <strong>BOM</strong> when you want to redirect the user, check screen size, or store login tokens.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                <span className="text-sky-400">📄</span> 1. DOM API Elements
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">
                The DOM turns your HTML document into a tree of objects. Everything inside the <code className="text-zinc-300 font-mono text-xs">{"<html>"}</code> tags belongs to the DOM.
              </p>
            </div>
            <div className="p-5 bg-zinc-900/50 flex flex-col gap-3">
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-sky-400 text-sm font-mono w-fit">document</code>
                <span className="text-zinc-400 text-sm">The entry point to the webpage content.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-sky-400 text-sm font-mono w-fit">document.getElementById()</code>
                <span className="text-zinc-400 text-sm">Selects a specific element by ID.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-sky-400 text-sm font-mono w-fit">document.querySelector()</code>
                <span className="text-zinc-400 text-sm">Selects elements using CSS selectors.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-sky-400 text-sm font-mono w-fit">element.addEventListener()</code>
                <span className="text-zinc-400 text-sm">Attaches click, hover, or keyboard events to elements.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-sky-400 text-sm font-mono w-fit">element.getAttribute()</code>
                <span className="text-zinc-400 text-sm">Reads HTML attributes (like href or src).</span>
              </div>
              <div className="flex flex-col gap-1">
                <code className="text-sky-400 text-sm font-mono w-fit">document.createElement()</code>
                <span className="text-zinc-400 text-sm">Generates a brand new HTML tag dynamically.</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                <span className="text-emerald-400">🌐</span> 2. BOM API Elements
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">
                The BOM deals with everything outside the webpage context. It does not have an official standard, but all modern browsers implement it similarly.
              </p>
            </div>
            <div className="p-5 bg-zinc-900/50 flex flex-col gap-3">
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window</code>
                <span className="text-zinc-400 text-sm">The global object. All other BOM objects are properties of window.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window.location</code>
                <span className="text-zinc-400 text-sm">Controls or reads the current URL (e.g., <code className="text-zinc-300">location.href</code>, <code className="text-zinc-300">location.reload()</code>).</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window.history</code>
                <span className="text-zinc-400 text-sm">Navigates the user's browser history (e.g., <code className="text-zinc-300">history.back()</code>, <code className="text-zinc-300">history.forward()</code>).</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window.navigator</code>
                <span className="text-zinc-400 text-sm">Contains information about the user's browser, OS, and webcam/mic permissions.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window.screen</code>
                <span className="text-zinc-400 text-sm">Gives properties about the user's monitor screen resolution and orientation.</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3">
                <code className="text-emerald-400 text-sm font-mono w-fit">window.localStorage / sessionStorage</code>
                <span className="text-zinc-400 text-sm">Saves data locally in the user's browser.</span>
              </div>
              <div className="flex flex-col gap-1">
                <code className="text-emerald-400 text-sm font-mono w-fit">alert() / confirm() / prompt()</code>
                <span className="text-zinc-400 text-sm">Triggers browser-native pop-up dialog boxes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
