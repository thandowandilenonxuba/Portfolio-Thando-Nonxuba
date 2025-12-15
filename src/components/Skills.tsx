import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Lightbulb } from "lucide-react";
import USBUnderline from "./USBUnderline";

const Skills = () => {
  const programmingLanguages = [
    "Java",
    "VB.Net",
    "HTML",
    "CSS",
    "MySQL"
  ];

  const keySkills = [
    "Computer literacy",
    "Microsoft Office",
    "Communication",
    "Able to work in a team",
    "Reliable",
    "Dependable",
    "Fast learner"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <USBUnderline />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <Card className="border-0 shadow-professional">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {programmingLanguages.map((lang, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span className="text-foreground/90">{lang}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Key Skills */}
            <Card className="border-0 shadow-professional">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Key Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keySkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span className="text-foreground/90">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
