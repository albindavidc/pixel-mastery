import SvgBrace from './SvgBrace';

export default function CssAnatomyGuidelines() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col min-h-[500px] mb-6">
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          CSS Rule Anatomy
        </h2>
      </div>
      <div className="flex-1 p-8 md:p-12 xl:p-20 flex flex-col items-center justify-center overflow-x-auto">
        <div className="relative flex flex-col items-center w-max mx-auto mt-32 mb-16">
        {/* Top Global Brace - CSS Rule */}
        <SvgBrace
          label="CSS Rule"
          colorClass="text-emerald-400"
          position="top"
          className="bottom-full mb-[7.5rem]"
        />

        <div className="flex text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-mono font-semibold tracking-tight">

          {/* Selector */}
          <div className="relative flex">
            <SvgBrace
              label="Selector"
              colorClass="text-blue-400"
              position="bottom"
              className="top-full mt-2"
            />

            <span className="text-blue-400">.button</span>
          </div>

          <span>&nbsp;</span>

          <span className="text-zinc-500">{'{'}</span>

          <span>&nbsp;</span>

          {/* Declaration Block */}
          <div className="relative flex gap-4">

            <SvgBrace
              label="Declaration Block"
              colorClass="text-cyan-400"
              position="top"
              className="bottom-full mb-16"
            />

            {/* Declaration 1 */}
            <div className="relative flex">

              <SvgBrace
                label="Declaration"
                colorClass="text-orange-400"
                position="top"
                className="bottom-full mb-2"
              />

              {/* Property */}
              <div className="relative flex">
                <span className="text-rose-400">color</span>

                <SvgBrace
                  label="Property"
                  colorClass="text-rose-400"
                  position="bottom"
                  className="top-full mt-2"
                />
              </div>

              <span className="text-zinc-500">:</span>

              {/* Value */}
              <div className="relative flex">
                <span className="text-violet-400">#6366f1</span>

                <SvgBrace
                  label="Value"
                  colorClass="text-violet-400"
                  position="bottom"
                  className="top-full mt-2"
                />
              </div>

              <span className="text-zinc-500">;</span>

            </div>

            {/* Declaration 2 */}
            <div className="relative flex">

              <SvgBrace
                label="Declaration"
                colorClass="text-orange-400"
                position="top"
                className="bottom-full mb-2"
              />

              <div className="relative flex">

                <span className="text-rose-400">font-size</span>

                <SvgBrace
                  label="Property"
                  colorClass="text-rose-400"
                  position="bottom"
                  className="top-full mt-2"
                />

              </div>

              <span className="text-zinc-500">:</span>

              <div className="relative flex">

                <span className="text-violet-400">1rem</span>

                <SvgBrace
                  label="Value"
                  colorClass="text-violet-400"
                  position="bottom"
                  className="top-full mt-2"
                />

              </div>

              <span className="text-zinc-500">;</span>

            </div>

          </div>

          <span>&nbsp;</span>

          <span className="text-zinc-500">{'}'}</span>

        </div>
      </div>
      </div>
    </div>
  );
}
