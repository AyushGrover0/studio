import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemedContainer } from '../themed-container';

const portfolioItems: {
  title: string;
  description: string;
  tags: string[];
  youtubeVideoId?: string;
  videoUrl?: string;
}[] = [
  {
    title: 'Anime Music Video (AMV)',
    description: 'A dynamic AMV combining scenes from popular anime, synced perfectly to a high-energy track with custom transitions and effects.',
    youtubeVideoId: 'dJc8aDUZd_U',
    tags: ['Anime', 'AMV', 'VFX', 'Storytelling'],
  },
  {
    title: 'Short-Form Content',
    description: 'Engaging clips tailored for YouTube & Instagram.',
    youtubeVideoId: '5vtakMXA0NU',
    tags: ['Short-Form', 'Social Media', 'Transitions'],
  },
  {
    title: 'Custom Video Transitions',
    description: 'A showcase of seamless and creative video transitions, perfect for engaging storytelling and dynamic content.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    tags: ['Transitions', 'VFX', 'Creative Editing'],
  },
   {
    title: 'Valorant Gameplay Edit',
    description: 'Fast-paced Valorant gameplay with synced music and sharp cuts to highlight key moments and action sequences.',
    youtubeVideoId: 'HKpiFRvN1MQ',
    tags: ['Gaming', 'Montage', 'Fast-Paced'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Visions Brought to Life</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Here's a gallery of stories I've told, from fast-paced gaming action to artistic anime edits. Dive in and see what we can create together.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <ThemedContainer key={index} theme="primary">
              <Card className="glass-card overflow-hidden group border-2 border-transparent transition-all duration-300 shadow-lg neon-glow-primary">
                <CardHeader className="p-0">
                   <div className="aspect-video w-full bg-black">
                    {item.videoUrl ? (
                       <video
                        src={item.videoUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : item.youtubeVideoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : null}
                  </div>
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
            </ThemedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
