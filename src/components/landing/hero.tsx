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
      className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      data-ai-hint="cinematic anime montage"
    >
      <div className="absolute inset-0 bg-background/60 backdrop-brightness-75" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-fade-in-up">
          🔥 Ayush Grover | Video Editor & Visual Artist
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-primary/90 md:text-xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          🎬 Crafting Edits That Speak Louder Than Words. I’m a passionate video editor and creative visual designer who turns raw clips into cinematic stories.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button onClick={() => scrollTo('portfolio')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            Explore My Work
          </Button>
          <Button onClick={() => scrollTo('contact')} size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
            Get In Touch
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary"/>
        </div>
      </div>
    </section>
  );
}
