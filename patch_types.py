import sys

def patch_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # 1. CustomValuesHelpModal props
    target1 = """<CustomValuesHelpModal onClose={() => setShowBasisModal(false)} />"""
    replacement1 = """<CustomValuesHelpModal isOpen={showBasisModal} onClose={() => setShowBasisModal(false)} property={selectedProperty} />"""
    
    if target1 in content:
        content = content.replace(target1, replacement1)

    # 2. activeClassesSet.filter typing
    target2 = """Array.from(activeClassesSet).filter(c => {"""
    replacement2 = """Array.from(activeClassesSet as Set<string>).filter((c: string) => {"""
    if target2 in content:
        content = content.replace(target2, replacement2)
        
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Patched {filepath}")

patch_file("src/components/Playground.tsx")
patch_file("src/components/TailwindPlayground.tsx")

