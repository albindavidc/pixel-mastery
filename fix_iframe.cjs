const fs = require('fs');

let iframePreview = fs.readFileSync('src/components/IframePreview.tsx', 'utf8');

iframePreview = iframePreview.replace(`const [debouncedCode, setDebouncedCode] = useState(code);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedCode]);
  const [mountNode, setMountNode]`, 'const [mountNode, setMountNode]');

fs.writeFileSync('src/components/IframePreview.tsx', iframePreview);
console.log('Fixed IframePreview');
