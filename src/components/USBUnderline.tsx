const USBUnderline = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      {/* Mouse */}
      <div className="relative flex flex-col items-center">
        <div className="w-5 h-8 rounded-t-full rounded-b-lg border-2 border-primary bg-gradient-to-b from-primary/30 to-accent/30 flex flex-col items-center pt-1.5">
          {/* Scroll wheel */}
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
        {/* Cable coming out from top of mouse */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-primary"></div>
      </div>

      {/* Cable/Cord - curves from mouse top to horizontal */}
      <svg viewBox="0 0 140 40" className="w-36 h-10 -ml-2 -mt-4" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <path 
          d="M 0 5 Q 10 5, 15 15 Q 20 25, 40 25 L 100 25 Q 120 25, 130 25 L 140 25" 
          stroke="url(#cableGradient)" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* USB Connector */}
      <div className="relative flex items-center -ml-2">
        {/* USB metal housing */}
        <div className="w-7 h-4 bg-gradient-to-r from-accent to-primary rounded-r-sm border-2 border-primary/40 flex items-center justify-center gap-0.5 px-1">
          {/* USB pins */}
          <div className="w-0.5 h-2 bg-background/90 rounded-full"></div>
          <div className="w-0.5 h-2 bg-background/90 rounded-full"></div>
          <div className="w-0.5 h-2 bg-background/90 rounded-full"></div>
          <div className="w-0.5 h-2 bg-background/90 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default USBUnderline;