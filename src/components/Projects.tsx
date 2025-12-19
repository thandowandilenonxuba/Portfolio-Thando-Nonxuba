import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Shirt, Sparkles, FileText, ExternalLink } from "lucide-react";
import USBUnderline from "./USBUnderline";

const Projects = () => {
  const featuredProjects = [
    {
      icon: Shirt,
      title: "Beezmark dee Boison",
      problem: "Limited unique streetwear in SA market.",
      solution: "Independent clothing brand with celebrity collaborations.",
      result: "Active since 2018 with SA influencer partnerships.",
      link: "https://beezmark-dee-boison.netlify.app/"
    },
    {
      icon: FileText,
      title: "CVisionary",
      problem: "Creating tailored resumes is slow.",
      solution: "AI resume builder for job-specific CVs.",
      result: "Polished resumes in minutes.",
      link: "https://cvisionary.netlify.app/"
    },
    {
      icon: Sparkles,
      title: "TriGen",
      problem: "Content creation is time-consuming.",
      solution: "AI content generator for marketing.",
      result: "Consistent brand voice across channels.",
      link: "https://trigen.netlify.app/"
    },
    {
      icon: Sparkles,
      title: "Roots2Rise",
      problem: "Limited access to empowerment resources.",
      solution: "Platform empowering young African minds.",
      result: "Connecting youth with growth opportunities.",
      link: "https://litfinal.netlify.app/auth"
    },
  ];

  const otherProjects = [
    { title: "Literal", description: "AI-powered conversational chatbot.", link: "https://literal-308fae.zapier.app/chat" },
    { title: "Crop Guard", description: "Agricultural monitoring app (Figma).", link: "https://www.figma.com/proto/zg1u4XQA8q397oc5qOHxCa/CropGuard-Prototype-by-L.I.T?node-id=50-123&t=d9HDzn9e09eEPlq0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=108%3A561" },
    { title: "Portfolio", description: "React + TypeScript + Tailwind.", link: "/" },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <USBUnderline />

          {/* Featured Projects */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-md hover:shadow-professional transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-1 flex flex-col text-sm">
                    <div>
                      <p className="font-semibold text-primary mb-1">Problem</p>
                      <p className="text-foreground/80">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Solution</p>
                      <p className="text-foreground/80">{project.solution}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary mb-1">Result</p>
                      <p className="text-foreground/80">{project.result}</p>
                    </div>
                    {project.link && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full mt-3"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Other Projects */}
          <div className="bg-muted/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Other Work</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <p className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <span className="text-xs text-primary mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ExternalLink className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
