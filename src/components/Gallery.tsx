import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Professional Portrait",
      image: "/lovable-uploads/51a00b6c-6d72-40e8-b62d-e8795c6dd72b.png",
      description: "Professional headshot"
    },
    {
      id: 2,
      title: "Speaking Engagement",
      image: "/lovable-uploads/1cdc70a1-fe37-4cf8-9db1-851f3ebb2940.png",
      description: "Public speaking at an event"
    },
    {
      id: 3,
      title: "Academic Excellence",
      image: "/lovable-uploads/82bf8802-76fe-45d8-a8db-f542a0f3eacd.png",
      description: "Academic achievements board"
    },
    {
      id: 4,
      title: "Award Ceremony",
      image: "/lovable-uploads/e2a1e901-36d9-48d9-9e7c-45380ac4584d.png",
      description: "Receiving recognition"
    },
    {
      id: 5,
      title: "Excellence Award",
      image: "/lovable-uploads/0207fb78-b39c-4ea3-89ed-ec0ef2cb92c9.png",
      description: "Achievement ceremony"
    },
    {
      id: 6,
      title: "Recognition Event",
      image: "/lovable-uploads/6d892ec5-fbe8-451e-867b-efd0b6299a48.png",
      description: "Award presentation"
    }
  ];

  const sliderImages1 = [
    "/lovable-uploads/c56d313c-0d3f-497b-9f6d-98257f78280c.png",
    "/lovable-uploads/30ca57ad-07a1-4585-a098-346517c1e47b.png", 
    "/lovable-uploads/dd70724d-c549-427b-a720-60149b920d16.png",
    "/lovable-uploads/bc94b9eb-b4d9-4d54-928f-df972c87f746.png",
    "/lovable-uploads/ab779623-fd6b-4066-84c1-459f41f713f2.png",
    "/lovable-uploads/2/1.jpg",
    "/lovable-uploads/2/2.jpg",
    "/lovable-uploads/2/3.jpg",
    "/lovable-uploads/2/4.jpg",
    "/lovable-uploads/2/5.jpg",
    "/lovable-uploads/2/6.jpg",
    "/lovable-uploads/2/7.jpg",
    "/lovable-uploads/2/8.jpg",
  ];

  const sliderImages2 = [
    "/lovable-uploads/46672a7a-31f9-468c-8a48-f21f58ab22e2.png",
    "/lovable-uploads/50189081-aab8-4e69-8e8f-7ec4e9adc448.png",
    "/lovable-uploads/4dbd42ba-6891-4495-a465-123e57d75edc.png",
    "/lovable-uploads/e3e82d0a-f545-49ac-afc7-9f8dfe040e0b.png",
    "/lovable-uploads/246706fb-40b2-4200-b7e9-138e78bfa1b1.png",
    "/lovable-uploads/2/9.jpg",
    "/lovable-uploads/2/10.jpg",
    "/lovable-uploads/2/11.jpg",
    "/lovable-uploads/2/12.jpg",
    "/lovable-uploads/2/13.jpg",
    "/lovable-uploads/2/14.jpg",
    "/lovable-uploads/2/15.jpg",
    "/lovable-uploads/2/16.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional moments, achievements, and speaking engagements
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border/50 bg-card overflow-hidden group h-[400px]">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-background/90 border-border hover:bg-muted" />
            <CarouselNext className="right-4 bg-background/90 border-border hover:bg-muted" />
          </Carousel>
        </motion.div>

        {/* Image Slider 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-scroll-left">
            {[...sliderImages1, ...sliderImages1].map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 mx-2 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Slider 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 overflow-hidden"
        >
          <div className="flex animate-scroll-right">
            {[...sliderImages2, ...sliderImages2].map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 mx-2 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-muted-foreground italic"
        >
          A visual journey through achievements and professional milestones
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;
