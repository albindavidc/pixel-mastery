import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { LayoutAndStructure } from './showcase/categories/LayoutAndStructure';
import { Navigation } from './showcase/categories/Navigation';
import { ActionsAndControls } from './showcase/categories/ActionsAndControls';
import { FormAndDataEntry } from './showcase/categories/FormAndDataEntry';
import { DataDisplay } from './showcase/categories/DataDisplay';
import { FeedbackAndStatus } from './showcase/categories/FeedbackAndStatus';
import { OverlayAndPopups } from './showcase/categories/OverlayAndPopups';
import { Media } from './showcase/categories/Media';
import { Typography } from './showcase/categories/Typography';
import { VisualEffects } from './showcase/categories/VisualEffects';
import { UtilityComponents } from './showcase/categories/UtilityComponents';
import { SpecializedComponents } from './showcase/categories/SpecializedComponents';
import { Accessibility } from './showcase/categories/Accessibility';
import { Infrastructure } from './showcase/categories/Infrastructure';

const ESSENTIAL_20 = [
  'Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio Button', 'Switch', 'Form',
  'Card', 'Table', 'List', 'Navbar', 'Sidebar', 'Menu', 'Tabs', 'Modal', 'Dialog', 'Tooltip',
  'Toast', 'Snackbar'
];

const TOP_50 = [
  'Container', 'Card', 'Grid', 'Flex', 'Navbar', 'Sidebar', 'Menu', 'Dropdown Menu', 'Tabs',
  'Breadcrumb', 'Pagination', 'Button', 'Icon Button', 'Toggle Button', 'Badge', 'Chip', 'Form',
  'Input', 'Label', 'Textarea', 'Select', 'Checkbox', 'Radio Button', 'Switch', 'Slider',
  'Autocomplete', 'Search Input', 'Date Picker', 'File Upload', 'Table', 'Data Grid', 'List',
  'Accordion', 'Avatar', 'Chart', 'Toast', 'Snackbar', 'Alert', 'Notification', 'Progress Bar',
  'Spinner', 'Skeleton Loader', 'Modal', 'Dialog', 'Drawer', 'Tooltip', 'Popover', 'Image',
  'Video Player', 'Code Block'
];

const CATEGORIES = [
  { id: 'all', label: 'All', icon: '' },
  { id: 'essential', label: 'Essential 20', icon: '⭐' },
  { id: 'top50', label: 'Most Used 50', icon: '🔥' },
  { id: 'layout', label: 'Layout & Structure', icon: '🏗️' },
  { id: 'navigation', label: 'Navigation', icon: '🧭' },
  { id: 'actions', label: 'Actions & Controls', icon: '🎯' },
  { id: 'form', label: 'Form & Data Entry', icon: '📝' },
  { id: 'data', label: 'Data Display', icon: '📊' },
  { id: 'feedback', label: 'Feedback & Status', icon: '🚦' },
  { id: 'overlay', label: 'Overlay & Popups', icon: '🪟' },
  { id: 'media', label: 'Media', icon: '🖼️' },
  { id: 'typography', label: 'Typography', icon: '🔤' },
  { id: 'visual', label: 'Visual Effects', icon: '🎨' },
  { id: 'utility', label: 'Utility Components', icon: '🧰' },
  { id: 'specialized', label: 'Specialized Components', icon: '🧩' },
  { id: 'accessibility', label: 'Accessibility', icon: '♿' },
  { id: 'infrastructure', label: 'Infrastructure', icon: '⚙️' }
];

const SPECIALIZED_DOMAINS = ['Authentication', 'Commerce', 'Messaging', 'Dashboard', 'AI'];

export default function ComponentsShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDomain, setActiveDomain] = useState('Authentication');

  const getFilterList = () => {
    if (activeCategory === 'essential') return ESSENTIAL_20;
    if (activeCategory === 'top50') return TOP_50;
    return undefined;
  };

  const filterList = getFilterList();

  const components = [
    { id: 'layout', component: <LayoutAndStructure searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'navigation', component: <Navigation searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'actions', component: <ActionsAndControls searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'form', component: <FormAndDataEntry searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'data', component: <DataDisplay searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'feedback', component: <FeedbackAndStatus searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'overlay', component: <OverlayAndPopups searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'media', component: <Media searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'typography', component: <Typography searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'visual', component: <VisualEffects searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'utility', component: <UtilityComponents searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'specialized', component: <SpecializedComponents searchQuery={searchQuery} activeDomain={activeDomain} filterList={filterList} /> },
    { id: 'accessibility', component: <Accessibility searchQuery={searchQuery} filterList={filterList} /> },
    { id: 'infrastructure', component: <Infrastructure searchQuery={searchQuery} filterList={filterList} /> }
  ];

  const visibleComponents = (activeCategory === 'all' || activeCategory === 'essential' || activeCategory === 'top50') 
    ? components 
    : components.filter(c => c.id === activeCategory);

  return (
    <div className="flex flex-col h-full bg-zinc-950 font-sans text-zinc-100">
      <div className="sticky top-0 z-20 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="p-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <h1 className="text-2xl font-display font-bold text-white tracking-tight">Components</h1>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-zinc-200"
              />
            </div>
          </div>
          
          <div className="mt-6 flex overflow-x-auto hide-scrollbar gap-2 pb-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === cat.id 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>

          {activeCategory === 'specialized' && (
            <div className="mt-2 flex overflow-x-auto hide-scrollbar gap-2 pb-2">
              {SPECIALIZED_DOMAINS.map(domain => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeDomain === domain 
                      ? 'bg-zinc-700 text-white border border-zinc-600' 
                      : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-transparent'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto space-y-16">
          {visibleComponents.map(c => (
            <div key={c.id}>
              {c.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
