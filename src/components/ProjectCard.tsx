import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-[2px]" />
        
        {/* Thumbnail area with particles */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-smooth" />
          
          {/* Floating particles on hover */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ExternalLink className="w-6 h-6 text-primary drop-shadow-glow" />
            </motion.div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-6xl font-bold text-muted/20 group-hover:text-muted/30 transition-smooth"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-16 h-16" />
            </motion.div>
          </div>
        </div>

        <CardHeader className="relative z-10">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-muted-foreground/90 transition-smooth">
            {goal}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
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
      </Card>
    </motion.div>
  );
};

export default ProjectCard;