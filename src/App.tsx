import { HtmlPlayground } from './components/HtmlPlayground';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider, useAppStore } from './store';
import { Sidebar } from './components/Sidebar';
import { Curriculum } from './components/Curriculum';
import { Guidelines } from './components/Guidelines';
import ComponentsShowcase from './components/ComponentsShowcase';
import { Playground } from './components/Playground';
import { TailwindPlayground } from './components/TailwindPlayground';
import { LayoutPlayground } from './components/LayoutPlayground';
import { StylingPlayground } from './components/StylingPlayground';

function MainLayout() {
  const { viewMode, playgroundState, currentModuleId } = useAppStore();

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden text-zinc-100 font-sans">
      <Sidebar />
      <div id="main-scroll-container" className="flex-1 overflow-y-auto bg-zinc-950">
        <div className="flex flex-col min-h-max">
                              {currentModuleId.startsWith('html-') && viewMode !== 'guidelines' && viewMode !== 'components' && (
            <div className="min-h-[1500px] h-[150vh] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <HtmlPlayground key={currentModuleId} />
            </div>
          )}
          {(currentModuleId.startsWith('tailwind-layout') && currentModuleId !== 'tailwind-layout-display') && viewMode !== 'guidelines' && viewMode !== 'components' && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <LayoutPlayground key={currentModuleId} />
            </div>
          )}
          {(currentModuleId.startsWith('tailwind-styling')) && viewMode !== 'guidelines' && viewMode !== 'components' && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <StylingPlayground key={currentModuleId} />
            </div>
          )}
          {(currentModuleId === 'flexbox-grid') && viewMode !== 'guidelines' && viewMode !== 'components' && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <Playground key={currentModuleId} />
            </div>
          )}
          {(currentModuleId === 'tailwind-flexbox-grid' || currentModuleId === 'tailwind-layout-display') && viewMode !== 'guidelines' && viewMode !== 'components' && (
            <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
              <TailwindPlayground key={currentModuleId} />
            </div>
          )}
          <div className="flex-1 flex flex-col shrink-0 relative z-0">
            {viewMode === 'guidelines' && <Guidelines />}
            {viewMode === 'components' && <ComponentsShowcase />}
            {viewMode === 'curriculum' && <Curriculum />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
