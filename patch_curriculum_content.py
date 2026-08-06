import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    target = """        <div className="prose prose-invert max-w-none mb-10 text-zinc-400 leading-relaxed">
          <p>{module.content}</p>

          {(module.id === 'tailwind-flexbox-grid' || module.id === 'tailwind-layout-display') && ("""
    replacement = """        <div className="prose prose-invert max-w-none mb-10 text-zinc-400 leading-relaxed">
          {module.id !== 'tailwind-layout-display' && <p>{module.content}</p>}

          {(module.id === 'tailwind-flexbox-grid' || module.id === 'tailwind-layout-display') && ("""
    
    if target in content:
        content = content.replace(target, replacement)
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print("Target not found")

patch_file("src/components/Curriculum.tsx")
