import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cloud, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Dart"]
    },
    {
      title: "Web & Mobile",
      icon: Globe,
      skills: ["React.js", "Next.js", "Vite", "Flutter", "FastAPI", "Flask", "Node.js", "Express.js", "Puter.js"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQLite", "MongoDB", "Pinecone", "FAISS", "Neo4j", "Astra", "ChromaDB", "Weaviate"]
    },
    {
      title: "AI & ML",
      icon: Zap,
      skills: ["LangGraph", "LangChain", "Groq LLM", "Llama", "Gemini", "GPT", "Fine-tuning", "RAG", "CrewAI", "Agentic AI", "HuggingFace", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Nltk", "LSTM"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CircleCI", "Vercel"]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["GitHub", "DVC", "DagsHub", "MLFlow", "Prometheus", "Grafana", "Power BI", "Postman", "Android Studio", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Zap className="w-12 h-12 text-accent mx-auto animate-glow" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground">
            Modern tech stack for building scalable AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotateY: 5 }}
              >
                <Card className="relative bg-gradient-card border-muted/20 shadow-card group h-full overflow-hidden hover:shadow-glow transition-all duration-500">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center relative z-10">
                    <motion.div 
                      className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                      
                      {/* Pulse ring on hover */}
                      <motion.div
                        className="absolute inset-0 border-2 border-primary/30 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (skillIndex * 0.05),
                            type: "spring",
                            stiffness: 300
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary/20 hover:text-primary hover:shadow-md transition-all duration-300 transform"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
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