import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Medal, BookOpen, Globe } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Mastering Generative AI",
      provider: "iNeuron",
      icon: Award,
      type: "AI/ML"
    },
    {
      title: "Data Analytics with Python",
      provider: "NPTEL",
      badge: "Silver",
      icon: Trophy,
      type: "Data Science"
    },
    {
      title: "Intro to Data Science",
      provider: "Coursera",
      icon: BookOpen,
      type: "Data Science"
    },
    {
      title: "Advanced ML",
      provider: "Coursera",
      icon: Medal,
      type: "Machine Learning"
    },
    {
      title: "Duolingo English Proficiency",
      provider: "Duolingo",
      score: "130",
      icon: Globe,
      type: "Language"
    }
  ];

  const publications = [
    {
      title: "ML‑Based Sentiment Analyzer",
      publisher: "IEEE",
      link: "https://ieeexplore.ieee.org/document/10532857",
      description: "Published research on machine learning approaches to sentiment analysis"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="bg-gradient-card border-muted/20 shadow-card hover-lift group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-smooth">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-primary font-semibold">{cert.provider}</p>
                  {cert.badge && (
                    <Badge variant="outline" className="text-accent border-accent">
                      {cert.badge}
                    </Badge>
                  )}
                  {cert.score && (
                    <p className="text-xl font-bold text-accent">{cert.score}</p>
                  )}
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Publications Section */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient font-heading">
            Publications
          </h3>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-gradient-card border-muted/20 shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {pub.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{pub.publisher}</Badge>
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-smooth font-medium"
                        >
                          View Publication →
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;