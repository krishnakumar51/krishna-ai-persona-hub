import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89684 50453",
      href: "tel:+918968450453"
    },
    {
      icon: Mail,
      label: "Email",
      value: "godkrishnasskal@gmail.com",
      href: "mailto:godkrishnasskal@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/g51‑krishna",
      href: "https://linkedin.com/in/g51-krishna"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/krishnakumar51",
      href: "https://github.com/krishnakumar51"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss AI solutions and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="bg-gradient-card border-muted/20 shadow-card hover-lift group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {contact.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary transition-smooth p-0 h-auto"
                    asChild
                  >
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center gap-2"
                    >
                      {contact.value}
                      {contact.href.startsWith('http') && (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-card border-muted/20 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Currently Exploring Opportunities
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm actively seeking opportunities in AI/ML engineering, data science, and full-stack development. 
                Particularly interested in roles at innovative companies like SproutsAI where I can contribute to 
                cutting-edge AI solutions.
              </p>
              <Button 
                size="lg"
                className="hover-glow hover:scale-105 transition-spring"
                asChild
              >
                <a href="mailto:godkrishnasskal@gmail.com">
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;