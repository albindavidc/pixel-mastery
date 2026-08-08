import React, { useState } from 'react';
import { ComponentCard, CategorySection, matchSearch } from '../ComponentCard';
import { ChevronDown, Calendar as CalendarIcon, Upload, Star } from 'lucide-react';


function DatePickerDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full max-w-[240px]">
      <div 
        className="w-full bg-zinc-950 border border-indigo-500 rounded-md py-2 pl-10 pr-3 text-sm text-zinc-100 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>2024-05-15</span>
      </div>
      <CalendarIcon className="absolute left-3 top-2.5 w-4 h-4 text-indigo-400 pointer-events-none" />
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 z-10">
          <div className="flex justify-between items-center mb-3">
            <button className="text-zinc-400 hover:text-white">&lt;</button>
            <div className="text-sm font-medium text-white">May 2024</div>
            <button className="text-zinc-400 hover:text-white">&gt;</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} className="text-[10px] text-zinc-500">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 31}, (_, i) => i + 1).map(d => (
              <button 
                key={d} 
                className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${
                  d === 15 ? 'bg-indigo-500 text-white' : 'text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function useFormAndDataEntryComponents() {

  const [rating, setRating] = useState(3);

  const components = [
    {
      name: 'Form',
      description: 'A container for collecting user input.',
      render: () => (
        <form className="w-full max-w-xs space-y-3 bg-zinc-900 p-4 rounded-lg border border-zinc-800" onSubmit={e => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-xs text-zinc-400">Email</label>
            <div className="h-8 bg-zinc-950 border border-zinc-800 rounded"></div>
          </div>
          <button className="w-full h-8 bg-indigo-500 rounded text-xs text-white font-medium">Submit</button>
        </form>
      )
    },
    {
      name: 'Form Field',
      description: 'A wrapper combining a label, input, and validation message.',
      render: () => (
        <div className="w-full space-y-1">
          <label className="text-sm font-medium text-zinc-300">Username <span className="text-rose-500">*</span></label>
          <input type="text" className="w-full bg-zinc-950 border border-rose-500/50 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500 text-white" defaultValue="user123" />
          <p className="text-xs text-rose-400">Username is already taken.</p>
        </div>
      )
    },
    {
      name: 'Fieldset',
      description: 'Groups related form controls and labels.',
      render: () => (
        <fieldset className="w-full border border-zinc-700 p-3 rounded-md">
          <legend className="text-xs text-zinc-400 px-1 ml-2">Notification Preferences</legend>
          <div className="space-y-2 mt-1">
             <div className="h-3 w-2/3 bg-zinc-800 rounded"></div>
             <div className="h-3 w-1/2 bg-zinc-800 rounded"></div>
          </div>
        </fieldset>
      )
    },
    {
      name: 'Label',
      description: 'An accessible caption for a form control. Component for Label',
      render: () => (
                <div className="flex flex-col gap-4 w-full h-full justify-center">
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 1</div>
                    <label className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                Password
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 rounded">Required</span>
              </label>
                  </div>
                  <div className="w-full relative group">
                    <div className="text-[10px] text-zinc-600 absolute -top-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity">Variant 2</div>
                    <div className="text-sm text-zinc-400">Sample typography for Label</div>
                  </div>
                </div>
             )
    },
    {
      name: 'Input',
      description: 'A basic text entry field.',
      render: () => (
        <input 
          type="text" 
          placeholder="Enter your name..." 
          className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />
      )
    },
    {
      name: 'Textarea',
      description: 'A multi-line text entry field.',
      render: () => (
        <textarea 
          placeholder="Write your message here..." 
          rows={3}
          className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
        ></textarea>
      )
    },
    {
      name: 'Select',
      description: 'A dropdown for selecting a single value from a list.',
      render: () => (
        <div className="relative w-full">
          <select className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 pl-3 pr-8 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-indigo-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
        </div>
      )
    },
    {
      name: 'Multi Select',
      description: 'A dropdown for selecting multiple values.',
      render: () => (
        <div className="w-full bg-zinc-950 border border-indigo-500 rounded-md p-1.5 flex flex-wrap gap-1.5 items-center">
          <div className="bg-zinc-800 text-xs px-2 py-0.5 rounded text-zinc-300">React</div>
          <div className="bg-zinc-800 text-xs px-2 py-0.5 rounded text-zinc-300">Vue</div>
          <input type="text" placeholder="Select..." className="bg-transparent border-none outline-none text-sm text-zinc-300 w-16" />
        </div>
      )
    },
    {
      name: 'Date Picker',
      description: 'A field for selecting a specific date with a calendar.',
      render: () => <DatePickerDemo />
    },
    {
      name: 'Color Picker',
      description: 'A control for selecting a color.',
      render: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-rose-500 border-2 border-white shadow-sm"></div>
          <div className="flex-1 bg-zinc-950 border border-zinc-700 rounded-md py-1.5 px-3 text-sm text-zinc-300 font-mono">
            #F43F5E
          </div>
        </div>
      )
    },
    {
      name: 'File Upload',
      description: 'An area for uploading files via drag-and-drop or selection.',
      render: () => (
        <div className="w-full border-2 border-dashed border-zinc-700 hover:border-indigo-500 hover:bg-indigo-500/5 bg-zinc-900/50 rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer">
          <Upload className="w-6 h-6 text-zinc-500" />
          <div className="text-sm text-zinc-300 font-medium">Click or drag file to upload</div>
          <div className="text-xs text-zinc-500">SVG, PNG, JPG (max. 2MB)</div>
        </div>
      )
    },
    {
      name: 'OTP Input',
      description: 'A grouped set of inputs for one-time passwords.',
      render: () => (
        <div className="flex gap-2 justify-center">
          {[4, 2, 8, 9].map((digit, i) => (
            <input 
              key={i} 
              type="text" 
              maxLength={1} 
              className="w-10 h-12 bg-zinc-950 border border-zinc-700 rounded-md text-center text-lg font-bold text-white focus:border-indigo-500 focus:outline-none" 
              defaultValue={digit}
            />
          ))}
        </div>
      )
    },
    {
      name: 'Rating',
      description: 'A control for rating an item, usually with stars.',
      render: () => (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <Star 
              key={star} 
              className={`w-6 h-6 cursor-pointer transition-colors ${star <= rating ? 'fill-amber-500 text-amber-500' : 'text-zinc-700'}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      )
    },
    {
      name: 'Signature Pad',
      description: 'A canvas input for capturing drawn signatures.',
      render: () => (
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-24 bg-white rounded-md border border-zinc-300 relative overflow-hidden">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 40" preserveAspectRatio="none">
               <path d="M10,20 Q30,5 50,20 T90,20" fill="none" stroke="#000" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex justify-end">
            <button className="text-xs text-zinc-500 hover:text-zinc-300">Clear</button>
          </div>
        </div>
      )
    },
    {
      name: 'Autocomplete',
      description: 'Component for Autocomplete',
      render: () => (
        <div className="flex flex-col gap-1 w-full max-w-xs"><div className="relative"><input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" placeholder="Search..." defaultValue="Ap"/><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-800 rounded shadow-lg overflow-hidden z-10"><div className="px-3 py-1.5 text-sm hover:bg-zinc-800 cursor-pointer">Apple</div><div className="px-3 py-1.5 text-sm hover:bg-zinc-800 cursor-pointer">Apricot</div></div></div></div>
      )
    },
    {
      name: 'Time Picker',
      description: 'A component to select a specific time of day.',
      render: () => (
        <div className="flex gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md p-2">
          <input type="text" defaultValue="12" className="w-8 text-center bg-transparent outline-none text-zinc-100" />
          <span className="text-zinc-500">:</span>
          <input type="text" defaultValue="30" className="w-8 text-center bg-transparent outline-none text-zinc-100" />
          <select className="bg-zinc-900 text-zinc-300 border border-zinc-800 rounded text-xs px-1 py-0.5 outline-none">
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      )
    },
    {
      name: 'DateTime Picker',
      description: 'Component for DateTime Picker',
      render: () => (
        <div className="flex gap-2 w-full max-w-sm"><input type="date" className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" /><input type="time" className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" /></div>
      )
    },
    {
      name: 'Icon Field',
      description: 'Component for Icon Field',
      render: () => (
        <div className="relative w-full max-w-xs"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-zinc-500">✉</span></div><input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded py-1.5 pl-8 pr-3 text-sm" placeholder="Email address" /></div>
      )
    },
    {
      name: 'Key Filter',
      description: 'Component for Key Filter',
      render: () => (
        <input type="text" className="w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-sm" placeholder="Numbers only..." defaultValue="12345" />
      )
    },
    {
      name: 'Listbox',
      description: 'Component for Listbox',
      render: () => (
        <div className="w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded overflow-hidden flex flex-col"><div className="px-3 py-2 text-sm hover:bg-zinc-800 cursor-pointer">New York</div><div className="px-3 py-2 text-sm bg-indigo-500/20 text-indigo-300 border-l-2 border-indigo-500">San Francisco</div><div className="px-3 py-2 text-sm hover:bg-zinc-800 cursor-pointer">London</div></div>
      )
    }
  ];
    return components;
}

export function FormAndDataEntry({ searchQuery, filterList, startIndex = 0 }: { searchQuery: string, filterList?: string[] , startIndex?: number }) {
  const components = useFormAndDataEntryComponents();
  const filtered = components.filter(c => matchSearch(c.name, searchQuery) && (!filterList || filterList.some(f => c.name.toLowerCase() === f.toLowerCase())));
  if (filtered.length === 0) return null;

  return (
    <CategorySection title="📝 Form & Data Entry" count={filtered.length} componentsList={filtered}>
      {filtered.map((c, idx) => (
        <ComponentCard key={c.name} name={c.name} description={c.description} alsoIn={(c as any).alsoIn} index={startIndex + idx + 1}>
          {c.render()}
        </ComponentCard>
      ))}
    </CategorySection>
  );
}
