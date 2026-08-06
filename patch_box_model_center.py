import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """              <div className="flex justify-center p-4">
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
              </div>"""

    replacement = """              <div className="flex justify-center p-4">
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
              </div>"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/Curriculum.tsx")
