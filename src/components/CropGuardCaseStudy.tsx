import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sprout, ExternalLink, BookOpen, Target, Package, Shield } from "lucide-react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    icon: BookOpen,
    content: [
      "Agriculture powers human civilization, yet it faces persistent challenges that reduce productivity and threaten food security. Crop Guard is an AI-powered mobile and web prototype built to help farmers make smarter, data-driven decisions in real time.",
      "The prototype addresses pests, soil quality, irrigation issues, and weeds through computer vision, predictive analytics, and IoT data. It is designed for small and commercial farmers, cooperatives, agribusinesses, NGOs, and government agencies focused on rural development.",
    ],
  },
  {
    id: "objectives",
    label: "Objectives",
    icon: Target,
    content: [
      "Deliver real-time, AI-driven insights that help farmers act quickly on pest control, soil health, irrigation, and weed management.",
      "Improve crop yields while reducing waste of water, fertilizers, and pesticides through precision agriculture.",
      "Build an intuitive mobile and web platform that detects issues early and suggests actionable, region-specific solutions.",
      "Leverage AI, IoT, and satellite data to automate monitoring with minimal manual intervention.",
      "Ensure accessibility for farmers with varying technical expertise and farm sizes, and promote sustainable, soil-preserving practices.",
    ],
  },
  {
    id: "deliverables",
    label: "Deliverables",
    icon: Package,
    content: [
      "A fully interactive Figma prototype covering pest alerts, soil diagnostics, irrigation dashboards, and crop cards.",
      "Reusable component library for buttons, forms, alerts, and cards to ensure a consistent user experience.",
      "User flows designed for low-connectivity environments and users with limited technical experience.",
      "Built-in support for future IoT devices, soil sensors, irrigation systems, and report exports for government or NGO platforms.",
    ],
  },
  {
    id: "ethics",
    label: "Ethics & Bias",
    icon: Shield,
    content: [
      "Farmers retain ownership of their data, with transparent policies on collection, storage, and use.",
      "The design avoids digital exclusion by remaining usable for small farmers with low-tech devices and varying literacy levels.",
      "Recommendations discourage overuse of chemicals or water, and include clear explanations of how they are generated.",
      "Mitigation strategies include diverse training datasets, local farmer and agronomist input, regular model audits, and feedback loops to reduce geographic, algorithmic, and economic bias.",
    ],
  },
];

const tags = [
  "AI",
  "Computer Vision",
  "IoT",
  "Predictive Analytics",
  "Figma Prototype",
  "Mobile & Web",
];

interface CropGuardCaseStudyProps {
  trigger: React.ReactNode;
}

const CropGuardCaseStudy = ({ trigger }: CropGuardCaseStudyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden border-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-xl text-primary-foreground">Crop Guard</DialogTitle>
              <DialogDescription className="text-primary-foreground/80 text-sm">
                AI-Powered Agricultural Prototype
              </DialogDescription>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary-foreground/15 text-primary-foreground border-0 hover:bg-primary-foreground/25"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="p-6 space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{section.label}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-sm text-foreground/80 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>

        <div className="p-6 pt-4 border-t border-border bg-muted/30">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
          >
            <a
              href="https://www.figma.com/proto/mZHNBBvr6rnES2v2QdohIN/Crop-Guard?node-id=8-16&t=GZI2uFrOtNb0RjjC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=108%3A561&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Figma Prototype <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CropGuardCaseStudy;
