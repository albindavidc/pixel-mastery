import re

with open('src/components/HtmlPlayground.tsx', 'r') as f:
    content = f.read()

custom_code_logic = """  const getDefaultCode = (tag: string) => {
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
     return `<${t}>\n  Content here\n</${t}>`;
  };"""

content = re.sub(
    r"const getDefaultCode = \(tag: string\) => \{.*?return `<\$\{t\}>\\n  Content here\\n</\$\{t\}>`;\n  };",
    custom_code_logic,
    content,
    flags=re.DOTALL
)

with open('src/components/HtmlPlayground.tsx', 'w') as f:
    f.write(content)
