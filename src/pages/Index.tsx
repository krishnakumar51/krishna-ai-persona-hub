import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Simple lazy loading without external dependencies
const LazyComponent = ({ importFn, fallback }: { importFn: () => Promise<{ default: React.ComponentType<any> }>, fallback: React.ReactNode }) => {
  const Component = React.lazy(importFn);
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero loads immediately */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Simplified lazy loaded sections */}
      <div id="experience" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Experience")}
          fallback={<LoadingSkeleton type="card" count={3} />}
        />
      </div>
      
      <div id="education" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Education")}
          fallback={<LoadingSkeleton type="card" count={2} />}
        />
      </div>
      
      <div id="projects" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Projects")}
          fallback={<LoadingSkeleton type="projects" count={6} />}
        />
      </div>
      
      <div id="skills" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Skills")}
          fallback={<LoadingSkeleton type="skills" count={18} />}
        />
      </div>
      
      <div id="certifications" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Certifications")}
          fallback={<LoadingSkeleton type="card" count={4} />}
        />
      </div>
      
      <div id="gallery" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Gallery")}
          fallback={<LoadingSkeleton type="gallery" count={8} />}
        />
      </div>
      
      <div id="contact" className="section-container">
        <LazyComponent 
          importFn={() => import("@/components/Contact")}
          fallback={<LoadingSkeleton type="card" count={1} />}
        />
      </div>
    </div>
  );
};

export default Index;
