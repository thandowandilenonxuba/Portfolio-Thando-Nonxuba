import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import USBUnderline from "./USBUnderline";

const Experience = () => {
  const experiences = [
    { 
      year: "Sept 2025 - Present", 
      role: "CAPACITI Champion - IT Skills Development", 
      company: "CAPACITI",
      description: "Upskilling in tech with hands-on projects including Chatbot (Zapier), Crop Guard Prototype (Figma), CVisionary AI Resume Builder, and TriGen Content Generator (Lovable)."
    },
    { 
      year: "Jan - June 2025", 
      role: "Wildland Firefighter", 
      company: "Seasonal Contract",
      description: "Contract expired after seasonal wildfire season."
    },
    { 
      year: "2024 - 2025", 
      role: "Customer Service Call Centre Agent", 
      company: "Shoprite Checkers Sixty60",
      description: "Handled customer inquiries and provided efficient service solutions."
    },
    { 
      year: "Jan - June 2024", 
      role: "Wildland Firefighter", 
      company: "Seasonal Contract",
      description: "Contract expired after seasonal wildfire season."
    },
    { 
      year: "2023", 
      role: "Call Centre Agent Learnership", 
      company: "Ver-tex Solutions",
      description: "Completed learnership program in customer service and call centre operations."
    },
    { 
      year: "July - Sept 2022", 
      role: "Admin Clerk", 
      company: "Godidi S.P.S",
      description: "Left due to return of original clerk from maternity leave."
    },
    { 
      year: "May - Aug 2022", 
      role: "Educator Assistant", 
      company: "Godidi S.P.S",
      description: "Contract expired."
    },
    { 
      year: "Nov 2021 - May 2022", 
      role: "Educator Assistant", 
      company: "Godidi S.P.S",
      description: "Supported teaching staff and assisted with classroom management."
    },
    { 
      year: "Aug - Oct 2021", 
      role: "SGB Teacher", 
      company: "Godidi S.P.S",
      description: "Taught classes as School Governing Body appointed teacher."
    },
    { 
      year: "May - July 2021", 
      role: "Cashier & Stock Management", 
      company: "Nomalinge Store",
      description: "Left to attend to personal issues."
    },
    { 
      year: "2018", 
      role: "Class Representative", 
      company: "Walter Sisulu University",
      description: "Represented student interests and facilitated communication with faculty."
    },
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"></div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Content Card */}
                  <Card className="flex-1 shadow-md hover:shadow-professional transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-2">{exp.year}</div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <p className="text-muted-foreground mb-2">{exp.company}</p>
                          {exp.description && (
                            <p className="text-sm text-foreground/70 mt-2">{exp.description}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
