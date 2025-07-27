// ─── src/components/Projects.tsx ───

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"deployed" | "significant" | "ml-dl" | "development">("deployed");

  const categories = [
    { id: "deployed", label: "Deployed Projects", count: projects.filter(p => p.category === "deployed").length },
    { id: "significant", label: "Best Projects",     count: projects.filter(p => p.category === "significant").length },
    { id: "ml-dl",      label: "ML & DL",            count: projects.filter(p => p.category === "ml-dl").length },
    { id: "development",label: "Development",        count: projects.filter(p => p.category === "development").length },
  ];

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">Projects</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-wide md:text-2xl lg:text-3xl mb-4">
            Code. Create. Evolve. 🌱🧠
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id as any)}
              className="hover-lift"
            >
              {cat.label} ({cat.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              goal={proj.goal}
              development={proj.development}
              features={proj.features}
              tags={proj.tags}
              image={proj.image}
              onClick={() => handleProjectClick(proj)}
              website={proj.website}  // ← passed down
              github={proj.github}    // ← passed down
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;
