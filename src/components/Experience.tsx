import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Flame, Headphones, Users, PenTool } from "lucide-react";
import USBUnderline from "./USBUnderline";

const Experience = () => {
  const experiences = [
    { year: "Sept 2025 - Present", role: "CAPACITI Champion", company: "CAPACITI", impact: "Building AI tools while completing IT Support training.", icon: GraduationCap },
    { year: "2024 - 2025", role: "Customer Service Agent", company: "Shoprite Sixty60", impact: "High satisfaction scores under pressure.", icon: Headphones },
    { year: "2024 & 2025", role: "Wildland Firefighter", company: "Seasonal", impact: "Emergency response protecting communities.", icon: Flame },
    { year: "2023", role: "Call Centre Agent", company: "Ver-tex Solutions", impact: "Learnership in professional communication.", icon: Headphones },
    { year: "2021 - 2022", role: "Educator & Admin", company: "Godidi S.P.S", impact: "Teaching support and administration.", icon: Users },
    { year: "2018", role: "Class Representative", company: "Walter Sisulu University", impact: "Student advocacy and faculty liaison.", icon: PenTool },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <USBUnderline />

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-sm hover:shadow-md transition-all duration-300 border-0 overflow-hidden"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                          <span className="text-sm font-medium text-primary">{exp.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-foreground/80 leading-relaxed">{exp.impact}</p>
                      </div>
                    </div>
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

export default Experience;
