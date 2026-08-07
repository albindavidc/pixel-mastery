export default function SvgBrace({ label, colorClass, position = 'top', className = '' }: { label: string, colorClass: string, position?: 'top' | 'bottom', className?: string }) {
  const isTop = position === 'top';
  
  return (
    <div className={`absolute left-0 right-0 flex flex-col items-center justify-center ${className}`}>
      {isTop && <div className={`text-xs md:text-sm font-sans font-medium mb-1 whitespace-nowrap ${colorClass}`}>{label}</div>}
      
      {isTop ? (
        <div className={`flex w-full h-[16px] ${colorClass}`}>
          <svg width="12" height="16" className="shrink-0"><path d="M 1 15 Q 1 8 12 8" fill="none" strokeWidth="2" className="stroke-current"/></svg>
          <div className="flex-1 border-t-2 border-current mt-[7px] h-0"></div>
          <svg width="24" height="16" className="shrink-0"><path d="M 0 8 Q 12 8 12 1 Q 12 8 24 8" fill="none" strokeWidth="2" className="stroke-current"/></svg>
          <div className="flex-1 border-t-2 border-current mt-[7px] h-0"></div>
          <svg width="12" height="16" className="shrink-0"><path d="M 0 8 Q 11 8 11 15" fill="none" strokeWidth="2" className="stroke-current"/></svg>
        </div>
      ) : (
        <div className={`flex w-full h-[16px] ${colorClass}`}>
          <svg width="12" height="16" className="shrink-0"><path d="M 1 1 Q 1 8 12 8" fill="none" strokeWidth="2" className="stroke-current"/></svg>
          <div className="flex-1 border-t-2 border-current mt-[7px] h-0"></div>
          <svg width="24" height="16" className="shrink-0"><path d="M 0 8 Q 12 8 12 15 Q 12 8 24 8" fill="none" strokeWidth="2" className="stroke-current"/></svg>
          <div className="flex-1 border-t-2 border-current mt-[7px] h-0"></div>
          <svg width="12" height="16" className="shrink-0"><path d="M 0 8 Q 11 8 11 1" fill="none" strokeWidth="2" className="stroke-current"/></svg>
        </div>
      )}

      {!isTop && <div className={`text-xs md:text-sm font-sans font-medium mt-2 whitespace-nowrap ${colorClass}`}>{label}</div>}
    </div>
  );
}
