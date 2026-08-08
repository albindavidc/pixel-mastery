const fs = require('fs');
let content = fs.readFileSync('src/components/HtmlPlayground.tsx', 'utf8');

if (!content.includes("import { Trophy, CheckCircle2 }")) {
    content = content.replace(
        "import { CodeEditorPreview } from './CodeEditorPreview';",
        "import { CodeEditorPreview } from './CodeEditorPreview';\nimport { Trophy, CheckCircle2 } from 'lucide-react';"
    );
}

const challengeData = `
  const getCategoryChallenge = (categoryName: string) => {
    switch (categoryName) {
      case "Document Structure":
        return {
          title: "Build the Skeleton",
          description: "Create a standard HTML5 document structure with a doctype, html, head, title, and body tags. Set the title to 'My Challenge' and add an h1 tag in the body.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<!doctype') && lower.includes('<html') && lower.includes('<head>') && lower.includes('<title>') && lower.includes('<body>') && lower.includes('<h1');
          }
        };
      case "Layout & Containers":
        return {
          title: "Containers Galore",
          description: "Create a div container and place a span element inside it.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<div') && lower.includes('<span');
          }
        };
      case "Headings & Text":
        return {
          title: "Hierarchy and Spacing",
          description: "Create an h1, an h2, and a paragraph with a line break (<br>) inside it.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<h1') && lower.includes('<h2') && lower.includes('<p>') && lower.includes('<br>');
          }
        };
      case "Links & Media":
        return {
          title: "Hyperlinks and Images",
          description: "Add a link (a tag) with an href attribute, and an image (img tag) with a src attribute.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<a') && lower.includes('href=') && lower.includes('<img') && lower.includes('src=');
          }
        };
      case "Lists":
        return {
          title: "Order and Disorder",
          description: "Create one unordered list (ul) with items and one ordered list (ol) with items.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<ul') && lower.includes('<ol') && lower.includes('<li');
          }
        };
      case "Forms":
        return {
          title: "User Input",
          description: "Create a form with an input, a textarea, and a button.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<form') && lower.includes('<input') && lower.includes('<textarea') && lower.includes('<button');
          }
        };
      case "Semantic Layout":
        return {
          title: "Meaningful Structure",
          description: "Use <header>, <main>, <article>, and <footer> tags to create a semantic layout skeleton.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<header') && lower.includes('<main') && lower.includes('<article') && lower.includes('<footer');
          }
        };
      case "Text Semantics":
        return {
          title: "Emphasis and Quotes",
          description: "Use <strong> for bold text, <em> for emphasis, and a <blockquote> for a quote.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<strong') && lower.includes('<em') && lower.includes('<blockquote');
          }
        };
      case "Media":
        return {
          title: "Rich Media",
          description: "Add an audio element with controls and a video element.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<audio') && lower.includes('<video');
          }
        };
      case "Interactive Elements":
        return {
          title: "Expandable Content",
          description: "Create a <details> element containing a <summary>.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<details') && lower.includes('<summary');
          }
        };
      case "Advanced Forms":
        return {
          title: "Complex Inputs",
          description: "Create a fieldset with a legend, and an input with an associated datalist.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<fieldset') && lower.includes('<legend') && lower.includes('<datalist') && lower.includes('list=');
          }
        };
      case "Tables":
        return {
          title: "Data Tabulation",
          description: "Create a table with a caption, a thead, a tbody, th, and td elements.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<table') && lower.includes('<caption') && lower.includes('<thead') && lower.includes('<tbody') && lower.includes('<th') && lower.includes('<td');
          }
        };
      case "Graphics & Rendering":
        return {
          title: "Drawing Contexts",
          description: "Add an inline <svg> element and a <canvas> element.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<svg') && lower.includes('<canvas');
          }
        };
      case "Templates & Progressive Enhancement":
        return {
          title: "Hidden Templates",
          description: "Add a <template> tag and a <noscript> tag.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<template') && lower.includes('<noscript');
          }
        };
      case "Accessibility & Internationalization":
        return {
          title: "Accessible Annotations",
          description: "Use an <abbr> tag with a title attribute, and a <ruby> element with <rt>.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<abbr') && lower.includes('title=') && lower.includes('<ruby') && lower.includes('<rt');
          }
        };
      case "Document Metadata & Contact":
        return {
          title: "Contact Info",
          description: "Use the <address> element to wrap some contact information.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<address');
          }
        };
      case "Developer & Technical Text":
        return {
          title: "Code Formatting",
          description: "Use <kbd>, <samp>, and <var> elements in a sentence.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<kbd') && lower.includes('<samp') && lower.includes('<var');
          }
        };
      case "Document Editing & Revisions":
        return {
          title: "Tracking Changes",
          description: "Use <del> for removed text and <ins> for added text.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<del') && lower.includes('<ins');
          }
        };
      case "Definitions & Terminology":
        return {
          title: "Defining Terms",
          description: "Use the <dfn> tag to define a term.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<dfn');
          }
        };
      case "Typography":
        return {
          title: "Fine-grained Text",
          description: "Use <sub> for a subscript, <sup> for a superscript, and <wbr> to specify a word break opportunity.",
          verify: (c: string) => {
            const lower = c.toLowerCase();
            return lower.includes('<sub') && lower.includes('<sup') && lower.includes('<wbr');
          }
        };
      default:
        return null;
    }
  };

  const challenge = getCategoryChallenge(activeCategory);
  const [challengeStatus, setChallengeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setChallengeStatus('idle');
  }, [activeCategory]);

  const handleVerifyChallenge = () => {
    if (challenge && challenge.verify(code)) {
      setChallengeStatus('success');
    } else {
      setChallengeStatus('error');
    }
  };
`;

content = content.replace(
  "  const [code, setCode] = useState(getDefaultCode(activeCategory));",
  challengeData + "\n  const [code, setCode] = useState(getDefaultCode(activeCategory));"
);

const codeEditorPreviewRegex = /<CodeEditorPreview[\s\S]*?\/>/;

const challengeUI = `
      {challenge && (
        <div className="bg-[#141414] border-t border-zinc-800 p-6 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                Challenge: {challenge.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                {challenge.description}
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[200px]">
              <button
                onClick={handleVerifyChallenge}
                className="px-6 py-2.5 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Code
              </button>
              <div className="h-6 mt-3 flex items-center justify-center">
                {challengeStatus === 'success' && (
                  <div className="text-emerald-500 text-sm font-semibold animate-pulse flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Challenge Passed!
                  </div>
                )}
                {challengeStatus === 'error' && (
                  <div className="text-rose-500 text-sm font-semibold">
                    Not quite right. Keep trying!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
`;

content = content.replace(
    codeEditorPreviewRegex,
    match => match + challengeUI
);

fs.writeFileSync('src/components/HtmlPlayground.tsx', content, 'utf8');
