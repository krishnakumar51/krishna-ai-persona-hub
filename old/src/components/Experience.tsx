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
      title: "AI Engineer",
      company: "Lucky Communities",
      location: "United States, Remote",
      period: "Oct 2025 – Present",
      achievements: [
        "Implemented internal RAG system using n8n with a React + Vite frontend for semantic search over shared drives",
        "Orchestrated business workflows with Zapier + n8n across Google Workspace, Notion, Slack, and Asana",
        "Engineered scalable document ingestion pipelines from Rent Manager to Shared Drive",
        "Created low-code internal tools using AppSheet for process automation",
        "Partnered with operations teams to deliver AI-first automation solutions"
      ],
      technologies: ["n8n", "React", "Vite", "Zapier", "AppSheet", "RAG"]
    },
    {
      title: "AI/ML Engineer",
      company: "SearchLook",
      location: "Mexico, Remote",
      period: "Aug 2025 – Nov 2025",
      achievements: [
        "Structured a front-end for WebScraper AI using React, Vite, and Tailwind, improving UI responsiveness",
        "Integrated a scalable FastAPI backend with MongoDB, enabling real-time data sync and high-throughput API operations",
        "Improved cross-platform automation modules using Selenium, Playwright, and Appium for large-scale web and Android task execution",
        "Streamlined IMSS app workflows and Outlook account creation, reducing manual operational effort by over 70%",
        "Contributed to PlanGraph, an agentic automation framework enabling multi-step reasoning and autonomous browser workflows",
        "Designed intelligent agents capable of dynamic, multi-stage web navigation and adaptive task execution",
        "Collaborating on a fully agentic AI browsing system for autonomous web navigation, extraction, and workflow completion",
        "Building an AI-driven mobile autonomous scraper combining automated reasoning, OCR, and Android UI understanding"
      ],
      technologies: ["React", "Vite", "FastAPI", "MongoDB", "Selenium", "Playwright", "Appium"]
    },
    {
      title: "AI Developer",
      company: "Intellisense Technology",
      location: "Jalandhar, Punjab",
      period: "Aug 2024 – Nov 2024",
      achievements: [
        "Architected a chatbot using LangChain, improving resolution accuracy by 40% and reducing latency by 25%",
        "Enhanced inference throughput by 60% using Groq LLM + Llama-3 integration",
        "Reduced hallucination rate from 5% → 2% with a Neo4j Knowledge Graph powering 100+ document queries",
        "Built AI services for SafeGuard 360, handling 1000+ daily events with 99.7% uptime",
        "Enhanced a voice authentication system (ECAPA-TDNN + LSTM), achieving 95.6% accuracy on wake-word audio",
        "Deployed low-latency REST APIs supporting concurrent user sessions using FastAPI",
        "Containerized backend with Docker and integrated Flutter frontend, reducing deployment time by 70%"
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
