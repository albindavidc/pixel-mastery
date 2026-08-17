const fs = require('fs');
let str = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

str = str.replace(`      doc.close();
    }
  }, [code]);`, `      doc.close();
    }
  }, [debouncedCode]);`);

fs.writeFileSync('src/components/HtmlPlayground.tsx', str);
console.log('Fixed HtmlPlayground deps');
