import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    box_model = """
            {/* Box Model Visual */}
            <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Info className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-bold text-sm tracking-wide uppercase">The Box Model</h3>
                </div>
              </div>
              
              <div className="flex justify-center p-4">
                {/* Margin */}
                <div className="relative border border-orange-500/50 bg-orange-500/10 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center w-full max-w-lg border-dashed">
                  <span className="text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 sm:mb-3">Margin</span>
                  
                  {/* Border */}
                  <div className="relative border-4 border-amber-500/70 bg-amber-500/20 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center w-full">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 sm:mb-3">Border</span>
                    
                    {/* Padding */}
                    <div className="relative border border-emerald-500/50 bg-emerald-500/20 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center w-full border-dashed">
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 sm:mb-3">Padding</span>
                      
                      {/* Content */}
                      <div className="relative border border-sky-500/50 bg-sky-500/30 py-8 sm:py-12 rounded-lg flex flex-col items-center justify-center w-full shadow-inner">
                        <span className="text-xs sm:text-sm font-bold text-sky-200 uppercase tracking-widest">Content</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>"""
            
    target_to_remove = box_model
    
    target_to_add_after = """        <div className="prose prose-invert max-w-none mb-10 text-zinc-400 leading-relaxed">
          {module.id !== 'tailwind-layout-display' && <p>{module.content}</p>}"""
          
    box_model_new = """
          {module.id === 'tailwind-layout-box-sizing' && (
            <div className="mt-8 mb-6 not-prose">
""" + box_model + """
            </div>
          )}
"""

    if target_to_remove in content:
        content = content.replace(target_to_remove, "")
        
        if target_to_add_after in content:
            content = content.replace(target_to_add_after, target_to_add_after + box_model_new)
            with open(filepath, "w") as f:
                f.write(content)
            print(f"Patched {filepath}")
        else:
            print("Failed to find injection target")
    else:
        print("Failed to find removal target")

patch_file("src/components/Curriculum.tsx")
