import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <MessageCircle className="w-12 h-12 text-accent mx-auto animate-glow" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss AI solutions and opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotateX: 5 }}
              >
                <Card className="relative bg-gradient-card border-muted/20 shadow-card group overflow-hidden hover:shadow-glow transition-all duration-500">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center relative z-10">
                    <motion.div 
                      className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 relative"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                      
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-primary/20 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {contact.label}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary transition-smooth p-0 h-auto group"
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
                            <motion.div
                              animate={{ rotate: [0, 15, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                          )}
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="relative bg-gradient-card border-muted/20 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            
            <CardContent className="p-8 relative z-10">
              <motion.h3 
                className="text-2xl font-bold mb-4 text-gradient"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Currently Exploring Opportunities
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                I'm actively seeking opportunities in AI/ML engineering, data science, and full-stack development. 
                Particularly interested in roles at innovative companies like SproutsAI where I can contribute to 
                cutting-edge AI solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-primary border-0 hover:shadow-glow font-semibold"
                  asChild
                >
                  <a href="mailto:godkrishnasskal@gmail.com">
                    <span className="relative z-10">Start a Conversation</span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;