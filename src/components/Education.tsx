import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Chandigarh University",
      degree: "B.Tech",
      performance: "CGPA 8.05",
      period: "2021–2025",
      icon: GraduationCap
    },
    {
      institution: "Sainik School Kalikiri",
      degree: "Intermediate", 
      performance: "95.8%",
      period: "2020–2021",
      icon: Award
    },
    {
      institution: "Sainik School Kalikiri",
      degree: "Matriculation",
      performance: "95.6%", 
      period: "2018–2020",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation in technology and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card key={index} className="bg-gradient-card border-muted/20 shadow-card hover-lift group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {edu.institution}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-lg font-semibold text-accent">{edu.degree}</p>
                  <p className="text-2xl font-bold text-primary">{edu.performance}</p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;