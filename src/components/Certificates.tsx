import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const Certificates = () => {
  const certificates = [
    { name: "First Aid Level 3", institution: "The First Aid Academy", type: "certification" },
    { name: "Wildland Firefighter I (IFSAC Accredited)", institution: "Epping Training Centre", type: "certification" },
    { name: "NFPA 1051 Wildland Firefighter I", institution: "Fire and Rescue Service Training Academy", type: "certification" },
    { name: "BPO Skills Academy", institution: "4IR Future Skills, Financial Services Compliance, Long Term Insurance, Class of Business", type: "certification" },
    { name: "National Diploma in Information Technology - Software Development", institution: "Walter Sisulu University", type: "degree" },
    { name: "Matric", institution: "Gobe Commercial High School", type: "degree" },
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certificates & Qualifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.type === "degree" ? GraduationCap : Award;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-md hover:shadow-professional transition-all duration-300"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-2">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.institution}</p>
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

export default Certificates;
