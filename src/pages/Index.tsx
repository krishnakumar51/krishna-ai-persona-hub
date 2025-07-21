import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
