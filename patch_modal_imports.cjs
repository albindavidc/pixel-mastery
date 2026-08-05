const fs = require('fs');

function patchFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/BasisHelpModal/g, 'CustomValuesHelpModal');
  // and we need to pass the property
  content = content.replace(/<CustomValuesHelpModal isOpen=\{showBasisModal\} onClose=\{\(\) => setShowBasisModal\(false\)\} \/>/, 
    '<CustomValuesHelpModal isOpen={showBasisModal} onClose={() => setShowBasisModal(false)} property={selectedProperty} />');
  fs.writeFileSync(file, content);
}

patchFile('src/components/Playground.tsx');
patchFile('src/components/TailwindPlayground.tsx');
