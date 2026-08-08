import SvgBrace from './SvgBrace';

export default function TailwindAnatomyGuidelines() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col min-h-[300px] mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Tailwind CSS Element Anatomy
        </h2>
      </div>
      <div className="flex-1 p-8 md:p-12 xl:p-16 flex flex-col items-center justify-center overflow-x-auto">
        <div className="relative flex flex-col items-center w-max mx-auto mt-32 mb-28">
        
        {/* Top Global Brace */}
        <SvgBrace
          label="HTML Element"
          colorClass="text-emerald-400"
          position="top"
          className="bottom-full mb-[8.5rem]"
        />

        <div className="flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono font-semibold tracking-tight">
          
          {/* Opening Tag */}
          <div className="relative flex">
            <SvgBrace
              label="Opening Tag"
              colorClass="text-blue-400"
              position="top"
              className="bottom-full mb-16"
            />
            <span className="text-blue-400">&lt;button</span>
            <span>&nbsp;</span>
            
            {/* Attribute */}
            <div className="relative flex">
              <SvgBrace
                label="Attribute"
                colorClass="text-orange-400"
                position="top"
                className="bottom-full mb-2"
              />
              <span className="text-rose-400">class</span>
              <span className="text-zinc-500">=</span>
              
              {/* Utility Classes */}
              <div className="relative flex">
                <SvgBrace
                  label="Utility Classes"
                  colorClass="text-cyan-400"
                  position="bottom"
                  className="top-full mt-[4.5rem]"
                />
                <span className="text-violet-400">
                  "
                </span>
                
                {/* Layout */}
                <div className="relative flex">
                  <span className="text-indigo-400">flex</span>
                  <SvgBrace
                    label="Layout"
                    colorClass="text-indigo-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                <span>&nbsp;</span>
                
                {/* Alignment */}
                <div className="relative flex">
                  <span className="text-sky-400">items-center</span>
                  <SvgBrace
                    label="Alignment"
                    colorClass="text-sky-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                <span>&nbsp;</span>
                
                {/* Spacing */}
                <div className="relative flex">
                  <span className="text-emerald-400">px-4</span>
                  <SvgBrace
                    label="Spacing"
                    colorClass="text-emerald-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                <span>&nbsp;</span>
                
                {/* Background */}
                <div className="relative flex">
                  <span className="text-amber-400">bg-indigo-500</span>
                  <SvgBrace
                    label="Background"
                    colorClass="text-amber-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                <span>&nbsp;</span>
                
                {/* Typography */}
                <div className="relative flex">
                  <span className="text-fuchsia-400">text-white</span>
                  <SvgBrace
                    label="Typography"
                    colorClass="text-fuchsia-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                <span>&nbsp;</span>
                
                {/* Variant */}
                <div className="relative flex">
                  <span className="text-rose-400">hover:bg-indigo-600</span>
                  <SvgBrace
                    label="State Variant"
                    colorClass="text-rose-400"
                    position="bottom"
                    className="top-full mt-2"
                  />
                </div>
                
                <span className="text-violet-400">
                  "
                </span>
              </div>
            </div>
            
            <span className="text-blue-400">&gt;</span>
          </div>

          {/* Content */}
          <div className="relative flex">
            <span className="text-zinc-200">
              Save
            </span>
            <SvgBrace
              label="Content"
              colorClass="text-zinc-200"
              position="bottom"
              className="top-full mt-2"
            />
          </div>

          {/* Closing Tag */}
          <div className="relative flex">
            <span className="text-blue-400">
              &lt;/button&gt;
            </span>
            <SvgBrace
              label="Closing Tag"
              colorClass="text-blue-400"
              position="bottom"
              className="top-full mt-2"
            />
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}
