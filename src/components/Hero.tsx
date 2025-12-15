import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Github, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo-processed.jpg";

const Hero = () => {
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
          {/* Professional Photo - Placeholder for user's photo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-professional transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Thando Wandile Nonxuba" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Greeting and Name */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-foreground/90 font-light animate-fade-in">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Thando Wandile Nonxuba
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              IT Professional | Entrepreneur | CAPACITI Champion
            </p>
          </div>

          {/* Brief Introduction */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A dedicated IT professional with a National Diploma in Information Technology, currently upskilling 
            at CAPACITI. Entrepreneur, problem solver, and creative thinker bringing innovative solutions to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-secondary transition-all"
              onClick={() => scrollToSection("cv")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-6">
            <a 
              href="https://linkedin.com/in/thandononxuba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/thandowandilenonxuba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:thandowandilenonxuba@gmail.com"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-md"
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
