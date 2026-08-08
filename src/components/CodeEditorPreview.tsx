import React from 'react';
import { RotateCcw, Wand2 } from 'lucide-react';
import beautify from 'js-beautify';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-twilight.css'; // or another theme

interface CodeEditorPreviewProps {
  themeColor?: string;
  code: string;
  onChange: (code: string) => void;
  onReset: () => void;
  onTry?: () => void;
  onExample?: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  title?: string;
  language?: string;
}

export function CodeEditorPreview({ 
  code, 
  onChange, 
  onReset,
  onTry,
  onExample,
  iframeRef, 
  title = 'index.html',
  language = 'html',
  themeColor = 'indigo'
}: CodeEditorPreviewProps) {
  
  
  const getThemeHex = (color: string) => {
    switch(color) {
      case 'indigo': return '#818cf8';
      case 'emerald': return '#34d399';
      case 'rose': return '#fb7185';
      case 'amber': return '#fbbf24';
      case 'cyan': return '#22d3ee';
      case 'teal': return '#2dd4bf';
      case 'pink': return '#f472b6';
      case 'violet': return '#a78bfa';
      default: return '#818cf8';
    }
  };
  const themeHex = getThemeHex(themeColor);

  const handleFormat = () => {
    if (language === 'html') {
      const formatted = beautify.html(code, { indent_size: 2 });
      onChange(formatted);
    } else if (language === 'css') {
      const formatted = beautify.css(code, { indent_size: 2 });
      onChange(formatted);
    } else if (language === 'javascript' || language === 'js') {
      const formatted = beautify.js(code, { indent_size: 2 });
      onChange(formatted);
    }
  };

  const highlightCode = (c: string) => {
    if (language === 'html') return Prism.highlight(c, Prism.languages.markup, 'markup');
    if (language === 'css') return Prism.highlight(c, Prism.languages.css, 'css');
    if (language === 'javascript' || language === 'js') return Prism.highlight(c, Prism.languages.javascript, 'javascript');
    return c;
  };

  return (
    <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6">
      {/* Editor Pane */}
      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#141414] shadow-2xl">
        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <div className={`font-mono text-xs font-semibold ${language === 'html' ? 'text-orange-500' : 'text-blue-400'}`}>
            {title}
          </div>
          <div className="flex gap-2">
            {onExample && (
              <button 
                onClick={onExample}
                className="text-zinc-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold"
                title="Load Example Code"
              >
                eg
              </button>
            )}
            {onTry && (
              <button 
                onClick={onTry}
                className="text-zinc-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold"
                title="Try Yourself (Blank)"
              >
                try
              </button>
            )}
            <button 
              onClick={handleFormat}
              className="text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs"
              title="Prettier Format"
            >
              <Wand2 className="w-4 h-4" />
            </button>
            <button 
              onClick={onReset}
              className="text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors"
              title="Reset Code"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto relative custom-prism-container" style={{ '--theme-hex': themeHex } as React.CSSProperties}>
          <style>{`
            .custom-prism-container .token.tag,
            .custom-prism-container .token.keyword,
            .custom-prism-container .token.selector,
            .custom-prism-container .token.function {
              color: var(--theme-hex) !important;
            }
          `}</style>
          <Editor
            value={code}
            onValueChange={onChange}
            highlight={highlightCode}
            padding={16}
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", monospace',
              fontSize: 14,
              backgroundColor: 'transparent',
              minHeight: '100%',
            }}
            textareaClassName="focus:outline-none"
            className="w-full h-full text-zinc-300 editor-container"
          />
        </div>
      </div>

      {/* Preview Pane */}
      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl">
        <div className="h-10 bg-zinc-200 border-b border-zinc-300 flex items-center px-4 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
          </div>
          <div className="mx-auto text-zinc-500 text-xs font-sans">Preview</div>
        </div>
        <iframe
          ref={iframeRef}
          className="flex-1 w-full bg-white border-0"
          title={`${language} Preview`}
        />
      </div>
    </div>
  );
}
