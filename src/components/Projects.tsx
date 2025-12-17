import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Shirt, Sparkles, FileText, ExternalLink } from "lucide-react";
import USBUnderline from "./USBUnderline";

const Projects = () => {
  const featuredProjects = [
    {
      icon: Shirt,
      title: "Beezmark dee Boison",
      problem: "Limited access to unique, locally-designed streetwear in South Africa.",
      solution: "Launched an independent clothing brand with bold designs and celebrity collaborations.",
      result: "Active business since 2018 with growing customer base and SA influencer partnerships.",
      link: "https://beezmark-dee-boison.netlify.app/"
    },
    {
      icon: FileText,
      title: "CVisionary",
      problem: "Job seekers struggle to create tailored, professional resumes quickly.",
      solution: "Built an AI-powered resume builder that generates customized CVs based on job requirements.",
      result: "Functional tool that produces polished resumes in minutes, not hours.",
      link: "https://cvisionary.netlify.app/"
    },
    {
      icon: Sparkles,
      title: "TriGen",
      problem: "Creating consistent, engaging content across platforms is time-consuming.",
      solution: "Developed an AI content generator for marketing copy and social media posts.",
      result: "Automated content creation that maintains brand voice across multiple channels.",
      link: "https://trigen.netlify.app/"
    },
  ];

  const otherProjects = [
    {
      title: "AI Chatbot with Zapier",
      description: "Automated customer service workflows using Zapier integrations."
    },
    {
      title: "Crop Guard Prototype",
      description: "Mobile app design for agricultural crop monitoring (Figma)."
    },
    {
      title: "Portfolio Website",
      description: "This site – built with React, TypeScript, and Tailwind CSS."
    },
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
                <div key={index} className="bg-background rounded-lg p-4">
                  <p className="font-medium text-foreground mb-1">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
