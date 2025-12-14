import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      title: "AI/ML Intern",
      company: "SearchLook",
      location: "Mexico, Remote",
      period: "Aug 2025 – Present",
      achievements: [
        "Built automated frontend for WebScraper AI platform using React, Vite and Tailwind",
        "Integrated FastAPI backend with MongoDB enabling real-time API communication",
        "Developed automation modules using Selenium, Playwright and Appium for web and Android",
        "Automated IMSS workflows and Outlook account creation, reducing manual effort by 70%",
        "Contributed to PlanGraph agentic automation framework for multi-step reasoning workflows",
        "Designed intelligent agents capable of dynamic, adaptive multi-stage navigation",
        "Building agentic AI browser for autonomous search, extraction and workflow execution",
        "Developing mobile autonomous scraper using OCR, reasoning and Android automation"
      ],
      technologies: ["React", "Vite", "FastAPI", "MongoDB", "Selenium", "Playwright", "Appium"]
    },
    {
      title: "AI Developer",
      company: "Intellisense Technology",
      location: "India",
      period: "Aug 2024 – Nov 2024",
      achievements: [
        "Built enterprise chatbot using LangChain improving accuracy by 40% and reducing latency by 25%",
        "Improved inference throughput by 60% via Groq LLM and Llama-3 integration",
        "Reduced hallucination rate from 5% to 2% using Neo4j Knowledge Graph for 100+ documents",
        "Built AI services for SafeGuard 360 processing 1000+ daily events with 99.7% uptime",
        "Implemented voice authentication (ECAPA-TDNN + LSTM) with 95.6% accuracy",
        "Delivered sub-200ms FastAPI REST APIs supporting concurrent users",
        "Containerized backend using Docker and integrated Flutter deployments reducing release time by 70%"
      ],
      technologies: ["LangChain", "Neo4j", "Groq LLM", "Llama-3", "FastAPI", "Docker", "Flutter"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building AI-powered solutions with measurable business impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {jobs.map((job, jobIndex) => (
            <motion.div
              key={jobIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: jobIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/50 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-primary">{job.company}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
