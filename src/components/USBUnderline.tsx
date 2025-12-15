import { Mouse } from "lucide-react";

const USBUnderline = () => {
  return (
    <div className="flex items-center justify-center mb-12 gap-2">
      {/* Mouse icon */}
      <div className="w-6 h-8 rounded-t-full rounded-b-lg border-2 border-primary bg-gradient-to-b from-primary/20 to-accent/20 flex flex-col items-center pt-1">
        <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
      </div>

      {/* Main gradient line */}
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent"></div>
      
      {/* USB Port design */}
      <div className="relative">
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