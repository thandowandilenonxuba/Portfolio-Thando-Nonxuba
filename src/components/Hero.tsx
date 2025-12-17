import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Github, Mail, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo-processed.jpg";

const Hero = () => {
  const roles = ["IT Professional", "CAPACITI Champion", "Entrepreneur"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Professional Photo with Availability Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-professional transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Thando Wandile Nonxuba" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Availability Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg animate-pulse">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Available for Opportunities
              </div>
            </div>
          </div>

          {/* Name and Rotating Role */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Thando Wandile Nonxuba
              </span>
            </h1>
            
            {/* Rotating Role Text */}
            <div className="h-10 flex items-center justify-center overflow-hidden">
              <p 
                className={`text-xl md:text-2xl text-muted-foreground font-medium transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {roles[currentRoleIndex]}
              </p>
            </div>
          </div>

          {/* Strong Value Statement */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            I turn complex tech challenges into simple, effective solutions.
          </p>

          {/* What I'm Known For */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-2">
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-primary" />
              AI & Automation Tools
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-primary" />
              Problem-First Thinking
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-primary" />
              Clear Communication
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg px-8"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-secondary transition-all px-8"
              onClick={() => scrollToSection("cv")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-4">
            <a 
              href="https://linkedin.com/in/thandononxuba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/thandowandilenonxuba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:thandowandilenonxuba@gmail.com"
              className="w-11 h-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
