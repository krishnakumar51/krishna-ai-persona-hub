import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"deployed" | "significant" | "ml-dl" | "development">("deployed");

  const categories = [
    { id: "deployed", label: "Deployed", count: projects.filter(p => p.category === "deployed").length },
    { id: "significant", label: "Best Projects", count: projects.filter(p => p.category === "significant").length },
    { id: "ml-dl", label: "ML & DL", count: projects.filter(p => p.category === "ml-dl").length },
    { id: "development", label: "Development", count: projects.filter(p => p.category === "development").length },
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
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Code. Create. Evolve.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className="transition-colors"
            >
              {cat.label} ({cat.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <ProjectCard
                title={proj.title}
                goal={proj.goal}
                development={proj.development}
                features={proj.features}
                tags={proj.tags}
                image={proj.image}
                onClick={() => handleProjectClick(proj)}
                website={proj.website}
                github={proj.github}
              />
            </motion.div>
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
