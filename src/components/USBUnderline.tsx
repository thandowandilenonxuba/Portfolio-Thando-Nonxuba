const USBUnderline = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      {/* Mouse */}
      <div className="relative">
        <div className="w-5 h-8 rounded-t-full rounded-b-lg border-2 border-primary bg-gradient-to-b from-primary/30 to-accent/30 flex flex-col items-center pt-1.5">
          {/* Scroll wheel */}
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
        {/* Cable coming out of mouse */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gradient-to-r from-primary to-primary/80"></div>
      </div>

      {/* Cable/Cord */}
      <div className="relative w-32 h-6 flex items-center">
        {/* Main cable with slight curve effect */}
        <svg viewBox="0 0 128 24" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 12 Q 32 8, 64 12 Q 96 16, 128 12" 
            stroke="url(#cableGradient)" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* USB Connector */}
      <div className="relative flex items-center">
        {/* Cable entering USB */}
        <div className="w-2 h-0.5 bg-gradient-to-r from-accent/80 to-accent"></div>
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