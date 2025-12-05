// ─── src/components/ProjectModal.tsx ───

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink,Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || project === null) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header image */}
        {/* {project.image && (
          <div className="h-48 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
        )} */}

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Goal & Development */}
          <section className="mt-4 space-y-4">
            <p>
              <span className="font-semibold">🎯 Goal:</span>{" "}
              {project.goal}
            </p>
            <p>
              <span className="font-semibold">⚙️ Development:</span>{" "}
              {project.development}
            </p>
          </section>

          {/* Features as Badges */}
          <section className="mt-6">
            <h3 className="font-medium mb-2">✨ Features:</h3>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat, idx) => (
                <Badge key={idx} className="bg-primary/10 text-primary">
                  {feat}
                </Badge>
              ))}
            </div>
          </section>

          {/* Tags as Badges */}
          {project.tags?.length > 0 && (
            <section className="mt-6">
              <h3 className="font-medium mb-2">🏷️ Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer with Icon Buttons */}
        <DialogFooter className="flex justify-end gap-4 px-6 py-4">
          {project.website && (
            <Button
              asChild
              variant="outline"
              size="sm"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Live Site
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
