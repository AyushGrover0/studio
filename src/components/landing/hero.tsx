"use client";
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
    const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/60 backdrop-brightness-75 z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-fade-in-up" data-ai-hint="futuristic cityscape">
          // A.G. VISUALS //
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-primary/90 md:text-xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
         Crafting Digital Realities: Video Editing & Motion Artistry for the Next Generation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button onClick={() => scrollTo('portfolio')} size="lg" className="w-full sm:w-auto" glow="accent">
            View Transmissions
          </Button>
          <Button onClick={() => scrollTo('contact')} size="lg" className="w-full sm:w-auto" variant="outline">
            Initiate Contact
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary"/>
        </div>
      </div>
    </section>
  );
}
