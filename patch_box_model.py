import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """        </div>

          </>
        )}
        <header className="mb-8">"""

    replacement = """        </div>

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
                <div className="relative border border-orange-500/50 bg-orange-500/10 p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center w-full max-w-lg shadow-sm">
                  <span className="absolute top-1 sm:top-2 left-2 sm:left-3 text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest">Margin</span>
                  
                  {/* Border */}
                  <div className="relative border-4 border-amber-500/50 bg-amber-500/20 p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center w-full shadow-sm mt-3 sm:mt-4">
                    <span className="absolute top-1 sm:top-2 left-2 sm:left-3 text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">Border</span>
                    
                    {/* Padding */}
                    <div className="relative border border-emerald-500/50 bg-emerald-500/20 p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center w-full shadow-sm mt-3 sm:mt-4">
                      <span className="absolute top-1 sm:top-2 left-2 sm:left-3 text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest">Padding</span>
                      
                      {/* Content */}
                      <div className="relative border border-sky-500/50 bg-sky-500/30 p-8 sm:p-12 rounded-lg flex flex-col items-center justify-center w-full shadow-inner mt-3 sm:mt-4">
                        <span className="text-xs sm:text-sm font-bold text-sky-200 uppercase tracking-widest">Content</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>
        )}
        <header className="mb-8">"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/Curriculum.tsx")
