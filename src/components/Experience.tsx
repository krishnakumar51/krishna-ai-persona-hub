import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

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
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building next-generation AI solutions with measurable impact
          </p>
        </div>

        <Card className="bg-gradient-card border-muted/20 shadow-card hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-foreground">
              ML Engineer & AI Developer
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">LangChain</Badge>
              <Badge variant="secondary">LLMs</Badge>
              <Badge variant="secondary">Neo4j</Badge>
              <Badge variant="secondary">FastAPI</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Flutter</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-smooth" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-smooth leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;