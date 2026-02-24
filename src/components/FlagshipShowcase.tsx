import { motion } from "framer-motion";
import { ExternalLink, Server, Workflow, BarChart3, Container, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  { icon: Zap, text: "Deterministic evaluation framework scoring model outputs against validated solvers" },
  { icon: Workflow, text: "Async execution architecture using Celery + Redis for large-scale benchmarking" },
  { icon: Server, text: "Provider-agnostic model interface supporting multiple LLM APIs" },
  { icon: BarChart3, text: "Structured analytics capturing latency, optimality, and reliability metrics" },
  { icon: Container, text: "Containerized deployment with CI/CD for reproducible experimentation" },
];

const FlagshipShowcase = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary text-xs tracking-widest uppercase px-4 py-1">
            Currently Building
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Flagship Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden"
        >
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                AI Arena
              </h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs">
                  Production System
                </Badge>
                <a
                  href="https://ai-arena-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              AI Arena is a full-stack evaluation infrastructure designed to test, compare, and analyze large language models
              in controlled environments — replacing static benchmarks with structured scoring of model behavior, async batch
              evaluations, and reproducible experimentation workflows for real-world AI validation.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "React", "TypeScript", "CI/CD"].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Capabilities */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Key Capabilities
              </h4>
              <div className="grid gap-3">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary flex-shrink-0">
                      <cap.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{cap.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipShowcase;
