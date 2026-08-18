import React from 'react';

export function HtmlElementsShowcase() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-display font-bold mb-2 flex items-center gap-3 text-ds-violet">
        <span className="w-6 h-[2px] bg-current opacity-50"></span>
        HTML Elements Showcase
      </h3>
      <p className="text-zinc-400 mb-8 ml-9 text-sm font-sans">
        Live previews of essential HTML building blocks styled with our dark theme tokens.
      </p>

      <div className="flex flex-col gap-6">
        
        {/* Card 1: Layout & Containers */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-emerald border-ds-emerald/30">body</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-emerald border-ds-emerald/30">div</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-emerald border-ds-emerald/30">span</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-emerald/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-emerald">body</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-emerald">div</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-emerald">span</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}New Feature{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-emerald">span</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-emerald">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-emerald">body</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>

        {/* Card 2: Typography */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-rose border-ds-rose/30">h1</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-rose border-ds-rose/30">h2</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-rose border-ds-rose/30">h3</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-rose/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-rose">h1</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}Main Page Title{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-rose">h1</span><span className="text-zinc-600">&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-rose">h2</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"mb-4 text-3xl font-bold text-slate-800"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}Section Header{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-rose">h2</span><span className="text-zinc-600">&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-rose">h3</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"mb-3 text-xl font-semibold text-slate-800"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}Subsection Header{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-rose">h3</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>

        {/* Card 3: Text & Links */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-amber border-ds-amber/30">p</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-amber border-ds-amber/30">hr</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-amber border-ds-amber/30">a</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-amber/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-amber">p</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"max-w-prose leading-relaxed text-slate-600 mb-4"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}This is a standard paragraph. It uses a readable line height and{"\n"}
              {"  "}constrained width so the user's eyes don't have to travel too far{"\n"}
              {"  "}across large screens.{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-amber">p</span><span className="text-zinc-600">&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-amber">hr</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"my-8 border-t border-slate-200"</span> <span className="text-zinc-600">/&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-amber">a</span> <span className="text-zinc-400">href</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"#"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"font-medium text-blue-600 underline-offset-4 hover:text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}Read the documentation{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-amber">a</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>

        {/* Card 4: Lists */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-cyan border-ds-cyan/30">ul</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-cyan border-ds-cyan/30">ol</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-cyan border-ds-cyan/30">li</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-cyan/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">ul</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"list-disc list-inside space-y-2 text-slate-600 marker:text-blue-500 mb-6"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>First bullet point item<span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>Second bullet point item<span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">ul</span><span className="text-zinc-600">&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">ol</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"list-decimal list-inside space-y-2 text-slate-600 marker:text-slate-400 marker:font-medium"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>Step one<span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>Step two<span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">li</span><span className="text-zinc-600">&gt;</span>{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-cyan">ol</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>

        {/* Card 5: Definitions & Media */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5 flex-wrap justify-end">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-pink border-ds-pink/30">img</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-pink border-ds-pink/30">dl</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-pink border-ds-pink/30">dt</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-pink border-ds-pink/30">dd</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-pink/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-pink">img</span> <span className="text-zinc-400">src</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"/path/to/image.jpg"</span> <span className="text-zinc-400">alt</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"Descriptive alt text"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"w-full max-w-2xl h-auto aspect-video object-cover rounded-lg shadow-md"</span> <span className="text-zinc-400">loading</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"lazy"</span> <span className="text-zinc-600">/&gt;</span>{"\n\n"}
              <span className="text-zinc-600">&lt;</span><span className="text-ds-pink">dl</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-pink">div</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"sm:col-span-1"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- APPEARANCE: Bold term --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-pink">dt</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"text-sm font-semibold text-slate-900"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}Server Status{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-pink">dt</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- APPEARANCE: Muted description --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-pink">dd</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"mt-1 text-sm text-slate-600"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}All systems operational{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-pink">dd</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-pink">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-pink">dl</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>

        {/* Card 6: Forms */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col h-full sm:col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex gap-1.5 flex-wrap justify-end">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">form</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">label</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">input</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">textarea</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">select</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">option</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border text-ds-teal border-ds-teal/30">button</span>
            </div>
          </div>
          <div className="mt-auto p-4 bg-black/40 rounded-lg border border-zinc-800/80 border-l-2 border-l-ds-teal/50 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <pre className="font-mono text-[13px] text-zinc-300 whitespace-pre leading-relaxed"><code className="block">
              <span className="text-zinc-600">&lt;</span><span className="text-ds-teal">form</span> <span className="text-zinc-400">action</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"#"</span> <span className="text-zinc-400">method</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"POST"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-100"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- LABEL: Block level, small, slight margin bottom --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">label</span> <span className="text-zinc-400">for</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"email"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block text-sm font-medium text-slate-700 mb-1"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}Email address{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">label</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- INPUT: Full width, border, rounded. BEHAVIOR: Focus rings, disabled opacity --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">input</span> <span className="text-zinc-400">type</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"email"</span> <span className="text-zinc-400">id</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"email"</span> <span className="text-zinc-400">name</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"email"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block w-full rounded-md border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors"</span> <span className="text-zinc-400">placeholder</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"you@example.com"</span> <span className="text-zinc-400">required</span> <span className="text-zinc-600">/&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">label</span> <span className="text-zinc-400">for</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"message"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block text-sm font-medium text-slate-700 mb-1"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}Message{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">label</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- BEHAVIOR: resize-y allows vertical resizing only --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">textarea</span> <span className="text-zinc-400">id</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"message"</span> <span className="text-zinc-400">name</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"message"</span> <span className="text-zinc-400">rows</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">4</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block w-full rounded-md border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-y"</span><span className="text-zinc-600">&gt;&lt;/</span><span className="text-ds-teal">textarea</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">label</span> <span className="text-zinc-400">for</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"role"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block text-sm font-medium text-slate-700 mb-1"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}Role{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">label</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600 italic">&lt;!-- APPEARANCE: bg-white is important for selects across browsers --&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">select</span> <span className="text-zinc-400">id</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"role"</span> <span className="text-zinc-400">name</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"role"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"block w-full rounded-md border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">option</span> <span className="text-zinc-400">value</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"user"</span><span className="text-zinc-600">&gt;</span>User<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">option</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"      "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">option</span> <span className="text-zinc-400">value</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"admin"</span><span className="text-zinc-600">&gt;</span>Admin<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">option</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">select</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">div</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"  "}<span className="text-zinc-600">&lt;</span><span className="text-ds-teal">button</span> <span className="text-zinc-400">type</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"submit"</span> <span className="text-zinc-400">class</span><span className="text-zinc-600">=</span><span className="text-sky-400/80">"inline-flex w-full justify-center items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"</span><span className="text-zinc-600">&gt;</span>{"\n"}
              {"    "}Submit Form{"\n"}
              {"  "}<span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">button</span><span className="text-zinc-600">&gt;</span>{"\n"}
              <span className="text-zinc-600">&lt;/</span><span className="text-ds-teal">form</span><span className="text-zinc-600">&gt;</span>
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
