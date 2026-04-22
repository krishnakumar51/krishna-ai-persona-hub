import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cloud, Wrench, Zap, Server, Activity, Link, Brain, Cpu, BarChart3, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Dart"],
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Next.js", "Vite", "Flutter", "Streamlit", "Gradio"],
    },
    {
      title: "BaaS & Backend",
      icon: Server,
      skills: ["Supabase", "Puter.js", "Firebase", "FastAPI", "Flask", "Node.js", "Express.js", "Webhook Design", "HTTP API Integration"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Pinecone", "FAISS", "Neo4j", "Astra", "ChromaDB", "Weaviate"],
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["HuggingFace", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "LSTM", "Classification & Regression Models"],
    },
    {
      title: "Generative AI",
      icon: Zap,
      skills: ["LangGraph", "LangChain", "Transformers", "Groq LLM", "Fine-tuning", "RAG", "CrewAI", "Agentic AI", "Claude API (Anthropic)", "Human-in-the-Loop Design"],
    },
    {
      title: "Big Data",
      icon: Cpu,
      skills: ["Apache Kafka", "PySpark"],
    },
    {
      title: "Automation & Integrations",
      icon: Link,
      skills: ["n8n", "Zapier", "OpenPhone", "Cal.com", "Feather (Voice AI)", "Notion"],
    },
    {
      title: "Monitoring & Visualization",
      icon: BarChart3,
      skills: ["Prometheus", "Grafana", "Power BI", "Microsoft Excel"],
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["GitHub", "Postman", "Lovable.ai", "Cursor AI"],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS (SageMaker, EC2, S3, RDS, DynamoDB, Lambda, EKS, CloudFormation, Glue, Kinesis, Redshift, Athena)", "GCP (Compute Engine, BigQuery)", "Docker", "Kubernetes", "GitHub Actions", "CircleCI", "Vercel"],
    },
    {
      title: "Workflow & MLOps",
      icon: Wrench,
      skills: ["Apache Airflow", "Astronomer CLI", "MLflow", "DVC", "DagsHub", "n8n"],
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
