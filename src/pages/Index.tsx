import { motion, Variants } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import CVSection from "@/components/CVSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Index = () => {
  const animations = [fadeInUp, fadeInLeft, fadeInRight, scaleIn, fadeInUp, fadeInRight];

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[0]}
      >
        <About />
      </motion.section>
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[1]}
      >
        <Experience />
      </motion.section>
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[2]}
      >
        <Projects />
      </motion.section>
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[3]}
      >
        <Skills />
      </motion.section>
      <motion.section
        id="certificates"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[4]}
      >
        <Certificates />
      </motion.section>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations[5]}
      >
        <Contact />
      </motion.section>
      <CVSection />
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;
