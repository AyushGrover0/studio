import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const thumbnails = [
  {
    src: 'https://placehold.co/600x338.png',
    alt: 'Black and Dark Space Photo YouTube Thumbnail',
    aiHint: 'space photo',
  },
  {
    src: 'https://placehold.co/600x338.png',
    alt: 'Valorant Epic Clutch thumbnail with Phoenix and Jett',
    aiHint: 'valorant clutch',
  },
  {
    src: 'https://placehold.co/600x338.png',
    alt: 'Anime edit thumbnail example 1',
    aiHint: 'anime edit thumbnail',
  },
  {
    src: 'https://placehold.co/600x338.png',
    alt: 'Gaming thumbnail example 2',
    aiHint: 'fortnite gaming thumbnail',
  },
  {
    src: 'https://placehold.co/600x338.png',
    alt: 'Anime edit thumbnail example 2',
    aiHint: 'naruto anime thumbnail',
  },
   {
    src: 'https://placehold.co/600x338.png',
    alt: 'Gaming thumbnail example 3',
    aiHint: 'apex legends thumbnail',
  },
];

export function Thumbnails() {
  return (
    <section id="thumbnails" className="py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Thumbnails That Convert</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A great video needs a great thumbnail. Here’s a look at how I create eye-catching visuals that grab attention and earn clicks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {thumbnails.map((thumbnail, index) => (
            <Card key={index} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-card">
              <CardContent className="p-0">
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  width={600}
                  height={338}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={thumbnail.aiHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
