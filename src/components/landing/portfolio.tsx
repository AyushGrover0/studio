import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Gaming Montage: Valorant Ace',
    description: 'High-octane Valorant montage featuring seamless transitions, synced sound design, and impactful VFX to highlight clutch moments.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Gaming', 'Montage', 'VFX', 'Sound Design'],
    aiHint: "gaming montage action"
  },
  {
    title: '3D Anime Intro: "Cyber Ronin"',
    description: 'Custom 3D intro sequence created with Blender and After Effects, bringing a futuristic samurai character to life with cinematic flair.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['3D Intro', 'Blender', 'After Effects', 'Anime'],
    aiHint: "cyberpunk samurai 3d"
  },
  {
    title: 'Short-Form Content Compilation',
    description: 'A collection of engaging short-form content designed for maximum retention and impact on YouTube Shorts, TikTok, and Instagram Reels.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Short-form', 'Social Media', 'Viral Edits'],
    aiHint: "social media collage"
  },
  {
    title: 'Cinematic Visual Showcase',
    description: 'A visual journey combining live-action footage with 3D elements, showcasing advanced color grading and cinematic audio sync.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cinematic', '3D Visuals', 'Color Grading'],
    aiHint: "cinematic landscape fantasy"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A selection of projects that showcase my passion for anime-style visual storytelling.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-card">
              <CardHeader className="p-0">
                 <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.aiHint}
                  />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 px-6 pb-6">
                 {item.tags.map((tag, tagIndex) => (
                   <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                 ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
