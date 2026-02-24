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
  flagship?: boolean;
}

const ProjectCard = ({
  title,
  goal,
  tags,
  onClick,
  image,
  website,
  github,
  flagship,
}: ProjectCardProps) => {
  return (
    <Card
      className={`relative border bg-card cursor-pointer group h-full overflow-hidden transition-all duration-300 ${
        flagship 
          ? "border-primary/40 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.25)] hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.35)]" 
          : "border-border/50 hover:border-primary/30"
      }`}
      onClick={onClick}
    >
      {/* Flagship badge */}
      {flagship && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase">
            Flagship
          </Badge>
        </div>
      )}
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
