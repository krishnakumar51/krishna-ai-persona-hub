import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
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
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-12 text-muted-foreground min-h-[40px] flex items-center justify-center">
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
            />
          </div>

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