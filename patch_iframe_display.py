import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """              ) : previewMode === 'display' ? (
                <div className="w-full max-w-4xl h-[320px] sm:h-[400px] lg:h-[420px] lg:max-w-3xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-auto shadow-2xl p-6 sm:p-10 flex flex-col items-center justify-center">
                  <div className="bg-slate-800/80 rounded-xl border border-slate-700 p-6 text-slate-300 font-medium leading-relaxed w-full">
                    <span className="text-slate-400">Text before the element. </span>
                    
                    <div className={`p-3 rounded-lg bg-indigo-500/20 border-2 border-indigo-500 text-indigo-100 font-bold text-base shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 gap-2 ${containerClassesStr}`}>
                      <div className="p-2 bg-indigo-500/40 rounded border border-indigo-400">Child A</div>
                      <div className="p-2 bg-rose-500/40 rounded border border-rose-400">Child B</div>
                      <div className="p-2 bg-emerald-500/40 rounded border border-emerald-400">Child C</div>
                    </div>
                    
                    <span className="text-slate-400"> Text after the element. Observe how the layout flows.</span>
                  </div>
                </div>
              ) : ['layouts', 'tailwind', 'flex', 'grid'].includes(previewMode) ? ("""

    replacement = """              ) : previewMode === 'display' ? (
                <div className="w-full max-w-4xl h-[320px] sm:h-[400px] lg:h-[420px] lg:max-w-3xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-auto shadow-2xl p-6 sm:p-10 flex flex-col items-center justify-center">
                  <div className="bg-slate-800/80 rounded-xl border border-slate-700 p-8 text-slate-300 font-medium leading-loose w-full text-lg">
                    <span className="text-slate-400">Here is some regular text flowing naturally in the document. </span>
                    
                    <div className={`p-4 rounded-lg bg-indigo-500/20 border-2 border-indigo-500 text-indigo-100 font-bold text-base shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 gap-4 ${containerClassesStr}`}>
                      <span className="bg-indigo-500/40 px-3 py-1.5 rounded border border-indigo-400/50">Item 1</span>
                      <span className="bg-rose-500/40 px-3 py-1.5 rounded border border-rose-400/50">Item 2</span>
                      <span className="bg-emerald-500/40 px-3 py-1.5 rounded border border-emerald-400/50">Item 3</span>
                    </div>
                    
                    <span className="text-slate-400"> This text continues after the target element. Change the display property to see how it affects the flow of the document and its children. Notice the gaps when using flex!</span>
                  </div>
                </div>
              ) : ['layouts', 'tailwind', 'flex', 'grid'].includes(previewMode) ? ("""
              
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/IframePreview.tsx")
