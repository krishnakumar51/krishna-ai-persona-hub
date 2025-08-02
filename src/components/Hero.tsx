import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        </motion.div>
        
        {/* Enhanced Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'w-2 h-2 bg-primary/40' : 
                i % 3 === 1 ? 'w-1 h-1 bg-accent/30' : 
                'w-1.5 h-1.5 bg-primary/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-4 animate-glow" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            I'm{" "}
            <span className="text-gradient hover-tilt inline-block relative">
              Krishna Kumar
              <motion.div
                className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground min-h-[40px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "ML Engineer",
                2000,
                "Data Scientist", 
                2000,
                "AI Developer",
                2000,
                "AI Full‑Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.div>

          {/* Profile Summary */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="glassmorphism p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm shadow-glow"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(var(--primary-rgb), 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-lg leading-relaxed text-foreground/90 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                I'm an <span className="text-gradient font-semibold">AI Developer</span> passionate about architecting intelligent, 
                production-grade systems that drive real-world impact. From designing <span className="text-accent font-medium">LangChain-powered chatbots</span> and 
                retrieval-augmented Q&A engines to building end-to-end <span className="text-primary font-medium">MLOps pipelines</span> with 
                FastAPI, Docker, and Kubernetes, I combine deep ML expertise with scalable backend engineering. 
                My work—whether integrating <span className="text-gradient font-medium">Groq LLMs</span> with Neo4j knowledge graphs or 
                deploying voice-authentication modules—focuses on measurable improvements in accuracy, performance, and reliability. 
                Always learning and iterating, I thrive on turning complex data problems into lean, user-centric solutions. 
                <span className="block mt-4 text-accent font-medium">Feel free to explore my projects below or reach out to collaborate!</span>
              </motion.p>
              
              {/* Subtle accent line */}
              <motion.div 
                className="w-32 h-1 bg-gradient-primary rounded-full mx-auto mt-6"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="will-change-transform"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-primary border-0 hover:shadow-glow text-lg px-8 py-6 font-semibold transition-bounce"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10">View My Projects</span>
                <motion.div
                  className="absolute inset-0 bg-white/15"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-accent opacity-0"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="will-change-transform"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glassmorphism hover:bg-white/10 border-primary/30 text-lg px-8 py-6 font-semibold hover:shadow-accent-glow transition-bounce"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-smooth" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;