import { Card } from "@/components/ui/card";
import { ImageIcon, Camera } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items - ready for future images
  const galleryPlaceholders = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    type: index % 2 === 0 ? "speaking" : "general",
    title: index % 2 === 0 ? "Speaking Engagement" : "Professional Photo"
  }));

  return (
    <section id="gallery" className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional moments and speaking engagements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryPlaceholders.map((item) => (
            <Card 
              key={item.id} 
              className="bg-gradient-card border-muted/20 shadow-card hover-lift aspect-square overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth">
                <div className="mb-4 group-hover:scale-110 transition-smooth">
                  {item.type === "speaking" ? (
                    <Camera className="w-16 h-16 text-muted-foreground/50" />
                  ) : (
                    <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
                  )}
                </div>
                <p className="text-muted-foreground text-center px-4">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Coming Soon
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            Gallery section ready for future images and speaking engagement photos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;