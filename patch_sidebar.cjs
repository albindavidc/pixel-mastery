const fs = require('fs');
let code = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

const oldRender = `  const renderModuleButton = (module: Module, index: number, isSubmenu = false) => {
    const isActive = currentModuleId === module.id;
    return (
      <button`;

const newRender = `  const renderModuleButton = (module: Module, index: number, isSubmenu = false) => {
    const isActive = currentModuleId === module.id;
    const displayTitle = module.id === 'tailwind-layout-box-sizing' ? 'Box Model: size, space' : module.title;
    return (
      <button`;

code = code.replace(oldRender, newRender);

const oldSpan = `<span className={\`truncate overflow-hidden transition-all duration-300 \${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}\`}>{module.title}</span>`;
const newSpan = `<span className={\`truncate overflow-hidden transition-all duration-300 \${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}\`}>{displayTitle}</span>`;

code = code.replace(oldSpan, newSpan);

fs.writeFileSync('src/components/Sidebar.tsx', code);
console.log('Patched Sidebar.tsx');
