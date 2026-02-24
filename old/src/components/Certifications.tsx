import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, BookOpen, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Mastering Generative AI",
      provider: "iNeuron",
      icon: Award,
    },
    {
      title: "Data Analytics with Python",
      provider: "NPTEL",
      badge: "Silver",
      icon: Trophy,
    },
    {
      title: "Advanced Machine Learning",
      provider: "Coursera",
      icon: Award,
    },
    {
      title: "Introduction to Data Science",
      provider: "Coursera",
      icon: BookOpen,
    },
    {
      title: "Duolingo English Test",
      provider: "Score: 130",
      icon: Globe,
    }
  ];

  const publications = [
    {
      title: "ML-Based Sentiment Analyzer",
      publisher: "IEEE",
      link: "https://ieeexplore.ieee.org/document/10532857",
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border/50 bg-card h-full hover:border-accent/30 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.provider}</p>
                    {cert.badge && (
                      <Badge variant="outline" className="mt-2 text-xs text-accent border-accent/30">
                        {cert.badge}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Publications
          </h3>
          {publications.map((pub, index) => (
            <Card key={index} className="border border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{pub.title}</h4>
                      <Badge variant="secondary" className="mt-1">{pub.publisher}</Badge>
                    </div>
                  </div>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    View Publication
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
