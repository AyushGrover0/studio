import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Yuki "Spark" Tanaka',
    handle: 'Game Dev @ Cybergames',
    avatar: 'YT',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'male game developer',
    testimonial: "Incredible work! The trailer they edited for our game captured the exact high-energy, futuristic vibe we were going for. The turnaround was fast, and the communication was flawless. A true pro!",
  },
  {
    name: 'Akira "Ronin" Saito',
    handle: 'Filmmaker',
    avatar: 'AS',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'male filmmaker',
    testimonial: "I've never worked with an editor who understands pacing and emotional beats so intuitively. They transformed my raw footage into a cinematic masterpiece. Will definitely hire again for my next project.",
  },
  {
    name: 'Mei "Nova" Lin',
    handle: 'VTuber Sensation',
    avatar: 'ML',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'female vTuber avatar',
    testimonial: "My stream highlights have never looked better! The edits are sharp, funny, and perfectly timed. My audience loves the new montages. 10/10 would recommend!",
  },
];


export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">What Clients Are Saying</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Real feedback from collaborators and clients.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="glass-card h-full border border-border/30 shadow-lg flex flex-col justify-between">
                    <CardContent className="p-6">
                      <p className="text-lg italic text-foreground/90">"{testimonial.testimonial}"</p>
                      <div className="flex items-center gap-4 mt-6">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
