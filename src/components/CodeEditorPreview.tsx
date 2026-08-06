import React from 'react';
import { RotateCcw, Wand2 } from 'lucide-react';
import beautify from 'js-beautify';

interface CodeEditorPreviewProps {
  code: string;
  onChange: (code: string) => void;
  onReset: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  title?: string;
  language?: string;
}

export function CodeEditorPreview({ 
  code, 
  onChange, 
  onReset, 
  iframeRef, 
  title = 'index.html',
  language = 'html'
}: CodeEditorPreviewProps) {
  
  const handleFormat = () => {
    if (language === 'html') {
      const formatted = beautify.html(code, { indent_size: 2 });
      onChange(formatted);
    }
  };

  return (
    <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6">
      {/* Editor Pane */}
      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#1e1e1e] shadow-2xl">
        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <div className={`font-mono text-xs font-semibold ${language === 'html' ? 'text-orange-500' : 'text-zinc-500'}`}>
            {title}
          </div>
          <div className="flex gap-2">
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
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 w-full p-4 bg-transparent text-zinc-300 font-mono text-sm resize-none focus:outline-none"
          spellCheck="false"
        />
      </div>

      {/* Preview Pane */}
      <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl">
        <div className="h-10 bg-zinc-200 border-b border-zinc-300 flex items-center px-4">
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
