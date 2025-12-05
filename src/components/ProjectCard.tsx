import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  goal: string;
  development: string;
  features: string[];
  tags: string[];
  onClick: () => void;
  image?: string;
  website?: string;
  github?: string;
}

const ProjectCard = ({
  title,
  goal,
  tags,
  onClick,
  image,
  website,
  github,
}: ProjectCardProps) => {
  return (
    <Card
      className="relative border border-border/50 bg-card cursor-pointer group h-full overflow-hidden hover:border-primary/30 transition-colors duration-300"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
        
        {/* Link icons overlay */}
        {(website || github) && (
          <div
            className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 rounded-full hover:bg-primary/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-foreground" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Github className="w-4 h-4 text-foreground" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Header */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {goal}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
