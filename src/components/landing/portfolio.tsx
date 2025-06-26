import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Anime Music Video (AMV)',
    description: 'A dynamic AMV combining scenes from popular anime, synced perfectly to a high-energy track with custom transitions and effects.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://placehold.co/600x400.png',
    tags: ['Anime', 'AMV', 'VFX', 'Storytelling'],
  },
  {
    title: 'Gaming Montage: Valorant Ace',
    description: 'High-octane Valorant montage featuring seamless transitions, synced sound design, and impactful VFX to highlight clutch moments.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    posterUrl: 'https://placehold.co/600x400.png',
    tags: ['Gaming', 'Montage', 'VFX', 'Sound Design'],
  },
  {
    title: 'Short-Form Content Compilation',
    description: 'A collection of engaging short-form content designed for maximum retention and impact on YouTube Shorts, TikTok, and Instagram Reels.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    posterUrl: 'https://placehold.co/600x400.png',
    tags: ['Short-form', 'Social Media', 'Viral Edits'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Visions Brought to Life</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Here's a gallery of stories I've told, from fast-paced gaming action to artistic anime edits. Dive in and see what we can create together.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-card">
              <CardHeader className="p-0">
                 <video
                    key={item.videoUrl}
                    poster={item.posterUrl}
                    width="600"
                    height="400"
                    controls
                    className="w-full h-auto object-cover"
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
