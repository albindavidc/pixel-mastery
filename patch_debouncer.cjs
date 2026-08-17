const fs = require('fs');

let htmlPlayground = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

if (!htmlPlayground.includes('const [debouncedCode, setDebouncedCode] = useState(code);')) {
  htmlPlayground = htmlPlayground.replace('const iframeRef = useRef<HTMLIFrameElement>(null);', 
`const [debouncedCode, setDebouncedCode] = useState(code);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [code]);
  const iframeRef = useRef<HTMLIFrameElement>(null);`);

  htmlPlayground = htmlPlayground.replace('}, [code]);\n  if (!module) return null;', '}, [debouncedCode]);\n  if (!module) return null;');
  htmlPlayground = htmlPlayground.replace('          ${code}', '          ${debouncedCode}');
  fs.writeFileSync('src/components/HtmlPlayground.tsx', htmlPlayground);
}

let iframePreview = fs.readFileSync('src/components/IframePreview.tsx', 'utf8');
if (!iframePreview.includes('const [debouncedCode, setDebouncedCode]')) {
  iframePreview = iframePreview.replace('const [mountNode, setMountNode]', 
`const [debouncedCode, setDebouncedCode] = useState(code);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [code]);
  const [mountNode, setMountNode]`);

  iframePreview = iframePreview.replace('}, [code]);', '}, [debouncedCode]);');
  iframePreview = iframePreview.replace('          ${code}', '          ${debouncedCode}');
  fs.writeFileSync('src/components/IframePreview.tsx', iframePreview);
}

console.log('patched successfully');
