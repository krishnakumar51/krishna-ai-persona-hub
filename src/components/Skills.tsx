import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "Dart"]
    },
    {
      title: "Web & Mobile",
      icon: Globe,
      skills: ["FastAPI", "Flask", "Node.js", "React.js", "Flutter"]
    },
    {
      title: "Databases/Vector Stores",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Pinecone", "FAISS", "Neo4j", "Astra", "ChromaDB", "Weaviate"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "GCP"]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "DVC", "MLflow", "DagsHub", "Prometheus", "Grafana", "Postman", "Android Studio", "Power BI"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground">
            Modern tech stack for building scalable AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-gradient-card border-muted/20 shadow-card hover-lift group h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="hover:bg-primary/20 hover:text-primary transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;