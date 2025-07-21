import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading">
            I'm{" "}
            <span className="text-gradient">Krishna Kumar</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground">
            <span className="inline-block">an ML Engineer</span>
            <span className="mx-2">•</span>
            <span className="inline-block">Data Scientist</span>
            <span className="mx-2">•</span>
            <span className="inline-block">AI Developer</span>
            <span className="mx-2">•</span>
            <span className="inline-block">AI Full‑Stack Developer</span>
          </div>

          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-muted-foreground leading-relaxed">
            Building intelligent, scalable systems with LLMs, RAG, and multi‑agent frameworks. 
            Passionate about turning cutting‑edge research into real‑world solutions—exploring 
            opportunities at{" "}
            <span className="text-accent font-semibold">SproutsAI</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="hover-glow hover:scale-105 transition-spring text-lg px-8 py-6"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-primary transition-smooth" 
          onClick={() => scrollToSection("experience")}
        />
      </div>
    </section>
  );
};

export default Hero;