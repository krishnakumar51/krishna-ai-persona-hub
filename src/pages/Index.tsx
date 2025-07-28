import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Lazy load heavy components
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero loads immediately */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Lazy loaded sections with beautiful loading states */}
      <LazySection 
        component={() => import("@/components/Experience")}
        id="experience"
        skeletonType="card"
        skeletonCount={3}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Education")}
        id="education"
        skeletonType="card"
        skeletonCount={2}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Projects")}
        id="projects"
        skeletonType="projects"
        skeletonCount={6}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Skills")}
        id="skills"
        skeletonType="skills"
        skeletonCount={18}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Certifications")}
        id="certifications"
        skeletonType="card"
        skeletonCount={4}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Gallery")}
        id="gallery"
        skeletonType="gallery"
        skeletonCount={8}
        className="section-container"
      />
      
      <LazySection 
        component={() => import("@/components/Contact")}
        id="contact"
        skeletonType="card"
        skeletonCount={1}
        className="section-container"
      />
    </div>
  );
};

export default Index;
