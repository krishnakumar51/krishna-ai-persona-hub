import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

interface Project {
  title: string;
  goal: string;
  development: string;
  features: string[];
  tags: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-muted/20">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl md:text-3xl text-gradient font-heading pr-8">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Goal Section */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Goal</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.goal}
            </p>
          </div>

          {/* Development Section */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Development Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.development}
            </p>
          </div>

          {/* Key Features Section */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Key Features</h3>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-smooth" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-smooth leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Technologies & Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-smooth">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;