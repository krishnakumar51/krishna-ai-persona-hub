import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  goal: string;
  development: string;
  features: string[];
  tags: string[];
  onClick: () => void;
}

const ProjectCard = ({ title, goal, development, features, tags, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="bg-gradient-card border-muted/20 shadow-card hover-lift cursor-pointer group h-full overflow-hidden"
      onClick={onClick}
    >
      {/* Placeholder thumbnail area */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-smooth" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
          <ExternalLink className="w-6 h-6 text-primary" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-muted/20 group-hover:text-muted/30 transition-smooth">
            AI
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {goal}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;