import React, { useState, useEffect, useRef } from "react";
import { CodeEditorPreview } from "./CodeEditorPreview";
import { Trophy, CheckCircle2, Play } from "lucide-react";

const defaultCode = `<!DOCTYPE html>
<html>
<body>
  <h2>DOM & BOM Playground</h2>
  <div id="output" class="p-4 bg-zinc-100 rounded-lg text-zinc-800">
    Hello from the DOM!
  </div>
  <button id="actionBtn" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-medium shadow-sm">
    Click Me
  </button>

  <script>
    // Starter JavaScript
    const btn = document.getElementById('actionBtn');
    const output = document.getElementById('output');
    
    btn.addEventListener('click', () => {
      output.textContent = 'Button was clicked! The DOM updated.';
      output.style.backgroundColor = '#dcfce7'; // green
      output.style.border = '1px solid #16a34a';
    });
  </script>
</body>
</html>`;

export function DomBomJsCurriculum() {
  const [code, setCode] = useState(defaultCode);
  const [activeMode, setActiveMode] = useState<"eg" | "try" | null>(null);
  const [debouncedCode, setDebouncedCode] = useState(code);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [code]);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
          <style>
            body {
                margin: 0;
                padding: 1rem;
                min-height: 100vh;
               font-family: system-ui, sans-serif;
               background: white;
               color: black;
             }
             ::-webkit-scrollbar { width: 4px; height: 4px; }
             ::-webkit-scrollbar-track { background: transparent; }
             ::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
             ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
          </style>
        </head>
        <body>
          ${debouncedCode}
        </body>
        </html>
      `);
      doc.close();
    }
  }, [debouncedCode]);

  const challenges = [
    {
      title: "Interactive Counter",
      description:
        "Build a button that increments a counter displayed on the page each time it's clicked, using addEventListener and textContent.",
      requiredMethods: ["addEventListener", "textContent"],
      verify: (c: string) => {
        const lower = c.toLowerCase();
        return (
          lower.includes("addeventlistener") && lower.includes("textcontent")
        );
      },
    },
    {
      title: "URL Reader",
      description:
        "Display the current window.location.href in a paragraph when a button is clicked.",
      requiredMethods: ["window.location", "href"],
      verify: (c: string) => {
        const lower = c.toLowerCase();
        return (
          (lower.includes("window.location") ||
            lower.includes("location.href")) &&
          lower.includes("href")
        );
      },
    },
  ];

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const challenge = challenges[currentChallengeIndex];
  const [challengeStatus, setChallengeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleVerifyChallenge = () => {
    if (challenge.verify(code)) {
      setChallengeStatus("success");
    } else {
      setChallengeStatus("error");
    }
  };

  const handleTryCode = (snippet: string) => {
    setCode(
      `<!DOCTYPE html>\n<html>\n<body>\n  <h2>API Test</h2>\n  <style>.active { background-color: #22c55e !important; color: white !important; }</style><div id="output" class="p-4 bg-zinc-100 rounded-lg text-zinc-800 box">I am the box!</div>\n  <script>\n    // Generated Try It Snippet\n    const output = document.getElementById('output');\n    ${snippet}\n  </script>\n</body>\n</html>`,
    );
    setActiveMode("try");
  };

  const useCases = [
    {
      title: "Dynamic Forms",
      desc: "Validating and updating form fields live as the user types, using querySelector and addEventListener.",
    },
    {
      title: "Single-Page Navigation",
      desc: "Using window.history and window.location to change views without a full page reload.",
    },
    {
      title: "Persisted State",
      desc: "Using localStorage or sessionStorage to remember user preferences or session data across visits.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-zinc-950 min-h-0">
      <div className="flex-1 min-h-[800px] flex flex-col shrink-0">
        <CodeEditorPreview
          code={code}
          onChange={setCode}
          onReset={() => {
            setCode(defaultCode);
            setActiveMode(null);
          }}
          onTry={() => {
            setCode("");
            setActiveMode("try");
          }}
          activeMode={activeMode}
          iframeRef={iframeRef}
          title="DOM & BOM.js"
          language="html"
          themeColor="blue"
        />
      </div>
      {challenge && (
        <div className="bg-[#141414] border-t border-zinc-800 p-6 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)] flex-none z-20 relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  Challenge: {challenge.title}
                </h3>
                <div className="flex gap-2">
                  {challenges.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentChallengeIndex(idx);
                        setChallengeStatus("idle");
                      }}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                        idx === currentChallengeIndex
                          ? "bg-indigo-500 text-white"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                      }`}
                    >
                      Task {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-4">
                {challenge.description}
              </p>

              <div className="space-y-3 mt-4 pt-4 border-t border-zinc-800/50">
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Required Methods
                </div>
                <div className="flex flex-wrap gap-2">
                  {challenge.requiredMethods.map((target) => {
                    const isMet = code
                      .toLowerCase()
                      .includes(target.toLowerCase());
                    return (
                      <span
                        key={target}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-mono transition-colors ${
                          isMet
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                        }`}
                      >
                        {isMet ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        )}
                        {target}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center min-w-[200px] w-full md:w-auto mt-4 md:mt-0">
              <button
                onClick={handleVerifyChallenge}
                className="px-6 py-2.5 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Code
              </button>
              <div className="h-6 mt-3 flex items-center justify-center">
                {challengeStatus === "success" && (
                  <div className="text-emerald-500 text-sm font-semibold animate-pulse flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Challenge Passed!
                  </div>
                )}
                {challengeStatus === "error" && (
                  <div className="text-rose-500 text-sm font-semibold">
                    Not quite right. Keep trying!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#141414] border-t border-zinc-800 shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,0.5)] flex-none">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 w-full py-12 px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
              <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                DOM vs BOM vs JS
              </h2>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                The DOM (Document Object Model) and BOM (Browser Object Model)
                are two distinct APIs that JavaScript uses to interact with the
                browser environment. The DOM represents the actual webpage
                content, while the BOM represents the browser container hosting
                that webpage.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    🗺️ The Core Architecture
                  </h3>
                </div>
                <div className="p-5 bg-zinc-900/50">
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    At a high level, the BOM actually wraps around the DOM. The{" "}
                    <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono text-xs">
                      window
                    </code>{" "}
                    object represents the browser window, and the{" "}
                    <code className="text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded font-mono text-xs">
                      document
                    </code>{" "}
                    object represents the page inside it.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800 overflow-x-auto text-zinc-300">
                    <pre>
                      {`[ BOM: window ]
   ├── screen (Display details)
   ├── location (URL details)
   ├── history (Visited pages)
   ├── navigator (Browser info)
   └── [ DOM: document ]  <-- The webpage itself
          └── html
                ├── head
               └── body`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    <span className="text-emerald-400">⚡</span> Key Summary
                  </h3>
                </div>
                <div className="p-5 bg-zinc-900/50">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                      <span className="text-zinc-300 text-sm leading-relaxed">
                        Use the <strong>DOM</strong> when you want to change
                        text, styles, tags, or forms on the page.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                      <span className="text-zinc-300 text-sm leading-relaxed">
                        Use the <strong>BOM</strong> when you want to redirect
                        the user, check screen size, or store login tokens.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    <span className="text-sky-400">📄</span> 1. DOM API Elements
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    The DOM turns your HTML document into a tree of objects.
                    Everything inside the{" "}
                    <code className="text-zinc-300 font-mono text-xs">
                      {"<html>"}
                    </code>{" "}
                    tags belongs to the DOM.
                  </p>
                </div>
                <div className="p-5 bg-zinc-900/50 flex flex-col gap-3">
                  {[
                    {
                      name: "document",
                      desc: "The entry point to the webpage content.",
                      snippet:
                        "output.textContent = 'Document Title: ' + document.title;",
                    },
                    {
                      name: "document.getElementById()",
                      desc: "Selects a specific element by ID.",
                      snippet:
                        "const el = document.createElement('div'); el.id = 'demo'; document.body.appendChild(el);\noutput.textContent = 'Found element with ID demo: ' + !!document.getElementById('demo');",
                    },
                    {
                      name: "document.querySelector()",
                      desc: "Selects elements using CSS selectors.",
                      snippet:
                        "document.body.innerHTML += '<p class=\'test\'>Hello!</p>';\nconst el = document.querySelector('.test');\noutput.textContent = el.textContent;",
                    },
                    {
                      name: "element.addEventListener()",
                      desc: "Attaches click, hover, or keyboard events to elements.",
                      snippet:
                        "const btn = document.createElement('button');\nbtn.textContent = 'Click me';\nbtn.className = 'px-4 py-2 bg-indigo-500 text-white rounded';\ndocument.body.appendChild(btn);\nbtn.addEventListener('click', () => alert('Clicked!'));",
                    },
                    {
                      name: "element.getAttribute()",
                      desc: "Reads HTML attributes (like href or src).",
                      snippet:
                        "const link = document.createElement('a');\nlink.href = 'https://example.com';\noutput.textContent = 'Link href: ' + link.getAttribute('href');",
                    },
                    {
                      name: "document.createElement()",
                      desc: "Generates a brand new HTML tag dynamically.",
                      snippet:
                        "const el = document.createElement('h3');\nel.textContent = 'I am new here!';\noutput.appendChild(el);",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <code className="text-sky-400 text-sm font-mono w-fit">
                          {item.name}
                        </code>
                        <button
                          onClick={() => handleTryCode(item.snippet)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded transition-colors"
                        >
                          <Play className="w-3 h-3" /> Try it
                        </button>
                      </div>
                      <span className="text-zinc-400 text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    <span className="text-emerald-400">🌐</span> 2. BOM API
                    Elements
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    The BOM deals with everything outside the webpage context.
                    It does not have an official standard, but all modern
                    browsers implement it similarly.
                  </p>
                </div>
                <div className="p-5 bg-zinc-900/50 flex flex-col gap-3">
                  {[
                    {
                      name: "window",
                      desc: "The global object. All other BOM objects are properties of window.",
                      snippet:
                        "output.textContent = 'Window innerWidth: ' + window.innerWidth;",
                    },
                    {
                      name: "window.location",
                      desc: "Controls or reads the current URL.",
                      snippet:
                        "output.textContent = 'Current URL: ' + window.location.href;",
                    },
                    {
                      name: "window.history",
                      desc: "Navigates the user browser history.",
                      snippet:
                        "output.textContent = 'History length: ' + window.history.length;",
                    },
                    {
                      name: "window.navigator",
                      desc: "Contains information about the user browser, OS, and permissions.",
                      snippet:
                        "output.textContent = 'User Agent: ' + window.navigator.userAgent;",
                    },
                    {
                      name: "window.screen",
                      desc: "Gives properties about the user monitor screen resolution and orientation.",
                      snippet:
                        "output.textContent = 'Screen Width: ' + window.screen.width;",
                    },
                    {
                      name: "window.localStorage",
                      desc: "Saves data locally in the user browser.",
                      snippet:
                        "window.localStorage.setItem('demo', 'Hello from Storage');\noutput.textContent = 'Saved value: ' + window.localStorage.getItem('demo');",
                    },
                    {
                      name: "alert() / confirm() / prompt()",
                      desc: "Triggers browser-native pop-up dialog boxes.",
                      snippet:
                        "if(confirm('Ready?')) {\n  output.textContent = 'User is ready!';\n}",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-1 border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <code className="text-emerald-400 text-sm font-mono w-fit">
                          {item.name}
                        </code>
                        <button
                          onClick={() => handleTryCode(item.snippet)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded transition-colors"
                        >
                          <Play className="w-3 h-3" /> Try it
                        </button>
                      </div>
                      <span className="text-zinc-400 text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <section className="mb-6 mt-4">
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Examples to try
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: "Toggle a class",
                  classes:
                    "document.querySelector('.box').classList.toggle('active')",
                },
                {
                  label: "Read the current URL",
                  classes:
                    "output.textContent = 'Current URL: ' + window.location.href;",
                },
                {
                  label: "Create and append an element",
                  classes:
                    "const el = document.createElement('p');\nel.textContent = 'Hello!';\noutput.appendChild(el);",
                },
              ].map((example, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-indigo-500 transition-colors group"
                >
                  <div>
                    <div className="font-medium text-white mb-1">
                      {example.label}
                    </div>
                    <code className="text-sm text-indigo-400 bg-zinc-950 border border-indigo-500/30 px-1.5 py-0.5 rounded break-all whitespace-pre-wrap">
                      {example.classes}
                    </code>
                  </div>
                  <button
                    onClick={() => handleTryCode(example.classes)}
                    className="shrink-0 flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 shadow-sm rounded-lg px-3 py-1.5 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
                  >
                    <Play className="w-4 h-4" />
                    Try it
                  </button>
                </div>
              ))}
            </div>
          </section>
          <div className="bg-[#0f0f0f] border border-zinc-800/50 rounded-2xl p-6 mt-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Real-World Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCases.map((uc, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-5 hover:border-zinc-700/80 hover:bg-zinc-800/80 transition-all shadow-sm"
                  >
                    <h4 className="text-zinc-100 font-bold text-sm mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 font-mono border border-zinc-700">
                        {idx + 1}
                      </span>
                      {uc.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Module Roadmap Section */}
          <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 mt-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-sky-500"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <svg
                  className="w-4 h-4 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                JavaScript Core Curriculum
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 items-center">
              <div className="bg-zinc-800/80 border border-zinc-700/50 px-4 py-2 rounded-xl flex items-center gap-2 opacity-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-zinc-300">
                  JS Fundamentals
                </span>
              </div>

              <svg
                className="w-4 h-4 text-zinc-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <div className="bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                <span className="text-sm font-bold text-indigo-300">
                  DOM & BOM
                </span>
              </div>

              <svg
                className="w-4 h-4 text-zinc-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors cursor-not-allowed">
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Events & Forms</span>
              </div>

              <svg
                className="w-4 h-4 text-zinc-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors cursor-not-allowed">
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Async & Fetch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
