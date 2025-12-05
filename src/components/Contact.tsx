import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Github, ExternalLink, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
      value: "linkedin.com/in/g51-krishna",
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
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to discuss AI solutions and opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border/50 bg-card hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          {contact.label}
                        </h3>
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors flex items-center gap-2 truncate"
                        >
                          <span className="truncate">{contact.value}</span>
                          {contact.href.startsWith('http') && (
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          )}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="border border-border/50 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Creating Great Things
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
                I'm passionate about creating innovative solutions that make a meaningful impact. 
                Always exploring new technologies and collaborating to build something remarkable.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                asChild
              >
                <a href="mailto:godkrishnasskal@gmail.com">
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
