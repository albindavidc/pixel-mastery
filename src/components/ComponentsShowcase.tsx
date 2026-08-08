import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowUp } from 'lucide-react';
import { LayoutAndStructure, useLayoutAndStructureComponents } from './showcase/categories/LayoutAndStructure';
import { Navigation, useNavigationComponents } from './showcase/categories/Navigation';
import { ActionsAndControls, useActionsAndControlsComponents } from './showcase/categories/ActionsAndControls';
import { FormAndDataEntry, useFormAndDataEntryComponents } from './showcase/categories/FormAndDataEntry';
import { DataDisplay, useDataDisplayComponents } from './showcase/categories/DataDisplay';
import { FeedbackAndStatus, useFeedbackAndStatusComponents } from './showcase/categories/FeedbackAndStatus';
import { OverlayAndPopups, useOverlayAndPopupsComponents } from './showcase/categories/OverlayAndPopups';
import { Media, useMediaComponents } from './showcase/categories/Media';
import { Typography, useTypographyComponents } from './showcase/categories/Typography';
import { VisualEffects, useVisualEffectsComponents } from './showcase/categories/VisualEffects';
import { UtilityComponents, useUtilityComponentsComponents } from './showcase/categories/UtilityComponents';
import { SpecializedComponents, useSpecializedComponentsComponents } from './showcase/categories/SpecializedComponents';
import { Accessibility, useAccessibilityComponents } from './showcase/categories/Accessibility';
import { Infrastructure, useInfrastructureComponents } from './showcase/categories/Infrastructure';
import { componentMap } from './showcase/componentMap';

const ESSENTIAL_20 = [
  "Button", "Input", "Textarea", "Select", "Autocomplete", "Checkbox", "Radio Button", "Toggle Switch", "Slider", "Date Picker", "Time Picker", "File Upload", "Card", "Table", "Data Grid", "List", "Accordion", "Tabs", "Tree", "Avatar"
];

const TOP_50 = [
  "Button", "Input", "Textarea", "Select", "Autocomplete", "Checkbox", "Radio Button", "Toggle Switch", "Slider", "Date Picker", "Time Picker", "File Upload", "Card", "Table", "Data Grid", "List", "Accordion", "Tabs", "Tree", "Avatar", "Navbar", "Sidebar", "Menu", "Dropdown Menu", "Breadcrumb", "Pagination", "Stepper", "Dialog", "Confirm Dialog", "Drawer", "Popover", "Tooltip", "Bottom Sheet", "Toast", "Status Indicator", "Alert", "Message", "Notification", "Progress Bar", "Spinner", "Skeleton", "Badge", "Image", "Carousel", "Toolbar", "Divider", "Grid", "Container", "Form", "Form Field", "Label"
];

const CATEGORIES = [
  { id: 'all', label: 'All', icon: '' },
  { id: 'essential', label: 'Essential 20', icon: '⭐' },
  { id: 'top50', label: 'Most Used 51', icon: '🔥' },
  { id: 'layout', label: 'Layout & Structure', icon: '🏗️' },
  { id: 'navigation', label: 'Navigation', icon: '🧭' },
  { id: 'actions', label: 'Actions & Controls', icon: '🎯' },
  { id: 'form', label: 'Form & Data Entry', icon: '📝' },
  { id: 'data', label: 'Data Display', icon: '📊' },
  { id: 'feedback', label: 'Feedback & Status', icon: '🚦' },
  { id: 'overlay', label: 'Overlay & Popups', icon: '🪟' },
  { id: 'media', label: 'Media', icon: '🖼️' },
  { id: 'typography', label: 'Typography', icon: '🔤' },
  { id: 'visual', label: 'Effects & Interaction', icon: '🎨' },
  { id: 'utility', label: 'Utilities', icon: '🧰' },
  { id: 'specialized', label: 'Specialized Components', icon: '🧩' },
  { id: 'accessibility', label: 'Accessibility', icon: '♿' },
  { id: 'infrastructure', label: 'Infrastructure', icon: '⚙️' }
];

const SPECIALIZED_DOMAINS = ['Authentication', 'Commerce', 'Messaging', 'Dashboard', 'AI'];


import { ComponentCard } from './showcase/ComponentCard';
import { CategorySection } from './showcase/ComponentCard';



export default function ComponentsShowcase() {
  const LayoutAndStructureComps = useLayoutAndStructureComponents();
  const NavigationComps = useNavigationComponents();
  const ActionsAndControlsComps = useActionsAndControlsComponents();
  const FormAndDataEntryComps = useFormAndDataEntryComponents();
  const DataDisplayComps = useDataDisplayComponents();
  const FeedbackAndStatusComps = useFeedbackAndStatusComponents();
  const OverlayAndPopupsComps = useOverlayAndPopupsComponents();
  const MediaComps = useMediaComponents();
  const TypographyComps = useTypographyComponents();
  const VisualEffectsComps = useVisualEffectsComponents();
  const UtilityComponentsComps = useUtilityComponentsComponents();
  const SpecializedComponentsComps = useSpecializedComponentsComponents();
  const AccessibilityComps = useAccessibilityComponents();
  const InfrastructureComps = useInfrastructureComponents();

  const ALL_COMPONENTS = [
    ...LayoutAndStructureComps,
    ...NavigationComps,
    ...ActionsAndControlsComps,
    ...FormAndDataEntryComps,
    ...DataDisplayComps,
    ...FeedbackAndStatusComps,
    ...OverlayAndPopupsComps,
    ...MediaComps,
    ...TypographyComps,
    ...VisualEffectsComps,
    ...UtilityComponentsComps,
    ...SpecializedComponentsComps,
    ...AccessibilityComps,
    ...InfrastructureComps
  ];

  const COMPONENT_MAP_LOWER = new Map();
  ALL_COMPONENTS.forEach(c => {
    if (!COMPONENT_MAP_LOWER.has(c.name.toLowerCase())) {
      COMPONENT_MAP_LOWER.set(c.name.toLowerCase(), c);
    }
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDomain, setActiveDomain] = useState('Authentication');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setShowScrollTop(target.scrollTop > 50);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    if (!['all', 'essential', 'top50'].includes(id)) {
      setTimeout(() => {
        const scrollContainer = document.getElementById('main-scroll-container');
        if (scrollContainer) {
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 10);
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  
  const getFilterList = () => {
    if (activeCategory === 'essential') return ESSENTIAL_20;
    if (activeCategory === 'top50') return TOP_50;
    return undefined;
  };
  const filterList = getFilterList();

  
  // Calculate start indices
  const categoryStartIndices = {};
  let currentIndex = 0;
  
  for (const cat of CATEGORIES) {
    if (['all', 'essential', 'top50'].includes(cat.id)) continue;
    const catList = activeCategory === 'all' ? deduplicateList(cat.id) : filterList;
    
    // In activeCategory !== 'all', if it's the active category, start at 0
    // Actually, if it's not 'all', it's just one category, so it starts at 0 anyway.
    
    categoryStartIndices[cat.id] = currentIndex;
    
    if (activeCategory === 'all') {
      const allComps = componentMap[cat.id] || [];
      const catFiltered = allComps.filter(name => !catList || catList.some(f => name.toLowerCase().includes(f.toLowerCase())));
      // Wait, we need to filter by searchQuery
      const catSearchFiltered = catFiltered.filter(name => !searchQuery || name.toLowerCase().includes(searchQuery.toLowerCase()));
      currentIndex += catSearchFiltered.length;
    }
  }

  const components = [
    { id: 'layout', component: <LayoutAndStructure searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('layout') : filterList} startIndex={categoryStartIndices['layout'] || 0} /> },
    { id: 'navigation', component: <Navigation searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('navigation') : filterList} startIndex={categoryStartIndices['navigation'] || 0} /> },
    { id: 'actions', component: <ActionsAndControls searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('actions') : filterList} startIndex={categoryStartIndices['actions'] || 0} /> },
    { id: 'form', component: <FormAndDataEntry searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('form') : filterList} startIndex={categoryStartIndices['form'] || 0} /> },
    { id: 'data', component: <DataDisplay searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('data') : filterList} startIndex={categoryStartIndices['data'] || 0} /> },
    { id: 'feedback', component: <FeedbackAndStatus searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('feedback') : filterList} startIndex={categoryStartIndices['feedback'] || 0} /> },
    { id: 'overlay', component: <OverlayAndPopups searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('overlay') : filterList} startIndex={categoryStartIndices['overlay'] || 0} /> },
    { id: 'media', component: <Media searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('media') : filterList} startIndex={categoryStartIndices['media'] || 0} /> },
    { id: 'typography', component: <Typography searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('typography') : filterList} startIndex={categoryStartIndices['typography'] || 0} /> },
    { id: 'visual', component: <VisualEffects searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('visual') : filterList} startIndex={categoryStartIndices['visual'] || 0} /> },
    { id: 'utility', component: <UtilityComponents searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('utility') : filterList} startIndex={categoryStartIndices['utility'] || 0} /> },
    { id: 'specialized', component: <SpecializedComponents searchQuery={searchQuery} activeDomain={activeDomain} filterList={activeCategory === 'all' ? deduplicateList('specialized') : filterList} startIndex={categoryStartIndices['specialized'] || 0} /> },
    { id: 'accessibility', component: <Accessibility searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('accessibility') : filterList} startIndex={categoryStartIndices['accessibility'] || 0} /> },
    { id: 'infrastructure', component: <Infrastructure searchQuery={searchQuery} filterList={activeCategory === 'all' ? deduplicateList('infrastructure') : filterList} startIndex={categoryStartIndices['infrastructure'] || 0} /> }
  ];


  function deduplicateList(catId) {
    // Return undefined if not 'all'
    if (activeCategory !== 'all') return undefined;
    
    // Calculate global seen list across all categories in order
    const seen = new Set();
    const result = [];
    for (const cat of CATEGORIES) {
      if (['all', 'essential', 'top50'].includes(cat.id)) continue;
      const comps = componentMap[cat.id] || [];
      for (const comp of comps) {
        if (!seen.has(comp.toLowerCase())) {
          seen.add(comp.toLowerCase());
          if (cat.id === catId) result.push(comp);
        }
      }
    }
    return result;
  }

    const renderCustomTab = (title, list) => {
    let validList = list.map(name => COMPONENT_MAP_LOWER.get(name.toLowerCase())).filter(Boolean);
    let filteredList = validList.filter(comp => !searchQuery || comp.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return (
      <CategorySection title={title} count={filteredList.length} componentsList={filteredList.map(comp => ({name: comp.name}))}>
        {filteredList.map((comp, idx) => (
          <ComponentCard key={comp.name} name={comp.name} description={comp.description} alsoIn={comp.alsoIn} index={idx + 1}>
            {comp.render()}
          </ComponentCard>
        ))}
      </CategorySection>
    );
  };


  const visibleComponents = (activeCategory === 'all' || activeCategory === 'essential' || activeCategory === 'top50') 
    ? components 
    : components.filter(c => c.id === activeCategory);

  return (
    <div className="flex flex-col h-full bg-zinc-950 font-sans text-zinc-100">
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
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
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === cat.id 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                {cat.label} {cat.id === 'all' && `(${Object.values(componentMap).flat().filter((v, i, a) => a.indexOf(v) === i).length})`} {!['all', 'essential', 'top50'].includes(cat.id) && componentMap[cat.id] && `(${componentMap[cat.id].length})`}
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
      
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto space-y-16">
          {(activeCategory === 'all' || activeCategory === 'essential' || activeCategory === 'top50') && (
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-indigo-400">📋</span> Category Index
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CATEGORIES.filter(c => !['all', 'essential', 'top50'].includes(c.id)).map(cat => {
                  const allComps = componentMap[cat.id] || [];
                  const catFiltered = allComps.filter(name => !filterList || filterList.some(f => name.toLowerCase().includes(f.toLowerCase())));
                  
                  if (catFiltered.length === 0) return null;
                  
                  return (
                    <a 
                      key={cat.id} 
                      href={`#category-${cat.id}`}
                      className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors shadow-sm flex flex-col gap-1.5 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{cat.icon}</span>
                        <span className="font-semibold text-zinc-200 group-hover:text-indigo-300">{cat.label}</span>
                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                          {catFiltered.length} {catFiltered.length === 1 ? 'component' : 'components'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-500 leading-relaxed pl-8 pr-4">
                        {catFiltered.join(', ')}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
          {activeCategory === 'essential' && renderCustomTab('⭐ Essential 20', ESSENTIAL_20)}
          {activeCategory === 'top50' && renderCustomTab('🔥 Most Used 51', TOP_50)}
          {activeCategory !== 'essential' && activeCategory !== 'top50' && components.filter(c => activeCategory === 'all' || c.id === activeCategory).map(c => (
            <div key={c.id} id={`category-${c.id}`} className="scroll-mt-40">
              {c.component}
            </div>
          ))}
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full shadow-xl transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
