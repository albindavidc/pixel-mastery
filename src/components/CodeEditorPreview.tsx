import React from 'react';
import { RotateCcw, Wand2, GripVertical, GripHorizontal } from 'lucide-react';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import beautify from 'js-beautify';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { abbreviationTracker, emmetCompletionSource } from '@emmetio/codemirror6-plugin';



interface CodeEditorPreviewProps {
  themeColor?: string;
  code: string;
  onChange: (code: string) => void;
  onReset: () => void;
  onTry?: () => void;
  onExample?: () => void;
  activeMode?: 'eg' | 'try' | null;
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
  activeMode,
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

  const customTheme = React.useMemo(() => {
    const baseTheme = EditorView.theme({
      "&": {
        color: "#e4e4e7",
        backgroundColor: "#09090b"
      },
      ".cm-content": {
        caretColor: themeHex
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: themeHex
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: `${themeHex}33`
      },
      ".cm-gutters": {
        backgroundColor: "#09090b",
        color: "#52525b",
        borderRight: "1px solid #27272a",
      },
      ".cm-lineNumbers .cm-gutterElement": {
        minWidth: "40px !important",
        padding: "0 8px !important",
        display: "flex",
        justifyContent: "flex-end"
      },
      ".cm-activeLine": {
        backgroundColor: "rgba(255, 255, 255, 0.04) !important"
      },
      ".cm-activeLineGutter": {
        backgroundColor: "rgba(255, 255, 255, 0.04) !important",
        color: themeHex
      }
    }, { dark: true });

    const highlightStyle = HighlightStyle.define([
      { tag: [t.tagName, t.keyword, t.operator, t.className, t.typeName, t.function(t.variableName)], color: themeHex },
      { tag: [t.attributeName, t.propertyName], color: "#a1a1aa" },
      { tag: [t.string, t.special(t.string)], color: "rgba(56, 189, 248, 0.75)" }, // Tailwind brand sky blue for strings/utilities
      { tag: [t.number, t.bool, t.null], color: themeHex },
      { tag: [t.comment, t.meta], color: "#52525b", fontStyle: "italic" },
      { tag: t.angleBracket, color: "#52525b" }
    ]);

    return [baseTheme, syntaxHighlighting(highlightStyle)];
  }, [themeHex]);


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

  
  const editorSetup = React.useMemo(() => ({
    lineNumbers: true,
    highlightActiveLineGutter: true,
    highlightActiveLine: true,
    foldGutter: true,
  }), []);

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const editorExtensions = React.useMemo(() => [
    language === 'html' ? html() : language === 'css' ? css() : javascript({ jsx: true }),
    abbreviationTracker({ syntax: (language === 'javascript' || language === 'js' ? 'jsx' : language || 'html') as any }),
    EditorState.languageData.of(() => [{ autocomplete: emmetCompletionSource }])
  ], [language]);

  return (
    <div className="flex-1 p-6 min-h-0 flex">
      <PanelGroup orientation={isMobile ? "vertical" : "horizontal"} className="flex-1 rounded-xl overflow-hidden shadow-2xl min-h-0 border border-zinc-800">
      {/* Editor Pane */}
      <Panel defaultSize={75} minSize={20} className="flex flex-col bg-zinc-950 min-h-0">
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
                className={`px-2 py-1 rounded border hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold ${
                  activeMode === 'eg' 
                    ? 'bg-zinc-800 text-white border-zinc-500' 
                    : 'text-zinc-400 hover:text-white border-zinc-700'
                }`}
                title="Load Example Code"
              >
                eg
              </button>
            )}
            {onTry && (
              <button 
                onClick={onTry}
                className={`px-2 py-1 rounded border hover:border-zinc-500 hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-semibold ${
                  activeMode === 'try' 
                    ? 'bg-zinc-800 text-white border-zinc-500' 
                    : 'text-zinc-400 hover:text-white border-zinc-700'
                }`}
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
        <div className="flex-1 relative overflow-hidden flex flex-col min-h-0" style={{ '--theme-hex': themeHex } as React.CSSProperties}>
          <style>{`
            .cm-theme { height: 100%; display: flex; flex-direction: column; flex: 1; min-height: 0; }
            .cm-scroller { overflow: auto !important; height: 100% !important; flex: 1; }
          `}</style>
          <CodeMirror
            value={code}
            height="100%"
            theme={customTheme}
            extensions={editorExtensions}
            onChange={(val) => onChange(val)}
            className="w-full h-full text-sm flex-1 overflow-hidden"
            basicSetup={editorSetup}
          />
                </div>
      </Panel>
      <PanelResizeHandle className={`flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 transition-colors group border-zinc-800 z-10 ${isMobile ? "h-4 cursor-row-resize border-t border-b" : "w-4 cursor-col-resize border-l border-r"}`}>
        <div className={`flex items-center justify-center rounded-sm bg-zinc-700 group-hover:bg-indigo-500 transition-colors ${isMobile ? "h-1 w-8" : "w-1 h-8"}`}>
           {isMobile ? <GripHorizontal className="w-3 h-3 text-zinc-500 group-hover:text-white" /> : <GripVertical className="w-3 h-3 text-zinc-500 group-hover:text-white" />}
        </div>
      </PanelResizeHandle>
      {/* Preview Pane */}
      <Panel defaultSize={25} minSize={20} className="flex flex-col bg-white min-h-0 rounded-xl shadow-2xl">
        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
          </div>
          <div className="mx-auto text-zinc-400 text-xs font-sans font-semibold tracking-wider">Preview</div>
        </div>
        <iframe
          ref={iframeRef}
          className="flex-1 w-full bg-white border-0"
          title={`${language} Preview`}
        />
      </Panel>
    </PanelGroup>
    </div>
  );
}
