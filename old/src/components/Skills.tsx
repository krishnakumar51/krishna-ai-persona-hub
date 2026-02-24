import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cloud, Wrench, Zap, Server, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "TypeScript", "Dart"],
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "Next.js", "Vite", "Flutter", "Streamlit", "Gradio"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["FastAPI", "Flask", "Node.js", "Supabase", "Firebase"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "FAISS", "Pinecone", "Neo4j"],
    },
    {
      title: "AI/ML",
      icon: Zap,
      skills: ["LangGraph", "LangChain", "Transformers", "RAG", "YOLO", "LSTM", "HuggingFace", "Groq LLM"],
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CircleCI"],
    },
    {
      title: "MLOps",
      icon: Wrench,
      skills: ["MLflow", "DVC", "DagsHub", "n8n"],
    },
    {
      title: "Monitoring",
      icon: Activity,
      skills: ["Grafana", "Prometheus", "Power BI"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern tech stack for building scalable AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/50 bg-card hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
