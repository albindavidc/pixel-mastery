import { createContext, useContext, useState, ReactNode } from 'react';
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
  const [currentModuleId, setCurrentModuleId] = useState<string>(modules[0].id);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [playgroundClasses, setPlaygroundClasses] = useState<string>('flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full h-full');
  
  const [playgroundState, setPlaygroundStateInternal] = useState({
    hover: false,
    focus: false,
    active: false,
    disabled: false,
    dark: false,
  });

  const [playgroundSize, setPlaygroundSize] = useState<AppState['playgroundSize']>('100%');

  const setPlaygroundState = (key: keyof AppState['playgroundState'], value: boolean) => {
    setPlaygroundStateInternal(prev => ({ ...prev, [key]: value }));
  };

  const toggleModuleComplete = (id: string) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider value={{
      viewMode, setViewMode,
      currentModuleId, setCurrentModuleId,
      completedModules, toggleModuleComplete,
      playgroundClasses, setPlaygroundClasses,
      playgroundState, setPlaygroundState,
      playgroundSize, setPlaygroundSize
    }}>
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
