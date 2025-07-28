import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Gallery = () => {
  // Gallery items with actual photos
  const galleryItems = [
    {
      id: 1,
      type: "portrait",
      title: "Professional Portrait",
      image: "/lovable-uploads/51a00b6c-6d72-40e8-b62d-e8795c6dd72b.png",
      description: "Professional headshot"
    },
    {
      id: 2,
      type: "speaking",
      title: "Speaking Engagement",
      image: "/lovable-uploads/1cdc70a1-fe37-4cf8-9db1-851f3ebb2940.png",
      description: "Public speaking at an event"
    },
    {
      id: 3,
      type: "results",
      title: "Academic Excellence",
      image: "/lovable-uploads/82bf8802-76fe-45d8-a8db-f542a0f3eacd.png",
      description: "Academic achievements board"
    },
    {
      id: 4,
      type: "award",
      title: "Award Ceremony",
      image: "/lovable-uploads/e2a1e901-36d9-48d9-9e7c-45380ac4584d.png",
      description: "Receiving recognition"
    },
    {
      id: 5,
      type: "award",
      title: "Excellence Award",
      image: "/lovable-uploads/0207fb78-b39c-4ea3-89ed-ec0ef2cb92c9.png",
      description: "Achievement ceremony"
    },
    {
      id: 6,
      type: "award",
      title: "Recognition Event",
      image: "/lovable-uploads/6d892ec5-fbe8-451e-867b-efd0b6299a48.png",
      description: "Award presentation"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading"
          >
            Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            Professional moments, achievements, and speaking engagements
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item, index) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="bg-gradient-card border-muted/20 shadow-card hover-lift overflow-hidden group cursor-pointer h-[400px]">
                      <div className="relative w-full h-full">
                        {/* Image */}
                        <div className="absolute inset-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback for broken images
                              e.currentTarget.style.display = 'none';
                              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                          {/* Fallback content */}
                          <div className="hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                            <div className="text-6xl mb-4">
                              {item.type === "portrait" ? "👤" : 
                               item.type === "speaking" ? "🎤" :
                               item.type === "results" ? "📊" : "🏆"}
                            </div>
                            <p className="text-muted-foreground text-center px-4 font-medium">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-white/80">{item.description}</p>
                        </div>

                        {/* Glowing border effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-lg" />
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-muted/20 hover:bg-primary/20 hover:border-primary/30" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-muted/20 hover:bg-primary/20 hover:border-primary/30" />
          </Carousel>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {galleryItems.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary/50 transition-colors duration-200 cursor-pointer"
            />
          ))}
        </div>

        {/* First Image Slider - Right to Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-slide-right-to-left">
            {/* First set of 5 images */}
            {[
              "/lovable-uploads/c56d313c-0d3f-497b-9f6d-98257f78280c.png",
              "/lovable-uploads/30ca57ad-07a1-4585-a098-346517c1e47b.png", 
              "/lovable-uploads/dd70724d-c549-427b-a720-60149b920d16.png",
              "/lovable-uploads/bc94b9eb-b4d9-4d54-928f-df972c87f746.png",
              "/lovable-uploads/ab779623-fd6b-4066-84c1-459f41f713f2.png"
            ].concat([
              "/lovable-uploads/c56d313c-0d3f-497b-9f6d-98257f78280c.png",
              "/lovable-uploads/30ca57ad-07a1-4585-a098-346517c1e47b.png", 
              "/lovable-uploads/dd70724d-c549-427b-a720-60149b920d16.png",
              "/lovable-uploads/bc94b9eb-b4d9-4d54-928f-df972c87f746.png",
              "/lovable-uploads/ab779623-fd6b-4066-84c1-459f41f713f2.png"
            ]).map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 mx-4 rounded-lg overflow-hidden shadow-card hover-lift group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Image Slider - Left to Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 overflow-hidden"
        >
          <div className="flex animate-slide-left-to-right">
            {/* Second set of 5 images */}
            {[
              "/lovable-uploads/46672a7a-31f9-468c-8a48-f21f58ab22e2.png",
              "/lovable-uploads/50189081-aab8-4e69-8e8f-7ec4e9adc448.png",
              "/lovable-uploads/4dbd42ba-6891-4495-a465-123e57d75edc.png",
              "/lovable-uploads/e3e82d0a-f545-49ac-afc7-9f8dfe040e0b.png",
              "/lovable-uploads/246706fb-40b2-4200-b7e9-138e78bfa1b1.png"
            ].concat([
              "/lovable-uploads/46672a7a-31f9-468c-8a48-f21f58ab22e2.png",
              "/lovable-uploads/50189081-aab8-4e69-8e8f-7ec4e9adc448.png",
              "/lovable-uploads/4dbd42ba-6891-4495-a465-123e57d75edc.png",
              "/lovable-uploads/e3e82d0a-f545-49ac-afc7-9f8dfe040e0b.png",
              "/lovable-uploads/246706fb-40b2-4200-b7e9-138e78bfa1b1.png"
            ]).map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 mx-4 rounded-lg overflow-hidden shadow-card hover-lift group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 6}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic">
            A visual journey through achievements, speaking engagements, and professional milestones
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;