import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const achievements = [
    "Architected a customer support assistant using LangChain and LLMs, improving resolution accuracy by 40%",
    "Enhanced inference performance by 60% via Groq LLM integration and optimized I/O flow",
    "Reduced hallucination rate from 5% to 2% by implementing a Neo4j Knowledge Graph in place of FAISS",
    "Engineered AI infrastructure for SafeGuard 360 to handle over 10K daily user events in real time",
    "Designed a voice authentication module (ECAPA-TDNN + LSTM) achieving 95.6%+ accuracy on wake-word samples",
    "Released REST APIs with FastAPI, supporting concurrent user sessions",
    "Containerized and shipped the backend to production via Docker, with frontend integration in Flutter"
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Briefcase className="w-12 h-12 text-accent mx-auto" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building next-generation AI solutions with measurable impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative bg-gradient-card border-muted/20 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CardTitle className="text-2xl md:text-3xl text-foreground flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  ML Engineer & AI Developer
                </CardTitle>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {["LangChain", "LLMs", "Neo4j", "FastAPI", "Docker", "Flutter"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + (index * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="hover:bg-primary/20 hover:text-primary transition-smooth cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-muted/5 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + (index * 0.1)
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    </motion.div>
                    
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-smooth leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;