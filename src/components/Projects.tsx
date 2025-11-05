import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Shirt, Zap, Figma, FileText, Sparkles, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Shirt,
      title: "Clothing Brand",
      description: "Successfully launched and manage my own clothing brand, handling design, marketing, and customer relations.",
      tools: "E-commerce, Social Media Marketing, Brand Management",
      outcome: "Active business with growing customer base.",
      link: "https://beezmark-dee-boison.netlify.app/"
    },
    {
      icon: Zap,
      title: "AI Chatbot with Zapier",
      description: "Created an intelligent chatbot using Zapier automation tools during CAPACITI learnership to streamline customer interactions.",
      tools: "Zapier, AI Integration, Workflow Automation",
      outcome: "Automated customer service workflows efficiently."
    },
    {
      icon: Figma,
      title: "Crop Guard - Mobile App Prototype",
      description: "Designed a comprehensive mobile application prototype for agricultural crop monitoring and protection.",
      tools: "Figma, UI/UX Design, Prototyping",
      outcome: "Professional prototype for agricultural technology solution.",
      link: "https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/ETLpycvcNShHog3qS4YQCoYBRowdKCevUZGGleVemC66Bg?e=aEFXn3"
    },
    {
      icon: FileText,
      title: "CVisionary - AI Resume Builder",
      description: "Developed an AI-powered resume generator using Lovable that creates professional CVs tailored to job requirements.",
      tools: "Lovable, AI Integration, React, TypeScript",
      outcome: "Intelligent tool for automated resume creation.",
      link: "https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/EafGVlBZAC5BqxYwkhd55BIBnZQl-hlT7THZLl98aVarlA?e=Yk1GFC"
    },
    {
      icon: Sparkles,
      title: "TriGen - AI Content Generator",
      description: "Built a powerful content generation tool using Lovable that creates engaging marketing copy and social media content.",
      tools: "Lovable, AI Models, Content Strategy",
      outcome: "Automated content creation for multiple platforms.",
      link: "https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/EZT_vjDcoHBNg72Pxpotj0oBTKgwHxe98qAXiPt8Ojy1Eg?e=O2kgjv"
    },
    {
      icon: Code,
      title: "IT Portfolio Website",
      description: "Designed and built this modern, responsive portfolio website to showcase qualifications, experience, and projects.",
      tools: "React, TypeScript, Tailwind CSS, Lovable",
      outcome: "Professional online presence with integrated chatbot."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-md hover:shadow-professional transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Tools Used:</p>
                      <p className="text-sm text-muted-foreground">{project.tools}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary mb-1">Outcome:</p>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                    {project.link && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full mt-4"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
