import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Remove flexbox-grid module entirely
    import re
    # We'll use a simpler replace
    
    target_display_examples = """    examples: [
      { label: 'Block', classes: 'block p-6 w-full max-w-xs bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl' },
      { label: 'Inline Block', classes: 'inline-block p-6 w-48 bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl' },
      { label: 'Hidden', classes: 'hidden p-6 w-48 bg-rose-500/20 border-4 border-rose-500 rounded-2xl shadow-xl' },
      { label: 'Flex Row', classes: 'flex flex-row gap-4 bg-slate-100 p-4' },
      { label: '3 Columns Grid', classes: 'grid grid-cols-3 gap-4 bg-slate-100 p-4' },
      { label: 'Center Content (Flex)', classes: 'flex justify-center items-center h-32 bg-slate-100' }
    ],"""
    
    replacement_display_examples = """    examples: [
      { label: 'Inline', classes: 'inline px-4 py-2 font-bold bg-amber-500/20 text-amber-300 border-2 border-amber-500 rounded shadow-lg' },
      { label: 'Block', classes: 'block p-6 w-full max-w-sm bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl' },
      { label: 'Inline-Block', classes: 'inline-block p-6 w-48 bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl' },
      { label: 'Flex Container', classes: 'flex flex-row gap-4 items-center justify-center bg-indigo-500/10 p-6 border-4 border-indigo-500/50 rounded-2xl' },
      { label: 'Grid Container', classes: 'grid grid-cols-2 gap-4 bg-purple-500/10 p-6 border-4 border-purple-500/50 rounded-2xl place-items-center' },
    ],"""
    
    content = content.replace(target_display_examples, replacement_display_examples)
    
    with open(filepath, "w") as f:
        f.write(content)
        
    print(f"Patched {filepath}")

patch_file("src/data/modules.ts")
