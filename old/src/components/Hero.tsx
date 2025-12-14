import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading text-foreground">
            I'm{" "}
            <span className="text-gradient">Krishna Kumar</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground min-h-[40px] flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "AI/ML Engineer",
                2500,
                "Full-Stack Developer", 
                2500,
                "MLOps Specialist",
                2500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              className="text-primary"
            />
          </div>

          {/* Profile Summary */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/50">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-left md:text-center">
                I'm an <span className="text-primary font-medium">AI Developer</span> passionate about architecting intelligent, 
                production-grade systems that drive real-world impact. From designing <span className="text-accent font-medium">LangChain-powered chatbots</span> and 
                retrieval-augmented Q&A engines to building end-to-end <span className="text-primary font-medium">MLOps pipelines</span> with 
                FastAPI, Docker, and Kubernetes, I combine deep ML expertise with scalable backend engineering.
              </p>
              
              <p className="text-center mt-4 text-accent font-medium">
                Looking forward to creating great things that make a meaningful impact!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted text-lg px-8 py-6 font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
