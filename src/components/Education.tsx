import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Technology",
      performance: "CGPA: 7.98",
      period: "2021–2025",
      icon: GraduationCap
    },
    {
      institution: "Sainik School Kalikiri",
      degree: "Intermediate", 
      performance: "95.8%",
      period: "2020–2021",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Academic Background</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation in technology and engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border/50 bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-2">{edu.degree}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{edu.performance}</span>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                      </div>
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

export default Education;
