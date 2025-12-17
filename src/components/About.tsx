import { Card, CardContent } from "@/components/ui/card";
import { User, Globe, Languages, Car, Shield, MapPin } from "lucide-react";
import USBUnderline from "./USBUnderline";

const About = () => {
  const personalDetails = [
    { icon: MapPin, label: "Physical Address", value: "Langa, Cape Town 7455" },
    { icon: Globe, label: "Nationality", value: "South African" },
    { icon: User, label: "Gender", value: "Male" },
    { icon: Car, label: "Driving Licence", value: "Code 10 (C1) with Professional Driving Permit" },
    { icon: Languages, label: "Languages", value: "IsiXhosa (native), English (fluent)" },
    { icon: Shield, label: "Criminal Record", value: "None" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <USBUnderline />

          {/* Bio */}
          <Card className="mb-12 shadow-professional border-0">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                <strong>National Diploma in IT (Software Development)</strong> from Walter Sisulu University. Currently a{" "}
                <strong>CAPACITI Champion</strong> completing AI Bootcamp and IT Support training.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Background in IT, customer service, emergency response, and entrepreneurship. I adapt fast and communicate clearly.
              </p>
            </CardContent>
          </Card>

          {/* Personal Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {personalDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-professional transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                      <p className="font-semibold text-foreground">{detail.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Availability */}
          <Card className="mt-8 border-2 border-primary shadow-professional">
            <CardContent className="p-6 text-center">
              <p className="text-lg">
                <span className="font-semibold text-primary">Availability:</span>{" "}
                <span className="text-foreground">Immediately</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
