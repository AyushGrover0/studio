import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const thumbnails = [
  {
    src: '/thumb1.png',
    alt: 'Custom thumbnail 1',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb2.png',
    alt: 'Custom thumbnail 2',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb3.png',
    alt: 'Custom thumbnail 3',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb4.png',
    alt: 'Custom thumbnail 4',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb5.png',
    alt: 'Custom thumbnail 5',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb6.png',
    alt: 'Custom thumbnail 6',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb7.jpg',
    alt: 'Custom thumbnail 7',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb8.jpg',
    alt: 'Custom thumbnail 8',
    aiHint: 'youtube thumbnail',
  },
  {
    src: '/thumb9.jpg',
    alt: 'Custom thumbnail 9',
    aiHint: 'youtube thumbnail',
  },
];

export function Thumbnails() {
  return (
    <section id="thumbnails" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Thumbnails That Convert</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A great video needs a great thumbnail. Here’s a look at how I create eye-catching visuals that grab attention and earn clicks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {thumbnails.map((thumbnail, index) => (
            <div key={index}>
              <Card className="glass-card overflow-hidden group border-2 border-transparent transition-all duration-300 shadow-lg neon-glow-primary">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
