import re

with open('src/components/Sidebar.tsx', 'r') as f:
    content = f.read()

# Fix renderModuleButton
content = content.replace(
    '''        <div 
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all ${
            isSubmenu ? 'rounded-sm' : 'rounded-full'
          } ${
            isActive
              ? 'border-2 border-indigo-500 text-indigo-400 bg-indigo-500/20'
              : 'border-2 border-zinc-800 text-zinc-500'
        }`}>
          <span className="text-[10px] font-bold">{group && group.groupId && group.groupId.startsWith('html-') ? (index === 0 ? '①' : index === 1 ? '②' : '③') : (index + 1)}</span>
        </div>''',
    '''        <div 
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all ${
            isSubmenu ? 'rounded-sm' : 'rounded-full'
          } ${
            isActive
              ? 'border-2 border-indigo-500 text-indigo-400 bg-indigo-500/20'
              : 'border-2 border-zinc-800 text-zinc-500'
        }`}>
          <span className="text-[10px] font-bold">{index + 1}</span>
        </div>'''
)

with open('src/components/Sidebar.tsx', 'w') as f:
    f.write(content)
