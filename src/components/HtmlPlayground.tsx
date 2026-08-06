import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store';
import { htmlModules } from '../data/htmlModules';
import { CodeEditorPreview } from './CodeEditorPreview';

export function HtmlPlayground() {
  const { currentModuleId } = useAppStore();
  const module = htmlModules.find(m => m.id === currentModuleId);
  const contentData = module && module.content ? JSON.parse(module.content) : { tags: [] };
  const tags = contentData.tags || [];

  const [activeTag, setActiveTag] = useState(tags[0] || '');
  
  // Create a default code block based on active tag
    const getDefaultCode = (tag: string) => {
     if (currentModuleId === 'html-semantic-layout' && tag === '<header>') {
       return `<header style="border: 2px solid #ccc; padding: 1rem; margin-bottom: 1rem;">
  <div>Logo</div>
  <nav>
    <ul style="display: flex; gap: 1rem; list-style: none; padding: 0;">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
<main style="border: 2px solid #000; padding: 1rem; margin-bottom: 1rem;">
  <section style="background: #f0f0f0; padding: 2rem; text-align: center; margin-bottom: 1rem;">
    <h1>Hero / Banner / Introduction</h1>
  </section>
  <div style="display: flex; gap: 1rem;">
    <section style="flex: 2; border: 1px dashed #666; padding: 1rem;">
      <h2>Latest Posts</h2>
      <article style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem;">
        <h3>Post Title 1</h3>
        <p>Post content...</p>
      </article>
      <article style="border: 1px solid #ccc; padding: 1rem;">
        <h3>Post Title 2</h3>
        <p>Post content...</p>
      </article>
    </section>
    <aside style="flex: 1; border: 1px dashed #666; padding: 1rem; background: #fafafa;">
      <section style="margin-bottom: 1rem;">
        <h3>Related Posts</h3>
        <ul><li>Post A</li><li>Post B</li></ul>
      </section>
      <section style="margin-bottom: 1rem; padding: 1rem; background: #eee;">
        Advertisement
      </section>
      <section>
        <h3>Newsletter</h3>
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </section>
    </aside>
  </div>
</main>
<footer style="border: 2px solid #ccc; padding: 1rem; display: flex; justify-content: space-between;">
  <div>&copy; 2026 Copyright</div>
  <div>
    <address style="display: inline;">Contact: webmaster@example.com</address> | <a href="#">Privacy Policy</a>
  </div>
</footer>
<div style="margin-top: 1rem; padding: 1rem; background: #e0f2fe; color: #0369a1; border-radius: 4px;">
  <strong>Note:</strong> Semantic elements like &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, and &lt;nav&gt; communicate the structure of the document to screen readers and search engines.
</div>`;
     }
     
     let t = tag.replace('<', '').replace('>', '');
     if (['img', 'br', 'hr', 'input', 'meta', 'link'].includes(t)) {
        return `<${t} />`;
     }
     return `<${t}>
  Content here
</${t}>`;
  };

  const [code, setCode] = useState(getDefaultCode(activeTag));

  useEffect(() => {
    setActiveTag(tags[0] || '');
  }, [currentModuleId, tags]);

  useEffect(() => {
    setCode(getDefaultCode(activeTag));
  }, [activeTag]);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
               margin: 0; 
               padding: 1rem; 
               min-height: 100vh;
               font-family: system-ui, sans-serif;
               background: white;
               color: black;
             }
          </style>
        </head>
        <body>
          ${code}
        </body>
        </html>
      `);
      doc.close();
    }
  }, [code]);

  if (!module) return null;

  return (
    <div className="flex-1 flex flex-col bg-zinc-950">
      {/* Tag filter bar (sticky) */}
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
          {tags.map((tag: string) => (
            <button
              key={tag}
              onClick={() => {
                 setActiveTag(tag);
                 // Also could scroll to the tag in Curriculum view, but this handles playground focus
                 const element = document.getElementById(`tag-${tag.replace(/<|>/g, '')}`);
                 if (element) {
                   element.scrollIntoView({ behavior: 'smooth' });
                 }
              }}
              className={`px-4 py-1.5 rounded-full font-mono text-sm whitespace-nowrap transition-colors ${
                activeTag === tag
                  ? 'bg-indigo-500 text-white'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <CodeEditorPreview
        code={code}
        onChange={setCode}
        onReset={() => setCode(getDefaultCode(activeTag))}
        iframeRef={iframeRef}
        title="index.html"
        language="html"
      />
    </div>
  );
}
