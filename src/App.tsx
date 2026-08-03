/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider, useAppStore } from './store';
import { Sidebar } from './components/Sidebar';
import { Curriculum } from './components/Curriculum';
import { Reference } from './components/Reference';
import { Playground } from './components/Playground';

function MainLayout() {
  const { viewMode, playgroundState } = useAppStore();

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden text-zinc-100 font-sans">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-zinc-950">
        <div className="flex flex-col min-h-max">
          <div className="h-[100vh] min-h-[700px] border-b border-zinc-800 flex flex-col shrink-0 relative z-10">
            <Playground />
          </div>
          <div className="flex-1 flex flex-col shrink-0 relative z-0">
            {viewMode === 'curriculum' ? <Curriculum /> : <Reference />}
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
