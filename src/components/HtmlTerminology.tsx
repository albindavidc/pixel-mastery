import React from 'react';

export default function HtmlTerminology() {
  const terminologyData = [
    { topic: "Opening tag", example: "<div>", meaning: "Begins an element" },
    { topic: "Closing tag", example: "</div>", meaning: "Ends an element" },
    { topic: "Start tag", example: '<div class="profile">', meaning: "Opening tag + attributes" },
    { topic: "End tag", example: "</div>", meaning: "Closing representation of an element" },
    { topic: "Attribute", example: 'class="profile"', meaning: "Provides additional information to an element" },
    { topic: "Quoted value", example: '"profile"', meaning: "Attribute value surrounded by quotes" },
    { topic: "Boolean attribute", example: "disabled", meaning: "Attribute whose presence means true" },
    { topic: "Nesting", example: "<div><p>...</p></div>", meaning: "Element placed inside another element" },
    { topic: "Valid nesting", example: "<p><strong>Hello</strong></p>", meaning: "Elements are properly nested" },
    { topic: "Void element", example: "<img />, <br />, <input />", meaning: "Element that doesn't have an end tag" },
    { topic: "Comment", example: "<!-- note -->", meaning: "Developer-only annotation" },
    { topic: "Whitespace", example: "Spaces/newlines", meaning: "Generally ignored/collapsed in normal HTML rendering" },
    { topic: "Character reference", example: "&amp;", meaning: "Encoded representation of a character" },
    { topic: "HTML entity", example: "&quot;", meaning: 'Named character reference for "' }
  ];

  
          const characterReferences = [
    { char: "&", ref: "&amp;", dec: "&#38;", hex: "&#x26;" },
    { char: "<", ref: "&lt;", dec: "&#60;", hex: "&#x3C;" },
    { char: ">", ref: "&gt;", dec: "&#62;", hex: "&#x3E;" },
    { char: '"', ref: "&quot;", dec: "&#34;", hex: "&#x22;" },
    { char: "'", ref: "&apos;", dec: "&#39;", hex: "&#x27;" },
    { char: "@", ref: "&commat;", dec: "&#64;", hex: "&#x40;" },
    { char: "space", ref: "&nbsp;", dec: "&#160;", hex: "&#xA0;" },
    { char: "©", ref: "&copy;", dec: "&#169;", hex: "&#xA9;" },
    { char: "®", ref: "&reg;", dec: "&#174;", hex: "&#xAE;" },
    { char: "™", ref: "&trade;", dec: "&#8482;", hex: "&#x2122;" },
    { char: "€", ref: "&euro;", dec: "&#8364;", hex: "&#x20AC;" },
    { char: "£", ref: "&pound;", dec: "&#163;", hex: "&#xA3;" },
    { char: "¥", ref: "&yen;", dec: "&#165;", hex: "&#xA5;" },
    { char: "¢", ref: "&cent;", dec: "&#162;", hex: "&#xA2;" },
    { char: "×", ref: "&times;", dec: "&#215;", hex: "&#xD7;" },
    { char: "÷", ref: "&divide;", dec: "&#247;", hex: "&#xF7;" },
    { char: "±", ref: "&plusmn;", dec: "&#177;", hex: "&#xB1;" },
    { char: "°", ref: "&deg;", dec: "&#176;", hex: "&#xB0;" },
    { char: "•", ref: "&bull;", dec: "&#8226;", hex: "&#x2022;" },
    { char: "…", ref: "&hellip;", dec: "&#8230;", hex: "&#x2026;" },
    { char: "–", ref: "&ndash;", dec: "&#8211;", hex: "&#x2013;" },
    { char: "—", ref: "&mdash;", dec: "&#8212;", hex: "&#x2014;" }
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          HTML Terminology & References
        </h2>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col gap-8">
        
        {/* Main Terminology Table */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">HTML Syntax Rules</h3>
          <div className="overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full text-left text-sm text-zinc-400">
            <thead className="text-xs uppercase bg-zinc-800/50 text-zinc-300">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Topic</th>
                <th scope="col" className="px-6 py-4 font-semibold">Example</th>
                <th scope="col" className="px-6 py-4 font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {terminologyData.map((item, i) => (
                <tr key={i} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-3 font-medium text-zinc-200">{item.topic}</td>
                  <td className="px-6 py-3 font-mono text-emerald-400 text-xs bg-zinc-900/50">{item.example}</td>
                  <td className="px-6 py-3">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Character References */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 lg:col-span-2">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6 gap-3">
              <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Character References</h3>
              <div className="flex flex-wrap gap-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span> SYM: Symbol</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> NR: Named Reference</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> DC: Decimal Code</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> HC: Hexadecimal Code</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {characterReferences.map((ref, i) => (
                <div key={i} className="flex flex-col p-3 rounded-lg bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/60 transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-700/50">
                    <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">SYM</span>
                    <span className="text-zinc-200 font-medium text-lg">{ref.char === 'space' ? 'Space' : ref.char}</span>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">NR</span>
                      <span className="font-mono text-rose-400 text-xs bg-zinc-900/80 px-1.5 py-0.5 rounded border border-rose-900/30 shadow-inner">{ref.ref}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">DC</span>
                      <span className="font-mono text-emerald-400 text-xs bg-zinc-900/80 px-1.5 py-0.5 rounded border border-emerald-900/30 shadow-inner">{ref.dec}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">HC</span>
                      <span className="font-mono text-sky-400 text-xs bg-zinc-900/80 px-1.5 py-0.5 rounded border border-sky-900/30 shadow-inner">{ref.hex}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note on Entities */}
        <div className="bg-blue-900/10 border border-blue-900/30 rounded-lg p-5 flex items-start gap-4">
          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">HTML Entities vs. Character References</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              You'll often hear "HTML entity" used for things such as <code className="text-zinc-300 mx-1">&amp;</code>, <code className="text-zinc-300 mx-1">&lt;</code>, <code className="text-zinc-300 mx-1">&gt;</code>, and <code className="text-zinc-300 mx-1">&quot;</code>.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Strictly speaking, the modern HTML specification uses the term <strong>character reference</strong>; "entity" is an older/common term developers still use.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
