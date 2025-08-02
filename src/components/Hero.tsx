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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated grid-electric">
      {/* Luxury Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/85 to-background/98" />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
          <div className="absolute inset-0 bg-gradient-electric opacity-10" />
        </motion.div>
        
        {/* Premium Electric Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0 ? 'w-3 h-3 bg-primary shadow-electric' : 
                i % 4 === 1 ? 'w-2 h-2 bg-accent shadow-accent-glow' : 
                i % 4 === 2 ? 'w-1.5 h-1.5 bg-accent-secondary shadow-glow' :
                'w-1 h-1 bg-primary-glow shadow-glow'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-15, 15, -15],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Luxury Glow Orbs */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-40 h-40 rounded-full opacity-20"
              style={{
                background: i === 0 ? 'var(--gradient-primary)' : 
                           i === 1 ? 'var(--gradient-accent)' : 
                           'var(--gradient-electric)',
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 2,
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
            className="mb-8"
          >
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-6 animate-electric-glow" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-display will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            I'm{" "}
            <span className="text-electric hover-3d inline-block relative">
              Krishna Kumar
              <motion.div
                className="absolute -inset-2 bg-gradient-electric opacity-30 blur-2xl rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl mb-12 min-h-[50px] flex items-center justify-center font-heading"
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
              className="text-electric font-semibold"
            />
          </motion.div>

          {/* Premium Profile Summary */}
          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="glassmorphism-card p-8 md:p-10 rounded-3xl border border-primary/30 shadow-electric morph-shape"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "var(--shadow-electric)"
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground/95 text-left md:text-justify font-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                I'm an <span className="text-electric font-bold">AI Developer</span> passionate about architecting intelligent, 
                production-grade systems that drive real-world impact. From designing <span className="text-accent font-semibold">LangChain-powered chatbots</span> and 
                retrieval-augmented Q&A engines to building end-to-end <span className="text-primary font-semibold">MLOps pipelines</span> with 
                FastAPI, Docker, and Kubernetes, I combine deep ML expertise with scalable backend engineering. 
                My work—whether integrating <span className="text-electric font-semibold">Groq LLMs</span> with Neo4j knowledge graphs or 
                deploying voice-authentication modules—focuses on measurable improvements in accuracy, performance, and reliability. 
                Always learning and iterating, I thrive on turning complex data problems into lean, user-centric solutions.
              </motion.p>
              
              <motion.p
                className="text-center mt-6 text-accent font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Looking forward to creating great things that make a meaningful impact in the world!
              </motion.p>
              
              {/* Electric accent line */}
              <motion.div 
                className="w-32 h-1 bg-gradient-electric rounded-full mx-auto mt-6 shadow-neon"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 128, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="will-change-transform cursor-glow"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-electric border-0 hover:shadow-electric text-xl px-10 py-7 font-bold font-heading transition-electric rounded-2xl"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 text-background">View My Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-neon opacity-0"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="will-change-transform cursor-glow"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glassmorphism-card hover:bg-primary/10 border-2 border-accent/50 text-xl px-10 py-7 font-bold font-heading hover:shadow-electric transition-electric rounded-2xl hover:border-accent"
                onClick={() => scrollToSection("contact")}
              >
                <span className="text-electric">Get In Touch</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
          onClick={() => scrollToSection("experience")}
        >
          <ChevronDown className="w-10 h-10 text-accent group-hover:text-primary transition-electric shadow-accent-glow rounded-full p-1" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;