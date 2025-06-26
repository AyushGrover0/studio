import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Project Neo-Kyoto',
    description: 'A high-energy music video edit featuring fast cuts and vibrant visual effects, set in a futuristic cyberpunk city.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Music Video', 'Cyberpunk', 'VFX'],
    aiHint: "cyberpunk city anime"
  },
  {
    title: 'Galactic Drifters',
    description: 'Promotional trailer for an indie game, focusing on character introductions and epic space battles.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Game Trailer', 'Sci-Fi', 'Action'],
    aiHint: "space battle anime"
  },
  {
    title: 'Whispers of the Forest',
    description: 'A serene and emotional short film edit that captures the mystical atmosphere of an ancient, magical forest.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Short Film', 'Fantasy', 'Narrative'],
    aiHint: "enchanted forest anime"
  },
  {
    title: 'Urban Rivals',
    description: 'Dynamic showreel of street-style dance battles, emphasizing rhythm and high-impact motion graphics.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Showreel', 'Dance', 'Motion Graphics'],
    aiHint: "street dance anime"
  },
  {
    title: 'Kinetic Transitions Pack',
    description: 'A showcase of custom-made, high-energy transitions designed to add impact and flow to any video project.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Transitions', 'Motion Graphics', 'VFX'],
    aiHint: 'abstract kinetic art'
  },
  {
    title: 'The Alchemist\'s Dream',
    description: 'A short narrative piece employing seamless match cuts and subtle morphing transitions to tell a magical story.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Short Film', 'Narrative', 'Seamless Transitions'],
    aiHint: 'magical alchemy anime'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
