import { useEffect, useRef, useState } from 'react';
import { useAppStore } from '../store';
import { createPortal } from 'react-dom';

interface IframePreviewProps {
  classes: string;
  dark: boolean;
  width: number | null;
  hover: boolean;
  focus: boolean;
  active: boolean;
  previewMode: string;
}

export function IframePreview({ classes, dark, width, hover, focus, active, previewMode }: IframePreviewProps) {
  const { currentModuleId } = useAppStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        if (width && width > containerWidth) {
          setScale(containerWidth / width);
        } else {
          setScale(1);
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [width]);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc && !mountNode) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html class="${dark ? 'dark' : ''}">
        <head>
          <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              min-height: 100vh; overflow: hidden; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              background: transparent; 
            }
            #root {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 2rem;
            }
            ::-webkit-scrollbar { width: 8px; height: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #52525b; }
          </style>
        </head>
        <body>
          <div id="root"></div>
        </body>
        </html>
      `);
      doc.close();
      
      const checkRoot = setInterval(() => {
        const root = iframeRef.current?.contentDocument?.getElementById('root');
        if (root) {
          setMountNode(root);
          clearInterval(checkRoot);
        }
      }, 50);
      return () => clearInterval(checkRoot);
    }
  }, [mountNode, dark]);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      if (dark) doc.documentElement.classList.add('dark');
      else doc.documentElement.classList.remove('dark');
    }
  }, [dark]);

  let simClasses = classes;
  if (hover) simClasses = simClasses.replace(/hover:/g, '');
  if (focus) simClasses = simClasses.replace(/focus:/g, '');
  if (active) simClasses = simClasses.replace(/active:/g, '');

  const itemPrefixes = [
    'basis-', 'grow', 'shrink', 'order-', 
    'col-', 'row-', 'justify-self-', 'self-', 'place-self-',
    'z-', 'absolute', 'relative', 'fixed', 'sticky', 'static',
    'inset-', 'top-', 'bottom-', 'left-', 'right-', 'visible', 'invisible', 'collapse'
  ];

  const classList = simClasses.split(' ').map(c => c.trim()).filter(Boolean);
  const containerClassList = [];
  const itemClassList = [];

  classList.forEach(c => {
    // Only EXACT matches for 'grow' and 'shrink', otherwise prefix matches
    const isItemClass = itemPrefixes.some(prefix => 
      (prefix === 'grow' && c === 'grow') ||
      (prefix === 'shrink' && c === 'shrink') ||
      (prefix.endsWith('-') && c.startsWith(prefix)) ||
      (!prefix.endsWith('-') && c === prefix)
    );
    
    if (isItemClass) {
      itemClassList.push(c);
    } else {
      containerClassList.push(c);
    }
  });

  const containerClassesStr = containerClassList.join(' ');
  const itemClassesStr = itemClassList.join(' ');

  const isLayoutMode = ['layouts', 'tailwind', 'flex', 'grid', 'display', 'box-sizing', 'position', 'visibility', 'background', 'text'].includes(previewMode);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden relative">
      <div 
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: width ? `${100 / scale}%` : '100%',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease'
        }}
        className="flex items-center justify-center"
      >
        <iframe
          ref={iframeRef}
          className="w-[96%] max-w-6xl h-full lg:max-h-[70vh] bg-transparent border-0 rounded-xl"
          style={{ minHeight: '400px' }}
          title="preview"
        >
          {mountNode && createPortal(
            <div className="relative group transition-all duration-300 w-full h-full p-4 md:p-8 flex items-center justify-center">
              {previewMode === 'visibility' ? (
                <div className="w-full max-w-4xl h-[85vh] lg:max-w-3xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-hidden shadow-2xl flex items-center justify-center p-8 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                   <div className={`absolute inset-0 transition-all duration-300 ${containerClassesStr}`}></div>
                   <div className="relative w-64 h-64 flex items-center justify-center group">
                      <div className="absolute top-0 left-0 w-32 h-32 rounded-xl bg-indigo-500/80 border-2 border-indigo-500 flex items-center justify-center text-indigo-100 font-bold text-2xl shadow-xl z-10 transition-all group-hover:-translate-y-2 group-hover:-translate-x-2 backdrop-blur-sm">1</div>
                      <div className={`absolute top-12 left-12 w-32 h-32 rounded-xl bg-rose-500/80 border-2 border-rose-500 flex items-center justify-center text-rose-100 font-bold text-2xl shadow-xl transition-all group-hover:-translate-y-1 group-hover:-translate-x-1 backdrop-blur-sm ${itemClassesStr}`}>2</div>
                      <div className="absolute top-24 left-24 w-32 h-32 rounded-xl bg-emerald-500/80 border-2 border-emerald-500 flex items-center justify-center text-emerald-100 font-bold text-2xl shadow-xl z-30 transition-all group-hover:translate-y-1 group-hover:translate-x-1 backdrop-blur-sm">3</div>
                   </div>
                </div>
              ) : ['box-sizing', 'position'].includes(previewMode) ? (
                <div className="w-full max-w-4xl h-[85vh] lg:max-w-3xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-hidden shadow-2xl flex items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                   <div className={`transition-all duration-300 relative group text-center ${containerClassesStr}`}>
                     <div className="absolute -top-3 -right-3 bg-slate-800 text-slate-300 text-[10px] font-mono px-2 py-1 rounded shadow-xl whitespace-nowrap z-20">
                        Container
                     </div>
                     <div className={`w-full h-full bg-slate-900/80 border-2 border-dashed border-slate-500/50 flex flex-col items-center justify-center text-slate-400 font-mono text-xs shadow-inner rounded-xl backdrop-blur-sm ${itemClassesStr}`}>
                       <span>Content</span>
                       <span>Area</span>
                     </div>
                   </div>
                </div>
              ) : previewMode === 'display' ? (
                <div className="w-full max-w-5xl h-[85vh] lg:max-w-5xl relative border-2 border-slate-700/50 rounded-2xl bg-[#0f172a] overflow-auto shadow-2xl p-6 sm:p-10 flex flex-col items-center justify-center">
                  <div className="bg-slate-800/80 rounded-xl border border-slate-700 p-6 text-slate-300 font-medium leading-relaxed w-full text-sm">
                    <div className="text-slate-400 leading-loose text-justify">
                      CSS display property determines how an element is rendered in the document. It controls whether an element is treated as a block or inline element, and the layout used for its children. 
                      Here is some regular text flowing naturally in the document before the target element. We are adding a bit more text here so that it wraps around correctly and forms a continuous paragraph of words. 
                      This helps demonstrate how inline elements flow with text.
                      <div className={`p-0.5 rounded-md bg-indigo-500/20 border-2 border-indigo-500 text-indigo-100 font-bold text-base shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 align-middle ${containerClassesStr.replace(/p-\d+|w-full/g, '').trim()}`}>
                        <span className="bg-indigo-500/80 text-white px-2 py-0.5 mx-1 rounded border border-indigo-400/50 inline-flex items-center justify-center">1</span>
                        <span className="bg-rose-500/80 text-white px-2 py-0.5 mx-1 rounded border border-rose-400/50 inline-flex items-center justify-center">2</span>
                        <span className="bg-emerald-500/80 text-white px-2 py-0.5 mx-1 rounded border border-emerald-400/50 inline-flex items-center justify-center">3</span>
                      </div>
                      This text continues after the target element. Watch the layout change when you toggle the display property. 
                      Notice how changing between inline, block, and inline-block affects both the element itself and the surrounding content flow. 
                      Here is an additional line added to the bottom of the content to see the effect more clearly. 
                      And another line to make sure we have plenty of text surrounding the element. 
                      This is the final sentence of the paragraph to ensure it looks like a continuous block of text without artificial line breaks.
                    </div>
                  </div>
                </div>
              ) : previewMode === 'svg' ? (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/60 p-8">
                   <div className="flex flex-col gap-12 w-full max-w-2xl h-full items-center justify-center">
                     {/* 1st SVG: Simple Geometric Shapes */}
                     <svg viewBox="0 0 100 100" className={`w-48 h-48 transition-all duration-300 ${simClasses}`}>
                       <circle cx="50" cy="50" r="45" className="opacity-80" />
                       <rect x="25" y="25" width="50" height="50" className="opacity-90" />
                       <polygon points="50,15 85,85 15,85" className="opacity-70 mix-blend-overlay" />
                     </svg>
                     
                     {/* 2nd SVG: Icon / Vector */}
                     <svg viewBox="0 0 24 24" className={`w-24 h-24 transition-all duration-300 ${simClasses}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-18v18m-9-9h18" />
                     </svg>
                     
                     <div className="text-slate-400 text-sm font-mono text-center max-w-sm">
                        Apply fill, stroke, and stroke-width classes to style these SVG elements.
                     </div>
                   </div>
                </div>
              ) : previewMode === 'text' ? (
                 <div className="w-full h-full flex items-center justify-center bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/60 p-12">
                    <p className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-center leading-tight transition-all duration-300 ${simClasses}`}>
                       The quick brown fox jumps over the lazy dog
                    </p>
                 </div>
              ) : previewMode === 'background' ? (
                  <div className="flex flex-col items-center justify-center w-full max-w-4xl h-[85vh] p-4 relative bg-[#0B0F19] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/60">
                    
                    {/* Decorative Background for the preview container itself to contrast the tested element */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0B0F19] to-[#0B0F19]"></div>
                    
                    {/* Container for the user's background classes */}
                    <div className={`relative w-full max-w-2xl h-[65vh] rounded-3xl border-2 border-white/10 p-12 shadow-2xl overflow-y-auto transition-all duration-300 resize ${simClasses}`}>
                       
                       {/* Content to force scrolling and test background attachment & clip */}
                       <div className="h-[200%] flex flex-col items-center justify-start text-center gap-8 pt-10">
                          
                          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform cursor-pointer">
                             <svg className="w-10 h-10 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                             </svg>
                          </div>
                          
                          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tighter leading-tight ${simClasses.includes('bg-clip-text') ? 'text-transparent' : 'text-white drop-shadow-2xl'}`}>
                             Background<br/>Playground
                          </h1>
                          
                          <p className={`max-w-md text-lg font-medium leading-relaxed ${simClasses.includes('bg-clip-text') ? 'text-transparent' : 'text-slate-200 drop-shadow-md'}`}>
                             Scroll this container to test background <strong className="text-white">attachment</strong>. Apply thick borders to test <strong className="text-white">clip</strong> and <strong className="text-white">origin</strong> properties.
                          </p>
                          
                          <div className="flex gap-4 mt-8 w-full max-w-xs flex-col sm:flex-row">
                             <button className="flex-1 px-6 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/30 transition-all shadow-xl hover:-translate-y-1">
                                Interactive
                             </button>
                             <button className="flex-1 px-6 py-4 bg-black/20 hover:bg-black/30 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/10 transition-all shadow-xl hover:-translate-y-1">
                                Element
                             </button>
                          </div>

                          <div className="mt-auto pb-10 opacity-50 flex flex-col items-center gap-2">
                             <span className="text-xs uppercase tracking-widest text-white font-bold">Scroll Down</span>
                             <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
                          </div>
                       </div>
                    </div>
                  </div>
                ) : (
                <div className={simClasses}>
                {previewMode === 'typography' && (
                  <div className="flex flex-col gap-4 text-slate-200 w-full max-w-lg text-left bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                    <h1 className="text-4xl font-bold text-white tracking-tight">Typography Hierarchy</h1>
                    <h2 className="text-2xl font-semibold text-slate-300">Secondary Heading</h2>
                    <p className="text-base text-slate-400 leading-relaxed">
                      This is a paragraph of text demonstrating the body typography. 
                      Tailwind CSS makes it easy to style text with utility classes and establish a clear visual hierarchy.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                       <span className="text-sm font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer">Read more &rarr;</span>
                       <span className="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded text-slate-300 border border-slate-700">article-tag</span>
                    </div>
                  </div>
                )}

                {previewMode === 'colors' && (
                  <div className="flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary shadow-lg shadow-primary/30"></div>
                       <span className="text-xs font-mono text-slate-400">primary (indigo-500)</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-success shadow-lg shadow-success/30"></div>
                       <span className="text-xs font-mono text-slate-400">success (emerald-500)</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-danger shadow-lg shadow-danger/30"></div>
                       <span className="text-xs font-mono text-slate-400">danger (rose-500)</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-warning shadow-lg shadow-warning/30"></div>
                       <span className="text-xs font-mono text-slate-400">warning (amber-500)</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-info shadow-lg shadow-info/30"></div>
                       <span className="text-xs font-mono text-slate-400">info (cyan-500)</span>
                     </div>
                  </div>
                )}

                {previewMode === 'components' && (
                   <div className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                     <button className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition-colors focus:ring-4 focus:ring-indigo-500/30 outline-none">
                       Action Button
                     </button>
                     <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-4 shadow-xl">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0"></div>
                        <div className="flex flex-col pr-4">
                           <span className="text-sm font-medium text-slate-200">User Profile</span>
                           <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                             <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                             Active now
                           </span>
                        </div>
                     </div>
                   </div>
                )}

              </div>
              )}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-800/80 backdrop-blur rounded text-[10px] font-mono text-indigo-400 pointer-events-none">
                div.preview
              </div>
            </div>,
            mountNode
          )}
        </iframe>
      </div>
    </div>
  );
}
