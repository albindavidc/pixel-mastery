import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { ViewMode } from './types';
import { modules } from './data/modules';

interface AppState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentModuleId: string;
  setCurrentModuleId: (id: string) => void;
  completedModules: string[];
  toggleModuleComplete: (id: string) => void;
  playgroundClasses: string;
  setPlaygroundClasses: (classes: string) => void;
  moduleClasses: Record<string, string>;
  setModuleClasses: (moduleId: string, classes: string) => void;
  playgroundState: {
    hover: boolean;
    focus: boolean;
    active: boolean;
    disabled: boolean;
    dark: boolean;
  };
  setPlaygroundState: (key: keyof AppState['playgroundState'], value: boolean) => void;
  playgroundSize: '100%' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  setPlaygroundSize: (size: AppState['playgroundSize']) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>('curriculum');
  const [currentModuleId, setCurrentModuleId] = useState<string>('tailwind-layout-display');
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [moduleClasses, setModuleClassesState] = useState<Record<string, string>>({
    
    'tailwind-layout-display': 'block p-6 w-full bg-cyan-500/20 border-4 border-cyan-500 rounded-2xl shadow-xl',
    'tailwind-layout-display-flex': 'flex p-6 w-full bg-indigo-500/20 border-4 border-indigo-500 rounded-2xl shadow-xl flex-row flex-wrap gap-4 items-center justify-center',
    'tailwind-layout-display-grid': 'grid p-6 w-full bg-fuchsia-500/20 border-4 border-fuchsia-500 rounded-2xl shadow-xl grid-cols-3 gap-4 place-content-center',
    'tailwind-layout-box-sizing': 'box-border p-4 w-64 h-64 bg-indigo-500/20 border-8 border-indigo-500 mx-auto mt-10',
    'tailwind-layout-position': 'relative',
    'tailwind-layout-visibility': 'visible',
    'tailwind-styling-background': 'bg-[url(\'https://shorturl.at/dduSX\')] bg-[size:200%] bg-center'
  });

  const playgroundClasses = moduleClasses[currentModuleId] || '';
  const setPlaygroundClasses = useCallback((classes: string) => {
    setModuleClassesState(prev => ({ ...prev, [currentModuleId]: classes }));
  }, [currentModuleId]);
  const setModuleClasses = useCallback((moduleId: string, classes: string) => {
    setModuleClassesState(prev => ({ ...prev, [moduleId]: classes }));
  }, []);
  
  const [playgroundState, setPlaygroundStateInternal] = useState({
    hover: false,
    focus: false,
    active: false,
    disabled: false,
    dark: false,
  });

  const [playgroundSize, setPlaygroundSize] = useState<AppState['playgroundSize']>('100%');

  const setPlaygroundState = useCallback((key: keyof AppState['playgroundState'], value: boolean) => {
    setPlaygroundStateInternal(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleModuleComplete = useCallback((id: string) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  }, []);

  const value = useMemo(() => ({
    viewMode, setViewMode,
    currentModuleId, setCurrentModuleId,
    completedModules, toggleModuleComplete,
    playgroundClasses, setPlaygroundClasses,
    moduleClasses, setModuleClasses,
    playgroundState, setPlaygroundState,
    playgroundSize, setPlaygroundSize
  }), [
    viewMode, 
    currentModuleId, 
    completedModules, toggleModuleComplete,
    playgroundClasses, setPlaygroundClasses,
    moduleClasses, setModuleClasses,
    playgroundState, setPlaygroundState,
    playgroundSize
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
}
