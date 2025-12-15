const USBUnderline = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      {/* Main gradient line */}
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
      
      {/* USB Port design */}
      <div className="relative ml-1">
        {/* USB connector body */}
        <div className="w-6 h-3 bg-gradient-to-r from-accent to-primary rounded-r-sm border border-primary/30 flex items-center justify-center gap-0.5 px-1">
          {/* USB pins */}
          <div className="w-0.5 h-1.5 bg-background/80 rounded-full"></div>
          <div className="w-0.5 h-1.5 bg-background/80 rounded-full"></div>
          <div className="w-0.5 h-1.5 bg-background/80 rounded-full"></div>
          <div className="w-0.5 h-1.5 bg-background/80 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default USBUnderline;