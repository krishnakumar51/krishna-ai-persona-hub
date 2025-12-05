// ─── src/components/ProjectCard.tsx ───

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, Sparkles , Github} from "lucide-react";
import { motion } from "framer-motion";

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
  development,
  features,
  tags,
  onClick,
  image,
  website,
  github,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="relative bg-gradient-card border-muted/20 shadow-card cursor-pointer group h-full overflow-hidden hover:shadow-glow transition-all duration-500"
        onClick={onClick}
      >
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-[2px]" />

        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          {image ? (
            <>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-60 group-hover:opacity-40 transition-all duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          )}

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Header */}
        <CardHeader className="relative z-10">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-muted-foreground/90 transition-smooth">
            {goal}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <Badge
                  variant="secondary"
                  className="text-xs hover:bg-primary/20 hover:text-primary transition-smooth cursor-pointer"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Bottom‑right icons container with extra spacing */}
        {(website || github) && (
          <div
            className="absolute bottom-12 right-6 flex items-center gap-2 z-30
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
